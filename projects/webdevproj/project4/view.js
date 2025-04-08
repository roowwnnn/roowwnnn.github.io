var visionColors ={
    "Anemo": "#3e9f85",
    "Geo": "#e8c660",
    "Electro": "#6333ae",
    "Dendro": "#bacd84",
    "Hydro": "#2d4286",
    "Cryo": "#677ad9",
    "Pyro" : "#752c18"

}

var viewResultContainer = document.getElementById ("viewResultContainer");


const loadData = async (urlParams) => {

    try {
        const characterResponse = await fetch(`https://genshin.jmp.blue/characters/${urlParams}`);
        const weaponResponse = await fetch(`https://genshin.jmp.blue/weapons/${urlParams}`);
    
        if (characterResponse.ok){
            const data = await characterResponse.json();
    
            viewResultContainer.innerHTML = `
        <div class="container" style="background-color: ${visionColors[data.vision]}; border-radius: 30px;  max-width: 1350px" id="resultContainer">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-xl-4 p-5">
                        <div class="container ImgContainer" style="max-width: 360px;  ">
                            <img class=img-fluid style = "border-radius: 30px;" src="https://genshin.jmp.blue/characters/${data.id}/card">
                        </div>
        
                    </div>
                    <div class="col-sm-12 col-md-12 col-xl-8" style="padding: 50px;">
                        <div class="container label p-1" style="text-align: center; color:white;">
                            <p><b>CHARACTERS/</b> ${data.name}</p>
                        </div>
                        <div class="container textContainer p-3" style ="border-radius: 30px; background-color: white; max-width: 770px;">
                            <p><b>Name:</b> ${data.name}</p>
                            <p><b>Vision:</b> ${data.vision}</p>
                            <p><b>Rarity:</b> ${data.rarity}</p>
                            <p><b>Weapon:</b> ${data.weapon}</p>
                            <p><b>Gender:</b> ${data.gender}</p>
                            <p><b>Nation:</b> ${data.nation}</p>
                            <p><b>Birthday:</b> ${data.birthday}</p>
    
                        </div>
                        
                    </div>
                </div>
    
    
            </div>
             
        
        `;
    
        } else if (weaponResponse.ok){
            const data = await weaponResponse.json();
    
            viewResultContainer.innerHTML = `
            <div class="container" style="background-color: #D9D9D9; border-radius: 30px;  max-width: 1350px">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-xl-4 p-5">
                        <div class="container ImgContainer" style="max-width: 360px; background-color:white; border-radius: 30px; ">
                            <img class=img-fluid style = "border-radius: 30px;" src="https://genshin.jmp.blue/weapons/${data.id}/icon">
                        </div>
        
                    </div>
                    <div class="col-sm-12 col-md-12 col-xl-8" style="padding: 50px;">
                        <div class="container label p-1" style="text-align: center;">
                            <p><b>WEAPONS/</b> ${data.name}</p>
                        </div>
                        <div class="container textContainer p-3" style ="border-radius: 30px; background-color: white; max-width: 770px;">
                            <p><b>Name:</b> ${data.name}</p>
                            <p><b>Type:</b> ${data.type}</p>
                            <p><b>Rarity:</b> ${data.rarity}</p>
                            <p><b>Base Attack:</b> ${data.baseAttack}</p>
                            <p><b>SubStat:</b> ${data.subStat}</p>
                            <p><b>Passive Name:</b> ${data.passiveName}</p>
                        </div>
                        
                    </div>
                </div>
    
    
            </div>
            `;
    
        } else{
            throw new Error('Character or weapon not found');
        }

    } catch (error) {
        searchResultCard.innerHTML = `
            <div class="alert alert-danger mx-auto p-5" style="max-width: 500px;">
                <strong>Error!</strong> ${error.message}
            </div>
        `;
    }
   
    

}

const query = window.location.search;
const urlParams = new URLSearchParams(query) 

if (urlParams.has('result')) {
    loadData(urlParams.get('result'));
    console.log('result')
  } else {
    document.getElementById("resultContainer").innerHTML = "CHARACTER/WEAPON NOT FOUND";
}