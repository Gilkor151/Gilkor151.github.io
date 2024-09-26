<?php
/**
 * Denna PHP-fil innehåller generella funktioner.
 */

/**
 * Funktionen grid genererar klassnamn för ett responsivt grid-system baserat på givna inställningar.
 *
 * @param array $array En associerad array som innehåller konfigurationsdata för grid-klassnamnen. - col, sm, md, lg, mt
 *
 * @return string Klassen som genererats för elementet.
 */
function grid(array $array): string {
    $breakpoints = ["col", "sm", "md", "lg", "mt"]; $grid = "";

    foreach ($breakpoints as $breakpoint) {
        if (isset($array[$breakpoint])) {
            if ($breakpoint != "col" && $breakpoint != "mt") $grid .= " col-" . $breakpoint . "-" . $array[$breakpoint];
            else $grid .= " " . $breakpoint . "-" . $array[$breakpoint];
        }
    }
    return $grid;
}

/**
 * Genererar ett par matchande färger i hexadecimalt format.
 *
 * Denna funktion genererar ett par matchande färger, en ljus färg och dess motsvarande mörkare nyans,
 * för att användas för att skapa ett färgschema.
 *
 * @return array En array innehållande två strängar som representerar den ljusa färgen och dess motsvarande mörkare nyans.
 */
function generateColors() {
    $lightColor = generateHexColor() . generateHexColor() . generateHexColor();
    $darkColor = str_pad(dechex(round(hexdec(substr($lightColor, 0, 2)) * 0.7)), 2, '0', STR_PAD_LEFT) .
        str_pad(dechex(round(hexdec(substr($lightColor, 2, 2)) * 0.7)), 2, '0', STR_PAD_LEFT) .
        str_pad(dechex(round(hexdec(substr($lightColor, 4, 2)) * 0.7)), 2, '0', STR_PAD_LEFT);

    return array($lightColor, $darkColor);
}

function generateHexColor() {
    return str_pad(dechex(mt_rand(128, 255)), 2, '0', STR_PAD_LEFT);
}

/**
 * Genererar URL för en dummybild med specificerade dimensioner och valfri färg.
 * Funktionen returnerar en standardtransparent bild-URL om ingen färg anges, eller genererar ett par matchande färger om "random" används.
 *
 * @param int $width Bredden på dummybilden.
 * @param int $height Höjden på dummybilden.
 * @param string|null $color Valfri. Färgen på dummybilden i hexadecimalt format.
 *
 * @return string En URL till en genererad dummybild.
 */
function dummyImage($width, $height, $color1 = null, $color2 = null): string {
    if ($color1 == null) return "https://dummyimage.com/" . $width . "x" . $height . "/";
    else if ($color1 == "random") {
        $hexColors = generateColors();
        return "https://dummyimage.com/" . $width . "x" . $height . "/" . $hexColors[0] . "/" . $hexColors[1];
    }
    else return "https://dummyimage.com/" . $width . "x" . $height . "/" . $color1 . "/" . $color2;
}

?>