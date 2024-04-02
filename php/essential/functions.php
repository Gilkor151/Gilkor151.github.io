<!--
Denna PHP-funktion genererar klassnamn för element i en responsivt kolumnbaserat grid-system.
Funktionen använder ett associerat array för att dynamiskt skapa klassnamn.
-->
<?php
function grid($array) {
    $grid = "";

    if (isset($array["col"])) $grid .= " col-" . $array["col"];
    if (isset($array["sm"])) $grid .= " col-sm-" . $array["sm"];
    if (isset($array["md"])) $grid .= " col-md-" . $array["md"];
    if (isset($array["lg"])) $grid .= " col-lg-" . $array["lg"];
    if (isset($array["mt"])) $grid .= " mt-" . $array["mt"];

    return  $grid;
}
?>