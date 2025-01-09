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

<!-- 
<template>
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

<!-- 
<template>
    <div class="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div class="relative overflow-hidden rounded-lg">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 50}%)` }">
                <div v-for="(slide, index) in slides" :key="slide.id" class="w-[50%] flex-shrink-0 px-2">
                    <img src="/placeholder.png" :alt="slide.title"
                        class="object-cover w-full h-auto rounded-lg aspect-video"
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
let autoScrollInterval: ReturnType<typeof setInterval>;

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

const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds
};

const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
};

onMounted(() => {
    startAutoScroll();
});

onUnmounted(() => {
    stopAutoScroll();
});

</script> -->

<!-- <template>
    <div>
        <div v-for="(item, index) in items" :key="index" class="item">
            <div>{{ item }}</div>

            <div v-if="index < items.length - 1">sss</div>
        </div>
    </div>
</template>

<script setup>
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
</script> -->

<!-- 
<template>
    <div>
        <div v-for="(item, index) in accordionItems" :key="index" class="fs_accordion-1_item">
            <div :aria-expanded="item.expanded" tabindex="0" role="button" class="fs_accordion-1_header">
                <div class="text-xl">{{ item.title }}</div>
                <div class="cursor-pointer">
                    <div class="faq6_icon w-embed" :style="item.iconStyle">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--heroicons" width="100%" height="100%"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div :aria-labelledby="`accordion-header-${index}`" class="fs_accordion-1_content"
                style="width: 100%; display: block;">
                <div class="fs_accordion-1_body">
                    <p class="fs_accordion-1_paragraph">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const accordionItems = ref([
    {
        title: "How can I start earning money?",
        content: "Simple 5 step process – (1) download funngro and register for earning, (2) complete your evaluation project, (3) apply to projects of your interest, (4) submit completed projects, (5) Get paid!",
        expanded: false,
        iconStyle: "transform: rotateZ(45deg);"
    },
    {
        title: "Why should Teens work?",
        content: "Start early, get independence, learn while you earn but most importantly get real-world experience. Work on projects of your interest and find your real passion before making the final career decision.",
        expanded: false,
        iconStyle: "transform: rotateZ(45deg);"
    },
    {
        title: "What kind of work can I do?",
        content: "At this time we have 12 categories in which Teens can work as listed on our home page. Do let us know if those do not cover your needs.",
        expanded: false,
        iconStyle: "transform: rotateZ(45deg);"
    }
]);
</script> -->

<template>
    ss
</template>