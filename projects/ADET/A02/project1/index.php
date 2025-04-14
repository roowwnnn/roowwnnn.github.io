<?php
$page = "feed";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "feed":
            $page = "feed";
            break;
        case "cart":
            $page = "cart";
            break;
        case "profile":
            $page = "profile";
            break;
        default:
            header("Location: ?page=feed");
            break;
    }
} else {
    header("Location: ?page=feed");
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Goodies</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link rel="icon" href="img/logo.png">
    <style>
        .navLink:hover{
            background-color: #d9d9d9;;

        }
        .navItem{
            text-decoration: none;
            color: inherit;
        }
       
    </style>
</head>

<body data-bs-theme="dark">
    <div class="container-fluid mainContainer">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-2 col-lg-3 col-xl-3 order-1 p-3 ">
                <div class="container" style="min-height: 95vh; border-style: solid; border-radius: 30px; border-width: 1px;">
                    <div class="row">
                        <div class="col-12">
                            <div class="container" style="text-align: center;">
                                <img class="img-fluid p-5" src="img/logo.png">
                            </div>
                        </div>
                        <div class="col-12 p-3">
                            <!-- Search Bar -->
                            <div class="container-fluid justify-items-center align-items-center searchBarContainer">
                                <div class="container searchBar d-flex align-items-center">
                                    <input class="form-control searchInput" type="text" placeholder="Search"
                                        id="searchTerm" style="border-radius: 20px 0px 0px 20px; height: 42px;">
                                    <button class="btn  searchButton "
                                        style="border-radius: 0px 20px 20px 0px; height: 42px; background-color: white;"><img
                                            class="img-fluid" src="img/searchbtn.png"></button>
                                </div>
                            </div>

                        </div>

                        <div class="col-12 p-4">
                        <a href="?page=feed" class="navItem"> <div class="container navLink" style="text-align: center; font-size: 25px;">
                                Home
                            </div></a>
                        </div>
                        <div class="col-12 p-4">
                        <a href="?page=cart" class="navItem"> <div class="container navLink" style="text-align: center; font-size: 25px;">
                                Cart
                            </div></a>
                        </div>
                        <div class="col-12 p-4">
                        <a href="?page=profile" class="navItem"><div class="container navLink" style="text-align: center; font-size: 25px;">
                                Account
                            </div></a>
                        </div>

                        <div class="col-12 p-4">
                            <div class="container" style="text-align: center; ">
                                <img src="img/ad1.png" class="img-fluid">
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <div class="col-12 col-sm-12 col-md-10 col-lg-9 col-xl-9 order-2">

                <?php include("shared/" . $page . ".php"); ?>



            </div>





        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>