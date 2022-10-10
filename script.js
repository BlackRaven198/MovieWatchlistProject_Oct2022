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
        fetch(`http://www.omdbapi.com/?s=${ input }&apikey=da1b8236`)
            .then(res => res.json())
            .then(data => handleData(data) & console.log('hello again') & printMovieDataTwo(data))
    }
})
// Search Button click and send a pull request to the API  
searchBtn.addEventListener('click', () => {
    console.log('click')
    input = document.getElementById('search-bar').value
    console.log(input)
    fetch(`http://www.omdbapi.com/?s=${ input }&apikey=da1b8236`)
        .then(res => res.json())
        .then(data => handleData(data) & printMovieDataTwo(data))
})
//callback function that runs inside of search click  
let handleData = (data) => { console.log(data.title)}

//FETCH API Global callback function//




//Function to create the body and container div with movie data
//this only works for one result back using the "t" parameter ex.(t={title}) becasue it takes the data then directly acces the poster, title, ratings, and so on. Need to convert so the app shows the first 10 hits on the page. 
//Perhaps on the next build load all sites however create multiple pages for it. 
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

//Second itteration of the printMovieData function
let printMovieDataTwo = (data) => { 
    console.log('print movie data')
    console.log(data)
    document.getElementById('movie-data').innerHTML = `
        <div class="container-movie-card"> 
            <div class="movie-card"> 

                <div class="card-left">
                    <img id="card-left-img" src="${data.Search[0].Poster}">
                </div>

                <div class="card-right">
                    <div class="card-title">
                         <h3 id="movie-card-title"> ${data.Search[0].Title}</h3>
                         
                    </div>
                    
                    <div class="card-runtime-genre-add">
                        <p id="card-runtime"> ${data.Search[0].Runtime} </p>
                        <p> ${data.Search[0].Genre} </p>
                        <a href="watchlist.html">➕Watchlist</a>
                    </div>
                    <div id="description"> 
                        <p> ${data.Search[0].Plot} </p>
                    </div>
                </div>
            

            </div>
            <div id="border-bottom"></div>
        </div>
    `

}
//Code that belongs in printMovieDataTwo function 
//<p id="rating"> ${data.Search[0].Ratings[0].Value}</p>





