<script setup lang="ts">
type MemberProfile = {
    name: string;
    img: string;
    nich: string;
    pHtml: string;
};

defineProps<{
    profiles: MemberProfile[];
    heading: string;
    text: string;
}>();
</script>

<template>
    <ScrollContainer :object="profiles" class="!bg-[#111e2c]" heading="Happy Funngro Members"
        text="Hundreds of companies have worked with Talented Teens on Funngro. Read on for their views">
        <ScrollCard v-for="(profile, index) in profiles" :key="index"
            :aria-label="`${index + 1} of ${profiles.length}`">
            <div class="flex gap-4 items-start mb-5">
                <img :src="profile.img" loading="lazy" class="max-w-24 inline-block" :alt="profile.name">
                <div class="flex flex-col gap-[.4rem] items-start">
                    <p class="text-[#07ab67] font-semibold">
                        {{ profile.name }}
                    </p>
                    <p class="text-sm">{{ profile.nich }}</p>
                </div>
            </div>
            <p v-html="profile.pHtml" class="text-[#dfdfdf] text-left" />
        </ScrollCard>
    </ScrollContainer>
</template>
