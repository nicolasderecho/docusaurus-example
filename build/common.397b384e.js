(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(127);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(170);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var i=n(128);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var u=n(174);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return u.isSamePath}});var s=n(175);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return s.useTitleFormatter}});var c=n(176);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var a=n(129);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return a.DocsPreferredVersionContextProvider}})},104:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(10),u=n(115),s=n(11);const c=Object(r.createContext)({collectLink:()=>{}});var a=n(107),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:l,href:d,activeClassName:p,isActive:v,"data-noBrokenLinkCheck":g,autoAddBaseUrl:b=!0}=e,m=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(a.b)(),P=Object(r.useContext)(c),D=l||d,y=Object(u.a)(D),O=null==D?void 0:D.replace("pathname://",""),j=void 0!==O?(V=O,b&&(e=>e.startsWith("/"))(V)?h(V):V):void 0;var V;const w=Object(r.useRef)(!1),_=n?i.e:i.c,A=s.a.canUseIntersectionObserver;let C;Object(r.useEffect)((()=>(!A&&y&&window.docusaurus.prefetch(j),()=>{A&&C&&C.disconnect()})),[j,A,y]);const E=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,x=!j||!y||E;return j&&y&&!E&&!g&&P.collectLink(j),x?o.a.createElement("a",Object.assign({href:j},D&&!y&&{target:"_blank",rel:"noopener noreferrer"},m)):o.a.createElement(_,Object.assign({},m,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(j),w.current=!0)},innerRef:e=>{var t,n;A&&e&&y&&(t=e,n=()=>{window.docusaurus.prefetch(j)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:j||""},n&&{isActive:v,activeClassName:p}))}},105:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return f})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return l}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=o.a.createContext({}),l=function(e){return function(t){var n=d(t.components);return o.a.createElement(e,u({},t,{components:n}))}},d=function(e){var t=o.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=d(n),l=r,p=f["".concat(u,".").concat(l)]||f[l]||v[l]||i;return n?o.a.createElement(p,c(c({ref:t},s),{},{components:n})):o.a.createElement(p,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var a=2;a<i;a++)u[a]=n[a];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(22),o=n(115);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const u=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+u:u}(t,e,n,r)}}function u(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},108:function(e,t,n){try{e.exports=n(171)}catch(r){e.exports={}}},111:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},115:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},127:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(22));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(108);t.isDocsPluginEnabled=!!r.useAllDocsData},129:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const s=i(n(0)),c=n(127),a=n(128),f=n(108),l=u(n(177));function d({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=l.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(l.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function p(){const e=f.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=s.useMemo((()=>Object.keys(e)),[e]),[r,o]=s.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));s.useEffect((()=>{o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,s.useMemo((()=>({savePreferredVersion:function(e,n){l.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const v=s.createContext(null);function g({children:e}){const t=p();return s.default.createElement(v.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return a.isDocsPluginEnabled?s.default.createElement(g,null,e):s.default.createElement(s.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=s.useContext(v);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(111),o=n(172),i=n(173);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return i.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return i.getDocVersionSuggestions(n,o)}},172:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return u}));var r=n(22);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function u(e,t="default"){const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(111);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return i},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),i=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:i,alternateDocVersions:i?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(i.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},175:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(22));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(129),i=n(108),u=n(178);t.useDocsPreferredVersion=function(e=u.DEFAULT_PLUGIN_ID){const t=i.useDocsData(e),[n,s]=o.useDocsPreferredVersionContext(),{preferredVersionName:c}=n[e];return{preferredVersion:c?t.versions.find((e=>e.name===c)):null,savePreferredVersionName:r.useCallback((t=>{s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){const e=i.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},178:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"}}]);