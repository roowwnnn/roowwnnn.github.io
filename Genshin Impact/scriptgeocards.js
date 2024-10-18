var geonames = [
    "Zhongli",
    "Noelle",
    "Ningguang",
    "Albedo",
    "Yunjin"
  ];
  
  
  var geopics = [
    "Zhongli_Card-min.png",
    "Noelle_Card-min.png",
    "Ningguang_Card-min.png",
    "Albedo_Card-min.png",
    "Yun_Jin_Card-min.png"
  ];
  
  
  for (var i = 0; i < geonames.length; i++) {
    var MyContainer = document.getElementById("geoCharacterContainer")
    MyContainer.innerHTML += `
    <div class="col-xl-3 col-md-4 col-sm-6 col-12">
      <div class="card my-3 mx-3" id="c`+i+` " onmouseover="addHighlight(c`+i+`)" onmouseout="removeHighlight(c`+i+`)">
        <img src="imgs/characters/${geopics[i]}" class="card-img-top">
        <div class="card-body">
          <p class="card-title characterName" id="name">${geonames[i]}</p>
          <p class="card-text" id="caption"></p>
        </div>
      </div>
    </div>`;
  
    
  }

