<?php
/**
 * Genererar en dynamisk produktsida genom att inkludera olika PHP-filer.
 * Sidan innehåller komponenter som karusell, sidoknappar och produktinformation.
 * Flikarna på sidan agerar både som flikar och accordion, beroende på fönstrets bredd.
 *
 * @return void
 */

chdir('U3/src/php/');
include "essential/functions.php";
$map = false;

include "components/card-item.php";
include "components/pane.php";
include "components/question.php";
include "components/review.php";
include "components/tab.php";
include "components/carousel.php";

include "modules/base/_start.php";
include "modules/content/product.php";
include "modules/base/_end.php";
?>