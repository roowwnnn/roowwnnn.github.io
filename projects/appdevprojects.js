var projectpics = [
    "appdevproject2.PNG",
    "appdevproject3.png",


];

for (var i = 0; i < projectpics.length; i++){
    var projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-5"
                        style="display:flex; justify-content: center;">
                        <a href="../ADET/A0${[3+i]}/index.html">
                            <div class="container folder p-0"
                                style="max-width: 400px; text-align: center; position: relative; display: flex; justify-content: left; align-items: start; border-radius:20px">
                                <div class="textContainer mt-1"
                                    style="background-color: #181616; height:30px; width: 115px; border-radius: 20px; position:absolute; color: white; font-size: 18px;">
                                    <p class="m-0"><b>Project ${[3+i]}</b></p>
                                </div>
                                <img src="../imgs/${projectpics[i]}" class="img-fluid">
                            </div>
                        </a>
        </div>
    `
}
