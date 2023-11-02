import './main.css'

import './components/root/Header.ts'
import {Router} from "./Router.ts";
import {Root} from "./components/pages/Root.ts";

const router = new Router()

router.routes.set("/", new Root())

router.route(window.location.pathname)
