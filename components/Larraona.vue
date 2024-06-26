<template>
    <div class="py-8 px-4">
        <h1 class="text-3xl font-bold mb-3 border-b-2">LARRAONA</h1>

        <div class="mb-6">
            <Input v-model="searchQuery" type="text" placeholder="Buscar por nombre o grado"
                class="w-full p-2 border rounded-md" />
        </div>

        <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Accordion type="single" collapsible v-for="sector in filteredSectors" :key="sector.sector">
                <AccordionItem class="p-4" :value="`${sector.sector}`">
                    <AccordionTrigger>
                        <h2 class="text-xl font-semibold">Sector {{ sector.sector }}</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <img :src="getImagePath(sector.image)" alt="Sector Image" class="w-full h-auto rounded-md mb-4">
                        <div class="space-y-4">
                            <Accordion type="single" collapsible v-for="bloque in sector.bloques" :key="bloque.block">
                                <AccordionItem :value="`${sector.sector}-${bloque.block}`">
                                    <AccordionTrigger>
                                        <h3 class="text-lg font-semibold">{{ bloque.block }} - {{ bloque.name }}</h3>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div class="mb-2">
                                            <img :src="bloque.preview ? getImagePath(bloque.preview) : getImagePath('logo.png')"
                                                alt="Block Preview" class="w-full h-auto rounded-md mb-4">

                                        </div>
                                        <div>
                                            <p class="text-sm text-gray-600">Grado: {{ bloque.grade }}</p>
                                            <p class="text-sm text-gray-600">Sector: {{ sector.sector }}</p>
                                        </div>
                                        <a :href="bloque.video" class="block text-blue-500 mt-2">Beta</a>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AccordionContent>

                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { larraona } from '../utils/index';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';

const larraonaa = ref([]);
const searchQuery = ref('');

onMounted(() => {
    larraonaa.value = larraona;
});

// Function to get correct image path
function getImagePath(image: string) {
    return `/images/${image}`;
}

const filteredSectors = computed(() => {
    if (!searchQuery.value) {
        return larraonaa.value;
    }

    const searchLower = searchQuery.value.toLowerCase();
    return larraonaa.value.map(sector => {
        if (!sector.bloques) {
            return null;
        }

        const filteredBloques = sector.bloques.filter(bloque =>
            bloque.name.toLowerCase().includes(searchLower) ||
            bloque.grade.toLowerCase().includes(searchLower)
        );

        if (filteredBloques.length > 0) {
            return {
                ...sector,
                bloques: filteredBloques
            };
        }

        return null;
    }).filter(Boolean);
});
</script>
