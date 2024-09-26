<?php
/**
 * Sidoavsnitt med filtreringsalternativ, inklusive underkategorier, märken, prisintervall, storlek och betyg.
 *
 * Använder accordion-komponenter för att visa och dölja filtreringsalternativen.
 *
 * @return void
 */
?>

<aside class="col-sm-12 col-md-4 col-lg-3 my-3">
    <button class="btn btn-outline-secondary w-100 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-filter" aria-controls="accordion-filter" aria-expanded="false" aria-label="Toggle navigation">
        <span>Filter</span>
    </button>
    <div class="collapse card d-lg-block mb-5" id="accordion-filter">
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#content-subcategory" aria-expanded="true" aria-controls="content-subcategory">
                        Underkategorier
                    </button>
                </h2>
                <div id="content-subcategory" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-dark">LED</a></li>
                            <li><a href="#" class="text-dark">QLED</a></li>
                            <li><a href="#" class="text-dark">OLED</a></li>
                            <li><a href="#" class="text-dark">Neo QLED</a></li>
                            <li><a href="#" class="text-dark">Plasma</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#content-brands" aria-expanded="true" aria-controls="content-brands">
                        Märken
                    </button>
                </h2>
                <div id="content-brands" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div>
                            <!-- Checked checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand-checkbox-1" checked>
                                <label class="form-check-label" for="brand-checkbox-1">Samsung</label>
                            </div>
                            <!-- Checked checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand-checkbox-2" checked>
                                <label class="form-check-label" for="brand-checkbox-2">LG</label>
                            </div>
                            <!-- Checked checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand-checkbox-3" checked>
                                <label class="form-check-label" for="brand-checkbox-3">Sony</label>
                            </div>
                            <!-- Checked checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand-checkbox-4" checked>
                                <label class="form-check-label" for="brand-checkbox-4">Panasonic</label>
                            </div>
                            <!-- Default checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand-checkbox-5">
                                <label class="form-check-label" for="brand-checkbox-5">Philips</label>
                            </div>
                            <!-- Default checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="brand-checkbox-6">
                                <label class="form-check-label" for="brand-checkbox-6">TCL</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#content-price" aria-expanded="true" aria-controls="content-price">
                        Pris
                    </button>
                </h2>
                <div id="content-price" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div class="range">
                            <input type="range" class="form-range" id="customRange1">
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <p class="mb-0">
                                    Min
                                </p>
                                <div class="form-outline">
                                    <input type="number" id="min-price" class="form-control">
                                    <label class="form-label" for="min-price">1 000 :-</label>
                                </div>
                            </div>
                            <div class="col-6">
                                <p class="mb-0">
                                    Max
                                </p>
                                <div class="form-outline">
                                    <input type="number" id="max-price" class="form-control">
                                    <label class="form-label" for="max-price">50 000 :-</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#content-size" aria-expanded="true" aria-controls="content-size">
                        Storlek
                    </button>
                </h2>
                <div id="content-size" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check1" checked>
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check1">45"</label>
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check2" checked>
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check2">55"</label>
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check3" checked>
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check3">65"</label>
                        <input type="checkbox" class="btn-check border justify-content-center" id="btn-check4" checked>
                        <label class="btn btn-white mb-1 px-1" style="width: 60px;" for="btn-check4">75"</label>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button text-dark bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#content-rating" aria-expanded="true" aria-controls="content-rating">
                        Betyg
                    </button>
                </h2>
                <div id="content-rating" class="accordion-collapse collapse show align-middle">
                    <div class="accordion-body">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rating-checkbox-1" checked>
                            <label class="form-check-label" for="rating-checkbox-1">
                                <span class="mdi mdi-star"></span><span class="mdi mdi-star-outline"></span><span class="mdi mdi-star-outline"></span><span class="mdi mdi-star-outline"></span><span class="mdi mdi-star-outline"></span>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rating-checkbox-2" checked>
                            <label class="form-check-label" for="rating-checkbox-2">
                                <span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star-outline"></span><span class="mdi mdi-star-outline"></span><span class="mdi mdi-star-outline"></span>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rating-checkbox-3" checked>
                            <label class="form-check-label" for="rating-checkbox-3">
                                <span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star-outline"></span><span class="mdi mdi-star-outline"></span>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rating-checkbox-4" checked>
                            <label class="form-check-label" for="rating-checkbox-4">
                                <span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star-outline"></span>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="rating-checkbox-5" checked>
                            <label class="form-check-label" for="rating-checkbox-5">
                                <span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>