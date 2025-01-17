<script setup lang="ts">
import { NuxtLink } from '#components';
import NavButton from './components/ui/nav-button.vue';
const { showFooter, routePath } = useRouteHelpers();
type DownloadAppLink = {
    link: string,
    svgIcon: string,
    imgIcon: string,
    imgAlt: string,
};

type WebsiteAllPages = {
    link: string,
    text: string,
    isPageCreated: boolean,
};

type SocialMediaLinks = {
    link: string,
    svgIcon: string,
};

const isNavClosed = useState('isNavClose');
const siteBaseUrl = useRuntimeConfig().public.siteBaseUrl;
const navPages = ['/teen', '/company', '/parent'];
const downloadAppLinks = useState<DownloadAppLink[]>('downloadAppLinks', () => [{
    link: "https://play.google.com/store/apps/details?id=com.wishbanc.funngro",
    svgIcon: `<svg width=" 100%" height=" 100%" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.54865 15.1274C3.54865 15.6497 3.97438 16.0761 4.49818 16.0761H5.58368V18.7634C5.58368 19.4442 6.12977 20 6.80069 20C7.47383 20 8.01769 19.4465 8.01769 18.7634V16.0738H9.9123V18.7612C9.9123 19.442 10.4584 19.9978 11.1293 19.9978C11.8024 19.9978 12.3463 19.4442 12.3463 18.7612V16.0738H13.4318C13.9556 16.0738 14.3813 15.6475 14.3813 15.1252V6.30418H3.54865V15.1274ZM11.5082 1.73296L12.509 0.282128C12.567 0.19731 12.5536 0.0834756 12.4756 0.0276745C12.3976 -0.0258945 12.2861 0.000890161 12.2282 0.0857078L11.1895 1.59457C10.5052 1.32449 9.7429 1.17494 8.9427 1.17494C8.14251 1.17494 7.38021 1.32449 6.69593 1.59457L5.65724 0.0879398C5.59928 0.00312217 5.48784 -0.0258944 5.40982 0.0299067C5.33181 0.0834758 5.31844 0.195078 5.37639 0.28436L6.37719 1.73519C4.78572 2.47623 3.67124 3.88018 3.52859 5.52073H14.3613C14.2142 3.87795 13.0975 2.47399 11.5082 1.73296ZM6.6558 4.0208C6.53722 4.0208 6.42129 3.98559 6.32269 3.91961C6.22409 3.85364 6.14724 3.75986 6.10186 3.65015C6.05648 3.54044 6.0446 3.41971 6.06774 3.30324C6.09087 3.18677 6.14798 3.07979 6.23183 2.99582C6.31569 2.91185 6.42252 2.85467 6.53883 2.8315C6.65514 2.80833 6.7757 2.82022 6.88526 2.86567C6.99482 2.91111 7.08846 2.98807 7.15434 3.08681C7.22023 3.18554 7.25539 3.30163 7.25539 3.42038C7.25498 3.5795 7.19168 3.73197 7.07932 3.84449C6.96697 3.957 6.8147 4.02039 6.6558 4.0208ZM11.3009 4.0208C11.1823 4.0208 11.0664 3.98559 10.9678 3.91961C10.8692 3.85364 10.7924 3.75986 10.747 3.65015C10.7016 3.54044 10.6897 3.41971 10.7129 3.30324C10.736 3.18677 10.7931 3.07979 10.877 2.99582C10.9608 2.91185 11.0676 2.85467 11.184 2.8315C11.3003 2.80833 11.4208 2.82022 11.5304 2.86567C11.6399 2.91111 11.7336 2.98807 11.7995 3.08681C11.8654 3.18554 11.9005 3.30163 11.9005 3.42038C11.9001 3.5795 11.8368 3.73197 11.7244 3.84449C11.6121 3.957 11.4598 4.02039 11.3009 4.0208ZM16.2804 6.26847C15.6073 6.26847 15.0634 6.82202 15.0634 7.50502V12.3352C15.0634 13.0159 15.6095 13.5717 16.2804 13.5717C16.9535 13.5717 17.4974 13.0182 17.4974 12.3352V7.50279C17.4996 6.81978 16.9558 6.26847 16.2804 6.26847ZM1.60055 6.26847C0.927408 6.26847 0.383545 6.82202 0.383545 7.50502V12.3352C0.383545 13.0159 0.929637 13.5717 1.60055 13.5717C2.27369 13.5717 2.81756 13.0182 2.81756 12.3352V7.50279C2.81756 6.81978 2.27146 6.26847 1.60055 6.26847Z" fill="currentColor"></path></svg>`,
    imgIcon: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png",
    imgAlt: "Get it on Google Play Banner",
}, {
    link: "https://apps.apple.com/in/app/funngro/id1579361075",
    svgIcon: `<svg width=" 100%" height=" 100%" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67911 20C5.01838 19.9642 4.39661 19.6756 3.94217 19.194C3.39848 18.6702 2.91332 18.0888 2.49524 17.4599C1.84215 16.5234 1.32591 15.4983 0.962142 14.4157C0.550449 13.251 0.333869 12.0262 0.321164 10.7908C0.28918 9.57853 0.588966 8.38063 1.18806 7.32677C1.62684 6.56716 2.2527 5.93282 3.00592 5.4843C3.7508 5.03769 4.60082 4.79729 5.46896 4.78771C6.1234 4.82648 6.76652 4.97628 7.37088 5.2307C7.85319 5.44326 8.35967 5.59268 8.8798 5.67475C9.45355 5.55439 10.0142 5.37818 10.5537 5.14863C11.1922 4.89897 11.8683 4.75915 12.5533 4.7351C12.6448 4.7351 12.7351 4.7351 12.8223 4.74562C14.325 4.78876 15.7225 5.52744 16.6052 6.74488C15.9163 7.11383 15.3431 7.66685 14.9493 8.34246C14.5555 9.01807 14.3564 9.78981 14.3744 10.5719C14.3675 11.1699 14.4873 11.7626 14.7258 12.3109C14.9643 12.8592 15.3162 13.3506 15.7582 13.7528C16.1607 14.1366 16.6292 14.4443 17.1411 14.6609C17.036 14.9766 16.9152 15.2817 16.787 15.589C16.4959 16.268 16.1368 16.9156 15.7152 17.522C15.3165 18.1294 14.8524 18.6912 14.3313 19.1971C13.8559 19.6695 13.2223 19.9481 12.5533 19.979C11.9863 19.9538 11.4292 19.8206 10.912 19.5865C10.3543 19.3432 9.75487 19.2099 9.1467 19.194C8.52138 19.2063 7.90424 19.3389 7.32884 19.5844C6.83187 19.8089 6.30092 19.9487 5.75792 19.9979L5.67911 20V20ZM8.98909 4.7351C8.91028 4.7351 8.83147 4.7351 8.75266 4.72563C8.73608 4.60038 8.72731 4.47421 8.72639 4.34787C8.76076 3.29682 9.17094 2.29309 9.88225 1.51944C10.2801 1.07482 10.7623 0.713908 11.3008 0.457726C11.8026 0.199037 12.351 0.043412 12.9138 0C12.9295 0.137844 12.9295 0.272531 12.9295 0.400905C12.9148 1.43544 12.5266 2.42966 11.8367 3.19987C11.5027 3.64836 11.0747 4.0182 10.5828 4.28342C10.0908 4.54863 9.54686 4.7028 8.98909 4.7351V4.7351Z" fill="currentColor"></path></svg>`,
    imgIcon: "https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png",
    imgAlt: "Download on the App Store Banner",
}]);

const updateNavState = () => {
    if (window.innerWidth > 991) {
        isNavClosed.value = false;
    }
};

onMounted(() => {
    updateNavState();
    window.addEventListener('resize', updateNavState);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateNavState);
});

const websiteAllPages: WebsiteAllPages[] = [{
    link: "/",
    text: "Home",
    isPageCreated: true,
}, {
    link: "/teen#about",
    text: "About",
    isPageCreated: true,
}, {
    link: "/blog",
    text: "Blogs",
    isPageCreated: false,
}, {
    link: "/faq",
    text: "FAQs",
    isPageCreated: false,
}, {
    link: "/careers",
    text: "Careers",
    isPageCreated: false,
}, {
    link: "/investors",
    text: "Investors",
    isPageCreated: false,
}, {
    link: "https://portal.funngro.com/",
    text: "Login",
    isPageCreated: false,
}, {
    link: "/contact",
    text: "Contact Us",
    isPageCreated: false,
}, {
    link: "/privacy-policy",
    text: "Privacy Policy",
    isPageCreated: false,
}, {
    link: "/terms-and-conditions",
    text: "Terms & Conditions",
    isPageCreated: false,
}];

const socialMediaLinks: SocialMediaLinks[] = [{
    link: "https://www.facebook.com/funngro",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6611 3.00375L13.5024 3C11.0772 3 9.5099 4.73871 9.5099 7.42982V9.47227H7.33943C7.15188 9.47227 7 9.63668 7 9.83949V12.7988C7 13.0016 7.15205 13.1658 7.33943 13.1658H9.5099V20.633C9.5099 20.8358 9.66178 21 9.84933 21H12.6812C12.8687 21 13.0206 20.8356 13.0206 20.633V13.1658H15.5584C15.7459 13.1658 15.8978 13.0016 15.8978 12.7988L15.8989 9.83949C15.8989 9.74211 15.863 9.64886 15.7995 9.57994C15.7359 9.51103 15.6493 9.47227 15.5593 9.47227H13.0206V7.74086C13.0206 6.90868 13.204 6.48622 14.2065 6.48622L15.6607 6.48566C15.8481 6.48566 16 6.32124 16 6.11863V3.37077C16 3.16835 15.8483 3.00412 15.6611 3.00375Z" fill="#DCF8DB"></path>
</svg>`,
}, {
    link: "https://twitter.com/funngro",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 5.2311C23.1167 5.6097 22.1689 5.86647 21.173 5.98111C22.1898 5.39212 22.9682 4.45791 23.3371 3.34815C22.3833 3.89358 21.3305 4.28964 20.2087 4.50434C19.3103 3.57738 18.0326 3 16.6153 3C13.8963 3 11.6917 5.13247 11.6917 7.76107C11.6917 8.13387 11.7352 8.49799 11.8192 8.84617C7.72801 8.64741 4.1002 6.75141 1.67216 3.87037C1.24773 4.57251 1.00628 5.39064 1.00628 6.26397C1.00628 7.91629 1.87612 9.3742 3.19589 10.2272C2.38902 10.2011 1.63016 9.98636 0.965806 9.62949V9.68897C0.965806 11.9955 2.66349 13.9205 4.91456 14.3587C4.50212 14.466 4.06722 14.5255 3.6173 14.5255C3.29938 14.5255 2.99193 14.495 2.69047 14.437C3.31734 16.3301 5.13503 17.7068 7.28864 17.7445C5.60444 19.0211 3.48083 19.7798 1.17428 19.7798C0.776864 19.7798 0.385412 19.7566 0 19.7145C2.1791 21.068 4.76613 21.8571 7.5466 21.8571C16.6034 21.8571 21.554 14.6009 21.554 8.30798L21.5375 7.69146C22.5048 7.02411 23.3416 6.18564 24 5.2311Z" fill="#DCF8DB"></path>
</svg>`,
}, {
    link: "https://www.youtube.com/channel/UCUj8Nqr-M7gVtXYBTB7_usA",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.469 6.42901L23.499 6.62501C23.209 5.59601 22.426 4.80201 21.431 4.51301L21.41 4.50801C19.5391 4.00001 12.0101 4.00001 12.0101 4.00001C12.0101 4.00001 4.50024 3.99001 2.61026 4.50801C1.59627 4.80201 0.812284 5.59601 0.527288 6.60401L0.522288 6.62501C-0.176704 10.276 -0.181704 14.663 0.553287 18.572L0.522288 18.374C0.812284 19.403 1.59527 20.197 2.59026 20.486L2.61126 20.491C4.48024 21 12.0111 21 12.0111 21C12.0111 21 19.5201 21 21.411 20.491C22.426 20.197 23.21 19.403 23.495 18.395L23.5 18.374C23.818 16.676 24 14.722 24 12.726C24 12.653 24 12.579 23.999 12.505C24 12.437 24 12.356 24 12.275C24 10.278 23.818 8.32401 23.469 6.42901V6.42901ZM9.60818 16.151V8.85801L15.8741 12.51L9.60818 16.151Z" fill="#DCF8DB"></path>
</svg>`,
}, {
    link: "https://www.instagram.com/funngro",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0957 5.47335V18.3352C21.0957 19.8045 19.9002 21 18.4309 21H5.56905C4.09983 21 2.9043 19.8045 2.9043 18.3352V5.47335C2.9043 4.00413 4.09983 2.80859 5.56905 2.80859H18.4309C19.9002 2.80859 21.0957 4.00413 21.0957 5.47335ZM7.23897 11.8688C7.23897 14.5137 9.39062 16.6653 12.0355 16.6653C14.6804 16.6653 16.8321 14.5137 16.8321 11.8688C16.8321 9.22386 14.6804 7.0722 12.0355 7.0722C9.39062 7.0722 7.23897 9.22386 7.23897 11.8688ZM15.7662 6.53925C15.7662 7.42084 16.4835 8.13811 17.365 8.13811C18.2466 8.13811 18.9639 7.42084 18.9639 6.53925C18.9639 5.65766 18.2466 4.9404 17.365 4.9404C16.4835 4.9404 15.7662 5.65766 15.7662 6.53925ZM17.8971 6.53925C17.8971 6.83335 17.6583 7.0722 17.3642 7.0722C17.0701 7.0722 16.8312 6.83335 16.8312 6.53925C16.8312 6.24516 17.0701 6.0063 17.3642 6.0063C17.6583 6.0063 17.8971 6.24516 17.8971 6.53925ZM12.0351 15.5994C14.0919 15.5994 15.7657 13.9256 15.7657 11.8688C15.7657 9.81191 14.0919 8.13811 12.0351 8.13811C9.97823 8.13811 8.30443 9.81191 8.30443 11.8688C8.30443 13.9256 9.97823 15.5994 12.0351 15.5994Z" fill="#DCF8DB"></path>
</svg>`,
}, {
    link: "https://discord.gg/funngro",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4609 4.49591C18.0042 3.79859 16.427 3.29248 14.7841 3.00005C14.7697 2.99958 14.7554 3.00235 14.7421 3.00818C14.7289 3.01401 14.717 3.02276 14.7074 3.03379C14.5103 3.40495 14.2803 3.88857 14.1269 4.25972C12.3844 3.98979 10.6122 3.98979 8.86966 4.25972C8.71632 3.87732 8.48632 3.40495 8.27822 3.03379C8.26726 3.0113 8.23441 3.00005 8.20155 3.00005C6.55865 3.29248 4.99241 3.79859 3.52475 4.49591C3.5138 4.49591 3.50285 4.50716 3.49189 4.5184C0.512765 9.09596 -0.308686 13.5498 0.0965633 17.9586C0.0965633 17.9811 0.107516 18.0036 0.129421 18.0149C2.1009 19.4995 3.99572 20.3992 5.86863 20.9953C5.90148 21.0066 5.93434 20.9953 5.9453 20.9728C6.3834 20.3543 6.7777 19.7019 7.11723 19.0159C7.13914 18.9709 7.11723 18.9259 7.07342 18.9146C6.44912 18.6672 5.85767 18.3748 5.27718 18.0374C5.23337 18.0149 5.23337 17.9474 5.26623 17.9136C5.38671 17.8237 5.50719 17.7224 5.62767 17.6325C5.64957 17.61 5.68243 17.61 5.70434 17.6212C9.47206 19.387 13.5355 19.387 17.2594 17.6212C17.2813 17.61 17.3142 17.61 17.3361 17.6325C17.4566 17.7337 17.577 17.8237 17.6975 17.9249C17.7413 17.9586 17.7413 18.0261 17.6866 18.0486C17.117 18.3973 16.5146 18.6784 15.8903 18.9259C15.8465 18.9371 15.8356 18.9934 15.8465 19.0271C16.197 19.7132 16.5913 20.3655 17.0185 20.9841C17.0513 20.9953 17.0842 21.0066 17.117 20.9953C19.0009 20.3992 20.8957 19.4995 22.8672 18.0149C22.8891 18.0036 22.9 17.9811 22.9 17.9586C23.382 12.8637 22.1005 8.44363 19.5047 4.5184C19.4938 4.50716 19.4828 4.49591 19.4609 4.49591V4.49591ZM7.68677 15.2706C6.55865 15.2706 5.61671 14.2021 5.61671 12.8862C5.61671 11.5703 6.53674 10.5018 7.68677 10.5018C8.84776 10.5018 9.76778 11.5816 9.75683 12.8862C9.75683 14.2021 8.8368 15.2706 7.68677 15.2706ZM15.3208 15.2706C14.1927 15.2706 13.2507 14.2021 13.2507 12.8862C13.2507 11.5703 14.1708 10.5018 15.3208 10.5018C16.4818 10.5018 17.4018 11.5816 17.3908 12.8862C17.3908 14.2021 16.4818 15.2706 15.3208 15.2706Z" fill="#DCF8DB"></path>
</svg>`,
}, {
    link: "https://www.linkedin.com/company/funngro/",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.6087 3C3.1 3 2.00425 3.91904 2.00425 5.18304C2.00425 6.45147 3.12609 7.41098 4.6087 7.41098C6.11739 7.41098 7.21315 6.47419 7.21315 5.15715C7.14358 3.88872 6.06957 3 4.6087 3ZM2.43478 8.29921C2.19565 8.29921 2 8.4981 2 8.74117V21.558C2 21.8011 2.19565 22 2.43478 22H6.78261C7.02174 22 7.21739 21.8011 7.21739 21.558V8.74117C7.21739 8.4981 7.02174 8.29921 6.78261 8.29921H2.43478ZM8.95652 8.29921C8.71739 8.29921 8.52174 8.4981 8.52174 8.74117V21.558C8.52174 21.8011 8.71739 22 8.95652 22H12.8696C13.1096 22 13.3043 21.802 13.3043 21.558V14.9286V14.8181V14.7076C13.3043 13.6602 14.0959 12.807 15.1046 12.7275C15.1568 12.7186 15.2087 12.7188 15.2609 12.7188C15.313 12.7188 15.3649 12.7186 15.4171 12.7275C16.4258 12.807 17.2174 13.6602 17.2174 14.7076V21.558C17.2174 21.802 17.4122 22 17.6522 22H21.5652C21.8043 22 22 21.8011 22 21.558V14.0447C22 11.1852 20.4909 8.29921 17.1257 8.29921C15.5952 8.29921 14.4391 8.90038 13.7391 9.3998V8.74117C13.7391 8.4981 13.5435 8.29921 13.3043 8.29921H8.95652Z" fill="#DCF8DB"></path>
</svg>`,
}, {
    link: "https://wa.me/918828410412",
    svgIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.00381 22L4.28821 17.2804C3.44189 15.8296 2.99725 14.1796 3.00001 12.5C3.00001 7.25315 7.25316 3 12.5 3C17.7469 3 22 7.25315 22 12.5C22 17.7468 17.7469 22 12.5 22C10.8211 22.0027 9.17183 21.5584 7.72151 20.7127L3.00381 22ZM9.07146 8.0426C8.94878 8.05021 8.8289 8.08253 8.71901 8.1376C8.61595 8.19595 8.52188 8.26891 8.43971 8.3542C8.32571 8.46155 8.26111 8.55465 8.19176 8.6449C7.84065 9.10184 7.65179 9.66274 7.65501 10.239C7.65691 10.7045 7.77851 11.1576 7.96851 11.5813C8.35706 12.4382 8.99641 13.3455 9.84096 14.1862C10.0443 14.3886 10.2428 14.5919 10.4566 14.7809C11.5048 15.7038 12.7539 16.3694 14.1046 16.7246L14.6451 16.8073C14.8209 16.8168 14.9966 16.8035 15.1733 16.7949C15.45 16.7807 15.7201 16.7057 15.9647 16.5755C16.0891 16.5114 16.2105 16.4417 16.3285 16.3665C16.3285 16.3665 16.3694 16.3399 16.4473 16.281C16.5755 16.186 16.6544 16.1185 16.7608 16.0074C16.8396 15.9257 16.908 15.8297 16.9603 15.7205C17.0344 15.5656 17.1085 15.2702 17.1389 15.0241C17.1617 14.836 17.155 14.7334 17.1522 14.6698C17.1484 14.5681 17.0638 14.4627 16.9717 14.418L16.4188 14.1701C16.4188 14.1701 15.5923 13.81 15.0878 13.5801C15.0346 13.557 14.9776 13.5438 14.9197 13.5412C14.8547 13.5345 14.789 13.5418 14.727 13.5626C14.6651 13.5835 14.6083 13.6173 14.5606 13.6618V13.6599C14.5558 13.6599 14.4922 13.7141 13.8053 14.5463C13.7659 14.5993 13.7116 14.6393 13.6493 14.6613C13.5871 14.6833 13.5197 14.6862 13.4557 14.6698C13.3938 14.6532 13.3332 14.6323 13.2743 14.6071C13.1565 14.5577 13.1156 14.5387 13.0349 14.5035L13.0301 14.5016C12.4866 14.2644 11.9834 13.9438 11.5386 13.5516C11.4189 13.4471 11.3078 13.3331 11.1938 13.2229C10.82 12.865 10.4943 12.4601 10.2248 12.0183L10.1687 11.9281C10.1284 11.8675 10.0959 11.802 10.0718 11.7333C10.0357 11.5937 10.1298 11.4816 10.1298 11.4816C10.1298 11.4816 10.3606 11.2289 10.468 11.0921C10.5573 10.9784 10.6407 10.8601 10.7178 10.7377C10.8299 10.5572 10.8651 10.372 10.8062 10.2285C10.5402 9.57875 10.2647 8.9318 9.98156 8.2896C9.92551 8.1623 9.75926 8.0711 9.60821 8.05305C9.55691 8.04735 9.50561 8.04165 9.45431 8.03785C9.32673 8.03151 9.19889 8.03373 9.07146 8.0426Z" fill="#DCF8DB"></path>
</svg>`,
}];
</script>

<template>
    <div class="min-h-screen text-white !bg-[#111e2c]">
        <div class="bg-emerald-500 py-2 text-center text-white text-sm">
            <p>As seen on Shark Tank India ... loved by Teens, loved by parents, loved by companies and now loved by
                Sharks</p>
        </div>
        <nav class="border-b border-gray-800 sticky top-0 z-50 bg-[#111e2c]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <NuxtLink to="/" class="flex items-center">
                            <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg"
                                alt="Funngro Logo" width={120} height={40} class="h-8 w-auto" />
                        </NuxtLink>
                    </div>
                    <div class="hidden lg:block">
                        <div class="flex items-center space-x-8">
                            <NuxtLink v-for="link in navPages" :key="link" :to="link"
                                :class="['text-[#d8e0e9] px-3 py-2']"
                                :aria-current="link === routePath ? 'page' : undefined">
                                {{ link.replace(/^\//, '').replace(/^\w/, (c) => c.toUpperCase()) }}
                            </NuxtLink>
                            <DownloadApps class="gap-x-4 gap-y-4 items-center flex lg:pb-4"
                                aClass="p-[0.2rem] text-white py-2 px-4 max-w-full inline-block"
                                divClass="w-6 h-6 text-white" />
                            <UiCompanyLoginBtn />
                        </div>
                    </div>
                    <NavButton />
                </div>
            </div>
            <div
                :class="['w-full absolute top-[100%] left-0 right-0 overflow-hidden', !isNavClosed ? 'hidden' : 'block']">
                <nav role="navigation"
                    class="bg-[#121e2c] border-b border-[#000] px-[5%] pt-4 pb-8 overflow-auto text-center min-w-[200px] float-right w-full">
                    <NuxtLink v-for="link in navPages" :key="link" :to="link"
                        :class="[
                            'text-left mx-auto text-white py-2 px-4 block relative align-top max-lg:w-auto max-lg:py-3 max-lg:px-0 max-xs:text-center']"
                        :aria-current="link === routePath ? 'page' : undefined">
                        {{ link.replace(/^\//, '').replace(/^\w/, (c) => c.toUpperCase()) }}
                    </NuxtLink>
                    <DownloadApps class="gap-4 text-center flex max-xs:justify-center max-xs:my-2"
                        aClass="cursor-pointer text-inherit inline-block max-w-full text-white py-2 px-4 text-xl max-lg:py-3 max-lg:px-0 p-8"
                        divClass="w-6 h-6 max-xs:h-8 max-xs:w-8" />
                    <UiCompanyLoginBtn />
                </nav>
            </div>
        </nav>
        <main>
            <NuxtPage />
        </main>
        <footer v-if="!showFooter" class="bg-[#1f2e40]">
            <UiSectionContainer>
                <div class="max-w-[700px]">
                    <div class="flex justify-center items-center">
                        <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390122253829667e405c893_Funngrow%20Logo.svg"
                            loading="lazy">
                    </div>
                    <div
                        class="border-y border-solid border-[#384c65] justify-between mt-8 mb-5 py-[.875rem] flex max-lg:flex-wrap max-md:gap-4 max-md:justify-center">
                        <component v-for="website in websiteAllPages" :key="website.link"
                            :is="website.isPageCreated ? NuxtLink : 'a'"
                            :to="website.isPageCreated ? website.link : undefined"
                            :href="!website.isPageCreated ? siteBaseUrl + website.link : undefined" class="footer-link">
                            {{ website.text }}
                        </component>
                    </div>
                    <p class="text-[#99a4b0] text-center">Enable Smart Teenagers and Smart Companies to realize their
                        full
                        potentials. It’s fun to grow.</p>
                    <div class="flex gap-4 justify-center items-center mt-8">
                        <div>Download&nbsp;App</div>
                        <div class="flex gap-4">
                            <a v-for="(app, index) in downloadAppLinks" :key="index" :href="app.link"
                                class=" max-w-[8.25rem] inline-block">
                                <img :src="app.imgIcon" loading="lazy" :alt="app.imgAlt" class="w-full inline-block">
                            </a>
                        </div>
                    </div>
                    <div class="flex gap-8 justify-center items-center my-8">
                        <a v-for="(social, index) in socialMediaLinks" :key="index" :href="social.link" target="_blank"
                            class="inline-block w-8 h-8">
                            <div v-html="social.svgIcon" class="text-[#dcf8db] w-8 h-8" />
                        </a>
                    </div>
                    <p class="text-[#99a4b0] text-center">©All Copyrights reserved 2023 By <span
                            class="text-[#07ab67]">FUNNGRO</span></p>
                </div>
            </UiSectionContainer>
        </footer>
    </div>
</template>

<style>
h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
}

@media screen and (max-width: 767px) {
    h2 {
        font-size: 2rem;
    }
}

h2 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
}

h2 {
    margin-top: 20px;
    font-size: 32px;
    line-height: 36px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 10px;
    font-weight: bold;
}

h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
}

@media screen and (max-width: 767px) {
    h3 {
        font-size: 1.5rem;
    }
}

h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.2;
}

h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
}

img {
    max-width: 100%;
    display: inline-block;
}

img {
    vertical-align: middle;
    max-width: 100%;
    display: inline-block;
}

img {
    border: 0;
}

.router-link-active {
    color: #47c480 !important;
}
</style>