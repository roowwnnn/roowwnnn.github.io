var visionColors ={
    "Anemo": "#3e9f85",
    "Geo": "#e8c660",
    "Electro": "#6333ae",
    "Dendro": "#bacd84",
    "Hydro": "#2d4286",
    "Cryo": "#677ad9",
    "Pyro" : "#752c18"

}

var characterContainer = document.getElementById("characterContainer");

const loadCharacters = async () => {
    const character = await fetch ('https://genshin.jmp.blue/characters');
    const characterResponse = await character.json();

    // console.log(character.length);

    for (var i = 0; i <= characterResponse.length; i++ ){
       const characterData = await fetch (`https://genshin.jmp.blue/characters/${characterResponse[i]}`);
       const characterDataResponse = await characterData.json();
       

       characterContainer.innerHTML += `
       <div class="col-12 col-sm-12 col-md-4 col-xl-3 p-5">
            <a href="view.html?result=${characterDataResponse.id}"><div class="shadow-lg card mx-auto characterCard" style="height: 342px; width: 235px; background-color:${visionColors[characterDataResponse.vision]}; ">
                <div class="row p-3">
                    <div class="container cardImgContainer" style="height: 232px; width: 169px; border-radius: 50px; border-style: groove; background-color: white;">
                        <img src="https://genshin.jmp.blue/characters/${characterResponse[i]}/card" class="img-fluid">
                    </div>
                </div>
                <div class="row">
                    <div class="container cardTextContainer p-3" style="text-align: center;">
                        <p><b>${characterDataResponse.name}</b></p>
                    </div>
                </div>
            </div></a>
        </div>
       `


    }

}

loadCharacters();