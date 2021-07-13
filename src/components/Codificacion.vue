<template>
  <div class="Final">
    <h1>Final NT2 - Musmanno Federico</h1>
    <input type="text" v-model="textoIngresado">

    <div v-if="textoIngresado.length">
      <h2>Cantidad: {{calcularCantLetras}}</h2>
      <h2>{{textoIngresado | codificar}} (codificado)</h2>
      <h2>{{textoIngresado | pasarAmayuscula}} (Mayúscula)</h2>
      <h2>{{textoIngresado | pasarAminuscula}} (Minúscula)</h2>
      <h2>{{textoIngresado | intercalarEmpMay}} (Mayúscula/Minúscula)</h2>
      <h2>{{textoIngresado | intercalarEmpMin}} (Minúscula/Mayúscula)</h2>
    </div>
    <p>Respuestas: 1: B, 2:B, 3:C, 4:B, 5:B y C</p>

    
  </div>
</template>

<script>
export default {
  name: 'Codificacion',
  props: [],
  mounted () {
  },
  data () {
    return {
      textoIngresado: ''
    }
  },
  computed: {
    calcularCantLetras(){
      return this.textoIngresado.split('').length
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
