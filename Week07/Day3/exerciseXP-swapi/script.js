document.addEventListener("DOMContentLoaded", () =>{
    const loadingAnimation = document.getElementById("loading");
    const errorMessage = document.getElementById("errorMessage");
    const characterInfo = document.getElementById("characterInfo");
    const characterName = document.getElementById("name");
    const characterHeight = document.getElementById("height");
    const characterGender = document.getElementById("gender");
    const characterBirthYear = document.getElementById("birthYear");
    const characterHomeWorld = document.getElementById("homeWorld");
    const loadCharacterBtn = document.getElementById("loadCharacter");

    loadCharacterBtn.addEventListener('click', async () => {
        loadingAnimation.style.display = 'block';
        characterInfo.style.display = 'none';
        errorMessage.style.display = 'none';

        try{
            const id = Math.floor(Math.random() * 83) + 1 //random an id between 1 and 83
            const info = await getCharacterInfo(id);
            const homeWorld = await getCharacterHomeWorld(info.homeworld);

            displayCharacterInfo(info,homeWorld);
        }
        catch(error){
            errorMessage.style.display = 'block';
        }
        finally{
            loadingAnimation.style.display = 'none';
            
        }
    });

    async function getCharacterInfo(id){
        url = 'https://www.swapi.tech/api/people/' + id;

        const response = await fetch(url)
        const data = await response.json();
        return data.result.properties;
    }

    async function getCharacterHomeWorld(url){
        const response = await fetch(url);
        const data = await response.json();
        return data.result.properties.name;
    }

    function displayCharacterInfo(info,homeWorld){
        characterName.textContent = info.name;
        characterHeight.textContent = info.height;
        characterGender.textContent = info.gender;
        characterBirthYear.textContent = info.birth_year;
        characterHomeWorld.textContent = homeWorld;

        characterInfo.style.display = 'block';
    }
});