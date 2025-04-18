package com.typewritermc.engine.paper.entry.entries

import com.google.gson.Gson
import com.typewritermc.core.entries.Ref
import com.typewritermc.core.extension.annotations.Tags
import com.typewritermc.core.utils.point.Generic
import com.typewritermc.engine.paper.entry.StaticEntry
import org.bukkit.entity.Player
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import org.koin.core.qualifier.named
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract
import kotlin.reflect.KClass

@Tags("variable")
interface VariableEntry : StaticEntry {
    fun <T : Any> get(context: VarContext<T>): T
}

data class VarContext<T : Any>(
    val player: Player,
    val data: Generic,
    val klass: KClass<T>,
) : KoinComponent {
    private val gson: Gson by inject(named("dataSerializer"))

    fun <T> getData(klass: Class<T>): T? {
        return gson.fromJson(data.data, klass)
    }

}

inline fun <reified T> VarContext<*>.getData(): T? {
    return getData(T::class.java)
}

sealed interface Var<T : Any> {
    fun get(player: Player): T
}

@OptIn(ExperimentalContracts::class)
fun <T : Any> Var<T>.get(player: Player?): T? {
    contract {
        returns(null) implies (player == null)
    }
    if (this is ConstVar<*>) return this.value as T
    if (player == null) return null
    return get(player)
}

class ConstVar<T : Any>(val value: T) : Var<T> {
    override fun get(player: Player): T = value
}

class BackedVar<T : Any>(
    val ref: Ref<VariableEntry>,
    val data: Generic,
    val klass: KClass<T>,
) : Var<T> {
    override fun get(player: Player): T {
        val entry = ref.get() ?: throw IllegalStateException("Could not find variable entry, $ref")
        return entry.get(VarContext(player, data, klass))
    }
}

class MappedVar<T : Any>(
    private val variable:Var<T>,
    private val mapper: (Player, T) -> T,
) : Var<T> {
    override fun get(player: Player): T {
        return mapper(player, variable.get(player))
    }
}

fun <T : Any> Var<T>.map(mapper: (Player, T) -> T): Var<T> = MappedVar(this, mapper)