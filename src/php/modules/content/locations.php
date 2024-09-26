<?php
/**
 * Renderar platssidan (location.php).
 * Innehåller en karta och detaljerad information för varje plats.
 *
 * @return void
 */
?>
<main>
    <div class="container">
        <div class="row">
            <?php
            componentCardStore();
            componentCardStore();
            componentCardStore();
            ?>
        </div>
        <div class="row">
            <div class="col-12 card p-0 mt-4" id="map-container">
                <div id="map" style="height: 400px;"></div>
            </div>
        </div>
    </div>
</main>