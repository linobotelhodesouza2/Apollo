// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA2t1UP-9F3qKvgdfFdLL7L13S",
    authDomain: "myapp1-7da01.firebaseapp.com",
    databaseURL: "https://myapp1-7da01-default-rtdb.firebaseio.com",
    projectId: "myapp1-7da01",
    storageBucket: "myapp1-7da01.appspot.com",
    messagingSenderId: "41171031400",
    appId: "1:41171031400:web:ac785147dab508e21072dd"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao banco de dados
var database = firebase.database();

// Referências aos elementos do formulário
var dataForm = document.getElementById('dataForm');
var savedData = document.getElementById('savedData');

// Ao submeter o formulário
dataForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura dos dados do formulário
    var produto = document.getElementById('produto').value;
    var perimetro = document.getElementById('perimetro').value;
    var corte = document.getElementById('corte').value;
    var velocidade = document.getElementById('velocidade').value;
    var chagrim = document.getElementById('chagrim').value;
    var repeticao = document.getElementById('repeticao').value;

    // Salvando os dados no Firebase
    var newData = {
        produto: produto,
        perimetro: perimetro,
        corte: corte,
        velocidade: velocidade,
        chagrim: chagrim,
        repeticao: repeticao
    };

    var newKey = database.ref().child('produtos').push().key;
    var updates = {};
    updates['/produtos/' + newKey] = newData;
    database.ref().update(updates).then(function () {
        alert("Dados salvos com sucesso!");

        // Limpar formulário
        dataForm.reset();

        // Atualizar lista suspensa
        updateDropdown();
    }).catch(function (error) {
        console.error("Erro ao salvar dados: ", error);
    });
});

// Função para atualizar a lista suspensa com os dados salvos
function updateDropdown() {
    // Limpa a lista suspensa
    savedData.innerHTML = '<option value="">Selecione um produto</option>';

    // Recupera os dados do Firebase
    database.ref('produtos').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var option = document.createElement('option');
            option.textContent = childData.produto;
            option.value = childSnapshot.key;
            savedData.appendChild(option);
        });
    });
}

// Chama a função para atualizar a lista suspensa quando a página carrega
updateDropdown();
