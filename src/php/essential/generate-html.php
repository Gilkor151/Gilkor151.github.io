<?php
/**
 * Skript för att generera HTML-filer från PHP-moduler.
 *
 * @return void
 */

chdir('U3/src/php/');

// Inkludera nödvändiga funktioner och komponentfiler
include "essential/functions.php";

include "components/box.php";
include "components/card-item.php";
include "components/card-store.php";
include "components/carousel.php";
include "components/pane.php";
include "components/question.php";
include "components/review.php";
include "components/tab.php";

include "beautify-html.php";

echo "<p>Genererar HTML...</p>";

// Hämta en lista över alla PHP-filer i "modules/content"-katalogen
$phpFiles = array_filter(scandir("modules/content"), function($file) {
    return pathinfo($file, PATHINFO_EXTENSION) === 'php';
});

// Bearbeta varje fil
foreach ($phpFiles as $file) {
    // Kontrollera om filen är "map.php" och ställ in flagga
    $map = false;
    if ($file == "map.php") $map = true;

    // Starta output buffering
    ob_start();

    // Inkludera nödvändiga moduler för varje PHP-fil
    include "modules/base/_start.php";
    include "modules/content/" . $file;
    include "modules/base/_end.php";

    // Hämta innehållet från bufferten
    $buffer = ob_get_contents();

    // Rensa bufferten
    ob_end_clean();

    // Ta bort HTML-kommentarer och trimmar onödiga mellanslag
    $html_content = preg_replace('/<!--(.|\s)*?-->/', '', $buffer);
    $html_content = trim(preg_replace('/\s+/', ' ', $html_content));

    // Skapa en instans av Beautify_Html och formatera innehållet
    $beautify = new Beautify_Html(array(
        'indent_inner_html' => false,
        'indent_char' => " ",
        'indent_size' => 2,
        'wrap_line_length' => 32786,
        'unformatted' => ['code', 'pre'],
        'preserve_newlines' => false,
        'max_preserve_newlines' => 32786,
        'indent_scripts' => 'normal'
    ));

    $page = $beautify->beautify($html_content);
    $page = str_replace('../', '', $page);

    // Spara den formaterade koden i motsvarande HTML-fil
    file_put_contents('../' . substr($file, 0, -4) . ".html", $page);
}
?>