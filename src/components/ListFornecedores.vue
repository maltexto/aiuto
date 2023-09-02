<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex flex-col space-y-4">
      <AddButton @click="castrarFornecedor" />
      <FornecedorItem
        v-for="fornecedor in fornecedores"
        :key="fornecedor.id"
        :fornecedor="fornecedor"
        @reload-list-fornecedores="getForncedores"
      />
    </div>
    <ModalCadastro v-if="showModal" @fechar-modal-evento="fecharModal" />
  </div>
</template>

<script>
import axios from 'axios'
import FornecedorItem from './FornecedorItem.vue'
import AddButton from './AddButton.vue'
import ModalCadastro from './ModalCadastro.vue'

export default {
  name: 'ListFornecedores',
  components: { FornecedorItem, AddButton, ModalCadastro },
  data() {
    return {
      fornecedores: [],
      showModal: false
    }
  },
  mounted() {
    this.getForncedores()
  },
  methods: {
    async getForncedores() {
      try {
        const response = await axios.get('/api/fornecedores')
        this.fornecedores = response.data
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error)
      }
    },

    castrarFornecedor() {
      this.showModal = true
    },

    fecharModal() {
      this.showModal = false
    }
  }
}
</script>
