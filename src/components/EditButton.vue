<template>
  <button class="rounded border-0 bg-my-blue-1 px-3 py-3 font-medium text-white hover:shadow-blue">
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  name: 'EditButton',
  data() {
    return { buttonLabel: 'Editar' }
  }
}
</script>
