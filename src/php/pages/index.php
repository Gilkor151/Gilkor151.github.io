<?php
/**
 * Här inkluderas filer för sidans struktur och komponenter, såsom karusell, sidoknappar och produktkort.
 *
 * @return void
 */

chdir('U3/src/php/');
include "essential/functions.php";
$map = false;

include "components/box.php";
include "components/card-item.php";
include "components/carousel.php";

include "modules/base/_start.php";
include "modules/content/index.php";
include "modules/base/_end.php";
?>