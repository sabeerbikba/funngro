<script setup lang="ts">
const props = defineProps<{
    object: any;
    heading: string,
    text: string,
}>();

const objectVal = ref([...props.object]);
const currentSlideFunngroMembers = ref(0);

const funngroMemberPreviousSlide = () => {
    currentSlideFunngroMembers.value =
        currentSlideFunngroMembers.value === 0
            ? Math.ceil(objectVal.value.length / 2) - 1
            : currentSlideFunngroMembers.value - 1;
};

const funngroMemberNextSlide = () => {
    currentSlideFunngroMembers.value =
        currentSlideFunngroMembers.value === Math.ceil(objectVal.value.length / 2) - 1
            ? 0
            : currentSlideFunngroMembers.value + 1;
};
</script>

<template>
    <UiSectionContainer class="bg-[#1f2e40]">
        <div class="flex">
            <UiSectionHeader class="w-[20%]" :heading="heading" :text="text" />
            <div data-delay="3000" data-animation="slide"
                class="w-[80%] h-auto pb-20 overflow-hidden text-center clear-both relative testimonial-slider w-slider flex "
                data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false"
                data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region"
                aria-label="carousel">
                <div class="max-lg:w-[60%] w-1/3 overflow-visible z-[1] whitespace-nowrap h-full relative left-0 right-0 min-h-[340px] transition-transform duration-500 ease-in-out"
                    id="w-slider-mask-2" :style="{ transform: `translateX(-${currentSlideFunngroMembers * 50}%)` }">
                    <slot />
                </div>
                <div v-for="(arrow, index) in [{
                    class: 'top-[23rem] -left-16',
                    label: 'previous slide',
                    imgSrc: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d71afe76c7e7bc767_Vector%2058.svg',
                    alt: 'Arrow Left',
                    click: funngroMemberPreviousSlide,
                }, {
                    class: 'top-[23.5rem] -right-16',
                    label: 'next slide',
                    imgSrc: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d1279b312ac061558_Vector%2057.svg',
                    alt: 'Arrow Right',
                    click: funngroMemberNextSlide,
                }]" :class="[arrow.class, 'cursor-pointer text-white touch-none select-none w-[80px] m-auto text-[40px] absolute inset-0 overflow-hidden']"
                    :key="index" role="button" tabindex="0" aria-controls="w-slider-mask-2" :aria-label="arrow.label"
                    @click="arrow.click()">
                    <img :src="arrow.imgSrc" loading="lazy" :alt="arrow.alt">
                </div>
            </div>
        </div>
    </UiSectionContainer>
</template>
