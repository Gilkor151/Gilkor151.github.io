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
