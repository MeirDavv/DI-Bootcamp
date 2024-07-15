
// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    const userInput = document.getElementById("category").value;
    one(userInput)
})

// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

async function one(userInput){
    const limit = 1;
    const url = 'https://api.giphy.com/v1/gifs/random' + '?limit=' + limit + '&tag=' + userInput + '&api_key=' + apiKey;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('HTTP error')
        }
        const data = await response.json()
        const imgUrl = await data.data.images.original.url;
        addImageToDom(imgUrl);
    }
    catch(err){
        console.error(err)
    }
}

function addImageToDom(imgUrl){
    const divElement = document.createElement("div");
    divElement.classList.add("giphyImg");
    document.body.appendChild(divElement)
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src",imgUrl);
    const deleteButtonElement = document.createElement("button")
    deleteButtonElement.innerText = 'delete';

    deleteButtonElement.addEventListener('click',removeItem);

    divElement.appendChild(imgElement);
    divElement.appendChild(deleteButtonElement);
}

// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.

function removeItem(){
    this.parentNode.remove();
}

// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

document.getElementById('deleteAllGifs').addEventListener('click', deleteAllGifs);

function deleteAllGifs(){
    const gifs = Array.from(document.getElementsByClassName("giphyImg"));
    for(const gif of gifs){
        gif.remove();
    }
}