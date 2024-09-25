<!--
Detta är en HTML-struktur för en sidhuvud med flexibla slutknappar för kundvagn, inloggning och sökfunktion.
-->
<div class="d-flex end-buttons">
    <a href="cart.html" role="button" id="cart-button" class="btn btn-light me-1">
        <span class="mdi mdi-cart"></span>
        <span class="text">Kundvagn</span>
        <span class="position-absolute badge rounded-pill bg-danger p-0">5</span>
    </a>
    <a href="login.html" role="button" id="login-button" class="btn btn-light me-1">
        <span class="mdi mdi-account"></span>
        <span class="text">Konto</span>
    </a>
    <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Sök" aria-label="Search">
    </form>
</div>