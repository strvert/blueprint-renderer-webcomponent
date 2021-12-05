import {initializerDefineProperty as $f3Ts0$initializerDefineProperty, applyDecoratedDescriptor as $f3Ts0$applyDecoratedDescriptor} from "@swc/helpers";
import {html as $f3Ts0$html, LitElement as $f3Ts0$LitElement, css as $f3Ts0$css} from "lit";
import {customElement as $f3Ts0$customElement, property as $f3Ts0$property} from "lit/decorators";




var _class;
var _class1, _descriptor, _dec;
var _dec1 = $f3Ts0$customElement("blueprint-renderer");
let $a8e101027d325e52$export$2dd7962ad25d4af2 = _class1 = _dec1((_class1 = (_class = class BlueprintRendererElement extends $f3Ts0$LitElement {
    constructor(){
        super();
        $f3Ts0$initializerDefineProperty(this, "src", _descriptor, this);
    }
    firstUpdated() {
        this.updateGraph();
        BlueprintRendererElement.readGraphCode("./graph.bp");
    }
    static async readGraphCode(url) {
        const res = await fetch(url, {
            headers: {
                "Content-Type": "text/plain"
            }
        });
        const data = await res.text();
        console.log(data);
    }
    render() {
        return $f3Ts0$html` <div id="graph"></div> `;
    }
    updateGraph() {
    }
}, _class.styles = $f3Ts0$css``, _class), _dec = $f3Ts0$property({
    attribute: true,
    reflect: true
}), _descriptor = $f3Ts0$applyDecoratedDescriptor(_class1.prototype, "src", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), _class1)) || _class1;


export {$a8e101027d325e52$export$2dd7962ad25d4af2 as BlueprintRendererElement};
//# sourceMappingURL=module.js.map
