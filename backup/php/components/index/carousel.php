<!--
Innehåller en panel med en bildkarusell som visar tre bilder.
Karusellen har navigationsknappar för att bläddra mellan bilderna.
-->
<div class="col-sm-12 col-md-8">
    <div class="panel panel-primary">
        <div id="carousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://dummyimage.com/850x420/" class="d-block w-100 rounded" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://dummyimage.com/850x420/000/fff" class="d-block w-100 rounded" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://dummyimage.com/850x420/fff/000" class="d-block w-100 rounded" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>