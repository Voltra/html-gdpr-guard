(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["htmlGdprGuard"] = factory();
	else
		root["htmlGdprGuard"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gdpr-guard/dist/gdpr_guard.js":
/*!****************************************************!*\
  !*** ./node_modules/gdpr-guard/dist/gdpr_guard.js ***!
  \****************************************************/
/***/ ((module) => {

!function(t,r){ true?module.exports=r():0}(self,(function(){return(()=>{"use strict";var t={315:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.makeGuard=void 0;var n=e(670);r.makeGuard=function(t,r,e,o,i){return void 0===e&&(e=n.GdprStorage.Cookie),void 0===o&&(o=!1),void 0===i&&(i=null),{name:t,description:r,storage:e,required:o,enabled:null===i?o:i,enable:function(){return this.enabled||this.toggle(),this},disable:function(){return this.enabled&&this.toggle(),this},toggle:function(){return this.required||(this.enabled=!this.enabled),this},makeRequired:function(){return this.required=!0,this.enabled=!0,this},isEnabled:function(t){return this.name===t&&this.enabled},enableForStorage:function(t){return this.enabled||this.toggleForStorage(t),this},disableForStorage:function(t){return this.enabled&&this.toggleForStorage(t),this},toggleForStorage:function(t){return this.storage!=t||this.required||this.toggle(),this},raw:function(){return JSON.parse(JSON.stringify(this))}}}},822:function(t,r,e){var n=this&&this.__values||function(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},i=this&&this.__spreadArray||function(t,r,e){if(e||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.GdprGuardGroup=void 0;var u=e(670),a=function(){function t(t,r,e,n){void 0===r&&(r=""),void 0===e&&(e=!1),void 0===n&&(n=!1),this.name=t,this.description=r,this.enabled=e,this.required=n,this.storage=u.GdprStorage.None,this.bindings=new Map,this.required&&(this.enabled=!0)}return t.for=function(r,e,n,o){return void 0===e&&(e=""),void 0===n&&(n=!1),void 0===o&&(o=!1),new t(r,e,n,o)},t.prototype.addGuard=function(t){return this.bindings.set(t.name,t),this},t.prototype.hasGuard=function(t){return this.name===t||this.bindings.has(t)},t.prototype.getGuard=function(t){return this.name===t?this:this.bindings.get(t)||null},t.prototype.isEnabled=function(t){var r,e;if(this.hasGuard(t)&&null!==(a=this.getGuard(t)))return a.enabled;try{for(var i=n(this.bindings),u=i.next();!u.done;u=i.next()){var a,s=o(u.value,2);if(s[0],(a=s[1]).isEnabled(t))return!0}}catch(t){r={error:t}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return!1},t.prototype.enable=function(){return this.required?this:(this.enabled=!0,this.doForEachGuard((function(t){return t.enable()})))},t.prototype.disable=function(){return this.required?this:(this.enabled=!1,this.doForEachGuard((function(t){return t.disable()})))},t.prototype.toggle=function(){return this.enabled?this.disable():this.enable()},t.prototype.makeRequired=function(){return this.required=!0,this.enabled=!0,this.doForEachGuard((function(t){return t.makeRequired()}))},t.prototype.enableForStorage=function(t){return this.doForEachGuard((function(r){r.storage&t&&r.enable()}))},t.prototype.disableForStorage=function(t){return this.doForEachGuard((function(r){r.storage&t&&r.disable()}))},t.prototype.toggleForStorage=function(t){return this.doForEachGuard((function(r){if(r.storage&t)return r.toggle()}))},t.prototype.raw=function(){var t={name:this.name,description:this.description,enabled:this.enabled,required:this.required,storage:this.storage,guards:[]};return t.guards=i([],o(this.bindings),!1).map((function(t){var r=o(t,2);return r[0],r[1].raw()})),t},t.prototype.doForEachGuard=function(t){return this.bindings.forEach((function(r){return t(r)})),this},t.prototype.getGuards=function(){return i([],o(this.bindings.values()),!1)},t}();r.GdprGuardGroup=a},777:function(t,r,e){var n=this&&this.__values||function(t){var r="function"==typeof Symbol&&Symbol.iterator,e=r&&t[r],n=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},i=this&&this.__spreadArray||function(t,r,e){if(e||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.GdprManager=void 0;var u=e(822),a=e(670),s=e(554),d=e(779),c=function(){function t(){this.bannerWasShown=!1,this.enabled=!0,this.events=new s.GdprManagerEventHub,this.groups=new Map,this.name="manager",this.description="Manager of GDPR guard groups",this.storage=a.GdprStorage.None,this.required=!1}return t.create=function(r){void 0===r&&(r=[]);var e=new t;return r.forEach((function(t){return e.addGroup(t)})),e},t.prototype.closeBanner=function(){var t=this;this.bannerWasShown=!0,(0,d.visitGdpr)(this,{onEach:function(r){r.enabled?t.events.enable(r.name):t.events.disable(r.name)}})},t.prototype.resetAndShowBanner=function(){this.bannerWasShown=!1},t.prototype.createGroup=function(t,r){return void 0===r&&(r=""),this.addGroup(u.GdprGuardGroup.for(t,r))},t.prototype.addGroup=function(t){return this.groups.set(t.name,t),this},t.prototype.hasGuard=function(t){return this.reduceGroupsPred((function(r){return r.hasGuard(t)}))},t.prototype.getGuard=function(t){var r,e;try{for(var i=n(this.groups),u=i.next();!u.done;u=i.next()){var a=o(u.value,2),s=(a[0],a[1]);if(s.hasGuard(t))return s.getGuard(t)}}catch(t){r={error:t}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return null},t.prototype.hasGroup=function(t){return this.reduceGroupsPred((function(r){return r.name===t}))},t.prototype.getGroup=function(t){var r,e;try{for(var i=n(this.groups),u=i.next();!u.done;u=i.next()){var a=o(u.value,2),s=a[0],d=a[1];if(s===t)return d}}catch(t){r={error:t}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return null},t.prototype.isEnabled=function(t){return this.reduceGroupsPred((function(r){return r.isEnabled(t)}))},t.prototype.enable=function(){return this.enabled=!0,this.forEachGroup((function(t){return t.enable()}))},t.prototype.disable=function(){return this.enabled=!1,this.forEachGroup((function(t){return t.disable()}))},t.prototype.toggle=function(){return this.enabled?this.disable():this.enable()},t.prototype.makeRequired=function(){return this},t.prototype.enableForStorage=function(t){return this.forEachGroup((function(r){return r.enableForStorage(t)}))},t.prototype.disableForStorage=function(t){return this.forEachGroup((function(r){return r.disableForStorage(t)}))},t.prototype.toggleForStorage=function(t){return this.forEachGroup((function(r){return r.toggleForStorage(t)}))},t.prototype.raw=function(){var t={bannerWasShown:this.bannerWasShown,enabled:this.enabled,groups:[]};return t.groups=i([],o(this.groups.values()),!1).map((function(t){return t.raw()})),t},t.prototype.reduceGroupsPred=function(t){var r,e;try{for(var i=n(this.groups),u=i.next();!u.done;u=i.next()){var a=o(u.value,2);if(a[0],t(a[1]))return!0}}catch(t){r={error:t}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(r)throw r.error}}return!1},t.prototype.forEachGroup=function(t){return this.groups.forEach((function(r){return t(r)})),this},t.prototype.getGroups=function(){return i([],o(this.groups.values()),!1)},t}();r.GdprManager=c},554:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.GdprManagerEventHub=void 0;var e=function(){function t(){this.eventMap={}}return t.prototype.onEnable=function(t,r){return this.addListener("enable",t,r),this},t.prototype.onDisable=function(t,r){return this.addListener("disable",t,r),this},t.prototype.enable=function(t){return this.executeListeners("enable",t),this},t.prototype.disable=function(t){return this.executeListeners("disable",t),this},t.prototype.tagFor=function(t,r){return"".concat(t,"--").concat(r)},t.prototype.addListener=function(t,r,e){var n=this.tagFor(t,r);n in this.eventMap||(this.eventMap[n]=[]),this.eventMap[n].push(e)},t.prototype.executeListeners=function(t,r){var e,n=this.tagFor(t,r);null===(e=this.eventMap[n])||void 0===e||e.forEach((function(t){return t()}))},t}();r.GdprManagerEventHub=e},670:(t,r)=>{var e;Object.defineProperty(r,"__esModule",{value:!0}),r.GdprStorage=void 0,function(t){t[t.None=1]="None",t[t.Cookie=2]="Cookie",t[t.LocalStorage=4]="LocalStorage",t[t.SessionStorage=8]="SessionStorage",t[t.IndexedDb=16]="IndexedDb",t[t.FileSystem=16]="FileSystem",t[t.ServerStorage=16]="ServerStorage",t[t.All=30]="All"}(e||(e={})),r.GdprStorage=e},860:function(t,r,e){var n,o=this&&this.__extends||(n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])},n(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),i=this&&this.__read||function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,i=e.call(t),u=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u},u=this&&this.__spreadArray||function(t,r,e){if(e||2===arguments.length)for(var n,o=0,i=r.length;o<i;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return t.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.GdprGroupBuilder=void 0;var a=e(670),s=e(237),d=e(822),c=e(890),p=function(t){function r(r,e,n,o,i,u){var a=t.call(this)||this;return a.parent=r,a.name=e,a.description=n,a.enable=i,a.require=u,a.guards=[],a.storage=o,u&&(a.enable=!0),a}return o(r,t),r.create=function(t,e,n,o,i,u){return void 0===n&&(n=""),void 0===o&&(o=null),void 0===i&&(i=!0),void 0===u&&(u=!1),new r(t,e,n,o||a.GdprStorage.Cookie,i,u)},r.prototype.startGroup=function(r,e,n){return void 0===r&&(r=null),void 0===e&&(e=""),void 0===n&&(n=""),t.prototype.startGroup.call(this,r||this.parent.storage,e,n)},r.prototype.startRequiredGroup=function(t,r,e){return void 0===t&&(t=null),void 0===r&&(r=""),void 0===e&&(e=""),this.startGroup(t,r,e).required()},r.prototype.endGroup=function(){var t=this.require||this.enable,r=d.GdprGuardGroup.for(this.name,this.description,t,this.require);return u(u([],i(this.guards),!1),i(this.groups),!1).forEach((function(t){return r.addGuard(t)})),this.require&&r.makeRequired(),this.parent.groups.push(r),this.parent},r.prototype.withName=function(t){return this.edit((function(r){return r.name=t}))},r.prototype.withDescription=function(t){return this.edit((function(r){return r.description=t}))},r.prototype.storedIn=function(t){return this.edit((function(r){return r.storage=t}))},r.prototype.enabled=function(){return this.edit((function(t){return t.enable=!0}))},r.prototype.disabled=function(){return this.edit((function(t){return t.enable=!1}))},r.prototype.required=function(){return this.edit((function(t){return t.require=!0}))},r.prototype.startGuard=function(t){return void 0===t&&(t=null),c.GdprGuardBuilder.create(this,t||this.storage,this.enable)},r.prototype.startRequiredGuard=function(t){return this.startGuard(t).required()},r.prototype.withEnabledGuard=function(t,r,e){return void 0===r&&(r=""),void 0===e&&(e=null),this.startGuard(e).withName(t).withDescription(r).enabled().endGuard()},r.prototype.withDisabledGuard=function(t,r,e){return void 0===r&&(r=""),void 0===e&&(e=null),this.startGuard(e).withName(t).withDescription(r).disabled().endGuard()},r.prototype.edit=function(t){return t(this),this},r}(s.GdprManagerBuilder);r.GdprGroupBuilder=p},890:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.GdprGuardBuilder=void 0;var n=e(670),o=e(315),i=function(){function t(t,r,e,n){this.parent=t,this.storage=r,this.enable=e,this.require=n,this.name="",this.description="",n&&(this.enable=!0)}return t.create=function(r,e,o,i){return void 0===e&&(e=n.GdprStorage.Cookie),void 0===o&&(o=!1),void 0===i&&(i=!1),new t(r,e,o,i)},t.prototype.endGuard=function(){var t=this.require||this.enable,r=(0,o.makeGuard)(this.name,this.description,this.storage,this.require,t);return this.require&&r.makeRequired(),this.parent.guards.push(r),this.parent},t.prototype.withName=function(t){return this.edit((function(r){return r.name=t}))},t.prototype.withDescription=function(t){return this.edit((function(r){return r.description=t}))},t.prototype.enabled=function(){return this.edit((function(t){return t.enable=!0}))},t.prototype.disabled=function(){return this.edit((function(t){return t.enable=!1}))},t.prototype.storedIn=function(t){return this.edit((function(r){return r.storage=t}))},t.prototype.required=function(){return this.edit((function(t){return t.require=!0}))},t.prototype.edit=function(t){return t(this),this},t}();r.GdprGuardBuilder=i},237:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.GdprManagerBuilder=void 0;var n=e(670),o=e(777),i=e(171),u=function(){function t(){this.storage=n.GdprStorage.Cookie,this.groups=[],this.bannerWasShown=!1}return t.make=function(){return new t},t.prototype.withBannerShown=function(t){void 0===t&&(t=!0),this.bannerWasShown=t},t.prototype.startGroup=function(t,r,e,n){return void 0===t&&(t=null),void 0===r&&(r=""),void 0===e&&(e=""),void 0===n&&(n=!0),i.GdprGroupBuilder.create(this,r,e,t,n,!1)},t.prototype.startRequiredGroup=function(t,r,e){return void 0===t&&(t=null),void 0===r&&(r=""),void 0===e&&(e=""),this.startEnabledGroup(t,r,e).required()},t.prototype.startEnabledGroup=function(t,r,e){return void 0===t&&(t=null),void 0===r&&(r=""),void 0===e&&(e=""),this.startGroup(t,r,e,!0).enabled()},t.prototype.startDisabledGroup=function(t,r,e){return void 0===t&&(t=null),void 0===r&&(r=""),void 0===e&&(e=""),this.startGroup(t,r,e,!1).disabled()},t.prototype.build=function(){var t=o.GdprManager.create(this.groups);return t.bannerWasShown=this.bannerWasShown,t},t.prototype.endGroup=function(){return this},t}();r.GdprManagerBuilder=u},171:function(t,r,e){var n=this&&this.__createBinding||(Object.create?function(t,r,e,n){void 0===n&&(n=e);var o=Object.getOwnPropertyDescriptor(r,e);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,n,o)}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]}),o=this&&this.__exportStar||function(t,r){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(r,e)||n(r,t,e)};Object.defineProperty(r,"__esModule",{value:!0}),o(e(890),r),o(e(237),r),o(e(860),r)},93:function(t,r,e){var n=this&&this.__createBinding||(Object.create?function(t,r,e,n){void 0===n&&(n=e);var o=Object.getOwnPropertyDescriptor(r,e);o&&!("get"in o?!r.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(t,n,o)}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]}),o=this&&this.__exportStar||function(t,r){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(r,e)||n(r,t,e)};Object.defineProperty(r,"__esModule",{value:!0}),o(e(315),r),o(e(822),r),o(e(777),r),o(e(670),r),o(e(779),r),o(e(171),r),o(e(562),r),o(e(344),r)},562:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.GdprDeserializer=void 0;var n=e(777),o=e(670),i=e(822),u=e(315),a=function(){function t(){}return t.manager=function(t){var r=this;if(!["enabled","groups"].every((function(r){return r in t}))||"boolean"!=typeof t.enabled||!Array.isArray(t.groups))return null;var e=t.groups.map((function(t){return r.group(t)})).filter((function(t){return null!==t})),o=n.GdprManager.create([]);return o.enabled=!!t.enabled,o.bannerWasShown=!!t.bannerWasShown,e.length?(e.forEach((function(t){return o.addGroup(t)})),o):null},t.group=function(t){var r=this,e=this.guard(t);if(null===e)return null;var n=["guards"];if(!n.every((function(r){return r in t}))||!Array.isArray(t.guards))return null;var o=i.GdprGuardGroup.for(e.name,e.description,e.enabled,e.required),u=t.guards.map((function(t){return n.every((function(r){return r in t}))?r.group(t):r.guard(t)})).filter((function(t){return null!==t}));return u.length?(u.forEach((function(t){return o.addGuard(t)})),o):null},t.guard=function(t){return["name","enabled","required","description","storage"].every((function(r){return r in t}))&&"string"==typeof t.name&&"boolean"==typeof t.enabled&&"boolean"==typeof t.required&&"string"==typeof t.description&&"number"==typeof t.storage&&t.storage in o.GdprStorage?(0,u.makeGuard)(t.name,t.description,t.storage,!!t.required,!!t.enabled):null},t}();r.GdprDeserializer=a},344:function(t,r){var e=this&&this.__awaiter||function(t,r,e,n){return new(e||(e=Promise))((function(o,i){function u(t){try{s(n.next(t))}catch(t){i(t)}}function a(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(u,a)}s((n=n.apply(t,r||[])).next())}))},n=this&&this.__generator||function(t,r){var e,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=r.call(t,u)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(r,"__esModule",{value:!0}),r.GdprSaviorAdapter=void 0;var o=function(){function t(){}return t.prototype.exists=function(t){return void 0===t&&(t=!0),e(this,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,this.restore(t)];case 1:return[2,null!==r.sent()]}}))}))},t.prototype.storeIfNotExists=function(t){return e(this,void 0,void 0,(function(){return n(this,(function(r){switch(r.label){case 0:return[4,this.exists()];case 1:return[2,!!r.sent()||this.store(t)]}}))}))},t.prototype.restoreOrCreate=function(t){return e(this,void 0,void 0,(function(){var r,e;return n(this,(function(n){switch(n.label){case 0:return[4,this.restore()];case 1:return(r=n.sent())?[3,3]:[4,t()];case 2:return e=n.sent(),this.updateSharedManager(e),e.bannerWasShown&&e.closeBanner(),[2,e];case 3:return r.bannerWasShown&&r.closeBanner(),[2,r]}}))}))},t.prototype.check=function(){return e(this,void 0,void 0,(function(){var t=this;return n(this,(function(r){switch(r.label){case 0:return[4,Promise.resolve()];case 1:return r.sent(),setTimeout((function(){t.exists(!0)}),100),[2]}}))}))},t}();r.GdprSaviorAdapter=o},779:(t,r,e)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.visitGdpr=void 0;var n=e(777),o=e(822);r.visitGdpr=function(t,e){var i=void 0===e?{}:e,u=i.onManager,a=void 0===u?function(){}:u,s=i.onGroup,d=void 0===s?function(){}:s,c=i.onGuard,p=void 0===c?function(){}:c,l=i.onEach,f=void 0===l?function(){}:l,h={onManager:a,onGroup:d,onGuard:p,onEach:f};t instanceof n.GdprManager?(a(t),f(t),t.getGroups().forEach((function(t){return(0,r.visitGdpr)(t,h)}))):t instanceof o.GdprGuardGroup?(d(t),f(t),t.getGuards().forEach((function(t){return(0,r.visitGdpr)(t,h)}))):(p(t),f(t))}}},r={};return function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}(93)})()}));

/***/ }),

/***/ "./src/domainLogic/dataExtractors.ts":
/*!*******************************************!*\
  !*** ./src/domainLogic/dataExtractors.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxFromDOM": () => (/* binding */ checkboxFromDOM),
/* harmony export */   "descriptionFromDOM": () => (/* binding */ descriptionFromDOM),
/* harmony export */   "guardIsRequiredInDOM": () => (/* binding */ guardIsRequiredInDOM),
/* harmony export */   "nameFromDOM": () => (/* binding */ nameFromDOM),
/* harmony export */   "parseManagerDetails": () => (/* binding */ parseManagerDetails),
/* harmony export */   "storageFromDOM": () => (/* binding */ storageFromDOM)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _errors_NoNameError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/errors/NoNameError */ "./src/errors/NoNameError.ts");
/* harmony import */ var _errors_NoCheckboxError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/errors/NoCheckboxError */ "./src/errors/NoCheckboxError.ts");
/* harmony import */ var gdpr_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gdpr-guard */ "./node_modules/gdpr-guard/dist/gdpr_guard.js");
/* harmony import */ var gdpr_guard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gdpr_guard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _errors_NoManagerDefinitionError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/errors/NoManagerDefinitionError */ "./src/errors/NoManagerDefinitionError.ts");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};






/**
 * Get the guard's name from the DOM
 * @param guardEl - The guard element to query
 * @param guardDataKey - The key in the dataset of {@link guardEl} where the name could be
 * @param nameDataKey - The name of the data attribute that can be found in child nodes to parse the name
 * @throws {NoNameError} - If it can't find the guard's name
 */
var nameFromDOM = function (guardEl, guardDataKey, nameDataKey) {
    if (nameDataKey === void 0) { nameDataKey = "gdpr-guard-name"; }
    var str = guardEl.dataset[(0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.toCamelCase)(guardDataKey)];
    if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.isMeaningfulStr)(str)) {
        return str.trim();
    }
    // const nameHolder: HTMLElement|null = guardEl.querySelector(`[data-${nameDataKey}]`);
    var nameHolder = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.childSelector)(guardEl, "[data-".concat(nameDataKey, "]"));
    var name = nameHolder === null || nameHolder === void 0 ? void 0 : nameHolder.dataset[nameDataKey];
    if (!(0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.isMeaningfulStr)(name)) {
        var textName = nameHolder === null || nameHolder === void 0 ? void 0 : nameHolder.textContent;
        if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.isMeaningfulStr)(textName)) {
            return textName.trim();
        }
        throw new _errors_NoNameError__WEBPACK_IMPORTED_MODULE_1__.NoNameError();
    }
    return name.trim();
};
/**
 * Get the guard's checkbox from the DOM
 * @param guardEl - The root of the guard's tree
 * @param guardName - The guard's name
 */
var checkboxFromDOM = function (guardEl, guardName) {
    var e_1, _a;
    var _b;
    var strategies = [
        function () { return document.getElementById(guardName); },
        function () { return guardEl.querySelector("[type=\"checkbox\"][name=\"".concat(guardName, "\"]")); },
        function () { return guardEl.querySelector("[data-gdpr-checkbox]"); },
    ];
    try {
        for (var strategies_1 = __values(strategies), strategies_1_1 = strategies_1.next(); !strategies_1_1.done; strategies_1_1 = strategies_1.next()) {
            var strategy = strategies_1_1.value;
            var checkbox = strategy();
            if ((_b = checkbox === null || checkbox === void 0 ? void 0 : checkbox.matches) === null || _b === void 0 ? void 0 : _b.call(checkbox, "input[type='checkbox']")) {
                return checkbox;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (strategies_1_1 && !strategies_1_1.done && (_a = strategies_1.return)) _a.call(strategies_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    throw new _errors_NoCheckboxError__WEBPACK_IMPORTED_MODULE_2__.NoCheckboxError();
};
/**
 * Retrieve the guard's description from the DOM
 * @param guardEl - The root of the guard's state tree
 */
var descriptionFromDOM = function (guardEl) {
    var _a;
    if (guardEl.hasAttribute("data-gdpr-guard-description")) {
        return guardEl.dataset.gdprGuardDescription;
    }
    var descriptionEl = guardEl.querySelector("[data-gdpr-guard-description]");
    return (_a = descriptionEl === null || descriptionEl === void 0 ? void 0 : descriptionEl.textContent) !== null && _a !== void 0 ? _a : null;
};
/**
 * Get the {@link GdprStorage} from the DOM
 * @param guardEl - The root the guard's state tree
 */
var storageFromDOM = function (guardEl) {
    if (guardEl.hasAttribute("data-gdpr-guard-storage")) {
        var rawStorage = guardEl.dataset.gdprGuardStorage;
        if (rawStorage && rawStorage in gdpr_guard__WEBPACK_IMPORTED_MODULE_3__.GdprStorage) {
            return gdpr_guard__WEBPACK_IMPORTED_MODULE_3__.GdprStorage[rawStorage];
        }
    }
    return null;
};
/**
 * Check whether the guard is marked as required in the DOM
 * @param guardEl - The root of the guard's state tree
 * @param checkbox - The guard's checkbox
 */
var guardIsRequiredInDOM = function (guardEl, checkbox) {
    if (checkbox.required) {
        guardEl.setAttribute("gdpr-guard-required", "");
        checkbox.setAttribute("checked", "checked");
        return true;
    }
    if (guardEl.hasAttribute("gdpr-guard-required")) {
        checkbox.setAttribute("required", "required");
        checkbox.setAttribute("checked", "checked");
        return true;
    }
    return false;
};
/**
 * Extract the manager's own details from the DOM
 * @param gdprEl - The root of the GDPR state tree
 */
var parseManagerDetails = function (gdprEl) {
    var managerEl = gdprEl;
    var gdpr = gdprEl.dataset.gdpr;
    var managerName = "";
    if ((0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.isMeaningfulStr)(gdpr)) {
        managerName = gdpr;
    }
    else {
        var el = gdprEl.querySelector("[data-gdpr-manager]");
        if (!el) {
            throw new _errors_NoManagerDefinitionError__WEBPACK_IMPORTED_MODULE_5__.NoManagerDefinitionError();
        }
        managerEl = el;
        managerName = nameFromDOM(managerEl, "gdpr-manager");
    }
    var managerCheckbox = checkboxFromDOM(managerEl, managerName);
    return {
        managerEl: managerEl,
        managerCheckbox: managerCheckbox,
        managerName: managerName,
    };
};


/***/ }),

/***/ "./src/domainLogic/guardsParsing.ts":
/*!******************************************!*\
  !*** ./src/domainLogic/guardsParsing.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGuardsFromDOM": () => (/* binding */ addGuardsFromDOM)
/* harmony export */ });
/* harmony import */ var _domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/domainLogic/dataExtractors */ "./src/domainLogic/dataExtractors.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dom */ "./src/utils/dom.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


/**
 * Parse a guard's data and add it to the manager
 * @param guardEl - The root element of the gaurd's data
 * @param groupBuilder - The current group builder's state
 * @param parentRequired - Whether the group is required
 */
var addGuard = function (guardEl, groupBuilder, parentRequired) {
    var guardBuilder = groupBuilder.startGuard();
    var name = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.nameFromDOM)(guardEl, "gdpr-guard");
    guardBuilder.withName(name);
    var checkbox = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.checkboxFromDOM)(guardEl, name);
    var isRequired = parentRequired || (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.guardIsRequiredInDOM)(guardEl, checkbox);
    if (isRequired) {
        guardBuilder.required().enabled();
    }
    else if (checkbox.checked) {
        guardBuilder.enabled();
    }
    else {
        guardBuilder.disabled();
    }
    var description = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.descriptionFromDOM)(guardEl);
    if (description) {
        guardBuilder.withDescription(description);
    }
    var storage = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.storageFromDOM)(guardEl);
    if (storage !== null) {
        guardBuilder.storedIn(storage);
    }
    guardBuilder.endGuard();
    return {
        name: name,
        checkbox: checkbox,
    };
};
/**
 * Get the data for a group and add it to the manager
 * @param groupEl - The root of the group's data
 * @param managerBuilder - The current manager (or group) builder's state
 * @param parentRequired - Whether the manager (or parent group) is required
 * @throws {NoNameError} - If the group's name or a guard's name cannot be parsed
 */
var addGroup = function (groupEl, managerBuilder, parentRequired) {
    var groupBuilder = managerBuilder.startGroup();
    // The name is mandatory, if it can't parse it then it'll throw
    var name = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.nameFromDOM)(groupEl, "gdpr-group");
    groupBuilder.withName(name);
    var checkbox = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.checkboxFromDOM)(groupEl, name);
    var parsedGuards = [{
            name: name,
            checkbox: checkbox,
        }];
    var isRequired = parentRequired || (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.guardIsRequiredInDOM)(groupEl, checkbox);
    if (isRequired) {
        groupBuilder.required().enabled();
    }
    else if (checkbox.checked) {
        groupBuilder.enabled();
    }
    else {
        groupBuilder.disabled();
    }
    var description = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.descriptionFromDOM)(groupEl);
    if (description) {
        groupBuilder.withDescription(description);
    }
    var storage = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_0__.storageFromDOM)(groupEl);
    if (storage !== null) {
        groupBuilder.storedIn(storage);
    }
    // Recursively parse child guards from there
    var guards = addChildGuards(groupEl, groupBuilder, isRequired);
    groupBuilder.endGroup();
    parsedGuards.push.apply(parsedGuards, __spreadArray([], __read(guards), false));
    return parsedGuards;
};
/**
 * Recursively add the child guards of a group to the manager
 * @param rootEl - The root element for that group
 * @param groupBuilder - The current group builder's state
 * @param required - Whether the group is required
 */
var addChildGuards = function (rootEl, groupBuilder, required) {
    if (required === void 0) { required = false; }
    var parsedGuards = [];
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.forEachChild)(rootEl, function (el) {
        if (el === null || el === void 0 ? void 0 : el.matches("[data-gdpr-group]")) {
            var guards = addGroup(el, groupBuilder, required);
            parsedGuards.push.apply(parsedGuards, __spreadArray([], __read(guards), false));
        }
        else if (el === null || el === void 0 ? void 0 : el.matches("[data-gdpr-guard")) {
            var guard = addGuard(el, groupBuilder, required);
            parsedGuards.push(guard);
        }
    });
    return parsedGuards;
};
/**
 * Get the guards from the DOM and add them all to the manager
 * @param managerEl - The root element of the manager's definition
 * @param managerBuilder - The current manager builder's state
 */
var addGuardsFromDOM = function (managerEl, managerBuilder) {
    return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.childSelectorAll)(managerEl, "[data-gdpr-group]")
        .flatMap(function (el) {
        return addGroup(el, managerBuilder, false);
    });
};


/***/ }),

/***/ "./src/domainLogic/listeners.ts":
/*!**************************************!*\
  !*** ./src/domainLogic/listeners.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupButtonsListeners": () => (/* binding */ setupButtonsListeners),
/* harmony export */   "setupCheckboxListeners": () => (/* binding */ setupCheckboxListeners),
/* harmony export */   "setupInHeadActivation": () => (/* binding */ setupInHeadActivation),
/* harmony export */   "setupScriptActivation": () => (/* binding */ setupScriptActivation),
/* harmony export */   "setupStyleSheetsActivation": () => (/* binding */ setupStyleSheetsActivation)
/* harmony export */ });
/* harmony import */ var _utils_eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/eventBus */ "./src/utils/eventBus.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * Add listeners to the change event of the manager's and guards' checkboxes
 * @param manager - The manager to handle state changes for
 * @param managerCheckbox - The global manager toggle checkbox
 * @param parsedGuards - The guards that have been parsed from the DOM
 * @param hadManager - Whether the manager came from the savior instead of the factory
 */
var setupCheckboxListeners = function (manager, managerCheckbox, parsedGuards, hadManager) {
    var handleInitialSync = function (checkbox, guard) {
        if (hadManager) {
            if ((checkbox.checked && !guard.enabled) || (!checkbox.checked && guard.enabled)) {
                checkbox.click();
            }
        }
    };
    handleInitialSync(managerCheckbox, manager);
    managerCheckbox.addEventListener("click", function () {
        manager.toggle();
    });
    parsedGuards.forEach(function (_a) {
        var name = _a.name, checkbox = _a.checkbox;
        var guard = manager.getGuard(name);
        handleInitialSync(checkbox, guard);
        checkbox.addEventListener("click", function () {
            guard.toggle();
        });
    });
};
/**
 * Setup item activation in the `<head>` tag (i.e. to execute code when the corresponding guard is enabled)
 * @param manager - The manager to attach the activation logic to
 * @param itemSelector - The selector to query all the related items (must include `[data-gdpr-on-enable]`)
 * @param setupItemHook - The function to call to set up the item before putting it in the DOM
 */
var setupInHeadActivation = function (manager, itemSelector, setupItemHook) {
    document.querySelectorAll(itemSelector)
        .forEach(function (item) {
        var guardName = item.dataset.gdprOnEnable;
        if (manager.hasGuard(guardName)) {
            manager.events.onEnable(guardName, function () {
                /*
                    Script tags have an internal attribute checking whether
                    they have already been loaded. Cloning a script will
                    always clone that flag as well (which is unwanted).
                 */
                var isScript = item.matches("script");
                var clonedItem = (isScript
                    ? document.createElement("script")
                    : item.cloneNode(false));
                if (isScript) {
                    // Copy attributes over
                    item.getAttributeNames().forEach(function (attrName) {
                        var attrValue = item.getAttribute(attrName);
                        clonedItem.setAttribute(attrName, attrValue);
                    });
                }
                setupItemHook(clonedItem);
                clonedItem.removeAttribute("data-gdpr-on-enable");
                item.remove();
                document.head.appendChild(clonedItem);
            });
        }
        else {
            item.remove();
        }
    });
};
/**
 * Setup scripts activation logic to load them when the corresponding guard is enabled (type must initially be text and the src attribute mst be present)
 * @param manager - The manager to attach the activation logic to
 */
var setupScriptActivation = function (manager) {
    setupInHeadActivation(manager, "script[type='text'][src][data-gdpr-on-enable]", function (actualScript) {
        actualScript.setAttribute("type", "text/javascript");
    });
};
/**
 * Setup stylesheets activation logic to load them when the corresponding guard is enabled (rel attribute must be different from stylesheet and the href attribute must be present)
 * @param manager - The manager to attach the activation logic to
 */
var setupStyleSheetsActivation = function (manager) {
    setupInHeadActivation(manager, "link[href][data-gdpr-on-enable]", function (actualStyleSheet) {
        actualStyleSheet.setAttribute("rel", "stylesheet");
    });
};
/**
 * Bind event listeners to the general buttons
 * @param manager
 * @param gdprSavior
 * @param hooks
 * @param restoreFactory
 */
var setupButtonsListeners = function (manager, gdprSavior, hooks, restoreFactory) {
    var doClose = function () {
        manager.closeBanner();
        hooks.onBannerClose();
    };
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_0__.GlobalEventBus.on("click", "[data-gdpr-open]", function (e) {
        e.preventDefault();
        manager.resetAndShowBanner();
        hooks.onBannerOpen();
    });
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_0__.GlobalEventBus.on("click", "[data-gdpr-decline-all]", function (e) {
        e.preventDefault();
        manager.disable();
        gdprSavior.store(manager.raw())
            .then(function (didStore) {
            if (!didStore) {
                hooks.onDeclineAllErrorHook(didStore);
            }
            else {
                doClose();
            }
        }).catch(function (e) { return hooks.onDeclineAllErrorHook(false, e); });
    });
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_0__.GlobalEventBus.on("click", "[data-gdpr-allow-all]", function (e) {
        e.preventDefault();
        manager.enable();
        gdprSavior.store(manager.raw())
            .then(function (didStore) {
            if (!didStore) {
                hooks.onAllowAllErrorHook(didStore);
            }
            else {
                doClose();
            }
        }).catch(function (e) { return hooks.onAllowAllErrorHook(false, e); });
    });
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_0__.GlobalEventBus.on("click", "[data-gdpr-cancel]", function (e) {
        e.preventDefault();
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var hadManager, newManager, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, gdprSavior.exists(false)];
                    case 1:
                        hadManager = _a.sent();
                        if (!hadManager) return [3 /*break*/, 3];
                        return [4 /*yield*/, gdprSavior.restore(true)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, gdprSavior.restoreOrCreate(restoreFactory)];
                    case 4:
                        newManager = _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        hooks.onCancelErrorHook(true, e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); })();
    });
    _utils_eventBus__WEBPACK_IMPORTED_MODULE_0__.GlobalEventBus.on("click", "[data-gdpr-save]", function (e) {
        e.preventDefault();
        gdprSavior.store(manager.raw())
            .then(function (didStore) {
            if (!didStore) {
                hooks.onSaveErrorHook(didStore);
            }
            else {
                doClose();
            }
        }).catch(function (e) { return hooks.onSaveErrorHook(e); });
    });
};


/***/ }),

/***/ "./src/errors/HtmlGdprGuardError.ts":
/*!******************************************!*\
  !*** ./src/errors/HtmlGdprGuardError.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlGdprGuardError": () => (/* binding */ HtmlGdprGuardError)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HtmlGdprGuardError = /** @class */ (function (_super) {
    __extends(HtmlGdprGuardError, _super);
    function HtmlGdprGuardError(message) {
        return _super.call(this, message) || this;
    }
    return HtmlGdprGuardError;
}(Error));



/***/ }),

/***/ "./src/errors/NoCheckboxError.ts":
/*!***************************************!*\
  !*** ./src/errors/NoCheckboxError.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoCheckboxError": () => (/* binding */ NoCheckboxError)
/* harmony export */ });
/* harmony import */ var _errors_HtmlGdprGuardError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/errors/HtmlGdprGuardError */ "./src/errors/HtmlGdprGuardError.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NoCheckboxError = /** @class */ (function (_super) {
    __extends(NoCheckboxError, _super);
    function NoCheckboxError(message) {
        if (message === void 0) { message = NoCheckboxError.defaultMessage; }
        return _super.call(this, message) || this;
    }
    NoCheckboxError.defaultMessage = "No checkbox found for that guard";
    return NoCheckboxError;
}(_errors_HtmlGdprGuardError__WEBPACK_IMPORTED_MODULE_0__.HtmlGdprGuardError));



/***/ }),

/***/ "./src/errors/NoManagerDefinitionError.ts":
/*!************************************************!*\
  !*** ./src/errors/NoManagerDefinitionError.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoManagerDefinitionError": () => (/* binding */ NoManagerDefinitionError)
/* harmony export */ });
/* harmony import */ var _errors_HtmlGdprGuardError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/errors/HtmlGdprGuardError */ "./src/errors/HtmlGdprGuardError.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Error thrown when the library does not find
 * a root {@link HTMLElement} to get the manager's
 * data from
 */
var NoManagerDefinitionError = /** @class */ (function (_super) {
    __extends(NoManagerDefinitionError, _super);
    function NoManagerDefinitionError(message) {
        if (message === void 0) { message = NoManagerDefinitionError.defaultMessage; }
        return _super.call(this, message) || this;
    }
    NoManagerDefinitionError.defaultMessage = "No definition found for the GDPR manager";
    return NoManagerDefinitionError;
}(_errors_HtmlGdprGuardError__WEBPACK_IMPORTED_MODULE_0__.HtmlGdprGuardError));



/***/ }),

/***/ "./src/errors/NoNameError.ts":
/*!***********************************!*\
  !*** ./src/errors/NoNameError.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoNameError": () => (/* binding */ NoNameError)
/* harmony export */ });
/* harmony import */ var _errors_HtmlGdprGuardError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/errors/HtmlGdprGuardError */ "./src/errors/HtmlGdprGuardError.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NoNameError = /** @class */ (function (_super) {
    __extends(NoNameError, _super);
    function NoNameError(message) {
        if (message === void 0) { message = NoNameError.defaultMessage; }
        return _super.call(this, message) || this;
    }
    NoNameError.defaultMessage = "Guard definition is missing the guard's name";
    return NoNameError;
}(_errors_HtmlGdprGuardError__WEBPACK_IMPORTED_MODULE_0__.HtmlGdprGuardError));



/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "childSelector": () => (/* binding */ childSelector),
/* harmony export */   "childSelectorAll": () => (/* binding */ childSelectorAll),
/* harmony export */   "findAllChildren": () => (/* binding */ findAllChildren),
/* harmony export */   "findChild": () => (/* binding */ findChild),
/* harmony export */   "forEachChild": () => (/* binding */ forEachChild)
/* harmony export */ });
/**
 * Execute an action/callback on each child
 * @param rootEl - The parent element
 * @param action - The action/callback to execute on each child
 */
var forEachChild = function (rootEl, action) {
    for (var i = 0; i < rootEl.childElementCount; i += 1) {
        var el = rootEl.children.item(i);
        if (el) {
            action(el);
        }
    }
};
var findChild = function (rootEl, predicate) {
    for (var i = 0; i < rootEl.childElementCount; i += 1) {
        var el = rootEl.children.item(i);
        if (el && predicate(el)) {
            return el;
        }
    }
    return null;
};
/**
 * Find all the children that satisfy the given predicate
 * @param rootEl - The parent element
 * @param predicate - The predicate to satisfy
 */
var findAllChildren = function (rootEl, predicate) {
    var ret = [];
    for (var i = 0; i < rootEl.childElementCount; i += 1) {
        var el = rootEl.children.item(i);
        if (el && predicate(el)) {
            ret.push(el);
        }
    }
    return ret;
};
/**
 * Get the first child that matches the given selector
 * @param rootEl - The parent element
 * @param selector - The children selector
 */
var childSelector = function (rootEl, selector) {
    return findChild(rootEl, function (el) { return el.matches(selector); });
};
/**
 * Get all the children of the given root that match the given selector
 * @param rootEl - The parent element
 * @param selector - The children selector
 */
var childSelectorAll = function (rootEl, selector) {
    return findAllChildren(rootEl, function (el) { return el.matches(selector); });
};


/***/ }),

/***/ "./src/utils/eventBus.ts":
/*!*******************************!*\
  !*** ./src/utils/eventBus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalEventBus": () => (/* binding */ GlobalEventBus)
/* harmony export */ });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var GlobalEventBus = {
    /**
     * Store the event managers and their listeners
     */
    events: {},
    /**
     * Add an event listener on the given selector as a live listener (i.e. is not limited to the current matching set of {@link HTMLElement})
     * @param event - The name of the event
     * @param selector - The selector to match against
     * @param listener - The listener to call when the event is triggered on an element that matches the given selector
     */
    on: function (event, selector, listener) {
        var _a;
        var _this = this;
        if (!(event in this.events)) { // This event had no selectors or listeners attached yet
            this.events[event] = (_a = {},
                _a[selector] = [listener],
                _a);
            window.addEventListener(event, function (e) {
                Object.entries(_this.events[event])
                    .forEach(function (_a) {
                    var _b;
                    var _c = __read(_a, 2), selector = _c[0], listeners = _c[1];
                    var target = e.target;
                    if ((_b = target === null || target === void 0 ? void 0 : target.matches) === null || _b === void 0 ? void 0 : _b.call(target, selector)) {
                        listeners.forEach(function (listener) { return listener(e); });
                    }
                });
            });
        }
        else {
            var eventManager = this.events[event];
            if (!(selector in eventManager)) { // This event didn't have the selector registered yet
                eventManager[selector] = [];
            }
            eventManager[selector].push(listener);
        }
    }
};


/***/ }),

/***/ "./src/utils/misc.ts":
/*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMeaningfulStr": () => (/* binding */ isMeaningfulStr),
/* harmony export */   "toCamelCase": () => (/* binding */ toCamelCase)
/* harmony export */ });
var isMeaningfulStr = function (str) {
    return !!str && !/^\s*$/.test(str);
};
var toCamelCase = function (str) {
    return str.replace(/-(\w)/g, function (_, letter) { return letter.toUpperCase(); });
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "restoreHtmlGdprManager": () => (/* binding */ restoreHtmlGdprManager)
/* harmony export */ });
/* harmony import */ var _errors_NoManagerDefinitionError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/errors/NoManagerDefinitionError */ "./src/errors/NoManagerDefinitionError.ts");
/* harmony import */ var gdpr_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gdpr-guard */ "./node_modules/gdpr-guard/dist/gdpr_guard.js");
/* harmony import */ var gdpr_guard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gdpr_guard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/domainLogic/dataExtractors */ "./src/domainLogic/dataExtractors.ts");
/* harmony import */ var _domainLogic_guardsParsing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/domainLogic/guardsParsing */ "./src/domainLogic/guardsParsing.ts");
/* harmony import */ var _domainLogic_listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/domainLogic/listeners */ "./src/domainLogic/listeners.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// TODO: Reset API in gdpr-guard?
/**
 * Initialize the gdpr-guard logic from the DOM or the provided {@link GdprSavior}
 * @param gdprSavior - The savior to use to restore and save the {@link GdprManager} data
 * @param {GdprHtmlManagerOptions} [options] - The setup's options
 * @returns {Promise<GdprManager>} The restored GDPR manager
 * @throws {NoManagerDefinitionError} - If no manager definition can be found
 * (either {@link gdprEl} is `undefined` or `document.querySelector("[data-gdpr]")` returned `null`)
 */
var restoreHtmlGdprManager = function (gdprSavior, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.gdprEl, gdprEl = _c === void 0 ? undefined : _c, _d = _b.autoCloseBanner, autoCloseBanner = _d === void 0 ? true : _d, _e = _b.bindEventHandlersHook, bindEventHandlersHook = _e === void 0 ? function () { } : _e, _f = _b.addGuardsBeforeHook, addGuardsBeforeHook = _f === void 0 ? function () { } : _f, _g = _b.addGuardsAfterHook, addGuardsAfterHook = _g === void 0 ? function () { } : _g, _h = _b.onDeclineAllErrorHook, onDeclineAllErrorHook = _h === void 0 ? function (didStore, err) { return console.error("[HtmlGdprGuard @ onDeclineAllErrorHook]", didStore, err); } : _h, _j = _b.onAllowAllErrorHook, onAllowAllErrorHook = _j === void 0 ? function (didStore, err) { return console.error("[HtmlGdprGuard @ onAllowAllErrorHook]", didStore, err); } : _j, _k = _b.onSaveErrorHook, onSaveErrorHook = _k === void 0 ? function (didStore, err) { return console.error("[HtmlGdprGuard @ onSaveErrorHook]", didStore, err); } : _k, _l = _b.onCancelErrorHook, onCancelErrorHook = _l === void 0 ? function (didStore, err) { return console.error("[HtmlGdprGuard @ onCancelErrorHook]", didStore, err); } : _l, _m = _b.onBannerClose, onBannerClose = _m === void 0 ? function () { } : _m, _o = _b.onBannerOpen, onBannerOpen = _o === void 0 ? function () { } : _o;
    return __awaiter(void 0, void 0, void 0, function () {
        var _p, managerEl, managerCheckbox, managerBuilder, parsedGuards, managerFactory, hadManager, manager;
        var _q;
        return __generator(this, function (_r) {
            switch (_r.label) {
                case 0:
                    if (typeof gdprEl === "undefined") {
                        gdprEl = (_q = document.querySelector("[data-gdpr]")) !== null && _q !== void 0 ? _q : undefined;
                        if (typeof gdprEl === "undefined") {
                            throw new _errors_NoManagerDefinitionError__WEBPACK_IMPORTED_MODULE_0__.NoManagerDefinitionError();
                        }
                    }
                    _p = (0,_domainLogic_dataExtractors__WEBPACK_IMPORTED_MODULE_2__.parseManagerDetails)(gdprEl), managerEl = _p.managerEl, managerCheckbox = _p.managerCheckbox;
                    managerBuilder = gdpr_guard__WEBPACK_IMPORTED_MODULE_1__.GdprManagerBuilder.make();
                    addGuardsBeforeHook(managerBuilder);
                    parsedGuards = (0,_domainLogic_guardsParsing__WEBPACK_IMPORTED_MODULE_3__.addGuardsFromDOM)(managerEl, managerBuilder);
                    addGuardsAfterHook(managerBuilder);
                    managerFactory = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, managerBuilder.build()];
                    }); }); };
                    return [4 /*yield*/, gdprSavior.exists(false)];
                case 1:
                    hadManager = _r.sent();
                    return [4 /*yield*/, gdprSavior.restoreOrCreate(managerFactory)];
                case 2:
                    manager = _r.sent();
                    (0,_domainLogic_listeners__WEBPACK_IMPORTED_MODULE_4__.setupScriptActivation)(manager);
                    (0,_domainLogic_listeners__WEBPACK_IMPORTED_MODULE_4__.setupStyleSheetsActivation)(manager);
                    (0,_domainLogic_listeners__WEBPACK_IMPORTED_MODULE_4__.setupCheckboxListeners)(manager, managerCheckbox, parsedGuards, hadManager);
                    (0,_domainLogic_listeners__WEBPACK_IMPORTED_MODULE_4__.setupButtonsListeners)(manager, gdprSavior, {
                        onDeclineAllErrorHook: onDeclineAllErrorHook,
                        onAllowAllErrorHook: onAllowAllErrorHook,
                        onSaveErrorHook: onSaveErrorHook,
                        onCancelErrorHook: onCancelErrorHook,
                        onBannerClose: onBannerClose,
                        onBannerOpen: onBannerOpen,
                    }, managerFactory);
                    bindEventHandlersHook(manager.events);
                    if (autoCloseBanner && manager.bannerWasShown) {
                        manager.closeBanner();
                        onBannerClose();
                    }
                    return [2 /*return*/, manager];
            }
        });
    });
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map