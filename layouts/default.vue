<template>
    <div class="min-h-screen flex flex-col bg-[#f7faf8] text-gray-800">
        <!-- Header -->
        <header class="text-center mt-6 mb-4">
            <h1 class="text-xl font-semibold">Germán</h1>
        </header>

        <main class="flex-grow px-4 pb-[88px]">
            <!-- Ajuste: el pb evita que el contenido quede debajo del footer -->
            <NuxtPage />
        </main>

        <!-- Bottom Navigation -->
        <nav class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around py-3 text-green-700">
            <NuxtLink to="/dashboard" class="flex flex-col items-center text-sm">
                <span>🏠</span>
                Home
            </NuxtLink>
            <NuxtLink to="/markers" class="flex flex-col items-center text-sm">
                <span>📍</span>
                Marcadores
            </NuxtLink>
            <NuxtLink to="/insights" class="flex flex-col items-center text-sm">
                <span>📊</span>
                Insights
            </NuxtLink>
            <NuxtLink to="/dashboard" class="flex flex-col items-center text-sm">
                <span>⚙️</span>
                Configuración
            </NuxtLink>
        </nav>
    </div>
</template>