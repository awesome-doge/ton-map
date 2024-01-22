"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./next-seo.config.js
/* harmony default export */ const next_seo_config = ({
    title: "Blockchain ecosystem",
    description: "Everything you need to start building blockchain applications",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://smartcontract.com/",
        site_name: "Blockchain ecosystem",
        images: [
            {
                url: "/images/og-image.png",
                width: 800,
                height: 600,
                alt: "Blockchain ecosystem"
            }, 
        ]
    }
});

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-gtm-module"
const external_react_gtm_module_namespaceObject = require("react-gtm-module");
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_namespaceObject);
;// CONCATENATED MODULE: ./src/helpers/useGoogleTagManager.js


const useGoogleTagManager = (trackingCode)=>{
    (0,external_react_.useEffect)(()=>{
        if (trackingCode) {
            external_react_gtm_module_default().initialize({
                gtmId: trackingCode
            });
        }
    }, []);
};
/* harmony default export */ const helpers_useGoogleTagManager = (useGoogleTagManager);

// EXTERNAL MODULE: ./src/context/StateProvider.js + 1 modules
var StateProvider = __webpack_require__(2782);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.js








function MyApp({ Component , pageProps  }) {
    helpers_useGoogleTagManager(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StateProvider/* StateProvider */.X, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon-be.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32-be.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16-be.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#194185"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                ...next_seo_config
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    pageProps: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [782], () => (__webpack_exec__(5127)));
module.exports = __webpack_exports__;

})();