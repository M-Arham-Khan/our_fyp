!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t,o,i){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,o){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return o&&e(r,o.prototype),r}).apply(null,arguments)}function o(i){var r="function"==typeof Map?new Map:void 0;return(o=function(o){if(null===o||(i=o,-1===Function.toString.call(i).indexOf("[native code]")))return o;var i;if("function"!=typeof o)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(o))return r.get(o);r.set(o,c)}function c(){return n(o,arguments,t(this).constructor)}return c.prototype=Object.create(o.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),e(c,o)})(i)}function i(t,e,n){var o=document.createElement("link");o.rel=t,o.href=e,n&&(o.as=n),o.crossorigin=!0,document.head.appendChild(o)}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('lite-vimeo{font-size:10px;background-color:#000;position:relative;display:block;contain:content;background-position:50%;background-size:cover;cursor:pointer}lite-vimeo:after{content:"";display:block;padding-bottom:56.25%}lite-vimeo>iframe{width:100%;height:100%;position:absolute;top:0;left:0}lite-vimeo>.ltv-playbtn{width:6.5em;height:4em;background:rgba(23,35,34,.75);z-index:1;opacity:.8;border-radius:.5em;transition:all .2s cubic-bezier(0,0,.2,1);outline:0;border:0;cursor:pointer}lite-vimeo:hover>.ltv-playbtn{background-color:#00adef;opacity:1}lite-vimeo>.ltv-playbtn:before{content:"";border-color:transparent transparent transparent #fff;border-style:solid;border-width:10px 0 10px 20px}lite-vimeo>.ltv-playbtn,lite-vimeo>.ltv-playbtn:before{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}lite-vimeo.ltv-activated{cursor:unset}lite-vimeo.ltv-activated:before,lite-vimeo.ltv-activated>.ltv-playbtn{opacity:0;pointer-events:none}');var r=function(t){var e,n;function o(){return t.call(this)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=o.prototype;return r.connectedCallback=function(){var t=this;this.videoId=encodeURIComponent(this.getAttribute("videoid"));var e=function(t){var e=t.width,n=t.height,o=e,i=n;return o%320!=0&&(o=100*Math.ceil(e/100),i=Math.round(o/e*n)),{width:o,height:i}}(this.getBoundingClientRect()),n=e.width,i=e.height,r=window.devicePixelRatio||1;n*=r,i*=r;var c,a="https://lite-vimeo-embed.now.sh/thumb/"+this.videoId;a+="."+((c=document.createElement("canvas")).getContext&&c.getContext("2d")&&0===c.toDataURL("image/webp").indexOf("data:image/webp")?"webp":"jpg"),a+="?mw="+n+"&mh="+i+"&q="+(r>1?70:85);var u=document.createElement("button");u.type="button",u.ariaLabel="Click To Play AI Text To Voice",u.classList.add("ltv-playbtn"),this.appendChild(u),this.addEventListener("pointerover",o.t,{once:!0}),this.addEventListener("click",(function(){return t.o()}))},o.t=function(){o.preconnected||(i("preconnect","https://player.vimeo.com"),i("preconnect","https://i.vimeocdn.com"),i("preconnect","https://f.vimeocdn.com"),i("preconnect","https://fresnel.vimeocdn.com"),o.preconnected=!0)},r.o=function(){var t='\n<iframe width="640" height="360" frameborder="0"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://player.vimeo.com/video/'+this.videoId+'?autoplay=1"\n></iframe>';this.insertAdjacentHTML("beforeend",t),this.classList.add("ltv-activated")},o}(o(HTMLElement));customElements.define("lite-vimeo",r)}));