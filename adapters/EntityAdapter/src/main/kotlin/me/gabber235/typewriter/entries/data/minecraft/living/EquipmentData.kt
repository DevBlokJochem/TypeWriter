package me.gabber235.typewriter.entries.data.minecraft.living

import com.github.retrooper.packetevents.protocol.item.ItemStack
import com.github.retrooper.packetevents.protocol.player.EquipmentSlot
import me.gabber235.typewriter.adapters.Colors
import me.gabber235.typewriter.adapters.Entry
import me.gabber235.typewriter.adapters.Tags
import me.gabber235.typewriter.entry.entity.SinglePropertyCollectorSupplier
import me.gabber235.typewriter.entry.entries.EntityProperty
import me.gabber235.typewriter.entry.entries.LivingEntityData
import me.gabber235.typewriter.extensions.packetevents.toPacketItem
import me.gabber235.typewriter.utils.Item
import me.tofaa.entitylib.wrapper.WrapperEntity
import me.tofaa.entitylib.wrapper.WrapperLivingEntity
import org.bukkit.entity.Player
import java.util.*
import kotlin.reflect.KClass

@Entry("equipment_data", "Equipment data", Colors.RED, "game-icons:chest-armor")
@Tags("equipment_data")
class EquipmentData(
    override val id: String = "",
    override val name: String = "",
    val equipmentSlot: EquipmentSlot = EquipmentSlot.MAIN_HAND,
    val item: Item = Item.Empty,
    override val priorityOverride: Optional<Int>,
) : LivingEntityData<EquipmentProperty> {
    override fun type(): KClass<EquipmentProperty> = EquipmentProperty::class

    override fun build(player: Player): EquipmentProperty =
        EquipmentProperty(equipmentSlot, item.build(player).toPacketItem())
}

data class EquipmentProperty(val equipmentSlot: EquipmentSlot, val item: ItemStack) : EntityProperty {
    companion object : SinglePropertyCollectorSupplier<EquipmentProperty>(EquipmentProperty::class)
}

fun org.bukkit.inventory.ItemStack.toProperty(equipmentSlot: EquipmentSlot) =
    EquipmentProperty(equipmentSlot, this.toPacketItem())

fun applyEquipmentData(entity: WrapperEntity, property: EquipmentProperty) {
    if (entity !is WrapperLivingEntity) return
    entity.equipment.setItem(property.equipmentSlot, property.item)
}