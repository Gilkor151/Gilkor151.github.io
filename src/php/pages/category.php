<?php
/**
 * Här byggs sidans struktur för kategori och filter, samt visning av flera produktkort i en rad.
 *
 * @return void
 */

chdir('U3/src/php/');
include "essential/functions.php";
$map = false;

include "components/card-item.php";

include "modules/base/_start.php";
include "modules/content/category.php";
include "modules/base/_end.php";
?>