(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{9926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var i=n(9434),a=n(6052),o={contact_list:"ContactList_contact_list__tnyRS",contact_item:"ContactList_contact_item__MaQF6",contact_btn:"ContactList_contact_btn__eTLEZ"},r="NOT_FOUND";var s=function(e,t){return e===t};function l(e,t){var n="object"===typeof t?t:{equalityCheck:t},i=n.equalityCheck,a=void 0===i?s:i,o=n.maxSize,l=void 0===o?1:o,c=n.resultEqualityCheck,m=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var i=t.length,a=0;a<i;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===l?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(m):function(e,t){var n=[];function i(e){var i=n.findIndex((function(n){return t(e,n.key)}));if(i>-1){var a=n[i];return i>0&&(n.splice(i,1),n.unshift(a)),a.value}return r}return{get:i,put:function(t,a){i(t)===r&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,m);function u(){var t=f.get(arguments);if(t===r){if(t=e.apply(null,arguments),c){var n=f.getEntries(),i=n.find((function(e){return c(e.value,t)}));i&&(t=i.value)}f.put(arguments,t)}return t}return u.clearCache=function(){return f.clear()},u}function c(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var a=function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];var o,r=0,s={memoizeOptions:void 0},l=i.pop();if("object"===typeof l&&(s=l,l=i.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var m=s,f=m.memoizeOptions,u=void 0===f?n:f,d=Array.isArray(u)?u:[u],g=c(i),p=e.apply(void 0,[function(){return r++,l.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],t=g.length,n=0;n<t;n++)e.push(g[n].apply(null,arguments));return o=p.apply(null,e)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:p,dependencies:g,lastResult:function(){return o},recomputations:function(){return r},resetRecomputations:function(){return r=0}}),h};return a}var f=m(l),u=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},g=function(e){return e.contacts.error},p=f([u,function(e){return e.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),h=n(2791),y=n(184),b=function(){var e=(0,i.v9)(p),t=(0,i.I0)();return(0,h.useEffect)((function(){t((0,a.yF)())}),[t]),(0,y.jsx)("ul",{className:o.contact_list,children:e.map((function(e){var n=e.id,i=e.name,r=e.number;return(0,y.jsxs)("li",{className:o.contact_item,children:[(0,y.jsxs)("p",{className:o.contact_data,children:[i," : ",r]}),(0,y.jsx)("button",{className:o.contact_btn,onClick:function(){return t((0,a.GK)(n))},children:"Delete"})]},n)}))})},v=n(5705),x=n(6727),k=n(5264),w={form:"ContactForm_form__dhl+T",labelText:"ContactForm_labelText__JB4h1",btnAdd:"ContactForm_btnAdd__F4QeR"},N=function(){var e=(0,i.v9)(u),t=(0,i.I0)(),n=(0,x.Ry)({name:(0,x.Z_)().required(),number:(0,x.Z_)().required()});return(0,y.jsx)(v.J9,{initialValues:{name:"",number:""},onSubmit:function(n,i){var o=i.resetForm;e.find((function(e){return e.name===n.name}))?k.Notify.info("".concat(n.name," is already in contacts.")):t((0,a.uK)(n)),console.log(n),o()},validationSchema:n,children:(0,y.jsxs)(v.l0,{className:w.form,children:[(0,y.jsxs)("label",{className:w.label,children:[(0,y.jsx)("span",{className:w.labelText,children:"Name"}),(0,y.jsx)(v.Bc,{component:"div",name:"name"}),(0,y.jsx)(v.gN,{type:"text",name:"name",className:w.input})]}),(0,y.jsxs)("label",{className:w.label,children:[(0,y.jsx)("span",{className:w.labelText,children:"Number"}),(0,y.jsx)(v.Bc,{component:"div",name:"number"}),(0,y.jsx)(v.gN,{type:"tel",name:"number",className:w.input})]}),(0,y.jsx)("button",{type:"submit",className:w.btnAdd,children:"Add contact"})]})})},C=n(4808),S="Filter_filter_text__-exuG",L="Filter_filter_label__5ITod",j=function(e){var t=e.value,n=(e.onChange,(0,i.I0)());return(0,y.jsxs)("label",{className:L,children:[(0,y.jsx)("span",{className:S,children:"Find contact by name"}),(0,y.jsx)("input",{type:"text",value:t,onChange:function(e){n((0,C.v)(e.currentTarget.value))}})]})},_=n(3742),z=function(){var e=(0,i.I0)(),t=(0,i.v9)(u),n=(0,i.v9)(d),o=(0,i.v9)(g);return(0,h.useEffect)((function(){e((0,a.yF)())}),[e]),(0,y.jsxs)("div",{className:"container",children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(N,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(j,{}),n&&_.Loading.standard("Loading"),!n&&_.Loading.remove(),o&&k.Notify.failure("Something went wrong please try to reload page."),0===t.length?(0,y.jsx)("p",{className:"list-text",children:"Add your first contact"}):(0,y.jsx)(b,{})]})}},3742:function(e,t,n){var i,a;a="undefined"!==typeof n.g?n.g:"undefined"!==typeof window?window:this,i=function(){return function(e){"use strict";if("undefined"===typeof e&&"undefined"===typeof e.document)return!1;var t,n="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',o={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},r={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},s=function(e){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+i)},l=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},m=function e(){var t={},n=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);for(var a=function(i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n&&"[object Object]"===Object.prototype.toString.call(i[a])?t[a]=e(t[a],i[a]):t[a]=i[a])};i<arguments.length;i++)a(arguments[i]);return t},f=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},u=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},d=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},g=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},p=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},h=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},y=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},b=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'},v=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},x=function(n,i,c,v,x){if(!l("body"))return!1;t||w.Loading.init({});var k=m(!0,t,{});if("object"===typeof i&&!Array.isArray(i)||"object"===typeof c&&!Array.isArray(c)){var N={};"object"===typeof i?N=i:"object"===typeof c&&(N=c),t=m(!0,t,N)}var C="";if("string"===typeof i&&i.length>0&&(C=i),v){var S="";(C=C.length>t.messageMaxLength?f(C).toString().substring(0,t.messageMaxLength)+"...":f(C).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+C+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var L="";if(n===o.Standard)L=u(t.svgSize,t.svgColor);else if(n===o.Hourglass)L=d(t.svgSize,t.svgColor);else if(n===o.Circle)L=g(t.svgSize,t.svgColor);else if(n===o.Arrows)L=p(t.svgSize,t.svgColor);else if(n===o.Dots)L=h(t.svgSize,t.svgColor);else if(n===o.Pulse)L=y(t.svgSize,t.svgColor);else if(n===o.Custom&&null!==t.customSvgCode&&null===t.customSvgUrl)L=t.customSvgCode||"";else if(n===o.Custom&&null!==t.customSvgUrl&&null===t.customSvgCode)L='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(n===o.Custom&&(null===t.customSvgUrl||null===t.customSvgCode))return s('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;L=b(t.svgSize,"#f8f8f8","#32c682")}var j=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),_=e.innerWidth,z=j>=_?_-40+"px":j+"px",T='<div style="width:'+z+"; height:"+z+';" class="'+t.className+"-icon"+(C.length>0?" nx-with-message":"")+'">'+L+"</div>",A=e.document.createElement("div");A.id=r.ID,A.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),A.style.zIndex=t.zindex,A.style.background=t.backgroundColor,A.style.animationDuration=t.cssAnimationDuration+"ms",A.style.fontFamily='"'+t.fontFamily+'", '+a,A.style.display="flex",A.style.flexWrap="wrap",A.style.flexDirection="column",A.style.alignItems="center",A.style.justifyContent="center",t.rtl&&(A.setAttribute("dir","rtl"),A.classList.add("nx-rtl-on")),A.innerHTML=T+S,e.document.getElementById(A.id)||(e.document.body.appendChild(A),t.clickToClose&&e.document.getElementById(A.id).addEventListener("click",(function(){A.classList.add("nx-remove");var e=setTimeout((function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(r.ID))var M=e.document.getElementById(r.ID),I=setTimeout((function(){M.classList.add("nx-remove");var e=setTimeout((function(){null!==M.parentNode&&(M.parentNode.removeChild(M),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(I)}),x);t=m(!0,t,k)},k=function(n){"string"!==typeof n&&(n="");var i=e.document.getElementById(r.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?f(n).substring(0,t.messageMaxLength)+"...":f(n);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else s("Where is the new message?")},w={Loading:{init:function(e){t=m(!0,r,e),c(v,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Loading module before call Merge function."),!1;t=m(!0,t,e)},standard:function(e,t){x(o.Standard,e,t,!0,0)},hourglass:function(e,t){x(o.Hourglass,e,t,!0,0)},circle:function(e,t){x(o.Circle,e,t,!0,0)},arrows:function(e,t){x(o.Arrows,e,t,!0,0)},dots:function(e,t){x(o.Dots,e,t,!0,0)},pulse:function(e,t){x(o.Pulse,e,t,!0,0)},custom:function(e,t){x(o.Custom,e,t,!0,0)},notiflix:function(e,t){x(o.Notiflix,e,t,!0,0)},remove:function(e){"number"!==typeof e&&(e=0),x(null,null,null,!1,e)},change:function(e){k(e)}}};return"object"===typeof e.Notiflix?m(!0,e.Notiflix,{Loading:w.Loading}):{Loading:w.Loading}}(a)}.apply(t,[]),void 0===i||(e.exports=i)}}]);
//# sourceMappingURL=926.9acf943f.chunk.js.map