
const searched_word = document.getElementById("searched_word");
const word_display = document.getElementById("word_display");
const definition_display = document.getElementById("definition");
const search_button = document.getElementById("search_button");


const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a7326966amshfe3c141cbcfe76ep1d6689jsnb349f4c209a0',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => {return response.json()})
        .then((response) => {

            console.log(response);
            word_display.innerHTML = `Meaning of : ${response.word}`;
            definition.innerHTML = response.definition.replace("2.",'<br>2.').replace("3.",'<br>3.').replace("4.",'<br>4.').replace("5.",'<br>5.') ;

        })
        .catch((err) => {console.error(err)});
}

search_button.addEventListener('click',(e)=>{

    e.preventDefault();
    dictionary(searched_word.value);
})
    
    

