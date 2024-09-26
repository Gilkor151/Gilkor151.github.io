<?php
/**
 * Skapar och renderar ett inloggningsformulär med olika komponenter.
 *
 * @return void
 */

chdir('U3/src/php/');
include "essential/functions.php";
$map = false;

include "modules/base/_start.php";
include "modules/content/login.php";
include "modules/base/_end.php";
?>