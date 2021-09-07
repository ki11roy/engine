import { Component } from '../component.js';

/**
 * @component
 * @class
 * @name TestComponent
 * @augments Component
 * @description Create a new TestComponent.
 * @classdesc A TestComponent enables the Entity to control the sizing applied to it by its parent {@link LayoutGroupComponent}.
 * @param {TestComponentSystem} system - The ComponentSystem that created this Component.
 * @param {Entity} entity - The Entity that this Component is attached to.
 * @property {number} minWidth The minimum width the element should be rendered at.
 * @property {number} minHeight The minimum height the element should be rendered at.
 * @property {number} maxWidth The maximum width the element should be rendered at.
 * @property {number} maxHeight The maximum height the element should be rendered at.
 * @property {number} fitWidthProportion The amount of additional horizontal space that the element should take up, if necessary to satisfy a Stretch/Shrink fitting calculation. This is specified as a proportion, taking into account the proportion values of other siblings.
 * @property {number} fitHeightProportion The amount of additional vertical space that the element should take up, if necessary to satisfy a Stretch/Shrink fitting calculation. This is specified as a proportion, taking into account the proportion values of other siblings.
 * @property {number} excludeFromLayout If set to true, the child will be excluded from all layout calculations.
 */
class TestComponent extends Component {
    constructor(system, entity) {
        super(system, entity);

        this._minWidth = 0;
        this._minHeight = 0;
        this._maxWidth = null;
        this._maxHeight = null;
        this._fitWidthProportion = 0;
        this._fitHeightProportion = 0;
        this._excludeFromLayout = false;
    }
}

function defineResizeProperty(name) {
    var _name = '_' + name;

    Object.defineProperty(TestComponent.prototype, name, {
        get: function () {
            return this[_name];
        },

        set: function (value) {
            if (this[_name] !== value) {
                this[_name] = value;
                this.fire('resize');
            }
        }
    });
}

defineResizeProperty('minWidth');
defineResizeProperty('minHeight');
defineResizeProperty('maxWidth');
defineResizeProperty('maxHeight');
defineResizeProperty('fitWidthProportion');
defineResizeProperty('fitHeightProportion');
defineResizeProperty('excludeFromLayout');

export { TestComponent };
