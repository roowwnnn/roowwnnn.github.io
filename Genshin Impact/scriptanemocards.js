var anemonames = [
    "Venti",
    "Jean",
    "Wanderer",
    "Xiao",
    "Kaedehara Kazuha"
];


var anemopics = [
    "Venti_Card-min.png",
    "Jean_Card-min.png",
    "Wanderer_Card-min.png",
    "Xiao_Card-min.png",
    "Kaedehara_Kazuha_Card-min.png"
];


for (var i = 0; i < anemonames.length; i++) {
    var MyContainer2 = document.getElementById("anemoCharacterContainer")
    MyContainer2.innerHTML += `
  <div class="col-xl-3 col-md-4 col-sm-6 col-12">
<div class="card my-3" id="c${i}" onmouseover="addShadow('c${i}')" onmouseout="removeShadow('c${i}')">
      <img src="imgs/characters/${anemopics[i]}" class="card-img-top">
      <div class="card-body">
        <p class="card-title characterName" id="name">${anemonames[i]}</p>
        <p class="card-text" id="caption"></p>
      </div>
    </div>
  </div>`;


}