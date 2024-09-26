<?php
/**
 * Genererar HTML-kod för att visa användarrecensioner med bilder, användarnamn, datum och betyg.
 * Recensionerna är uppdelade i två kolumner för en bättre layout.
 *
 * @return void
 */
?>

<div class="container">
    <div class="row">
        <div class="col-12">
            <?php componentReview(); ?>
            <hr>
            <?php componentReview(); ?>
        </div>
    </div>
</div>