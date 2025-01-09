<script setup>
defineProps({
    heading: { type: String, required: true, },
    text: { type: String, required: true, },
});
</script>

<template>
    <UiSectionContainer>
        <UiSectionHeader :heading="heading" :text="text" />
        <slot />
    </UiSectionContainer>
</template>
