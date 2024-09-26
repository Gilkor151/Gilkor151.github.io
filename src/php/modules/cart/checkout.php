<?php
/**
 * Funktion för modulkomponent för kassan.
 *
 * Genererar HTML-kod för inloggning/registrering samt utcheckning/leveransinformation.
 *
 * @return void
 */
?>

<aside class="col-12 col-sm-8 mt-3">
    <div class="card mb-4 border shadow-0">
        <div class="p-4 d-flex justify-content-between">
            <div class="">
                <h5>Har du ett konto?</h5>
                <p class="mb-0 text-wrap ">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                <a href="#" class="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100">Registrering</a>
                <a href="#" class="btn btn-primary shadow-0 text-nowrap w-100">Logga in</a>
            </div>
        </div>
    </div>
    <div class="card shadow-0 border">
        <div class="p-4">
            <h5 class="card-title mb-3">Utcheckning</h5>
            <div class="row">
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="firstname" placeholder="Förnamn">
                        <label for="firstname">Förnamn</label>
                    </div>
                </div>
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="surname" placeholder="Efternamn">
                        <label for="surname">Efternamn</label>
                    </div>
                </div>
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="tel" class="form-control" id="phone" placeholder="Mobilnummer">
                        <label for="phone">Mobilnummer</label>
                    </div>
                </div>
                <div class="col-6 mb-3">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="email" placeholder="E-postadress">
                        <label for="email">E-postadress</label>
                    </div>
                </div>
            </div>
            <hr class="my-4">
            <h5 class="card-title mb-3">Leveransinformation</h5>
            <div class="row mb-3">
                <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3 p-0 mb-0">
                        <div class="p-0 d-flex align-items-center">
                            <input class="form-check-input ms-3" type="radio" name="flexRadioDefault" id="shipping-1" checked>
                            <label class="form-check-label w-100 h-100 d-block p-4" for="shipping-1">
                                Expressleverans <br>
                                <small class="text-muted">1-3 dagar via post.</small>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3 p-0 mb-0">
                        <div class="p-0 d-flex align-items-center">
                            <input class="form-check-input ms-3" type="radio" name="flexRadioDefault" id="shipping-2">
                            <label class="orm-check-label w-100 h-100 d-block p-4" for="shipping-2">
                                Postkontor <br>
                                <small class="text-muted">5-10 dagar via post.</small>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3 p-0 mb-0">
                        <div class="p-0 d-flex align-items-center">
                            <input class="form-check-input ms-3" type="radio" name="flexRadioDefault" id="shipping-3">
                            <label class="orm-check-label w-100 h-100 d-block p-4" for="shipping-3">
                                Hämta själv <br>
                                <small class="text-muted">I butiken.</small>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="address" placeholder="Adress">
                        <label for="address">Adress</label>
                    </div>
                </div>
                <div class="col-sm-6 col-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="city" placeholder="Stad">
                        <label for="city">Stad</label>
                    </div>
                </div>
                <div class="col-sm-6 col-6 mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="zipcode" placeholder="Postnummer">
                        <label for="zipcode">Postnummer</label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <p class="mb-0">Meddelande till säljaren</p>
                <div class="form-outline">
                    <textarea class="form-control" rows="2"></textarea>
                </div>
            </div>
            <div class="float-end">
                <button class="btn btn-light border">Avbryt</button>
                <button class="btn btn-primary shadow-0 border">Fortsätt</button>
            </div>
        </div>
    </div>
</aside>