<?php
/**
 * Renderar inloggningssidan (login.php).
 * Innehåller inloggningsformulär.
 *
 * @return void
 */
?>
<main class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto mt-4">
    <form>
        <h1 class="h3 mb-3 fw-normal">Logga in</h1>
        <div class="form-floating">
            <input type="email" class="form-control" id="email" placeholder="E-postadress">
            <label for="email">E-postadress</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control mt-2" id="password" placeholder="Lösenord">
            <label for="password">Lösenord</label>
        </div>
        <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Kom ihåg mig
            </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Logga in</button>
        <button class="btn btn-outline-primary w-100 py-2 mt-2" type="submit">Glömt användarnamn / lösenord</button>
        <div class="btn-group w-100 py-2 mt-2" role="group" aria-label="Login">
            <button class="btn btn-outline-primary" type="button"><span class="mdi mdi-google"></span></button>
            <button class="btn btn-outline-primary" type="button"><span class="mdi mdi-facebook"></span></button>
            <button class="btn btn-outline-primary" type="button"><span class="mdi mdi-microsoft"></span></button>
            <button class="btn btn-outline-primary" type="button"><span class="mdi mdi-reddit"></span></button>
            <button class="btn btn-outline-primary" type="button"><span class="mdi mdi-github"></span></button>
            <button class="btn btn-outline-primary" type="button"><span class="mdi mdi-linkedin"></span></button>
        </div>
    </form>
</main>