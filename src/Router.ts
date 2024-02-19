import { Component } from "./components/Component.ts";

export class Router {
  routes = new Map<string, Route>();

  route(slug: string): boolean {
    if (!this.routes.has(slug)) {
      this.notFound();
      return false;
    }
    let r = this.routes.get(slug)!;
    document.body.appendChild(r.element);
    this.setTitle(r.title);
    return true;
  }

  private notFound() {
    if (!this.routes.has("404")) {
      this.setTitle("Error");
      throw new Error("no route for error 404");
    }
    let r = this.routes.get("404")!;
    document.body.appendChild(r.element);
    this.setTitle(r.title);
  }

  private setTitle(t: string) {
    document.title = t + " - Nouveau Printemps";
  }
}

export type Route = {
  element: Component;
  title: string;
};

// export class Route {
//     element: LitElement
//     title: string
//     constructor(el: LitElement, t: string) {
//         this.element = el
//         this.title = t
//     }
// }
