import './main.css'

import './components/root/Header.ts'
import {Route, Router} from "./Router.ts";
import {Root} from "./components/pages/Root.ts";

const router = new Router()

router.routes.set("/", new Route(new Root(), "Accueil"))

router.route(window.location.pathname)