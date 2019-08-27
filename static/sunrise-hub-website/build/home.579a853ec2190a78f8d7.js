/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/sunrise-hub-website/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Home/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/domready/ready.js":
/*!****************************************!*\
  !*** ./node_modules/domready/ready.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else {}

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = ('adoptedStyleSheets' in Document.prototype) &&
    ('replace' in CSSStyleSheet.prototype);
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken) {
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
            // is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            }
            else {
                this._styleSheet = null;
            }
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => {
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
    if (value instanceof CSSResult) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */
const css = (strings, ...values) => {
    const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, query, queryAll, eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */
const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
    legacyCustomElement(tagName, classOrDescriptor) :
    standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor &&
        !('value' in element.descriptor)) {
        return Object.assign({}, element, { finisher(clazz) {
                clazz.createProperty(element.key, options);
            } });
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            }
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor
        .createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name) => (name !== undefined) ?
        legacyProperty(options, protoOrDescriptor, name) :
        standardProperty(options, protoOrDescriptor);
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function query(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */
function queryAll(selector) {
    return (protoOrDescriptor, 
    // tslint:disable-next-line:no-any decorator
    name) => {
        const descriptor = {
            get() {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true,
        };
        return (name !== undefined) ?
            legacyQuery(descriptor, protoOrDescriptor, name) :
            standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
const standardEventOptions = (options, element) => {
    return Object.assign({}, element, { finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
        } });
};
const legacyEventOptions = 
// tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
    Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */
const eventOptions = (options) => 
// Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
((protoOrDescriptor, name) => (name !== undefined) ?
    legacyEventOptions(options, protoOrDescriptor, name) :
    standardEventOptions(options, protoOrDescriptor));
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty =
    (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value ? '' : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute(value, type) {
        switch (type) {
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                return JSON.parse(value);
        }
        return value;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const microtaskPromise = Promise.resolve(true);
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
const STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */
class UpdatingElement extends HTMLElement {
    constructor() {
        super();
        this._updateState = 0;
        this._instanceProperties = undefined;
        this._updatePromise = microtaskPromise;
        this._hasConnectedResolver = undefined;
        /**
         * Map with keys for any properties that have changed since the last
         * update cycle with previous values.
         */
        this._changedProperties = new Map();
        /**
         * Map with keys of properties that should be reflected when updated.
         */
        this._reflectingProperties = undefined;
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p) => {
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */
    /** @nocollapse */
    static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) {
                superProperties.forEach((v, k) => this._classProperties.set(k, v));
            }
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
            return;
        }
        const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
        Object.defineProperty(this.prototype, name, {
            // tslint:disable-next-line:no-any no symbol in index
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this._requestUpdate(name, oldValue);
            },
            configurable: true,
            enumerable: true
        });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) &&
            this.finalized) {
            return;
        }
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (typeof superCtor.finalize === 'function') {
            superCtor.finalize();
        }
        this.finalized = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...(typeof Object.getOwnPropertySymbols === 'function') ?
                    Object.getOwnPropertySymbols(props) :
                    []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeSript lack of support for symbol in
                // index types
                // tslint:disable-next-line:no-any no symbol in index
                this.createProperty(p, props[p]);
            }
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ?
            undefined :
            (typeof attribute === 'string' ?
                attribute :
                (typeof name === 'string' ? name.toLowerCase() : undefined));
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */
    static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */
    static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */
    static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
            return;
        }
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute ||
            defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    initialize() {
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor
            ._classProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) {
                    this._instanceProperties = new Map();
                }
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */
    _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p) => this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED;
        // Ensure first connection completes an update. Updates cannot complete
        // before connection and if one is pending connection the
        // `_hasConnectionResolver` will exist. If so, resolve it to complete the
        // update, otherwise requestUpdate.
        if (this._hasConnectedResolver) {
            this._hasConnectedResolver();
            this._hasConnectedResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */
    disconnectedCallback() {
    }
    /**
     * Synchronizes property values when attributes change.
     */
    attributeChangedCallback(name, old, value) {
        if (old !== value) {
            this._attributeToProperty(name, value);
        }
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) {
                return;
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
            return;
        }
        const ctor = this.constructor;
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] =
                // tslint:disable-next-line:no-any
                ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */
    _requestUpdate(name, oldValue) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                    this._changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true &&
                    !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) {
                        this._reflectingProperties = new Map();
                    }
                    this._reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
            this._enqueueUpdate();
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */
    requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async _enqueueUpdate() {
        // Mark state updating...
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        let resolve;
        let reject;
        const previousUpdatePromise = this._updatePromise;
        this._updatePromise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await previousUpdatePromise;
        }
        catch (e) {
            // Ignore any previous errors. We only care that the previous cycle is
            // done. Any error should have been handled in the previous update.
        }
        // Make sure the element has connected before updating.
        if (!this._hasConnected) {
            await new Promise((res) => this._hasConnectedResolver = res);
        }
        try {
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
        }
        catch (e) {
            reject(e);
        }
        resolve(!this._hasRequestedUpdate);
    }
    get _hasConnected() {
        return (this._updateState & STATE_HAS_CONNECTED);
    }
    get _hasRequestedUpdate() {
        return (this._updateState & STATE_UPDATE_REQUESTED);
    }
    get hasUpdated() {
        return (this._updateState & STATE_HAS_UPDATED);
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
            this._applyInstanceProperties();
        }
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.update(changedProperties);
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            throw e;
        }
        finally {
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update. This getter can be implemented to
     * await additional state. For example, it is sometimes useful to await a
     * rendered element before fulfilling this Promise. To do this, first await
     * `super.updateComplete` then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */
    get updateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    update(_changedProperties) {
        if (this._reflectingProperties !== undefined &&
            this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    updated(_changedProperties) {
    }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    firstUpdated(_changedProperties) {
    }
}
/**
 * Marks class as having finished creating properties.
 */
UpdatingElement.finalized = true;
//# sourceMappingURL=updating-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window['litElementVersions'] || (window['litElementVersions'] = []))
    .push('2.2.0');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */
function arrayFlat(styles, result = []) {
    for (let i = 0, length = styles.length; i < length; i++) {
        const value = styles[i];
        if (Array.isArray(value)) {
            arrayFlat(value, result);
        }
        else {
            result.push(value);
        }
    }
    return result;
}
/** Deeply flattens styles array. Uses native flat if available. */
const flattenStyles = (styles) => styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"] {
    /** @nocollapse */
    static finalize() {
        super.finalize();
        // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.
        this._styles =
            this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ?
                this._getUniqueStyles() :
                this._styles || [];
    }
    /** @nocollapse */
    static _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.styles;
        const styles = [];
        if (Array.isArray(userStyles)) {
            const flatStyles = flattenStyles(userStyles);
            // As a performance optimization to avoid duplicated styling that can
            // occur especially when composing via subclassing, de-duplicate styles
            // preserving the last item in the list. The last item is kept to
            // try to preserve cascade order with the assumption that it's most
            // important that last added styles override previous styles.
            const styleSet = flatStyles.reduceRight((set, s) => {
                set.add(s);
                // on IE set.add does not return the set.
                return set;
            }, new Set());
            // Array.from does not work on Set in IE
            styleSet.forEach((v) => styles.unshift(v));
        }
        else if (userStyles) {
            styles.push(userStyles);
        }
        return styles;
    }
    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    initialize() {
        super.initialize();
        this.renderRoot =
            this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
            this.adoptStyles();
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */
    createRenderRoot() {
        return this.attachShadow({ mode: 'open' });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */
    adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) {
            return;
        }
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
            window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
        }
        else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
            this.renderRoot.adoptedStyleSheets =
                styles.map((s) => s.styleSheet);
        }
        else {
            // This must be done after rendering so the actual style insertion is done
            // in `update`.
            this._needsShimAdoptedStyleSheets = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) {
            window.ShadyCSS.styleElement(this);
        }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */
    update(changedProperties) {
        super.update(changedProperties);
        const templateResult = this.render();
        if (templateResult instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]) {
            this.constructor
                .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
        }
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s) => {
                const style = document.createElement('style');
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */
    render() {
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */
LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */
LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__["render"];
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/class-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/class-map.js ***!
  \*******************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */
const classMapCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `classList` if the property value is truthy; if the property value
 * is falsey, the property name is removed from the element's `classList`. For
 * example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */
const classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((classInfo) => (part) => {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || (part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"]) ||
        part.committer.name !== 'class' || part.committer.parts.length > 1) {
        throw new Error('The `classMap` directive must be used in the `class` attribute ' +
            'and must be the only part in the attribute.');
    }
    const { committer } = part;
    const { element } = committer;
    // handle static classes
    if (!classMapCache.has(part)) {
        element.className = committer.strings.join(' ');
    }
    const { classList } = element;
    // remove old classes that no longer apply
    const oldInfo = classMapCache.get(part);
    for (const name in oldInfo) {
        if (!(name in classInfo)) {
            classList.remove(name);
        }
    }
    // add new classes
    for (const name in classInfo) {
        const value = classInfo[name];
        if (!oldInfo || value !== oldInfo[name]) {
            // We explicitly want a loose truthy check here because
            // it seems more convenient that '' and 0 are skipped.
            const method = value ? 'add' : 'remove';
            classList[method](name);
        }
    }
    classMapCache.set(part, classInfo);
});
//# sourceMappingURL=class-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/directives/unsafe-html.js":
/*!*********************************************************!*\
  !*** ./node_modules/lit-html/directives/unsafe-html.js ***!
  \*********************************************************/
/*! exports provided: unsafeHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeHTML", function() { return unsafeHTML; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


// For each part, remember the value that was last rendered to the part by the
// unsafeHTML directive, and the DocumentFragment that was last set as a value.
// The DocumentFragment is used as a unique key to check if the last value
// rendered to the part was with unsafeHTML. If not, we'll always re-render the
// value passed to unsafeHTML.
const previousValues = new WeakMap();
/**
 * Renders the result as HTML, rather than text.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((value) => (part) => {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"])) {
        throw new Error('unsafeHTML can only be used in text bindings');
    }
    const previousValue = previousValues.get(part);
    if (previousValue !== undefined && Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) &&
        value === previousValue.value && part.value === previousValue.fragment) {
        return;
    }
    const template = document.createElement('template');
    template.innerHTML = value; // innerHTML casts to string internally
    const fragment = document.importNode(template.content, true);
    part.setValue(fragment);
    previousValues.set(part, { value, fragment });
});
//# sourceMappingURL=unsafe-html.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module shady-render
 */

const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content }, parts } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while (walker.nextNode()) {
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
        }
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) {
                currentRemovingNode = node;
            }
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) {
            removeCount++;
        }
        while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
    let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while (walker.nextNode()) {
        count++;
    }
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
    for (let i = startIndex + 1; i < parts.length; i++) {
        const part = parts[i];
        if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
            return i;
        }
    }
    return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content }, parts } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while (walker.nextNode()) {
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while (partIndex !== -1) {
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}
//# sourceMappingURL=modify-template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = value;
        }
        else {
            this.__commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */








// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
}
else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn(`Incompatible ShadyCSS version detected. ` +
        `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
        `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */
const shadyTemplateFactory = (scopeName) => (result) => {
    const cacheKey = getTemplateCacheKey(result.type, scopeName);
    let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_6__["marker"]);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        const element = result.getTemplateElement();
        if (compatibleShadyCSSVersion) {
            window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        template = new _template_js__WEBPACK_IMPORTED_MODULE_6__["Template"](result, element);
        templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
};
const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */
const removeStylesFromLitTemplates = (scopeName) => {
    TEMPLATE_TYPES.forEach((type) => {
        const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) {
            templates.keyString.forEach((template) => {
                const { element: { content } } = template;
                // IE 11 doesn't support the iterable param Set constructor
                const styles = new Set();
                Array.from(content.querySelectorAll('style')).forEach((s) => {
                    styles.add(s);
                });
                Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
            });
        }
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */
const prepareTemplateStyles = (renderedDOM, template, scopeName) => {
    shadyRenderSet.add(scopeName);
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll('style');
    const { length } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
        return;
    }
    const condensedStyle = document.createElement('style');
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for (let i = 0; i < length; i++) {
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = template.element.content;
    Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, content.firstChild);
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    const style = content.querySelector('style');
    if (window.ShadyCSS.nativeShadow && style !== null) {
        // When in native Shadow DOM, ensure the style created by ShadyCSS is
        // included in initially rendered output (`renderedDOM`).
        renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    }
    else {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
    }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */
const render = (result, container, options) => {
    const scopeName = options.scopeName;
    const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
    const needsScoping = compatibleShadyCSSVersion &&
        container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
        !!container.host && result instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_5__["TemplateResult"];
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);
        if (part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"]) {
            prepareTemplateStyles(renderContainer, part.value.template, scopeName);
        }
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        container.appendChild(renderContainer);
        _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) {
        window.ShadyCSS.styleElement(container.host);
    }
};
//# sourceMappingURL=shady-render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment poisition.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceeding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceeding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"] : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./src/Components/VisibilityTracker.ts":
/*!*********************************************!*\
  !*** ./src/Components/VisibilityTracker.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let VisibilityTracker = class VisibilityTracker extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this._visible = false;
        this.observer = null;
        this.target = null;
        this.setupObserver = () => {
            this.observer && this.observer.disconnect();
            this.observer = new IntersectionObserver(([entry]) => {
                this._visible = entry.isIntersecting;
                this.dispatchEvent(new Event('intersectionchange'));
            }, {
                threshold: 1,
                root: this.target
            });
            this.observer.observe(this);
        };
    }
    get visible() {
        return this._visible;
    }
    updated(changed) {
        if (changed.has('target')) {
            this.setupObserver();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.setupObserver();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observer && this.observer.disconnect();
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<slot></slot>`;
    }
};
VisibilityTracker.styles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
    :host {
      display: block;
    }
  `;
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Object)
], VisibilityTracker.prototype, "target", void 0);
VisibilityTracker = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sunrise-visibility-tracker')
], VisibilityTracker);
/* harmony default export */ __webpack_exports__["default"] = (VisibilityTracker);


/***/ }),

/***/ "./src/Home/Events/Calendar.ts":
/*!*************************************!*\
  !*** ./src/Home/Events/Calendar.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _Temporal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Temporal */ "./src/Temporal/index.ts");
/* harmony import */ var _TemporalUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemporalUtils */ "./src/Home/Events/TemporalUtils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Calendar_1;




class MonthRange {
    constructor(month) {
        this.month = month;
    }
    *[Symbol.iterator]() {
        const firstOfMonth = this.month.withDay(1);
        const lastOfMonth = this.month.plus({ months: 1 }).withDay(1).minus({ days: 1 });
        const startingSaturday = firstOfMonth.minus({ days: firstOfMonth.dayOfWeek });
        const endingSunday = lastOfMonth.plus({ days: 7 - lastOfMonth.dayOfWeek });
        let current = startingSaturday;
        while (current.year !== endingSunday.year
            || current.month !== endingSunday.month
            || current.day !== endingSunday.day) {
            yield current;
            current = current.plus({ days: 1 });
        }
    }
}
const thisMonth = () => {
    const now = new Date();
    return new _Temporal__WEBPACK_IMPORTED_MODULE_2__["CivilYearMonth"](now.getFullYear(), now.getMonth() + 1);
};
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const formatMonthForSwitcher = (month) => {
    const date = new Date(month.year, month.month - 1);
    const formatter = new Intl.DateTimeFormat('en-iso', {
        year: 'numeric',
        month: 'long'
    });
    return formatter.format(date);
};
const formatDateForHeader = (date) => {
    const d = new Date(date.year, date.month - 1, date.day);
    const formatter = new Intl.DateTimeFormat('en-iso', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return formatter.format(d);
};
const monthContains = (month, date) => {
    return month.year === date.year && month.month === date.month;
};
let Calendar = Calendar_1 = class Calendar extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.events = [];
        this.selected = null;
        this.month = thisMonth();
    }
    static register() {
        if (!window.customElements.get('sunrise-events-calendar')) {
            window.customElements.define('sunrise-events-calendar', Calendar_1);
        }
        return window.customElements.whenDefined('sunrise-events-calendar');
    }
    onDayClick(day) {
        this.month = day.getCivilYearMonth();
        const label = day.toString();
        const element = this.renderRoot.querySelector(`[data-day="${label}"]`);
        if (!element)
            return;
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }
    onNextMonthClick() {
        this.month = this.month.plus({ months: 1 });
    }
    onPreviousMonthClick() {
        this.month = this.month.minus({ months: 1 });
    }
    eventsByDay(events) {
        const map = events.reduce((memo, next) => {
            const key = next.start.getCivilDate().toString();
            const array = memo.has(key) ? memo.get(key) : [];
            array.push(next);
            memo.set(key, array);
            return memo;
        }, new Map());
        return Array
            .from(map.entries())
            .map(([k, v]) => v)
            .sort((l, r) => {
            const left = l[0].start.getCivilDate().toString();
            const right = r[0].start.getCivilDate().toString();
            if (left > right)
                return 1;
            else if (left < right)
                return -1;
            else
                return 0;
        });
    }
    onEventClick(event) {
        this.selected = event;
        this.dispatchEvent(new CustomEvent('select'));
    }
    render() {
        const eventDays = new Set(this.events.map(e => e.start.getCivilDate().toString()));
        const days = Array.from(new MonthRange(this.month));
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="card">
        <div class="calendar">
          <div class="calendar-switcher">
            <button
              class="calendar-switcher-button"
              @click=${() => this.onPreviousMonthClick()}>
              <sunrise-events-icon
                class="button-icon"
                .icon=${'chevron_left'}>
              </sunrise-events-icon>
            </button>
            <div>${formatMonthForSwitcher(this.month)}</div>
            <button
              class="calendar-switcher-button"
              @click=${() => this.onNextMonthClick()}>
              <sunrise-events-icon
                class="button-icon"
                .icon=${'chevron_right'}>
              </sunrise-events-icon>
            </button>
          </div>
          <div class="calendar-grid">
            ${weekdays.map(w => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class="calendar-grid-weekday">${w}</div>`)}
            ${days.map(d => {
            const hasEvent = eventDays.has(d.toString());
            const outOfMonth = !monthContains(this.month, d);
            if (hasEvent) {
                return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                  <button
                    class="calendar-grid-day has-event ${outOfMonth ? 'out-of-month' : ''}"
                    @click=${() => this.onDayClick(d)}>
                    <span class="calendar-grid-number has-event">${d.day}</span>
                    <span class="calendar-grid-event-marker"></span>
                  </button>
                `;
            }
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <div class="calendar-grid-day ${outOfMonth ? 'out-of-month' : ''}">
                  <span class="calendar-grid-number">${d.day}</span>
                </div>
              `;
        })}
          </div>
        </div>
        ${this.events.length ?
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="events" data-events-scroll>
              ${this.eventsByDay(this.events).map((events) => {
                return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                  <div class="events-day-group" data-day="${events[0].start.getCivilDate().toString()}">
                    <div class="events-day-heading">${formatDateForHeader(events[0].start.getCivilDate())}</div>
                    <div class="events-inner-list">
                      ${events.map(e => {
                    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                          <div
                            class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({ 'events-event': true, selected: this.selected === e })}
                            @click=${() => this.onEventClick(e)}>
                            <time
                              datetime=${e.start.getCivilDate().toString()}
                              class="events-event-title">
                              ${e.title}
                            </time>
                            <time
                              datetime=${e.start.getCivilTime().toString()}
                              class="events-event-time">
                              ${_TemporalUtils__WEBPACK_IMPORTED_MODULE_3__["fullTimeString"](e.start)}
                            </time>
                            <div class="events-event-place">${e.place}</div>
                            <div class="events-event-address">${e.address}</div>
                          </div>
                        `;
                })}
                    </div>
                  </div>
                `;
            })}
            </div>
          ` :
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] ``}
      </div>
    `;
    }
};
Calendar.styles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
    :host {
      display: block;
      min-height: 0;
      position: relative;
      height: 100%;
      width: 100%;
    }
    * {
      box-shadow: border-box;
    }
    .card {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-rows: auto minmax(0px, auto);
      grid-auto-flow: row;
      border-radius: var(--shape-border-radius);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.12);
      min-height: 0;
      height: 100%;
      width: 100%;
    }

    .calendar {
      z-index: 1;
      position: relative;
    }

    .calendar-switcher {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-auto-flow: column;
      place-items: center;
    }

    .calendar-switcher-button {
      background: 0;
      border: 0;
      outline: 0;
      padding: 4px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      cursor: pointer;
      font-size: 32px;
      border-radius: 50%;
    }
      .calendar-switcher-button:hover {
        background-color: rgba(0,0,0,0.04);
      }
      .calendar-switcher-button:active {
        background-color: rgba(0,0,0,0.12);
      }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 36px);
      grid-template-rows: repeat(auto-fill, 36px);
      grid-auto-flow: dense;
      place-items: center;
      grid-column-gap: 4px;
      grid-row-gap: 4px;
      place-content: center;
    }

    .calendar-grid-weekday, .calendar-grid-day {
      line-height: 1;
      font-size: 16px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 0;
      background: 0;
      outline: 0;
      color: inherit;
      font-family: inherit;
      border-radius: 50%;
    }
      .calendar-grid-day.out-of-month {
        opacity: 0.6;
      }
      .calendar-grid-day.has-event {
        cursor: pointer;
      }
      .calendar-grid-day.has-event:hover {
        background-color: rgba(0,0,0,0.04);
      }
    
    .calendar-grid-weekday {
      color: rgba(0,0,0,0.6);
    }

    .calendar-grid-number {
      margin-bottom: 10px;
    }

    .calendar-grid-number.has-event {
      margin-bottom: 4px;
    }

    .calendar-grid-event-marker {
      width: 6px;
      height: 6px;
      display: block;
      border-radius: 50%;
      background-color: rgba(0,0,0,0.87);
    }

    .icon {
      font-family: Material Icons;
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .events {
      overflow-y: auto;
      overflow-x: hidden;
      border-bottom-left-radius: var(--shape-border-radius);
      border-bottom-right-radius: var(--shape-border-radius);
      min-height: 0;
      position: relative;
    }

    .events-day-group {
      position: relative;
    }
    .events-day-heading {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      padding: 16px;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.1px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,0.12);
    }
    .events-event {
      padding: 16px;
      cursor: pointer;
      border-bottom: 1px solid rgba(0,0,0,0.12);
      display: grid;
      grid-template-columns: 1fr auto;
      grid-column-gap: 8px;
      grid-template-rows: auto auto auto;
    }
      .events-event.selected {
        background-color: rgba(0,0,0,0.12);
      }
    .events-event-title {
      font-size: 16px;
      letter-spacing: 0.15px;
      grid-row: 1;
      grid-column: 1;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .events-event-time {
      grid-row: 1;
      grid-column: 2;
      font-size: 12px;
      letter-spacing: 0.4px;
      color: rgba(0,0,0,0.6);
      align-self: center;
    }
    .events-event-place {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.25px;
      grid-column: 1 / 2;
      grid-row: 2;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .events-event-address {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.25px;
      grid-column: 1 / 2;
      grid-row: 3;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .button-icon {
      width: 24px;
      height: 24px;
      color: rgba(0,0,0,0.6);
    }
  `;
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Array)
], Calendar.prototype, "events", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Object)
], Calendar.prototype, "selected", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Object)
], Calendar.prototype, "month", void 0);
Calendar = Calendar_1 = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sunrise-events-calendar')
], Calendar);
/* harmony default export */ __webpack_exports__["default"] = (Calendar);


/***/ }),

/***/ "./src/Home/Events/Details.ts":
/*!************************************!*\
  !*** ./src/Home/Events/Details.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/unsafe-html */ "./node_modules/lit-html/directives/unsafe-html.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./src/Home/Events/Map.ts");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./src/Home/Events/Icon.ts");
/* harmony import */ var _TemporalUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TemporalUtils */ "./src/Home/Events/TemporalUtils.ts");
/* harmony import */ var _Components_VisibilityTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/VisibilityTracker */ "./src/Components/VisibilityTracker.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let Details = class Details extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.selected = null;
        this.hubName = '';
        this.topHidden = false;
        this.bottomHidden = false;
        this.onTopIntersectionChange = (e) => {
            const target = e.target;
            this.topHidden = !target.visible;
        };
        this.onBottomIntersectionChange = (e) => {
            const target = e.target;
            this.bottomHidden = !target.visible;
        };
    }
    render() {
        return this.selected !== null ?
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="selected-container">
          <a
            class="map-link"
            target="_blank"
            href="https://www.google.com/maps/place/${encodeURIComponent(this.selected.address)}">
            <sunrise-events-map
              .latitude=${this.selected.coordinate.latitude}
              .longitude=${this.selected.coordinate.longitude}>
            </sunrise-events-map>
          </a>
          <div class="content">
            <h3 class="title">${this.selected.title}</h3>
            <time class="time">
              ${_TemporalUtils__WEBPACK_IMPORTED_MODULE_5__["fullDateString"](this.selected.start)} • ${_TemporalUtils__WEBPACK_IMPORTED_MODULE_5__["fullTimeString"](this.selected.start)}
            </time>
            <div class="location">
              <sunrise-events-icon
                class="location-icon"
                .icon=${'place'}>
              </sunrise-events-icon>
              <p class="location-name">${this.selected.place}</p>
              <p class="location-address">${this.selected.address}</p>
            </div>
            <div class="description-outer">
              <div
                class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                'description': true,
                'description-top-shadow': this.topHidden,
                'description-bottom-shadow': this.bottomHidden,
            })}>
                <sunrise-visibility-tracker
                  .target=${this.description}
                  class="description-top"
                  @intersectionchange=${this.onTopIntersectionChange}>
                </sunrise-visibility-tracker>
                <div class="description-content">
                  ${Object(lit_html_directives_unsafe_html__WEBPACK_IMPORTED_MODULE_1__["unsafeHTML"])(this.selected.description)}
                </div>
                <sunrise-visibility-tracker
                  .target=${this.description}
                  class="description-bottom"
                  @intersectionchange=${this.onBottomIntersectionChange}>
                </sunrise-visibility-tracker>
              </div>
            </div>
            <div>
              <a
                target="_blank"
                class="rsvp"
                href=${this.selected.url}>
                RSVP
              </a>
            </div>
          </div>  
        </div>
      ` :
            lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="empty-container">
          Sunrise ${this.hubName} hasn't published any events yet. Check back later!
        </div>
      `;
    }
};
Details.dependencies = [_Map__WEBPACK_IMPORTED_MODULE_3__["default"], _Icon__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_VisibilityTracker__WEBPACK_IMPORTED_MODULE_6__["default"]];
Details.styles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
    :host {
      border-radius: var(--shape-border-radius);
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 90vh;
      min-height: 0;
      border: 1px solid rgba(0,0,0,0.12);
    }
    * {
      box-sizing: border-box;
    }
    .location {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 24px auto;
      grid-column-gap: 16px;
      grid-row-gap: 4px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(0,0,0,0.12);
      margin-bottom: 16px;
    }
    .location-icon {
      grid-row: 1 / span 2;
      grid-column: 1;
      place-self: center;
    }
    .location-name {
      font-size: 14px;
      letter-spacing: 0.1px;
      font-weight: 600;
      grid-row: 1;
      grid-column: 2;
      margin: 0;
    }
    .location-address {
      font-size: 14px;
      letter-spacing: 0.25px;
      color: rgba(0,0,0,0.6);
      grid-row: 2;
      grid-column: 2;
      margin: 0;
    }
    .selected-container {
      display: grid;
      grid-template-rows: 280px minmax(0, auto);
      min-height: 0;
      height: 100%;
    }
    .empty-container {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.6;
      width: 100%;
      height: 100%;
      padding: 64px;
      text-align: center;
    }
    .content {
      padding: 16px;
      padding-bottom: 8px;
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: auto auto auto 1fr auto;
    }
    .title {
      font-size: 20px;
      margin: 0;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .time {
      font-size: 14px;
      letter-spacing: 0.25px;
      color: rgba(0,0,0,0.6);
      margin-bottom: 16px;
      display: block;
    }
    .divider {
      height: 1px;
      background-color: rgba(0,0,0,0.12);
      margin-top: 24px;
      margin-bottom: 16px;
      border: 0;
    }
    .description-outer {
      min-height: 0;
      position: relative;
    }
    .description {
      overflow-y: auto;
      position: absolute;
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.25px;
      height: 100%;
      width: 100%;
      position: relative;
    }
    .description-bottom-shadow {
      box-shadow: inset 0px -8px 9px -8px rgba(0,0,0,0.2);
    }
    .description-top-shadow {
      box-shadow: inset 0px 8px 9px -8px rgba(0,0,0,0.2);
    }
    .description-bottom-shadow.description-top-shadow {
      box-shadow: inset 0px -8px 9px -8px rgba(0,0,0,0.2), inset 0px 8px 9px -8px rgba(0,0,0,0.2);
    }
    .description-content > p:first-child {
      margin-top: 0;
    }
    .description-content > p:last-child {
      margin-bottom: 0;
    }
    .description-content > div:last-child p {
      margin-bottom: 0;
    }
    .description-content strong {
      font-weight: 600;
    }
    .rsvp {
      outline: 0;
      background: none;
      border: none;
      padding: 0 8px;
      height: 36px;
      line-height: 36px;
      border-radius: 4px;
      overflow: hidden;
      display: inline-block;
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 1.25px;
      text-align: center;
      font-family: inherit;
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 24px;
    }
    .rsvp:hover {
      background-color: rgba(0,0,0,0.04);
      color: rgba(0,0,0,0.87);
    }
    .rsvp:active {
      background-color: rgba(0,0,0,0.12);
    }
    .description-top {
      height: 1px;
      margin-bottom: -1px;
      position: relative;
    }
    .description-bottom {
      height: 1px;
      margin-top: -1px;
      position: relative;
    }
  `;
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Object)
], Details.prototype, "selected", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Object)
], Details.prototype, "hubName", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Boolean)
], Details.prototype, "topHidden", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Boolean)
], Details.prototype, "bottomHidden", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])('.description'),
    __metadata("design:type", HTMLDivElement)
], Details.prototype, "description", void 0);
Details = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sunrise-events-details')
], Details);
/* harmony default export */ __webpack_exports__["default"] = (Details);


/***/ }),

/***/ "./src/Home/Events/Event.ts":
/*!**********************************!*\
  !*** ./src/Home/Events/Event.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var _Temporal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Temporal */ "./src/Temporal/index.ts");

const MILLIS_IN_A_DAY = 1000 * 60 * 60 * 24;
class Event {
    constructor({ description, title, url, address, place, start, coordinates, }) {
        this.title = title;
        this.place = place;
        this.address = address;
        this.coordinate = coordinates;
        this.url = url;
        this.description = description;
        this.start = _Temporal__WEBPACK_IMPORTED_MODULE_0__["Instant"].fromString(start).withOffset('+00:00').getCivilDateTime();
    }
}


/***/ }),

/***/ "./src/Home/Events/Icon.ts":
/*!*********************************!*\
  !*** ./src/Home/Events/Icon.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Icon = class Icon extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.icon = 'place';
    }
    /**
     * @public
     * @returns TemplateResult
     */
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `${this.icon}`;
    }
};
Icon.styles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
    :host {
      display: inline-block;
      font-family: Material Icons;
      font-size: 24px;
      line-height: 24px;
    }
  `;
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", String)
], Icon.prototype, "icon", void 0);
Icon = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sunrise-events-icon')
], Icon);
/* harmony default export */ __webpack_exports__["default"] = (Icon);


/***/ }),

/***/ "./src/Home/Events/Map.ts":
/*!********************************!*\
  !*** ./src/Home/Events/Map.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/Home/Events/Icon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class Range {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    *[Symbol.iterator]() {
        for (var i = this.min; i <= this.max; i++) {
            yield i;
        }
    }
}
const radians = (degrees) => degrees * (Math.PI / 180);
const numTiles = (zoom) => 2 ** zoom;
const sec = (x) => 1 / Math.cos(x);
const latLonToRelativePos = (lat, lon) => {
    const x = (lon + 180) / 360;
    const y = (1 - Math.log(Math.tan(radians(lat)) + sec(radians(lat))) / Math.PI) / 2;
    return { x, y };
};
const latLonToPos = (lat, lon, zoom) => {
    const n = numTiles(zoom);
    const { x, y } = latLonToRelativePos(lat, lon);
    return { x: n * x, y: n * y };
};
const tilePos = (lat, lon, zoom) => {
    const { x, y } = latLonToPos(lat, lon, zoom);
    return { x: Math.trunc(x), y: Math.trunc(y) };
};
const tileWidth = 256;
const tileHeight = 256;
const tileUrl = (x, y, z) => {
    return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png`;
};
const create = async (lat, lon, zoom) => {
    const tilesX = 4;
    const tilesY = 4;
    const xRow = [...new Range(-Math.floor(tilesX / 2), Math.ceil(tilesX / 2))];
    const yRow = [...new Range(-Math.floor(tilesY / 2), Math.ceil(tilesY / 2))];
    const { x: xOffset, y: yOffset } = tilePos(lat, lon, zoom);
    const { x: xAbsolute, y: yAbsolute } = latLonToPos(lat, lon, zoom);
    const latCenterDiff = Math.trunc((xAbsolute - xOffset) * tileWidth);
    const lonCenterDiff = Math.trunc((yAbsolute - yOffset) * tileHeight);
    const tiles = [];
    for (var y of yRow) {
        const row = [];
        for (var x of xRow) {
            row.push({ x: xOffset + x, y: yOffset + y });
        }
        tiles.push(row);
    }
    const imageWidth = tilesX * tileWidth;
    const imageHeight = tilesY * tileHeight;
    const canvas = document.createElement('canvas');
    canvas.width = imageWidth;
    canvas.height = imageHeight;
    const context = canvas.getContext('2d');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, imageWidth, imageHeight);
    const promises = [];
    let rowOffset = 0;
    for (let row of tiles) {
        let colOffset = 0;
        for (let tile of row) {
            promises.push((async (tile, colOffset, rowOffset) => {
                const i = new Image();
                i.src = tileUrl(tile.x, tile.y, zoom);
                await i.decode();
                context.drawImage(i, colOffset * tileWidth - latCenterDiff, rowOffset * tileHeight - lonCenterDiff);
            })(tile, colOffset, rowOffset));
            colOffset++;
        }
        rowOffset++;
    }
    await Promise.all(promises);
    return canvas;
};
let Map = class Map extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.latitude = 0;
        this.longitude = 0;
        this.container = document.createElement('div');
    }
    async connectedCallback() {
        this.container.className = 'container';
        super.connectedCallback();
        const canvas = await create(this.latitude, this.longitude, 17);
        const icon = document.createElement('span');
        icon.textContent = 'place';
        icon.className = 'icon';
        this.container.appendChild(canvas);
        this.container.appendChild(icon);
    }
    update(props) {
        super.update(props);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `${this.container}`;
    }
};
Map.dependencies = [_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]];
Map.styles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
    :host {
      display: block;
      height: 100%;
      width: 100%;
      min-width: 0;
      min-height: 0;
      position: relative;
    }

    .container {
      width: 100%;
      height: 100%;
      pointer-events: none !important;
      position: relative;
      overflow: hidden;
    }

    canvas {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    .icon {
      width: 32px;
      height: 32px;
      font-family: Material Icons;
      color: #121212;
      font-size: 32px;
      line-height: 1;
      text-shadow: 0 1px 6px rgba(0,0,0,0.4);
      pointer-events: none !important;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) translateY(-16px);
    }
  `;
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Number)
], Map.prototype, "latitude", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Number)
], Map.prototype, "longitude", void 0);
Map = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sunrise-events-map')
], Map);
/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./src/Home/Events/TemporalUtils.ts":
/*!******************************************!*\
  !*** ./src/Home/Events/TemporalUtils.ts ***!
  \******************************************/
/*! exports provided: compare, fullDateString, fullTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullDateString", function() { return fullDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullTimeString", function() { return fullTimeString; });
const orderedKeys = [
    'year', 'month', 'day',
    'hour', 'minute', 'second',
    'millisecond', 'microsecond', 'nanosecond',
];
const compare = (l, r) => {
    for (let k of orderedKeys) {
        if (typeof l[k] !== 'undefined' && typeof r[k] !== 'undefined' && l[k] !== r[k])
            return Math.sign(l[k] - r[k]);
    }
    return 0;
};
const fullDateString = (date) => {
    const d = new Date(date.year, date.month - 1, date.day);
    const formatter = new Intl.DateTimeFormat('en-iso', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return formatter.format(d);
};
const fullTimeString = (time) => {
    const d = new Date(0, 0, 1, time.hour, time.minute);
    const formatter = new Intl.DateTimeFormat('en-iso', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
    });
    return formatter.format(d);
};


/***/ }),

/***/ "./src/Home/Events/index.ts":
/*!**********************************!*\
  !*** ./src/Home/Events/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar */ "./src/Home/Events/Calendar.ts");
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details */ "./src/Home/Events/Details.ts");
/* harmony import */ var _TemporalUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemporalUtils */ "./src/Home/Events/TemporalUtils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let Events = class Events extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super(...arguments);
        this.events = [];
        this.selected = null;
        this.hubName = '';
        this.timezone = 'UTC';
        this.firstSelected = false;
        this.onSelect = (event) => {
            this.selected = event.target.selected;
        };
    }
    async update(props) {
        super.update(props);
        if (props.has('events')) {
            if (this.events.length && this.selected === null) {
                this.firstSelected = true;
                await this.updateComplete;
                this.selected = this.sortedEvents()[0];
            }
        }
    }
    sortedEvents() {
        return Array.from(this.events).sort((a, b) => _TemporalUtils__WEBPACK_IMPORTED_MODULE_3__["compare"](a.start, b.start));
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="calendar-container">
        <sunrise-events-calendar
          .events=${this.events}
          .selected=${this.selected}
          @select=${this.onSelect}>
        </sunrise-events-calendar>
      </div>
      <sunrise-events-details
        .selected=${this.selected}
        .hubName=${this.hubName}>
      </sunrise-events-details>
    `;
    }
};
Events.dependencies = [_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"], _Details__WEBPACK_IMPORTED_MODULE_2__["default"]];
Events.styles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
    :host {
      display: grid;
      position: relative;
      grid-template-columns: 4.5fr 5.5fr;
      grid-template-rows: 1fr;
      grid-column-gap: 16px;
      grid-auto-flow: column;
      min-height: 0;
    }
    .calendar-container {
      position: relative;
      min-height: 0;
    }
    sunrise-events-calendar {
      position: absolute;
      height: 100%;
    }
  `;
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Array)
], Events.prototype, "events", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", Object)
], Events.prototype, "selected", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", String)
], Events.prototype, "hubName", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ attribute: false }),
    __metadata("design:type", String)
], Events.prototype, "timezone", void 0);
__decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])('sunrise-events-details'),
    __metadata("design:type", _Details__WEBPACK_IMPORTED_MODULE_2__["default"])
], Events.prototype, "details", void 0);
Events = __decorate([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sunrise-events')
], Events);
/* harmony default export */ __webpack_exports__["default"] = (Events);


/***/ }),

/***/ "./src/Home/index.ts":
/*!***************************!*\
  !*** ./src/Home/index.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domready */ "./node_modules/domready/ready.js");
/* harmony import */ var domready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(domready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events/Event */ "./src/Home/Events/Event.ts");
/* harmony import */ var _Events_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events/index */ "./src/Home/Events/index.ts");



domready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
    const element = document.querySelector('sunrise-events');
    if (element instanceof _Events_index__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        element.events = window._data.events.map((e) => new _Events_Event__WEBPACK_IMPORTED_MODULE_1__["default"](e));
        element.hubName = window._data.hubName;
    }
});


/***/ }),

/***/ "./src/Temporal/CivilDate.ts":
/*!***********************************!*\
  !*** ./src/Temporal/CivilDate.ts ***!
  \***********************************/
/*! exports provided: CivilDate, getDateInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilDate", function() { return CivilDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateInfo", function() { return getDateInfo; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./src/Temporal/Duration.ts");
/* harmony import */ var _CivilYearMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CivilYearMonth */ "./src/Temporal/CivilYearMonth.ts");



class CivilDate {
    constructor(year, month, day) {
        this[Symbol.toStringTag] = 'CivilDate';
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = getDateInfo(year, month, day);
    }
    get year() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].year;
    }
    get month() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].month;
    }
    get day() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].day;
    }
    get dayOfWeek() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfWeek;
    }
    get dayOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfYear;
    }
    get weekOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].weekOfYear;
    }
    with(dateLike = {}) {
        const { year, month, day } = Object.assign({}, dateLike, this);
        return new CivilDate(year, month, day);
    }
    plus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month, day } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, false);
        return new CivilDate(year, month, day);
    }
    minus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month, day } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, true);
        return new CivilDate(year, month, day);
    }
    difference(other) {
        other = Object.assign({ year: 0, month: 1, day: 1 }, other);
        const [one, two] = [this, other].sort(compare);
        let days = two.day - one.day;
        let months = two.month - one.month;
        let years = two.year - one.year;
        let year = one.year;
        let month = one.month;
        let day = one.day;
        while (days < 0) {
            days += Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            month -= 1;
            months -= 1;
        }
        while (days > Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month)) {
            days -= Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            month += 1;
            months += 1;
        }
        while (months < 0) {
            months += 12;
            years -= 1;
        }
        while (months > 12) {
            months -= 12;
            years += 1;
        }
        return Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])({ years, months, days }, this);
    }
    getCivilYearMonth() {
        return new _CivilYearMonth__WEBPACK_IMPORTED_MODULE_2__["CivilYearMonth"](this.year, this.month);
    }
    toString() {
        const { year, month, day } = this;
        return `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["signedpad"])(year, 4)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(month, 2)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(day, 2)}`;
    }
    toJSON() {
        return this.toString();
    }
    static fromString(isoString) {
        const { year, month, day } = parseISO(isoString);
        return new CivilDate(year, month, day);
    }
}
const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
function parseISO(isoStr) {
    const match = ISORE.exec(isoStr);
    if (!match)
        throw new Error('invalid argument');
    const year = +match[1];
    const month = +match[2];
    const day = +match[3];
    return { year, month, day };
}
function getDateInfo(year, month, day) {
    if (!Number.isFinite(year))
        throw new Error('invalid argument: year');
    if (!Number.isFinite(month) || (month < 1) || (month > 12))
        throw new Error('invalid argument: month');
    if (!Number.isFinite(day) || (day < 1) || (month > Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month)))
        throw new Error('invalid argument: day');
    const dayOfWeek = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toDayOfWeek"])(year, month, day);
    const dayOfYear = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toDayOfYear"])(year, month, day);
    const weekOfYear = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toWeekOfYear"])(year, month, day);
    return {
        year, month, day,
        dayOfWeek, dayOfYear, weekOfYear
    };
}
function compare(one, two) {
    if (one.year !== two.year)
        return one.year - two.year;
    if (one.month !== two.month)
        return one.month - two.month;
    if (one.day !== two.day)
        return one.day - two.day;
    return 0;
}
window.CivilDate = CivilDate;


/***/ }),

/***/ "./src/Temporal/CivilDateTime.ts":
/*!***************************************!*\
  !*** ./src/Temporal/CivilDateTime.ts ***!
  \***************************************/
/*! exports provided: CivilDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilDateTime", function() { return CivilDateTime; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./src/Temporal/Duration.ts");
/* harmony import */ var _Instant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instant */ "./src/Temporal/Instant.ts");
/* harmony import */ var _CivilDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CivilDate */ "./src/Temporal/CivilDate.ts");
/* harmony import */ var _CivilTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CivilTime */ "./src/Temporal/CivilTime.ts");
/* harmony import */ var _ZonedDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ZonedDateTime */ "./src/Temporal/ZonedDateTime.ts");
/* harmony import */ var _OffsetDateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OffsetDateTime */ "./src/Temporal/OffsetDateTime.ts");
/* harmony import */ var _CivilYearMonth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CivilYearMonth */ "./src/Temporal/CivilYearMonth.ts");








class CivilDateTime {
    constructor(year, month, day, hours, minutes, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0) {
        this[Symbol.toStringTag] = 'CivilDateTime';
        let data = Object(_CivilDate__WEBPACK_IMPORTED_MODULE_3__["getDateInfo"])(year, month, day);
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = Object.assign(data, Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(data, { hours, minutes, seconds, milliseconds, microseconds, nanoseconds }, false));
    }
    get year() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].year;
    }
    get month() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].month;
    }
    get day() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].day;
    }
    get hour() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].hour;
    }
    get minute() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].minute;
    }
    get second() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].second;
    }
    get millisecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].millisecond;
    }
    get microsecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].microsecond;
    }
    get nanosecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].nanosecond;
    }
    get dayOfWeek() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfWeek;
    }
    get dayOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfYear;
    }
    get weekOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].weekOfYear;
    }
    with(dateTimeLike = {}) {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, dateTimeLike);
        return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    }
    plus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, false);
        return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    }
    minus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, true);
        return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    }
    difference(other = {}) {
        const o = Object.assign({ year: 0, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 }, other);
        const dto = new CivilDateTime(0, 0, 0, 0, 0).with(o);
        const [one, two] = [this, dto].sort(compare);
        let years = two.year - one.year;
        let months = two.month - one.month;
        let days = two.day - one.day;
        let hours = two.hour - one.hour;
        let minutes = two.minute - one.minute;
        let seconds = two.second - one.second;
        let milliseconds = two.millisecond - one.millisecond;
        let microseconds = two.microsecond - one.microsecond;
        let nanoseconds = two.nanosecond - one.nanosecond;
        let year = one.year;
        let month = one.month;
        let day = one.day;
        while (nanoseconds < 0) {
            nanoseconds += 1e3;
            microseconds -= 1;
        }
        while (nanoseconds >= 1e3) {
            nanoseconds -= 1e3;
            microseconds += 1;
        }
        while (microseconds < 0) {
            microseconds += 1e3;
            milliseconds -= 1;
        }
        while (microseconds >= 1e3) {
            microseconds -= 1e3;
            milliseconds += 1;
        }
        while (milliseconds < 0) {
            milliseconds += 1e3;
            seconds -= 1;
        }
        while (milliseconds >= 1e3) {
            milliseconds -= 1e3;
            seconds += 1;
        }
        while (seconds < 0) {
            seconds += 60;
            minutes -= 1;
        }
        while (seconds >= 60) {
            seconds -= 60;
            minutes += 1;
        }
        while (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }
        while (minutes >= 60) {
            minutes -= 60;
            hours += 1;
        }
        while (hours < 0) {
            hours += 24;
            days -= 1;
            day -= 1;
        }
        while (hours >= 24) {
            hours -= 24;
            days += 1;
            day += 1;
        }
        while (day < 0) {
            day += Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            month -= 1;
        }
        while (day >= Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month)) {
            day -= Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            month += 1;
        }
        while (days < 0) {
            days += Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            month -= 1;
            months -= 1;
        }
        while (days > Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month)) {
            days -= Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            month += 1;
            months += 1;
        }
        while (months < 0) {
            months += 12;
            years -= 1;
        }
        while (months > 12) {
            months -= 12;
            years += 1;
        }
        return Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])({
            years, months, days,
            hours, minutes, seconds,
            milliseconds, microseconds, nanoseconds
        }, this);
    }
    withZone(ianaZone, filter) {
        const possible = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["possibleTimestamps"])(this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]], '' + ianaZone);
        const zoned = possible.map((info) => {
            const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"].prototype);
            instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = info;
            return new _ZonedDateTime__WEBPACK_IMPORTED_MODULE_5__["ZonedDateTime"](instant, ianaZone);
        });
        let found = undefined;
        switch (typeof filter) {
            case 'string':
                found = zoned.find((zoned) => (zoned.offset === filter));
                break;
            case 'symbol':
                switch (filter) {
                    case _ZonedDateTime__WEBPACK_IMPORTED_MODULE_5__["ZonedDateTime"].EARLIER:
                        found = zoned.shift();
                        break;
                    case _ZonedDateTime__WEBPACK_IMPORTED_MODULE_5__["ZonedDateTime"].LATER:
                        found = zoned.pop();
                        break;
                }
                break;
            default:
                found = zoned.shift();
        }
        if (!found) {
            throw new Error(`invalid time ${this} in zone ${ianaZone}`);
        }
        return found;
    }
    withOffset(offset) {
        const offsetMilliSeconds = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["parseOffsetString"])(offset);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = this;
        let { ms, ns } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["epochMSNS"])({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
        ms -= offsetMilliSeconds;
        const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"].prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return new _OffsetDateTime__WEBPACK_IMPORTED_MODULE_6__["OffsetDateTime"](instant, offset);
    }
    getCivilDate() {
        return new _CivilDate__WEBPACK_IMPORTED_MODULE_3__["CivilDate"](this.year, this.month, this.day);
    }
    getCivilTime() {
        return new _CivilTime__WEBPACK_IMPORTED_MODULE_4__["CivilTime"](this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
    }
    getCivilYearMonth() {
        return new _CivilYearMonth__WEBPACK_IMPORTED_MODULE_7__["CivilYearMonth"](this.year, this.month);
    }
    // getCivilMonthDay() {
    //   return new CivilMonthDay(this.month, this.day);
    // }
    toString() {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = this;
        const date = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["signedpad"])(year, 4)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(month, 2)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(day, 2)}`;
        const subs = `${`000${millisecond}`.slice(-3)}${`000${microsecond}`.slice(-3)}${`000${nanosecond}`.slice(-3)}`;
        const time = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(hour, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(minute, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(second, 2)}.${subs}`;
        return `${date}T${time}`;
    }
    toJSON() {
        return this.toString();
    }
    static fromString(isoStr) {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = parseISO(isoStr);
        return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
    }
}
const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?$/;
function parseISO(isoString) {
    const match = ISORE.exec(isoString);
    if (!match)
        throw new Error('invalid argument');
    const year = +match[1];
    const month = +match[2];
    const day = +match[3];
    const hour = +match[4];
    const minute = +match[5];
    const second = match[6] ? +match[6] : 0;
    const nanoseconds = +`${match[7] || ''}000000000`.slice(0, 9);
    const millisecond = Math.floor(nanoseconds / 1e6) % 1e3;
    const microsecond = Math.floor(nanoseconds / 1e3) % 1e3;
    const nanosecond = Math.floor(nanoseconds / 1e0) % 1e3;
    return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond };
}
function compare(one, two) {
    if (one.year !== two.year)
        return one.year - two.year;
    if (one.month !== two.month)
        return one.month - two.month;
    if (one.day !== two.day)
        return one.day - two.day;
    if (one.hour !== two.hour)
        return one.hour - two.hour;
    if (one.minute !== two.minute)
        return one.minute - two.minute;
    if (one.second !== two.second)
        return one.second - two.second;
    if (one.millisecond !== two.millisecond)
        return one.millisecond - two.millisecond;
    if (one.microsecond !== two.microsecond)
        return one.microsecond - two.microsecond;
    if (one.nanosecond !== two.nanosecond)
        return one.nanosecond - two.nanosecond;
    return 0;
}


/***/ }),

/***/ "./src/Temporal/CivilTime.ts":
/*!***********************************!*\
  !*** ./src/Temporal/CivilTime.ts ***!
  \***********************************/
/*! exports provided: CivilTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilTime", function() { return CivilTime; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./src/Temporal/Duration.ts");


class CivilTime {
    constructor(hours, minutes, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0) {
        this[Symbol.toStringTag] = 'CivilTime';
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])({}, { hours, minutes, seconds, milliseconds, microseconds, nanoseconds }, false);
    }
    get hour() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].hour;
    }
    get minute() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].minute;
    }
    get second() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].second;
    }
    get millisecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].millisecond;
    }
    get microsecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].microsecond;
    }
    get nanosecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].nanosecond;
    }
    with(timeLike = {}) {
        const { hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, timeLike);
        return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    plus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike);
        const { hour, minute, second, millisecond, microsecond, nanosecond } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, false);
        return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    minus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike);
        const { hour, minute, second, millisecond, microsecond, nanosecond } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, true);
        return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
    difference(other = {}) {
        const [one, two] = [this, new CivilTime(0, 0).with(other)].sort(compare);
        let hours = two.hour - one.hour;
        let minutes = two.minute - one.minute;
        let seconds = two.second - one.second;
        let milliseconds = two.millisecond - one.millisecond;
        let microseconds = two.microsecond - one.microsecond;
        let nanoseconds = two.nanosecond - one.nanosecond;
        while (nanoseconds < 0) {
            nanoseconds += 1e3;
            microseconds -= 1;
        }
        while (nanoseconds >= 1e3) {
            nanoseconds -= 1e3;
            microseconds += 1;
        }
        while (microseconds < 0) {
            microseconds += 1e3;
            milliseconds -= 1;
        }
        while (microseconds >= 1e3) {
            microseconds -= 1e3;
            milliseconds += 1;
        }
        while (milliseconds < 0) {
            milliseconds += 1e3;
            seconds -= 1;
        }
        while (milliseconds >= 1e3) {
            milliseconds -= 1e3;
            seconds += 1;
        }
        while (seconds < 0) {
            seconds += 60;
            minutes -= 1;
        }
        while (seconds >= 60) {
            seconds -= 60;
            minutes += 1;
        }
        while (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }
        while (minutes >= 60) {
            minutes -= 60;
            hours += 1;
        }
        return Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])({
            hours, minutes, seconds,
            milliseconds, microseconds, nanoseconds
        });
    }
    toString() {
        const { hour, minute, second, millisecond, microsecond, nanosecond } = this;
        const subs = `${`000${millisecond}`.slice(-3)}${`000${microsecond}`.slice(-3)}${`000${nanosecond}`.slice(-3)}`;
        return `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(hour, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(minute, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(second, 2)}.${subs}`;
    }
    toJSON() {
        return this.toString();
    }
    static fromString(timeString) {
        const { hour, minute, second, millisecond, microsecond, nanosecond } = parseISO(timeString);
        return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
    }
}
const ISORE = /^([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?$/;
function parseISO(isoStr) {
    const match = ISORE.exec(isoStr);
    if (!match)
        throw new Error('invalid argument');
    const hour = +match[1];
    const minute = +match[2];
    const second = +`00${match[3] || ''}`.slice(-2);
    const subs = +`${match[4] || ''}000000000`.slice(0, 9);
    const nanosecond = Math.floor(subs / 1e0) % 1000;
    const microsecond = Math.floor(subs / 1e3) % 1000;
    const millisecond = Math.floor(subs / 1e6) % 1000;
    return { hour, minute, second, millisecond, microsecond, nanosecond };
}
function compare(one, two) {
    if (one.hour !== two.hour)
        return two.hour - one.hour;
    if (one.minute !== two.minute)
        return two.minute - one.minute;
    if (one.second !== two.second)
        return two.second - one.second;
    if (one.millisecond !== two.millisecond)
        return two.millisecond - one.millisecond;
    if (one.microsecond !== two.microsecond)
        return two.microsecond - one.microsecond;
    if (one.nanosecond !== two.nanosecond)
        return two.nanosecond - one.nanosecond;
    return 0;
}


/***/ }),

/***/ "./src/Temporal/CivilYearMonth.ts":
/*!****************************************!*\
  !*** ./src/Temporal/CivilYearMonth.ts ***!
  \****************************************/
/*! exports provided: CivilYearMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilYearMonth", function() { return CivilYearMonth; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./src/Temporal/Duration.ts");
/* harmony import */ var _CivilDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CivilDate */ "./src/Temporal/CivilDate.ts");



class CivilYearMonth {
    constructor(year, month) {
        if (!Number.isFinite(year))
            throw new Error('invalid argument: year');
        if (!Number.isFinite(month) || (month < 1) || (month > 12))
            throw new Error('invalid argument: month');
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { year, month };
    }
    get [Symbol.toStringTag]() { return 'CivilYearMonth'; }
    get year() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].year;
    }
    get month() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].month;
    }
    with(dateLike = {}) {
        const { year, month } = Object.assign({}, this, dateLike);
        return new CivilYearMonth(year, month);
    }
    plus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this.withDay(1), duration, false);
        return new CivilYearMonth(year, month);
    }
    minus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this.withDay(1), duration, true);
        return new CivilYearMonth(year, month);
    }
    difference(other) {
        const [one, two] = [this, other].sort(compare);
        let months = two.month - one.month;
        let years = two.year - one.year;
        while (months < 0) {
            months += 12;
            years -= 1;
        }
        while (months > 12) {
            months -= 12;
            years += 1;
        }
        return Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])({ years, months }, this);
    }
    withDay(day = 1) {
        return new _CivilDate__WEBPACK_IMPORTED_MODULE_2__["CivilDate"](this.year, this.month, day);
    }
    toString() {
        const { year, month } = this;
        return `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["signedpad"])(year, 4)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(month, 2)}`;
    }
    toJSON() {
        return this.toString();
    }
    static fromString(isoString) {
        const { year, month } = parseISO(isoString);
        return new CivilYearMonth(year, month);
    }
}
const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])$/;
function parseISO(isoStr) {
    const match = ISORE.exec(isoStr);
    if (!match)
        throw new Error('invalid argument');
    const year = +match[1];
    const month = +match[2];
    return { year, month };
}
function compare(one, two) {
    if (one.year !== two.year)
        return one.year - two.year;
    if (one.month !== two.month)
        return one.month - two.month;
    return 0;
}


/***/ }),

/***/ "./src/Temporal/Duration.ts":
/*!**********************************!*\
  !*** ./src/Temporal/Duration.ts ***!
  \**********************************/
/*! exports provided: Duration, castDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDuration", function() { return castDuration; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");

class Duration {
    constructor() {
        this[Symbol.toStringTag] = 'Duration';
        throw new TypeError('durations can not be constructed');
    }
    get years() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].years;
    }
    get months() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].months;
    }
    get days() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].days;
    }
    get hours() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].hours;
    }
    get minutes() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].minutes;
    }
    get seconds() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].seconds;
    }
    get milliseconds() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].milliseconds;
    }
    get microseconds() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].microseconds;
    }
    get nanoseconds() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].nanoseconds;
    }
}
function castDuration(durationLike, base) {
    if (durationLike instanceof Duration)
        return durationLike;
    let years = typeof durationLike.years !== 'undefined' && Number.isFinite(durationLike.years) ? Math.abs(durationLike.years) : undefined;
    let months = typeof durationLike.months !== 'undefined' && Number.isFinite(durationLike.months) ? Math.abs(durationLike.months) : undefined;
    let days = typeof durationLike.days !== 'undefined' && Number.isFinite(durationLike.days) ? Math.abs(durationLike.days) : 0;
    let hours = typeof durationLike.hours !== 'undefined' && Number.isFinite(durationLike.hours) ? Math.abs(durationLike.hours) : 0;
    let minutes = typeof durationLike.minutes !== 'undefined' && Number.isFinite(durationLike.minutes) ? Math.abs(durationLike.minutes) : 0;
    let seconds = typeof durationLike.seconds !== 'undefined' && Number.isFinite(durationLike.seconds) ? Math.abs(durationLike.seconds) : 0;
    let milliseconds = typeof durationLike.milliseconds !== 'undefined' && Number.isFinite(durationLike.milliseconds) ? Math.abs(durationLike.milliseconds) : 0;
    let microseconds = typeof durationLike.microseconds !== 'undefined' && Number.isFinite(durationLike.microseconds) ? Math.abs(durationLike.microseconds) : 0;
    let nanoseconds = typeof durationLike.nanoseconds !== 'undefined' && Number.isFinite(durationLike.nanoseconds) ? Math.abs(durationLike.nanoseconds) : 0;
    while (nanoseconds >= 1e3) {
        microseconds += 1;
        nanoseconds -= 1e3;
    }
    while (microseconds >= 1e3) {
        milliseconds += 1;
        microseconds -= 1e3;
    }
    while (milliseconds >= 1e3) {
        seconds += 1;
        milliseconds -= 1e3;
    }
    while (seconds >= 60) {
        minutes += 1;
        seconds -= 60;
    }
    while (minutes >= 60) {
        hours += 1;
        minutes -= 60;
    }
    while (hours >= 24) {
        days += 1;
        hours -= 24;
    }
    if (base && ((typeof months !== 'undefined' && Number.isFinite(months)) || (typeof years !== 'undefined' && Number.isFinite(years)))) {
        years = years || 0;
        months = months || 0;
        let { year, month } = base;
        if (!Number.isFinite(month))
            throw new Error('invalid base');
        while (days > Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month)) {
            days -= Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(year, month);
            months += 1;
            month += 1;
            if (month > 12) {
                month = 1;
                year = year && (year + 1);
            }
        }
        while (months > 12) {
            months -= 12;
            years += 1;
        }
    }
    else {
        years = undefined;
        months = undefined;
    }
    const duration = Object.create(Duration.prototype);
    duration[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = {
        years, months, days,
        hours, minutes, seconds,
        milliseconds, microseconds, nanoseconds
    };
    return duration;
}


/***/ }),

/***/ "./src/Temporal/Instant.ts":
/*!*********************************!*\
  !*** ./src/Temporal/Instant.ts ***!
  \*********************************/
/*! exports provided: Instant, compare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instant", function() { return Instant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _OffsetDateTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OffsetDateTime */ "./src/Temporal/OffsetDateTime.ts");


class Instant {
    constructor(epochNanos) {
        this[Symbol.toStringTag] = 'Instant';
        if ('bigint' !== typeof epochNanos)
            throw new Error('invalid argument');
        const ms = Number(epochNanos / BigInt(1e6));
        const ns = Number(epochNanos % BigInt(1e6));
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
    }
    get epochNanoseconds() {
        const { ms, ns } = this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]];
        return BigInt(ms) * BigInt(1e6) + BigInt(ns);
    }
    get epochMicroseconds() {
        return this.epochNanoseconds / BigInt(1e3);
    }
    get epochMilliseconds() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms;
    }
    get epochSeconds() {
        return Math.floor(this.epochMilliseconds / 1e3);
    }
    withOffset(offsetString) {
        return new _OffsetDateTime__WEBPACK_IMPORTED_MODULE_1__["OffsetDateTime"](this, offsetString);
    }
    toString() {
        const date = new Date(this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms);
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const hour = date.getUTCHours();
        const minute = date.getUTCMinutes();
        const second = date.getUTCSeconds();
        const millisecond = date.getUTCMilliseconds();
        const datepart = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["signedpad"])(year, 4)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(month, 2)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(day, 2)}`;
        const subsecs = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(millisecond, 3)}${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns, 6)}`;
        const timepart = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(hour, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(minute, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(second, 2)}.${subsecs}`;
        return `${datepart}T${timepart}Z`;
    }
    toJSON() {
        return this.toString();
    }
    static fromEpochNanoseconds(epochNanos) {
        return new Instant(epochNanos);
    }
    static fromEpochMicroseconds(epochMicros) {
        return new Instant(epochMicros * BigInt(1e3));
    }
    static fromEpochMilliseconds(epochMillis) {
        const instance = Object.create(Instant.prototype);
        const ms = epochMillis;
        const ns = 0;
        instance[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return instance;
    }
    static fromEpochSeconds(epochSeconds) {
        const instance = Object.create(Instant.prototype);
        const ms = Math.floor(epochSeconds * 1e3);
        const ns = 0;
        instance[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return instance;
    }
    static fromString(isoString) {
        const instant = Object.create(Instant.prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = parseISO(isoString);
        return instant;
    }
}
function compare(one, two) {
    if (one[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms === two[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms)
        return (one[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms - two[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms) < 0 ? -1 : 1;
    if (one[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns === two[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns)
        return 0;
    return (one[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns - two[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns) < 0 ? -1 : 1;
}
const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?Z$/;
function parseISO(isoString) {
    const match = ISORE.exec(isoString);
    if (!match)
        throw new Error('invalid argument');
    const year = +match[1];
    const month = +match[2];
    const day = +match[3];
    const hour = +match[4];
    const minute = +match[5];
    const second = match[6] ? +match[6] : 0;
    const nanoseconds = +`${match[7] || ''}000000000`.slice(0, 9);
    const millisecond = Math.floor(nanoseconds / 1e6) % 1e3;
    const microsecond = Math.floor(nanoseconds / 1e3) % 1e3;
    const nanosecond = Math.floor(nanoseconds / 1e0) % 1e3;
    const ms = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
    const ns = (microsecond * 1e3) + nanosecond;
    return { ms, ns };
}


/***/ }),

/***/ "./src/Temporal/OffsetDateTime.ts":
/*!****************************************!*\
  !*** ./src/Temporal/OffsetDateTime.ts ***!
  \****************************************/
/*! exports provided: OffsetDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffsetDateTime", function() { return OffsetDateTime; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Duration */ "./src/Temporal/Duration.ts");
/* harmony import */ var _Instant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instant */ "./src/Temporal/Instant.ts");
/* harmony import */ var _CivilDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CivilDate */ "./src/Temporal/CivilDate.ts");
/* harmony import */ var _CivilTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CivilTime */ "./src/Temporal/CivilTime.ts");
/* harmony import */ var _CivilYearMonth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CivilYearMonth */ "./src/Temporal/CivilYearMonth.ts");
/* harmony import */ var _ZonedDateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ZonedDateTime */ "./src/Temporal/ZonedDateTime.ts");
/* harmony import */ var _CivilDateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CivilDateTime */ "./src/Temporal/CivilDateTime.ts");








class OffsetDateTime {
    constructor(instant, offsetString) {
        this[Symbol.toStringTag] = 'OffsetDateTime';
        if (!(instant instanceof _Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"]))
            throw new Error('invalid argument: instant');
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = Object.assign({}, { instant }, getOffsetInfo(instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms, instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns, offsetString));
    }
    get instant() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].instant;
    }
    get offset() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].offset;
    }
    get year() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].year;
    }
    get month() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].month;
    }
    get day() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].day;
    }
    get hour() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].hour;
    }
    get minute() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].minute;
    }
    get second() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].second;
    }
    get millisecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].millisecond;
    }
    get microsecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].microsecond;
    }
    get nanosecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].nanosecond;
    }
    get dayOfWeek() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfWeek;
    }
    get dayOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfYear;
    }
    get weekOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].weekOfYear;
    }
    with(dateTimeLike = {}) {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, dateTimeLike);
        let { ms, ns } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["epochMSNS"])({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
        ms -= this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].offsetMilliSeconds;
        const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"].prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return new OffsetDateTime(instant, this.offset.toString());
    }
    plus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, false);
        let { ms, ns } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["epochMSNS"])({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
        ms -= this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].offsetMilliSeconds;
        const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"].prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return new OffsetDateTime(instant, this.offset);
    }
    minus(durationLike = {}) {
        const duration = Object(_Duration__WEBPACK_IMPORTED_MODULE_1__["castDuration"])(durationLike, this);
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["calculate"])(this, duration, true);
        let { ms, ns } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["epochMSNS"])({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
        ms -= this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].offsetMilliSeconds;
        const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"].prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return new OffsetDateTime(instant, this.offset);
    }
    withZone(ianaZone) {
        const zoned = new _ZonedDateTime__WEBPACK_IMPORTED_MODULE_6__["ZonedDateTime"](this.instant, ianaZone);
        if (zoned.offset !== this.offset)
            throw new Error('invalid timezone for this offset');
        return zoned;
    }
    getCivilDateTime() {
        return new _CivilDateTime__WEBPACK_IMPORTED_MODULE_7__["CivilDateTime"](this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
    }
    getCivilDate() {
        return new _CivilDate__WEBPACK_IMPORTED_MODULE_3__["CivilDate"](this.year, this.month, this.day);
    }
    getCivilTime() {
        return new _CivilTime__WEBPACK_IMPORTED_MODULE_4__["CivilTime"](this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
    }
    getCivilYearMonth() {
        return new _CivilYearMonth__WEBPACK_IMPORTED_MODULE_5__["CivilYearMonth"](this.year, this.month);
    }
    // getCivilMonthDay() {
    //   return new CivilMonthDay(this.month, this.day);
    // }
    toString() {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset } = this;
        const date = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(year, 4)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(month, 2)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(day, 2)}`;
        const time = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(hour, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(minute, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(second, 2)}`;
        const subs = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(millisecond, 3)}${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(microsecond, 3)}${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(nanosecond, 3)}`;
        return `${date}T${time}.${subs}${offset}`;
    }
    toJSON() {
        return this.toString();
    }
    static fromString(isoString) {
        const { offset, ...datetime } = parseOffsetISO(isoString);
        let { ms, ns } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["epochMSNS"])(datetime);
        ms -= Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["parseOffsetString"])(offset);
        const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_2__["Instant"].prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        return new OffsetDateTime(instant, offset);
    }
}
const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?([+-]\d{2}:?\d{2})$/;
function parseOffsetISO(isoString) {
    const match = ISORE.exec(isoString);
    if (!match)
        throw new Error('invalid argument');
    const year = +match[1];
    const month = +match[2];
    const day = +match[3];
    const hour = +match[4];
    const minute = +match[5];
    const second = match[6] ? +match[6] : 0;
    const nanoseconds = +`${match[7] || ''}000000000`.slice(0, 9);
    const millisecond = Math.floor(nanoseconds / 1e6) % 1e3;
    const microsecond = Math.floor(nanoseconds / 1e3) % 1e3;
    const nanosecond = Math.floor(nanoseconds / 1e0) % 1e3;
    const offset = match[8];
    return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset };
}
function getOffsetInfo(ms, ns, offset) {
    const offsetMilliSeconds = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["parseOffsetString"])(offset);
    const date = new Date(ms + offsetMilliSeconds);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();
    const millisecond = date.getUTCMilliseconds();
    const microsecond = Math.floor(ns / 1e3);
    const nanosecond = Math.floor(ns % 1e3);
    const dayOfWeek = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toDayOfWeek"])(year, month, day);
    const dayOfYear = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toDayOfYear"])(year, month, day);
    const weekOfYear = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toWeekOfYear"])(year, month, day);
    offset = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["makeOffsetString"])(offsetMilliSeconds);
    return {
        year, month, day,
        hour, minute, second,
        millisecond, microsecond, nanosecond,
        dayOfWeek, dayOfYear, weekOfYear,
        offset, offsetMilliSeconds
    };
}


/***/ }),

/***/ "./src/Temporal/Shared.ts":
/*!********************************!*\
  !*** ./src/Temporal/Shared.ts ***!
  \********************************/
/*! exports provided: DATA, isLeapYear, daysInMonth, pad, signedpad, calculate, toDayOfYear, toDayOfWeek, toWeekOfYear, epochMSNS, parseOffsetString, makeOffsetString, possibleTimestamps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signedpad", function() { return signedpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculate", function() { return calculate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDayOfYear", function() { return toDayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDayOfWeek", function() { return toDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toWeekOfYear", function() { return toWeekOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epochMSNS", function() { return epochMSNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOffsetString", function() { return parseOffsetString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOffsetString", function() { return makeOffsetString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "possibleTimestamps", function() { return possibleTimestamps; });
const DATA = Symbol();
const DoM = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
function isLeapYear(year) {
    if (undefined === year)
        return false;
    const isDiv4 = (year % 4) === 0;
    const isDiv100 = (year % 100) === 0;
    const isDiv400 = (year % 400) === 0;
    return isDiv4 && (!isDiv100 || isDiv400);
}
function daysInMonth(year, month) {
    return DoM[isLeapYear(year) ? 'leapyear' : 'standard'][month - 1];
}
function pad(num, cnt) {
    const str = `${Math.abs(+num)}`;
    const prefix = (new Array(cnt)).fill('0').join('');
    return `${prefix}${`${str}`.trim()}`.slice(-1 * Math.max(cnt, str.length));
}
function signedpad(num, cnt) {
    return `${+num < 0 ? '-' : ''}${pad(num, cnt)}`;
}
function calculate({ year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0 }, { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0 }, negate) {
    year += (negate ? -1 : 1) * years;
    month += (negate ? -1 : 1) * months;
    day += (negate ? -1 : 1) * days;
    hour += (negate ? -1 : 1) * hours;
    minute += (negate ? -1 : 1) * minutes;
    second += (negate ? -1 : 1) * seconds;
    millisecond += (negate ? -1 : 1) * milliseconds;
    microsecond += (negate ? -1 : 1) * microseconds;
    nanosecond += (negate ? -1 : 1) * nanoseconds;
    while (nanosecond < 0) {
        nanosecond += 1E3;
        microsecond -= 1;
    }
    while (nanosecond >= 1E3) {
        nanosecond -= 1E3;
        microsecond += 1;
    }
    while (microsecond < 0) {
        microsecond += 1E3;
        millisecond -= 1;
    }
    while (microsecond >= 1E3) {
        microsecond -= 1E3;
        millisecond += 1;
    }
    while (millisecond < 0) {
        millisecond += 1E3;
        second -= 1;
    }
    while (millisecond >= 1E3) {
        millisecond -= 1E3;
        second += 1;
    }
    while (second < 0) {
        second += 60;
        minute -= 1;
    }
    while (second >= 60) {
        second -= 60;
        minute += 1;
    }
    while (minute < 0) {
        minute += 60;
        hour -= 1;
    }
    while (minute >= 60) {
        minute -= 60;
        hour += 1;
    }
    while (hour < 0) {
        hour += 24;
        day -= 1;
    }
    while (hour >= 24) {
        hour -= 24;
        day += 1;
    }
    while (month < 1) {
        month += 12;
        year -= 1;
    }
    while (month > 12) {
        month -= 12;
        year += 1;
    }
    while (day < 1) {
        month -= 1;
        day = daysInMonth(year, month) + day;
        if (month < 1) {
            month = 12;
            year -= 1;
        }
    }
    while (day > daysInMonth(year, month)) {
        day -= daysInMonth(year, month);
        month += 1;
        if (month > 12) {
            month = 1;
            year += 1;
        }
    }
    while (month < 1) {
        month += 12;
        year -= 1;
    }
    while (month > 12) {
        month -= 12;
        year += 1;
    }
    return {
        year, month, day,
        hour, minute, second,
        millisecond, microsecond, nanosecond
    };
}
function toDayOfYear(year, month, day) {
    let days = day;
    for (let m = month - 1; m > 0; m--) {
        days += daysInMonth(year, m);
    }
    return days;
}
function toDayOfWeek(year, month, day) {
    const m = month + ((month < 3) ? 10 : -2);
    const Y = year - ((month < 3) ? 1 : 0);
    const c = Math.floor(Y / 100);
    const y = Y - (c * 100);
    const d = day;
    const pD = d;
    const pM = Math.floor((2.6 * m) - 0.2);
    const pY = y + Math.floor(y / 4);
    const pC = Math.floor(c / 4) - (2 * c);
    const dow = (pD + pM + pY + pC) % 7;
    return dow + ((dow < 0) ? 7 : 0);
}
function toWeekOfYear(year, month, day) {
    let doy = toDayOfYear(year, month, day);
    let dow = toDayOfWeek(year, month, day) || 7;
    let doj = toDayOfWeek(year, 1, 1);
    const week = Math.floor((doy - dow + 10) / 7);
    if (week < 1) {
        if (doj === (isLeapYear(year) ? 5 : 6)) {
            return 53;
        }
        else {
            return 52;
        }
    }
    if (week === 53) {
        if (((isLeapYear(year) ? 366 : 365) - doy) < (4 - dow)) {
            return 1;
        }
    }
    return week;
}
function epochMSNS({ year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0 } = {}) {
    const ms = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
    const ns = (microsecond * 1e3) + nanosecond;
    return { ms, ns };
}
const OFFSETRE = /^([+-]?)(\d{2})\:?(\d{2})$/;
function parseOffsetString(offsetString) {
    const match = OFFSETRE.exec(offsetString);
    if (!match)
        throw new Error('invalid offset string');
    const hours = +match[2];
    const minutes = +match[3];
    const direction = match[1] === '-' ? -1 : +1;
    return (hours * 60 + minutes) * 60 * 1e3 * direction;
}
function makeOffsetString(offsetMilliseconds) {
    const direction = (offsetMilliseconds < 0) ? '-' : '+';
    const offsetMinutes = Math.floor(Math.abs(offsetMilliseconds) / 6e4);
    const hours = Math.floor(offsetMinutes / 60);
    const minutes = Math.floor(offsetMinutes % 60);
    return `${direction}${('00' + hours).slice(-2)}:${('00' + minutes).slice(-2)}`;
}
function possibleTimestamps({ year, month, day, hour = 0, minute = 0, second = 0, millisecond = 0, microsecond, nanosecond = 0 }, zone) {
    const base = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
    const formatter = new Intl.DateTimeFormat('en-iso', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: zone
    });
    const possible = possibleOffsets(year, formatter).sort().map((offset) => {
        const ms = base - offset;
        const ns = microsecond * 1e3 + nanosecond;
        const info = getTimestampInfo(ms, ns, formatter);
        if (info.hour !== hour)
            return undefined;
        if (info.year !== year)
            return undefined;
        if (info.month !== month)
            return undefined;
        if (info.day !== day)
            return undefined;
        if (info.minute !== minute)
            return undefined;
        if (info.second !== second)
            return undefined;
        return { ms, ns };
    }).filter(x => !!x).sort((a, b) => {
        if (a.ms !== b.ms)
            a.ms - b.ms;
        return a.ns - b.ns;
    });
    return possible;
}
function possibleOffsets(year, formatter) {
    const base = new Date(year, 0, 2, 9);
    const res = new Set();
    (new Array(12).fill(0)).forEach((_, month) => {
        base.setMonth(month);
        const { offsetMilliseconds } = getTimestampInfo(base.getTime(), 123, formatter);
        res.add(offsetMilliseconds);
    });
    return Array.from(res);
}
function getTimestampInfo(ms, ns = 0, formatter) {
    const { year, month, day, hour, minute, second } = formatter.formatToParts(ms).reduce((res, item) => {
        if (item.type !== 'literal')
            res[item.type] = parseInt(item.value, 10);
        return res;
    }, {});
    const millisecond = (ms % 1000);
    const microsecond = Math.floor(ns / 1e3) % 1e3;
    const nanosecond = Math.floor(ns / 1e0) % 1e3;
    const offsetMilliseconds = Date.UTC(year, month - 1, day, hour, minute, second, millisecond) - ms;
    return {
        year, month, day,
        hour, minute, second,
        millisecond, microsecond, nanosecond,
        offsetMilliseconds
    };
}


/***/ }),

/***/ "./src/Temporal/ZonedDateTime.ts":
/*!***************************************!*\
  !*** ./src/Temporal/ZonedDateTime.ts ***!
  \***************************************/
/*! exports provided: ZonedDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonedDateTime", function() { return ZonedDateTime; });
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared */ "./src/Temporal/Shared.ts");
/* harmony import */ var _Instant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instant */ "./src/Temporal/Instant.ts");
/* harmony import */ var _OffsetDateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OffsetDateTime */ "./src/Temporal/OffsetDateTime.ts");
/* harmony import */ var _CivilDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CivilDate */ "./src/Temporal/CivilDate.ts");
/* harmony import */ var _CivilTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CivilTime */ "./src/Temporal/CivilTime.ts");
/* harmony import */ var _CivilDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CivilDateTime */ "./src/Temporal/CivilDateTime.ts");
/* harmony import */ var _CivilYearMonth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CivilYearMonth */ "./src/Temporal/CivilYearMonth.ts");







class ZonedDateTime {
    constructor(instant, ianaZone) {
        this[Symbol.toStringTag] = 'ZonedDateTime';
        if (!(instant instanceof _Instant__WEBPACK_IMPORTED_MODULE_1__["Instant"]))
            throw new Error('invalid argument: instant');
        this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = Object.assign({}, { instant }, getZonedInfo(instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ms, instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].ns, ianaZone));
    }
    get instant() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].instant;
    }
    get offset() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].offset;
    }
    get timeZone() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].timeZone;
    }
    get year() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].year;
    }
    get month() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].month;
    }
    get day() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].day;
    }
    get hour() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].hour;
    }
    get minute() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].minute;
    }
    get second() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].second;
    }
    get millisecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].millisecond;
    }
    get microsecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].microsecond;
    }
    get nanosecond() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].nanosecond;
    }
    get dayOfWeek() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfWeek;
    }
    get dayOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].dayOfYear;
    }
    get weekOfYear() {
        return this[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]].weekOfYear;
    }
    with(dateTimeLike = {}) {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, dateTimeLike);
        return new _CivilDateTime__WEBPACK_IMPORTED_MODULE_5__["CivilDateTime"](year, month, day, hour, minute, second, millisecond, microsecond, nanosecond).withZone(this.timeZone);
    }
    getOffsetDateTime() {
        return new _OffsetDateTime__WEBPACK_IMPORTED_MODULE_2__["OffsetDateTime"](this.instant, this.offset);
    }
    getCivilDateTime() {
        return new _CivilDateTime__WEBPACK_IMPORTED_MODULE_5__["CivilDateTime"](this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
    }
    getCivilDate() {
        return new _CivilDate__WEBPACK_IMPORTED_MODULE_3__["CivilDate"](this.year, this.month, this.day);
    }
    getCivilTime() {
        return new _CivilTime__WEBPACK_IMPORTED_MODULE_4__["CivilTime"](this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
    }
    getCivilYearMonth() {
        return new _CivilYearMonth__WEBPACK_IMPORTED_MODULE_6__["CivilYearMonth"](this.year, this.month);
    }
    // getCivilMonthDay() {
    //   return new CivilMonthDay(this.month, this.day);
    // }
    toString() {
        const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone, offset } = this;
        const date = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["signedpad"])(year, 4)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(month, 2)}-${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(day, 2)}`;
        const time = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(hour, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(minute, 2)}:${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(second, 2)}`;
        const subs = `${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(millisecond, 3)}${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(microsecond, 3)}${Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["pad"])(nanosecond, 3)}`;
        return `${date}T${time}.${subs}${offset}[${timeZone}]`;
    }
    toJSON() {
        return this.toString();
    }
    static fromString(isoString) {
        const { offset, timeZone, ...datetime } = parseZonedISO(isoString);
        const offsetMilliseconds = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["parseOffsetString"])(offset);
        let { ms, ns } = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["epochMSNS"])(datetime);
        ms -= offsetMilliseconds;
        const instant = Object.create(_Instant__WEBPACK_IMPORTED_MODULE_1__["Instant"].prototype);
        instant[_Shared__WEBPACK_IMPORTED_MODULE_0__["DATA"]] = { ms, ns };
        const zoned = new ZonedDateTime(instant, timeZone);
        if (zoned.offset !== Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["makeOffsetString"])(offsetMilliseconds))
            throw new Error('invalid iso string (bad offset)');
        return zoned;
    }
    static isValidTimezone(timeZone) {
        try {
            new Intl.DateTimeFormat('en-ISO', { timeZone });
            return true;
        }
        catch (e) {
            return false;
        }
    }
}
ZonedDateTime.EARLIER = Symbol('earlier');
ZonedDateTime.LATER = Symbol('later');
const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?([+-]\d{2}:?\d{2})\[([\w_\/]+)\]$/;
function parseZonedISO(isoString) {
    const match = ISORE.exec(isoString);
    if (!match)
        throw new Error('invalid argument');
    const year = +match[1];
    const month = +match[2];
    const day = +match[3];
    const hour = +match[4];
    const minute = +match[5];
    const second = match[6] ? +match[6] : 0;
    const nanoseconds = +`${match[7] || ''}000000000`.slice(0, 9);
    const millisecond = Math.floor(nanoseconds / 1e6) % 1e3;
    const microsecond = Math.floor(nanoseconds / 1e3) % 1e3;
    const nanosecond = Math.floor(nanoseconds / 1e0) % 1e3;
    const offset = match[8];
    const timeZone = match[9];
    return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset, timeZone };
}
const FMTOPTS = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    millisecond: 'numeric',
    hour12: false
};
function getZonedInfo(ms, ns, timeZone) {
    const fmt = new Intl.DateTimeFormat('en-iso', Object.assign({}, FMTOPTS, { timeZone }));
    const agg = fmt.formatToParts(new Date(ms)).reduce((agg, cur) => {
        switch (cur.type) {
            case 'year':
                agg.year = +cur.value;
                break;
            case 'month':
                agg.month = +cur.value;
                break;
            case 'day':
                agg.day = +cur.value;
                break;
            case 'hour':
                agg.hour = +cur.value;
                break;
            case 'minute':
                agg.minute = +cur.value;
                break;
            case 'second':
                agg.second = +cur.value;
                break;
        }
        return agg;
    }, {});
    agg.millisecond = ms % 1e3;
    agg.microsecond = Math.floor(ns / 1e3);
    agg.nanosecond = Math.floor(ns % 1e3);
    agg.timeZone = fmt.resolvedOptions().timeZone;
    const equiv = Date.UTC(agg.year, agg.month - 1, agg.day, agg.hour, agg.minute, agg.second, agg.millisecond);
    agg.offsetMilliSeconds = equiv - ms;
    agg.offset = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["makeOffsetString"])(agg.offsetMilliSeconds);
    agg.dayOfWeek = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toDayOfWeek"])(agg.year, agg.month, agg.day);
    agg.dayOfYear = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toDayOfYear"])(agg.year, agg.month, agg.day);
    agg.weekOfYear = Object(_Shared__WEBPACK_IMPORTED_MODULE_0__["toWeekOfYear"])(agg.year, agg.month, agg.day);
    return agg;
}


/***/ }),

/***/ "./src/Temporal/index.ts":
/*!*******************************!*\
  !*** ./src/Temporal/index.ts ***!
  \*******************************/
/*! exports provided: CivilYearMonth, CivilDate, CivilTime, CivilDateTime, OffsetDateTime, ZonedDateTime, Duration, Instant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CivilYearMonth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CivilYearMonth */ "./src/Temporal/CivilYearMonth.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CivilYearMonth", function() { return _CivilYearMonth__WEBPACK_IMPORTED_MODULE_0__["CivilYearMonth"]; });

/* harmony import */ var _CivilDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CivilDate */ "./src/Temporal/CivilDate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CivilDate", function() { return _CivilDate__WEBPACK_IMPORTED_MODULE_1__["CivilDate"]; });

/* harmony import */ var _CivilTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CivilTime */ "./src/Temporal/CivilTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CivilTime", function() { return _CivilTime__WEBPACK_IMPORTED_MODULE_2__["CivilTime"]; });

/* harmony import */ var _CivilDateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CivilDateTime */ "./src/Temporal/CivilDateTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CivilDateTime", function() { return _CivilDateTime__WEBPACK_IMPORTED_MODULE_3__["CivilDateTime"]; });

/* harmony import */ var _OffsetDateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OffsetDateTime */ "./src/Temporal/OffsetDateTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffsetDateTime", function() { return _OffsetDateTime__WEBPACK_IMPORTED_MODULE_4__["OffsetDateTime"]; });

/* harmony import */ var _ZonedDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ZonedDateTime */ "./src/Temporal/ZonedDateTime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZonedDateTime", function() { return _ZonedDateTime__WEBPACK_IMPORTED_MODULE_5__["ZonedDateTime"]; });

/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Duration */ "./src/Temporal/Duration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return _Duration__WEBPACK_IMPORTED_MODULE_6__["Duration"]; });

/* harmony import */ var _Instant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Instant */ "./src/Temporal/Instant.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Instant", function() { return _Instant__WEBPACK_IMPORTED_MODULE_7__["Instant"]; });











/***/ })

/******/ });
//# sourceMappingURL=home.579a853ec2190a78f8d7.js.map