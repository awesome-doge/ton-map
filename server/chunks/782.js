"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 2782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ StateProvider),
  "K": () => (/* binding */ useStateValue)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/types.js
var types = __webpack_require__(2253);
;// CONCATENATED MODULE: ./src/context/reducer.js

const initialState = {
    visible: [],
    activeSection: null,
    progress: 0,
    showShadow: true,
    linkClicked: false,
    favourites: [],
    navbarWidth: 0
};
const addVisible = (array, value)=>{
    let arr = array;
    if (Array.isArray(arr) && arr.indexOf(value) <= -1) {
        arr = [
            ...arr,
            value
        ];
    }
    return arr ?? [];
};
const removeVisible = (array, value)=>{
    let arr = array;
    if (Array.isArray(arr) && arr.length) {
        arr = arr.filter((res)=>res !== value);
    }
    return arr ?? [];
};
const getFavourite = (favourites, url)=>{
    return favourites.find((res)=>res.url === url);
};
const addToFavourite = (favourites, value)=>{
    let newFav = favourites;
    if (newFav.length && getFavourite(favourites, value.url)) {
        newFav = newFav.filter((res)=>res.url !== value.url);
    } else if (newFav.length) {
        newFav = [
            ...newFav,
            value
        ];
    } else {
        newFav = [
            value
        ];
    }
    localStorage.setItem("favourites", JSON.stringify(newFav));
    return newFav;
};
function reducer(state, action) {
    switch(action.type){
        case types/* SET_VISIBLE */.HE:
            return {
                ...state,
                visible: addVisible(state.visible, action.payload)
            };
        case types/* SET_NOT_VISIBLE */.JF:
            return {
                ...state,
                visible: removeVisible(state.visible, action.payload)
            };
        case types/* SET_FAVOURITES */.YQ:
            return {
                ...state,
                favourites: action.payload
            };
        case types/* TOGGLE_FAVOURITES */.rF:
            return {
                ...state,
                favourites: addToFavourite(state.favourites, action.payload)
            };
        case types/* SET_PROGRESS */.ux:
            return {
                ...state,
                progress: action.payload
            };
        case types/* SET_ACTIVE_SECTION */.AP:
            return {
                ...state,
                activeSection: action.payload
            };
        case types/* SET_MORE_ENTITY_SHADOW */.jf:
            return {
                ...state,
                showShadow: action.payload
            };
        case types/* SET_LINK_CLICKED */.Qr:
            return {
                ...state,
                linkClicked: action.payload
            };
        case types/* UPDATE_NAVBAR_WIDTH */.KK:
            return {
                ...state,
                navbarWidth: action.payload
            };
        default:
            return state;
    }
}
/* harmony default export */ const context_reducer = (reducer);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/context/StateProvider.js




const StateContext = /*#__PURE__*/ (0,external_react_.createContext)();
const StateProvider = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(StateContext.Provider, {
        value: (0,external_react_.useReducer)(context_reducer, initialState),
        children: children
    });
StateProvider.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};
const useStateValue = ()=>(0,external_react_.useContext)(StateContext);


/***/ }),

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AP": () => (/* binding */ SET_ACTIVE_SECTION),
/* harmony export */   "HE": () => (/* binding */ SET_VISIBLE),
/* harmony export */   "JF": () => (/* binding */ SET_NOT_VISIBLE),
/* harmony export */   "KK": () => (/* binding */ UPDATE_NAVBAR_WIDTH),
/* harmony export */   "Qr": () => (/* binding */ SET_LINK_CLICKED),
/* harmony export */   "YQ": () => (/* binding */ SET_FAVOURITES),
/* harmony export */   "jf": () => (/* binding */ SET_MORE_ENTITY_SHADOW),
/* harmony export */   "rF": () => (/* binding */ TOGGLE_FAVOURITES),
/* harmony export */   "ux": () => (/* binding */ SET_PROGRESS)
/* harmony export */ });
const SET_VISIBLE = "SET_VISIBLE";
const SET_NOT_VISIBLE = "SET_NOT_VISIBLE";
const SET_PROGRESS = "SET_PROGRESS";
const SET_ACTIVE_SECTION = "SET_ACTIVE_SECTION";
const SET_MORE_ENTITY_SHADOW = "SET_MORE_ENTITY_SHADOW";
const SET_LINK_CLICKED = "SET_LINK_CLICKED";
const SET_FAVOURITES = "SET_FAVOURITES";
const TOGGLE_FAVOURITES = "TOGGLE_FAVOURITES";
const UPDATE_NAVBAR_WIDTH = "UPDATE_NAVBAR_WIDTH";


/***/ })

};
;