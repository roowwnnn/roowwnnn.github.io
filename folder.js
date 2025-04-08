var projectfolderpics = [
    "projectfolder1.png",
    "projectfolder2.png"
   

];
var projectfoldernames = [
    "WEB DEV",
    "APP DEV"
];

for (var i = 0; i < projectfolderpics.length; i++){
    var projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML += `
       <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-5" style="display:flex; justify-content: center;">
                    <a href="projects/${projectfoldernames[i]}.html">
                        <div class="container folder p-0"
                            style="max-width: 400px; text-align: center; position: relative; display: flex; justify-content: left; align-items: start;">
                            <div class="textContainer mt-1"
                                style="background-color: #181616; height:30px; width: 115px; border-radius: 20px; position:absolute; color: white; font-size: 18px;">
                                <p class="m-0"><b>${projectfoldernames[i]}</b></p>
                            </div>
                            <img src="imgs/${projectfolderpics[i]}" class="img-fluid">
                        </div>
                    </a>
        </div>
    `
}
