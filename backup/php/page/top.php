<!--
Här inkluderas en PHP-fil för essentiell information för head-sektionen av HTML-dokumentet.
-->
<?php include "essential/head.php"; ?>
<body>
<nav class="navbar p-0 navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="index.html">
            <img src="../images/logo.webp" alt="Logo" height="30">
        </a>
        <div class="collapse navbar-collapse" id="menu">
            <?php include "page/nav/mega-menu.php"; ?>
            <?php include "page/nav/actions.php"; ?>
        </div>
    </div>
</nav>