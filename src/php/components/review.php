<?php
/**
 * Genererar ett HTML-element för en produktrecension.
 *
 * @return void
 */
?>

<?php function componentReview(): void { ?>
    <div class="row">
        <div class="col-sm-2">
            <img src="http://dummyimage.com/60x60/" class="rounded" alt="...">
            <div><a href="#">Användare</a></div>
            <div>2024-03-23<br>1 dag sedan</div>
        </div>
        <div class="col-sm-10">
            <div class="rating align-middle">
                <span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span><span class="mdi mdi-star"></span>
            </div>
            <span class="fw-bold">Titel</span>
            <div class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
    </div>
<?php } ?>