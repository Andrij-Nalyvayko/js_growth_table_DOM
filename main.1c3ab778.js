parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,c=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw a}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),a=document.querySelector(".append-column"),c=document.querySelector(".remove-column");function l(){var e=document.querySelectorAll("tr");document.querySelector("tbody").insertAdjacentHTML("beforeend"," ".concat(e[0].innerHTML))}function u(){document.querySelector("tbody").lastChild.remove(),document.querySelector("tbody").lastChild.remove()}function i(){var t,r=e(document.querySelectorAll("tr"));try{for(r.s();!(t=r.n()).done;){t.value.insertAdjacentHTML("beforeend","<td>")}}catch(n){r.e(n)}finally{r.f()}}function d(){var t,r=e(document.querySelectorAll("tr"));try{for(r.s();!(t=r.n()).done;){t.value.children[0].remove()}}catch(n){r.e(n)}finally{r.f()}}document.addEventListener("click",function(e){switch(e.target){case n:l();break;case o:u();break;case a:i();break;case c:d()}var t=document.querySelectorAll("tr").length,r=document.querySelectorAll("tr")[0].querySelectorAll("td").length;switch(t){case 2:o.setAttribute("disabled","disabled");break;case 3:o.removeAttribute("disabled");break;case 9:n.removeAttribute("disabled");break;case 10:n.setAttribute("disabled","disabled")}switch(r){case 2:c.setAttribute("disabled","disabled");break;case 3:c.removeAttribute("disabled");break;case 9:a.removeAttribute("disabled");break;case 10:a.setAttribute("disabled","disabled")}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1c3ab778.js.map