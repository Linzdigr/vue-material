/*!
* Vue Material v0.7.4
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.VueMaterial=t(require("vue")):e.VueMaterial=t(e.Vue)})(this,(function(e){return (function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=469)})({0:function(e,t){e.exports=function(e,t,n,i,r){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?u.render=function(e,t){return c.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:o,exports:s,options:u}}},1:function(e,t,n){"use strict";function i(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||i(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},103:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-snackbar",s.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(348),s=i(o),a=n(285),u=i(a);e.exports=t.default},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(444),r=(function(e){return e&&e.__esModule?e:{default:e}})(i),o=new r.default({data:function(){return{current:null}}});t.default=o,e.exports=t.default},179:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),o=i(r),s=n(41),a=i(s),u=n(1),c=i(u),d=n(117),l=i(d);t.default={name:"md-snackbar",props:{id:[String,Number],mdPosition:{type:String,default:"bottom center"},mdDuration:{type:[String,Number],default:4e3}},mixins:[c.default],data:function(){return{snackbarId:this.id||"snackbar-"+(0,o.default)(),active:!1,rootElement:{},snackbarElement:{},directionClass:null,closeTimeout:null,rElement:null}},computed:{classes:function(){var e={"md-active":this.active};return this.directionClass=this.mdPosition.replace(/ /g,"-"),e["md-position-"+this.directionClass]=!0,e}},watch:{active:function(e){var t="md-has-toast-"+this.directionClass;e?(document.body.classList.add(t),document.body.classList.add("md-has-toast")):(document.body.classList.remove(t),document.body.classList.remove("md-has-toast"))}},methods:{removeElement:function(){if(document.body.contains(this.snackbarElement)){var e=this.snackbarElement.querySelector(".md-ripple.md-active");e&&e.classList.remove("md-active"),document.body.removeChild(this.snackbarElement)}},open:function(){this.$refs.container.removeEventListener(a.default,this.rElement),l.default.current&&l.default.current.close(),l.default.current=this,document.body.appendChild(this.snackbarElement),window.getComputedStyle(this.$refs.container).backgroundColor,this.active=!0,this.$emit("open"),this.closeTimeout=window.setTimeout(this.close,this.mdDuration),this.timeoutStartedAt=Date.now()},close:function(){var e=this;this.$refs.container&&(this.rElement=function(){e.$refs.container.removeEventListener(a.default,e.rElement),e.removeElement()},l.default.current=null,this.active=!1,this.$emit("close"),this.$refs.container.removeEventListener(a.default,this.rElement),this.$refs.container.addEventListener(a.default,this.rElement),window.clearTimeout(this.closeTimeout),this.pendingDuration=this.mdDuration)},pauseTimeout:function(){this.pendingDuration=this.pendingDuration-(Date.now()-this.timeoutStartedAt),this.timeoutStartedAt=0,window.clearTimeout(this.closeTimeout)},resumeTimeout:function(){this.timeoutStartedAt=Date.now(),this.closeTimeout=window.setTimeout(this.close,this.pendingDuration)}},mounted:function(){var e=this;this.$nextTick((function(){e.snackbarElement=e.$el,e.snackbarElement.parentNode.removeChild(e.snackbarElement),e.timeoutStartedAt=0,e.pendingDuration=e.mdDuration}))},beforeDestroy:function(){window.clearTimeout(this.closeTimeout),this.removeElement()}},e.exports=t.default},262:function(e,t){},285:function(e,t){e.exports=".THEME_NAME .md-snackbar .md-ink-ripple,.THEME_NAME.md-snackbar .md-ink-ripple{color:#fff}\n"},348:function(e,t,n){function i(e){n(262)}var r=n(0)(n(179),n(439),i,null,null);e.exports=r.exports},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return Math.random().toString(36).slice(4)};t.default=i,e.exports=t.default},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(function(){var e=document.createElement("span"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]})(),e.exports=t.default},439:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-snackbar",class:[e.themeClass,e.classes],attrs:{id:e.snackbarId},on:{mouseenter:e.pauseTimeout,mouseleave:e.resumeTimeout}},[n("div",{ref:"container",staticClass:"md-snackbar-container"},[n("div",{staticClass:"md-snackbar-content"},[e._t("default")],2)])])},staticRenderFns:[]}},444:function(t,n){t.exports=e},469:function(e,t,n){e.exports=n(103)}})}));