<?php
/**
 * Renderar kategorisidan (category.php).
 * Innehåller filter för kategorier samt produktkort.
 *
 * @return void
 */
?>
<main class="container">
    <div class="row">
        <?php include "modules/category/filter.php"; ?>
        <div class="container col-sm-12 col-md-8 col-lg-9 my-3 p-0">
            <div class="d-grid gap-4 cards-grid">
                <?php
                componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
                ?>
            </div>
        </div>
    </div>
</main>