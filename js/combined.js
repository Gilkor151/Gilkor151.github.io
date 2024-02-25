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
/**
 * Hanterar användargränssnittet för markörens indikator i en ritapplikation.
 * Ger funktionalitet för att visa, dölja och flytta indikatorn baserat på musens position.
 *
 * @class
 * @param {UIManager} uiManager - En instans av UIManager som hanterar användargränssnittet.
 */
export class CursorIndicatorUI {
    constructor(uiManager) {
        /**
         * @constructor
         * @param {UIManager} uiManager - En instans av UIManager som hanterar användargränssnittet.
         */
        this.canvasManager = uiManager.canvasManager; // Referens till CanvasManager
        this.cursorIndicator = document.querySelector('#cursorIndicator');
        this.cursorIndicatorSize = undefined;

        // Binder metoder och lyssnare till det aktuella objektet för att säkerställa rätt kontext vid användning som callback eller event handler.
        this.hideCursorIndicator = this.hideCursorIndicator.bind(this);
        this.addCursorIndicator = this.addCursorIndicator.bind(this);
        this.moveCursorIndicator = this.moveCursorIndicator.bind(this);
        this.textCursorListener = this.textCursorListener.bind(this);

        this.initializeUI();
    }

    /**
     * Initialiserar användargränssnittet genom att uppdatera storleken på markörens indikator.
     * Binder även event listeners för att visa eller dölja markörens indikator baserat på musens position.
     */
    initializeUI() {
        this.updateCursorIndicatorSize();
        this.canvasManager.canvas.addEventListener('mouseenter', this.addCursorIndicator);
        this.canvasManager.canvas.addEventListener('mouseleave', this.hideCursorIndicator);
    }

    /**
     * Döljer markörens indikator och tar bort eventen för att flytta indikatorn baserat på musens position.
     */
    hideCursorIndicator() {
        this.cursorIndicator.style.display = 'none';
        this.canvasManager.canvas.removeEventListener('mousemove', this.moveCursorIndicator);
    }

    /**
     * Visar markörens indikator och lägger till eventen för att flytta indikatorn baserat på musens position.
     */
    addCursorIndicator() {
        this.cursorIndicator.style.display = 'block';
        this.canvasManager.canvas.addEventListener('mousemove', this.moveCursorIndicator);
    }

    /**
     * Flyttar markörens indikator baserat på musens position.
     *
     * @param {MouseEvent} e - Musens positionsevenemang som utlöser metodanropet. Innehåller information om musens position (e.clientX, e.clientY).
     */
    moveCursorIndicator(e) {
        this.cursorIndicator.style.left = (e.clientX - this.cursorIndicatorSize) + 'px';
        this.cursorIndicator.style.top = (e.clientY - this.cursorIndicatorSize) + 'px';
    }

    /**
     * Specialiserad event listener för att hantera events när användaren arbetar med textverktyget.
     * Denna metod används för att dölja markörens indikator och ta bort eventlyssnare relaterade till textinmatning.
     */
    textCursorListener() {
        this.hideCursorIndicator();
        this.canvasManager.canvas.removeEventListener('mousemove', this.textCursorListener);
        this.canvasManager.canvas.removeEventListener('mouseleave', this.hideCursorIndicator);
    }

    /**
     * Tar bort en event listener som tidigare lagts till för att hantera markörens indikator.
     * I detta fall tas eventlyssnaren för att visa markörens indikator bort när musen går in i canvas-området.
     */
    clearEventListeners() {
        this.canvasManager.canvas.removeEventListener('mouseenter', this.addCursorIndicator);
    }

    /**
     * Ställer in typen av markör baserat på det valda verktyget.
     *
     * @param {string} tool - Det valda verktyget som används för att välja rätt markör.
     */
    setCursorType(tool) {
        // Ställer in typen av markör baserat på det valda verktyget
        this.clearEventListeners();
        if (tool === 'brush' || tool === 'eraser') {
            this.canvasManager.canvas.style.cursor = 'crosshair';
            // Aktiverar markörens indikator (en cirkel) centrerad där muspekaren är med storlek lika med penselns storlek
            this.canvasManager.canvas.addEventListener('mouseenter', this.addCursorIndicator);
            this.canvasManager.canvas.addEventListener('mouseleave', this.hideCursorIndicator);
        } else if (tool === 'text') {
            this.canvasManager.canvas.style.cursor = 'text';
            this.textCursorListener();
        }
    }

    /**
     * Uppdaterar storleken på markörens indikator.
     *
     * @param {number} size - Storleken som ska tillämpas på markörens indikator (standardvärde: 10).
     */
    updateCursorIndicatorSize(size = 10) {
        this.cursorIndicator.style.width = size + 'px';
        this.cursorIndicator.style.height = size + 'px';
        // Halverar storleken för korrekt positionering
        this.cursorIndicatorSize = size / 2;
    }
}
/**
 * Hanterar användargränssnittet för alternativgrupper i applikationen. Ger funktionalitet för att:
 *
 * - Visa alternativgrupper för det valda verktyget och ta bort befintliga alternativgrupper förutom den första i toppmenyn.
 * - Hantera enkelval av knappar i en knappgrupp genom att markera den valda knappen och avmarkera övriga knappar.
 * - Hantera flerval av knappar för textverktyget genom att växla vald klass.
 * - Skapa och visa alternativgrupper för penselverktyget med kontroller för att justera penselstorleken.
 * - Skapa och visa alternativgrupper för textverktyget med alternativ för textjustering, stil och typsnitt.
 * - Skapa och returnera ett nytt HTML-element av den angivna typen med tillhörande egenskaper.
 *
 * @class
 * @param {UIManager} uiManager - En instans av UIManager för att hantera användargränssnittet.
 */
export class OptionsMenuUI {
    /**
     * Skapar en ny instans av TopMenuUI och kopplar den till en UIManager.
     *
     * @constructor
     * @param {UIManager} uiManager - En instans av UIManager för att hantera användargränssnittet.
     */
    constructor(uiManager) {
        this.canvasManager = uiManager.canvasManager; // Hämtar canvasManager från uiManager
        this.uiManager = uiManager; // Sätter det lokala uiManager-objektet
        this.topMenu = document.querySelector('#top-menu'); // Hämtar toppmenyn
    }

    /**
     * Skapar alternativgrupper för det valda verktyget och tar bort befintliga alternativgrupper förutom den första i toppmenyn.
     *
     * @param {string} tool - Det aktuella verktyget som styr vilka alternativgrupper som ska visas.
     */
    displayOptionsMenu(tool) {
        // Tar bort befintliga alternativgrupper förutom den första gruppen.
        // Den första gruppen innehåller generella funktioner som ny bild, öppna bild och spara bild.
        // De ska visas oavsett vilket verktyg som är valt.
        const optionMenus = document.querySelectorAll('#top-menu .menu-group:not(:first-child)');
        for (const optionMenu of optionMenus) optionMenu.remove();

        // Skapar alternativgrupper beroende på valt verktyg
        if (tool === 'brush' || tool === 'eraser') this.createBrushOptionsMenu();
        else if (tool === 'text') this.createTextToolOptions();
    }

    /**
     * Hanterar enkelval av knappar i en knappgrupp genom att markera den valda knappen och avmarkera övriga knappar.
     *
     * @param {HTMLElement} selectedButton - Den knapp som har valts och ska markeras.
     * @param {HTMLCollection} buttonGroup - En samling av knappar som ingår i samma grupp där endast en knapp kan vara vald åt gången.
     */
    handleSingleSelection(selectedButton, buttonGroup) {
        for (const button of this.parentElement.children) button.classList.remove('selected');
        this.classList.add('selected');
    }

    /**
     * Hanterar flerval av knappar genom att växla vald klass.
     * Används för stilknapparna fet stil, kursiv stil, understrykning och genomstrykning.
     */
    handleMultipleSelection() {
        this.classList.toggle('selected');
    }

    /**
     * Skapar och visar alternativgrupper för penselverktyget i #topMenu. Innehåller kontroller för att justera
     * penselstorleken, inklusive en inmatning, en slider och en indikator.
     */
    createBrushOptionsMenu() {
        // Skapar alternativgrupper för penselverktyget
        const brushOptionsMenu = this.createElement('div', {
            classes: ['menu-group', 'brush-options-group'],
            parent: this.topMenu // Lägger menyn i #topMenu
        });

        // Skapar en etikett för storleksinmatningen
        this.createElement('label', {
            attributes: { 'for': 'sizeInput' },
            textContent: 'Storlek:',
            parent: brushOptionsMenu
        });

        // Skapar inmatningsfält för penselstorlek
        const brushSizeInput = this.createElement('input', {
            attributes: { 'type': 'text', 'id': 'brush-size-input', 'value': this.canvasManager.brushManager.getBrushSize() }, // Attribut för inmatningsfält
            parent: brushOptionsMenu
        });

        // Skapar en behållare för slidern
        const sliderContainer = this.createElement('div', {
            classes: ['slider-container'],
            parent: brushOptionsMenu
        });
        // Skapa slider
        const brushSizeSlider = this.createElement('input', {
            classes: ['slider'],
            attributes: { 'type': 'range', 'id': 'brush-size-slider', 'min': '5', 'max': '150', 'step': '5' }, // Attribut för slidern för fontstorlek
            parent: sliderContainer
        });

        // Skapar en behållare och indikator för visning av penselstorlek
        const indicatorContainer = this.createElement('div', {
            classes: ['brush-size-indicator-container'],
            parent: brushOptionsMenu
        });
        // Skapa indikatorn
        const brushSizeIndicator = this.createElement('span', {
            classes: ['dot'], // Klass för indikatorn
            attributes: { 'id': 'brush-size-indicator' },
            properties: { 'style': 'width: 0px; height: 0px;' },
            parent: indicatorContainer
        });

        // Sätter upp event listeners för att uppdatera penselstorleken baserat på inmatning eller ändring av värdet på slidern.
        this.uiManager.toolManagerUI.setBrushSizeInputs(brushSizeInput, brushSizeSlider, brushSizeIndicator);
        this.uiManager.toolManagerUI.updateBrushSize(brushSizeInput);

        brushSizeInput.addEventListener('input', this.uiManager.toolManagerUI.updateBrushSize.bind(this));
        brushSizeSlider.addEventListener('input', this.uiManager.toolManagerUI.updateBrushSize.bind(this));
    }

    /**
     * Skapar alternativgrupper för textverktyget med inställningar för textjustering, stil och typsnitt.
     * Anpassar knappar och hanterar events för att uppdatera textstil och justering.
     */
    createTextToolOptions() {
        // Skapar grupper för textverktygets inställningar: justering, stil, och typsnitt och lägger till dem i #topMenu.
        const alignmentGroup = this.createElement('div', { classes: ['menu-group', 'text-options-group'], parent: this.topMenu });
        const styleGroup = this.createElement('div', { classes: ['menu-group', 'text-options-group'], parent: this.topMenu });
        const fontGroup = this.createElement('div', { classes: ['menu-group', 'text-options-group'], parent: this.topMenu });

        // Tooltip-texter för justeringsknapparna
        const alignmentTooltips = ['Justera till vänster', 'Centrera', 'Justera till höger'];
        // Tooltip-texter för stilknapparna
        const stylingTooltips = ['Fet stil', 'Kursiv stil', 'Understruken stil', 'Genomstruken stil'];

        // Hämtar nuvarande textjustering från canvasManager
        const canvasAlignment = this.canvasManager.textManager.getTextProperty('textAlign');

        // Skapar knappar för textjustering med tooltips
        for (const [i, alignment] of ['left', 'center', 'right'].entries()) {
            const button = this.createElement('button', {
                attributes: { 'id': 'button-' + alignment },
                classes: ['tooltip', 'text-button'],
                dataset: {tooltip: alignmentTooltips[i]},
                html: '<i class="fa fa-align-' + alignment + '"></i>',
                parent: alignmentGroup
            });

            // Markerar knappen som vald om den matchar nuvarande justering
            if (canvasAlignment === alignment) button.classList.add('selected');

            // Lägger till event listeners för att uppdatera textjustering och hantera enkelval
            button.addEventListener('click', this.uiManager.toolManagerUI.updateFontAlign.bind(this));
            button.addEventListener('click', this.handleSingleSelection);

            // Lägger till tooltip för knappen
            this.uiManager.tooltipUI.addTooltip(button);
        }

        // Skapar knappar för textstil med tooltips
        const styles = ['bold', 'italic', 'underline', 'strikethrough'];
        for (const [i, style] of styles.entries()) {
            const button = this.createElement('button', {
                attributes: { 'id': 'button-' + style },
                classes: ['tooltip', 'text-button'],
                dataset: { tooltip: stylingTooltips[i] },
                html: '<i class="fa fa-' + style + '"></i>',
                parent: styleGroup,
            });

            // Markerar knappen som vald om stilen redan är tillämpad
            if (this.canvasManager.textManager.getTextProperty(style)) button.classList.add('selected');

            // Lägger till event listeners för att uppdatera textstil och hantera flerval
            button.addEventListener('click', this.uiManager.toolManagerUI.updateFontStyle.bind(this));
            button.addEventListener('click', this.handleMultipleSelection);

            // Lägger till tooltip för knappen
            this.uiManager.tooltipUI.addTooltip(button);
        }

        // Skapar en etikett och en rullgardinsmeny för val av typsnitt
        this.createElement('label', {attributes: {for: 'font-type'}, textContent: 'Typsnitt:', parent: fontGroup});
        const select = this.createElement('select', {id: 'font-type', parent: fontGroup});
        // Lägger till typsnittsalternativ till rullgardinsmenyn
        for (const font of ['Arial', 'Courier', 'Impact', 'Helvetica', 'Lucida', 'Monaco', 'Tahoma', 'Times New Roman', 'Verdana']) {
            const option = this.createElement('option', {value: font, textContent: font, parent: select});
        }
        // Sätter rullgardinsmenyns värde till det aktuella typsnittet
        select.value = this.canvasManager.textManager.getTextProperty('fontFamily');
        // Lägger till en event listener för att uppdatera typsnittet
        select.addEventListener('change', this.uiManager.toolManagerUI.updateFontFamily.bind(this));

        // Skapar en etikett och ett textfält för inställning av textstorlek
        this.createElement('label', {attributes: {for: 'font-size-input'}, textContent: 'Storlek:', parent: fontGroup});
        const input = this.createElement('input', {  attributes: { 'id': 'font-size-input', 'type': 'text', 'value': this.canvasManager.textManager.getTextProperty('fontSize') }, parent: fontGroup});

        // Lägger till textfältet i UI Manager för att hantera textstorlek
        this.uiManager.toolManagerUI.setFontSizeInput(input);

        // Lägger till en event listener för att uppdatera textstorleken
        input.addEventListener('input', this.uiManager.toolManagerUI.updateFontSize.bind(this));
    }

    /**
     * Skapar och returnerar ett nytt HTML-element av den angivna typen med tillhörande egenskaper.
     *
     * @param {string} type - Den HTML-elementtyp som ska skapas.
     * @param {Object} options - Valbara inställningar för det skapade elementet.
     * @param {string[]} options.classes - En array med klassnamn att lägga till på det skapade elementet.
     * @param {Object} options.attributes - Ett objekt med attribut och deras värden att lägga till på elementet.
     * @param {string} options.textContent - Textinnehållet att tilldela det skapade elementet.
     * @param {string} options.html - HTML-innehållet att tilldela det skapade elementet.
     * @param {Object} options.dataset - Ett objekt med data-attribut och deras värden att lägga till på elementet.
     * @param {HTMLElement} options.parent - Det elementet som ska vara förälder till det skapade elementet.
     *
     * @returns {HTMLElement} Det skapade HTML-elementet.
     */
    createElement(type, options = {}) {
        const element = document.createElement(type);

        if (options.classes) element.classList.add(...options.classes);
        if (options.attributes) Object.entries(options.attributes).forEach(([key, value]) => element.setAttribute(key, value));
        if (options.textContent) element.textContent = options.textContent;
        if (options.html) element.innerHTML = options.html;
        if (options.dataset) Object.entries(options.dataset).forEach(([key, value]) => element.setAttribute('data-' + key, value));
        if (options.parent) options.parent.appendChild(element);

        return element;
    }
}
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
/**
 * Hanterar tooltip-funktionalitet för en ritapplikation. Ger möjligheten att visa och positionera ett tooltip över
 * specifika element i menyerna.
 *
 * * @class
 */
export class TooltipUI {
    constructor() {
        /**
         * @constructor
         */
        this.tooltip = document.querySelector('#tooltip');

        // Binder metoder för att säkerställa 'this'-kontext
        this.startTooltip = this.startTooltip.bind(this);
        this.moveTooltip = this.moveTooltip.bind(this);
        this.stopTooltip = this.stopTooltip.bind(this);

        this.bindTooltipEvents(); // Binder event listeners för tooltip
    }

    /**
     * Binder event listeners för musöver för alla element med klassen .tooltip, vilket startar tooltipen.
     */
    bindTooltipEvents() {
        // Binder event listeners för musöver för alla element med klassen .tooltip
        for (const element of document.querySelectorAll('.tooltip')) {
            element.addEventListener('mouseover', this.startTooltip);
        }
    }

    /**
     * Startar tooltipen genom att visa den, sätta tooltip-innehållet och binda event listeners för musrörelse och mus-ut.
     *
     * @param {MouseEvent} e - En event som representerar muspositionen och målelementet.
     */
    startTooltip(e) {
        // Sätter tooltip-innehållet och visar tooltip
        this.tooltip.innerHTML = e.target.getAttribute('data-tooltip');
        this.tooltip.style.display = 'block';

        e.target.addEventListener("mousemove", this.moveTooltip);
        e.target.addEventListener("mouseout", this.stopTooltip);
    }

    /**
     * Stoppar tooltipen genom att gömma den och avbryta event listeners för musrörelse och mus-ut.
     *
     * @param {MouseEvent} e - En event som representerar muspositionen.
     */
    stopTooltip(e) {
        this.tooltip.style.display = 'none'; // Gömmer tooltip
        e.target.removeEventListener("mousemove", this.moveTooltip);
        e.target.removeEventListener("mouseout", this.stopTooltip);
    }


    /**
     * Uppdaterar tooltipens position baserat på musens position.
     *
     * @param {MouseEvent} e - En event som representerar muspositionen.
     */
    moveTooltip(e) {
        this.tooltip.style.left = (e.pageX + 10) + 'px';
        this.tooltip.style.top = (e.pageY + 10) + 'px';
    }


    /**
     * Lägger till en "mouseover" event listeners för ett specifikt element som visar en verktygstips.
     *
     * @param {Element} element Det element som verktygstipset ska visas för.
     */
    addTooltip(element) {
        element.addEventListener('mouseover', this.startTooltip);
    }
}
/**
 * Klass som hanterar övergripande UI-funktionalitet för applikationen.
 *
 * @class
 * @param {CanvasManager} canvasManager - En instans av CanvasManager som hanterar canvas-funktionalitet.
 */
export class UIManager {
    /**
     * @constructor
     * @param {CanvasManager} canvasManager - En instans av CanvasManager som hanterar canvas-funktionalitet.
     */
    constructor(canvasManager) {
        this.canvasManager = canvasManager; // Sätter canvas-hanteraren
        this.toolManager = null; // Initialiserar verktygshantering som null
        this.colorPickerUI = null; // Initialiserar färgväljaren som null
        this.cursorIndicatorUI = null; // Initialiserar cursorns indikator UI som null
        this.optionsMenuUI = null; // Initialiserar alternativgruppers UI som null
        this.toolManagerUI = null; // Initialiserar verktygshanterarens UI som null
        this.tooltipUI = null; // Initialiserar verktygstipsets UI som null
    }

    // Sätter verktygshanteraren
    setToolManager = (toolManager) => this.toolManager = toolManager;
    // Sätter färgväljarens UI
    setColorPickerUI = (colorPickerUI) => this.colorPickerUI = colorPickerUI;
    // Sätter markörens indikator UI
    setCursorIndicatorUI = (cursorIndicatorUI) => this.cursorIndicatorUI = cursorIndicatorUI;
    // Sätter alternativgruppers UI
    setOptionsMenuUI = (optionsMenuUI) => this.optionsMenuUI = optionsMenuUI;
    // Sätter verktygshanterarens UI
    setToolManagerUI = (toolManagerUI) => this.toolManagerUI = toolManagerUI;
    // Sätter verktygstipsets UI
    setTooltipUI = (tooltipUI) => this.tooltipUI = tooltipUI;
}
/**
 * Hanterar penselhanteringsfunktioner för en ritapplikation. Den tillhandahåller funktionalitet för att:
 *
 * - Sätta och synkronisera penselstorleken med canvas-kontexten.
 * - Starta och avsluta ritningsprocessen vid musknappsnedtryckning.
 * - Hantera canvas-ritning baserat på musrörelser, ritar en linje från penselns aktuella position till musens nuvarande position.
 *
 * @class
 * @param {CanvasManager} canvasManager En instans av CanvasManager som hanterar canvas-funktionalitet.
 */
export class BrushManager {
    /**
     * @constructor
     * @param {CanvasManager} canvasManager - En instans av CanvasManager som hanterar canvas-funktionalitet.
     */
    constructor(canvasManager) {
        // Referenser till canvas och dess rendering context
        this.canvas = canvasManager.canvas;
        this.ctx = canvasManager.ctx;

        // Standardinställningar
        this.brushSize = 5;
        this.isPainting = false;

        // Binda metoder för korrekt this-kontext
        this.boundDraw = this.draw.bind(this);
        this.boundEndPosition = this.endPosition.bind(this);
        this.boundStartPosition = this.startPosition.bind(this);
    }

    /**
     * Uppdaterar penselstorleken och synkroniserar den med canvas-kontexten.
     *
     * @param {number} size Den nya penselstorleken.
     */
    setBrushSize(size) {
        this.brushSize = size;
        this.ctx.lineWidth = size;
    }

    /**
     * Initierar ritningsprocessen när användaren trycker ner musknappen.
     *
     * @param {MouseEvent} e En event som representerar muspositionen.
     */
    startPosition(e) {
        this.isPainting = true;
        this.draw(e);
    }

    /**
     * Avslutar ritningsprocessen och rensar upp efter användarens musupplyftning.
     */
    endPosition() {
        this.isPainting = false;
        // Börja en ny "path" för att undvika att dra linjer mellan målningar
        this.ctx.beginPath();
    }

    /**
     * Hanterar ritning på canvasen baserat på musrörelser. Den ritar en linje från den aktuella penselpositionen till musens nuvarande position.
     *
     * @param {MouseEvent} e En event som representerar musrörelsen.
     */
    draw(e) {
        if (!this.isPainting) return; // Avbryt om användaren inte målar

        // Beräknar musens position inom canvasen
        const x = e.clientX - this.canvas.getBoundingClientRect().left;
        const y = e.clientY - this.canvas.getBoundingClientRect().top;

        // Konfigurerar penselegenskaper
        this.ctx.lineWidth = this.brushSize;
        this.ctx.lineCap = 'round';

        // Rita linjen till den nuvarande muspositionen
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

        // Förbereder för nästa ritning
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
    }

    /**
     * Hämtar penselstorleken.
     *
     * @returns {number} Penselstorleken.
     */
    getBrushSize() {
        return this.brushSize;
    }
}
/**
 * Hanterar funktionalitet för en ritningscanvas, inklusive:
 *
 * - Initiering av canvas och 2D-kontext.
 * - Inställning av pensel- och textverktyg.
 * - Hantering av ritningsevents.
 * - Bufferthantering för texter.
 *
 * @class
 * @param {HTMLElement} canvasElement - Ett element som representerar en canvas.
 */
export class CanvasManager {
    /**
     * @constructor
     * @param {HTMLElement} canvasElement - Ett element som representerar en canvas.
     */
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = canvasElement.getContext('2d');
        this.brushManager = null;
        this.textManager = null;
        this.imageManager = null;
        this.currentTool = undefined;
        this.initializeCanvas();
    }

    // Ställer in referens till penselhanteraren.
    setBrushManager = (brushManager) => this.brushManager = brushManager;
    // Ställer in referens till texthanteraren.
    setTextManager = (textManager) => this.textManager = textManager;
    // Ställer in referens till bildhanteraren.
    setImageManager = (imageManager) => this.imageManager = imageManager;

    /**
     * Initialiserar canvasen genom att:
     *
     * - Sätta standardfärgen.
     * - Sätta vald färg till standardfärgen.
     * - Anpassa storleken på canvasen.
     * - Initiera buffert-canvasen.
     * - Lägga till en lyssnare för fönsterstorleksändring.
     */
    initializeCanvas() {
        this.brushColor = '#000000';
        this.selectedColor = this.brushColor;
        this.adjustCanvasSize();
        this.initializeBufferCanvas();
        window.addEventListener('resize', () => this.adjustCanvasSize());
    }

    /**
     * Anpassar canvasens storlek baserat på storlek och position i förhållande till fönstret.
     */
    adjustCanvasSize() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    /**
     * Skapar och initierar en buffert-canvas för att hantera texter.
     */
    initializeBufferCanvas() {
        this.bufferCanvas = document.createElement('canvas');
        this.bufferCtx = this.bufferCanvas.getContext('2d');

        // Matchar bredd och höjd på buffert-canvas
        this.bufferCanvas.width = this.canvas.width;
        this.bufferCanvas.height = this.canvas.height;
        this.updateBufferCanvas();
    }

    /**
     * Uppdaterar buffer-canvasen med det aktuella innehållet på huvudcanvasen.
     */
    updateBufferCanvas() {
        this.bufferCtx.drawImage(this.canvas, 0, 0);
    }

    setCurrentTool(tool) {
        this.currentTool = tool;
    }

    /**
     * Uppdaterar den nuvarande penselfärgen och streckfärgen för teckning.
     *
     * @param {string} color Den nya penselfärgen.
     */
    setBrushColor(color) {
        this.brushColor = color;
        this.ctx.strokeStyle = color;
    }

    /**
     * Sätter den valda färgen och uppdaterar streckfärgen om det nuvarande verktyget är pensel.
     *
     * @param {string} color Den nya valda färgen.
     */
    setSelectedColor(color) {
        this.selectedColor = color;
        // Om nuvarande verktyg är pensel, sätt nuvarande färg till vald färg
        if (this.currentTool === 'brush') this.setBrushColor(color);
    }

    /**
     * Hämtar den aktuella valda färgen
     *
     * @return {string} Den valda färgen.
     */
    getSelectedColor() {
        return this.selectedColor;
    }

    /**
     * Aktiverar event listeners för penselverktyget på canvasen.
     */
    setupDrawingEventHandlers() {
        window.addEventListener('mouseup', this.brushManager.boundEndPosition);
        this.canvas.addEventListener('mousedown', this.brushManager.boundStartPosition);
        this.canvas.addEventListener('mousemove', this.brushManager.boundDraw);
    }

    /**
     * Aktiverar en event listener för textinmatning på canvasen.
     */
    setupTextEventHandlers() {
        this.canvas.addEventListener('click', this.textManager.boundHandleTextEvent);
    }

    /**
     * Tar bort alla event listeners för pensel och textverktyg.
     */
    removeToolEventHandlers() {
        window.removeEventListener('mouseup', this.brushManager.boundEndPosition);
        this.canvas.removeEventListener('mousedown', this.brushManager.boundStartPosition);
        this.canvas.removeEventListener('mousemove', this.brushManager.boundDraw);
        this.canvas.removeEventListener('click', this.textManager.boundHandleTextEvent);
    }
}
/**
 * Hanterar bildhanteringsfunktioner för en ritapplikation. Den ger funktionalitet för att:
 *
 * - Skapa en ny tom canvas.
 * - Öppna en befintlig bildfil från filsystemet.
 * - Rita den öppnade bilden på canvasen.
 * - Spara den aktuella canvasen som en bildfil.
 *
 * @class
 * @param {CanvasManager} canvasManager En instans av CanvasManager som hanterar canvas-funktionalitet.
 */
export class ImageManager {
    /**
     * @constructor
     * @param {CanvasManager} canvasManager - En instans av CanvasManager som hanterar canvas-funktionalitet.
     */
    constructor(canvasManager) {
        this.canvasManager = canvasManager; // Referens till CanvasManager
        this.canvas = canvasManager.canvas; // Direkt tillgång till canvas-elementet
        this.ctx = canvasManager.ctx; // Direkt tillgång till canvas context (2d)
        this.fileInput = document.querySelector('#fileInput'); // Input-element för filuppladdning
        this.setupEventListeners(); // Initierar event listeners
    }

    /**
     * Konfigurerar lyssnare för UI-element som styr bildhantering.
     */
    setupEventListeners() {
        // Lyssnare för att skapa en ny bild
        document.querySelector('#button-new').addEventListener('click', () => this.newImage());
        // Lyssnare för att spara den nuvarande bilden
        document.querySelector('#button-save').addEventListener('click', () => this.saveImage());
        // Lyssnare för att öppna en befintlig bild från filsystemet
        document.querySelector('#button-open').addEventListener('click', () => this.fileInput.click());
        // Lyssnare för att hantera filval
        this.fileInput.addEventListener('change', (e) => this.openImage(e));
    }

    /**
     * Startar en ny ritning på canvasen.
     */
    newImage() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Öppnar en bildfil och ritar den på canvasen.
     *
     * @param {Event} e - En filinläsnings-event.
     */
    openImage(e) {
        // Skapar en FileReader för att läsa in bildfil
        const reader = new FileReader();

        reader.onloadend = () => {
            const img = new Image();
            // Rita bilden på canvas när den laddats in
            img.onload = () => this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            img.src = reader.result;
        };
        // Läser in den valda filen som en data URL
        reader.readAsDataURL(e.target.files[0]);
    }

    /**
     * Sparar canvasen som en PNG-bild till användarens dator.
     */
    saveImage() {
        const link = document.createElement('a');
        link.setAttribute('href', this.canvas.toDataURL('image/png'));
        link.setAttribute('download', 'canvas.png');
        link.click();
    }
}
/**
 * Hanterar textfunktionalitet i applikationen. Den ger funktionalitet för att:
 *
 * - Skapa och redigera text på canvasen.
 * - Visa förhandsgranskning av textinmatning.
 * - Tillämpa olika textstilar (fetstil, kursiv, storlek, typsnitt, justering).
 * - Hantera understrykning och genomstrykning.
 *
 * @class
 * @param {CanvasManager} canvasManager En instans av CanvasManager som hanterar canvas-funktionalitet.
 */
export class TextManager {
    /**
     * @constructor
     * @param {CanvasManager} canvasManager - En instans av CanvasManager som hanterar canvas-funktionalitet.
     */
    constructor(canvasManager) {
        this.canvasManager = canvasManager;
        this.canvas = canvasManager.canvas;
        this.ctx = canvasManager.ctx;

        // Skapar en separat canvas som används som buffert.
        // Buffer-canvasen används för att lagra en kopia av canvasens innehåll, vilket gör det möjligt att återställa
        // till den ursprungliga bilden under redigeringsprocessen.
        this.bufferCanvas = document.createElement('canvas');
        this.bufferCtx = this.bufferCanvas.getContext('2d');
        this.adjustBufferCanvasSize();

        this.textStyle = {
            bold: false,
            italic: false,
            fontStyle: 'normal',
            fontSize: 12,
            fontFamily: 'Arial',
            textDecoration: 'none',
            textAlign: 'left',
            underline: false,
            strikethrough: false
        };

        // Binder event listener för text så att 'this' refererar till det korrekta objektet inuti eventhandleraren.
        this.boundHandleTextEvent = this.handleTextEvent.bind(this);
    }

    /**
     * Justerar storleken på buffer-canvasen så att den matchar huvudcanvasens storlek.
     */
    adjustBufferCanvasSize() {
        this.bufferCanvas.width = this.canvas.width;
        this.bufferCanvas.height = this.canvas.height;
    }

    /**
     * Uppdaterar buffer-canvasen med det aktuella innehållet på huvudcanvasen.
     * Rensar först buffer-canvasen och ritar sedan den existerande bilden från huvudcanvasen.
     */
    updateBufferCanvas() {
        this.bufferCtx.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);
        this.bufferCtx.drawImage(this.canvas, 0, 0);
    }

    /**
     * Hanterar event listeners relaterade till text, inklusive att skapa ett textinmatningsfält och uppdatera förhandsgranskning vid inmatning eller avslutning.
     *
     * @param {MouseEvent} e - Den event-data som skickas av musklick-event.
     */
    handleTextEvent(e) {
        if (this.isEditingText) return; // Avbryter om redan redigerar text
        this.isEditingText = true; // Sätter redigeringsläge
        this.updateBufferCanvas();

        const {left, top} = this.canvas.getBoundingClientRect(); // Hämtar canvas position
        const x = e.clientX - left; // Beräknar x-position för musklick
        const y = e.clientY - top; // Beräknar y-position för musklick

        // Skapar textinmatningsfält
        const input = this.createTextInput();

        // Uppdaterar förhandsgranskning vid inmatning
        input.addEventListener('input', () => this.drawTextPreview(input.value, x, y));
        // Avslutar redigering vid tryck av Enter
        input.addEventListener('keydown', (event) => event.key === 'Enter' && this.finalizeAndCleanup(input, x, y));
        // Avslutar redigering vid fokusförlust
        input.addEventListener('blur', () => this.finalizeAndCleanup(input));
    }

    /**
     * Skapar ett osynligt textinmatningsfält vid angivna positionskoordinater.
     *
     * @returns {HTMLInputElement} Det skapade input-elementet.
     */
    createTextInput() {
        const input = document.createElement('input');

        input.style.position = 'absolute';
        input.style.opacity = 0;
        document.body.appendChild(input);

        // Sätter fokus på fältet så att användaren kan skriva utan att se fältet.
        input.focus();
        return input;
    }

    /**
     * Ritar en förhandsgranskning av texten på huvudcanvasen med inställda textstilar, inklusive understrykning och genomstrykning.
     *
     * @param {string} text - Den text som ska visas på canvasen.
     * @param {number} x - X-koordinaten för textens placering.
     * @param {number} y - Y-koordinaten för textens placering.
     */
    drawTextPreview(text, x, y) {
        // Rensar huvudcanvasen och återställer det tidigare innehållet från buffer-canvasen.
        // Detta tillåter att vi kan rita en förhandsvisning utan att förstöra den existerande bilden.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bufferCanvas, 0, 0);

        // Anger stil för texten och ritar den på canvasen baserat på inställda parametrar.
        this.setTextStyle();
        this.ctx.fillText(text, x, y - this.textStyle.fontSize / 2);

        // Hanterar understrykning och genomstrykning
        if (this.textStyle.underline || this.textStyle.strikethrough) {
            const textWidth = this.ctx.measureText(text).width;
            const lineHeight = this.textStyle.fontSize / 12;
            let underlineY, strikethroughY;

            // Beräknar positioner för understrykning och genomstrykning
            if (this.textStyle.underline) underlineY = y - this.textStyle.fontSize / 2;
            if (this.textStyle.strikethrough) strikethroughY = y - (5/6) * this.textStyle.fontSize;

            // Justerar x-position baserat på textjusteringen
            let adjustedX = x - (this.textStyle.textAlign === 'center' ? textWidth / 2 : this.textStyle.textAlign === 'right' ? textWidth : 0);

            // Ritar understryknings- och genomstrykningslinjerna
            if (this.textStyle.underline) this.ctx.fillRect(adjustedX, underlineY, textWidth, lineHeight);
            if (this.textStyle.strikethrough) this.ctx.fillRect(adjustedX, strikethroughY, textWidth, lineHeight);
        }
    }

    /**
     * Uppdaterar den aktiva textegenskapen hos kontexten (this.ctx) baserat på det aktuella värdet av textStyle-objektet.
     *
     * Specifika inställningar:
     *   * fontWeight: Bestämmer om texten ska vara i fetstil eller normalvikt.
     *   * fontStyle: Bestämmer om texten ska vara i kursiv stil eller vanlig.
     *   * fontSize: Anger storleken på texten.
     *   * fontFamily: Anger teckensnittsfamiljen för texten.
     *   * fillStyle: Anger fyllningsfärgen för texten baserat på den valda färgen (canvasManager.selectedColor).
     *   * textAlign: Anger textjusteringen ('left', 'center', 'right'). Standardvärdet är 'left' om inget anges.
     */
    setTextStyle() {
        let fontWeight = this.textStyle.bold === true ? 'bold ' : 'normal ';
        let fontStyle = this.textStyle.italic === true ? 'italic ' : 'normal ';

        // Kombinerar stilar och sätter fontegenskapen
        this.ctx.font = fontWeight + fontStyle + this.textStyle.fontSize + 'px ' + this.textStyle.fontFamily;

        this.ctx.fillStyle = this.canvasManager.selectedColor;
        this.ctx.textAlign = this.textStyle.textAlign || 'left';
    }

    /**
     * Avslutar textredigering och visar en sista förhandsgranskning.
     * Uppdaterar även buffer-canvas innan det osynliga textinmatningsfältet tas bort.
     *
     * @param {HTMLInputElement} input - Det aktuella input-elementet som används för textredigering.
     * @param {number} x - X-koordinaten för textens placering på canvasen.
     * @param {number} y - Y-koordinaten för textens placering på canvasen.
     */
    //
    finalizeAndCleanup(input, x = null, y = null) {
        if (x !== null && y !== null) {
            this.drawTextPreview(input.value, x, y);
            this.updateBufferCanvas();
        }
        document.body.removeChild(input);
        this.isEditingText = false; // Avslutar redigeringen
    }

    /**
     * Uppdaterar en specifik textegenskap och tillämpar den nya stilen på canvasen.
     *
     * @param {string} property - Namnet på textegenskapen som ska uppdateras.
     * @param {any} value - Det nya värdet för den angivna egenskapen.
     */
    setTextProperty(property, value) {
        this.textStyle[property] = value;
        this.setTextStyle();
    }

    /**
     * Hämtar värdet för den angivna egenskapen från textstilen.
     *
     * @param {string} property - Den egenskap vars värde ska hämtas från textstilen.
     * @returns {any} Värdet för den angivna egenskapen från textstilen.
     */
    getTextProperty(property) {
        return this.textStyle[property];
    }

    /**
     * Växlar mellan `true` och `false` för en specifik textegenskap och tillämpar den nya stilen på canvasen.
     *
     * @param {string} property - Namnet på textegenskapen som ska växlas.
     */
    toggleTextProperty(property) {
        this.textStyle[property] = !this.textStyle[property]; // Växlar mellan sant/falskt
        this.setTextStyle();
    }
}
/**
 *  Fungerar som en medlare för verktygshantering i applikationen, möjliggör följande funktioner:
 *
 * - Underlättar byte mellan olika verktyg och notifierar UI-klasser när detta inträffar.
 * - Ansvarar för konfiguration av standardinställningar för verktyg.
 *
 * @class
 * @param {CanvasManager} canvasManager Hanterar canvas-funktionalitet.
 * @param {UIManager} uiManager Hanterar UI-funktionalitet.
 */
export class ToolManager {
    /**
     * @constructor
     * @param {CanvasManager} canvasManager - En instans av CanvasManager som hanterar canvas-funktionalitet.
     * @param {UIManager} uiManager - En instans av UIManager som hanterar UI-funktionalitet.
     */
    constructor(canvasManager, uiManager) {
        // Referens till canvasManager och uiManager
        this.canvasManager = canvasManager;
        this.uiManager = uiManager;

        // Binder metoder till 'this' kontext för att undvika problem med 'this' i callbacks
        this.switchTool = this.switchTool.bind(this);

        // Initialiserar pensel-verktyget vid start
        this.switchTool('brush');
    }

    /**
     * Byter till det valda verktyget och uppdaterar färg, event listeners, alternativgrupp, och markör enligt konfigurationen.
     *
     * @param {string} tool Namnet på det verktyg som ska aktiveras.
     */
    switchTool(tool) {
        // Tar bort alla event listeners för verktygen
        this.canvasManager.removeToolEventHandlers();

        this.canvasManager.setCurrentTool(tool);

        if (tool === 'brush' || tool === 'eraser') {
            this.canvasManager.setupDrawingEventHandlers();
            let color;

            // Hämtar den valda färgen från CanvasManager.
            // Den valda färgen uppdateras automatiskt när användaren ändrar färg i UI.
            if (tool === 'brush') color = this.canvasManager.getSelectedColor();
            else color = '#FFFFFF'; // Anger att sudd alltid ska använda vit färg, oavsett vald färg i UI.

            // Ange aktuell färg för penseln
            this.canvasManager.setBrushColor(color);
        }
        // Textverktyget använder alltid den valda färgen i UI, och ignorerar brushColor.
        // Detta görs för att säkerställa att varje nytt textobjekt har den färgen
        // som användaren har valt i färgfältet; selectedColor, istället för den eventuellt annorlunda brushColor.
        else if (tool === 'text') this.canvasManager.setupTextEventHandlers();

        this.uiManager.optionsMenuUI.displayOptionsMenu(tool);
        this.uiManager.cursorIndicatorUI.setCursorType(tool);
        this.uiManager.toolManagerUI.updateToolSelection(tool);
    }
}
/**
 * Huvudklassen för PaintApp-applikationen.
 *
 * @class
 */
class PaintApp {
    /**
     * Skapar en ny instans av PaintApp.
     * Initierar appen genom att sätta upp managers och UI-komponenter.
     *
     * @constructor
     */
    constructor() {
        this.initialize();
    }

    initialize() {
        // Hämtar canvas-elementet
        this.canvas = document.querySelector('#paintCanvas');
        // Initialiserar hanterare.
        this.initializeManagers();
        // Initialiserar UI-komponenter
        this.initializeUIComponents();
    }

    initializeManagers() {
        // Skapar instanser av manager-klasser för att hantera olika aspekter av canvas
        this.canvasManager = new CanvasManager(this.canvas);
        this.brushManager = new BrushManager(this.canvasManager);
        this.textManager = new TextManager(this.canvasManager);
        this.imageManager = new ImageManager(this.canvasManager);

        // Sätter upp relationer mellan canvasManager och andra manager-klasser
        this.canvasManager.setBrushManager(this.brushManager);
        this.canvasManager.setTextManager(this.textManager);
        this.canvasManager.setImageManager(this.imageManager);
    }

    initializeUIComponents() {
        // Skapar en UI Manager för att hantera UI komponenter
        this.uiManager = new UIManager(this.canvasManager);

        // Skapar instanser av UI-komponenter
        this.colorPickerUI = new ColorPickerUI(this.uiManager);
        this.cursorIndicatorUI = new CursorIndicatorUI(this.uiManager);
        this.optionsMenuUI = new OptionsMenuUI(this.uiManager);
        this.toolManagerUI = new ToolManagerUI(this.uiManager);
        this.tooltipUI = new TooltipUI(this.uiManager);

        // Kopplar UI-komponenter till UIManager
        this.uiManager.setColorPickerUI(this.colorPickerUI);
        this.uiManager.setCursorIndicatorUI(this.cursorIndicatorUI);
        this.uiManager.setOptionsMenuUI(this.optionsMenuUI);
        this.uiManager.setToolManagerUI(this.toolManagerUI);
        this.uiManager.setTooltipUI(this.tooltipUI);

        // Skapar en ToolManager för att hantera verktygsbyte och inställningar
        this.toolManager = new ToolManager(this.canvasManager, this.uiManager);
        this.uiManager.setToolManager(this.toolManager);
    }
}

// När dokumentet är färdigladdat, starta appen
document.addEventListener("DOMContentLoaded", function() {
    new PaintApp();
});