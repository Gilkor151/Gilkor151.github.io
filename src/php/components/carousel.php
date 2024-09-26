<?php
/**
 * Funktion för att generera en modulkomponent för en karusell.
 *
 * Genererar HTML-kod för en Bootstrap-karusell med angivna bilder, indikatorer och navigeringsknappar för föregående/nästa bild.
 * Bilderna genereras dynamiskt med olika färger via funktionen generateColors().
 *
 * @param int $images Antal bilder som ska visas i karusellen.
 * @param bool $indicators Bestämmer om indikatorer ska visas för karusellen.
 * @param string $id Id för karusellen.
 * @param int $width Bildens bredd i pixlar.
 * @param int $height Bildens höjd i pixlar.
 *
 * @return void
*/
?>
<?php function componentCarouselInner($images, $indicators, $id, $width, $height): void { ?>
    <?php $colors = array(); ?>
    <div id="<?php echo $id; ?>" class="carousel slide p-0 h-100">
        <div class="carousel-inner h-100 rounded">
            <?php for ($i = 0; $i < $images; $i++) { ?>
                <?php $colors[] = generateColors(); ?>
                <div class="carousel-item w-100 h-100 <?php if ($i == 0) echo "active"; ?>">
                    <img class="w-100 h-100 img-fluid" src="<?php echo dummyImage($width, $height, $colors[$i][0], $colors[$i][1]); ?>" alt="...">
                </div>
            <?php } ?>
        </div>

        <?php foreach (['prev', 'next'] as $direction) { ?>
            <button class="carousel-control-<?php echo $direction; ?>" type="button" data-bs-target="#<?php echo $id; ?>" data-bs-slide="<?php echo $direction; ?>">
                <span class="carousel-control-<?php echo $direction; ?>-icon" aria-hidden="true"></span>
                <span class="visually-hidden"><?php echo ucfirst($direction); ?></span>
            </button>
        <?php } ?>
    </div>
    <?php if ($indicators) { ?>
        <ol class="carousel-indicators list-inline position-relative px-0 py-2 m-0">
            <?php for ($i = 0; $i < $images; $i++) { ?>
                <li class="list-inline-item  <?php if ($i == 0) echo "active"; ?>">
                    <a id="carousel-selector-<?php echo $i; ?>" class="selected m-0 opacity-100" data-bs-slide-to="<?php echo $i; ?>" data-bs-target="#<?php echo $id; ?>">
                        <img loading="lazy" class="img-fluid" src="<?php echo dummyImage($width, $height, $colors[$i][0], $colors[$i][1]); ?>" height="100" alt="...">
                    </a>
                </li>
            <?php } ?>
        </ol>
    <?php } ?>
<?php } ?>