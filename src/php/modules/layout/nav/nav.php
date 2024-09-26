<?php
/**
 * Denna PHP-kommentar beskriver en responsiv navigationsmeny för en webbsida.
 * Den inkluderar följande komponenter:
 * - Ett varumärke (logo) till vänster.
 * - En knapp för att visa eller dölja menyalternativ på mindre skärmar.
 * - En dropdown-meny för sidor.
 * - En megameny för ytterligare kategorisering av sidor.
 * - En knappar för specifika handlingar som att lägga till i kundvagnen eller logga in.
 * - Ett input-fält för sökning.
 *
 * @return void
 */
?>

<nav class="navbar p-0 navbar-expand-lg d-lg-flex navbar-light bg-light sticky-top">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="index.html">
            <img src="../../images/logo.webp" alt="Logo" height="30">
        </a>
        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav me-auto navbar-light align-items-center d-flex d-md-block d-lg-flex">
                <li class="nav-item dropdown normal-dropdown bg-transparent">
                    <button class="btn btn-light dropdown-toggle m-1" data-bs-toggle="dropdown" aria-expanded="false">
                        Sidor
                    </button>
                    <ul class="dropdown-menu dropdown-menu-light">
                        <li><a class="dropdown-item" href="index.html"><span class="mdi mdi-home-outline"></span> Hem</a></li>
                        <li><a class="dropdown-item" href="category.html"><span class="mdi mdi-shape"></span> Kategori</a></li>
                        <li><a class="dropdown-item" href="product.html"><span class="mdi mdi-cube"></span> Produkt</a></li>
                        <li><a class="dropdown-item" href="cart.html"><span class="mdi mdi-cart"></span> Kundvagn</a></li>
                        <li><a class="dropdown-item" href="login.html"><span class="mdi mdi-login"></span> Inloggning</a></li>
                        <li><a class="dropdown-item" href="locations.html"><span class="mdi mdi-map-marker-multiple-outline"></span> Platser</a></li>
                    </ul>
                </li>
                <?php include "modules/layout/nav/mega-menu.php"; ?>
            </ul>
            <?php include "modules/layout/nav/action-menu.php"; ?>
        </div>
    </div>
</nav>