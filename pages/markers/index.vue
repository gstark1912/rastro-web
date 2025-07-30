<template>
    <div class="min-h-screen flex flex-col bg-[#f7faf8] text-gray-800 px-6 pt-6 pb-24">
        <!-- Header -->
        <header class="flex items-center mb-6">
            <NuxtLink to="/dashboard" class="text-2xl mr-4">←</NuxtLink>
            <h1 class="text-xl font-semibold">Registro</h1>
        </header>

        <!-- Sección Diario -->
        <section>
            <h2 class="text-lg font-semibold mb-4">Diario</h2>

            <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span>¿Consumiste alcohol hoy?</span>
                <input type="checkbox" v-model="form.alcohol" class="accent-green-600 w-5 h-5" />
            </div>

            <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span>¿Meditaste hoy?</span>
                <input type="checkbox" v-model="form.meditacion" class="accent-green-600 w-5 h-5" />
            </div>
            <button @click="console.log('click ok')" class="bg-blue-500 text-white px-4 py-2 mt-4">
                Test click
            </button>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Comidas 'malas'</span>
                <div class="relative flex items-center w-fit">
                    <button type="button" @click="form.comidasSaludables = Math.max(0, form.comidasSaludables - 1)"
                        class="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-800" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                    </button>

                    <input type="text" :value="form.comidasSaludables" readonly
                        class="mx-2 w-8 text-center bg-transparent text-sm text-gray-800 focus:outline-none" />

                    <button type="button" @click="form.comidasSaludables++"
                        class="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-800" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span>Porciones extra</span>
                <div class="relative flex items-center w-fit">
                    <button type="button" @click="form.porcionesExtra > 0 && form.porcionesExtra--"
                        class="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-800" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                    </button>

                    <input type="text" :value="form.porcionesExtra" readonly
                        class="mx-2 w-8 text-center bg-transparent text-sm text-gray-800 focus:outline-none" />

                    <button type="button" @click="form.porcionesExtra++"
                        class="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-800" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Sección Semanal -->
        <section class="mt-8">
            <h2 class="text-lg font-semibold mb-4">Semanal</h2>

            <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span>¿Probaste una receta nueva?</span>
                <input type="checkbox" v-model="form.recetaNueva" class="accent-green-600 w-5 h-5" />
            </div>

            <div class="flex justify-between items-center py-3 border-b border-gray-200">
                <span>¿Fuiste a la verdulería?</span>
                <input type="checkbox" v-model="form.verduleria" class="accent-green-600 w-5 h-5" />
            </div>
        </section>

        <!-- Botón Guardar -->
        <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
            <button @click="guardarRegistro"
                class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-sm">
                Guardar registro
            </button>
        </div>
    </div>
</template>

<script setup>
const form = reactive({
    alcohol: false,
    meditacion: false,
    comidasSaludables: 0,
    porcionesExtra: 0,
    recetaNueva: false,
    verduleria: false
})

const guardarRegistro = () => {
    console.log('Registro guardado:', { ...form })
    alert('Registro guardado')
}
</script>
