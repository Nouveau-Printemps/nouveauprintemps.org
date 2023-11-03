import './components/root/Header.ts'
import {Route, Router} from "./Router.ts";
import {Root} from "./components/pages/Root.ts";

import './assets/reset.css'
import {NousRejoindre} from "./components/pages/NousRejoindre.ts";
import {NotFound} from "./components/pages/NotFound.ts";
import {NosRevendications} from "./components/pages/NosRevendications.ts";

const router = new Router()

router.routes.set("/", new Route(new Root(), "Accueil"))
router.routes.set("/nous-rejoindre", new Route(new NousRejoindre(), "Nous Rejoindre"))
router.routes.set("/nos-revendications", new Route(new NosRevendications(), "Nos Revendications"))
router.routes.set("404", new Route(new NotFound(), "404"))

router.route(window.location.pathname)
