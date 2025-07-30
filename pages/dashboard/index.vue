<template>
    <!-- Identity Poster -->
    <div class="flex flex-col items-center px-6">
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 via-rose-200 to-green-200 mb-4"></div>
        <p class="text-center text-lg font-medium leading-snug text-sm italic text-gray-600">
            "Soy una persona conectada con el presente,<br /> resciliente y en constante crecimiento."<br />
        </p>
        <button class="text-sm text-green-600 mt-1 underline">Editar Perfil</button>
    </div>

    <!-- Active Projects -->
    <section class="px-6 mt-8">
        <h2 class="text-lg font-semibold mb-3">Áreas de Construcción</h2>
        <div v-for="project in projects" :key="project.name"
            class="flex justify-between items-center py-3 border-b border-gray-200">
            <div>
                <p class="text-base font-medium">{{ project.name }}</p>
                <p class="text-sm text-green-600">{{ project.category }}</p>
            </div>
            <button class="text-sm px-3 py-1 rounded-lg" :class="{
                'bg-green-100 text-green-700': project.status === 'stable',
                'bg-yellow-100 text-yellow-800': project.status === 'at risk',
                'bg-red-100 text-red-700': project.status === 'off track'
            }">
                {{ project.statusLabel }}
            </button>
        </div>
    </section>

    <!-- Insight Preview -->
    <section class="px-6 mt-8 mb-20">
        <h2 class="text-lg font-semibold mb-2">Último resumen</h2>
        <InsightTyper :speed="35" text="
            Al mirar lo que hiciste esta semana, algo empieza a quedar claro: estás aprendiendo a valorar las
            pequeñas decisiones que sostenés incluso cuando no todo sale como esperás.

            No se trata solo de cumplir rutinas o evitar errores, sino de mantenerte cerca de la intención que te
            mueve. Fuiste constante en algunas áreas, tropezaste en otras, pero incluso eso habla de alguien que
            está prestando atención.

            Lo que hiciste esta semana no es perfecto, pero deja un rastro. Uno que dice que, más allá del
            resultado, seguís queriendo avanzar con conciencia." />
    </section>
</template>

<script setup>
const projects = [
    {
        name: 'Alimentación',
        category: 'Comer mas sano',
        status: 'at risk',
        statusLabel: 'En riesgo',
    },
    {
        name: 'Entrenamiento',
        category: 'Gimnasio',
        status: 'stable',
        statusLabel: 'Estable',
    },
    {
        name: 'Atención Plena',
        category: 'Menos Tik Tok',
        status: 'off track',
        statusLabel: 'Desviado',
    },

];
</script>
