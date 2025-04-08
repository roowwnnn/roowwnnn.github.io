var electronames = [
    "Raiden Shogun",
    "Beidou",
    "Clorinde",
    "Cyno",
    "Dori",
    "Fischl",
    "Keqing",
    "Kujou Sara",
    "Kuki Shinobu",
    "Lisa",
    "Razor",
    "Sethos",
    "Yae Miko"
];

var electropics = [
    "Raiden_Shogun_Card-min.png",
    "Beidou_Card-min.png",
    "Clorinde_Card-min.png",
    "Cyno_Card-min.png",
    "Dori_Card-min.png",
    "Fischl_Card-min.png",
    "Keqing_Card-min.png",
    "Kujou_Sara_Card-min.png",
    "Kuki_Shinobu_Card-min.png",
    "Lisa_Card-min.png",
    "Razor_Card-min.png",
    "Sethos_Card-min.png",
    "Yae_Miko_Card-min.png"
];





for (var i = 0; i < electronames.length; i++) {
    var MyContainer = document.getElementById("electroCharacterContainer")
    MyContainer.innerHTML += `
    <div class="col-xl-3 col-md-4 col-sm-6 col-12">
      <div class="card my-3" id="c${i}" onmouseover="addShadow('c${i}')" onmouseout="removeShadow('c${i}')">
        <img src="imgs/characters/${electropics[i]}" class="card-img-top">
        <div class="card-body">
          <p class="card-title characterName" id="name">${electronames[i]}</p>
          <p class="card-text" id="caption"></p>
        </div>
      </div>
    </div>`;


};






