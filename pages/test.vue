<!-- <script setup>
const logos = [
    { id: 1, name: 'Company 1', image: '/placeholder.svg?height=100&width=100' },
    { id: 2, name: 'Company 2', image: '/placeholder.svg?height=100&width=100' },
    { id: 3, name: 'Company 3', image: '/placeholder.svg?height=100&width=100' },
    { id: 4, name: 'Company 4', image: '/placeholder.svg?height=100&width=100' },
    { id: 5, name: 'Company 5', image: '/placeholder.svg?height=100&width=100' },
    { id: 6, name: 'Company 6', image: '/placeholder.svg?height=100&width=100' },
    { id: 7, name: 'Company 7', image: '/placeholder.svg?height=100&width=100' },
];

const sliderRef = ref(null);
const scrollPosition = ref(0);
const logoWidth = 300;
const gap = 16;
const visibleWidth = computed(() => logos.length * (logoWidth + gap));
const repeatedLogos = computed(() => [...logos, ...logos]);

const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? logoWidth + gap : -(logoWidth + gap);
    let newPosition = scrollPosition.value + scrollAmount;

    if (newPosition > 0) {
        newPosition = -visibleWidth.value + scrollAmount;
    } else if (newPosition <= -visibleWidth.value) {
        newPosition = scrollAmount;
    }

    scrollPosition.value = newPosition;
};

onMounted(() => {
    if (sliderRef.value) {
        sliderRef.value.style.transform = `translateX(${scrollPosition.value}px)`;
    }
});
</script>

<template>
    <div class="relative max-w-5xl mx-auto overflow-hidden py-8">
        <div ref="sliderRef" class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(${scrollPosition}px)`, width: `${visibleWidth * 2}px` }">
            <div v-for="(logo, index) in repeatedLogos" :key="`${logo.id}-${index}`"
                class="flex-shrink-0 w-[120px] h-[120px] mx-2">
                <img :src="logo.image" :alt="logo.name" class="rounded-full object-cover" width="100" height="100" />
                <div class="text-white">{{ logo.id }}</div>
            </div>
        </div>

        <button @click="scroll('left')"
            class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
            aria-label="Scroll left">
            <ChevronLeft class="w-6 h-6" />
        </button>
        <button @click="scroll('right')"
            class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
            aria-label="Scroll right">
            <ChevronRight class="w-6 h-6" />
        </button>
    </div>
</template> -->


<!-- <template>
    <div class="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div class="relative overflow-hidden rounded-lg">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
                <div v-for="(slide, index) in slides" :key="slide.id" class="w-[50%] flex-shrink-0 px-2">
                    <img src="/placeholder.png" :alt="slide.title" class="object-cover w-full h-auto rounded-lg aspect-video"
                        :loading="currentSlide === index ? 'eager' : 'lazy'" />
                        <div class="text-red-900">{{ index + 1 }}</div>
                </div>
            </div>
        </div>

        <button @click="previousSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            aria-label="Previous slide">
            <ChevronLeft class="w-6 h-6" />
        </button>
        <button @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
            aria-label="Next slide">
            <ChevronRight class="w-6 h-6" />
        </button>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button v-for="(_, index) in Math.ceil(slides.length / 2)" :key="index" @click="setCurrentSlide(index)"
                :class="[
                    'w-2 h-2 rounded-full transition-colors',
                    currentSlide === index ? 'bg-white' : 'bg-white/50',
                ]" :aria-label="`Go to slide ${index + 1}`" />
        </div>
    </div>
</template>

<script setup lang="ts">
const slides = ref([
    {
        id: 1,
        title: 'Slide 1',
        image: '/placeholder.svg?height=600&width=800',
    },
    {
        id: 2,
        title: 'Slide 2',
        image: '/placeholder.svg?height=600&width=800',
    },
    {
        id: 3,
        title: 'Slide 3',
        image: '/placeholder.svg?height=600&width=800',
    },
    {
        id: 4,
        title: 'Slide 4',
        image: '/placeholder.svg?height=600&width=800',
    },
]);

const currentSlide = ref(0);

const previousSlide = () => {
    currentSlide.value =
        currentSlide.value === 0
            ? Math.ceil(slides.value.length / 2) - 1
            : currentSlide.value - 1;
};

const nextSlide = () => {
    currentSlide.value =
        currentSlide.value === Math.ceil(slides.value.length / 2) - 1
            ? 0
            : currentSlide.value + 1;
};

const setCurrentSlide = (index: number) => {
    currentSlide.value = index;
};
</script> -->



<template>
    <div>
        <div v-for="(item, index) in items" :key="index" class="item">
            <!-- Render each item -->
            <div>{{ item }}</div>

            <!-- Insert a component only in between items -->
            <div v-if="index < items.length - 1">sss</div>
        </div>
    </div>
</template>

<script setup>
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
</script>
