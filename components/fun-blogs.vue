<script setup lang="ts">
const siteBaseUrl = useRuntimeConfig().public.siteBaseUrl;

const blogs = [{
    link: "unleashing-freelancing-success-with-funngro-essential-qualities-and-powerful-tools",
    imgSrc: "https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2).png",
    imgSrcset: "https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-500.png 500w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-800.png 800w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-1080.png 1080w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-1600.png 1600w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2)-p-2000.png 2000w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/648318c96ee4b710d6a2d8fe_Untitled%20design%20(2).png 2245w",
    altAndh2: "Unleashing Freelancing Success with Funngro: Essential Qualities and Powerful Tools",
}, {
    link: "the-importance-of-early-work-experience-for-teens",
    imgSrc: "https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1).png",
    imgSrcset: "https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1)-p-500.png 500w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1)-p-800.png 800w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1)-p-1080.png 1080w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/647dacaa70e4e618fa531286_Untitled%20design%20(1).png 1403w",
    altAndh2: "The Importance of Early Work Experience for Teens",
}, {
    link: "why-should-your-kids-watch-shark-tank-india",
    imgSrc: "https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F.png",
    imgSrcset: "https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F-p-500.png 500w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F-p-800.png 800w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F-p-1080.png 1080w, https://cdn.prod.website-files.com/63902f19aa174ec491ff894d/6399d319c27c3dd3a389febf_Why%20should%20your%20kids%20watch%20Shark%20Tank%20India%3F.png 1482w",
    altAndh2: "Why teens should watch Shark Tank India?",
}];
</script>

<template>
    <UiSectionContainer>
        <div class="flex">
            <UiSectionHeader class="w-[20%] -top" heading="Fun blogs"
                text="An investment in knowledge pays the best interest, read on." />
            <div class="w-dyn-list w-[70%]">
                <div role="list" class="fr ">
                    <div v-for="(blog, index) in blogs" :key="index" role="listitem">
                        <a :href="`${siteBaseUrl}}/blog/${blog.link}`"
                            class="w-full relative max-w-full inline-block text-inherit">
                            <img :alt="blog.altAndh2" loading="lazy" :src="blog.imgSrc"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 67vw, (max-width: 991px) 32vw, 24vw"
                                :srcset="blog.imgSrcset" class="rounded-lg max-w-full inline-block align-middle">
                            <div
                                class="bg-[#1f2e40] rounded-lg flex-col items-start w-[95%] py-[.875rem] px-5 flex relative -top-6 left-6">
                                <h2 class=" mb-[.625rem] text-xl font-semibold">{{ blog.altAndh2 }}
                                </h2>
                                <div
                                    class="flex gap-4 text-[#07ab67] bg-[#0000] justify-center items-center p-0 text-center font-semibold">
                                    <div>Read More</div>
                                    <div class=" w-4 h-[1.2rem]">
                                        <svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Arrow Right</title>
                                            <polygon
                                                points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">
                                            </polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div role="navigation" aria-label="List" class="flex-wrap justify-center flex">
                    <a :href="`${siteBaseUrl}/teen?173f1eaa_page=2`" aria-label="Next Page"
                        class="text-white bg-[#1f2e40] rounded-full justify-center w-12 h-12 p-4 flex mx-[10px] text-sm">
                        <div>
                            <svg width="100%" height="100%" viewBox="0 0 7 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L6.70711 6L0.853553 11.8536C0.658291 12.0488 0.341709 12.0488 0.146447 11.8536C-0.0488155 11.6583 -0.0488155 11.3417 0.146447 11.1464L5.29289 6L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="margin-top margin-medium w-[10%] min-w-24">
                <div class="button-container center">
                    <a :href="`${siteBaseUrl}/blog`"
                        class="font-semibold text-white bg-[#47c480] flex gap-4 rounded-[50px] justify-center items-center py-3 px-6 text-center">
                        <div>Read More</div>
                        <div class="w-4 h-[1.2rem]">
                            <svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Arrow Right</title>
                                <polygon
                                    points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">
                                </polygon>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </UiSectionContainer>
</template>

<style>
.fr {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
}

@media screen and (max-width: 991px) {
    .fr {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 767px) {
    .fr {
        grid-template-columns: 1fr;
    }
}
</style>