"use strict";
import { login } from './pages/login/login';

import './index.css';

(function() {
    const root = document.getElementById("root");
    const template = login();
    root.innerHTML = template;
})();
