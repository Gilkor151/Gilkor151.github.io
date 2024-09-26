<?php
/**
 * Funktion för att generera en modulkomponent för ett kort.
 *
 * Tar emot en array ($card) som innehåller information om kortet och genererar HTML-kod
 * för att visa kortets innehåll, inklusive bild, titel, beskrivning, pris och eventuell knapp.
 *
 * @param array $card En array med information om kortet, inklusive bildbredd, bildhöjd, om det är på rea och om en knapp ska visas.
 *
 * @return void
 */
?>

<?php function componentCardItem($card): void { ?>
    <article class="card h-100>">
        <div class="img-container position-relative">
            <?php if ($card["sale"] === true): ?>
                <div class="img-caption-top text-white p-2 font-weight-bold top-0 position-absolute start-0">
                    <span>-50%</span>
                </div>
            <?php endif; ?>
            <a href="product.html">
                <img loading="lazy" class="card-img-top w-100 h-100" src="https://dummyimage.com/<?php echo $card["img-width"] . "x" . $card["img-height"]; ?>/" alt="...">
            </a>
        </div>
        <div class="card-body p-4 pb-0">
            <a href="product.html">
                <h5 class="fw-bolder">Lorem ipsum</h5>
            </a>
            <div class="list-unstyled">
                <p class="mb-0">&#9642; Lorem ipsum dolor sit amet.</p>
                <p class="mb-0">&#9642; Duis aute irure dolor.</p>
                <p class="mb-0">&#9642; Excepteur sint occaecat.</p>
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <h4 class="text-end fw-bolder">
                <?php if ($card["sale"] === true): ?>
                    <span class="text-muted text-decoration-line-through">750 :-</span>
                    <span class="text-red"> 500:-</span>
                <?php else: ?>
                    <span> 500:-</span>
                <?php endif; ?>
            </h4>
            <?php if ($card["button"] === true): ?><button type="button" class="btn btn-primary w-100">Lägg till i kundvagn</button><?php endif; ?>
        </div>
    </article>
<?php } ?>