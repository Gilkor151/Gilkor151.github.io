<!--
En artikel med dynamiskt genererad HTML-kod baserad på PHP. Innehåller en produktbild, titel och beskrivning.
Om produkten är på rea visas rabatterat pris, annars det vanliga priset.
Om en knapp för att lägga till i kundvagnen ska visas beror på den angivna inställningen.
-->
<article class="<?php echo grid($card); ?>">
    <div class="card h-100">
        <div class="img-container position-relative">
            <?php if ($card["sale"] === true): ?>
            <div class="img-container position-relative">
                <div class="img-caption-top text-white top-0 position-absolute">
                    <span>-50%</span>
                </div>
                <?php endif; ?>
            <a href="product.html">
                <img class="card-img-top w-100 h-100" src="https://dummyimage.com/<?php echo $card["img-width"] . "x" . $card["img-height"]; ?>/" alt="...">
            </a>
        </div>
        <div class="card-body p-4 pb-0">
            <a href="product.html">
                <h5 class="fw-bolder">Lorem ipsum</h5>
            </a>
            <div class="list-unstyled">
                <p>&#9642; Lorem ipsum dolor sit amet.</p>
                <p>&#9642; Duis aute irure dolor.</p>
                <p>&#9642; Excepteur sint occaecat.</p>
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
    </div>
</article>