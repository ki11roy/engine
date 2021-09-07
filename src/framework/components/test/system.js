import { Component } from '../component.js';
import { ComponentSystem } from '../system.js';

import { TestComponent } from './component.js';
import { TestComponentData } from './data.js';

const _schema = ['enabled'];

/**
 * @class
 * @name TestComponentSystem
 * @augments ComponentSystem
 * @description Create a new TestComponentSystem.
 * @classdesc Manages creation of {@link TestComponent}s.
 * @param {Application} app - The application.
 */
class TestComponentSystem extends ComponentSystem {
    constructor(app) {
        super(app);

        this.id = 'test';

        this.ComponentType = TestComponent;
        this.DataType = TestComponentData;

        this.schema = _schema;
    }

    initializeComponentData(component, data, properties) {
        if (data.enabled !== undefined) component.enabled = data.enabled;
        if (data.minWidth !== undefined) component.minWidth = data.minWidth;
        if (data.minHeight !== undefined) component.minHeight = data.minHeight;
        if (data.maxWidth !== undefined) component.maxWidth = data.maxWidth;
        if (data.maxHeight !== undefined) component.maxHeight = data.maxHeight;
        if (data.fitWidthProportion !== undefined) component.fitWidthProportion = data.fitWidthProportion;
        if (data.fitHeightProportion !== undefined) component.fitHeightProportion = data.fitHeightProportion;
        if (data.excludeFromLayout !== undefined) component.excludeFromLayout = data.excludeFromLayout;

        super.initializeComponentData(component, data, properties);
    }

    cloneComponent(entity, clone) {
        var test = entity.test;

        return this.addComponent(clone, {
            enabled: test.enabled,
            minWidth: test.minWidth,
            minHeight: test.minHeight,
            maxWidth: test.maxWidth,
            maxHeight: test.maxHeight,
            fitWidthProportion: test.fitWidthProportion,
            fitHeightProportion: test.fitHeightProportion,
            excludeFromLayout: test.excludeFromLayout
        });
    }
}

Component._buildAccessors(TestComponent.prototype, _schema);

export { TestComponentSystem };
