import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as a,l as n}from"./assets/vendor-d78ab9e0.js";const o="videoplayer-current-time",i=document.querySelector("#vimeo-player"),r=new a(i),s=function({seconds:e}){console.log("Time:",e),localStorage.setItem(o,JSON.stringify(e))};r.on("timeupdate",n(s,1e3));const t=localStorage.getItem(o);if(t){const e=JSON.parse(t);r.setCurrentTime(e)}
//# sourceMappingURL=commonHelpers2.js.map
