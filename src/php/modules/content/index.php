<?php
/**
 * Renderar startsidan (index.php).
 * Innehåller en karusellkomponent, sidknappar och produktkort.
 *
 * @return void
 */
?>
<main class="container my-3">
    <div class="row g-4">
        <div class="carousel-container col-12 col-md-8 pe-1 px-xs-1">
            <?php componentCarouselInner(3, false, "index-carousel", 850, 319); ?>
        </div>
        <div class="position-relative side-buttons col-12 col-md-4">
            <div class="row g-3">
                <div class="col-12">
                    <img src="https://dummyimage.com/410x110" class="img-fluid w-100 h-100 rounded px-xs-1" alt="...">
                </div>
                <div class="col-12">
                    <img src="https://dummyimage.com/410x110" class="img-fluid w-100 h-100 rounded px-xs-1 align-middle" alt="...">
                </div>
                <div class="col-12">
                    <img src="https://dummyimage.com/410x110" class="img-fluid w-100 h-100 rounded px-xs-1" alt="...">
                </div>
            </div>
        </div>

    </div>

    <div class="container col-12 my-3 p-0">
        <div class="d-grid gap-4 cards-grid" style="--bs-columns: 1;">
            <?php
            componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
            componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
            componentCardItem(array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
            componentCardItem(array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300));
            ?>
        </div>
    </div>
    <div class="container my-3 p-0">
        <div class="small-images-grid d-grid gap-4">
            <?php
            componentBox();
            componentBox();
            componentBox();
            componentBox();
            componentBox();
            componentBox();
            ?>
        </div>
    </div>
    <div class="container col-12 my-3 p-0">
        <div class="d-grid gap-4 cards-grid" style="--bs-columns: 1;">
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
</main>