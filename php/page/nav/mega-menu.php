<!--
Detta är en HTML-struktur för en navigeringslist med dropdown-meny för olika kategorier.
Varje kategori har en mängd underkategorier som visas i dropdown-menyerna.
-->
<ul class="navbar-nav me-auto navbar-light align-items-center d-flex">
    <li class="nav-item dropdown normal-dropdown bg-transparent">
        <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sidor
        </button>
        <ul class="dropdown-menu dropdown-menu-light">
            <li><a class="dropdown-item" href="index.html"><span class="mdi mdi-home-outline"></span> Hem</a></li>
            <li><a class="dropdown-item" href="category.html"><span class="mdi mdi-shape"></span> Kategori</a></li>
            <li><a class="dropdown-item" href="product.html"><span class="mdi mdi-cube"></span> Produkt</a></li>
            <li><a class="dropdown-item" href="cart.html"><span class="mdi mdi-cart"></span> Kundvagn</a></li>
            <li><a class="dropdown-item" href="login.html"><span class="mdi mdi-login"></span> Inloggning</a></li>
            <li><a class="dropdown-item" href="locations.html"><span class="mdi mdi-map-marker-multiple-outline"></span> Platser</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown mega-menu position-static">
        <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Dator</button>
        <div class="dropdown-menu mega-menu-dropdown rounded-0 border-0 w-100 h-auto overflow-hidden border-top">
            <div class="row">
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Enheter</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-laptop"></span> Laptop</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-desktop-classic"></span> Stationära datorer</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-tablet"></span> Surfplattor</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Tillbehör</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-monitor"></span> Datorskärmar</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-printer"></span> Skrivare & Scanner</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-network"></span> Nätverk</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-cable-data"></span> Datortillbehör</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Datorkomponenter</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-harddisk"></span> Hårddisk & SSD</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-expansion-card"></span> Grafikkort</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-cpu-64-bit"></span> Processor</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-developer-board"></span> Moderkort</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-cube-outline"></span> Datorchassi</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-server-outline"></span> NUC / Barebone</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-memory"></span> RAM-minne</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-lightning-bolt"></span> Nätaggregat</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-plus-network-outline"></span> Nätverkskort</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-coolant-temperature"></span> Kylning</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-ethernet-cable"></span> Installationstillbehör</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-update"></span> Uppgraderingspaket</a>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4">
                    <h5 class="ms-1">Programvara</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-application"></span> Programvara</a>
                </div>
            </div>
        </div>
    </li>
    <li class="nav-item dropdown mega-menu position-static">
        <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Hem & Fritid</button>
        <div class="dropdown-menu mega-menu-dropdown rounded-0 border-0 w-100 h-auto overflow-hidden border-top">
            <div class="row">
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Hem och trädgård</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-grill"></span> Grill</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-vacuum"></span> Dammsugare & Rengöring</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-shovel"></span> Trädgård</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-lightbulb"></span> Lampor & Belysning</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Kök och köksredskap</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-coffee-maker"></span> Kaffemaskiner</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-stove"></span> Köksmaskiner</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-silverware-spoon"></span> Köksredskap</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Teknik och elektronik</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-home-automation"></span> Smarta Hem</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-car-back"></span> Elfordon</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-navigation"></span> Bil & GPS</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-battery"></span> El & Batterier</a>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4">
                    <h5 class="ms-1">Fritid och hobby</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-content-cut"></span> Personvård</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-wrench"></span> Verktyg</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-quadcopter"></span> Drönare & Actionkameror</a>
                </div>
            </div>
        </div>
    </li>
    <li class="nav-item dropdown mega-menu position-static">
        <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Bild & Ljud</button>
        <div class="dropdown-menu mega-menu-dropdown rounded-0 border-0 w-100 h-auto overflow-hidden border-top">
            <div class="row">
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Bild</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-television"></span> TV</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-projector"></span> Projektorer</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-sign-text"></span> Digital signage</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Ljud</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-speaker"></span> Högtalare</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-headset"></span> Hörlurar</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-soundbar"></span> Soundbar</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-radio"></span> Radio & Stereo</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-microphone"></span> Mikrofoner</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-knob"></span> DJ- & PA-utrustning</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Streaming och underhållning</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-movie"></span> Film & Musik</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-view-stream"></span> Streamingtjänster</a>
                </div>
            </div>
        </div>
    </li>
    <li class="nav-item dropdown mega-menu position-static">
        <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Vitvaror</button>
        <div class="dropdown-menu mega-menu-dropdown rounded-0 border-0 w-100 h-auto overflow-hidden border-top">
            <div class="row">
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Tvätt & Tork</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-washing-machine"></span> Tvättmaskin</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-file-cabinet"></span> Torktumlare & Torkskåp</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-tumble-dryer"></span> Kombinerad Tvättmaskin & Torktumlare </a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Diskmaskin</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-dishwasher"></span> Diskmaskin</a>
                </div>
                <div class="col-sm-6 col-lg-3 border-right mb-4">
                    <h5 class="ms-1">Ugn & Spis</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-induction"></span> Spishäll</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-stove"></span> Ugn</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-stove"></span> Spis</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-microwave"></span> Mikrovågsugn</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-toaster-oven"></span> Miniugn & Bordsspis</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-pizza"></span> Pizzaugn</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-countertop-outline"></span> Minikök</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-induction"></span> Kokplatta</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-heat-wave"></span> Värmelåda</a>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4">
                    <h5 class="ms-1">Kyl & Frys</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge"></span> Kyl & Frys kombiskåp</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge-industrial"></span> Kylskåp</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge-industrial-outline"></span> Frysskåp</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge-top"></span> Frysbox</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge-variant"></span> Kyl & Frys side-by-side</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge-variant-outline"></span> Integrerad Kyl och Frys</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge-top"></span> Minikyl</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-bag-personal-outline"></span> Kylväskor & Kylboxar</a>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3 mb-4">
                    <h5 class="ms-1">Köksfläktar & Spiskåpor</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fan"></span> Köksfläktar</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-dock-top"></span> Spiskåpor</a>
                </div>
                <div class="col-sm-6 col-lg-3 mb-4">
                    <h5 class="ms-1">Tillbehör</h5>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-washing-machine"></span> Tillbehör för Tvätt & Tork</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-dishwasher"></span> Tillbehör för Diskmaskin</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-stove"></span> Tillbehör för Ugn & Spis</a>
                    <a class="dropdown-item" href="category.html"><span class="mdi mdi-fridge"></span> Tillbehör för Kyl & Frys</a>
                </div>
            </div>
        </div>
    </li>
</ul>