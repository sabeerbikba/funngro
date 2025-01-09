<script setup lang="ts">
type MetaTags = {
    title: string,
    content: string,
};

const metaTags: MetaTags = {
    title: 'Funngro Teenlancer – Parent assisted experiential learning for Teens',
    content: 'Experiential learning, Certificates, Financial learning, Financial independence. Learning on the job while understanding value of money by earning real income.'
};

useHead({
    title: metaTags.title,
    meta: [
        { name: "description", content: metaTags.content },
        { property: "og:title", content: metaTags.title, },
        { property: "og:description", content: metaTags.content, },
        { property: "twitter:title", content: metaTags.title, },
        { property: "twitter:description", content: metaTags.content, },
        { property: "og:type", content: "website", },
        { name: "twitter:card", content: "summary_large_image", }
    ]
});

const stats = [
    { number: '3,500+', label: 'Active Teenlancers' },
    { number: '12', label: 'Categories' },
    { number: '30,00,000+', label: 'Earned by Teens' },
    { number: '1000+', label: 'Live Projects' },
];

const reasonsToWork = [{
    icon: 'Users',
    title: 'Early Career',
    description: 'Early understanding of the professional world',
}, {
    icon: 'Briefcase',
    title: 'Financial Independence',
    description: 'Learn to manage finances early',
}, {
    icon: 'GraduationCap',
    title: 'Learning Experience',
    description: 'Practical learning beyond textbooks',
}, {
    icon: 'Trophy',
    title: 'Build Portfolio',
    description: 'Create impressive work portfolio',
}];

const categories = [
    'Digital Marketing',
    'Content',
    'Design',
    'Social Media',
    'Data Entry',
    'Research',
    'Sales',
    'Customer Support',
    'Teaching',
    'Video Editing',
    'Writing',
    'Testing',
];

const socialLinks = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'];
</script>

<template>
    <div class="min-h-screen bg-[#1a2634] text-white">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-5xl font-bold mb-6">TEENLANCERS</h1>
                    <p class="text-xl text-gray-400 mb-8">Your gateway to the professional world</p>
                    <div class="flex gap-4">
                        <NuxtLink to="#" class="bg-black rounded-lg p-2 hover:opacity-90">
                            <img src="/placeholder.png" alt="Play Store" width="120" height="40" />
                        </NuxtLink>
                        <NuxtLink to="#" class="bg-black rounded-lg p-2 hover:opacity-90">
                            <img src="/placeholder.png" alt="App Store" width="120" height="40" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="relative h-[500px]">
                    <img src="/placeholder.png" alt="App Screenshots" fill class="object-contain" />
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="(stat, index) in stats" :key="index" class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center">
                        <span class="text-emerald-500">{{ stat.number }}</span>
                    </div>
                    <div class="text-sm text-gray-400">{{ stat.label }}</div>
                </div>
            </div>
        </div>

        <!-- Why Work Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 class="text-3xl font-bold mb-12">Why should your Teenager work?</h2>
            <div class="grid md:grid-cols-4 gap-8">
                <div v-for="(item, index) in reasonsToWork" :key="index" class="bg-gray-800/50 rounded-lg p-6">
                    <div class="w-12 h-12 bg-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
                        <!-- <component :is="item.icon" class="text-emerald-500" size="24" stroke-width="2"
                            color="currentColor" /> -->
                    </div>
                    <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                    <p class="text-gray-400 text-sm">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 class="text-3xl font-bold mb-12">Why should your Teenager work?</h2>
            <div class="grid md:grid-cols-4 gap-8">
                <div v-for="(item, index) in reasonsToWork" :key="index" class="bg-gray-800/50 rounded-lg p-6">
                    <div class="w-12 h-12 bg-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
                        <component :is="item.icon" class="text-emerald-500" size="24" stroke-width="2"
                            color="currentColor" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                    <p class="text-gray-400 text-sm">{{ item.description }}</p>
                </div>
            </div>
        </div> -->


        <!-- Project Categories -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 class="text-3xl font-bold text-center mb-12">Projects to suit Teenager's Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div v-for="(category, index) in categories" :key="index"
                    class="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors">
                    <div class="w-10 h-10 bg-emerald-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <!-- <Download class="w-5 h-5 text-emerald-500" color="currentColor" /> -->
                        <!-- <Download class="text-emerald-500" size="24" stroke-width="2" -->
                        <!-- color="currentColor" /> -->
                    </div>
                    <div class="text-sm">{{ category }}</div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="border-t border-gray-800 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col items-center gap-8">
                    <img src="/placeholder.png" alt="Funngro Logo" width="120" height="40" class="h-8 w-auto" />
                    <div class="flex gap-6">
                        <NuxtLink v-for="(social, index) in socialLinks" :key="index" :to="`#${social}`"
                            class="text-gray-400 hover:text-white">
                            {{ social }}
                        </NuxtLink>
                    </div>
                    <p class="text-gray-400 text-center">©All Copyrights reserved 2024 by FUNNGRO</p>
                </div>
            </div>
        </footer>
    </div>
</template>
