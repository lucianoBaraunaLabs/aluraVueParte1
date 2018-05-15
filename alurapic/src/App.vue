<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <!-- aqui dentro tenho um conteúdo que está sendo renderizando dentro de slot em Painel.vue -->
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>
      </li>
    </ul>

  </div>
</template>


<script>
import Painel from './components/shared/painel/Painel'
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva'

export default {
  // Chave para importar os componentes dentro de App.vue
  components: {
    'meu-painel': Painel, // seu o nome é igual aqui posso fazer Painel
    'imagem-responsiva': ImagemResponsiva
  },

  // Dados que vão ser utilizados no componente
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },

  computed: { // aqui fica os métodos do componente

   fotosComFiltro() {
     if(this.fotos){
       let exp = new RegExp(this.filtro.trim(), 'i');
       console.log(exp)
       return this.fotos.filter(foto => exp.test(foto.titulo));
     }else {
       this.fotos
     }
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


  .filtro {
    display: block;
    width: 100%;
  }


</style>
