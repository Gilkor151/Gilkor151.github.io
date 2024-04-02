<!--
Här byggs sidans struktur för kategori och filter, samt visning av flera produktkort i en rad.
-->
<?php include "essential/functions.php";?>
<?php include "essential/variables.php";?>
<?php include "page/top.php";?>
    <main class="container">
        <div class="row">
            <?php include "components/category/filter.php"; ?>
            <div class="col-sm-12 col-md-9">
                <div class="row">
                    <?php $card = array("sale"=>true, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>false, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>true, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>false, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>false, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>true, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>false, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>false, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                    <?php $card = array("sale"=>true, "button"=>true, "col"=>12,"sm"=>6, "md"=>4, "mt"=>4, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
                </div>
            </div>
        </div>
    </main>
<?php include "page/end.php";?>