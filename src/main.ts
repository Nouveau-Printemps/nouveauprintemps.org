import './components/root/Header.ts'
import {Route, Router} from "./Router.ts";
import {Root} from "./components/pages/Root.ts";

import './assets/reset.css'
import {NousRejoindre} from "./components/pages/NousRejoindre.ts";
import {NotFound} from "./components/pages/NotFound.ts";
import {NosRevendications} from "./components/pages/NosRevendications.ts";
import {LitElement} from "lit";
import {Reseaux} from "./components/pages/Reseaux.ts";
import {MentionsLegales} from "./components/pages/MentionsLegales.ts";

const router = new Router()

function routeGenerator(element: LitElement, title: string): Route {
    const route: Route = {
        title: title,
        element: element
    }
    return route
}

router.routes.set("/", routeGenerator(new Root(), "Accueil"))
router.routes.set("/nous-rejoindre", routeGenerator(new NousRejoindre(), "Nous Rejoindre"))
router.routes.set("/nos-revendications", routeGenerator(new NosRevendications(), "Nos Revendications"))
router.routes.set("/reseaux", routeGenerator(new Reseaux(), "Nos Réseaux"))
router.routes.set("/mentions-legales", routeGenerator(new MentionsLegales(), "Mentions Légales"))
router.routes.set("404", routeGenerator(new NotFound(), "404"))

router.route(window.location.pathname)
