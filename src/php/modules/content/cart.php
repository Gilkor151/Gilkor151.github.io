<?php
/**
 * Renderar kundvagnssidan (cart.php).
 * Innehåller moduler för kundvagn och utcheckning.
 *
 * @return void
 */
?>
<main class="container">
    <div class="row">
        <?php include "modules\cart\summary.php"; ?>
        <?php include "modules\cart\checkout.php"; ?>
    </div>
</main>