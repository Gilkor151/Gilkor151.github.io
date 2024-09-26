<?php
/**
 * Funktionen scripts inkluderar nödvändiga JavaScript-filer för webbsidans funktionalitet.
 *
 * @param bool $map Flagga som indikerar om kartfunktionalitet ska inkluderas eller inte.
 *
 * @return void
 */
?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="../js/menu.js"></script>
<?php if (isset($map)) { if ($map) { ?>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="../../js/map.js"></script>
<?php } } ?>
