<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Cadastro Fornecedor</h2>
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input id="nome" v-model="nome" type="text" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="text" />
      </div>
      <div class="form-group">
        <label for="cnpj">CNPJ:</label>
        <input id="cnpj" v-model="cnpj" type="text" />
      </div>
      <div class="form-group">
        <label for="comentario">Comentário:</label>
        <input id="comentario" v-model="comentario" type="text" />
      </div>
      <div class="modal-actions">
        <button @click="salvarFornecedor">Salvar</button>
        <button @click="fecharModal">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  emits: ['fecharModalEvento'],
  data() {
    return {
      showModal: false,
      nome: '',
      email: '',
      cnpj: '',
      comentario: ''
    }
  },
  methods: {
    fecharModal() {
      this.nome = ''
      this.email = ''
      this.cnpj = ''
      this.comentario = ''
      this.$emit('fecharModalEvento')
    },
    salvarFornecedor() {
      const fornecedor = {
        nome: this.nome,
        email: this.email,
        cnpj: this.cnpj,
        comentario: this.comentario
      }
      try {
        axios.post('/api/fornecedores/', fornecedor)
      } catch (error) {
        console.error('Erro ao salvar fornecedor:', error)
      }
      this.fecharModal()
    }
  }
}
</script>

<style scoped>
/* Estilize o modal de acordo com suas preferências */
.modal {
  /* Estilo do modal de fundo */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 10px;
}
</style>
