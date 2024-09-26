<?php
/**
 * Genererar en dynamisk flik med innehåll. Fliken inkluderar en rubrik och ett expanderbart innehållsområde.
 * Innehållet är beroende av namnet och inkluderar en PHP-fil.
 *
 * @param bool $active Anger om fliken ska vara aktiverad eller inte.
 * @param string $id Identifieraren för fliken.
 * @param string $text Texten som visas som rubrik på fliken.
 *
 * @return void
 */
?>

<?php function componentPane($active, $id, $text): void { ?>

    <div id="pane-<?php echo $id; ?>" class="position-relative tab-pane fade<?php if ($active) echo " show active"; ?>" role="tabpanel" aria-labelledby="collapse-<?php echo $id; ?>">
        <div class="responsive-tabs-heading accordion-item" role="tab" id="heading-<?php echo $id; ?>">
            <h2 class="accordion-header">
                <a class="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse-<?php echo $id; ?>" aria-expanded="true" aria-controls="collapse-<?php echo $id; ?>">
                    <?php echo $text; ?>
                </a>
            </h2>
        </div>
        <div id="collapse-<?php echo $id; ?>" class="content accordion-collapse collapse<?php if ($active) echo " show active"; ?>" data-bs-parent="#additional-content" role="tabpanel" aria-labelledby="heading-<?php echo $id; ?>">
            <div class="accordion-body">
                <?php include "modules/product/" . $id . ".php"; ?>
            </div>
        </div>
    </div>
<?php } ?>