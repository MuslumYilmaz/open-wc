import { LitElement } from 'lit';
import { ScopedElementsMixin } from '../lit-element.js';
import { ScopedElementsMixin as HTMLScopedElementsMixin } from '../html-element.js';

class Button extends HTMLElement {}

/**
 * Verify that ScopedElementsMixin return types are nameable when declaration: true
 * is set (i.e. dist-types/types.js is accessible as a package export).
 *
 * These classes are exported so their inferred types must be "named" in the
 * generated .d.ts, which exercises whether @open-wc/scoped-elements/dist-types/types.js
 * is resolvable.
 */

export class VanillaElement extends HTMLScopedElementsMixin(HTMLElement) {
  static scopedElements = {
    'my-button': Button,
  };
}

export class LitBase extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'my-button': Button,
  };
}
