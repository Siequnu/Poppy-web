(this.webpackJsonppoppy=this.webpackJsonppoppy||[]).push([[3],{371:function(e,t,r){"use strict";r.r(t),r.d(t,"DeviceWeb",(function(){return l}));var n=r(106);var a=r(17),i=r.n(a),o=r(22),s=r(56),u=r(68),c=r(91),p=r(92),l=function(e){Object(c.a)(r,e);var t=Object(p.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getId",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{uuid:this.getUid()});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getInfo",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof navigator&&navigator.userAgent){e.next=2;break}throw this.unavailable("Device API not available in this browser");case 2:return t=navigator.userAgent,r=this.parseUa(t),e.abrupt("return",{model:r.model,platform:"web",operatingSystem:r.operatingSystem,osVersion:r.osVersion,manufacturer:navigator.vendor,isVirtual:!1,webViewVersion:r.browserVersion});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBatteryInfo",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof navigator&&navigator.getBattery){e.next=2;break}throw this.unavailable("Device API not available in this browser");case 2:return t={},e.prev=3,e.next=6,navigator.getBattery();case 6:t=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:return e.abrupt("return",{batteryLevel:t.level,isCharging:t.charging});case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"getLanguageCode",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{value:navigator.language});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"parseUa",value:function(e){var t={},r=e.indexOf("(")+1,a=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(a=e.indexOf(") Gecko"));var i=e.substring(r,a);if(-1!==e.indexOf("Android")){var o=i.replace("; wv","").split("; ").pop();o&&(t.model=o.split(" Build")[0]),t.osVersion=i.split("; ")[1]}else if(t.model=i.split("; ")[0],"undefined"!==typeof navigator&&navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=i;else{var s=i.split("; ").pop();if(s){var u=s.replace(" like Mac OS X","").split(" ");t.osVersion=u[u.length-1].replace(/_/g,".")}}/android/i.test(e)?t.operatingSystem="android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?t.operatingSystem="ios":/Win/.test(e)?t.operatingSystem="windows":/Mac/i.test(e)?t.operatingSystem="mac":t.operatingSystem="unknown";var c=!!window.InstallTrigger,p=!!window.ApplePaySession,l=!!window.chrome,f=/Edg/.test(e),v=/FxiOS/.test(e),d=/CriOS/.test(e),g=/EdgiOS/.test(e);if(p||l&&!f||v||d||g){var x;x=v?"FxiOS":d?"CriOS":g?"EdgiOS":p?"Version":"Chrome";var y,w=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(n.a)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw o}}}}(e.split(" "));try{for(w.s();!(y=w.n()).done;){var b=y.value;if(b.includes(x)){var h=b.split("/")[1];t.browserVersion=h}}}catch(S){w.e(S)}finally{w.f()}}else if(c||f){var m=e.split("").reverse().join("").split("/")[0].split("").reverse().join("");t.browserVersion=m}return t}},{key:"getUid",value:function(){if("undefined"!==typeof window){var e=window.localStorage.getItem("_capuid");return e||(e=this.uuid4(),window.localStorage.setItem("_capuid",e),e)}return this.uuid4()}},{key:"uuid4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}]),r}(r(163).a)}}]);
//# sourceMappingURL=3.7a73f414.chunk.js.map