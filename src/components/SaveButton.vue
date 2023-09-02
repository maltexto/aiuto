<template>
  <button class="hover:shadow-green rounded border-0 bg-green-500 px-3 py-3 font-medium text-white">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SaveButton',
  data() {
    return {
      label: 'Salvar'
    }
  },
  methods: {}
}
</script>
