<template>
  <button class="hover:shadow-red rounded border-0 bg-red-500 px-3 py-3 font-medium text-white">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'DeleteButton',
  data() {
    return {
      label: 'Deletar'
    }
  },
  methods: {}
}
</script>
