/**
 * Hanterar användargränssnittet för färgväljaren i applikationen. Tillhandahåller funktionalitet för att:
 *
 * - Sätter startfärgen på färgväljaröppnaren och initierar interaktiva events.
 * - Hanterar färgval från både färgpaletten och användardefinierade färger.
 * - Ansvarar för UI för alla färgrelaterade element.
 *
 * @class
 * @param {UIManager} uiManager - En instans av UIManager som hanterar användargränssnittet.
 */
export class ColorPickerUI {
    /**
     * @constructor
     * @param {UIManager} uiManager - En instans av UIManager som hanterar användargränssnittet.
     */
    constructor(uiManager) {
        this.canvasManager = uiManager.canvasManager; // Referens till CanvasManager från UIManager
        this.colorPickerOpener = document.querySelector('#colorPickerOpener');
        this.colorPalette = document.querySelector('#colorPalette');
        this.customColorPicker = this.colorPalette.querySelector('#customColorPicker');

        // Sätter upp gränssnittet och binder events listeners
        this.initialize();
    }

    /**
     * Initierar färgväljaren genom att sätta startfärgen på färgväljaröppnaren och binda event listeners för användarinteraktion.
     */
    initialize() {
        // Sätter startfärgen på färgväljaröppnaren till den valda färgen
        this.colorPickerOpener.style.backgroundColor = this.canvasManager.selectedColor;

        // Binder nödvändiga events för att hantera användarinteraktion
        window.addEventListener('click', this.handleClickOutside.bind(this));
        this.colorPickerOpener.addEventListener('click', this.toggleColorPalette.bind(this));
        this.colorPalette.addEventListener('click', this.handlePaletteClick.bind(this));
        this.customColorPicker.addEventListener('input', this.handleCustomColorChange.bind(this)); // Använder 'input' för omedelbar respons

    }

    /**
     * Stänger färgpaletten om användaren klickar utanför färgväljaren eller paletten.
     *
     * @param {MouseEvent} e - Musklickevent som utlöses vid klick utanför färgväljaren eller paletten.
     *                            Innehåller information om det klickade elementet (e.target).
     */
    handleClickOutside(e) {
        if (!this.colorPickerOpener.contains(e.target) && !this.colorPalette.contains(e.target)) {
            this.colorPalette.classList.remove('visible');
        }
    }

    /**
     * Växlar visningen av färgpaletten mellan synlig och dold.
     */
    toggleColorPalette() {
        this.colorPalette.classList.toggle('visible');
    }

    /**
     * Hanterar klick på färgalternativen i färgpaletten och uppdaterar den valda färgen om ett giltigt färgalternativ klickas.
     *
     * @param {MouseEvent} e - Musklickevent som utlöses vid klick på färgalternativen.
     *                            Innehåller information om det klickade elementet och dess bakgrundsfärg (e.target.style.backgroundColor).
     */
    handlePaletteClick(e) {
        if (e.target.classList.contains('colorOption')) {
            this.handleColorSelection(e.target.style.backgroundColor);
            this.colorPalette.classList.remove('visible');
        }
    }

    /**
     * Hanterar förändringar i den anpassade färgväljaren och uppdaterar den valda färgen.
     *
     * @param {Event} e - eventobjekt som utlöses vid förändringar i den anpassade färgväljaren.
     *                        Innehåller information om den nya färgen (e.target.value).
     */
    handleCustomColorChange(e) {
        this.colorPalette.classList.remove('visible');
        this.handleColorSelection(e.target.value);
    }

    /**
     * Hanterar valet av färg och uppdaterar gränssnittet därefter.
     *
     * @param {string} color - Den valda färgen som ska tillämpas på ritapplikationen.
     */
    handleColorSelection(color) {
        this.canvasManager.setSelectedColor(color);
        this.colorPickerOpener.style.backgroundColor = color;
    }
}
