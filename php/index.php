<!--
Här inkluderas filer för sidans struktur och komponenter, såsom karusell, sidoknappar och produktkort.
-->
<?php include "essential/functions.php";?>
<?php include "essential/variables.php";?>
<?php include "page/top.php";?>
    <main class="container">
        <div class="row mt-3">
            <?php include 'components\index\carousel.php'; ?>
            <?php include 'components\index\side-buttons.php'; ?>
        </div>
    </main>
    <br>
    <div class="container">
        <div class="row">
            <?php $card = array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="row">
            <?php include 'components\index\box.php'; ?>
            <?php include 'components\index\box.php'; ?>
            <?php include 'components\index\box.php'; ?>
            <?php include 'components\index\box.php'; ?>
            <?php include 'components\index\box.php'; ?>
            <?php include 'components\index\box.php'; ?>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="row">
            <?php $card = array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="row">
            <?php $card = array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>false, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
            <?php $card = array("sale"=>true, "button"=>true, "sm"=>6, "md"=>3, "mt"=>2, "img-width"=>450, "img-height"=>300); include 'components\common\card.php'; ?>
        </div>
    </div>
<?php include "page/end.php";?>