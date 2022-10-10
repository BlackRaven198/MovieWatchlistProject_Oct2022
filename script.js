console.log('hello')
searchBtn = document.getElementById('search-bar-btn')
searchBar = document.getElementById('search-bar')

//global variables 
input = document.getElementById('search-bar').value


//------------------------------------------------------------------------------------------
//THIS IS A TEST SECTION FOR CODE!!//
let testBtn = document.getElementById('test-btn')
testBtn.addEventListener('click', function () {
    console.log('this is a test button click')
})
function handleClick() {
    fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=da1b8236& " )
        .then(res => res.json())
        .then(data => console.log(data))
}
handleClick()
//------------------------------------------------------------------------------------------



//Search bar = When Enter is pressed send the request as well  
searchBar.addEventListener('keyup', function (e){
    if (e.keyCode ===13 ) {
        console.log('enter key')
        input = document.getElementById('search-bar').value
        console.log(input)
        fetch(`http://www.omdbapi.com/?t=${ input }&apikey=da1b8236`)
            .then(res => res.json())
            .then(data => handleData(data) & console.log('hello again') & printMovieData(data))
    }
})
// Search Button click and send a pull request to the API  
searchBtn.addEventListener('click', () => {
    console.log('click')
    input = document.getElementById('search-bar').value
    console.log(input)
    fetch(`http://www.omdbapi.com/?t=${ input }&apikey=da1b8236`)
        .then(res => res.json())
        .then(data => handleData(data) & printMovieData(data))
})
//callback function that runs inside of search click  
let handleData = (data) => { console.log(data.title)}

//FETCH API Global callback function//




//Function to create the body and container div with movie data
let printMovieData = (data) => { 
    console.log('print movie data')
    console.log(data)
    document.getElementById('movie-data').innerHTML = `
        <div class="container-movie-card"> 
            <div class="movie-card"> 

                <div class="card-left">
                    <img id="card-left-img" src="${data.Poster}">
                </div>

                <div class="card-right">
                    <div class="card-title">
                         <h3 id="movie-card-title"> ${data.Title}</h3>
                         <p id="rating"> ${data.Ratings[0].Value}</p>
                    </div>
                    
                    <div class="card-runtime-genre-add">
                        <p id="card-runtime"> ${data.Runtime} </p>
                        <p> ${data.Genre} </p>
                        <a href="watchlist.html">➕Watchlist</a>
                    </div>
                    <div id="description"> 
                        <p> ${data.Plot} </p>
                    </div>
                </div>
            

            </div>
            <div id="border-bottom"></div>
        </div>
    `

}
// printMovieData()

//   <img id="poster-img" src="${data.poster}">