var visionColors ={
    "Anemo": "#3e9f85",
    "Geo": "#e8c660",
    "Electro": "#6333ae",
    "Dendro": "#bacd84",
    "Hydro": "#2d4286",
    "Cryo": "#677ad9",
    "Pyro" : "#752c18"

}

var searchResultCard = document.getElementById("searchResultCard");


const loadData = async (searchTerm) => {
    if (searchTerm.trim().toLowerCase() === "none" || searchTerm.trim() === "") {
        searchResultCard.innerHTML = `
            <div class="alert alert-warning mx-auto p-5" style="max-width: 500px;">
                <strong>Invalid Input!</strong> Please enter a valid character/weapon name.
            </div>
        `;
        return;
    }

    try {
 
        const characterResponse = await fetch(`https://genshin.jmp.blue/characters/${searchTerm}`);
        const weaponResponse = await fetch(`https://genshin.jmp.blue/weapons/${searchTerm}`);

        
        if (characterResponse.ok) {
            const data = await characterResponse.json();

            searchResultCard.innerHTML = `
                <a href="view.html?result=${data.id}"><div class="shadow card mx-auto p-5 searchResult" style="background-color: ${visionColors[data.vision]}">
                    <div class="row">
                        <div class="col-12 col-md-6" style="height: 270px;">
                            <div class="container searchImgContainer p-3" style="width:270px; height: 270px; overflow: hidden;">
                                <img class="img-fluid" src="https://genshin.jmp.blue/characters/${data.id}/icon-big">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-5 searchResultTextContainer" style="height: 270px;">
                            <p><b>Name:</b> ${data.name}</p>
                            <p><b>Vision:</b> ${data.vision}</p>
                            <p><b>Rarity:</b> ${data.rarity} Star</p>
                        </div>
                    </div>
                </div></a>
            `;
        } else if (weaponResponse.ok) {
            const data = await weaponResponse.json();

            searchResultCard.innerHTML = `
                <a href="view.html?result=${data.id}"><div class="shadow card mx-auto p-5 searchResult" style="background-color: black">
                    <div class="row">
                        <div class="col-12 col-md-6" style="height: 270px;">
                            <div class="container searchImgContainer" style="width:270px; height: 270px; overflow: hidden;">
                                <img class="img-fluid" src="https://genshin.jmp.blue/weapons/${data.id}/icon">
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-5 searchResultTextContainer" style="height: 270px;">
                            <p><b>Name:</b> ${data.name}</p>
                            <p><b>Rarity:</b> ${data.rarity} Star</p>
                            <p><b>Type:</b> ${data.type}</p>
                        </div>
                    </div>
                </div></a>
            `;
        } else {
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

function searchData() {
    var searchTerm = document.getElementById("searchTerm").value;
    loadData(searchTerm);
}
