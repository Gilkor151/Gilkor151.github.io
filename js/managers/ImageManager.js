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