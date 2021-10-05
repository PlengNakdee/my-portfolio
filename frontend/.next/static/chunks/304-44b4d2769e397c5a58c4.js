(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{5042:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{J:function(){return V}});var i,l,c,s=t(7294);function f(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];return"function"===typeof t?t.apply(void 0,o):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,f),a}function p(e){var n=e.props,t=e.slot,u=e.defaultTag,a=e.features,c=e.visible,s=void 0===c||c,p=e.name;if(s)return d(n,t,u,p);var v=null!=a?a:i.None;if(v&i.Static){var m=n.static,b=void 0!==m&&m,y=o(n,["static"]);if(b)return d(y,t,u,p)}if(v&i.RenderStrategy){var g,h=n.unmount,E=void 0===h||h,S=o(n,["unmount"]);return f(E?l.Unmount:l.Hidden,((g={})[l.Unmount]=function(){return null},g[l.Hidden]=function(){return d(r({},S,{hidden:!0,style:{display:"none"}}),t,u,p)},g))}return d(n,t,u,p)}function d(e,n,t,r){var u;void 0===n&&(n={});var i=m(e,["unmount","static"]),l=i.as,c=void 0===l?t:l,f=i.children,p=i.refName,d=void 0===p?"ref":p,v=o(i,["as","children","refName"]),b=void 0!==e.ref?((u={})[d]=e.ref,u):{},y="function"===typeof f?f(n):f;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),c===s.Fragment&&Object.keys(v).length>0){if(!(0,s.isValidElement)(y)||Array.isArray(y)&&y.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(y,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),u=function(){var t,u=r.value;void 0!==e[u]&&void 0!==n[u]&&Object.assign(o,((t={})[u]=function(t){t.defaultPrevented||e[u](t),t.defaultPrevented||n[u](t)},t))},i=a(t);!(r=i()).done;)u();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(m(v,["ref"])),y.props,["onClick"]),b))}return(0,s.createElement)(c,Object.assign({},m(v,["ref"]),c!==s.Fragment&&b),y)}function v(e){var n;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function m(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=a(n);!(t=o()).done;){var u=t.value;u in r&&delete r[u]}return r}function b(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,s.useRef)(n);return(0,s.useEffect)((function(){r.current=n}),[n]),(0,s.useCallback)((function(e){for(var n,t=a(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function y(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var u=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!u||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&u}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(i||(i={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(l||(l={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(c||(c={}));var g="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,h={serverHandoffComplete:!1};var E=0;function S(){return++E}function w(){var e=function(){var e=(0,s.useState)(h.serverHandoffComplete),n=e[0],t=e[1];return(0,s.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,s.useEffect)((function(){!1===h.serverHandoffComplete&&(h.serverHandoffComplete=!0)}),[]),n}(),n=(0,s.useState)(e?S:null),t=n[0],r=n[1];return g((function(){null===t&&r(S())}),[t]),null!=t?""+t:void 0}var C,P,O,k,x=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function I(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(x))}function L(e,n){var t=Array.isArray(e)?e:I(e),r=document.activeElement,o=function(){if(n&(C.First|C.Next))return O.Next;if(n&(C.Previous|C.Last))return O.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=function(){if(n&C.First)return 0;if(n&C.Previous)return Math.max(0,t.indexOf(r))-1;if(n&C.Next)return Math.max(0,t.indexOf(r))+1;if(n&C.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=n&C.NoScroll?{preventScroll:!0}:{},i=0,l=t.length,c=void 0;do{var s;if(i>=l||i+l<=0)return P.Error;var f=u+i;if(n&C.WrapAround)f=(f+l)%l;else{if(f<0)return P.Underflow;if(f>=l)return P.Overflow}null==(s=c=t[f])||s.focus(a),i+=o}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),P.Success}function T(e,n,t){var r=(0,s.useRef)(n);r.current=n,(0,s.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(C||(C={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(P||(P={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(O||(O={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(k||(k={}));var M,N,A,j,F=(0,s.createContext)(null);function R(){return(0,s.useContext)(F)}function H(e){var n=e.value,t=e.children;return s.createElement(F.Provider,{value:n},t)}function D(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}F.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(M||(M={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(A||(A={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(j||(j={}));var U=((N={})[j.TogglePopover]=function(e){var n;return r({},e,{popoverState:f(e.popoverState,(n={},n[A.Open]=A.Closed,n[A.Closed]=A.Open,n))})},N[j.ClosePopover]=function(e){return e.popoverState===A.Closed?e:r({},e,{popoverState:A.Closed})},N[j.SetButton]=function(e,n){return e.button===n.button?e:r({},e,{button:n.button})},N[j.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:r({},e,{buttonId:n.buttonId})},N[j.SetPanel]=function(e,n){return e.panel===n.panel?e:r({},e,{panel:n.panel})},N[j.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:r({},e,{panelId:n.panelId})},N),B=(0,s.createContext)(null);function K(e){var n=(0,s.useContext)(B);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+V.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return n}B.displayName="PopoverContext";var _=(0,s.createContext)(null);function G(e){var n=(0,s.useContext)(_);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+V.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return n}_.displayName="PopoverAPIContext";var W=(0,s.createContext)(null);function z(){return(0,s.useContext)(W)}W.displayName="PopoverGroupContext";var q=(0,s.createContext)(null);function J(e,n){return f(n.type,U,e,n)}q.displayName="PopoverPanelContext";function V(e){var n,t="headlessui-popover-button-"+w(),r="headlessui-popover-panel-"+w(),o=(0,s.useReducer)(J,{popoverState:A.Closed,button:null,buttonId:t,panel:null,panelId:r}),u=o[0],a=u.popoverState,i=u.button,l=u.panel,c=o[1];(0,s.useEffect)((function(){return c({type:j.SetButtonId,buttonId:t})}),[t,c]),(0,s.useEffect)((function(){return c({type:j.SetPanelId,panelId:r})}),[r,c]);var d=(0,s.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return c({type:j.ClosePopover})}}}),[t,r,c]),v=z(),m=null==v?void 0:v.registerPopover,b=(0,s.useCallback)((function(){var e;return null!=(e=null==v?void 0:v.isFocusWithinPopoverGroup())?e:(null==i?void 0:i.contains(document.activeElement))||(null==l?void 0:l.contains(document.activeElement))}),[v,i,l]);(0,s.useEffect)((function(){return null==m?void 0:m(d)}),[m,d]),T("focus",(function(){a===A.Open&&(b()||i&&l&&c({type:j.ClosePopover}))}),!0),T("mousedown",(function(e){var n=e.target;a===A.Open&&((null==i?void 0:i.contains(n))||(null==l?void 0:l.contains(n))||(c({type:j.ClosePopover}),function(e,n){var t;return void 0===n&&(n=k.Strict),e!==document.body&&f(n,((t={})[k.Strict]=function(){return e.matches(x)},t[k.Loose]=function(){for(var n=e;null!==n;){if(n.matches(x))return!0;n=n.parentElement}return!1},t))}(n,k.Loose)||(e.preventDefault(),null==i||i.focus())))}));var y=(0,s.useCallback)((function(e){c({type:j.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:i:i;null==n||n.focus()}),[c,i]),g=(0,s.useMemo)((function(){return{close:y}}),[y]),h=(0,s.useMemo)((function(){return{open:a===A.Open,close:y}}),[a,y]);return s.createElement(B.Provider,{value:o},s.createElement(_.Provider,{value:g},s.createElement(H,{value:f(a,(n={},n[A.Open]=M.Open,n[A.Closed]=M.Closed,n))},p({props:e,slot:h,defaultTag:"div",name:"Popover"}))))}var Y=v((function e(n,t){var o=K([V.name,e.name].join(".")),u=o[0],a=o[1],i=(0,s.useRef)(null),l=z(),f=null==l?void 0:l.closeOthers,d=(0,s.useContext)(q),v=null!==d&&d===u.panelId,m=b(i,t,v?null:function(e){return a({type:j.SetButton,button:e})}),h=b(i,t),E=(0,s.useRef)(null),S=(0,s.useRef)("undefined"===typeof window?null:document.activeElement);T("focus",(function(){S.current=E.current,E.current=document.activeElement}),!0);var w=(0,s.useCallback)((function(e){var n;if(v){if(u.popoverState===A.Closed)return;switch(e.key){case c.Space:case c.Enter:e.preventDefault(),e.stopPropagation(),a({type:j.ClosePopover}),null==(n=u.button)||n.focus()}}else switch(e.key){case c.Space:case c.Enter:e.preventDefault(),e.stopPropagation(),u.popoverState===A.Closed&&(null==f||f(u.buttonId)),a({type:j.TogglePopover});break;case c.Escape:if(u.popoverState!==A.Open)return null==f?void 0:f(u.buttonId);if(!i.current)return;if(!i.current.contains(document.activeElement))return;a({type:j.ClosePopover});break;case c.Tab:if(u.popoverState!==A.Open)return;if(!u.panel)return;if(!u.button)return;if(e.shiftKey){var t;if(!S.current)return;if(null==(t=u.button)?void 0:t.contains(S.current))return;if(u.panel.contains(S.current))return;var r=I(),o=r.indexOf(S.current);if(r.indexOf(u.button)>o)return;e.preventDefault(),e.stopPropagation(),L(u.panel,C.Last)}else e.preventDefault(),e.stopPropagation(),L(u.panel,C.First)}}),[a,u.popoverState,u.buttonId,u.button,u.panel,i,f,v]),P=(0,s.useCallback)((function(e){var n;if(!v&&(e.key===c.Space&&e.preventDefault(),u.popoverState===A.Open&&u.panel&&u.button))switch(e.key){case c.Tab:if(!S.current)return;if(null==(n=u.button)?void 0:n.contains(S.current))return;if(u.panel.contains(S.current))return;var t=I(),r=t.indexOf(S.current);if(t.indexOf(u.button)>r)return;e.preventDefault(),e.stopPropagation(),L(u.panel,C.Last)}}),[u.popoverState,u.panel,u.button,v]),O=(0,s.useCallback)((function(e){var t,r;y(e.currentTarget)||(n.disabled||(v?(a({type:j.ClosePopover}),null==(t=u.button)||t.focus()):(u.popoverState===A.Closed&&(null==f||f(u.buttonId)),null==(r=u.button)||r.focus(),a({type:j.TogglePopover}))))}),[a,u.button,u.popoverState,u.buttonId,n.disabled,f,v]),k=(0,s.useMemo)((function(){return{open:u.popoverState===A.Open}}),[u]),x=function(e,n){var t=(0,s.useState)((function(){return D(e)})),r=t[0],o=t[1];return g((function(){o(D(e))}),[e.type,e.as]),g((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&o("button")}),[r,n]),r}(n,i);return p({props:r({},n,v?{ref:h,type:x,onKeyDown:w,onClick:O}:{ref:m,id:u.buttonId,type:x,"aria-expanded":n.disabled?void 0:u.popoverState===A.Open,"aria-controls":u.panel?u.panelId:void 0,onKeyDown:w,onKeyUp:P,onClick:O}),slot:k,defaultTag:"button",name:"Popover.Button"})})),$=i.RenderStrategy|i.Static,Q=v((function e(n,t){var o=K([V.name,e.name].join(".")),u=o[0].popoverState,a=o[1],i=b(t),l="headlessui-popover-overlay-"+w(),c=R(),f=null!==c?c===M.Open:u===A.Open,d=(0,s.useCallback)((function(e){if(y(e.currentTarget))return e.preventDefault();a({type:j.ClosePopover})}),[a]),v=(0,s.useMemo)((function(){return{open:u===A.Open}}),[u]);return p({props:r({},n,{ref:i,id:l,"aria-hidden":!0,onClick:d}),slot:v,defaultTag:"div",features:$,visible:f,name:"Popover.Overlay"})})),X=i.RenderStrategy|i.Static,Z=v((function e(n,t){var u=n.focus,a=void 0!==u&&u,i=o(n,["focus"]),l=K([V.name,e.name].join(".")),f=l[0],d=l[1],v=G([V.name,e.name].join(".")).close,m=(0,s.useRef)(null),y=b(m,t,(function(e){d({type:j.SetPanel,panel:e})})),g=R(),h=null!==g?g===M.Open:f.popoverState===A.Open,E=(0,s.useCallback)((function(e){var n;switch(e.key){case c.Escape:if(f.popoverState!==A.Open)return;if(!m.current)return;if(!m.current.contains(document.activeElement))return;e.preventDefault(),d({type:j.ClosePopover}),null==(n=f.button)||n.focus()}}),[f,m,d]);(0,s.useEffect)((function(){return function(){return d({type:j.SetPanel,panel:null})}}),[d]),(0,s.useEffect)((function(){var e;f.popoverState!==A.Closed||null!=(e=n.unmount)&&!e||d({type:j.SetPanel,panel:null})}),[f.popoverState,n.unmount,d]),(0,s.useEffect)((function(){if(a&&f.popoverState===A.Open&&m.current){var e=document.activeElement;m.current.contains(e)||L(m.current,C.First)}}),[a,m,f.popoverState]),T("keydown",(function(e){if(f.popoverState===A.Open&&m.current&&e.key===c.Tab&&document.activeElement&&m.current&&m.current.contains(document.activeElement)){e.preventDefault();var n,t=L(m.current,e.shiftKey?C.Previous:C.Next);if(t===P.Underflow)return null==(n=f.button)?void 0:n.focus();if(t===P.Overflow){if(!f.button)return;var r=I(),o=r.indexOf(f.button);L(r.splice(o+1).filter((function(e){var n;return!(null==(n=m.current)?void 0:n.contains(e))})),C.First)===P.Error&&L(document.body,C.First)}}})),T("focus",(function(){var e;a&&f.popoverState===A.Open&&m.current&&((null==(e=m.current)?void 0:e.contains(document.activeElement))||d({type:j.ClosePopover}))}),!0);var S=(0,s.useMemo)((function(){return{open:f.popoverState===A.Open,close:v}}),[f,v]),w={ref:y,id:f.panelId,onKeyDown:E};return s.createElement(q.Provider,{value:f.panelId},p({props:r({},i,w),slot:S,defaultTag:"div",features:X,visible:h,name:"Popover.Panel"}))}));V.Button=Y,V.Overlay=Q,V.Panel=Z,V.Group=function(e){var n=(0,s.useRef)(null),t=(0,s.useState)([]),o=t[0],u=t[1],i=(0,s.useCallback)((function(e){u((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[u]),l=(0,s.useCallback)((function(e){return u((function(n){return[].concat(n,[e])})),function(){return i(e)}}),[u,i]),c=(0,s.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||o.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,o]),f=(0,s.useCallback)((function(e){for(var n,t=a(o);!(n=t()).done;){var r=n.value;r.buttonId!==e&&r.close()}}),[o]),d=(0,s.useMemo)((function(){return{registerPopover:l,unregisterPopover:i,isFocusWithinPopoverGroup:c,closeOthers:f}}),[l,i,c,f]),v=(0,s.useMemo)((function(){return{}}),[]),m={ref:n},b=e;return s.createElement(W.Provider,{value:d},p({props:r({},b,m),slot:v,defaultTag:"div",name:"Popover.Group"}))}},3802:function(e,n,t){"use strict";t.d(n,{Oqj:function(){return o}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},e),r.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,u=(o=t(7294))&&o.__esModule?o:{default:o},a=t(1063),i=t(4651),l=t(7426);var c={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),f=u.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),u=t[0],i=t[1];return{href:u,as:e.as?a.resolveHref(o,e.as):i||u}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,m=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var h=(n=u.default.Children.only(v))&&"object"===typeof n&&n.ref,E=l.useIntersection({rootMargin:"200px"}),S=r(E,2),w=S[0],C=S[1],P=u.default.useCallback((function(e){w(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,w]);u.default.useEffect((function(){var e=C&&t&&a.isLocalURL(p),n="undefined"!==typeof g?g:o&&o.locale,r=c[p+"%"+d+(n?"%"+n:"")];e&&!r&&s(o,p,d,{locale:n})}),[d,p,C,g,t,o]);var O={ref:P,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:u,locale:l,scroll:i}))}(e,o,p,d,m,b,y,g)},onMouseEnter:function(e){a.isLocalURL(p)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,p,d,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof g?g:o&&o.locale,x=o&&o.isLocaleDomain&&a.getDomainLocale(d,k,o&&o.locales,o&&o.domainLocales);O.href=x||a.addBasePath(a.addLocale(d,k,o&&o.defaultLocale))}return u.default.cloneElement(n,O)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,l=o.useRef(),c=o.useState(!1),s=r(c,2),f=s[0],p=s[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,u=r.observer,a=r.elements;return a.set(e,n),u.observe(e),function(){a.delete(e),u.unobserve(e),0===a.size&&(u.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!a&&!f){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=t(7294),u=t(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,n,t){e.exports=t(2167)}}]);