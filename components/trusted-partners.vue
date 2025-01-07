<script setup lang="ts">
const partners = [{
    heading: "Companies",
    headerBgColor: "#f9d2cd33",
    bgImgae:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638ddca34f9b6d707bf594f9_Rectangle%20479.svg",
    images: [{
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e2e5824e05e043b_CarDekho%20logo.png 2116w",
        sizes: "(max-width: 479px) 100vw, 165.3125px",
        alt: "CarDekho logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fc56174a8505b2556_Enerzy%20Solar%20logo.png 1358w",
        sizes: "106.09375px",
        alt: "Enerzy Solar logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c231131a1e105d55f450_Mobigic%20logo.png",
        alt: "Mobigic logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909f302d2432498d0a93_Tarakki%20logo.png 1380w",
        sizes: "107.8125px",
        alt: "Tarakki logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e236fced422c7e558_StockPe%20Logo.png",
        alt: "StockPe logo",
    }]
}, {
    heading: "Partners",
    headerBgColor: "#b8edfc33",
    bgImgae:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638ddca357859f66e5f1a1fc_Rectangle%20479-1.svg",
    images: [{
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/64ae396c0046a0f0dbbc6f08_Mask%20group.png 2882w",
        sizes: "123px",
        alt: "Mask group logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1974420c03b964d4513_AIC%20Pinnacle%20logo.png 1900w",
        sizes: "(max-width: 479px) 100vw, 148.4375px",
        alt: "AIC Pinnacle logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1985da398a524766945_Qapita%20logo.png 1490w",
        sizes: "116.40625px",
        alt: "Qapita logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c197453e183c74317857_Headstart%20logo.png 1627w",
        sizes: "127.109375px",
        alt: "Headstart logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c1984af86db14b5e888c_AIC%20logo.png 2298w",
        sizes: "(max-width: 479px) 100vw, 179.53125px",
        alt: "AIC logo",
    }]
}, {
    heading: "Companies",
    headerBgColor: "#dcf8db33",
    bgImgae:
        "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638ddca3c52f5448c5544e73_Rectangle%20479-2.svg",
    images: [{
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909fd142ea4d0d188166_LegacyNext%20logo.png 3200w",
        sizes: "(max-width: 479px) 100vw, 200px",
        alt: "LegacyNext logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e4eeebe97628bde62_Two%2099%20Logo.png 1587w",
        sizes: "123.984375px",
        alt: "Two 99 Logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo.png",
        srcset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0ce0a8ef5285a045_MOnech%20logo.png 1587w",
        sizes: "118.90625px",
        alt: "MOnech logo",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909e0e05723157cb10f6_Eco%20365%20Logo.png",
    }, {
        src: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo.png",
        width: 200,
        sizes: "(max-width: 479px) 100vw, 200px",
        scrset:
            "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-800.png 800w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399909ee1a3895ee3da471b_Grow%20Partner%20logo-p-1080.png 1080w",
    }]
}];
</script>

<template>
    <UiSectionContainerWithHeader heading="We are Trusted by"
        text="Hundreds of companies and partners working with Funngro to find smart talent">
        <div class="grid gap-6 grid-rows-auto grid-cols-3 auto-cols-fr max-md:grid-cols-1">
            <div v-for="(partner, index) in partners" :key="index"
                :style="{ backgroundImage: `url(${partner.bgImgae})` }"
                class="z-2 text-white text-center bg-[position:0_100%] bg-no-repeat border border-solid rounded-[10px] transition-all duration-200 relative bg-[length:100%]">
                <div class="py-5" :style="{ backgroundColor: partner.headerBgColor }">
                    <h3 class="text-3xl">{{ partner.heading }}</h3>
                </div>
                <div class="gap-10 flex flex-col items-center pt-10 pb-10">
                    <img v-for="(logo, i) in partner.images" :key="i" :src="logo.src" :alt="logo.alt || 'Partner logo'"
                        class="max-h-10" loading="lazy" :sizes="logo.sizes || undefined"
                        :srcset="logo.srcset || undefined" />
                </div>
            </div>
        </div>
    </UiSectionContainerWithHeader>
</template>