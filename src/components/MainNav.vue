<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="border-my-gray-1 flex h-full flex-nowrap border-b border-solid px-8">
        <a :href="url" class="flex h-full items-center text-xl">{{ title }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItens" :key="item" class="ml-9 h-full first:ml-0">
              <p class="flex h-full items-center py-2.5">{{ item }}</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      title: 'auito',
      menuItens: ['Fornecedores']
    }
  }
}
</script>
