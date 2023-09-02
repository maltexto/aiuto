<template>
  <button
    class="hover:shadow-green rounded border-0 bg-green-500 px-3 py-3 font-medium text-white"
    style="width: 100px; height: 40px"
  >
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  name: 'AddButton',
  data() {
    return { buttonLabel: 'Cadastrar' }
  }
}
</script>
