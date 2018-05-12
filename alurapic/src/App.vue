<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <!-- <li v-for="foto of fotos"> -->
        <img :src="foto.url" :alt="foto.titulo">
      <!-- </li> -->
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'https://img.olx.com.br/images/92/922802021759458.jpg',
          titulo: 'Imagem de casa'
        },
        {
          url: 'https://www.plantapronta.com.br/projetos/140/01.jpg',
          titulo: 'Imagem de casa 2'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
