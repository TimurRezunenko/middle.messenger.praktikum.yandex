'use strict';
import pageRouter from './utils/pageRouter';

import './index.css';

(function () {
    const root = document.getElementById('root');
    root.innerHTML = pageRouter();
})();
