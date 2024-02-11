<template>
  <div id="hero" class="lg:h-[100vh] lg:bg-[url('/bg.jpg')] bg-center  bg-cover bg-no-repeat bg-fixed">

    <div
      class="h-full text-center mt-24 lg:mt-0 lg:bg-gradient-to-t lg:from-green-100 lg:flex lg:justify-center lg:items-center">
      <div class="text-black flex flex-col">
        <h1>به فروشگاه محصولات ارگانیک خوش آمدید</h1>
        <div class="new-produtcs">
          <div v-for="p in products" :key="p.id">
            <ProductCard :product="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const products = ref([
  { id: 1, title: 'کرم ضد آفتاب', category: 2, images: '/products/1.jpg', price: 64, stock_status: true, description: 'یک محصول بسیار عالی و توپ' },
  { id: 2, title: 'روغن آرگان', category: 2, images: '/products/2.jpg', price: 98, stock_status: false, description: 'این محصول رد خور نداره' },
  { id: 3, title: 'برن فرد اعلا', category: 3, images: '/products/3.jpg', price: 23, stock_status: true, description: 'بهترین محصول گیاهی موجود در بازار ' },
  { id: 4, title: 'روغن گیاهی', category: 4, images: '/products/4.jpg', price: 56, stock_status: false, description: 'خفن ترین محصول ما' },
  { id: 5, title: 'رژ لب گیاهی', category: 1, images: '/products/5.jpg', price: 72, stock_status: true, description: 'نخری فحشت میدم' }
])
</script>

<style></style>