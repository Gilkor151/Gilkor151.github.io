<?php
/**
 * PHP-skriptet inkluderar olika komponenter för att bygga upp sidans struktur för butikssidan, inklusive kartfunktionalitet.
 * Variabeln $map är satt till sant för att inkludera kartfunktionalitet.
 *
 * @return void
 */

chdir('U3/src/php/');
include "essential/functions.php";
$map = true;

include "components/card-store.php";

include "modules/base/_start.php";
include "modules/content/locations.php";
include "modules/base/_end.php";
?>