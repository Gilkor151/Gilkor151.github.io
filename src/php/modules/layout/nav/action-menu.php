<?php
/**
 * Genererar HTML-struktur för en sidhuvud med flexibla knappar för kundvagn, inloggning och sökfunktion.
 *
 * @return void
 */
?>

<div class="d-flex action-buttons">
    <a href="cart.html" role="button" id="cart-button" class="btn btn-light position-relative me-1">
        <h5 class="mdi mdi-cart m-0 p-0">
            <span class="d-none">1</span>
        </h5>
        <span class="text">Kundvagn</span>
        <span class="position-absolute badge rounded-circle bg-danger badge rounded-pill bg-danger">
  <small>5</small>
  </span>
    </a>
    <a href="login.html" role="button" id="login-button" class="btn btn-light me-1">
        <h5 class="mdi mdi-account m-0 p-0">
            <span class="d-none">1</span>
        </h5>
        <span class="text">Konto</span>
    </a>
    <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Sök" aria-label="Search">
    </form>
</div>