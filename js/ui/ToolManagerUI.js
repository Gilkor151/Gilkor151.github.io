/**
 * Hanterar UI-relaterade åtgärder för verktygsinställningar i applikationen. Ger funktionalitet för att:
 *
 * - Uppdatera pensel- och textinställningar.
 * - Byta verktyg och dynamiskt anpassa UI-element.
 * - Anpassa storlekar och stilar baserat på användarens input.
 *
 * @class
 * @param {UIManager} uiManager - En instans av UIManager som hanterar det övergripande UI:et.
 */
export class ToolManagerUI {
    /**
     * @constructor
     * @param {UIManager} uiManager - En instans av UIManager som hanterar det övergripande UI:et.
     */
    constructor(uiManager) {
        this.canvasManager = uiManager.canvasManager; // Referens till canvasManager
        this.toolManager = uiManager.toolManager; // Referens till toolManager
        this.uiManager = uiManager; // Referens till uiManager
        this.toolButtons = document.querySelectorAll('#side-menu .tools-group button'); // Hämtar alla verktygsknappar

        // Fontstorleksinput, Penselstorleksinput, Penselstorleksslider och Indikator, inledningsvis null
        this.fontSizeInput = null;
        this.brushSizeInput = null;
        this.brushSizeSlider = null;
        this.brushSizeIndicator = null;

        // Binder this-kontexten för updateBrushSize
        this.updateBrushSize = this.updateBrushSize.bind(this);

        // Lägger till event listeners för alla verktygsknappar
        Array.from(this.toolButtons).forEach(function(button) {
            button.addEventListener('click', this.handleToolClick.bind(this));
        }, this);
    }

    /**
     * Binder event listeners för att uppdatera penselstorlek baserat på både inputfält och slider.
     */
    bindBrushOptionEvents() {
        // Binder event listeners för att uppdatera penselstorlek
        this.brushSizeInput.addEventListener('input', this.updateBrushSize.bind(this));
        this.brushSizeSlider.addEventListener('input', this.updateBrushSize.bind(this));
    }

    /**
     * Binder event listeners för att uppdatera fontstorlek och hantera klick på verktygsknappar.
     */
    bindTextOptionEvents() {
        this.fontSizeInput.addEventListener('input', this.updateFontSize.bind(this));
        for (const button of this.toolButtons) button.addEventListener('click', this.handleToolClick.bind(this));
    }

    /**
     * Hanterar klick på verktygsknappar och byter verktyg.
     *
     * @param {MouseEvent} e - En event som representerar klicket på verktygsknappen.
     */
    handleToolClick(e) {
        const toolId = e.target.id;
        this.uiManager.toolManager.switchTool(toolId);
        this.updateToolSelection(toolId);
    }

    /**
     * Uppdaterar UI för att markera det valda verktyget.
     *
     * @param {string} selectedToolId - Id för det valda verktyget.
     */
    updateToolSelection(selectedToolId) {
        for (const button of this.toolButtons) {
            button.classList.remove('selected');
        }
        const selectedButton = document.getElementById(selectedToolId);
        if (selectedButton) {
            selectedButton.classList.add('selected');
        }
    }

    /**
     * Uppdaterar storleken på penseln baserat på input från användaren.
     *
     * @param {Event} e - En event som representerar användarens val av penselstorlek.
     */
    updateBrushSize(e) {
        // Uppdaterar storleken på penseln baserat på input från användaren
        let size;
        if (e.nodeName === 'INPUT') size = parseInt(e.value);
        else size = parseInt(e.target.value);

        // Säkerställer att storleken är inom tillåtna gränser (1 - 999)
        const cleanedSize = Math.min(Math.max(size, 1), 999);
        // Uppdaterar inputfältet med den rensade storleken
        this.brushSizeInput.value = cleanedSize;

        // Justerar storleken på indikatorn
        const indicatorSize = Math.min(cleanedSize, 25);

        // Justerar opacitet och värde på slider baserat på penselstorlek
        this.brushSizeSlider.style.opacity = cleanedSize <= 150 ? 1 : 0.25;
        this.brushSizeSlider.value = Math.min(cleanedSize, 150);

        // Justerar storlek och opacitet på penselstorleksindikatorn
        this.brushSizeIndicator.style.width = indicatorSize + 'px';
        this.brushSizeIndicator.style.height = indicatorSize + 'px';
        this.brushSizeIndicator.style.opacity = cleanedSize <= 25 ? 1 : 0.25;

        // Uppdaterar storleken på markörens indikator och penselstorlek
        this.uiManager.cursorIndicatorUI.updateCursorIndicatorSize(cleanedSize);
        this.canvasManager.brushManager.setBrushSize(cleanedSize);
    }

    /**
     * Uppdaterar storleken på texten baserat på input från användaren.
     *
     * @param {Event} e - En event som representerar användarens val av textstorlek.
     */
    updateFontSize(e) {
        let size;
        // Uppdaterar storleken på texten baserat på input från användaren
        if (e.nodeName === 'INPUT') size = parseInt(e.value);
        else size = parseInt(e.target.value);

        // Säkerställer att storleken är inom tillåtna gränser
        const cleanedSize = Math.min(Math.max(size, 1), 128);
        // Uppdaterar inputfältet med den rensade storleken
        e.target.value = cleanedSize;
        // Uppdaterar fontstorleken
        this.uiManager.canvasManager.textManager.setTextProperty('fontSize', cleanedSize);
    }


    /**
     * Uppdaterar textens justering baserat på användarens val.
     *
     * @param {Event} e - En event som representerar användarens val av textjustering.
     */
    updateFontAlign(e) {
        this.uiManager.canvasManager.textManager.setTextProperty('textAlign', e.target.id.replace('button-', ''));
    }

    /**
     * Växlar textstil baserat på användarens val. (Fet, kursiv, understruken, genomstruken)
     *
     *
     * @param {Event} e - En event som representerar användarens val av textstil.
     */
    updateFontStyle(e) {
        this.uiManager.canvasManager.textManager.toggleTextProperty(e.target.id.replace('button-', ''));
    }

    /**
     * Uppdaterar textens fontfamilj baserat på användarens val.
     *
     * @param {Event} e - En event som representerar användarens val av fontfamilj.
     */
    updateFontFamily(e) {
        this.uiManager.canvasManager.textManager.setTextProperty('fontFamily', e.target.value);
    }

    /**
     * Sätter input-elementet, slidern och indikatorn för penselstorlek och binder relevanta event listeners för penselinställningar.
     *
     * @param {HTMLInputElement} brushSizeInput - Input-elementet för penselstorlek.
     * @param {HTMLInputElement} brushSizeSlider - Slidern för penselstorlek.
     * @param {HTMLElement} brushSizeIndicator - Indikatorelementet för penselstorlek.
     */
    setBrushSizeInputs(brushSizeInput, brushSizeSlider, brushSizeIndicator) {
        this.brushSizeInput = brushSizeInput;
        this.brushSizeSlider = brushSizeSlider;
        this.brushSizeIndicator = brushSizeIndicator;
        this.bindBrushOptionEvents();
    }

    /**
     * Sätter inputelementet för fontstorlek och binder relevanta event listeners för textinställningar.
     *
     * @param {HTMLInputElement} fontSizeInput - Inputelementet för fontstorlek.
     */
    setFontSizeInput(fontSizeInput) {
        this.fontSizeInput = fontSizeInput;
        this.bindTextOptionEvents();
    }
}