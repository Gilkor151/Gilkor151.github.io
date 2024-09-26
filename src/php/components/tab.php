<?php
/**
 * Genererar en tabben för navigering med en länk.
 * Länken öppnar en flik med det angivna namnet.
 * Om en dämpad text ska visas, läggs den till i slutet av länken.
 *
 * @param bool $active Anger om tabben ska vara aktiverad eller inte.
 * @param string $id Identifieraren för fliken.
 * @param string $text Texten som visas som länktext.
 * @param int $count Antalet som visas inom parentes.
 *
 * @return void
 */
?>

<?php function componentTab($active, $id, $text, $count): void { ?>
    <li class="nav-item">
        <a class="nav-link<?php if ($active) echo " active"; ?>" data-bs-toggle="pill" href="#pane-<?php echo $id; ?>">
            <?php echo $text; ?> <?php if ($count > 0) echo '<span class="text-muted">(' . $count .')</span>'; ?>
        </a>
    </li>
<?php } ?>