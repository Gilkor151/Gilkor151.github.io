<?php
/**
 * Sektion för sammanfattning av köpet och varukorgen.
 *
 * Visa total kostnad, rabattmöjlighet och detaljer om varorna.
 *
 * @return void
 */
?>
<section class="col-12 col-sm-4 mt-4">
    <article class="row header">
        <a href="#" class="text-decoration-none">
            <h4 class="my-0"><span class="mdi mdi-arrow-left"></span> Fortsätt handla</h4>
        </a>
    </article>
    <hr>
    <h6 class="mb-4 fw-bold">Sammanfattning</h6>
    <div class="d-flex justify-content-between">
        <p class="mb-2">Varukostnad:</p>
        <p class="mb-2">5 000 :-</p>
    </div>
    <div class="d-flex justify-content-between">
        <p class="mb-2">Rabatt:</p>
        <p class="mb-2 text-danger">- 2 000 :-</p>
    </div>
    <div class="d-flex justify-content-between">
        <p class="mb-2">Fraktkostnad:</p>
        <p class="mb-2">+ 50 :-</p>
    </div>
    <hr>
    <div class="d-flex justify-content-between">
        <p class="mb-2">Totalt:</p>
        <p class="mb-2 fw-bold">3 050 :-</p>
    </div>
    <div class="input-group mt-3 mb-4">
        <input type="text" class="form-control border" placeholder="Rabattkod">
        <button class="btn btn-light text-primary border">Lägg till</button>
    </div>
    <hr>
    <h6 class="mb-4 fw-bold">Varukorg <span class="text-muted">(3)</span></h6>
    <div class="row ps-2">
        <div class="col-auto">
            <span class="position-absolute translate-middle badge bg-danger">1</span>
            <img src="http://dummyimage.com/60x60/" class="rounded" alt="...">
        </div>
        <div class="col">
            <span>Produktnamn</span>
            <div class="fw-bold">
                <span class="text-muted text-decoration-line-through">750 :-</span>
                <span class="text-red"> 500:-</span>
            </div>
        </div>
    </div>
    <hr>
    <div class="row ps-2">
        <div class="col-auto">
            <span class="position-absolute translate-middle badge bg-danger">1</span>
            <img src="http://dummyimage.com/60x60/" class="rounded" alt="...">
        </div>
        <div class="col">
            <span>Produktnamn</span>
            <div class="fw-bold">
                <span class="text-muted text-decoration-line-through">2750 :-</span>
                <span class="text-red"> 1500:-</span>
            </div>
        </div>
    </div>
    <hr>
    <div class="row ps-2">
        <div class="col-auto">
            <span class="position-absolute translate-middle badge bg-danger">3</span>
            <img src="http://dummyimage.com/60x60/" class="rounded" alt="...">
        </div>
        <div class="col">
            <span>Produktnamn</span>
            <div class="fw-bold">
                <span class="text-muted">750 :-</span>
            </div>
        </div>
    </div>
</section>