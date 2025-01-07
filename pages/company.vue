<script setup lang="ts">
const projectIdeas = [{
    work: "Build your brand",
    price: "₹2000",
    about: "Get your logos, brochure designed professionally - 5 Samples",
}, {
    work: "Cutomize your website",
    price: "₹5000-₹15000",
    about: "Get a professional website designed to increase business growth.",
}, {
    work: "Reach more customers",
    price: "₹5000",
    about: "Get Teenlancers to manage your social media handles",
}, {
    work: "Share your message",
    price: "₹1500",
    about: "Voice Over in 15 different languages",
}, {
    work: "Engage your audience",
    price: "₹2500",
    about: "Create an explainer video for your company to get new customers",
}, {
    work: "Boost your growth",
    price: "₹5000-₹10000",
    about: "Get 100s of Teenlancers like your Insta/Youtube posts, Increase your reach through Toffee projects.",
}, {
    work: "Showcase your story",
    price: "₹500-₹800",
    about: "Hire best content writers to write blogs, articles and more",
}];

const funngroMembers = [{
    name: "Darsh Golecha",
    img: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02f978d27935c1ae29633_Darsh%20Golecha.png",
    nich: "Monech",
    pHtml: `‍Happy customer as Teens work is excellent. It's cost effective with great quality. Have used their graphic designing, Social media and Research Talent.`,
}, {
    name: "Ravishankar",
    img: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a03d8184d8d4fd87a16e61_Ravishankar%20Gopalan.png",
    nich: "Execute Partners & Consultants LLP",
    pHtml: `‍Impressed by the article written by a Grade IX School student on how he has seen life transform around him with digital payments over the last ten years.`,
}, {
    name: "Meetu",
    img: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638f71acb547eb813076a20b_testimonial-image.png",
    nich: "Let's Evolve",
    pHtml: `‍Funngro services are excellent. They have provided blogs for our website and super impressed by the quality of work done by Teens and amazed to see their financial knowledge too`,
}];
</script>

<template>
    <div class="min-h-screen text-white">
        <HeroSection heading="Smart Talent for smart companies"
            para-html='Cost effective, Timely delivery, Innovative ideas while you help the next generation<br><br>Talented Teenagers for your company<br>‍'>
            <a href="https://teenlancer.funngro.com/pages/login/" target="_blank"
                class="flex items-center justify-center flex-row rounded-[50px] gap-4 text-white text-center bg-[#47c480] py-3 px-6 font-semibold max-w-full">
                <div>Hire Teenlancer</div>
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
            <div class="flex gap-4 items-center mt-6">
                <div class="text-sm">Popular:</div>
                <div>
                    <div role="list" class="gap-3 flex-wrap items-center flex">
                        <div v-for="nich in ['Blogs', 'Social Media', 'Video Creation', 'Sales']" :key="nich"
                            role="listitem" class="w-dyn-item">
                            <a href="https://teenlancer.funngro.com/pages/register/"
                                class="rounded-2xl py-[.375rem] px-[.625rem] text-[.7rem] font-semibold border border-white">{{
                                    nich }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </HeroSection>

        <UiSectionContainer>
            <Stats renderBtn />
        </UiSectionContainer>

        <ScrollContainer :object="projectIdeas" heading="Project ideas"
            text="Cost-effective, innovative and timely delivery of projects by smartest talent on planet (Teenlancers)">
            <ScrollCard v-for="(project, index) in projectIdeas" :key="index"
                :aria-label="`${index + 1} of ${projectIdeas.length}`" class=" font-semibold font-xl !h-[20rem]">
                <div class="flex items-start mb-5 gap-4">
                    <div class="flex gap-2 flex-col items-start">
                        <p class="text-[#07ab67]">{{ project.work }}</p>
                    </div>
                </div>
                <div class="flex items-start mb-5 gap-4">
                    <div class="flex gap-2 flex-col items-start">
                        <p class="text-[#07ab67]">{{ project.price }}</p>
                    </div>
                </div>
                <div class="margin-bottom margin-small">
                    <p class="text-[#dfdfdf] text-left">{{ project.about }}</p>
                </div>
                <a href="https://teenlancer.funngro.com/" class="text-[#07ab67] underline">Start
                    Now -&gt;</a>
            </ScrollCard>
        </ScrollContainer>

        <ScrollContainerMembers :profiles="funngroMembers" heading="Happy Funngro Members"
            text="Hundreds of companies have worked with Talented Teens on Funngro. Read on for their views" />

        <WorkCategories />

        <TrustedPartners />

        
    </div>
</template>
