<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.url">
        <meu-painel :titulo="foto.titulo">
          <!-- aqui dentro tenho um conteúdo que está sendo renderizando dentro de slot em Painel.vue -->
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
          <!-- <meu-botao :tipo="button" rotulo="REMOVER" @click.native="remove(foto)"/> -->
          <!-- Colocamos o @click.native="foo" para tags que são uma caixa preta reconhecerem o evento
          e passarem para os componentes internos. -->
          <!-- Passando uma função  para o elemento filho e apartir da confirmação dele
          executamos a função remove() que está no Home.vue -->
          <meu-botao
            :tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="false"
            estilo="perigo"/>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>


<script>
import Painel from '../shared/painel/Painel'
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva'
import Botao from "../shared/botao/Botao";

export default {
  // Chave para importar os componentes dentro de App.vue
  components: {
    'meu-painel': Painel, // seu o nome é igual aqui posso fazer Painel
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
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

  methods: {
    remove(foto) {
      alert('remover foto ' + foto.titulo)
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
