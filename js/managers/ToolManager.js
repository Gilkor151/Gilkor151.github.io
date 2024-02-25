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