// function cria um novo objeto Function. Chamar o construtor diretamente pode criar funções dinamicamente. 
//getMovieInfosOMDB(title) buscar o titulo do filme digitado.
function getMovieInfosOMDB(title){
    //const é uma variavel, que não muda,url é o caminho, ou seja o enderenço onde vai buscar informaçõess do filme.
    //title é o titulo do filme digitado.
    const url = `http://www.omdbapi.com/?t=${title}&apikey=790af7bc`  
     // fetch busca ou procura o enderenço que esta na tag "url" que é um enderenço do site onde vai buscar as informaçoes,e dessa forma
     //fornece uma maneira facil e logica para buscar recursos de assincronizada atraves da rede.
    fetch(url)
    //.then respode duas formas,dois argumentos, podendo ser verdadeiro(true) ou falso(false).
    .then(response => response.json())
    .then(data => {
        // if significa "se", para ver se o filme não existe.
        //data.Response, quando ele for pedir a informações do filme, o data vai da um mapa, retornando um valor,
        // uma informação, ou seja, retorna a informação que o filme não existe(que vai ser nulo) ou que existe(dar um mapa que retorna os dados).
        if(data.Response == 'False'){
            //descriptionBodyNotFound é um id(ou seja um elemento),que junto com a tag "textcontent" representa
            // o conteúdo de texto de um nó e dos seus descendentes ou seja a tag textcontent é quem buscar e representa o texto.
            descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
            //descriptionBodyNotFound é um id(ou seja um elemento),que junto com a tag style é usando para estilizar o programa junto com 
            // a marginBottom, a margem area da parte inferior(baixo) de um elemento,ela possui tres chaves, valor negativo, possitivo e zero. 
            descriptionBodyNotFound.style.marginBottom = '30px'
            //document é um conjunto de funções dedicados ao objeto no javascript no seu modelo de escrever programas,
            //ele tambem é responsavel por conceder o codigo javascript  todo acesso a arvore DOM do navegador, junto com getElementById(),
            // e o innerHTML que retorna todo o texto e o html que existem no elemento(id). Ele retorna todo o html existente, se não existe ,ele retorna nulo.
            document.getElementById("movieTitle").innerHTML = ""
            document.getElementById("movieYear").innerHTML = ""
            document.getElementById("movieGenre").innerHTML = ""
            document.getElementById("movieRuntime").innerHTML = ""
            document.getElementById("imdbRating").innerHTML = ""
            document.getElementById("movieInfo").innerHTML = ""
            document.getElementById("movieWriter").innerHTML = ""
            document.getElementById("movieDirector").innerHTML = "" 
            document.getElementById("movie").innerHTML = "" 
            document.getElementById("movietext").innerHTML = "" 
            //moviePoster é o elemento id que vai ser estilizado com a tag style com uma imagem de fundo, que usa a tag
            //backgroundImage (imagem de fundo) e url é o enderenço dessa imagem.
            moviePoster.style.backgroundImage = `url(filmenaoencontrado.jpg)`
        // else é o contrario de if, se if foi falso, o else é verdadeiro.
        } 
        
        else {

            //no else todos começam com um elemnto(id) que junto com a tag textContent, essa tag  serve para que obtermos o valor de no TEXT_NODE . 
            //Text_node são aqueles que possuem apenas texto.Por exemplo, usar textContent em um h2 , span ou div retorna o conteúdo textual deles.
            //data,é quem  pede as informações do filme, a data vai da um mapa, retornando um valor,
            // uma informação, ou seja, retorna os dados.
            descriptionBodyNotFound.textContent = "";
            
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            imdbRating.textContent = data.imdbRating
            movieInfo.textContent = data.Plot
            movieWriter.textContent = data.Writer
            movieDirector.textContent = data.Director

            //moviePoster é o elemento id que vai ser estilizado com a tag style com uma imagem de fundo, que usa a tag
            //backgroundImage (imagem de fundo) e url é o enderenço dessa imagem, mais nesse caso a data vai busca a imagem.
            moviePoster.style.backgroundImage = `url(${data.Poster})`
        }
        
        
     })  
}
// var é uma variavel, o var vem antes do nome da variavel.
//form é um identificador de ferramentas do html que permite a criação de documentos interativos,no http(www)
//document é um conjunto de funções dedicados ao objeto no javascript no seu modelo de escrever programas,
//ele tambem é responsavel por conceder o codigo javascript todo acesso a arvore DOM do navegador
var form = document.getElementById('formSearch');
var title = document.getElementById('title');

form.addEventListener('submit', function(e) {
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});
