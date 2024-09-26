<?php
/**
 * Hämtar data från en JSON-fil och genererar en navigationsmeny baserad på den.
 * Menyn har huvudkategorier, underkategorier och länkar till varje kategori.
 *
 * @return void
 */
?>

<?php
$json_data = file_get_contents('json/menu.json');
$data_array = json_decode($json_data, true);

foreach ($data_array as $category) {
    echo '
<li class="nav-item dropdown mega-menu position-static">
<button class="btn btn-light dropdown-toggle my-1" data-bs-toggle="dropdown" aria-expanded="false">' . $category['category'] . '</button>
<div class="dropdown-menu mega-menu-dropdown rounded-0 border-0 w-100 h-auto overflow-hidden border-top p-4 start-0 end-0">
<div class="row">
';

    foreach ($category['subcategories'] as $subcategory) {
        echo '
    <div class="col-sm-6 col-lg-3 border-right mb-4">
    <h5 class="ms-1">' . $subcategory['title'] . '</h5>';

        foreach ($subcategory['items'] as $item) echo '
        <a class="dropdown-item" href="category.html"><span class="mdi mdi-' . $item['iconClass'] . '"></span> ' . $item['text'] . '</a>';
        echo '</div>';
    }
    echo '
</div>
</div>
</li>';
}
?>