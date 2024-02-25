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