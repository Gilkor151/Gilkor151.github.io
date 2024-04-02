<!--
Detta är HTML-kod för en bildkarusell som visar flera bilder av en produkt.
Karusellen har navigationsknappar för att bläddra mellan bilderna och en rad med indikatorer för att visa den aktiva bilden.
-->
<div class="container">
    <div class="row">
        <div class="col-md-12 row">
            <div id="images" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://dummyimage.com/400x260/fff/000" alt="...">
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://dummyimage.com/400x260/000/fff" alt="...">
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://dummyimage.com/400x260/ff0/0ff" alt="...">
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://dummyimage.com/400x260/0ff/ff0" alt="...">
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#images" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#images" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <ol class="carousel-indicators list-inline position-relative">
                <li class="list-inline-item active">
                    <a id="carousel-selector-0" class="selected m-0 opacity-100" data-bs-slide-to="0" data-bs-target="#images">
                        <img src="https://dummyimage.com/400x260/fff/000" class="img-fluid" alt="...">
                    </a>
                </li>

                <li class="list-inline-item">
                    <a id="carousel-selector-1" class="m-0 opacity-100" data-bs-slide-to="1" data-bs-target="#images">
                        <img src="https://dummyimage.com/400x260/000/fff" class="img-fluid" alt="...">
                    </a>
                </li>

                <li class="list-inline-item">
                    <a id="carousel-selector-2" class="m-0 opacity-100" data-bs-slide-to="2" data-bs-target="#images">
                        <img src="https://dummyimage.com/400x260/ff0/0ff"  class="img-fluid" alt="...">
                    </a>
                </li>

                <li class="list-inline-item">
                    <a id="carousel-selector-3" class="m-0 opacity-100" data-bs-slide-to="3" data-bs-target="#images">
                        <img src="https://dummyimage.com/400x260/0ff/ff0"  class="img-fluid" alt="...">
                    </a>
                </li>
            </ol>
        </div>
    </div>
</div>