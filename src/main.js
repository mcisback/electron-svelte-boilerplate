import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.svelte';

import {localStorageHelper} from "./Helpers/localStorageHelper.js";

window.localStorageHelper = localStorageHelper

const app = new App({
	target: document.getElementById('app'),
});

export default app;