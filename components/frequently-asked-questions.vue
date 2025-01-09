<script setup lang="ts">
const FaqAccordion = [{
    question: "How can I start earning money?",
    answerHtml: `Simple 5 step process – <br>(1) download funngro and register for earning, <br>(2) complete your evaluation project, <br>(3) apply to projects of your interest, <br>(4) submit completed projects, <br>(5) Get paid!`,
}, {
    question: "Why should Teens work?",
    answerHtml: `Start early, get independence, learn while you earn but most importantly get real world experience. Work on projects of your interest and find your real passion before making the final career decision.`,
}, {
    question: "What kind of work can I do?",
    answerHtml: `At this time we have 12 categories in which Teens can work as listed on our home page. Do let us know if those do not cover your needs.`,
}];
</script>

<template>
    <UiSectionContainerWithHeader class="bg-[#1f2e40]" heading="Frequently Asked Questions"
        text="Part of being successful is asking the right questions and listening to the answers">

        <div class="faq6_component flex max-lg:flex-col gap-12">
            <div class="overflow-hidden lg:basis-2/4 xl:basis-7/12 flex flex-col gap-6" role="tablist"
                aria-multiselectable="true">

                <div v-for="(faq, index) in FaqAccordion" :key="index"
                    class="accordion-item cursor-pointer bg-[#dacef24d] rounded-b-md">
                    <input type="checkbox" :id="`accordion-${index + 1}`" aria-expanded="false"
                        :aria-controls="`content-${index + 1}`" class='hidden'>
                    <label :for="`accordion-${index + 1}`"
                        class="rounded-md border border-[#dacef2b3] flex justify-between items-center p-4 cursor-pointer select-none"
                        role="tab" :id="`label${index + 1}`" tabindex="0">
                        {{ faq.question }}
                        <span class="h-8 w-8 transition-transform duration-300 ease-in-out" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true" role="img" class="iconify iconify--heroicons" width="100%"
                                height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                                <path fill="currentColor"
                                    d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z">
                                </path>
                            </svg>
                        </span>
                    </label>
                    <div class="accordion-content max-h-0 overflow-hidden transition-[max-height,padding] duration-300 ease-in-out px-4 bg-[#364353]"
                        role="tabpanel" :id="`content-${index + 1}`" :aria-labelledby="`label${index + 1}`">
                        <p class="my-4" v-html="faq.answerHtml" />
                    </div>
                </div>
            </div>
            <div
                class="faq6_content max-h-60 lg:basis-2/4 xl:basis-5/12 flex flex-col gap-4 rounded-md border border-[#dacef2b3] bg-[#dacef24d] py-10 px-7">
                <div>Have a Question?</div>
                <div class="w-full max-w-96">
                    <h3 class="mt-0">Check out our answers to frequently asked questions</h3>
                </div>
                <a href="https://www.funngro.com/faq"
                    class="gap-4 flex  max-w-56 flex-row justify-center items-center rounded-full text-white text-center bg-[#47c480] font-semibold px-6 py-3 no-underline">
                    <div>View More FAQs</div>
                    <div class="icon-1x1-small w-embed">
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
    </UiSectionContainerWithHeader>
</template>

<style>
input[type="checkbox"]:checked~.accordion-content {
    max-height: 200px;
    padding: 15px;
}

input[type="checkbox"]:checked+label .arrow {
    transform: rotate(90deg);
}
</style>
