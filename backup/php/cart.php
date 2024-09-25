<!--
Här används PHP för att inkludera olika komponenter för att bygga upp sidans struktur för kundvagn och kassa.
-->
<?php include "essential/functions.php";?>
<?php include "essential/variables.php";?>
<?php include "page/top.php";?>
<main class="container">
    <div class="row">
        <?php include 'components/cart/summary.php'; ?>
        <?php include 'components/cart/checkout.php'; ?>
    </div>
</main>
<?php include "page/end.php";?>