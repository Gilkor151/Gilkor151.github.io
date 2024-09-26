<?php
/**
 * Genererar en frågekortkomponent med det angivna numret.
 *
 * @param int $number Frågans nummer.
 *
 * @return void
 */
?>

<?php function componentQuestion($number): void { ?>
    <div class="card w-100 mb-2">
        <div class="card-body">
            <h5 class="card-title">Fråga <?php echo $number; ?></h5>
            <p class="card-text">
                Facilisi nullam vehicula ipsum a arcu. Et tortor consequat id porta nibh. In ante metus dictum at tempor commodo. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sem integer vitae justo eget magna fermentum iaculis eu. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Malesuada proin libero nunc consequat interdum varius. Urna molestie at elementum eu. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Quam pellentesque nec nam aliquam sem et tortor consequat. Ac ut consequat semper viverra nam libero justo laoreet.
            </p>
            <button type="button" class="btn btn-outline-primary">
                <span class="mdi mdi-thumb-up-outline"></span>
                <span class="ms-2">100</span>
            </button>
            <button type="button" class="btn btn-outline-primary">
                <span class="mdi mdi-thumb-down-outline"></span>
                <span class="ms-2">100</span>
            </button>
        </div>
    </div>
<?php } ?>