"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".MyProgress{position:relative;margin:15px 0;height:2rem;width:auto}.progress-done{display:flex;align-items:center;justify-content:center;height:100%;width:0;opacity:0;transition:1s ease .3s}.progress-done p{position:absolute;left:5rem;top:.2rem}.progress-icon{position:fixed;width:30px;height:30px;left:10px;top:6rem;z-index:10}@media (min-width:50rem){.progress-icon{position:fixed;top:4rem;left:15px;width:80px;height:80px;z-index:10}}"),exports.ProgressBar=function({Data:e,DataName:r,DataPercentage:i,height:o,borderRadius:d,background:n,boxShadow:a,color:s,width:l}){return t.default.createElement("div",null,Object.values(e).map(((e,p)=>t.default.createElement("div",{key:p,className:"MyProgress",style:{overflow:"hidden",height:o,margin:"0.1rem",width:l,borderRadius:"0.3rem",backgroundColor:"#ffffff",borderRadius:d}},t.default.createElement("div",{className:"progress-done",style:{opacity:1,width:`${e[i]}%`,overflow:"hidden",display:"grid",alignContent:"center",justifyContent:"center",fontSize:"0.6rem",padding:"0rem",margin:"0rem",fontWeight:"bold",borderRadius:d,background:n,boxShadow:a,color:s}},t.default.createElement("p",{style:{marginTop:"-4px"}},e[r]," ",e[i],"%"))))))};
