[![wq.app](https://raw.github.com/wq/wq/master/images/256/wq.app.png)](https://wq.io/wq.app)

[wq.app](https://wq.io/wq.app) is a suite of Javascript modules and related assets, created to facilitate the rapid deployment of offline-cabable HTML5 mobile and desktop data collection apps for **crowdsourcing**, **citizen science**, and **volunteered geographic information**, as well as professional **field data collection**.  wq.app is the client component of the [wq framework], and can be used with any REST service as a backend.  In particular, when combined with a Mustache-capable REST service like [wq.db], wq.app can be used to create **responsive, progressively enhanced** websites / apps, that can selectively render individual application screens [on the server or on the client] depending on project needs, network connectivity, and offline storage availability.



[![Latest PyPI Release](https://img.shields.io/pypi/v/wq.app.svg)](https://pypi.python.org/pypi/wq.app)
[![Release Notes](https://img.shields.io/github/release/wq/wq.app.svg)](https://github.com/wq/wq.app/releases)
[![Documentation](https://img.shields.io/badge/Docs-0.8-blue.svg)](https://wq.io/wq.app)
[![License](https://img.shields.io/pypi/l/wq.app.svg)](https://wq.io/license)
[![GitHub Stars](https://img.shields.io/github/stars/wq/wq.app.svg)](https://github.com/wq/wq.app/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/wq/wq.app.svg)](https://github.com/wq/wq.app/network)
[![GitHub Issues](https://img.shields.io/github/issues/wq/wq.app.svg)](https://github.com/wq/wq.app/issues)

## Getting Started

```bash
pip3 install wq.app
# Or, if using together with wq.db
pip3 install wq
```

See [the documentation] for more information.

## Features

wq.app's [JavaScript modules] are built on [a number of libraries] including [RequireJS], [jQuery Mobile], [Leaflet], [d3], and [Mustache.js].  wq.app extends these libraries with:

 * [wq/app.js], a high-level application controller that combines **wq/store.js** and **wq/pages.js** into a full configuration-driven CRUD client (optimized for use with [wq.db.rest])
 * [wq/chart.js], configurable d3-based reusable charts, including time series and boxplots
 * [wq/locate.js], utilities for requesting and displaying the user's location
 * [wq/map.js], Leaflet integration for **wq/app.js** pages that contain geometry (loaded via GeoJSON)
 * [wq/router.js], a PJAX-style pushState URL router
 * [wq/template.js], A Mustache template renderer and page injector
 * [wq/pandas.js], a utility for loading and parsing CSV generated by Django REST Pandas.
 * [wq/store.js], a robust `localForage`-based JSON REST client
 * [wq/model.js], a lightweight implementation of models / collections
 * [wq/outbox.js], an offline queue of `<form>` submissions for later synchronization
 * and a number of [other useful utilities]

To facilitate compact deployment, wq.app provides a Python-based [build process] for compiling wq apps: inlining templates, optimizing code (via [r.js]), and generating an application cache manifest.  wq.app also includes [jquery-mobile.scss], a SASS/SCSS stylesheet for generating custom jQuery Mobile themes.

 [wq framework]: https://wq.io
 [recommended project layout]: https://github.com/wq/django-wq-template
 [a number of libraries]: https://wq.io/docs/third-party

 [the documentation]: https://wq.io/docs/setup
 [JavaScript modules]: https://wq.io/docs/app
 [RequireJS]: http://requirejs.org
 [r.js]: https://github.com/jrburke/r.js
 [jQuery Mobile]: http://jquerymobile.com
 [Leaflet]: http://leafletjs.com
 [d3]: http://d3js.org
 [Mustache.js]: https://mustache.github.com/
 
 [wq/app.js]: https://wq.io/docs/app-js
 [wq/chart.js]: https://wq.io/docs/chart-js
 [wq/router.js]: https://wq.io/docs/router-js
 [wq/template.js]: https://wq.io/docs/template-js
 [wq/pandas.js]: https://wq.io/docs/pandas-js
 [wq/locate.js]: https://wq.io/docs/locate-js
 [wq/map.js]: https://wq.io/docs/map-js
 [wq/store.js]: https://wq.io/docs/store-js
 [wq/model.js]: https://wq.io/docs/model-js
 [wq/outbox.js]: https://wq.io/docs/outbox-js
 [wq/router.js]: https://wq.io/docs/router-js
 [other useful utilities]: https://wq.io/docs/other-modules
 
 
 [jquery-mobile.scss]: https://wq.io/docs/jquery-mobile-scss-themes
 [build process]: https://wq.io/docs/build
 
 [wq.db]: https://wq.io/wq.db
 [wq.db.rest]: https://wq.io/docs/about-rest
 [on the server or on the client]: https://wq.io/docs/templates
