<script setup lang="ts">
type DownloadAppLink = {
    link: string,
    svgIcon: string,
    imgIcon: string,
    imgAlt: string,
};

defineProps({
    aClass: { type: String, required: true },
    divClass: { type: String, required: true },
});

const downloadAppLinks = useState<DownloadAppLink[]>('downloadAppLinks');
</script>

<template>
    <div>
        <a v-for="(app, index) in downloadAppLinks" :key="index" :href="app.link" :class="aClass">
            <div v-html="app.svgIcon" :class="divClass" />
        </a>
    </div>
</template>
