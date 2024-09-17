var div = document.getElementById('frase');
var texto = 'Independent developers. Great ideas';
console.log('fora da função');

function frase(str, el) {
  var char = str.split('');  
  console.log('chega aqui');
  
  function escrever() {
    var typer = setInterval(function() {
      if (!char.length) {
        clearInterval(typer);  
        setTimeout(apagar, 1000); 
        return;
      }
      var next = char.shift(); 
      el.innerHTML += next;
    }, 100);
  }

  function apagar() {
    setTimeout(function() {
      el.innerHTML = ''; 
      char = str.split(''); 
      escrever(); 
    }, 500);  
  }

  escrever(); 
}

frase(texto, div); 


