<template>
  <header>
    <div>
      <MainNav />
    </div>
  </header>

  <ListFornecedores />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import ListFornecedores from '@/components/ListFornecedores.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    ListFornecedores
  }
}
</script>
