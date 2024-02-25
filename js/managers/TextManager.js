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
