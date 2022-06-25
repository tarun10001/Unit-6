document.getElementById("search").addEventListener("input", () => {
    debounce(main, 600)
})


let timerID;
function debounce(func, delay) {
    if (timerID) {
        clearTimeout(timerID);
    }
    timerID = setTimeout(function () {
        func();
    }, delay);
}

async function searchMovies() {
    try {
        let input = document.getElementById("search").value;
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=166b8009&s=${input}`);

        let data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}


async function main() {
    let data = await searchMovies();

    if (data === undefined) {
        return false;
    }
    appendData(data)
}

let movies_div = document.getElementById('movies');

function appendData(movies) {
    movies_div.innerHTML = null;
    movies.Search.forEach(function (elem) {
        let mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'smallDiv');

        let image = document.createElement("img");
        image.src = elem.Poster;
        image.setAttribute("id", "smallImg")

        let div1 = document.createElement("p");
        div1.setAttribute("id", "smallDiv2");

        let title = document.createElement("p");
        title.innerHTML = "Title : " + elem.Title;
        title.setAttribute("id", "title");

        let year = document.createElement("p")
        year.innerHTML = "Year : " + elem.Year

        div1.append(title, year);
        mainDiv.append(image, div1)
        movies_div.append(mainDiv);
    })
}