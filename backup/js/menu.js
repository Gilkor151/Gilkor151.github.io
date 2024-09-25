document.addEventListener('DOMContentLoaded', function() {
    // Funktion för att kontrollera fönstrets bredd är större än 975 pixlar
    function checkWindowWidth() {
        return window.innerWidth > 975;
    }

    // Funktion för att hantera händelser för dropdown- och megamenyer
    // Megamenyer aktiveras genom att hovera över dem med musen när fönsterbredden överstiger 975 pixlar
    // Annars krävs klick för att aktivera dem
    function handleDropdownEvents() {
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        // Kontrollerar om fönstrets bredd är tillräckligt stor
        if (checkWindowWidth()) {
            // Om fönstrets bredd är tillräckligt stor, inaktivera dropdown-toggling (klickbarhet) för varje toggle-element
            dropdownToggles.forEach(function (toggle) {
                toggle.setAttribute('data-bs-toggle', 'disabled');
            });
        } else {
            // Om fönstrets bredd inte är tillräckligt stor, aktivera dropdown-toggling (klickbarhet) för varje toggle-element
            dropdownToggles.forEach(function (toggle) {
                toggle.setAttribute('data-bs-toggle', 'dropdown');
            });
        }
    }

    handleDropdownEvents();

    // Lägger till en händelselyssnare för fönsterstorleksändringar
    window.addEventListener('resize', function() {
        handleDropdownEvents();
    });
});