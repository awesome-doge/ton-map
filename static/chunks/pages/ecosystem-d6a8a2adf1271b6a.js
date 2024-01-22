(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{2758:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ecosystem",function(){return t(7498)}])},7498:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ze}});var r=t(9815),o=t(5893),i=t(7294),a=t(4924),s=t(5697),c=t.n(s),l=t(1507),_=t.n(l),u=t(6010);var d=function(e,n){return e.length<=n?e:e.slice(0,n-3)+"..."};function h(e){var n,t=e.title,r=e.size,i=void 0===r?"large":r,s=e.imageSrc,c=e.url,l=e.favourite,h=e.addFavourite,g=e.showTip;return(0,o.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:(0,u.Z)(_().container,_()["container__".concat(i)],(n={},(0,a.Z)(n,_().animate_favourite,l),(0,a.Z)(n,_().animate_not_favourite,!l),n)),onClick:function(e){return e.stopPropagation()},onMouseOver:function(){return g(c)},onMouseLeave:function(){return g(null)},children:[(0,o.jsx)("img",{src:s,alt:""}),d(t,28),(0,o.jsx)("button",{"aria-label":"favourite",className:(0,u.Z)(_().favourite,(0,a.Z)({},_().active,l)),onClick:function(e){e.preventDefault(),e.stopPropagation(),h(c)},children:(0,o.jsx)("img",{src:"/images/".concat(l?"star.svg":"star-outline.svg"),alt:l?"Favourite icon":"non favourite icon"})})]})}h.propTypes={title:c().string.isRequired,imageSrc:c().string.isRequired,size:c().oneOf(["small","large"]),url:c().string.isRequired,favourite:c().bool,addFavourite:c().func,showTip:c().func},h.defaultProps={favourite:!1};var g=h,f=[{name:"Arbitrum",id:"arbitrum",logo:"/logos/arbiscan.png",url:"https://offchainlabs.com/",description:null},{name:"Avalanche",id:"avalanche",logo:"/logos/avalanche.png",url:"https://www.avax.network/",description:null},{name:"BSC",id:"Bsc",logo:"/logos/bsc.png",url:"https://www.bnbchain.world/en/smartChain",description:null},{name:"Ethereum",id:"ethereum",logo:"/logos/ethereum.png",url:"https://ethereum.org/",description:null},{name:"FantomBSC",id:"fantomBSC",logo:"/logos/fantombsc.png",url:"https://fantom.foundation/",description:null},{name:"Gnosis Chain",id:"gnosis",logo:"/logos/gnosis.png",url:"https://www.gnosis.io/",description:null},{name:"HECO",id:"heco",logo:"/logos/hecoInfo.png",url:"https://www.hecochain.com/en-us/",description:null},{name:"Optimism",id:"optimism",logo:"/logos/optimisticethereum.png",url:"https://www.optimism.io/",description:null},{name:"Polygon",id:"polygon",logo:"/logos/polygonscan.png",url:"https://polygon.technology/",description:null},{name:"Solana",id:"solana",logo:"/logos/solana.png",url:"https://solana.com/",description:null}],p=t(9215),v=t.n(p),m=t(828),x=t(2782),w=t(2253);function j(){var e=(0,m.Z)((0,x.K)(),2),n=e[0].favourites,t=e[1],o=function(e){return n.find((function(n){return(null===n||void 0===n?void 0:n.url)===e}))};return(0,i.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("favourites"));t({type:w.YQ,payload:null!==e&&void 0!==e?e:[]})}()}),[]),{getFavourite:o,addToFavourite:function(e){t({type:w.rF,payload:e})},sortItem:function(e){var n=[],t=[];return e.forEach((function(e){o(e.url)?(n.push(e),n.sort((function(e,n){return e.title?e.title>n.title?1:-1:e.name>n.name?1:-1}))):t.push(e)})),(0,r.Z)(n).concat((0,r.Z)(t))}}}function b(){var e=j(),n=e.getFavourite,t=e.addToFavourite,r=e.sortItem;return(0,o.jsxs)("section",{className:v().container,id:"blockchains-section",children:[(0,o.jsx)("h2",{children:"Blockchains"}),(0,o.jsx)("div",{className:v().contents,children:r(f).map((function(e,r){return(0,o.jsx)(g,{addFavourite:function(){return t(e)},favourite:!!n(e.url),title:e.name,imageSrc:e.logo,url:e.url,showTip:function(){}},r)}))})]})}var y=t(9798),S=t.n(y);function E(e){var n=e.children;return(0,o.jsxs)("section",{className:S().container,children:[(0,o.jsx)("div",{className:S().timeline,"aria-hidden":"true"}),n]})}E.propTypes={children:c().node};var N,k=E,I=t(4165),Z=t.n(I);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C.apply(this,arguments)}var R=function(e){return i.createElement("svg",C({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),N||(N=i.createElement("path",{d:"m8 19 7-7-7-7v14Z",fill:"currentColor"})))},O=t(1584),B=t.n(O);function T(e){var n=e.isActive,t=e.children,r=(0,u.Z)(B().timeline__icon,(0,a.Z)({},B().active,n));return(0,o.jsx)("div",{className:r,children:t})}T.propTypes={isActive:c().bool.isRequired,children:c().node.isRequired};var F=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2?arguments[2]:void 0,r=(0,i.useState)(!1),o=r[0],a=r[1];return(0,i.useEffect)((function(){var r=e.current,o=n?"0px":t,i=null===n||void 0===n?void 0:n.current,s=new IntersectionObserver((function(e){var n=(0,m.Z)(e,1)[0];a(n.isIntersecting)}),{root:i,rootMargin:o});return r&&s.observe(r),function(){s.unobserve(r)}}),[]),o};var L=t(1163);function q(e){var n=e.title,t=e.id,r=e.children,s=e.Icon,c=e.expandToggle,l=e.expandedIds,_=e.bodyHeight,d=(0,i.useState)(!1),h=d[0],g=d[1],f=(0,i.useRef)(),p=(0,m.Z)((0,x.K)(),1)[0],v=p.visible,j=p.navbarWidth;!function(e,n){var t=(0,m.Z)((0,x.K)(),2),r=t[0].visible,o=t[1],a=F(e,null,n>=200?"-100px":"-20px");(0,i.useEffect)((function(){var n=e.current.id;return o(a?{type:w.HE,payload:n}:{type:w.JF,payload:n}),function(){return o({type:w.JF,payload:n})}}),[r.length,a])}(f,_);var b=(0,L.useRouter)(),y=r.map((function(e){return e.props.id})),S=function(){h?(c(y,"clear"),g(!1)):(c(y,"add"),g(!0))};return(0,i.useEffect)((function(){var e=y.find((function(e){if(l.includes(e))return!0}));if(g(!!e),b.asPath){var n=b.asPath.split("#")[1];if(n===t&&n)document.getElementById(n).scrollIntoView({behavior:"smooth"})}}),[l,_,j]),(0,o.jsxs)("div",{className:Z().container,role:"region",onClick:S,id:"".concat(t,"-section"),children:[(0,o.jsx)("h2",{id:t,ref:f,className:Z().title,children:(0,o.jsxs)("button",{type:"button","aria-expanded":h,"aria-pressed":h,className:(0,u.Z)((0,a.Z)({},Z().active,v[0]===t)),"aria-controls":"".concat(t,"-section-content"),"aria-label":n,onClick:S,children:[(0,o.jsx)(R,{style:{transform:h?"rotate(90deg)":"rotate(0deg)"}}),n]})}),(0,o.jsx)("div",{className:Z().body,id:"".concat(t,"-section-content"),role:"region",children:r}),(0,o.jsx)("div",{className:Z().timelineIcon,children:(0,o.jsx)(T,{isActive:v[0]===t,children:(0,o.jsx)(s,{})})})]})}q.propTypes={title:c().string.isRequired,id:c().string.isRequired,children:c().node.isRequired,Icon:c().elementType.isRequired,expandToggle:c().func.isRequired,expandedIds:c().array,bodyHeight:c().number};var P,A=q,H=t(5197),J=t.n(H);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)}var M=function(e){return i.createElement("svg",D({width:10,height:5,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),P||(P=i.createElement("path",{d:"m0 0 5 5 5-5H0Z",fill:"currentColor"})))};function X(e){var n=e.title,t=e.id,r=e.children,i=e.expanded,s=e.expandToggle;return(0,o.jsxs)("section",{children:[(0,o.jsx)("h3",{id:t,className:J().accordion__header,children:(0,o.jsxs)("a",{href:"#".concat(t),className:(0,u.Z)("text__short--lg",J().trigger),"aria-expanded":i,"aria-controls":"".concat(t,"-sect"),id:"".concat(t,"-accordionid"),onClick:function(e){e.preventDefault(),e.stopPropagation(),s(t)},children:[(0,o.jsx)("span",{className:J().icon,"aria-hidden":"true",children:(0,o.jsx)(M,{})}),n]})}),(0,o.jsx)("div",{role:"region",id:"".concat(t,"-sect"),"aria-labelledby":"".concat(t,"-accordionid"),className:(0,u.Z)(J().panel,(0,a.Z)({},J().active,i)),hidden:!i,children:r})]})}X.propTypes={title:c().string.isRequired,id:c().string.isRequired,expanded:c().bool.isRequired,children:c().node.isRequired,expandToggle:c().func.isRequired};var V,z=t(1962),K=t.n(z),Q=t(824),Y=t(8239),W=t(3176),U=t.n(W);function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)}var $,ee=function(e){return i.createElement("svg",G({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),V||(V=i.createElement("path",{d:"m6.5 10.09 1.41 1.41-4.5 4.5H7v2H0v-7h2v3.59l4.5-4.5ZM7.91 6.5 6.5 7.91 2 3.41V7H0V0h7v2H3.41l4.5 4.5Zm3.59 3.59 4.5 4.5V11h2v7h-7v-2h3.59l-4.5-4.5 1.41-1.41ZM10.09 6.5l4.5-4.5H11V0h7v7h-2V3.41l-4.5 4.5-1.41-1.41Z",fill:"currentColor"})))};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ne.apply(this,arguments)}var te=function(e){return i.createElement("svg",ne({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),$||($=i.createElement("path",{d:"m16.5.09 1.41 1.41-4.5 4.5H17v2h-7V1h2v3.59l4.5-4.5Zm1.41 16.41-1.41 1.41-4.5-4.5V17h-2v-7h7v2h-3.59l4.5 4.5ZM1.5.09 6 4.59V1h2v7H1V6h3.59L.09 1.5 1.5.09ZM.09 16.5l4.5-4.5H1v-2h7v7H6v-3.59l-4.5 4.5L.09 16.5Z",fill:"currentColor"})))};function re(e){var n=e.expanded,t=e.toggleExpanded;return(0,o.jsx)("button",{className:U().btn,onClick:t,children:n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(te,{}),(0,o.jsx)("span",{children:"Collapse all"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ee,{}),(0,o.jsx)("span",{children:"Expand all"})]})})}re.propTypes={expanded:c().bool.isRequired,toggleExpanded:c().func};var oe=t(1651),ie=t.n(oe);function ae(e){var n=e.href,t=e.children,r=e.isSelected,i=(0,u.Z)("text__short--md",ie().navItem,(0,a.Z)({},ie().selected,r)),s=n.replace("#","");return(0,o.jsx)("a",{href:"#".concat(s),className:i,children:t})}ae.propTypes={href:c().string.isRequired,children:c().node.isRequired,isSelected:c().bool.isRequired},ae.defaultProps={isSelected:!1};var se=t(3595),ce=t.n(se);function le(e){var n=e.progress;return(0,o.jsx)("div",{className:ce().progress,style:{width:n+"%"}})}le.propTypes={progress:c().number.isRequired};var _e,ue=t(4257),de=t.n(ue);function he(e){var n=e.id,t=e.navItems,r=e.children,a=(0,i.useRef)(),s=F(a,t,null),c=(0,m.Z)((0,x.K)(),2),l=c[0],_=l.visible,u=l.activeSection,d=l.linkClicked,h=l.navbarWidth,g=c[1],f=function(){var e=(0,i.useState)(0),n=e[0],t=e[1],r=(0,i.useState)(!1),o=r[0],a=r[1],s=(0,i.useState)(!1),c=s[0],l=s[1],_=(0,i.useCallback)((function(e){var r=e.currentTarget;n>r.scrollY?(a(!0),l(!1)):n<r.scrollY&&(l(!0),a(!1)),t(r.scrollY)}),[n]);return(0,i.useEffect)((function(){return t(window.scrollY),window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",_)}}),[_]),{scrolledDown:c,scrolledUp:o}}().scrolledUp,p=function(e){g({type:w.Qr,payload:e})};return(0,i.useEffect)((function(){var e=function(e,r){var o=a.current;if(e===n&&h&&t){var i=Math.floor(100*o.offsetLeft/h)+4.5;if(r&&(i+=r),g({type:w.ux,payload:i}),g({type:w.AP,payload:e}),!s&&!d){t.current.scrollTo({top:0,left:"learn"===e?-10:o.offsetLeft+-10,behavior:"smooth"})}setTimeout((function(){p(!1)}),500),window.history.replaceState({},null,"ecosystem#".concat(e))}"learn"===u&&!e&&f&&(g({type:w.ux,payload:0}),g({type:w.AP,payload:null}))};!function(){switch(!0){case window.screen.width>1276:e(_[0],null);break;case window.screen.width>=1024:e(_[0],-2);break;case window.screen.width>=600&&window.screen.width<1024:e(_[0],-1);break;case window.screen.width>375&&window.screen.width<=393:e(_[0],2);break;case window.screen.width<360&&window.screen.width<=375:e(_[0],3);break;default:e(_[0],1)}}()}),[_,h,d]),(0,i.useEffect)((function(){"market-li"===a.current.id&&g(s?{type:w.jf,payload:!1}:{type:w.jf,payload:!0})}),[s]),(0,o.jsx)("li",{id:"".concat(n,"-li"),onClick:function(){return p(!0)},ref:a,children:r})}function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ge.apply(this,arguments)}he.propTypes={id:c().string.isRequired,children:c().node.isRequired,navItems:c().object};var fe,pe=function(e){return i.createElement("svg",ge({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"},e),_e||(_e=i.createElement("path",{fill:"#fff",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},ve=t(7501),me=t.n(ve);function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xe.apply(this,arguments)}var we,je=function(e){return i.createElement("svg",xe({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),fe||(fe=i.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z",fill:"currentColor"})))};function be(){return be=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},be.apply(this,arguments)}var ye=function(e){return i.createElement("svg",be({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),we||(we=i.createElement("path",{d:"m25.333 8.547-1.88-1.88L16 14.12 8.546 6.667l-1.88 1.88L14.12 16l-7.453 7.454 1.88 1.88L16 17.88l7.453 7.454 1.88-1.88L17.88 16l7.453-7.453Z",fill:"#101B2A"})))},Se=t(6042),Ee=t(9396),Ne=t(4221),ke=function(){var e=Object.values(Q.Z),n=e.flat().map((function(e){return e.data})),t=e.flat().map((function(e){return{title:e.title,id:e.id,Icon:e.Icon}}));return{resources:n.flat(),chapters:t.flat()}}(),Ie=ke.resources,Ze=ke.chapters,Ce={threshold:0,includeMatches:!0,findAllMatches:!0,minMatchCharLength:1},Re=(0,Ee.Z)((0,Se.Z)({},Ce),{keys:["name","items.title"]}),Oe=(0,Ee.Z)((0,Se.Z)({},Ce),{keys:["name"]}),Be=(0,Ee.Z)((0,Se.Z)({},Ce),{keys:["title"]});var Te=function(e,n){var t=[];return e.forEach((function(e){var o=e.item,i=e.matches,a=o.id,s=o.name,c=o.title,l=o.Icon,_=o.url,u=o.logo,d=o.items;i.forEach((function(e){var o=e.refIndex,i=e.value,h=null;null!==o&&void 0!==o?((h=d[o]).heading=n,h.url||(h.heading="sections")):i!==s&&i!==c||(h={title:null!==s&&void 0!==s?s:c,id:a,url:_,logo:u,Icon:l,heading:n}).url||(h.heading="sections");if(h)if(t.length){var g=function(e,n){return e.find((function(e){return e.title===n.title||e.url===n.url}))}(t,h);g||(t=(0,r.Z)(t).concat([h]))}else t=[h]}))})),t},Fe=t(9465),Le=t.n(Fe),qe=t(7451),Pe=t.n(qe),Ae=t(9521);function He(e){var n=e.href,t=e.logo,r=e.title,a=e.Icon,s=e.clear,c=e.focus,l=e.setFocus,_=(0,i.useRef)(null),u=function(){return n.includes("http")},d=t||a;(0,i.useEffect)((function(){c&&_.current.focus()}),[c]);var h=(0,i.useCallback)((function(){l()}),[n,l]);return(0,o.jsx)("a",{ref:_,href:u()?n:"#".concat(n),target:u()?"_blank":null,rel:"noopener noreferrer",className:Pe().item,onKeyPress:h,onClick:function(){h(),u()||s()},children:(0,o.jsxs)("span",{className:Pe().left,children:[(0,o.jsx)("span",{className:Pe().logo,children:d&&(0,o.jsx)(o.Fragment,{children:t?(0,o.jsx)("img",{src:t,alt:r}):(0,o.jsx)(a,{})})}),(0,o.jsx)("span",{className:Pe().text,children:r}),u()&&(0,o.jsx)("span",{className:Pe().link_icon,children:(0,o.jsx)(Ae.Z,{})})]})})}He.propTypes={href:c().string.isRequired,logo:c().string,Icon:c().func,title:c().string,focus:c().bool,setFocus:c().func,clear:c().func};function Je(e){var n,t,r=e.hasBlockchains,a=e.hasResources,s=e.hasSections,c=e.clear,l=e.data,_=(0,i.useRef)(null),u=(0,m.Z)(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,t=(0,i.useState)(n),r=t[0],o=t[1],a=(0,i.useCallback)((function(n){var t=38===n.keyCode,r=40===n.keyCode;e&&(r?(n.preventDefault(),o((function(n){return n===e-1?0:n+1}))):t&&(n.preventDefault(),o((function(n){return 0===n?e-1:n-1}))))}),[r,o]);return(0,i.useEffect)((function(){return document.addEventListener("keydown",a,!1),function(){document.removeEventListener("keydown",a,!1)}}),[a]),[r,o]}(l.length),2),d=u[0],h=u[1],g=(0,i.useCallback)((function(e,n){var t=l.findIndex((function(t){return t[e]===n}));h(t)}),[d,l]);return n=_,t=c,(0,i.useEffect)((function(){var e=function(e){var r="input"===e.target.nodeName.toLowerCase(),o="svg"===e.target.nodeName.toLowerCase();!n.current||n.current.contains(e.target)||r||o||t()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n,t]),(0,o.jsx)("div",{ref:_,className:Le().results,children:(0,o.jsx)("div",{className:Le().content,children:(0,o.jsxs)("div",{className:Le().section,children:[r&&(0,o.jsxs)("div",{className:Le().section_content,children:[(0,o.jsx)("h4",{children:"Blockchain"}),l.map((function(e){var n=e.title,t=e.Icon,r=e.logo,a=e.url,s=e.heading;return(0,o.jsx)(i.Fragment,{children:"blockchains"===s&&(0,o.jsx)(He,{focus:l[d]&&l[d].url===a,setFocus:function(){return g("url",a)},clear:c,href:a,Icon:t,logo:r,title:n},a)},a)}))]}),a&&(0,o.jsxs)("div",{className:Le().section_content,children:[(0,o.jsx)("h4",{children:"Resources"}),l.map((function(e){var n=e.title,t=e.Icon,r=e.logo,a=e.url,s=e.heading;return(0,o.jsx)(i.Fragment,{children:"resources"===s&&(0,o.jsx)(He,{focus:l[d]&&l[d].url===a,setFocus:function(){return g("url",a)},clear:c,href:a,Icon:t,logo:r,title:n},a)},a)}))]}),s&&(0,o.jsxs)("div",{className:Le().section_content,children:[(0,o.jsx)("h4",{children:"Sections"}),l.map((function(e){var n=e.title,t=e.Icon,r=e.logo,a=e.id,s=e.heading;return(0,o.jsx)(i.Fragment,{children:"sections"===s&&(0,o.jsx)(He,{focus:l[d]&&l[d].id===a,setFocus:function(){return g("id",a)},clear:c,href:a,Icon:t,logo:r,title:n},a)},a)}))]})]})})})}Je.propTypes={hasBlockchains:c().bool,hasResources:c().bool,hasSections:c().bool,data:c().array,clear:c().func};function De(){var e,n,t=(0,i.useRef)(),s=(0,i.useState)(!1),c=s[0],l=s[1],_=(0,i.useState)(!1),d=_[0],h=_[1],g=(0,i.useState)(""),p=g[0],v=g[1],m=(0,i.useState)([]),x=m[0],w=m[1],j=(0,i.useState)(!1),b=j[0],y=j[1],S=(0,i.useState)(!1),E=S[0],N=S[1],k=(0,i.useState)(!1),I=k[0],Z=k[1],C=function(e){e.style&&(e.style.scrollPaddingTop="unset")},R=function(e){e.style&&(e.style.scrollPaddingTop="12rem")},O=function(){v("")};return e=t,n=O,(0,i.useEffect)((function(){var e=function(e){var t=9===e.keyCode,r=e.target.className&&e.target.className.includes("Search");t&&!r&&n()};return document.addEventListener("keyup",e),function(){document.addEventListener("keyup",e)}}),[e,n]),(0,i.useEffect)((function(){return window.addEventListener("keydown",(function(e){var n=70===e.keyCode,r=e.ctrlKey,o=114===e.keyCode,i=27===e.keyCode,a=9===e.keyCode;(o||r&&n)&&(e.preventDefault(),t.current.focus()),i&&(e.preventDefault(),t.current.blur(),O()),a&&e.path[6]&&(C(e.path[6]),setTimeout((function(){R(e.path[6])}),1e3))})),function(){window.removeEventListener("keydown",(function(){}))}}),[]),(0,o.jsx)("div",{className:me().search,children:(0,o.jsxs)("div",{className:(0,u.Z)(me().search_container,(0,a.Z)({},me().focused,c)),children:[(0,o.jsx)("input",{ref:t,type:"text",autoFocus:!0,"aria-label":"Enter a search term",placeholder:"Search specific resources\u2026",onChange:function(e){var n;C(null===(n=e.nativeEvent)||void 0===n?void 0:n.path[6]);var t=e.target.value;if(v(t),t.length>0){var o=function(e){var n=new Ne.Z(Ie,Re),t=new Ne.Z(f,Oe),r=new Ne.Z(Ze,Be).search(e).map((function(e){return e}));return{resource:n.search(e).map((function(e){return e})),blockchain:t.search(e).map((function(e){return e})),chapter:r}}(t),i=o.resource,a=o.blockchain,s=o.chapter,c=Te(i,"resources"),l=Te(a,"blockchains"),_=Te(s,"sections"),u=c.length>0||l.length>0||_.length>0,d=c.filter((function(e){return e.id})),g=c.filter((function(e){return e.url}));y(g.length>0),Z(_.length>0||d.length>0),N(l.length>0),w((0,r.Z)(l).concat((0,r.Z)(g),(0,r.Z)(_),(0,r.Z)(d))),h(u),setTimeout((function(){var n;R(null===(n=e.nativeEvent)||void 0===n?void 0:n.path[6])}))}},onFocus:function(){return l(!0)},value:p}),p.length>0?(0,o.jsx)("button",{onClick:O,className:me().close,children:(0,o.jsx)(ye,{})}):(0,o.jsx)("span",{className:me().search_icon,children:(0,o.jsx)(je,{})}),d&&p.length>0&&(0,o.jsx)(Je,{clear:O,hasBlockchains:E,hasResources:b,hasSections:I,data:x})]})})}var Me=t(425),Xe=t(4155);var Ve=function(){var e,n=(0,i.useRef)(),t=(0,i.useState)(!1),r=t[0],s=t[1],c=(0,m.Z)((0,x.K)(),2),l=c[0],_=l.activeSection,d=l.progress,h=l.showShadow,g=c[1],f=Q.Z.get_started,p=Q.Z.development_cycle,v=Q.Z.share,j=Xe.env.NEXT_GITHUB_REPO_URL||"#";return(0,i.useEffect)((function(){var e=function(){window.scrollY>200?s(!0):window.scrollY<50&&s(!1)},t=function(){var e,t=null===(e=n.current)||void 0===e?void 0:e.offsetWidth;g({type:w.KK,payload:t}),window.screen.width<600&&g({type:w.ux,payload:100})};return window.addEventListener("scroll",e),window.addEventListener("resize",t,!0),t(),function(){window.removeEventListener("scroll",e),window.removeEventListener("resize",t,!0)}}),[d]),(0,o.jsxs)("header",{className:(0,u.Z)(de().container,(e={},(0,a.Z)(e,de().scrolled,r),(0,a.Z)(e,de().shadow_right,h),e)),children:[(0,o.jsxs)("nav",{id:"nav",className:de().navbar,children:[(0,o.jsx)(Me.Z,{isHome:!1,showBorder:d>0}),(0,o.jsxs)("div",{className:de().progress_items_container,children:[(0,o.jsxs)("div",{ref:n,className:de().navbar__items,children:[(0,o.jsxs)("div",{className:de().navbar__group,children:[(0,o.jsx)("p",{children:"Get Started"}),(0,o.jsx)("ul",{children:f.map((function(e,t){var r=e.title,i=e.id,a=e.Icon;return(0,o.jsx)(he,{id:i,navItems:n,children:(0,o.jsxs)(ae,{href:"#".concat(i),isSelected:_===i,children:[(0,o.jsx)(a,{}),(0,o.jsx)("span",{children:r})]})},t)}))})]}),(0,o.jsxs)("div",{className:de().navbar__group,children:[(0,o.jsx)("p",{children:"Development Cycle"}),(0,o.jsx)("ul",{children:p.map((function(e,t){var r=e.title,i=e.id,a=e.Icon;return(0,o.jsx)(he,{id:i,navItems:n,children:(0,o.jsxs)(ae,{href:"#".concat(i),isSelected:_===i,children:[(0,o.jsx)(a,{}),(0,o.jsx)("span",{children:r})]})},t)}))})]}),(0,o.jsxs)("div",{className:de().navbar__group,children:[(0,o.jsx)("p",{children:"Share"}),(0,o.jsx)("ul",{children:v.map((function(e,t){var r=e.title,i=e.id,a=e.Icon;return(0,o.jsx)(he,{id:i,navItems:n,children:(0,o.jsxs)(ae,{href:"#".concat(i),isSelected:_===i,children:[(0,o.jsx)(a,{}),(0,o.jsx)("span",{children:r})]})},t)}))})]})]}),(0,o.jsx)(le,{progress:d})]})]}),(0,o.jsx)(De,{}),(0,o.jsx)("a",{href:j,target:"_blank",rel:"noopener noreferrer",title:"Blockchain ecosystem Repository",className:de().github_logo,id:"github",children:(0,o.jsx)(pe,{})})]})};function ze(){var e=(0,i.useState)([]),n=e[0],t=e[1],a=(0,i.useState)([]),s=a[0],c=a[1],l=(0,i.useState)(null),_=l[0],u=l[1],d=(0,i.useState)(0),h=d[0],f=d[1],p=Object.keys(Q.Z),v=j(),m=v.getFavourite,x=v.addToFavourite,w=v.sortItem,y=function(e){localStorage.setItem("opened",JSON.stringify(e)),t(e)},S=function(e){var t=n;t=t.includes(e)?t.filter((function(n){return n!==e})):t.length?(0,r.Z)(t).concat([e]):[e],y(t)},E=function(e,t){var o=n;o="add"===t?(0,r.Z)(o).concat((0,r.Z)(e)):o.filter((function(n){return!e.includes(n)})),y(o)},N=function(){var e=Object.values(Q.Z).flat().map((function(e){return e.data})).flat().map((function(e){return e.id}));return c(e),e},I=function(){return s.length===n.length};return(0,i.useEffect)((function(){var e=N(),n=function(){var e="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight;f(e)},t=JSON.parse(localStorage.getItem("opened"));return t=t&&t.length?t:(0,r.Z)(e),y(t),N(),n(),window.addEventListener("resize",n,!1),function(){window.removeEventListener("resize",n,!0)}}),[]),(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(Ve,{}),(0,o.jsx)("main",{children:(0,o.jsxs)("div",{className:K().container,children:[p.map((function(e,t){return(0,o.jsx)(k,{children:Q.Z[e].map((function(e){return(0,o.jsx)(A,{title:e.title,id:e.id,Icon:e.Icon,expandToggle:E,expandedIds:n,bodyHeight:h,children:e.data.map((function(e){return(0,o.jsx)(X,{title:e.name,id:e.id,expanded:(t=e.id,n.includes(t)),expandToggle:S,children:(0,o.jsx)("div",{className:K().accordion_contents,children:w(e.items).map((function(e){return(0,o.jsx)(i.Fragment,{children:e.description?(0,o.jsx)(Y.Z,{isOpen:_===e.url,content:(n=e.description,n.length>120?"".concat(n.slice(0,120),"..."):n),arrowSize:6,children:(0,o.jsx)(g,{addFavourite:function(){return x(e)},favourite:!!m(e.url),title:e.title,imageSrc:e.logo,url:e.url,size:"small",showTip:u})}):(0,o.jsx)(g,{addFavourite:function(){return x(e)},favourite:!!m(e.url),title:e.title,imageSrc:e.logo,url:e.url,size:"small",showTip:u})},e.url);var n}))})},e.id);var t}))},e.id)}))},t)})),(0,o.jsx)(b,{}),(0,o.jsx)(re,{expanded:I(),toggleExpanded:function(){I()?y([]):y(s)}})]})})]})}},9215:function(e){e.exports={heading:"Blockchains_heading__OSfqg",heading__700:"Blockchains_heading__700__FBO_D",heading__600:"Blockchains_heading__600__B_TfY",heading__200:"Blockchains_heading__200__bN_VS",container:"Blockchains_container__6uB0D",heading__100:"Blockchains_heading__100__K9omG","text__short--lg":"Blockchains_text__short--lg__viWOZ","text__long--lg":"Blockchains_text__long--lg__a4_2Q","text__short--sm":"Blockchains_text__short--sm__nOe2E","text__long--sm":"Blockchains_text__long--sm__7t_I4","text__short--md":"Blockchains_text__short--md__uSvLH","text__long--md":"Blockchains_text__long--md__DEyud",text__upper:"Blockchains_text__upper__RV10k",contents:"Blockchains_contents__jilJP"}},1507:function(e){e.exports={container:"Card_container__dn3j_",container__small:"Card_container__small__7QRjS",container__large:"Card_container__large__YeAqL",favourite:"Card_favourite__KiZ87",active:"Card_active__vc3hy",animate_favourite:"Card_animate_favourite__l_ky_",favourite_card:"Card_favourite_card__57jwH",animate_not_favourite:"Card_animate_not_favourite__oljwX",scale_animation:"Card_scale_animation__q4Fm5",notfavourite_card:"Card_notfavourite_card__zHzr0"}},9798:function(e){e.exports={container:"Chapter_container__yHQl4",timeline:"Chapter_timeline__v9jSS"}},3176:function(e){e.exports={heading:"ExpandCollapseAllButton_heading___KjOz",heading__700:"ExpandCollapseAllButton_heading__700___MWVK",heading__600:"ExpandCollapseAllButton_heading__600__JRmZt",heading__200:"ExpandCollapseAllButton_heading__200__vNNet",heading__100:"ExpandCollapseAllButton_heading__100__Ah65n","text__short--lg":"ExpandCollapseAllButton_text__short--lg__w9y_Y","text__long--lg":"ExpandCollapseAllButton_text__long--lg__L_sKu","text__short--sm":"ExpandCollapseAllButton_text__short--sm__NsFVV","text__long--sm":"ExpandCollapseAllButton_text__long--sm__5Q9MH","text__short--md":"ExpandCollapseAllButton_text__short--md__cnHmy",btn:"ExpandCollapseAllButton_btn__dg9QU","text__long--md":"ExpandCollapseAllButton_text__long--md__jgcZi",text__upper:"ExpandCollapseAllButton_text__upper__k3Tiv"}},5197:function(e){e.exports={accordion__header:"InnerAccordion_accordion__header__8N_Un",trigger:"InnerAccordion_trigger__mf6Lt",icon:"InnerAccordion_icon__uQ4bl",panel:"InnerAccordion_panel__AsMg2",active:"InnerAccordion_active__wlA_N"}},1651:function(e){e.exports={navItem:"NavItem_navItem__OUyyq",selected:"NavItem_selected__1dn_y"}},4257:function(e){e.exports={heading:"Navbar_heading___OCeX",heading__700:"Navbar_heading__700__dxlHO",heading__600:"Navbar_heading__600__qEop5",heading__200:"Navbar_heading__200__plbLu",heading__100:"Navbar_heading__100__R_67B","text__short--lg":"Navbar_text__short--lg__fk28X","text__long--lg":"Navbar_text__long--lg__RQfb8","text__short--sm":"Navbar_text__short--sm__bs2TH","text__long--sm":"Navbar_text__long--sm__xTP0n","text__short--md":"Navbar_text__short--md__GGi9j","text__long--md":"Navbar_text__long--md__JVhbo",text__upper:"Navbar_text__upper__7w8Jd",navbar__group:"Navbar_navbar__group__ZP6J0",container:"Navbar_container__vShO1",scrolled:"Navbar_scrolled__6beeX",shadow_right:"Navbar_shadow_right__Ph5Pn",navbar:"Navbar_navbar__NtccY",progress_items_container:"Navbar_progress_items_container__vnz5q",navbar__items:"Navbar_navbar__items__JobeV",github_logo:"Navbar_github_logo__J8Xea"}},3595:function(e){e.exports={progress:"NavigationProgressBar_progress__F8sa_"}},7501:function(e){e.exports={search:"Search_search__53JUt",search_container:"Search_search_container__4hdN1",search_icon:"Search_search_icon__A_5_8",close:"Search_close__7qapj",focused:"Search_focused__fGjDb"}},7451:function(e){e.exports={heading:"SearchItem_heading__LQXq1",heading__700:"SearchItem_heading__700__j3h1o",heading__600:"SearchItem_heading__600__R6dhP",heading__200:"SearchItem_heading__200__9YC4r",heading__100:"SearchItem_heading__100__vxXyl","text__short--lg":"SearchItem_text__short--lg__paj7W","text__long--lg":"SearchItem_text__long--lg__1b6bt","text__short--sm":"SearchItem_text__short--sm__OD0Nj","text__long--sm":"SearchItem_text__long--sm__8XqNO","text__short--md":"SearchItem_text__short--md__didwj",item:"SearchItem_item___FcCg",tag:"SearchItem_tag__dht5i",text:"SearchItem_text__XiSYT","text__long--md":"SearchItem_text__long--md__z7qpE",text__upper:"SearchItem_text__upper__HjNEj",logo:"SearchItem_logo__k5fdd",link_icon:"SearchItem_link_icon__AQjME",left:"SearchItem_left__jERwn",logo__none:"SearchItem_logo__none__Y8d4r"}},9465:function(e){e.exports={heading:"SearchResult_heading__c9pfW",heading__700:"SearchResult_heading__700__aivG1",heading__600:"SearchResult_heading__600__JWqro",heading__200:"SearchResult_heading__200__4CUpI",heading__100:"SearchResult_heading__100__JwbWk","text__short--lg":"SearchResult_text__short--lg__r8PXI","text__long--lg":"SearchResult_text__long--lg__oFpDE","text__short--sm":"SearchResult_text__short--sm__6THRA","text__long--sm":"SearchResult_text__long--sm__xJ53u","text__short--md":"SearchResult_text__short--md__yrXLi",results:"SearchResult_results__QNjPw","text__long--md":"SearchResult_text__long--md__PfzXq",text__upper:"SearchResult_text__upper__4TniX",content:"SearchResult_content__tqexZ",section:"SearchResult_section__F_go6",section_content:"SearchResult_section_content__a73bE"}},4165:function(e){e.exports={heading:"Section_heading__QFlNz",heading__700:"Section_heading__700__5QsgJ",heading__600:"Section_heading__600__MEWa8",heading__200:"Section_heading__200__vUtPq",heading__100:"Section_heading__100___L7n5","text__short--lg":"Section_text__short--lg__XWS6v","text__long--lg":"Section_text__long--lg__dk0DH","text__short--sm":"Section_text__short--sm__macDB","text__long--sm":"Section_text__long--sm__niGvv","text__short--md":"Section_text__short--md__vrJ6E","text__long--md":"Section_text__long--md__B2hP8",text__upper:"Section_text__upper__UqGco",container:"Section_container__TDOy0",title:"Section_title__e4WgN",active:"Section_active__7csGj",body:"Section_body__c4cQx",timelineIcon:"Section_timelineIcon__KF_PX"}},1584:function(e){e.exports={timeline__icon:"TimelineIcon_timeline__icon__htoYu",active:"TimelineIcon_active__LTRJ9"}},1962:function(e){e.exports={container:"Ecosystem_container__UC5li",accordion_contents:"Ecosystem_accordion_contents__cOuDI",loading_page:"Ecosystem_loading_page__iETbW"}}},function(e){e.O(0,[331,671,469,774,888,179],(function(){return n=2758,e(e.s=n);var n}));var n=e.O();_N_E=n}]);