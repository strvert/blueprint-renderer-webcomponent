var $1ZQrD$swchelpers = require("@swc/helpers");
var $1ZQrD$lit = require("lit");
var $1ZQrD$litdecorators = require("lit/decorators");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "BlueprintRendererElement", () => $5e2f01247a5d6f10$export$2dd7962ad25d4af2);



var _class;
var _class1, _descriptor, _dec;
var _dec1 = $1ZQrD$litdecorators.customElement("blueprint-renderer");
let $5e2f01247a5d6f10$export$2dd7962ad25d4af2 = _class1 = _dec1((_class1 = (_class = class BlueprintRendererElement extends $1ZQrD$lit.LitElement {
    constructor(){
        super();
        $1ZQrD$swchelpers.initializerDefineProperty(this, "src", _descriptor, this);
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
        return $1ZQrD$lit.html` <div id="graph"></div> `;
    }
    updateGraph() {
    }
}, _class.styles = $1ZQrD$lit.css``, _class), _dec = $1ZQrD$litdecorators.property({
    attribute: true,
    reflect: true
}), _descriptor = $1ZQrD$swchelpers.applyDecoratedDescriptor(_class1.prototype, "src", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), _class1)) || _class1;


//# sourceMappingURL=index.js.map
