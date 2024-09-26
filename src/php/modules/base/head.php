<?php
/**
 * Definierar strukturen för en webbsida med nödvändiga metataggar och externa stilmallar för layout och utseende.
 *
 * @param bool $map Anger om Leaflet-kartbiblioteket ska inkluderas eller inte.
 *
 * @return void
 */
?>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Examinationsuppgift 3">
    <meta name="author" content="Gilgamesh Koryal">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css">
    <?php if (isset($map)) { if ($map) { ?>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
    <?php } } ?>
    <link rel="stylesheet" href="../../css/style.css">
</head>