package com.typewritermc.basic.entries.dialogue.messengers.random

import com.typewritermc.basic.entries.dialogue.RandomSpokenDialogueEntry
import com.typewritermc.core.extension.annotations.Messenger
import com.typewritermc.engine.paper.entry.dialogue.DialogueMessenger
import com.typewritermc.engine.paper.entry.dialogue.MessengerFilter
import com.typewritermc.engine.paper.entry.dialogue.MessengerState
import com.typewritermc.engine.paper.entry.entries.DialogueEntry
import com.typewritermc.engine.paper.entry.entries.get
import com.typewritermc.engine.paper.extensions.placeholderapi.parsePlaceholders
import com.typewritermc.engine.paper.utils.isFloodgate
import com.typewritermc.engine.paper.utils.legacy
import org.bukkit.entity.Player

@Deprecated("Use RandomVariable entry with a normal SpokenDialogue instead")
@Messenger(RandomSpokenDialogueEntry::class, priority = 5)
class BedrockRandomSpokenDialogueDialogueMessenger(player: Player, entry: RandomSpokenDialogueEntry) :
    DialogueMessenger<RandomSpokenDialogueEntry>(player, entry) {

    companion object : MessengerFilter {
        override fun filter(player: Player, entry: DialogueEntry): Boolean = player.isFloodgate
    }

    override fun init() {
        super.init()
        val message = entry.messages.randomOrNull() ?: return
        org.geysermc.floodgate.api.FloodgateApi.getInstance().sendForm(
            player.uniqueId,
            org.geysermc.cumulus.form.SimpleForm.builder()
                .title("<bold>${entry.speakerDisplayName.get(player).parsePlaceholders(player)}</bold>".legacy())
                .content("${message.parsePlaceholders(player).legacy()}\n\n")
                .button("Continue")
                .closedOrInvalidResultHandler { _, _ ->
                    state = MessengerState.CANCELLED
                }
                .validResultHandler { _, _ ->
                    state = MessengerState.FINISHED
                }
        )
    }
}