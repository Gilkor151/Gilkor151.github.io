<?php include "essential/functions.php";?>
<?php include "essential/variables.php";?>
<?php $map = true; ?>
<?php include "page/top.php";?>
<main>
    <div class="container">
        <div class="row">
            <?php include "components/location/store.php";?>
            <?php include "components/location/store.php";?>
            <?php include "components/location/store.php";?>
        </div>
        <div class="row">
            <div class="col-12 card p-0 mt-4" id="map-container">
                <div id="map" style="height: 400px;"></div>
            </div>
        </div>
    </div>
</main>
<?php include "page/end.php";?>