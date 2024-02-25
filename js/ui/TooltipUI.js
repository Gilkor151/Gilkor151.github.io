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