<script setup lang="ts">

type ScrollDir = "left" | "right";

const { isTeenPage } = useRouteHelpers();

const scrollPosition = ref(0);
const visibleWidth = computed(() => slides.length * (logoWidth + gap));
const repeatedLogos = computed(() => [...slides, ...slides]);
const logoWidth = 120;
const gap = 16;


const currentSharkTankImg: Ref<number> = ref(0);
const sliderRef = ref<HTMLDivElement | null>(null);
let autoScrollInterval4FunngroMembers: ReturnType<typeof setInterval>;

const previousSlide = () => {
    currentSharkTankImg.value =
        currentSharkTankImg.value === 0
            ? sharkTankGalleryImages.value.length - 1
            : currentSharkTankImg.value - 1;
};

const nextSlide = () => {
    currentSharkTankImg.value =
        currentSharkTankImg.value === sharkTankGalleryImages.value.length - 1
            ? 0
            : currentSharkTankImg.value + 1;
};

const scroll = (direction: ScrollDir) => {
    const scrollAmount =
        direction === "left" ? logoWidth + gap : -(logoWidth + gap);
    let newPosition = scrollPosition.value + scrollAmount;

    if (newPosition > 0) {
        newPosition = -visibleWidth.value + scrollAmount;
    } else if (newPosition <= -visibleWidth.value) {
        newPosition = scrollAmount;
    }

    scrollPosition.value = newPosition;
};

const funngroMembersstartAutoScroll = () => {
    autoScrollInterval4FunngroMembers = setInterval(() => {
        nextSlide();
    }, 3000);
};

const funngroMembersstopAutoScroll = () => {
    clearInterval(autoScrollInterval4FunngroMembers);
};

onMounted(() => {
    funngroMembersstartAutoScroll();
    if (sliderRef.value) {
        sliderRef.value.style.transform = `translateX(${scrollPosition.value}px)`;
    }
});

onUnmounted(() => {
    funngroMembersstopAutoScroll();
});

const slides = [{
    link: "https://businessnewsweek.in/business/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png",
    imgAlt:
        "Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs",
    imgSizes:
        "(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw",
    imgSrcSet: `
      https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo-p-500.png 500w,
      https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png 512w
    `
}, {
    link: "https://www.fmlive.in/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029eed4fdce11c2d34e80_FM%20live%20logo.png",
    imgAlt: "",
    imgSizes: "",
    imgSrcSet: "",
}, {
    link: "https://ibsintelligence.com/ibsi-news/funngro-launches-money-management-program-for-teenagers/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png",
    imgAlt:
        "Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs",
    imgSizes:
        "(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw",
    imgSrcSet: `
      https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo-p-500.png 500w,
      https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png 512w
    `
}, {
    link: "https://timesofindia.indiatimes.com/blogs/voices/importance-of-financial-literacy-for-teens/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02a16a363596ec9c5eefb_Times%20of%20India%20logo.png",
    imgAlt: "",
    imgSizes: "",
    imgSrcSet: "",
}, {
    link: "https://thedailybrunch.com/2022/07/28/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png",
    imgAlt:
        "Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs",
    imgSizes:
        "(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw",
    imgSrcSet: `
      https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo-p-500.png 500w,
      https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png 512w
    `,
}, {
    link: "https://entrackr.com/2022/12/funngro-helps-teens-with-essential-financial-education-valuable-work-experience/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029286e97ee36926d7bbf_Entracker.png",
    imgAlt:
        "Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs",
    imgSizes: "",
    imgSrcSet: "",
}, {
    link: "https://thedailybrunch.com/2022/07/28/teens-mean-business-funngro-offers-real-world-work-experience-to-teenagers-through-its-revolutionary-platform/",
    imgSrc:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a0293fe9b4746ced4246a3_Mda.png",
    imgAlt: "",
    imgSizes: "",
    imgSrcSet: "",
}];

const sharkTankGalleryImages = ref([
    "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FsGysgwm02YY%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsGysgwm02YY&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsGysgwm02YY%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube",
    "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf3f03e4e4d213cda423f_Funngro%20-%20Shark%20Tank.png",
    "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf406cd40dff886664edb_Funngro%20-%20Shark%20Tank%202.png",
    "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf406cd40dff886664edb_Funngro%20-%20Shark%20Tank%202.png",
    "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf416648a6375d0f9db21_Funngro%20-%20Shark%20Tank%203.png",
]);

const earningSteps = [{
    svg: `<svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="#121E2C" stroke="#07AB67" stroke-width="2" stroke-dasharray="6 6"></circle>
<circle cx="50" cy="50" r="40" fill="#07AB67" fill-opacity="0.3"></circle>
<circle cx="50" cy="50" r="35" fill="#07AB67"></circle>
<path d="M53.4218 39.1818V61H48.8089V43.5604H48.681L43.6846 46.6925V42.6016L49.0858 39.1818H53.4218Z" fill="white"></path>
</svg>`,
    h3: "Register",
    p: "Register for Earning on Funngro app, select your area of interest",
}, {
    svg: `<svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="#121E2C" stroke="#07AB67" stroke-width="2" stroke-dasharray="6 6"></circle>
<circle cx="50" cy="50" r="40" fill="#07AB67" fill-opacity="0.3"></circle>
<circle cx="50" cy="50" r="35" fill="#07AB67"></circle>
<path d="M41.8202 61V57.6761L49.5866 50.4851C50.2471 49.8459 50.801 49.2706 51.2485 48.7592C51.703 48.2479 52.0475 47.7472 52.2819 47.2571C52.5162 46.7599 52.6334 46.2237 52.6334 45.6484C52.6334 45.0092 52.4878 44.4588 52.1966 43.9972C51.9055 43.5284 51.5077 43.1697 51.0035 42.9212C50.4992 42.6655 49.9275 42.5376 49.2883 42.5376C48.6206 42.5376 48.0383 42.6726 47.5411 42.9425C47.0439 43.2124 46.6604 43.5994 46.3905 44.1037C46.1206 44.608 45.9857 45.2081 45.9857 45.9041H41.6072C41.6072 44.4766 41.9303 43.2372 42.5766 42.1861C43.2229 41.1349 44.1285 40.3217 45.2932 39.7464C46.458 39.1712 47.8003 38.8835 49.3202 38.8835C50.8827 38.8835 52.2428 39.1605 53.4005 39.7145C54.5653 40.2614 55.4708 41.0213 56.1171 41.9943C56.7634 42.9673 57.0866 44.0824 57.0866 45.3395C57.0866 46.1634 56.9232 46.9766 56.5965 47.7791C56.2769 48.5817 55.7052 49.473 54.8813 50.4531C54.0574 51.4261 52.8962 52.5945 51.3976 53.9581L48.2123 57.0795V57.2287H57.3742V61H41.8202Z" fill="white"></path>
</svg>`,
    h3: "Complete Profile",
    p: "Add details about your interests, experience and past work",
}, {
    svg: `<svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="#121E2C" stroke="#07AB67" stroke-width="2" stroke-dasharray="6 6"></circle>
<circle cx="50" cy="50" r="40" fill="#07AB67" fill-opacity="0.3"></circle>
<circle cx="50" cy="50" r="35" fill="#07AB67"></circle>
<path d="M48.9454 61.2983C47.3545 61.2983 45.9376 61.0249 44.6947 60.478C43.4589 59.924 42.4823 59.1641 41.765 58.1982C41.0548 57.2251 40.689 56.103 40.6677 54.8317H45.3126C45.341 55.3643 45.515 55.8331 45.8346 56.2379C46.1613 56.6357 46.5945 56.9446 47.1343 57.1648C47.6741 57.3849 48.2813 57.495 48.9561 57.495C49.6592 57.495 50.2806 57.3707 50.8204 57.1222C51.3602 56.8736 51.7828 56.5291 52.0882 56.0888C52.3936 55.6484 52.5463 55.1406 52.5463 54.5653C52.5463 53.983 52.3829 53.468 52.0562 53.0206C51.7366 52.5661 51.2749 52.2109 50.6713 51.9553C50.0747 51.6996 49.3644 51.5717 48.5406 51.5717H46.5058V48.1839H48.5406C49.2366 48.1839 49.8509 48.0632 50.3836 47.8217C50.9234 47.5803 51.3424 47.2464 51.6407 46.8203C51.939 46.3871 52.0882 45.8828 52.0882 45.3075C52.0882 44.7607 51.9568 44.2812 51.694 43.8693C51.4383 43.4503 51.0761 43.1236 50.6073 42.8892C50.1457 42.6548 49.6059 42.5376 48.988 42.5376C48.363 42.5376 47.7913 42.6513 47.2728 42.8786C46.7544 43.0987 46.3389 43.4148 46.0264 43.8267C45.7139 44.2386 45.547 44.7216 45.5257 45.2756H41.1045C41.1258 44.0185 41.4845 42.9105 42.1805 41.9517C42.8765 40.9929 43.814 40.2436 44.993 39.7038C46.1791 39.157 47.5178 38.8835 49.0093 38.8835C50.515 38.8835 51.8325 39.157 52.9617 39.7038C54.091 40.2507 54.9681 40.9893 55.5931 41.9197C56.2252 42.843 56.5377 43.88 56.5306 45.0305C56.5377 46.2521 56.1578 47.2713 55.3907 48.0881C54.6308 48.9048 53.64 49.4233 52.4184 49.6435V49.8139C54.0235 50.0199 55.2451 50.5774 56.0832 51.4865C56.9284 52.3885 57.3474 53.5178 57.3403 54.8743C57.3474 56.1172 56.9887 57.2216 56.2643 58.1875C55.547 59.1534 54.5562 59.9134 53.292 60.4673C52.0278 61.0213 50.5789 61.2983 48.9454 61.2983Z" fill="white"></path>
</svg>`,
    h3: "Finish first project",
    p: "Complete one project to show your skills, get paid",
}, {
    svg: `<svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="#121E2C" stroke="#07AB67" stroke-width="2" stroke-dasharray="6 6"></circle>
<circle cx="50" cy="50" r="40" fill="#07AB67" fill-opacity="0.3"></circle>
<circle cx="50" cy="50" r="35" fill="#07AB67"></circle>
<path d="M40.7722 57.1648V53.532L49.8809 39.1818H53.013V44.2102H51.1593L45.4171 53.2976V53.468H58.361V57.1648H40.7722ZM51.2445 61V56.0568L51.3297 54.4482V39.1818H55.655V61H51.2445Z" fill="white"></path>
</svg>`,
    h3: "Apply to companies",
    p: "Hundreds of companies waiting for you, start applying",
}, {
    svg: `<svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="#121E2C" stroke="#07AB67" stroke-width="2" stroke-dasharray="6 6"></circle>
<circle cx="50" cy="50" r="40" fill="#07AB67" fill-opacity="0.3"></circle>
<circle cx="50" cy="50" r="35" fill="#07AB67"></circle>
<path d="M49.0692 61.2983C47.5636 61.2983 46.2212 61.0213 45.0423 60.4673C43.8704 59.9134 42.94 59.1499 42.2511 58.1768C41.5621 57.2038 41.2035 56.0888 41.1751 54.8317H45.6495C45.6992 55.6768 46.0543 56.3622 46.7148 56.8878C47.3754 57.4134 48.1602 57.6761 49.0692 57.6761C49.7937 57.6761 50.4329 57.5163 50.9869 57.1967C51.5479 56.87 51.9847 56.419 52.2972 55.8438C52.6168 55.2614 52.7766 54.5937 52.7766 53.8409C52.7766 53.0739 52.6133 52.3991 52.2866 51.8168C51.967 51.2344 51.5231 50.7798 50.9549 50.4531C50.3867 50.1264 49.7369 49.9595 49.0053 49.9524C48.3661 49.9524 47.7447 50.0838 47.141 50.3466C46.5444 50.6094 46.0792 50.968 45.7454 51.4226L41.6438 50.6875L42.6772 39.1818H56.0153V42.9531H46.4805L45.9158 48.4183H46.0437C46.4272 47.8786 47.006 47.4311 47.7802 47.076C48.5543 46.7209 49.4208 46.5433 50.3796 46.5433C51.6935 46.5433 52.8654 46.8523 53.8952 47.4702C54.9251 48.0881 55.7383 48.9368 56.3349 50.0163C56.9315 51.0888 57.2262 52.3246 57.2191 53.7237C57.2262 55.1939 56.8853 56.5007 56.1964 57.6442C55.5146 58.7805 54.5593 59.6754 53.3306 60.3288C52.109 60.9751 50.6886 61.2983 49.0692 61.2983Z" fill="white"></path>
</svg>`,
    h3: "Start Earning",
    p: "Complete the project - earn money and get certificate",
}];
</script>

<template>

    <UiSectionContainerWithHeader heading="We are Featured in"
        text="The world is talking about Funngro, check out what everyone is saying">
        <div data-delay="4000" data-animation="slide" :class="cn(
            'text-left bg-transparent h-auto pb-20 relative overflow-hidden',
            'text-center clear-both tap-highlight-color-transparent h-[300px] relative'
        )
            " role="region" aria-label="carousel">
            <div ref="sliderRef" class="flex transition-transform duration-[3000] ease-in-out gap-10" :style="{
                transform: `translateX(${scrollPosition}px)`,
                width: `${visibleWidth * 2}px`,
            }">
                <div v-for="(slide, index) in repeatedLogos" :key="index" :class="cn(
                    'text-left bg-transparent h-auto pb-20 relative overflow-hidden',
                    'text-center clear-both tap-highlight-color-transparent h-[300px] !w-[135px] relative'
                )
                    " :aria-label="`${index + 1} of ${slides.length}`" role="group"
                    style="transition: all; opacity: 1">
                    <a :href="slide.link" target="_blank" class="!w-full inline-block max-lg:max-w-24 max-w-[7.5rem]"
                        tabindex="-1">
                        <img :src="slide.imgSrc" :alt="slide.imgAlt" :sizes="slide.imgSizes" :srcset="slide.imgSrcSet"
                            class="!w-full" loading="lazy"/>
                    </a>
                </div>
            </div>
            <div v-for="(button, index) in [{
                direction: 'left',
                img: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d71afe76c7e7bc767_Vector%2058.svg',
            }, {
                direction: 'right',
                img: 'https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390183d1279b312ac061558_Vector%2057.svg',
            }]" @click="scroll(button.direction as ScrollDir)"
                class="z-3 flex justify-center items-center w-[80px] h-[2rem] mx-auto absolute left-[-3rem] cursor-pointer text-white tap-highlight-color-transparent select-none text-[40px] inset-0"
                role="button" tabindex="0" aria-controls="w-slider-mask-0"
                :aria-label="`${index == 0 ? 'previous' : 'next'} slide`"
                :style="{ top: index == 0 ? '14rem' : '16rem' }">
                <img :alt="`Arrow ${index == 0 ? 'Left' : 'right'}`" loading="lazy" :src="button.img"
                    class="w-[2.5rem] h-[1rem] max-w-full inline-block align-middle" />
            </div>
        </div>

        <div v-if="isTeenPage" class="mt-48 max-lg:mt-32 max-md:mt-[4.5rem]">
            <div
                class="grid gap-10 grid-rows-auto grid-cols-3 max-lg:grid-cols-2 auto-cols-fr items-start overflow-hidden">
                <div id="w-node-_57c6dd63-7b25-4293-fa5f-7da80e02ebd6-0e02ebd5"
                    class=" flex flex-col justify-start items-start">
                    <div class="mb-4">
                        <h3 class="text-[#d8e0e9]">Funngro @ Shark Tank</h3>
                    </div>
                    <p class="text-[#dfdfdf] text-left">
                        Lakhs of Teens love Funngro, Hundreds of Companies love Funngro
                        and now Sharks also loved Funngro
                    </p>
                </div>
                <div data-delay="4000" data-animation="slide"
                    class="bg-transparent w-full h-auto overflow-hidden max-md:pb-16 relative"
                    :style="{ gridArea: 'span 1 / span 2 / span 1 / span 2' }" data-autoplay="false" data-easing="ease"
                    data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3"
                    data-duration="500" data-infinite="true" id="w-node-_57c6dd63-7b25-4293-fa5f-7da80e02ebdc-0e02ebd5"
                    role="region" aria-label="carousel">
                    <div class="w-[48%] z-1 whitespace-nowrap h-full block relative left-0 right-0 max-md:w-full transition-transform duration-500 ease-in-out"
                        id="w-slider-mask-1" :style="{ transform: `translateX(-${currentSharkTankImg * 85}%)` }">
                        <div v-for="(img, index) in sharkTankGalleryImages" :key="index"
                            class="mr-[5%] align-top whitespace-normal text-left w-full h-full inline-block relative"
                            :aria-label="`${index + 1} of ${sharkTankGalleryImages.length}`" role="group"
                            aria-hidden="true">
                            <div class="whitespace-normal text-left relative" aria-hidden="true">
                                <div v-if="img.startsWith('//cdn.')"
                                    class="object-cover min-h-[16.25rem] pb-0 w-full max-w-none relative p-0">
                                    <iframe class="border-0 w-full h-full absolute top-0 left-0" :src="img"
                                        scrolling="no" allowfullscreen title="Funngro @ Shark Tank">
                                    </iframe>
                                </div>
                                <div v-else>
                                    <img :alt="`Amet minim mollit non deserunt ${index + 1}`" :src="img" loading="lazy"
                                        class=" object-cover min-h-[16.25rem] pb-0 w-full max-w-none"
                                        aria-hidden="true" />
                                    <h4 class="text-[#f5f7fa] mb-0 leading-[32px] absolute bottom-6 left-6 right-6 !hidden max-md:leading-[30px]"
                                        aria-hidden="true">
                                        Amet minim mollit non deserunt {{ index + 2 }}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center w-[80px] cursor-pointer text-white tap-highlight-color-transparent select-none text-[40px] absolute inset-0 overflow-hidden z-3 left-[-20px] max-md:top-[-50px] right-auto lg:hidden"
                        role="button" tabindex="0" aria-controls="w-slider-mask-1" aria-label="previous slide"
                        @click="previousSlide">
                        <div class="cursor-pointer text-white select-none text-[40px]">
                            <img alt="" loading="lazy"
                                src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a0e4912aadb_Chevron%20right-1.svg"
                                class="text-[#1a1b1f]" />
                        </div>
                    </div>
                    <div class="flex justify-center items-center w-[80px] cursor-pointer text-white tap-highlight-color-transparent select-none text-[40px] absolute inset-0 overflow-hidden z-4 max-md:top-[-50px] left-auto right-[-20px]"
                        role="button" tabindex="0" aria-controls="w-slider-mask-1" aria-label="next slide"
                        @click="nextSlide">
                        <div class="cursor-pointer text-white select-none text-[40px]">
                            <img alt="" loading="lazy"
                                src="https://cdn.prod.website-files.com/62434fa732124a0fb112aab4/62434fa732124a7ce212aacc_Chevron%20right.svg"
                                class="text-[#1a1b1f]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-48 max-lg:mt-32 max-md:mt-[4.5rem]">
            <UiSectionHeader heading="Earning with Funngro"
                text="Simple steps to earn income by working with real companies on project basis" />
            <div class="process-wrapper justify-between items-start flex relative">
                <div class="absolute top-[49px] z-10 inset-[2rem_5%_auto_10%] max-md:hidden">
                    <svg width="100%" height="100%" viewBox="0 0 937 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1H936.5" stroke="#07AB67" stroke-width="2" stroke-dasharray="7 7"></path>
                    </svg>
                </div>
                <div
                    class="absolute inline-table left-[38px] inset-[2rem_5%_auto_10%] z-10 md:z-[-2] md:w-[2px] md:h-[92%] md:block md:top-8 md:left-[2.4rem] md:right-0">
                    <svg width="2" height="100%" viewBox="0 0 2 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3000L1 1.14441e-05" stroke="#07AB67" stroke-width="2" stroke-dasharray="7 7">
                        </path>
                    </svg>
                </div>

                <template v-for="(step, index) in earningSteps" :key="index">
                    <div class="div-block-x text-center z-20 flex-col justify-center items-center min-w-[11rem] flex">
                        <div v-html="step.svg"
                            class="w-[6.25rem] h-[6.25rem] max-md:w-[4.8rem] max-md:h-32 max-md:flex-none" />
                        <div>
                            <h3 class="my-2.5 text-xl">{{ step.h3 }}</h3>
                            <p class="text-[#dfdfdf] text-left">{{ step.p }}</p>
                        </div>
                    </div>
                    <div v-if="index < earningSteps.length - 1"
                        class="max-md:mb-9 max-md:ml-8 max-md:rotate-90 z-20 flex-none w-[0.8125rem] h-[1.625rem] mt-9">
                        <svg width="100%" height="100%" viewBox="0 0 13 26" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 13L0 0V26L13 13Z" fill="#07AB67" />
                        </svg>
                    </div>
                </template>
            </div>
        </div>
    </UiSectionContainerWithHeader>
</template>

<style>
@media screen and (max-width: 767px) {
    .div-block-x {
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        text-align: left;
        flex-direction: row;
    }
}

@media screen and (max-width: 767px) {
    .process-wrapper {
        flex-direction: column;
        overflow: hidden;
    }
}

@media screen and (min-width: 767px) {
    .process-wrapper {
        overflow-y: hidden;
        overflow-x: auto;
    }
}
</style>
