<!--
Denna PHP-kod inkluderar olika filer för att skapa en produktsida med produktinformation och flikar för
tillbehör, recensioner, frågor och svar, tekniska specifikationer och produktbeskrivning.
-->
<?php include "essential/functions.php";?>
<?php include "essential/variables.php";?>
<?php include "page/top.php";?>
<main class="container">
    <div class="row">
        <section class="container">
            <div class="row my-3">
                <div class="col-md-4 mt-2">
                    <div class="w-100">
                        <div class="row">
                            <?php include "components/product/slider.php"; ?>
                        </div>
                        <?php include "components/product/side-menu.php"; ?>
                    </div>
                </div>
                <div class="col-md-8 text-justify">
                    <h1 class="mb-4">Produktnamn</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div class="d-flex nav nav-tabs mt-5 responsive-tabs">
                        <ul class="nav nav-tabs w-100" role="tablist">
                            <?php $name="accessories"; $text="Tillbehör"; $muted=3; $active=true; include "components/common/tab.php" ?>
                            <?php $name="reviews"; $text="Recensioner"; $muted=2; $active=false; include "components/common/tab.php" ?>
                            <?php $name="qa"; $text="Frågor & svar"; $muted=5; $active=false; include "components/common/tab.php" ?>
                            <?php $name="technical"; $text="Teknisk specifikation"; $muted=0; $active=false; include "components/common/tab.php" ?>
                            <?php $name="description"; $text="Produktbeskrivning"; $muted=0; $active=false; include "components/common/tab.php" ?>
                        </ul>
                        <div id="additional-content" class="tab-content accordion w-100" role="tablist">
                            <?php $name="accessories"; $text="Tillbehör"; $active=true; include "components/common/pane.php" ?>
                            <?php $name="reviews"; $text="Recensioner"; $active=false; include "components/common/pane.php" ?>
                            <?php $name="qa"; $text="Frågor & svar"; $active=false; include "components/common/pane.php" ?>
                            <?php $name="technical"; $text="Teknisk specifikation"; $active=false; include "components/common/pane.php" ?>
                            <?php $name="description"; $text="Produktbeskrivning"; $active=false; include "components/common/pane.php" ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>
<?php include "page/end.php";?>
