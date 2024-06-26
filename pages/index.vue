<template>
    <div class="container mx-auto p-4">
        <div class="flex justify-center mb-4">
            <img src="/public/images/logo.png" class="object-center h-24" />
        </div>
        <ul class="space-y-4">
            <li>
                <NuxtLink to="/larraona"
                    class="block bg-white border border-gray-300 p-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                    <div class="flex items-center justify-between">
                        <span class="text-xl font-semibold text-gray-800">Larraona</span>
                        <span class="text-gray-500">Ver más <span class="ml-1">&#8594;</span></span>
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/albarracin"
                    class="block bg-white border border-gray-300 p-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                    <div class="flex items-center justify-between">
                        <span class="text-xl font-semibold text-gray-800">Albarracín</span>
                        <span class="text-gray-500">Ver más <span class="ml-1">&#8594;</span></span>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
</script>
