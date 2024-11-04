var characterContainer = document.getElementById("weaponContainer");

const loadWeapons = async () => {
    const weapons = await fetch ('https://genshin.jmp.blue/weapons');
    const weaponResponse = await weapons.json();

    // console.log(character.length);

    for (var i = 0; i <= weaponResponse.length; i++ ){
       const weaponData = await fetch (`https://genshin.jmp.blue/weapons/${weaponResponse[i]}`);
       const weaponDataResponse = await weaponData.json();
       

       characterContainer.innerHTML += `
       <div class="col-12 col-sm-12 col-md-4 col-xl-3 p-5">
            <div class="shadow card mx-auto weaponCard" style="height: 300px; width: 255px;">
                <div class="row p-3">
                    <div class="container cardImgContainer"
                        style="height: 150px; width: 169px; border-radius: 50px; border-style: ridge;">
                        <img src="https://genshin.jmp.blue/weapons/${weaponResponse[i]}/icon" class="img-fluid">
                    </div>
                </div>
                <div class="row">
                    <div class="container weaponcardTextContainer p-3" style="text-align: center;">
                        <p><b>${weaponDataResponse.name}</b></p>
                    </div>
                </div>
            </div>
        </div>
       `


    }

}

loadWeapons();