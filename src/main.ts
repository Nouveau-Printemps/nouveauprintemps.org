import './components/root/Header.ts'
import {Route, Router} from "./Router.ts";
import {Root} from "./components/pages/Root.ts";

import './assets/reset.css'
import {NousRejoindre} from "./components/pages/NousRejoindre.ts";

const router = new Router()

router.routes.set("/", new Route(new Root(), "Accueil"))
router.routes.set("/nous-rejoindre", new Route(new NousRejoindre(), "Nous Rejoindre"))

router.route(window.location.pathname)
