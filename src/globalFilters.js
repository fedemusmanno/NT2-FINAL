import Vue from 'vue'

Vue.filter('reverse', function(value) {
    return value.split('').reverse().join('')
})

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})

Vue.filter('pasarAminuscula', function(value) {
  return value.toLowerCase()
})

Vue.filter('intercalarEmpMay', function(value) {
return  value.toLowerCase().split('').map((letra, index) => {
  if (index % 2 === 0) {
      return letra.toUpperCase()
  }
  return letra
}).join('')
})

Vue.filter('intercalarEmpMin', function(value) {
  return  value.toLowerCase().split('').map((letra, index) => {
  if (index % 2 !== 0) {
      return letra.toUpperCase()
  }
  return letra
}).join('')
})

Vue.filter('codificar', function(value) {
  const miArray = value.toLowerCase().split('')
  const arrayFinal = [];
  miArray.forEach(letra => {
    switch(letra){
      case 'a':
        letra ='u';
        break;
      case 'e':
          letra ='o';
          break;
      case 'o':
        letra ='e';
        break;
      case 'u':
        letra ='a';
        break;
    }
    arrayFinal.push(letra);
  });
  return arrayFinal.join('');
  })