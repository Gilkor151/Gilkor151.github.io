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
