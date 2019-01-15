function exibirPosts() {
    var resultado = document.getElementById('exibePosts');
    resultado.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            resultado.innerHTML = sucesso(response);
        })
        .catch(function (error) {
            resultado.innerHTML = erro(error);
        });
}
//--------------------------------------------------
function sucesso(response) {
    return '<h6>Resultado:<h6>' +
        '<pre>' + JSON.stringify(response.data, null, '\t', ) + '</pre>'

}

function erro(error) {
    return '<h6>Desculpe! Ocorreu um erro.</h6>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '<\pre>';
}
//--------------------------------------------------

function exibirPostID() {
    var resultado = document.getElementById('exibePostsID');
    var userId = document.getElementById('inputID').value;
    resultado.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)

        .then(function (response) {

            resultado.innerHTML = sucesso(response);
        })
        .catch(function (error) {
            resultado.innerHTML = erro(error);
        })
}
//--------------------------------------------------

document.getElementById('formCriarPost').addEventListener('submit', criarPost);

function criarPost(e) {
    var resultado = document.getElementById('exibePostCriado');
    var titulo = document.getElementById('inputTitulo').value;
    var texto = document.getElementById('inputTexto').value;
    resultado.innerHTML = '';

    axios.post('https://jsonplaceholder.typicode.com/posts', {

            title: titulo,
            body: texto,
            userId: 1


        })
        .then(function (response) {

            resultado.innerHTML = sucesso(response);
        })
        .catch(function (error) {
            resultado.innerHTML = erro(error);
        })
    e.preventDefault();
}
//--------------------------------------------------

function excluiPost() {
    var resultado = document.getElementById('exibePostsExcluido');
    var postId = document.getElementById('inputIDexcluido').value;
    resultado.innerHTML = '';

    axios.delete('https://jsonplaceholder.typicode.com/posts/' + postId)

        .then(function (response) {
            resultado.innerHTML = sucesso(response);
        })
        .catch(function (error) {
            resultado.innerHTML = erro(error);
        })
}
//--------------------------------------------------
function fecharPosts() {
    var resultado = document.getElementById('exibePosts');
    resultado.innerHTML = '';
    var resultado = document.getElementById('exibePostsID');
    resultado.innerHTML = '';
    var resultado = document.getElementById('exibePostCriado');
    resultado.innerHTML = '';
    document.getElementById('inputID').value = '';
    document.getElementById('inputTitulo').value = '';
    document.getElementById('inputTexto').value = '';
}
