(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{650:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(651);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var c,m=e[Symbol.iterator]();!(n=(c=m.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(u){l=!0,r=u}finally{try{n||null==m.return||m.return()}finally{if(l)throw r}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},651:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(653);function l(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},652:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(179),l=a(1),r=a.n(l),c=a(125),m=r.a.memo((function(e){var t=e.name,a=e.text,l=Object(n.a)(e,["name","text"]),m=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return r.a.createElement("div",{className:"card-header-actions"},r.a.createElement(c.bb,Object.assign({},l,{href:m,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),r.a.createElement("small",{className:"text-muted"},a||"docs")))}))},653:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},726:function(e,t,a){"use strict";a.r(t);var n=a(650),l=a(1),r=a.n(l),c=a(125),m=a(58),u=a(652);t.default=function(){var e=Object(l.useState)(1),t=Object(n.a)(e,2),a=t[0],i=t[1],o="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";return r.a.createElement(c.ub,null,r.a.createElement(c.u,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Index indentifiers",r.a.createElement(u.a,{name:"CTabs"})),r.a.createElement(c.k,null,r.a.createElement(c.Ib,null,r.a.createElement(c.jb,{variant:"tabs"},r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,"Home")),r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,"Profile")),r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,"Messages"))),r.a.createElement(c.Gb,null,r.a.createElement(c.Hb,null,"1. ".concat(o)),r.a.createElement(c.Hb,null,"2. ".concat(o)),r.a.createElement(c.Hb,null,"3. ".concat(o))))))),r.a.createElement(c.u,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Id indentifiers"),r.a.createElement(c.k,null,r.a.createElement(c.Ib,{activeTab:"home"},r.a.createElement(c.jb,{variant:"tabs"},r.a.createElement(c.kb,null,r.a.createElement(c.lb,{"data-tab":"home"},"Home")),r.a.createElement(c.kb,null,r.a.createElement(c.lb,{"data-tab":"profile"},"Profile")),r.a.createElement(c.kb,null,r.a.createElement(c.lb,{"data-tab":"messages"},"Messages"))),r.a.createElement(c.Gb,null,r.a.createElement(c.Hb,{"data-tab":"home"},"1. ".concat(o)),r.a.createElement(c.Hb,{"data-tab":"profile"},"2. ".concat(o)),r.a.createElement(c.Hb,{"data-tab":"messages"},"3. ".concat(o))))))),r.a.createElement(c.u,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"No fade animation tabs"),r.a.createElement(c.k,null,r.a.createElement(c.Ib,null,r.a.createElement(c.jb,{variant:"tabs"},r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,r.a.createElement(m.a,{name:"cil-calculator"}))),r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,r.a.createElement(m.a,{name:"cil-basket"}))),r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,r.a.createElement(m.a,{name:"cil-chart-pie"})))),r.a.createElement(c.Gb,{fade:!1},r.a.createElement(c.Hb,null,"1. ".concat(o)),r.a.createElement(c.Hb,null,"2. ".concat(o)),r.a.createElement(c.Hb,null,"3. ".concat(o))))))),r.a.createElement(c.u,{xs:"12",md:"6",className:"mb-4"},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Controlled tabs"),r.a.createElement(c.k,null,r.a.createElement(c.Ib,{activeTab:a,onActiveTabChange:function(e){return i(e)}},r.a.createElement(c.jb,{variant:"tabs"},r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,r.a.createElement(m.a,{name:"cil-calculator"}),0===a&&" Home")),r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,r.a.createElement(m.a,{name:"cil-basket"}),1===a&&" Profile")),r.a.createElement(c.kb,null,r.a.createElement(c.lb,null,r.a.createElement(m.a,{name:"cil-chart-pie"}),2===a&&" Messages"))),r.a.createElement(c.Gb,null,r.a.createElement(c.Hb,null,"1. ".concat(o)),r.a.createElement(c.Hb,null,"2. ".concat(o)),r.a.createElement(c.Hb,null,"3. ".concat(o))))))))}}}]);
//# sourceMappingURL=30.fd32aa9b.chunk.js.map