window.AudioSequence=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){},function(t,e){t.exports={silence:"data:audio/wave;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA==",demoSources:function(){return{"https://mrf345.github.io/audio_sequence/demos/firefox.gif":this.isFirefox(),"https://mrf345.github.io/audio_sequence/demos/safari.gif":this.isSafari(),"https://mrf345.github.io/audio_sequence/demos/chrome.gif":this.isChrome(),"https://mrf345.github.io/audio_sequence/demos/opera.gif":this.isOpera()}},createOverlayInstructions:function(){var t=this;if(this.autoplayWarning){var e="OverLayAutoPlay",n=document.getElementById(e);n&&document.removeChild(n);var r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("h2"),s=document.createElement("img");r.id=e,r.style.margin="0%",r.style.minWidth="100%",r.style.minHeight="100vh",r.style.zIndex="0",r.style.top="0",r.style.left="0",r.style.position="fixed",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.style.backgroundColor="rgba(0, 0, 0, 0.9)",o.style.color="rgb(255, 255, 255)",o.style.fontFamily="Georgia, Times, serif",o.style.textShadow="0 0 5px rgba(255,255,255,0.7)",o.style.fontSize="150%",o.style.marginBottom="5%",o.style.textAlign="center",o.innerHTML=this.autoplayMessage,s.src=Object.keys(this.demoSources()).find((function(e){return!!t.demoSources()[e]})),s.style.width="90%",s.style.marginLeft="5%",s.alt="How to enable Auto-Play permission.",i.appendChild(o),i.appendChild(s),r.appendChild(i),this.waitForDOM((function(){return document.body.appendChild(r)}))}}}},function(t,e){t.exports={play:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t){if(!this.hasFiles())return!1;var e=this.findFile(t),n=this.playlist.indexOf(e);return!!e&&(this.pause(!0),this.current=n,this.handlePlay(e.play()),!0)}var r=this.hasFiles()&&(!this.isActive()||this.isPaused());return r&&this.handlePlay(this.getCurrent().item.play()),r},replay:function(){var t=this.isActive()||this.isPaused();if(t){var e=this.getCurrent().item;e.currentTime=0,this.isPaused()&&this.handlePlay(e.play())}return t},pause:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.isActive()&&!this.isPaused();if(e){var n=this.getCurrent(),r=n.item;r.pause(),t&&(r.currentTime=0)}return e},stop:function(){var t=this.isActive();if(t){var e=this.getCurrent().item;this.pause(!0),e.currentTime=0,this.current=0}return t},next:function(t){var e=this.isActive(t)&&this.hasFiles();return e&&(t||(t=this.getCurrent().item),t.currentTime=t.duration),e},previous:function(){var t=this.isActive()&&this.hasFiles();if(t){var e=this.getCurrent().item,n=this.getNext(!0),r=n.nextIndex,i=n.nextItem;e.currentTime=0,e.pause(),this.current=r,this.handlePlay(i.play())}return t},forward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.isActive()||this.isPaused();if(e){var n=this.getCurrent(),r=n.item;r.currentTime+=t||r.duration/6}return e},backward:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.isActive()||this.isPaused();if(e){var n=this.getCurrent(),r=n.item;r.currentTime-=t||r.duration/6}return e},mute:function(){var t=!this.isMuted()&&this.hasFiles();return t&&this.playlist.forEach((function(t){t.volume=0})),t},unmute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return this.playlist.forEach((function(e){e.volume=t})),this.hasFiles()}}},function(t,e){t.exports={loader:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(n,r){var i=document.createElement("audio");i.oncanplaythrough=function(){return n(i)},i.onerror=function(n){var i="Failed to load ".concat(e,". ").concat(n);return t.errors.push(i),r(i)},i.onended=function(e){return t.loading=!0,Promise.all(t.prePromises).then((function(n){return t.handleEnding(e)})).then((function(e){return Promise.all(t.postPromises)})).then((function(e){t.prePromises=[],t.postPromises=[],t.loading=!1})).catch((function(t){return console.warn(t)}))},i.preload="auto",i.display="none",i.controls=!1,i.volume=t.volume,i.src=e,t.waitForDOM((function(){return document.body.appendChild(i)}))}))},handlePlay:function(t){var e=this;if(t)return t.catch((function(t){return!e.isAutoPlayEnabled(t)&&e.createOverlayInstructions()})),t.then&&this.prePromises.push(t)},add:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(n,r){!!t.playlist.find((function(t){return t.src===e}))?r(Error("File already exists.")):t.loader(e).then((function(r){t.playlist.push(r),t.autoStart&&(t.pause(!0),t.play(e)),n(r)})).catch((function(t){return r(t)}))}))},remove:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.playlist.find((function(e){return e.src===t}));function n(t){if(this.playlist=this.playlist.filter((function(t){return t.src!==e.src})),document.body.removeChild(e),t)return t("teared down")}return this.isActive(e)?(this.addPromise(n.bind(this)),this.next(e)):n.bind(this)(),!!e},fetchAll:function(){var t=this;return this.loading=!0,new Promise((function(e){Promise.all(t.files.map((function(e){return t.loader(e)}))).then((function(n){t.loading=!1,e(n)}))}))}}},function(t,e){t.exports={list:function(){this.playlist.forEach((function(t){return console.log(t.src.split("/").slice(-1)[0],t)}))},getFile:function(t){return t.split("/").slice(-1)},getHost:function(t){return t.split("/").filter((function(t){return t&&!t.includes("http")}))[0]},log:function(){var t=this;this.logger?clearInterval(this.logger):this.logger=setInterval((function(){var e=t.repeatEach?"Each":t.repeatWhole?"Whole":t.repeatForever?"Forever":"Standard";console.clear(),t.playlist.forEach((function(e){return console.log("File: ".concat(t.getFile(e.src)," | Host: ").concat(t.getHost(e.src)," | Playing: ")+"".concat(t.isActive(e)," | Seconds: ").concat(e.duration.toFixed(2),"/").concat(e.currentTime.toFixed(2)))})),console.log("[Repeats: ".concat(e,"]   [Delay Seconds: ").concat((t.repeatDelay/1e3).toFixed(2),"]")+"   [Paused: ".concat(t.isPaused(),"]   [Muted: ").concat(t.isMuted(),"]"))}),this.isFirefox()?100:1e3)}}},function(t,e){t.exports={each:function(){return this.repeatEach?this.whole():(this.repeatWhole=!1,this.repeatEach=!0,this.load())},whole:function(){return this.repeatWhole?this.each():(this.repeatEach=!1,this.repeatWhole=!0,this.load())},forever:function(){this.repeatForever=!this.repeatForever,this.hasFiles()&&!this.isActive()&&this.autoStart&&this.play()}}},function(t,e){t.exports={choice:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=Math.floor(Math.random()*t.length);return{nextIndex:e,nextItem:t[e]}},keepWithin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.toString().includes("-")?e.length?e.length-1:0:t>e.length-1?0:t;return{nextIndex:n,nextItem:e[n]}},findFile:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.playlist[this.playlist.map((function(t){return t.src})).indexOf(t)]},addPromise:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Function,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Promise((function(e){return t(e)}));this[e?"prePromises":"postPromises"].push(n)},waitForDOM:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Function;return"complete"===document.readyState?t():window.addEventListener("DOMContentLoaded",(function(){return t()}))},handleAutoPlayNotAllowed:function(){var t=this,e=document.createElement("audio");e.src=this.silence;var n=e.play();n&&n.catch&&n.catch((function(e){return!t.isAutoPlayEnabled(e)&&t.createOverlayInstructions()}))},isFirefox:function(){return!this.isChrome()&&window.navigator.userAgent.includes("Firefox")},isEdge:function(){return!this.isChrome()&&window.navigator.userAgent.includes("Edge")},isOpera:function(){return!this.isChrome()&&window.navigator.userAgent.includes("OPR")},isSafari:function(){return!this.isOpera()&&!this.isChrome()&&window.navigator.userAgent.includes("Safari")},isChrome:function(){return"Google Inc."===window.navigator.vendor&&window.navigator.userAgent.includes("Chrome")&&!window.navigator.userAgent.includes("OPR")},isAutoPlayEnabled:function(t){return!("NotAllowedError"===t.name)}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return o}));var o=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t);var o="AutoPlay permission is lacking. Enable it then reload:",s=function(t,e){return void 0===t?e:!!t};this.files=i.files||[],this.repeats=i.repeats||1,this.repeatWhole=s(i.repeat_whole,!0),this.repeatEach=s(i.repeat_each,!1),this.repeatForever=s(i.repeat_forever,!1),this.repeatDelay=1e3*i.repeat_delay||0,this.reverseOrder=s(i.reverse_order,!1),this.shuffleOrder=s(i.shuffle_order,!1),this.volume=i.volume||.5,this.autoStart=s(i.auto_start,!1),this.autoplayWarning=s(i.autoplay_warning,!0),this.autoplayMessage=i.autoplay_message||o,this.playlist=[],this.current=0,this.errors=[],this.loading=!1,this.repeatCounter=0,this.prePromises=[],this.postPromises=[],this.logger=void 0,this.hasFiles=function(){return!!e.playlist.length},this.hasErrors=function(){return!!e.errors.length},this.getCurrent=function(){return{index:e.current,item:e.playlist[e.current]}},this.getNext=function(t){return e.keepWithin(t?e.current-1:e.current+1,e.playlist)},this.isMuted=function(){return e.hasFiles()&&0===e.getCurrent().item.volume},this.isPaused=function(){return e.hasFiles()&&e.getCurrent().item.paused},this.isLast=function(){return e.playlist.length-1===e.current},this.notStarted=function(){return!e.isPaused()&&!e.isActive()},this.getPlace=function(t){return e.files.map((function(t){return t.replace(window.origin,"")})).indexOf(t.src.replace(window.origin,""))},this.isActive=function(t){return!!e.hasFiles()&&((t=t||e.getCurrent().item)&&!t.ended&&t.currentTime>0)},this.mixIns=["utils","constants","fetcher","controller","repeater","logger"],this.mixIns.forEach((function(t){return Object.assign(e,n(10)("./".concat(t)))})),this.handleAutoPlayNotAllowed(),this.autoStart&&this.waitForDOM(this.load.bind(this))}var e,o,s;return e=t,(o=[{key:"handleEnding",value:function(t){var e=this;return new Promise((function(n){var r=e.playlist.find((function(e){return e.src===t.target.src})),i=e.playlist.indexOf(r),o=e.shuffleOrder?e.choice(e.playlist):e.reverseOrder?e.keepWithin(i-1,e.playlist):e.keepWithin(i+1,e.playlist),s=o.nextIndex,a=o.nextItem,u=function(t){t.volume=e.volume,t.currentTime=0;var r=(e.repeatEach||e.repeatWhole)&&e.repeatDelay?new Promise((function(n){return setTimeout((function(){return n(t.play())}),e.repeatDelay)})):t.play();return r&&r.then?r.then((function(){return n(t)})):n(t)},l=function(){return a?(e.current=s,a.repeats=1,u(a)):n(r)};if(e.repeatEach){var c=r.repeats||1;return c>=e.repeats&&!e.repeatForever?(r.repeats=0,e.isLast()?n(r):l()):(r.repeats=c+1,u(r))}return e.repeatWhole?e.repeatForever?l():e.repeatCounter>=e.repeats?n(r):(e.current===e.playlist.length-2&&(e.repeatCounter+=1),l()):e.repeatForever||e.playlist.length-1>=e.current?l():(e.current=0,n(r))}))}},{key:"tearDown",value:function(){this.isActive()&&!this.isPaused()&&this.getCurrent().item.pause(),this.playlist.forEach((function(t){return document.body.removeChild(t)})),this.playlist=[],this.current=0,this.repeatCounter=0,this.errors=[],this.prePromises=[],this.postPromises=[]}},{key:"load",value:function(){var t=this;return this.hasFiles()&&this.tearDown(),new Promise((function(e){t.fetchAll().then((function(n){n.length&&(t.playlist=Array(n.length).fill(),n.forEach((function(e){t.playlist[t.getPlace(e)]=e})),t.playlist=t.playlist.filter((function(t){return!!t}))),t.hasErrors()&&t.errors.forEach((function(t){return console.warn(t)})),t.autoStart&&t.hasFiles()&&t.handlePlay(t.getCurrent().item.play()),e(n)}))}))}}])&&i(e.prototype,o),s&&i(e,s),t}()},function(t,e,n){"use strict";n.r(e),function(t){var r=n(0),i=n(7);r.JSDOM&&(t.window=(new r.JSDOM).window,t.document=t.window.document,Object.defineProperty(t.window.HTMLMediaElement.prototype,"play",{configurable:!0,get:function(){var t=this;return setTimeout((function(){return t.onloadeddata&&t.onloadeddata()})),function(){}}})),e.default=i.a}.call(this,n(9))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r={"./constants":1,"./constants.js":1,"./controller":2,"./controller.js":2,"./fetcher":3,"./fetcher.js":3,"./logger":4,"./logger.js":4,"./repeater":5,"./repeater.js":5,"./utils":6,"./utils.js":6};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=10}]).default;