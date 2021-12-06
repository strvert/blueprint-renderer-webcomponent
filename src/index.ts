import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import { Graph } from "blueprint-renderer";

@customElement("blueprint-renderer")
export class BlueprintRendererElement extends LitElement {
  @property({ attribute: true, reflect: true })
  src = "";

  private graph: Graph | undefined;

  constructor() {
    super();
    this.graph = undefined;
  }

  async firstUpdated() {
    const data = await BlueprintRendererElement.readGraphCode(this.src).catch(
      (err) => console.error(err)
    );
    console.debug(data);
    const g = this.shadowRoot!.getElementById("graph") as HTMLDivElement;
    const wrapper = this.shadowRoot!.querySelector(
      ".wrapper"
    ) as HTMLDivElement;
    this.graph = new Graph(g, {
      size: {
        width: wrapper.clientWidth,
        height: wrapper.clientHeight,
      },
    });
    window.addEventListener("resize", () => {
      if (this.graph !== undefined) {
        this.graph.stage.width(wrapper.clientWidth);
        this.graph.stage.height(wrapper.clientHeight);
      }
    });
  }

  private static async readGraphCode(url: string) {
    const res = await fetch(url, {
      headers: { "Content-Type": "text/plain" },
    });
    try {
      if (!res.ok) {
        console.error("response.ok:", res.ok);
        console.error("response.status:", res.status);
        console.error("response.statusText:", res.statusText);
        throw new Error(res.statusText);
      }
    } catch (error) {
      console.error(error);
    }
    return await res.text();
  }

  static styles = css`
    .wrapper {
      inline-size: 100%;
      block-size: 100%;
    }
  `;

  render() {
    return html` <div class="wrapper"><div id="graph"></div></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blueprint-renderer": BlueprintRendererElement;
  }
}
