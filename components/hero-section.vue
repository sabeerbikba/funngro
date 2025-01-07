<script setup lang="ts">
defineProps({
    heading: { type: String, required: true },
    paraHtml: { type: String, required: true },
});
</script>

<template>
    <UiSectionContainer>
        <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class=" max-w-[27rem] leading-[1.1]">
                <h1 class="text-[3.437rem] font-bold mb-6">{{ heading }}</h1>
                <p v-html="paraHtml" class="text-[#dfdfdf] mb-8" />
                <slot />
            </div>
            <div class="relative h-[400px]">
                <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png"
                    loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 44vw" srcset="
              https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w,
              https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png       586w
            " alt="Funngro App" class="h-[130%]" />
            </div>
        </div>
    </UiSectionContainer>
</template>