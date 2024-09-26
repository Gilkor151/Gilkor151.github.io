<?php
/**
 * En artikel som innehåller information om en butik, inklusive namn, adress, öppettider och en knapp för att visa butiken på kartan.
 *
 * @return void
 */
?>

<?php function componentCardStore(): void { ?>
    <article class="col-12 col-sm-6 col-md-4 mt-4">
        <div class="card h-100">
            <div class="img-container position-relative">
                <img class="card-img-top w-100 h-100" src="https://dummyimage.com/450x300/" alt="...">
            </div>
            <div class="card-body p-4 pb-0">
                <h5 class="fw-bolder">Butiksnamn</h5>
                <p>Adress, Postnummer, Ort</p>
                <h6 class="fw-bolder">Öppettider:</h6>
                <div class="row">
                    <div class="col-6 list">
                        <p>Måndag</p>
                        <p>Tisdag</p>
                        <p>Onsdag</p>
                        <p>Torsdag</p>
                        <p>Fredag</p>
                        <p class="text-red">Lördag</p>
                        <p class="text-red">Söndag</p>
                    </div>
                    <div class="col-6 list text-end">
                        <p>08.00 - 15.00</p>
                        <p>08.00 - 15.00</p>
                        <p>08.00 - 15.00</p>
                        <p>08.00 - 15.00</p>
                        <p>08.00 - 15.00</p>
                        <p class="text-red">10.00 - 15.00</p>
                        <p class="text-red">12.00 - 15.00</p>
                    </div>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent mt-4">
                <button type="button" class="btn btn-primary w-100">Visa på kartan</button>
            </div>
        </div>
    </article>
<?php } ?>