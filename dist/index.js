!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.htmlGdprGuard=t():r.htmlGdprGuard=t()}("undefined"!=typeof self?self:"undefined"!=typeof window?window:this,(()=>(()=>{var r={845:function(r){var t;"undefined"!=typeof self?self:"undefined"!=typeof window&&window,t=()=>(()=>{"use strict";var r={315:(r,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.makeGuard=void 0;var n=e(670);t.makeGuard=function(r,t,e,o,i){return void 0===e&&(e=n.GdprStorage.Cookie),void 0===o&&(o=!1),void 0===i&&(i=null),{name:r,description:t,storage:e,required:o,enabled:null===i?o:i,enable:function(){return this.enabled||this.toggle(),this},disable:function(){return this.enabled&&this.toggle(),this},toggle:function(){return this.required||(this.enabled=!this.enabled),this},makeRequired:function(){return this.required=!0,this.enabled=!0,this},isEnabled:function(r){return this.name===r&&this.enabled},enableForStorage:function(r){return this.enabled||this.toggleForStorage(r),this},disableForStorage:function(r){return this.enabled&&this.toggleForStorage(r),this},toggleForStorage:function(r){return this.storage!=r||this.required||this.toggle(),this},raw:function(){return JSON.parse(JSON.stringify(this))}}}},822:function(r,t,e){var n=this&&this.__values||function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},i=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.GdprGuardGroup=void 0;var u=e(670),a=function(){function r(r,t,e,n){void 0===t&&(t=""),void 0===e&&(e=!1),void 0===n&&(n=!1),this.name=r,this.description=t,this.enabled=e,this.required=n,this.storage=u.GdprStorage.None,this.bindings=new Map,this.required&&(this.enabled=!0)}return r.for=function(t,e,n,o){return void 0===e&&(e=""),void 0===n&&(n=!1),void 0===o&&(o=!1),new r(t,e,n,o)},r.prototype.addGuard=function(r){return this.bindings.set(r.name,r),this},r.prototype.hasGuard=function(r){return this.name===r||this.bindings.has(r)},r.prototype.getGuard=function(r){return this.name===r?this:this.bindings.get(r)||null},r.prototype.isEnabled=function(r){var t,e;if(this.hasGuard(r)&&null!==(a=this.getGuard(r)))return a.enabled;try{for(var i=n(this.bindings),u=i.next();!u.done;u=i.next()){var a,c=o(u.value,2);if(c[0],(a=c[1]).isEnabled(r))return!0}}catch(r){t={error:r}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return!1},r.prototype.enable=function(){return this.required?this:(this.enabled=!0,this.doForEachGuard((function(r){return r.enable()})))},r.prototype.disable=function(){return this.required?this:(this.enabled=!1,this.doForEachGuard((function(r){return r.disable()})))},r.prototype.toggle=function(){return this.enabled?this.disable():this.enable()},r.prototype.makeRequired=function(){return this.required=!0,this.enabled=!0,this.doForEachGuard((function(r){return r.makeRequired()}))},r.prototype.enableForStorage=function(r){return this.doForEachGuard((function(t){t.storage&r&&t.enable()}))},r.prototype.disableForStorage=function(r){return this.doForEachGuard((function(t){t.storage&r&&t.disable()}))},r.prototype.toggleForStorage=function(r){return this.doForEachGuard((function(t){if(t.storage&r)return t.toggle()}))},r.prototype.raw=function(){var r={name:this.name,description:this.description,enabled:this.enabled,required:this.required,storage:this.storage,guards:[]};return r.guards=i([],o(this.bindings),!1).map((function(r){var t=o(r,2);return t[0],t[1].raw()})),r},r.prototype.doForEachGuard=function(r){return this.bindings.forEach((function(t){return r(t)})),this},r.prototype.getGuards=function(){return i([],o(this.bindings.values()),!1)},r}();t.GdprGuardGroup=a},777:function(r,t,e){var n=this&&this.__values||function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},i=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.GdprManager=void 0;var u=e(822),a=e(670),c=e(554),s=e(779),l=function(){function r(){this.bannerWasShown=!1,this.enabled=!0,this.events=new c.GdprManagerEventHub,this.groups=new Map,this.name="manager",this.description="Manager of GDPR guard groups",this.storage=a.GdprStorage.None,this.required=!1}return r.create=function(t){void 0===t&&(t=[]);var e=new r;return t.forEach((function(r){return e.addGroup(r)})),e},r.prototype.closeBanner=function(){var r=this;this.bannerWasShown=!0,(0,s.visitGdpr)(this,{onEach:function(t){t.enabled?r.events.enable(t.name):r.events.disable(t.name)}})},r.prototype.resetAndShowBanner=function(){this.bannerWasShown=!1},r.prototype.createGroup=function(r,t){return void 0===t&&(t=""),this.addGroup(u.GdprGuardGroup.for(r,t))},r.prototype.addGroup=function(r){return this.groups.set(r.name,r),this},r.prototype.hasGuard=function(r){return this.reduceGroupsPred((function(t){return t.hasGuard(r)}))},r.prototype.getGuard=function(r){var t,e;try{for(var i=n(this.groups),u=i.next();!u.done;u=i.next()){var a=o(u.value,2),c=(a[0],a[1]);if(c.hasGuard(r))return c.getGuard(r)}}catch(r){t={error:r}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return null},r.prototype.hasGroup=function(r){return this.reduceGroupsPred((function(t){return t.name===r}))},r.prototype.getGroup=function(r){var t,e;try{for(var i=n(this.groups),u=i.next();!u.done;u=i.next()){var a=o(u.value,2),c=a[0],s=a[1];if(c===r)return s}}catch(r){t={error:r}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return null},r.prototype.isEnabled=function(r){return this.reduceGroupsPred((function(t){return t.isEnabled(r)}))},r.prototype.enable=function(){return this.enabled=!0,this.forEachGroup((function(r){return r.enable()}))},r.prototype.disable=function(){return this.enabled=!1,this.forEachGroup((function(r){return r.disable()}))},r.prototype.toggle=function(){return this.enabled?this.disable():this.enable()},r.prototype.makeRequired=function(){return this},r.prototype.enableForStorage=function(r){return this.forEachGroup((function(t){return t.enableForStorage(r)}))},r.prototype.disableForStorage=function(r){return this.forEachGroup((function(t){return t.disableForStorage(r)}))},r.prototype.toggleForStorage=function(r){return this.forEachGroup((function(t){return t.toggleForStorage(r)}))},r.prototype.raw=function(){var r={bannerWasShown:this.bannerWasShown,enabled:this.enabled,groups:[]};return r.groups=i([],o(this.groups.values()),!1).map((function(r){return r.raw()})),r},r.prototype.reduceGroupsPred=function(r){var t,e;try{for(var i=n(this.groups),u=i.next();!u.done;u=i.next()){var a=o(u.value,2);if(a[0],r(a[1]))return!0}}catch(r){t={error:r}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return!1},r.prototype.forEachGroup=function(r){return this.groups.forEach((function(t){return r(t)})),this},r.prototype.getGroups=function(){return i([],o(this.groups.values()),!1)},r}();t.GdprManager=l},554:(r,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GdprManagerEventHub=void 0;var e=function(){function r(){this.eventMap={}}return r.prototype.onEnable=function(r,t){return this.addListener("enable",r,t),this},r.prototype.onDisable=function(r,t){return this.addListener("disable",r,t),this},r.prototype.enable=function(r){return this.executeListeners("enable",r),this},r.prototype.disable=function(r){return this.executeListeners("disable",r),this},r.prototype.tagFor=function(r,t){return"".concat(r,"--").concat(t)},r.prototype.addListener=function(r,t,e){var n=this.tagFor(r,t);n in this.eventMap||(this.eventMap[n]=[]),this.eventMap[n].push(e)},r.prototype.executeListeners=function(r,t){var e,n=this.tagFor(r,t);null===(e=this.eventMap[n])||void 0===e||e.forEach((function(r){return r()}))},r}();t.GdprManagerEventHub=e},670:(r,t)=>{var e;Object.defineProperty(t,"__esModule",{value:!0}),t.GdprStorage=void 0,function(r){r[r.None=1]="None",r[r.Cookie=2]="Cookie",r[r.LocalStorage=4]="LocalStorage",r[r.SessionStorage=8]="SessionStorage",r[r.IndexedDb=16]="IndexedDb",r[r.FileSystem=16]="FileSystem",r[r.ServerStorage=16]="ServerStorage",r[r.All=30]="All"}(e||(e={})),t.GdprStorage=e},860:function(r,t,e){var n,o=this&&this.__extends||(n=function(r,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},n(r,t)},function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=r}n(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),i=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},u=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.GdprGroupBuilder=void 0;var a=e(670),c=e(237),s=e(822),l=e(890),d=function(r){function t(t,e,n,o,i,u){var a=r.call(this)||this;return a.parent=t,a.name=e,a.description=n,a.enable=i,a.require=u,a.guards=[],a.storage=o,u&&(a.enable=!0),a}return o(t,r),t.create=function(r,e,n,o,i,u){return void 0===n&&(n=""),void 0===o&&(o=null),void 0===i&&(i=!0),void 0===u&&(u=!1),new t(r,e,n,o||a.GdprStorage.Cookie,i,u)},t.prototype.startGroup=function(t,e,n){return void 0===t&&(t=null),void 0===e&&(e=""),void 0===n&&(n=""),r.prototype.startGroup.call(this,t||this.parent.storage,e,n)},t.prototype.startRequiredGroup=function(r,t,e){return void 0===r&&(r=null),void 0===t&&(t=""),void 0===e&&(e=""),this.startGroup(r,t,e).required()},t.prototype.endGroup=function(){var r=this.require||this.enable,t=s.GdprGuardGroup.for(this.name,this.description,r,this.require);return u(u([],i(this.guards),!1),i(this.groups),!1).forEach((function(r){return t.addGuard(r)})),this.require&&t.makeRequired(),this.parent.groups.push(t),this.parent},t.prototype.withName=function(r){return this.edit((function(t){return t.name=r}))},t.prototype.withDescription=function(r){return this.edit((function(t){return t.description=r}))},t.prototype.storedIn=function(r){return this.edit((function(t){return t.storage=r}))},t.prototype.enabled=function(){return this.edit((function(r){return r.enable=!0}))},t.prototype.disabled=function(){return this.edit((function(r){return r.enable=!1}))},t.prototype.required=function(){return this.edit((function(r){return r.require=!0}))},t.prototype.startGuard=function(r){return void 0===r&&(r=null),l.GdprGuardBuilder.create(this,r||this.storage,this.enable)},t.prototype.startRequiredGuard=function(r){return this.startGuard(r).required()},t.prototype.withEnabledGuard=function(r,t,e){return void 0===t&&(t=""),void 0===e&&(e=null),this.startGuard(e).withName(r).withDescription(t).enabled().endGuard()},t.prototype.withDisabledGuard=function(r,t,e){return void 0===t&&(t=""),void 0===e&&(e=null),this.startGuard(e).withName(r).withDescription(t).disabled().endGuard()},t.prototype.edit=function(r){return r(this),this},t}(c.GdprManagerBuilder);t.GdprGroupBuilder=d},890:(r,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GdprGuardBuilder=void 0;var n=e(670),o=e(315),i=function(){function r(r,t,e,n){this.parent=r,this.storage=t,this.enable=e,this.require=n,this.name="",this.description="",n&&(this.enable=!0)}return r.create=function(t,e,o,i){return void 0===e&&(e=n.GdprStorage.Cookie),void 0===o&&(o=!1),void 0===i&&(i=!1),new r(t,e,o,i)},r.prototype.endGuard=function(){var r=this.require||this.enable,t=(0,o.makeGuard)(this.name,this.description,this.storage,this.require,r);return this.require&&t.makeRequired(),this.parent.guards.push(t),this.parent},r.prototype.withName=function(r){return this.edit((function(t){return t.name=r}))},r.prototype.withDescription=function(r){return this.edit((function(t){return t.description=r}))},r.prototype.enabled=function(){return this.edit((function(r){return r.enable=!0}))},r.prototype.disabled=function(){return this.edit((function(r){return r.enable=!1}))},r.prototype.storedIn=function(r){return this.edit((function(t){return t.storage=r}))},r.prototype.required=function(){return this.edit((function(r){return r.require=!0}))},r.prototype.edit=function(r){return r(this),this},r}();t.GdprGuardBuilder=i},237:(r,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GdprManagerBuilder=void 0;var n=e(670),o=e(777),i=e(171),u=function(){function r(){this.storage=n.GdprStorage.Cookie,this.groups=[],this.bannerWasShown=!1}return r.make=function(){return new r},r.prototype.withBannerShown=function(r){void 0===r&&(r=!0),this.bannerWasShown=r},r.prototype.startGroup=function(r,t,e,n){return void 0===r&&(r=null),void 0===t&&(t=""),void 0===e&&(e=""),void 0===n&&(n=!0),i.GdprGroupBuilder.create(this,t,e,r,n,!1)},r.prototype.startRequiredGroup=function(r,t,e){return void 0===r&&(r=null),void 0===t&&(t=""),void 0===e&&(e=""),this.startEnabledGroup(r,t,e).required()},r.prototype.startEnabledGroup=function(r,t,e){return void 0===r&&(r=null),void 0===t&&(t=""),void 0===e&&(e=""),this.startGroup(r,t,e,!0).enabled()},r.prototype.startDisabledGroup=function(r,t,e){return void 0===r&&(r=null),void 0===t&&(t=""),void 0===e&&(e=""),this.startGroup(r,t,e,!1).disabled()},r.prototype.build=function(){var r=o.GdprManager.create(this.groups);return r.bannerWasShown=this.bannerWasShown,r},r.prototype.endGroup=function(){return this},r}();t.GdprManagerBuilder=u},171:function(r,t,e){var n=this&&this.__createBinding||(Object.create?function(r,t,e,n){void 0===n&&(n=e);var o=Object.getOwnPropertyDescriptor(t,e);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(r,n,o)}:function(r,t,e,n){void 0===n&&(n=e),r[n]=t[e]}),o=this&&this.__exportStar||function(r,t){for(var e in r)"default"===e||Object.prototype.hasOwnProperty.call(t,e)||n(t,r,e)};Object.defineProperty(t,"__esModule",{value:!0}),o(e(890),t),o(e(237),t),o(e(860),t)},93:function(r,t,e){var n=this&&this.__createBinding||(Object.create?function(r,t,e,n){void 0===n&&(n=e);var o=Object.getOwnPropertyDescriptor(t,e);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[e]}}),Object.defineProperty(r,n,o)}:function(r,t,e,n){void 0===n&&(n=e),r[n]=t[e]}),o=this&&this.__exportStar||function(r,t){for(var e in r)"default"===e||Object.prototype.hasOwnProperty.call(t,e)||n(t,r,e)};Object.defineProperty(t,"__esModule",{value:!0}),o(e(315),t),o(e(822),t),o(e(777),t),o(e(670),t),o(e(554),t),o(e(779),t),o(e(171),t),o(e(562),t),o(e(344),t)},562:(r,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GdprDeserializer=void 0;var n=e(777),o=e(670),i=e(822),u=e(315),a=function(){function r(){}return r.manager=function(r){var t=this;if(!["enabled","groups"].every((function(t){return t in r}))||"boolean"!=typeof r.enabled||!Array.isArray(r.groups))return null;var e=r.groups.map((function(r){return t.group(r)})).filter((function(r){return null!==r})),o=n.GdprManager.create([]);return o.enabled=!!r.enabled,o.bannerWasShown=!!r.bannerWasShown,e.length?(e.forEach((function(r){return o.addGroup(r)})),o):null},r.group=function(r){var t=this,e=this.guard(r);if(null===e)return null;var n=["guards"];if(!n.every((function(t){return t in r}))||!Array.isArray(r.guards))return null;var o=i.GdprGuardGroup.for(e.name,e.description,e.enabled,e.required),u=r.guards.map((function(r){return n.every((function(t){return t in r}))?t.group(r):t.guard(r)})).filter((function(r){return null!==r}));return u.length?(u.forEach((function(r){return o.addGuard(r)})),o):null},r.guard=function(r){return["name","enabled","required","description","storage"].every((function(t){return t in r}))&&"string"==typeof r.name&&"boolean"==typeof r.enabled&&"boolean"==typeof r.required&&"string"==typeof r.description&&"number"==typeof r.storage&&r.storage in o.GdprStorage?(0,u.makeGuard)(r.name,r.description,r.storage,!!r.required,!!r.enabled):null},r}();t.GdprDeserializer=a},344:function(r,t){var e=this&&this.__awaiter||function(r,t,e,n){return new(e||(e=Promise))((function(o,i){function u(r){try{c(n.next(r))}catch(r){i(r)}}function a(r){try{c(n.throw(r))}catch(r){i(r)}}function c(r){var t;r.done?o(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(u,a)}c((n=n.apply(r,t||[])).next())}))},n=this&&this.__generator||function(r,t){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(r,u)}catch(r){i=[6,r],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GdprSaviorAdapter=void 0;var o=function(){function r(){}return r.prototype.exists=function(r){return void 0===r&&(r=!0),e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,this.restore(r)];case 1:return[2,null!==t.sent()]}}))}))},r.prototype.storeIfNotExists=function(r){return e(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,this.exists()];case 1:return[2,!!t.sent()||this.store(r)]}}))}))},r.prototype.restoreOrCreate=function(r){return e(this,void 0,void 0,(function(){var t,e;return n(this,(function(n){switch(n.label){case 0:return[4,this.restore()];case 1:return(t=n.sent())?[3,3]:[4,r()];case 2:return e=n.sent(),this.updateSharedManager(e),e.bannerWasShown&&e.closeBanner(),[2,e];case 3:return t.bannerWasShown&&t.closeBanner(),[2,t]}}))}))},r.prototype.check=function(){return e(this,void 0,void 0,(function(){var r=this;return n(this,(function(t){switch(t.label){case 0:return[4,Promise.resolve()];case 1:return t.sent(),setTimeout((function(){r.exists(!0)}),100),[2]}}))}))},r}();t.GdprSaviorAdapter=o},779:(r,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.visitGdpr=void 0;var n=e(777),o=e(822);t.visitGdpr=function(r,e){var i=void 0===e?{}:e,u=i.onManager,a=void 0===u?function(){}:u,c=i.onGroup,s=void 0===c?function(){}:c,l=i.onGuard,d=void 0===l?function(){}:l,f=i.onEach,p=void 0===f?function(){}:f,h={onManager:a,onGroup:s,onGuard:d,onEach:p};r instanceof n.GdprManager?(a(r),p(r),r.getGroups().forEach((function(r){return(0,t.visitGdpr)(r,h)}))):r instanceof o.GdprGuardGroup?(s(r),p(r),r.getGuards().forEach((function(r){return(0,t.visitGdpr)(r,h)}))):(d(r),p(r))}}},t={};return function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n].call(i.exports,i,i.exports,e),i.exports}(93)})(),r.exports=t()}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n].call(i.exports,i,i.exports,e),i.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var n={};return(()=>{"use strict";e.r(n),e.d(n,{HtmlGdprGuardError:()=>o,NoCheckboxError:()=>d,NoManagerDefinitionError:()=>u,NoNameError:()=>s,restoreHtmlGdprManager:()=>O});var r,t=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=function(r){function e(t){return r.call(this,t)||this}return t(e,r),e}(Error),i=function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},r(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),u=function(r){function t(e){return void 0===e&&(e=t.defaultMessage),r.call(this,e)||this}return i(t,r),t.defaultMessage="No definition found for the GDPR manager",t}(o),a=e(845),c=function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},r(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),s=function(r){function t(e){return void 0===e&&(e=t.defaultMessage),r.call(this,e)||this}return c(t,r),t.defaultMessage="Guard definition is missing the guard's name",t}(o),l=function(){var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},r(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),d=function(r){function t(e){return void 0===e&&(e=t.defaultMessage),r.call(this,e)||this}return l(t,r),t.defaultMessage="No checkbox found for that guard",t}(o),f=function(r){return!!r&&!/^\s*$/.test(r)},p=function(r,t,e){void 0===e&&(e="gdpr-guard-name");var n=r.dataset[function(r){return r.replace(/-(\w)/g,(function(r,t){return t.toUpperCase()}))}(t)];if(f(n))return n.trim();var o,i,u=(o=r,i="[data-".concat(e,"]"),function(r,t){for(var e=0;e<r.childElementCount;e+=1){var n=r.children.item(e);if(n&&t(n))return n}return null}(o,(function(r){return r.matches(i)}))),a=null==u?void 0:u.dataset[e];if(!f(a)){var c=null==u?void 0:u.textContent;if(f(c))return c.trim();throw new s}return a.trim()},h=function(r,t){var e,n,o,i=[function(){return document.getElementById(t)},function(){return r.querySelector('[type="checkbox"][name="'.concat(t,'"]'))},function(){return r.querySelector('[type="checkbox"][data-gdpr-checkbox]')}];try{for(var u=function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(i),a=u.next();!a.done;a=u.next()){var c=(0,a.value)();if(null===(o=null==c?void 0:c.matches)||void 0===o?void 0:o.call(c,"input[type='checkbox']"))return c}}catch(r){e={error:r}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(e)throw e.error}}throw new d},v=function(r){var t;if(r.hasAttribute("data-gdpr-guard-description"))return r.dataset.gdprGuardDescription;var e=r.querySelector("[data-gdpr-guard-description]");return null!==(t=null==e?void 0:e.textContent)&&void 0!==t?t:null},y=function(r){if(r.hasAttribute("data-gdpr-guard-storage")){var t=r.dataset.gdprGuardStorage;if(t&&t in a.GdprStorage)return a.GdprStorage[t]}return null},b=function(r,t){return t.required||r.hasAttribute("data-gdpr-guard-required")},g=function(r,t,e){void 0===e&&(e=!1);var n=function(){t.setAttribute("checked","checked"),t.setAttribute("disabled","disabled")},o=function(){t.setAttribute("required","required")},i=function(){r.setAttribute("data-gdpr-guard-required","")};e?(i(),n(),o()):t.required?(i(),n()):r.hasAttribute("data-gdpr-guard-required")&&(n(),o())},G=function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},w=function(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))},m=function(r,t,e){var n=t.startGroup(),o=p(r,"gdpr-group");n.withName(o);var i=h(r,o),u=[{name:o,checkbox:i}],a=e||b(r,i);g(r,i,a),a?n.required().enabled():i.checked?n.enabled():n.disabled();var c=v(r);c&&n.withDescription(c);var s=y(r);null!==s&&n.storedIn(s);var l=S(r,n,a);return n.endGroup(),u.push.apply(u,w([],G(l),!1)),u},S=function(r,t,e){void 0===e&&(e=!1);var n=[];return function(r,t){for(var e=0;e<r.childElementCount;e+=1){var n=r.children.item(e);n&&t(n)}}(r,(function(r){if(null==r?void 0:r.matches("[data-gdpr-group]")){var o=m(r,t,e);n.push.apply(n,w([],G(o),!1))}else if(null==r?void 0:r.matches("[data-gdpr-guard]")){var i=function(r,t,e){var n=t.startGuard(),o=p(r,"gdpr-guard");n.withName(o);var i=h(r,o),u=e||b(r,i);g(r,i,u),u?n.required().enabled():i.checked?n.enabled():n.disabled();var a=v(r);a&&n.withDescription(a);var c=y(r);return null!==c&&n.storedIn(c),n.endGuard(),{name:o,checkbox:i}}(r,t,e);n.push(i)}})),n},_={events:{},on:function(r,t,e){var n,o=this;if(r in this.events){var i=this.events[r];t in i||(i[t]=[]),i[t].push(e)}else this.events[r]=((n={})[t]=[e],n),window.addEventListener(r,(function(t){Object.entries(o.events[r]).forEach((function(r){var e,n=function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}(r,2),o=n[0],i=n[1],u=t.target;(null===(e=null==u?void 0:u.matches)||void 0===e?void 0:e.call(u,o))&&i.forEach((function(r){return r(t)}))}))}))}},E=function(r,t,e){document.querySelectorAll(t).forEach((function(t){var n=t.dataset.gdprOnEnable;r.hasGuard(n)?r.events.onEnable(n,(function(){var r=t.matches("script"),n=r?document.createElement("script"):t.cloneNode(!0);r&&t.getAttributeNames().forEach((function(r){var e=t.getAttribute(r);n.setAttribute(r,e)})),e(n),n.removeAttribute("data-gdpr-on-enable"),t.remove(),document.head.appendChild(n)})):t.remove()}))},x=function(r,t,e,n){return new(e||(e=Promise))((function(o,i){function u(r){try{c(n.next(r))}catch(r){i(r)}}function a(r){try{c(n.throw(r))}catch(r){i(r)}}function c(r){var t;r.done?o(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(u,a)}c((n=n.apply(r,t||[])).next())}))},k=function(r,t){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(r,u)}catch(r){i=[6,r],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},O=function(r,t){var e=void 0===t?{}:t,n=e.gdprEl,o=void 0===n?void 0:n,i=e.autoCloseBanner,c=void 0===i||i,s=e.bindEventHandlersHook,l=void 0===s?function(){}:s,d=e.addGuardsBeforeHook,v=void 0===d?function(){}:d,y=e.addGuardsAfterHook,b=void 0===y?function(){}:y,g=e.onDeclineAllErrorHook,G=void 0===g?function(r,t){return console.error("[HtmlGdprGuard @ onDeclineAllErrorHook]",{didStore:r,err:t})}:g,w=e.onAllowAllErrorHook,S=void 0===w?function(r,t){return console.error("[HtmlGdprGuard @ onAllowAllErrorHook]",{didStore:r,err:t})}:w,O=e.onSaveErrorHook,A=void 0===O?function(r,t){return console.error("[HtmlGdprGuard @ onSaveErrorHook]",{didStore:r,err:t})}:O,q=e.onCancelErrorHook,M=void 0===q?function(r,t){return console.error("[HtmlGdprGuard @ onCancelErrorHook]",{didStore:r,err:t})}:q,j=e.onBannerClose,P=void 0===j?function(){}:j,C=e.onBannerOpen,H=void 0===C?function(){}:C;return x(void 0,void 0,void 0,(function(){var t,e,n,i,s,d,y,g,w;return k(this,(function(O){switch(O.label){case 0:if(void 0===o&&void 0===(o=null!==(w=document.querySelector("[data-gdpr]"))&&void 0!==w?w:void 0))throw new u;return t=function(r){var t=r,e=r.dataset.gdpr,n="";if(f(e))n=e;else{var o=r.querySelector("[data-gdpr-manager]");if(!o)throw new u;n=p(t=o,"gdpr-manager")}return{managerEl:t,managerCheckbox:h(t,n),managerName:n}}(o),e=t.managerEl,n=t.managerCheckbox,i=a.GdprManagerBuilder.make(),v(i),s=function(r,t){return(e=r,"[data-gdpr-group]",function(r,t){for(var e=[],n=0;n<r.childElementCount;n+=1){var o=r.children.item(n);o&&t(o)&&e.push(o)}return e}(e,(function(r){return r.matches("[data-gdpr-group]")}))).flatMap((function(r){return m(r,t,!1)}));var e}(e,i),b(i),d=function(){return x(void 0,void 0,void 0,(function(){return k(this,(function(r){return[2,i.build()]}))}))},[4,r.exists(!1)];case 1:return y=O.sent(),[4,r.restoreOrCreate(d)];case 2:return function(r){E(r,"script[type='text'][src][data-gdpr-on-enable]",(function(r){r.setAttribute("type","text/javascript")}))}(g=O.sent()),function(r){E(r,"link[href][data-gdpr-on-enable]",(function(r){r.setAttribute("rel","stylesheet")}))}(g),function(r,t,e,n){var o=function(r,t){n&&(r.checked&&!t.enabled||!r.checked&&t.enabled)&&r.click()};o(t,r),t.addEventListener("click",(function(){r.toggle()})),e.forEach((function(t){var e=t.name,n=t.checkbox,i=r.getGuard(e);o(n,i),n.addEventListener("click",(function(){i.toggle()}))}))}(g,n,s,y),function(r,t,e,n){var o=function(){r.closeBanner(),e.onBannerClose()};_.on("click","[data-gdpr-open]",(function(t){t.preventDefault(),r.resetAndShowBanner(),e.onBannerOpen()})),_.on("click","[data-gdpr-decline-all]",(function(n){n.preventDefault(),r.disable(),t.store(r.raw()).then((function(r){r?o():e.onDeclineAllErrorHook(r)})).catch((function(r){return e.onDeclineAllErrorHook(!1,r)}))})),_.on("click","[data-gdpr-allow-all]",(function(n){n.preventDefault(),r.enable(),t.store(r.raw()).then((function(r){r?o():e.onAllowAllErrorHook(r)})).catch((function(r){return e.onAllowAllErrorHook(!1,r)}))})),_.on("click","[data-gdpr-cancel]",(function(r){var o,i,u,a;r.preventDefault(),o=void 0,i=void 0,a=function(){var r;return function(r,t){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(r,u)}catch(r){i=[6,r],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(o){switch(o.label){case 0:return o.trys.push([0,6,,7]),[4,t.exists(!1)];case 1:return o.sent()?[4,t.restore(!0)]:[3,3];case 2:return o.sent(),[3,5];case 3:return[4,t.restoreOrCreate(n)];case 4:o.sent(),o.label=5;case 5:return[3,7];case 6:return r=o.sent(),e.onCancelErrorHook(!0,r),[3,7];case 7:return[2]}}))},new((u=void 0)||(u=Promise))((function(r,t){function e(r){try{c(a.next(r))}catch(r){t(r)}}function n(r){try{c(a.throw(r))}catch(r){t(r)}}function c(t){var o;t.done?r(t.value):(o=t.value,o instanceof u?o:new u((function(r){r(o)}))).then(e,n)}c((a=a.apply(o,i||[])).next())}))})),_.on("click","[data-gdpr-save]",(function(n){n.preventDefault(),t.store(r.raw()).then((function(r){r?o():e.onSaveErrorHook(r)})).catch((function(r){return e.onSaveErrorHook(r)}))}))}(g,r,{onDeclineAllErrorHook:G,onAllowAllErrorHook:S,onSaveErrorHook:A,onCancelErrorHook:M,onBannerClose:P,onBannerOpen:H},d),l(g.events),c&&g.bannerWasShown?(g.closeBanner(),P()):(g.resetAndShowBanner(),H()),[2,g]}}))}))}})(),n})()));
//# sourceMappingURL=index.js.map