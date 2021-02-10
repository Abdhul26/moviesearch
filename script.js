(function () {
    
    var button = document.getElementById("submit");
    button.addEventListener("click", function () {
        var searchBox = document.getElementById("searchbox").value;
        if (searchBox){
            tvsearch(searchBox);
        }else {
            console.log("please enter");
        }
    })
    async function tvsearch(i) {
        let api = `https://api.tvmaze.com/search/shows?q=${i}`;
        fetch(api)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                throw Error("ERROR")
                }
                return response.json();
            })
            .then(data => {
                const html = data.map(movie => {
                    console.log(movie.show);
                    return `<h3>${movie.show.name}</h3>
                    <p>${movie.show.genres}</p>
                     <img src="${movie.show.image.medium}" alt="${movie.show.name}">
                    `
                })
                    .join("");
                console.log(html);
                document.querySelector("#result").insertAdjacentHTML("afterbegin",html)
        })
    }
}())