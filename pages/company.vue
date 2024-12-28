<script setup>
import { ref } from 'vue';
import { ChevronDown, X, Building2, Users2, BarChart2, Briefcase } from 'lucide-vue';

const questions = [
    'How does the hiring process work?',
    'What kind of support do you provide?',
    'How do payments work?',
];

const steps = ['Register', 'Add Project', 'Get applications', 'Select Team', 'Project Success'];

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

const projectIdeas = [
    'Get your branding done by teens',
    'Get your social media managed',
    'Get your content created',
];

const testimonials = [1, 2, 3];

const blogs = [1, 2, 3];

const socialLinks = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'];
</script>

<template>
    <div class="min-h-screen bg-[#1a2634] text-white">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-5xl font-bold mb-6">
                        Smart Talent for<br />smart<br />companies
                    </h1>
                    <p class="text-gray-400 mb-4">
                        Cost effective, Timely delivery, Innovative Ideas while you help the next generation
                    </p>
                    <p class="text-xl mb-8">Talented Teenagers for your company</p>
                    <button
                        class="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors mb-8">
                        Hire Teenlancer →
                    </button>
                    <div class="flex flex-wrap gap-3">
                        <span class="text-sm px-4 py-1 bg-gray-800 rounded-full">Blogs</span>
                        <span class="text-sm px-4 py-1 bg-gray-800 rounded-full">Social Media</span>
                        <span class="text-sm px-4 py-1 bg-gray-800 rounded-full">Video Creation</span>
                        <span class="text-sm px-4 py-1 bg-gray-800 rounded-full">Sales</span>
                    </div>
                </div>
                <div class="relative h-[600px]">
                    <img src="/placeholder.png" alt="App Screenshots" fill class="object-contain" />
                </div>
            </div>
        </div>

        <!-- Notification Toast -->
        <div
            class="fixed bottom-4 left-4 bg-emerald-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-4 max-w-md">
            <p class="flex-1">Sveltte selected Ritika to showcase their designer clothes in ₹3000</p>
            <button class="text-white hover:text-gray-200">
                <!-- <X class="w-5 h-5" /> -->
            </button>
        </div>

        <!-- Stats Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gray-800/50 rounded-2xl p-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="flex items-center gap-4" v-for="(stat, index) in stats" :key="index">
                        <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                            <!-- <component :is="stat.icon" class="w-6 h-6 text-pink-600" /> -->
                        </div>
                        <div>
                            <div class="text-2xl font-bold">{{ stat.value }}</div>
                            <div class="text-gray-400">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add more sections following the same approach -->
    </div>
</template>

<style scoped>
/* Add custom styles here */
</style>
