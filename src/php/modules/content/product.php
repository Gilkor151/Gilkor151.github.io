<?php
/**
 * Renderar produktdetaljsidan (product.php).
 * Innehåller en karusellkomponent och enkel information. Innehåller även produktinformation, recensioner, tekniska specifikationer och frågor & svar.
 *
 * @return void
 */
?>
<main class="container p-2">
            <div class="row my-3">
                <div class="col-md-4 mt-2">
                    <div class="w-100 p-0">
                            <?php componentCarouselInner(4, true, "product-carousel",400, 260); ?>
                        <?php include "modules/product/side.php" ; ?>
                    </div>
                </div>
                <section class="col-md-8 text-justify">
                    <h1 class="mb-4">Produktnamn</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div class="d-flex nav nav-tabs mt-5 responsive-tabs">
                        <ul class="nav nav-tabs w-100" role="tablist">
                            <?php
                            componentTab(true, "accessories", "Tillbehör", 3);
                            componentTab(false, "reviews", "Recensioner", 2);
                            componentTab(false, "qa", "Frågor & svar", 5);
                            componentTab(false, "technical", "Teknisk specifikation", 0);
                            componentTab(false, "description", "Produktbeskrivning", 0);
                            ?>
                        </ul>
                        <div id="additional-content" class="tab-content accordion w-100" role="tablist">
                            <?php
                            componentPane(true, "accessories", "Tillbehör");
                            componentPane(false, "reviews", "Recensioner");
                            componentPane(false, "qa", "Frågor & svar");
                            componentPane(false, "technical", "Teknisk specifikation");
                            componentPane(false, "description", "Produktbeskrivning");
                            ?>
                        </div>
                    </div>
                </section>
            </div>
</main>