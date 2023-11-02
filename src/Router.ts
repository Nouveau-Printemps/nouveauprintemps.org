import {LitElement} from "lit";

export class Router {
    routes = new Map<string,LitElement>()

    route(slug: string): boolean {
        if (!this.routes.has(slug)) {
            this.notFound()
            return false
        }
        let el= this.routes.get(slug)!
        document.body.appendChild(el)
        return true
    }

    private notFound() {
        if (!this.routes.has("404")) {
            throw new Error("no route for error 404")
        }
        let el= this.routes.get("404")!
        document.body.appendChild(el)
    }
}