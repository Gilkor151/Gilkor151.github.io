<!--
En listpunkt för navigering med en länk som styrs av PHP-variabler.
Länken öppnar en flik med det angivna namnet.
Om en dämpad text ska visas, läggs den till i slutet av länken.
-->
<li class="nav-item">
    <a class="nav-link <?php if ($active) echo " active"; ?>" data-bs-toggle="pill" href="#pane-<?php echo $name; ?>">
        <?php echo $text; ?> <?php if ($muted > 0) echo '<span class="text-muted">(' . $muted .')</span>'; ?>
    </a>
</li>