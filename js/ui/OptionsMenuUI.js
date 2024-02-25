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