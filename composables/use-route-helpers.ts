export default () => {
  const route = useRoute();

  const routePath = route.path;
  const showFooter = computed(() => route.path === "/");
  const isTeenPage = computed(() => route.path === "/teen");

  return {
    showFooter,
    isTeenPage,
    routePath,
  };
};
