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