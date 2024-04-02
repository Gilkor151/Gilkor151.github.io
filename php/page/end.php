<!--
Bootstrap JavaScript-biblioteket laddas från en CDN och anpassad JavaScript för menyn.
Vid behov inkluderas också JavaScript för kartfunktionalitet.
-->
<br><br>
<?php include "page/footer/footer.php"; ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="../js/menu.js"></script>
    <?php if (isset($map)): ?>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="../js/map.js"></script>
    <?php endif; ?>
</body>
</html>