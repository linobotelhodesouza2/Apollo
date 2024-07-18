var firebaseConfig = {
    apiKey: "AIzaSyA2t1UP-9F3qKvgdfFdLL7L13S",
    authDomain: "myapp1-7da01.firebaseapp.com",
    databaseURL: "https://myapp1-7da01-default-rtdb.firebaseio.com",
    projectId: "myapp1-7da01",
    storageBucket: "myapp1-7da01.appspot.com",
    messagingSenderId: "41171031400",
    appId: "1:41171031400:web:ac785147dab508e21072dd"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var isAdmin = false;

var senha = prompt("Digite a senha de administrador para acessar a área:");
if (senha === "123") {
    isAdmin = true;
} else {
    alert("Acesso como usuário normal.");
}

document.addEventListener("DOMContentLoaded", function() {
    if (isAdmin) {
        document.getElementById('adminArea').style.display = 'block';
    }
});

function salvarDados(e) {
    e.preventDefault();
    var produto = document.getElementById('produto').value.toUpperCase();
    var perimetro = document.getElementById('perimetro').value;
    var corte = document.getElementById('corte').value.toUpperCase();
    var velocidade = document.getElementById('velocidade').value;
    var repeticao = document.getElementById('repeticao').value;
    var chagrim = document.getElementById('chagrim').value;
    var comentario = document.getElementById('comentario').value;

    if (!produto || !corte || !velocidade) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    var produtoRef = database.ref('produtos/' + produto);
    produtoRef.once('value', function(snapshot) {
        var produtoData = snapshot.val() || {};
        if (!produtoData.comentarios) {
            produtoData.comentarios = [];
        }
        produtoData.perimetro = perimetro;
        produtoData.corte = corte;
        produtoData.velocidade = velocidade;
        produtoData.repeticao = repeticao;
        produtoData.chagrim = chagrim;

        if (comentario) {
            produtoData.comentarios.push({
                data: new Date().toLocaleString(),
                texto: comentario,
                visivel: true
            });
        }

        produtoRef.set(produtoData, function(error) {
            if (error) {
                alert('Erro ao salvar os dados.');
            } else {
                alert('Dados salvos com sucesso!');
                atualizarListaProdutos();
                document.getElementById('productForm').reset();
            }
        });
    });
}

function atualizarListaProdutos() {
    var produtosSalvos = document.getElementById('produtosSalvos');
    produtosSalvos.innerHTML = '<option value="">Selecione um produto salvo</option>';
    database.ref('produtos').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var option = document.createElement('option');
            option.value = childSnapshot.key;
            option.textContent = childSnapshot.key;
            produtosSalvos.appendChild(option);
        });
    });
}

function mostrarDadosSalvos() {
    var produto = document.getElementById('produtosSalvos').value;
    if (produto) {
        var produtoRef = database.ref('produtos/' + produto);
        produtoRef.once('value', function(snapshot) {
            var data = snapshot.val();
            var dadosProduto = document.getElementById('dadosProduto');
            dadosProduto.innerHTML = '';

            document.getElementById('produto').value = produto;
            document.getElementById('perimetro').value = data.perimetro || '';
            document.getElementById('corte').value = data.corte || '';
            document.getElementById('velocidade').value = data.velocidade || '';
            document.getElementById('repeticao').value = data.repeticao || '';
            document.getElementById('chagrim').value = data.chagrim || '';

            if (data.comentarios) {
                data.comentarios.forEach(function(comentario) {
                    if (comentario.visivel || isAdmin) {
                        var comentarioDiv = document.createElement('div');
                        comentarioDiv.classList.add('comentario-item');
                        comentarioDiv.innerHTML = '<div class="comentario-header"><span class="date">' + comentario.data + '</span>';
                        if (isAdmin) {
                            comentarioDiv.innerHTML += '<span class="comentario-visibility" data-produto="' + produto + '" data-index="' + data.comentarios.indexOf(comentario) + '">&#128065;</span>';
                            comentarioDiv.innerHTML += '<span class="comentario-edit" data-produto="' + produto + '" data-index="' + data.comentarios.indexOf(comentario) + '">&#9998;</span>';
                            comentarioDiv.innerHTML += '<span class="comentario-delete" data-produto="' + produto + '" data-index="' + data.comentarios.indexOf(comentario) + '">&#10060;</span>';
                        }
                        comentarioDiv.innerHTML += '</div>';
                        comentarioDiv.innerHTML += '<div class="comentario-body">' + comentario.texto + '</div>';
                        dadosProduto.appendChild(comentarioDiv);
                    }
                });
            }
        });
    }
}

document.getElementById('productForm').addEventListener('submit', salvarDados);
document.getElementById('produtosSalvos').addEventListener('change', mostrarDadosSalvos);

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('comentario-delete')) {
        var produto = event.target.dataset.produto;
        var index = event.target.dataset.index;
        var produtoRef = database.ref('produtos/' + produto + '/comentarios/' + index);
        produtoRef.remove();
        mostrarDadosSalvos();
    } else if (event.target.classList.contains('comentario-edit')) {
        var produto = event.target.dataset.produto;
        var index = event.target.dataset.index;
        var novoTexto = prompt("Edite o comentário:");
        if (novoTexto !== null) {
            var produtoRef = database.ref('produtos/' + produto + '/comentarios/' + index + '/texto');
            produtoRef.set(novoTexto);
            mostrarDadosSalvos();
        }
    } else if (event.target.classList.contains('comentario-visibility')) {
        var produto = event.target.dataset.produto;
        var index = event.target.dataset.index;
        var visibilidadeRef = database.ref('produtos/' + produto + '/comentarios/' + index + '/visivel');
        visibilidadeRef.once('value', function(snapshot) {
            var visivel = snapshot.val();
            visibilidadeRef.set(!visivel);
            mostrarDadosSalvos();
        });
    }
});

atualizarListaProdutos();
