"use strict";(self.webpackChunkmarket_place=self.webpackChunkmarket_place||[]).push([[3804],{3804:(oe,K,b)=>{b.r(K),b.d(K,{ion_popover:()=>Q});var L=b(5861),f=b(1308),$=b(9658),N=b(4127),P=b(5730),I=b(4414),q=b(2854),u=b(664),c=b(5942);b(3457);const j=(o,e,r)=>{const t=e.getBoundingClientRect(),n=t.height;let i=t.width;return"cover"===o&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},re=(o,e,r)=>{let t=[];switch(e){case"hover":let n;t=[{eventName:"mouseenter",callback:(i=(0,L.Z)(function*(s){s.stopPropagation(),n&&clearTimeout(n),n=setTimeout(()=>{(0,P.r)(()=>{r.presentFromTrigger(s),n=void 0})},100)}),function(a){return i.apply(this,arguments)})},{eventName:"mouseleave",callback:i=>{n&&clearTimeout(n);const s=i.relatedTarget;!s||s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;case"context-menu":t=[{eventName:"contextmenu",callback:i=>{i.preventDefault(),r.presentFromTrigger(i)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;default:t=[{eventName:"click",callback:i=>r.presentFromTrigger(i)},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}]}var i;return t.forEach(({eventName:n,callback:i})=>o.addEventListener(n,i)),o.setAttribute("data-ion-popover-trigger","true"),()=>{t.forEach(({eventName:n,callback:i})=>o.removeEventListener(n,i)),o.removeAttribute("data-ion-popover-trigger")}},B=(o,e)=>e&&"ION-ITEM"===e.tagName?o.findIndex(r=>r===e):-1,U=o=>{const r=(0,P.g)(o).querySelector("button");r&&(0,P.r)(()=>r.focus())},ae=o=>{const e=function(){var r=(0,L.Z)(function*(t){var n;const i=document.activeElement;let s=[];const a=null===(n=t.target)||void 0===n?void 0:n.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(o.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(t.key){case"ArrowLeft":(yield o.getParentPopover())&&o.dismiss(void 0,void 0,!1);break;case"ArrowDown":t.preventDefault();const d=((o,e)=>o[B(o,e)+1])(s,i);void 0!==d&&U(d);break;case"ArrowUp":t.preventDefault();const x=((o,e)=>o[B(o,e)-1])(s,i);void 0!==x&&U(x);break;case"Home":t.preventDefault();const h=s[0];void 0!==h&&U(h);break;case"End":t.preventDefault();const v=s[s.length-1];void 0!==v&&U(v);break;case"ArrowRight":case" ":case"Enter":if(i&&(o=>o.hasAttribute("data-ion-popover-trigger"))(i)){const m=new CustomEvent("ionPopoverActivateTrigger");i.dispatchEvent(m)}}}});return function(n){return r.apply(this,arguments)}}();return o.addEventListener("keydown",e),()=>o.removeEventListener("keydown",e)},G=(o,e,r,t,n,i,s,a,p,d,x)=>{var h;let v={top:0,left:0,width:0,height:0};if("event"===i){if(!x)return p;v={top:x.clientY,left:x.clientX,width:1,height:1}}else{const l=x,C=d||(null===(h=l?.detail)||void 0===h?void 0:h.ionShadowTarget)||l?.target;if(!C)return p;const D=C.getBoundingClientRect();v={top:D.top,left:D.left,width:D.width,height:D.height}}const m=le(s,v,e,r,t,n,o),w=de(a,s,v,e,r),y=m.top+w.top,A=m.left+w.left,{arrowTop:g,arrowLeft:T}=pe(s,t,n,y,A,e,r,o),{originX:_,originY:E}=ce(s,a,o);return{top:y,left:A,referenceCoordinates:v,arrowTop:g,arrowLeft:T,originX:_,originY:E}},ce=(o,e,r)=>{switch(o){case"top":return{originX:H(e),originY:"bottom"};case"bottom":return{originX:H(e),originY:"top"};case"left":return{originX:"right",originY:V(e)};case"right":return{originX:"left",originY:V(e)};case"start":return{originX:r?"left":"right",originY:V(e)};case"end":return{originX:r?"right":"left",originY:V(e)}}},H=o=>{switch(o){case"start":return"left";case"center":return"center";case"end":return"right"}},V=o=>{switch(o){case"start":return"top";case"center":return"center";case"end":return"bottom"}},pe=(o,e,r,t,n,i,s,a)=>{const p={arrowTop:t+s/2-e/2,arrowLeft:n+i-e/2},d={arrowTop:t+s/2-e/2,arrowLeft:n-1.5*e};switch(o){case"top":return{arrowTop:t+s,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:t-r,arrowLeft:n+i/2-e/2};case"left":return p;case"right":return d;case"start":return a?d:p;case"end":return a?p:d;default:return{arrowTop:0,arrowLeft:0}}},le=(o,e,r,t,n,i,s)=>{const a={top:e.top,left:e.left-r-n},p={top:e.top,left:e.left+e.width+n};switch(o){case"top":return{top:e.top-t-i,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},de=(o,e,r,t,n)=>{switch(o){case"center":return he(e,r,t,n);case"end":return fe(e,r,t,n);default:return{top:0,left:0}}},fe=(o,e,r,t)=>{switch(o){case"start":case"end":case"left":case"right":return{top:-(t-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},he=(o,e,r,t)=>{switch(o){case"start":case"end":case"left":case"right":return{top:-(t/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},J=(o,e,r,t,n,i,s,a,p,d,x,h,v=0,m=0,w=0)=>{let y=v;const A=m;let _,g=r,T=e,E=d,O=x,l=!1,C=!1;const D=h?h.top+h.height:i/2-a/2,S=h?h.height:0;let W=!1;return g<t+p?(g=t,l=!0,E="left"):s+t+g+p>n&&(C=!0,g=n-s-t,E="right"),D+S+a>i&&("top"===o||"bottom"===o)&&(D-a>0?(T=Math.max(12,D-a-S-(w-1)),y=T+a,O="bottom",W=!0):_=t),{top:T,left:g,bottom:_,originX:E,originY:O,checkSafeAreaLeft:l,checkSafeAreaRight:C,arrowTop:y,arrowLeft:A,addPopoverBottomClass:W}},me=(o,e)=>{var r;const{event:t,size:n,trigger:i,reference:s,side:a,align:p}=e,d=o.ownerDocument,x="rtl"===d.dir,h=d.defaultView.innerWidth,v=d.defaultView.innerHeight,m=(0,P.g)(o),w=m.querySelector(".popover-content"),y=m.querySelector(".popover-arrow"),A=i||(null===(r=t?.detail)||void 0===r?void 0:r.ionShadowTarget)||t?.target,{contentWidth:g,contentHeight:T}=j(n,w,A),{arrowWidth:_,arrowHeight:E}=(o=>{if(!o)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=o.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(y),l=G(x,g,T,_,E,s,a,p,{top:v/2-T/2,left:h/2-g/2,originX:x?"right":"left",originY:"top"},i,t),C="cover"===n?0:5,D="cover"===n?0:25,{originX:S,originY:W,top:Y,left:M,bottom:z,checkSafeAreaLeft:F,checkSafeAreaRight:De,arrowTop:Ae,arrowLeft:Te,addPopoverBottomClass:Ee}=J(a,l.top,l.left,C,h,v,g,T,D,l.originX,l.originY,l.referenceCoordinates,l.arrowTop,l.arrowLeft,E),Ie=(0,c.c)(),ee=(0,c.c)(),te=(0,c.c)();return ee.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),te.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Ie.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===n&&o.style.setProperty("--width",`${g}px`),Ee&&o.classList.add("popover-bottom"),void 0!==z&&w.style.setProperty("bottom",`${z}px`);let Z=`${M}px`;F&&(Z=`${M}px + var(--ion-safe-area-left, 0)`),De&&(Z=`${M}px - var(--ion-safe-area-right, 0)`),w.style.setProperty("top",`calc(${Y}px + var(--offset-y, 0))`),w.style.setProperty("left",`calc(${Z} + var(--offset-x, 0))`),w.style.setProperty("transform-origin",`${W} ${S}`),null!==y&&(((o,e=!1,r,t)=>!(!r&&!t||"top"!==o&&"bottom"!==o&&e))(a,l.top!==Y||l.left!==M,t,i)?(y.style.setProperty("top",`calc(${Ae}px + var(--offset-y, 0))`),y.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):y.style.setProperty("display","none"))}).addAnimation([ee,te])},ge=o=>{const e=(0,P.g)(o),r=e.querySelector(".popover-content"),t=e.querySelector(".popover-arrow"),n=(0,c.c)(),i=(0,c.c)(),s=(0,c.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{o.style.removeProperty("--width"),o.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),t&&(t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("display"))}).duration(300).addAnimation([i,s])},xe=(o,e)=>{var r;const{event:t,size:n,trigger:i,reference:s,side:a,align:p}=e,d=o.ownerDocument,x="rtl"===d.dir,h=d.defaultView.innerWidth,v=d.defaultView.innerHeight,m=(0,P.g)(o),w=m.querySelector(".popover-content"),y=i||(null===(r=t?.detail)||void 0===r?void 0:r.ionShadowTarget)||t?.target,{contentWidth:A,contentHeight:g}=j(n,w,y),_=G(x,A,g,0,0,s,a,p,{top:v/2-g/2,left:h/2-A/2,originX:x?"right":"left",originY:"top"},i,t),E="cover"===n?0:12,{originX:O,originY:l,top:C,left:D,bottom:S}=J(a,_.top,_.left,E,h,v,A,g,0,_.originX,_.originY,_.referenceCoordinates),W=(0,c.c)(),Y=(0,c.c)(),M=(0,c.c)(),z=(0,c.c)(),F=(0,c.c)();return Y.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),M.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),z.addElement(w).beforeStyles({top:`calc(${C}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${l} ${O}`}).beforeAddWrite(()=>{void 0!==S&&w.style.setProperty("bottom",`${S}px`)}).fromTo("transform","scale(0.8)","scale(1)"),F.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===n&&o.style.setProperty("--width",`${A}px`),"bottom"===l&&o.classList.add("popover-bottom")}).addAnimation([Y,M,z,F])},we=o=>{const e=(0,P.g)(o),r=e.querySelector(".popover-content"),t=(0,c.c)(),n=(0,c.c)(),i=(0,c.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.easing("ease").afterAddWrite(()=>{o.style.removeProperty("--width"),o.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},Q=class{constructor(o){(0,f.r)(this,o),this.didPresent=(0,f.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,f.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,f.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,f.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,f.e)(this,"didPresent",7),this.willPresentShorthand=(0,f.e)(this,"willPresent",7),this.willDismissShorthand=(0,f.e)(this,"willDismiss",7),this.didDismissShorthand=(0,f.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=_e++,this.coreDelegate=(0,N.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1,this.onBackdropTap=()=>{this.dismiss(void 0,I.B)},this.onLifecycle=e=>{const r=this.usersElement,t=ke[e.type];if(r&&t){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:t,destroyTriggerInteraction:n}=this;n&&n();const i=this.triggerEl=void 0!==e?document.getElementById(e):null;!i||(this.destroyTriggerInteraction=re(i,r,t))},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=ae(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:t,triggerEl:n,el:i}=this;!r||!n||(e&&e(),this.destroyDismissInteraction=((o,e,r,t)=>{let n=[];const s=(0,P.g)(t).querySelector(".popover-content");return n="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==o&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==o?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],n.forEach(({eventName:a,callback:p})=>s.addEventListener(a,p)),()=>{n.forEach(({eventName:a,callback:p})=>s.removeEventListener(a,p))}})(n,t,i,r))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(o,e){!0===o&&!1===e?this.present():!1===o&&!0===e&&this.dismiss()}connectedCallback(){(0,I.e)(this.el)}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,$.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:o,isOpen:e}=this;!0===e&&(0,P.r)(()=>this.present()),o&&(0,P.a)(o,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(o,e=!1){var r=this;return(0,L.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(o),r.focusDescendantOnPresent=!1})()}getDelegate(o=!1){if(this.workingDelegate&&!o)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(o){var e=this;return(0,L.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),{inline:t,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,N.a)(n,e.el,e.component,["popover-viewport"],r,t),yield(0,u.e)(e.usersElement),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.currentTransition=(0,I.d)(e,"popoverEnter",me,xe,{event:o||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,I.j)(e.el,e.el)})()}dismiss(o,e,r=!0){var t=this;return(0,L.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition);const{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=t;r&&t.parentPopover&&t.parentPopover.dismiss(o,e,r),t.currentTransition=(0,I.f)(t,o,e,"popoverLeave",ge,we,t.event);const s=yield t.currentTransition;if(s){n&&(n(),t.destroyKeyboardInteraction=void 0),i&&(i(),t.destroyDismissInteraction=void 0);const{delegate:a}=t.getDelegate();yield(0,N.d)(a,t.usersElement)}return t.currentTransition=void 0,s})()}getParentPopover(){var o=this;return(0,L.Z)(function*(){return o.parentPopover})()}onDidDismiss(){return(0,I.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,I.g)(this.el,"ionPopoverWillDismiss")}render(){const o=(0,$.b)(this),{onLifecycle:e,popoverId:r,parentPopover:t,dismissOnSelect:n,side:i,arrow:s,htmlAttributes:a}=this,p=(0,$.a)("desktop"),d=s&&!t;return(0,f.h)(f.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,q.g)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":p,[`popover-side-${i}`]:!0,"popover-nested":!!t}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!t&&(0,f.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,f.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:n?()=>this.dismiss():void 0},d&&(0,f.h)("div",{class:"popover-arrow",part:"arrow"}),(0,f.h)("div",{class:"popover-content",part:"content"},(0,f.h)("slot",null))))}get el(){return(0,f.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},ke={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let _e=0;Q.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2854:(oe,K,b)=>{b.d(K,{c:()=>$,g:()=>P,h:()=>f,o:()=>q});var L=b(5861);const f=(u,c)=>null!==c.closest(u),$=(u,c)=>"string"==typeof u&&u.length>0?Object.assign({"ion-color":!0,[`ion-color-${u}`]:!0},c):c,P=u=>{const c={};return(u=>void 0!==u?(Array.isArray(u)?u:u.split(" ")).filter(k=>null!=k).map(k=>k.trim()).filter(k=>""!==k):[])(u).forEach(k=>c[k]=!0),c},I=/^[a-z][a-z0-9+\-.]*:/,q=function(){var u=(0,L.Z)(function*(c,k,X,j){if(null!=c&&"#"!==c[0]&&!I.test(c)){const R=document.querySelector("ion-router");if(R)return k?.preventDefault(),R.push(c,X,j)}return!1});return function(k,X,j,R){return u.apply(this,arguments)}}()}}]);