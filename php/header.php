<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../scss/style.css">
    <title>e-commerce</title>
</head>
<body>
    
    <header>
        <nav class="nav container">
            <div class="nav__logo">
                <a href="index.html">BIJOUJA<span>4</span><br>FASHION</a>
            </div>
            <div class="nav__items hide-for-mobile-tablette">
                <ul>
                    <div class="dropdown">
                        <a href="#"><li>Vêtements</li></a>
                        <div class="dropdown__items">
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product0.png" alt="">T-shirts</a>
                            </div>
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product1.png" alt="">Chemises</a>
                            </div>
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product2.png" alt="">Shorts</a>
                            </div>
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product3.png" alt="">Pantalons</a>
                            </div>
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product4.png" alt="">Blousons</a>
                            </div>
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product5.png" alt="">Casquettes</a>
                            </div>
                            <div class="dropdown__item">
                                <a href="#"><img src="../img/product6.png" alt="">Montres</a>
                            </div>
                        </div>
                    </div>                        
                    <a href="#"><li>Chaussures</li></a>
                    <a href="#"><li>Promotions</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </div>
            <div class="nav__icons">
                <ul>
                    <a href="#" onclick="show_search()"><img src="../img/icons/search-100.png" alt="search"></a>
                    <a href="#" onclick="show_delivery()"><img src="../img/icons/delivery-100.png" alt="delivery"></a>
                    <a href="#" onclick="show_bag()"><img src="../img/icons/shopping-bag-100.png" alt="bag"><span>2</span></a>
                </ul>
            </div>
        </nav>

        <div class="navbar hide-for-desktop">
            <div class="navbar__items">
                <div class="container">
                    <h1>MENU</h1>
                    <img src="../img/icons/Menu.png" alt="hamburger" id="hamburger">
                </div>
            </div>
            <div class="navbar__dropdown">
                <a href="#"><li>Vêtements</li></a>
                <a href="#"><li>Chaussures</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>Promotions</li></a>
            </div>
        </div>
    </header>