<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>

  </div>
</template>


<script>
import Painel from './components/shared/painel/Painel.vue'

export default {
  // Chave para importar os componentes dentro de App.vue
  components: {
    'meu-painel': Painel
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },

  // Lifecycle hooks
  created() {
    // Forma de resolver com promisse
    // let promisse = this.$http.get('http://localhost:3000/v1/fotos');
    // // promisse.then(res => console.log('resposta', res.json()))
    // // promisse.then(res => {
    // //   res.json().then(res => this.fotos = res)
    // // })
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(
        fotos => this.fotos = fotos,
        err => console.log(err)
      );
  }


}
</script>

<style lang="scss">
.centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%
  }


</style>
