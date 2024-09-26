<?php
/**
* En rad med tre artiklar som var och en representerar ett produktkort.
* Varje produktkort innehåller en bild, en länk till produktsidan, produktnamn, kort beskrivning och pris.
 *
 * @return void
*/
?>

<div class="container col-12 my-3 p-0">
    <div class="d-grid gap-4 accessories-grid">
        <?php
        componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
        componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
        componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
        componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
        componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
        componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
        ?>
    </div>
</div>