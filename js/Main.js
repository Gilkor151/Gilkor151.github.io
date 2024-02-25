import { CanvasManager } from './managers/CanvasManager.js';
import { BrushManager } from './managers/BrushManager.js';
import { TextManager } from './managers/TextManager.js';
import { ImageManager } from './managers/ImageManager.js';
import { ToolManager } from './managers/ToolManager.js';
import { ColorPickerUI } from './ui/ColorPickerUI.js';
import { CursorIndicatorUI } from './ui/CursorIndicatorUI.js';
import { OptionsMenuUI } from './ui/OptionsMenuUI.js';
import { ToolManagerUI } from './ui/ToolManagerUI.js';
import { TooltipUI } from './ui/TooltipUI.js';
import { UIManager } from './ui/UIManager.js';

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