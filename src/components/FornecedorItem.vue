<template>
  <div class="flex items-center space-x-4">
    <input
      v-for="campo in CamposFornecedor"
      :id="campo"
      :key="campo"
      type="text"
      class="w-32 flex-1 rounded-md border px-2 py-1"
      :placeholder="campo"
      :value="fornecedor[campo]"
      :readonly="!editavel"
    />
    <EditButton v-if="!editavel" @click="editar" />
    <SaveButton v-if="editavel" @click="salvaERecarrega" />
    <DeleteButton @click="deletar" />
  </div>
</template>

<script>
import axios from 'axios'
import EditButton from '@/components/EditButton.vue'
import DeleteButton from '@/components/DeleteButton.vue'
import SaveButton from '@/components/SaveButton.vue'
export default {
  name: 'FornecedorItem',
  components: { EditButton, DeleteButton, SaveButton },
  props: {
    fornecedor: {}
  },
  emits: ['reloadListFornecedores'],
  data() {
    return {
      CamposFornecedor: ['id', 'cnpj', 'nome', 'email', 'comentario'],
      editavel: false
    }
  },
  methods: {
    editar() {
      this.editavel = true
    },
    salvar() {
      this.editavel = false
      const dadosAtualizados = {}
      for (const campo of this.CamposFornecedor) {
        dadosAtualizados[campo] = this.fornecedor[campo]
      }

      try {
        axios.post(`/api/fornecedores/${this.fornecedor.id}`, dadosAtualizados)
      } catch (error) {
        console.error('Erro ao salvar fornecedor:', error)
      }
    },
    deletar() {
      try {
        axios.delete(`/api/fornecedores/${this.fornecedor.id}`)
        this.reloadListFornecedores()
      } catch (error) {
        console.error('Erro ao deletar fornecedor:', error)
      }
    },
    reloadListFornecedores() {
      this.$emit('reloadListFornecedores')
    },
    salvaERecarrega() {
      this.salvar()
      this.reloadListFornecedores()
    }
  }
}
</script>
