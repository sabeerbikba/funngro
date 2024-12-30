<script setup>
defineProps({
    heading: { type: String, required: true, },
    text: { type: String, required: true, },
});
</script>

<template>
    <div class="!mx-0 !mt-0 max-md:mb-6 max-lg:mx-0 max-lg:mt-0 max-lg:mb-10 m-12">
        <div class="text-center">
            <div class="mb-4">
                <h2 class="text-[#d8e0e9]">{{ heading }}</h2>
                <p class="text-left text-[#dfdfdf]">{{ text }}</p>
            </div>
        </div>
    </div>
</template>
