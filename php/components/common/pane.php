<!--
En dynamiskt genererad flik med innehåll, styrd av PHP. Fliken innehåller en rubrik och ett expanderbart innehållsområde.
Innehållet inkluderar en inkluderad PHP-fil beroende på namnet.
-->
<div id="pane-<?php echo $name; ?>" class="tab-pane fade<?php if ($active) echo " show active"; ?>" role="tabpanel" aria-labelledby="collapse-<?php echo $name; ?>">
    <div class="responsive-tabs-heading accordion-item" role="tab" id="heading-<?php echo $name; ?>">
        <h2 class="accordion-header">
            <a class="w-100 h-100 accordion-button collapsed" data-bs-toggle="collapse" href="#collapse-<?php echo $name; ?>" aria-expanded="true" aria-controls="collapse-<?php echo $name; ?>">
                <?php echo $text; ?>
            </a>
        </h2>
    </div>
    <div id="collapse-<?php echo $name; ?>" class="content accordion-collapse collapse <?php if ($active) echo " show active"; ?>" data-bs-parent="#additional-content" role="tabpanel" aria-labelledby="heading-<?php echo $name; ?>">
        <div class="accordion-body">
            <?php include "components/product/" . $name . ".php"; ?>
        </div>
    </div>
</div>