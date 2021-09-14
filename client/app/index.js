var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
]
console.log(campos);

var tbody = document.querySelector('table tbody');


document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault()
    var coluna = document.createElement('tr');

    campos.forEach(function(campo){
        var linha = document.createElement('td');
        linha.textContent = campo.value;
        coluna.appendChild(linha);
     });

     var tdVolume = document.createElement('td');
     tdVolume.textContent = campos[1].value * campos[2].value;

     coluna.appendChild(tdVolume);

     tbody.appendChild(coluna);

     campos[0].value = '';
     campos[1].value = 1;
     campos[2].value = 0;
     campos[0].focus();
    })
