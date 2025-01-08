<template>
        <UiSectionContainer id="about">
            <div class="flex max-lg:flex-col gap-10">
                <div class="basis-1/2">
                    <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro.png"
                        loading="lazy"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 46vw"
                        srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro.png 841w"
                        alt="Funngro About Illustration" class="image-full-width">
                </div>
                <div class="basis-1/2 flex justify-center items-center">
                    <div class="my-auto">
                        <div class="mb-6">
                            <h2 class="text-[#d8e0e9]">The name says it all. <br>"Its <span
                                    class="text-[#07ab67]">Fun</span> to
                                <span class="text-[#07ab67]">Grow</span>”
                            </h2>
                        </div>
                        <div class="mb-6">
                            <p class="text-[#dfdfdf] text-left">Funngro is built by educators, Tech enthusiasts, IIM
                                alumni,
                                Finance experts but most importantly by Loving parents. We are thankful to
                                those
                                mentors who helped us in early stage of our lives and Funngro is our effort
                                to give
                                back to the society. Funngro is a mission to enable Teenagers to become
                                Financially
                                empowered and grow up to be responsible citizens.<br><br>Mission - Enable
                                Smart
                                Teenagers and Smart Companies to realize their full potentials</p>
                            <div v-for="(user, index) in [{
                                name: 'Payal Jain, CEO',
                                id: 'https://www.linkedin.com/in/payal-jain-8780191',
                            }, {
                                name: 'Anik Jain, CGO',
                                id: 'https://www.linkedin.com/in/anik-jain',
                            }]" :key="index" class="mt-5 flex gap-4 items-center">
                                <div class="font-semibold">{{ user.name }}</div>
                                <a :href="user.id" target="_blank" class="inline-block max-w-full text-inherit font">
                                    <div class="-mb-1">
                                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_5702_4912)">
                                                <path
                                                    d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
                                                    fill="#007AB9"></path>
                                                <path
                                                    d="M14.3776 9.72431V13.4348H12.2263V9.97298C12.2263 9.10375 11.9157 8.51015 11.1368 8.51015C10.5424 8.51015 10.1893 8.90979 10.0334 9.29675C9.97672 9.43505 9.96212 9.62709 9.96212 9.82105V13.4347H7.8107C7.8107 13.4347 7.83958 7.57145 7.8107 6.96453H9.96228V7.88141C9.95795 7.88863 9.95185 7.89569 9.948 7.90259H9.96228V7.88141C10.2482 7.4415 10.758 6.8126 11.9011 6.8126C13.3165 6.8126 14.3776 7.73734 14.3776 9.72431ZM5.56014 3.8457C4.82423 3.8457 4.34277 4.32877 4.34277 4.96344C4.34277 5.58464 4.81028 6.08167 5.53191 6.08167H5.54586C6.29621 6.08167 6.76275 5.58464 6.76275 4.96344C6.74847 4.32877 6.29621 3.8457 5.56014 3.8457ZM4.47064 13.4348H6.62125V6.96453H4.47064V13.4348Z"
                                                    fill="#F1F2F2"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5702_4912">
                                                    <rect width="18" height="18" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="hidden">LinkedIn</div>
                                </a>
                            </div>
                        </div>
                        <p class="text-xl text-[#07ab67]">BE INDEPENDENT BEFORE 18!</p>
                    </div>
                </div>
            </div>
        </UiSectionContainer>
</template>