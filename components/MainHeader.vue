<template>
  <div>
    <nav class="border-b border-blue-700 fixed top-0 w-full bg-white z-10 shadow-md">
      <!-- desktop header -->
      <div id="desktop"
        class="hidden transition-all duration-200 lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1500px] lg:flex mx-auto justify-between items-center ">
        <div id="desktop-nav-links">
          <ul class="flex">
            <li>صفحه اصلی</li>
            <li>محصولات</li>
            <li>مقالات</li>
            <li>درباره ما</li>
          </ul>
        </div>
        <div id="logo">
          <NuxtLink to="/"><img src="/wp_logo.webp" class="w-32 my-2 hover:opacity-80 transition-all duration-200" alt="">
          </NuxtLink>
        </div>
      </div>
      <!-- mobile header -->
      <div id="mobile" class="flex py-3 justify-between lg:hidden ">
        <div @click="togleMenu" id="menuBtn"
          class="mx-4 cursor-pointer hover:opacity-80 text-2xl md:text-4xl transition-all duration-200">
          <Icon v-if="isMenuActive" name="material-symbols:menu" color="black" />
          <Icon v-else name="uil:multiply" color="black" />

        </div>
        <div id="logo">
          <NuxtLink to="/"><img src="/wp_logo.webp" class="w-20 md:w-28 mx-4 hover:opacity-80 transition-all duration-200"
              alt=""></NuxtLink>
        </div>
      </div>

      <div>
        <div ref="mobileMenu" id="mobileMenu"
          class="bg-[var(--clr-primary)] border-t transition-all duration-200 overflow-hidden h-0 lg:hidden">
          <ul @click="togleMenu">
            <li>صفحه اصلی</li>
            <li>محصولات</li>
            <li>مقالات</li>
            <NuxtLink to="/aboutPage">
              <li>درباره ما</li>
            </NuxtLink>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>

const isMenuActive = ref(true)
const mobileMenu = ref<HTMLDivElement>()
function togleMenu() {
  mobileMenu.value?.classList.toggle('show-menu');
  isMenuActive.value = !isMenuActive.value
}

</script>

<style>

#desktop-nav-links li {
  @apply mx-3 rounded-md text-[#05364d] py-1 px-2 my-3 cursor-pointer transition-all duration-300 hover:text-[#8BC53F]
}

#mobileMenu li {
  @apply mx-3 rounded-md hover:bg-green-200 text-[#05364d] py-1 px-2 my-3 cursor-pointer transition-all duration-300
}

.show-menu {
  @apply !h-52
}
</style>