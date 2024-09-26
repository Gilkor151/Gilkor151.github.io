<?php
/**
 * Här används PHP för att inkludera olika komponenter för att bygga upp sidans struktur för kundvagn och kassa.
 *
 * @return void
 */

chdir('U3/src/php/');
include "essential/functions.php";
$map = false;

include "modules/base/_start.php";
include "modules/content/cart.php";
include "modules/base/_end.php";
?>