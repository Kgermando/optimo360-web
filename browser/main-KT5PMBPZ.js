import{a as On,b as In,c as An,d as Pn,e as Tn,f as Rn,g as Fn}from"./chunk-EAFIV7OP.js";import{a as Ke,b as $e,c as fn,d as _n,e as bn,f as ae}from"./chunk-J5FYOSHD.js";import"./chunk-RTJ5TFFG.js";import{a as At,b as rt,c as Ln,e as Re,f as Fe,g as st,h as Nn,i as lt,j as jn,k as zn,l as Vn,m as dt,o as ct,r as Me}from"./chunk-RQ2TKAEB.js";import{K as En,M as Bn,N as ot,O as at,a as vn,b as yn,c as Je,e as pe,i as et,j as tt,l as Mn,m as re,o as xn,p as he,w as kn,x as Sn}from"./chunk-OC4V5WVA.js";import"./chunk-K6NMMT5Q.js";import{d as It,e as se,f as Et,h as Te}from"./chunk-Q3LCBQQU.js";import{a as Ce,d as fe}from"./chunk-534S7O2D.js";import{B as le,C as nt,D as it,i as un,j as pn,m as hn,n as gn,r as ye,s as Cn,w as wn,x as ge,y as we,z as Dn}from"./chunk-KH4BI3YJ.js";import{$ as r,$a as _e,$b as dn,Ab as rn,Ac as Q,Bb as be,Cb as l,D as Qt,Db as d,Dc as ve,E as C,Ea as Kt,Eb as k,F as Dt,Fb as Ot,Gb as sn,Lb as U,Mb as Ae,O as V,P as J,Pb as v,Q as F,Qb as ln,Rb as w,Sa as h,Sb as G,T as B,Tb as D,U as Yt,Ub as Pe,Vb as ue,W as H,Wa as $t,Wb as S,X as Y,Xb as O,Ya as me,Z as _,Za as Ge,_ as kt,_a as Jt,a as je,aa as He,ac as Xe,bb as Qe,bc as y,c as ze,cb as en,cc as cn,dc as c,e as p,ea as I,ec as ie,fa as E,g as Mt,ga as qt,gb as b,hb as q,ia as g,ib as ne,ic as oe,ja as ee,ka as St,kb as tn,l as xt,lb as A,ma as L,mb as Ye,na as N,nb as nn,p as R,qa as Xt,ra as W,rb as on,rc as Ze,sa as Zt,tb as qe,u as Ve,ua as We,vb as z,wa as te,wb as P,x as K,xb as T,y as $,ya as j,z as x,za as Ue,zb as an,zc as mn}from"./chunk-XWI43N6W.js";import{a as M,b as Ee}from"./chunk-7CGTOI24.js";var gi="@",fi=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=r(g);loadingSchedulerFn=r(_i,{optional:!0});_engine;constructor(e,t,n,a,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=a,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-TUPEHLIH.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new B(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new Pt(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let m=s.createRenderer(e,t);a.use(m),this.scheduler??=this.injector.get(Zt,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Qe()};static \u0275prov=H({token:i,factory:i.\u0275fac})}return i})(),Pt=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,n){this.delegate.insertBefore(o,e,t,n)}removeChild(o,e,t,n){this.delegate.removeChild(o,e,t,n)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,n){this.delegate.setAttribute(o,e,t,n)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,n){this.delegate.setStyle(o,e,t,n)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t,n){return this.shouldReplay(e)&&this.replay.push(a=>a.listen(o,e,t,n)),this.delegate.listen(o,e,t,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(gi)}},_i=new _("");function Hn(i="animations"){return $t("NgAsyncAnimations"),He([{provide:Jt,useFactory:()=>new fi(r(ee),r(un),r(N),i)},{provide:Kt,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Wn=()=>{let i=r(ae),o=r($e);return i.isAuthenticated()?!0:(o.navigate(["/login"]),!1)},de=(...i)=>()=>{let o=r(ae),e=r($e);return o.hasRole(...i)?!0:(e.navigate(["/dashboard"]),!1)},Un=()=>{let i=r(ae),o=r($e);return i.isAuthenticated()?(o.navigate(["/dashboard"]),!1):!0};var pt=["*"],bi=["content"],vi=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],yi=["mat-drawer","mat-drawer-content","*"];function Ci(i,o){if(i&1){let e=U();l(0,"div",1),v("click",function(){I(e);let n=w();return E(n._onBackdropClicked())}),d()}if(i&2){let e=w();y("mat-drawer-shown",e._isShowingBackdrop())}}function wi(i,o){i&1&&(l(0,"mat-drawer-content"),D(1,2),d())}var Mi=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],xi=["mat-sidenav","mat-sidenav-content","*"];function Di(i,o){if(i&1){let e=U();l(0,"div",1),v("click",function(){I(e);let n=w();return E(n._onBackdropClicked())}),d()}if(i&2){let e=w();y("mat-drawer-shown",e._isShowingBackdrop())}}function ki(i,o){i&1&&(l(0,"mat-sidenav-content"),D(1,2),d())}var Si=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Oi=new _("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ft=new _("MAT_DRAWER_CONTAINER"),mt=(()=>{class i extends se{_platform=r(ye);_changeDetectorRef=r(Q);_container=r(Rt);constructor(){let e=r(j),t=r(It),n=r(N);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Xe("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),y("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[oe([{provide:se,useExisting:i}]),A],ngContentSelectors:pt,decls:1,vars:0,template:function(t,n){t&1&&(G(),D(0))},encapsulation:2,changeDetection:0})}return i})(),Tt=(()=>{class i{_elementRef=r(j);_focusTrapFactory=r(tt);_focusMonitor=r(pe);_platform=r(ye);_ngZone=r(N);_renderer=r(_e);_interactivityChecker=r(et);_doc=r(ee);_container=r(Ft,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=fe(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=fe(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(fe(e))}_opened=W(!1);_openedVia=null;_animationStarted=new p;_animationEnd=new p;openedChange=new L(!0);_openedStream=this.openedChange.pipe(x(e=>e),R(()=>{}));openedStart=this._animationStarted.pipe(x(()=>this.opened),Dt(void 0));_closedStream=this.openedChange.pipe(x(e=>!e),R(()=>{}));closedStart=this._animationStarted.pipe(x(()=>!this.opened),Dt(void 0));_destroyed=new p;onPositionChanged=new L;_content;_modeChanged=new p;_injector=r(g);_changeDetectorRef=r(Q);constructor(){this.openedChange.pipe(F(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!re(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),s(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":me(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(C(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&ue(bi,5),t&2){let a;S(a=O())&&(n._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(z("align",null)("tabIndex",n.mode!=="side"?"-1":null),Xe("visibility",!n._container&&!n.opened?"hidden":null),y("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:pt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(G(),l(0,"div",1,0),D(2),d())},dependencies:[se],encapsulation:2,changeDetection:0})}return i})(),Rt=(()=>{class i{_dir=r(ge,{optional:!0});_element=r(j);_ngZone=r(N);_changeDetectorRef=r(Q);_animationDisabled=le();_transitionsEnabled=!1;_allDrawers;_drawers=new Ue;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=fe(e)}_autosize=r(Oi);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:fe(e)}_backdropOverride=null;backdropClick=new L;_start=null;_end=null;_left=null;_right=null;_destroyed=new p;_doCheckSubject=new p;_contentMargins={left:null,right:null};_contentMarginChanges=new p;get scrollable(){return this._userContent||this._content}_injector=r(g);constructor(){let e=r(ye),t=r(Et);this._dir?.change.pipe(F(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(F(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(V(this._allDrawers),F(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(V(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Qt(10),F(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(F(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(F(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(F(this._drawers.changes)).subscribe(()=>{me({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(F(K(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,a){if(t&1&&Pe(a,mt,5)(a,Tt,5),t&2){let s;S(s=O())&&(n._content=s.first),S(s=O())&&(n._allDrawers=s)}},viewQuery:function(t,n){if(t&1&&ue(mt,5),t&2){let a;S(a=O())&&(n._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&y("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[oe([{provide:Ft,useExisting:i}])],ngContentSelectors:yi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(G(vi),P(0,Ci,1,2,"div",0),D(1),D(2,1),P(3,wi,2,0,"mat-drawer-content")),t&2&&(T(n.hasBackdrop?0:-1),h(3),T(n._content?-1:3))},dependencies:[mt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return i})(),ut=(()=>{class i extends mt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275cmp=b({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[oe([{provide:se,useExisting:i}]),A],ngContentSelectors:pt,decls:1,vars:0,template:function(t,n){t&1&&(G(),D(0))},encapsulation:2,changeDetection:0})}return i})(),Bt=(()=>{class i extends Tt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=fe(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ce(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ce(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275cmp=b({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(z("tabIndex",n.mode!=="side"?"-1":null)("align",null),Xe("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),y("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[oe([{provide:Tt,useExisting:i}]),A],ngContentSelectors:pt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(G(),l(0,"div",1,0),D(2),d())},dependencies:[se],encapsulation:2,changeDetection:0})}return i})(),Gn=(()=>{class i extends Rt{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275cmp=b({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,a){if(t&1&&Pe(a,ut,5)(a,Bt,5),t&2){let s;S(s=O())&&(n._content=s.first),S(s=O())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&y("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[oe([{provide:Ft,useExisting:i},{provide:Rt,useExisting:i}]),A],ngContentSelectors:xi,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(G(Mi),P(0,Di,1,2,"div",0),D(1),D(2,1),P(3,ki,2,0,"mat-sidenav-content")),t&2&&(T(n.hasBackdrop?0:-1),h(3),T(n._content?-1:3))},dependencies:[ut],styles:[Si],encapsulation:2,changeDetection:0})}return i})(),Qn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=Y({imports:[Te,we,Te]})}return i})();var Ri=["mat-menu-item",""],Fi=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Bi=["mat-icon, [matMenuItemIcon]","*"];function Li(i,o){i&1&&(qt(),l(0,"svg",2),k(1,"polygon",3),d())}var Ni=["*"];function ji(i,o){if(i&1){let e=U();Ot(0,"div",0),ln("click",function(){I(e);let n=w();return E(n.closed.emit("click"))})("animationstart",function(n){I(e);let a=w();return E(a._onAnimationStart(n.animationName))})("animationend",function(n){I(e);let a=w();return E(a._onAnimationDone(n.animationName))})("animationcancel",function(n){I(e);let a=w();return E(a._onAnimationDone(n.animationName))}),Ot(1,"div",1),D(2),sn()()}if(i&2){let e=w();cn(e._classList),y("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Ae("id",e.panelId),z("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Nt=new _("MAT_MENU_PANEL"),Be=(()=>{class i{_elementRef=r(j);_document=r(ee);_focusMonitor=r(pe);_parentMenu=r(Nt,{optional:!0});_changeDetectorRef=r(Q);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new p;_focused=new p;_highlighted=!1;_triggersSubmenu=!1;constructor(){r(Cn).load(Sn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&v("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(z("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),y("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ve],disableRipple:[2,"disableRipple","disableRipple",ve]},exportAs:["matMenuItem"],attrs:Ri,ngContentSelectors:Bi,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(G(Fi),D(0),l(1,"span",0),D(2,1),d(),k(3,"div",1),P(4,Li,2,0,":svg:svg",2)),t&2&&(h(3),be("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),h(),T(n._triggersSubmenu?4:-1))},dependencies:[kn],encapsulation:2,changeDetection:0})}return i})();var zi=new _("MatMenuContent");var Vi=new _("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Lt="_mat-menu-enter",ht="_mat-menu-exit",ke=(()=>{class i{_elementRef=r(j);_changeDetectorRef=r(Q);_injector=r(g);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=le();_allItems;_directDescendantItems=new Ue;_classList={};_panelAnimationState="void";_animationDone=new p;_isAnimating=W(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=M({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new L;close=this.closed;panelId=r(he).getId("mat-menu-panel-");constructor(){let e=r(Vi);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new xn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(V(this._directDescendantItems),J(e=>K(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(V(this._directDescendantItems),J(t=>K(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:re(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=me(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Ee(M({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===ht;(t||e===Lt)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Lt||e===ht)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ht),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Lt:ht)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(V(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,a){if(t&1&&Pe(a,zi,5)(a,Be,5)(a,Be,4),t&2){let s;S(s=O())&&(n.lazyContent=s.first),S(s=O())&&(n._allItems=s),S(s=O())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&ue(Ge,5),t&2){let a;S(a=O())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(t,n){t&2&&z("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ve],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ve(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[oe([{provide:Nt,useExisting:i}])],ngContentSelectors:Ni,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(G(),nn(0,ji,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Hi=new _("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(g);return()=>Nn(i)}});var De=new WeakMap,Wi=(()=>{class i{_canHaveBackdrop;_element=r(j);_viewContainerRef=r(en);_menuItemInstance=r(Be,{optional:!0,self:!0});_dir=r(ge,{optional:!0});_focusMonitor=r(pe);_ngZone=r(N);_injector=r(g);_scrollStrategy=r(Hi);_changeDetectorRef=r(Q);_animationsDisabled=le();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=je.EMPTY;_menuCloseSubscription=je.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=r(Nt,{optional:!0});this._parentMaterialMenu=t instanceof ke?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&De.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=De.get(t);De.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),s=a.getConfig(),m=s.positionStrategy;this._setPosition(t,m),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof ke&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(F(t.close)).subscribe(()=>{m.withLockedPosition(!1).reapplyLastPosition(),m.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof ke&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(C(1)).subscribe(()=>{t.detach(),De.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&De.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ct(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof ke&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new lt({positionStrategy:Vn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,s)})})}_setPosition(e,t){let[n,a]=e.xPosition==="before"?["end","start"]:["start","end"],[s,m]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,f]=[s,m],[Z,wt]=[n,a],Ie=0;if(this._triggersSubmenu()){if(wt=n=e.xPosition==="before"?"start":"end",a=Z=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Gt=this._parentMaterialMenu.items.first;this._parentInnerPadding=Gt?Gt._getHostElement().offsetTop:0}Ie=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=s==="top"?"bottom":"top",f=m==="top"?"bottom":"top");t.withPositions([{originX:n,originY:u,overlayX:Z,overlayY:s,offsetY:Ie},{originX:a,originY:u,overlayX:wt,overlayY:s,offsetY:Ie},{originX:n,originY:f,overlayX:Z,overlayY:m,offsetY:-Ie},{originX:a,originY:f,overlayX:wt,overlayY:m,offsetY:-Ie}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:xt(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(x(s=>this._menuOpen&&s!==this._menuItemInstance)):xt();return K(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new rt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return De.get(e)===this}_triggerIsAriaDisabled(){return ve(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Qe()};static \u0275dir=ne({type:i})}return i})(),Xn=(()=>{class i extends Wi{_cleanupTouchstart;_hoverSubscription=je.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new L;onMenuOpen=this.menuOpened;menuClosed=new L;onMenuClose=this.menuClosed;constructor(){super(!0);let e=r(_e);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{yn(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){vn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&v("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),t&2&&z("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[A]})}return i})();var Zn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=Y({imports:[En,Me,we,Te]})}return i})();function Gi(i,o){}var ce=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var zt=(()=>{class i extends Ln{_elementRef=r(j);_focusTrapFactory=r(tt);_config;_interactivityChecker=r(et);_ngZone=r(N);_focusMonitor=r(pe);_renderer=r(_e);_changeDetectorRef=r(Q);_injector=r(g);_platform=r(ye);_document=r(ee);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(ce,{optional:!0})||new ce,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),s(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||me(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=Je(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Je();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Je()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ue(Re,7),t&2){let a;S(a=O())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&z("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[A],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&Ye(0,Gi,0,0,"ng-template",0)},dependencies:[Re],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Le=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!re(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},Qi=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=r(g);return()=>st(i)}}),Yi=new _("DialogData"),qi=new _("DefaultDialogConfig");function Xi(i){let o=W(i),e=new L;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var Vt=(()=>{class i{_injector=r(g);_defaultOptions=r(qi,{optional:!0});_parentDialog=r(i,{optional:!0,skipSelf:!0});_overlayContainer=r(jn);_idGenerator=r(he);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=r(Qi);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ve(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(V(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new ce;t=M(M({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),s=ct(this._injector,a),m=new Le(s,t),u=this._attachContainer(s,m,t);if(m.containerInstance=u,!this.openDialogs.length){let f=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(C(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(f)}):this._hideNonDialogContentFromAssistiveTechnology(f)}return this._attachDialogContent(e,m,u,t),this.openDialogs.push(m),m.closed.subscribe(()=>this._removeOpenDialog(m,!0)),this.afterOpened.next(m),m}closeAll(){jt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){jt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),jt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new lt({positionStrategy:e.positionStrategy||dt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let a=n.injector||n.viewContainerRef?.injector,s=[{provide:ce,useValue:n},{provide:Le,useValue:t},{provide:zn,useValue:e}],m;n.container?typeof n.container=="function"?m=n.container:(m=n.container.type,s.push(...n.container.providers(n))):m=zt;let u=new At(m,n.viewContainerRef,g.create({parent:a||this._injector,providers:s}));return e.attach(u).instance}_attachDialogContent(e,t,n,a){if(e instanceof Ge){let s=this._createInjector(a,t,n,void 0),m={$implicit:a.data,dialogRef:t};a.templateContext&&(m=M(M({},m),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),n.attachTemplatePortal(new rt(e,null,m,s))}else{let s=this._createInjector(a,t,n,this._injector),m=n.attachComponentPortal(new At(e,a.viewContainerRef,s));t.componentRef=m,t.componentInstance=m.instance}}_createInjector(e,t,n,a){let s=e.injector||e.viewContainerRef?.injector,m=[{provide:Yi,useValue:e.data},{provide:Le,useValue:t}];return e.providers&&(typeof e.providers=="function"?m.push(...e.providers(t,e,n)):m.push(...e.providers)),e.direction&&(!s||!s.get(ge,null,{optional:!0}))&&m.push({provide:ge,useValue:Xi(e.direction)}),g.create({parent:s||a,providers:m})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,s)=>{a?s.setAttribute("aria-hidden",a):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let a=t[n];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=H({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function jt(i,o){let e=i.length;for(;e--;)o(i[e])}var Kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=Y({providers:[Vt],imports:[Me,Fe,Mn,Fe]})}return i})();function Zi(i,o){}var ft=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ht="mdc-dialog--open",$n="mdc-dialog--opening",Jn="mdc-dialog--closing",Ki=150,$i=75,Ji=(()=>{class i extends zt{_animationStateChanged=new L;_animationsEnabled=!le();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ti(this._config.enterAnimationDuration)??Ki:0;_exitAnimationDuration=this._animationsEnabled?ti(this._config.exitAnimationDuration)??$i:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ei,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($n,Ht)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ht),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ht),this._animationsEnabled?(this._hostElement.style.setProperty(ei,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Jn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove($n,Jn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275cmp=b({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(Ae("id",n._config.id),z("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),y("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[A],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(l(0,"div",0)(1,"div",1),Ye(2,Zi,0,0,"ng-template",2),d()())},dependencies:[Re],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),ei="--mat-dialog-transition-duration";function ti(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?Ce(i.substring(0,i.length-2)):i.endsWith("s")?Ce(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var gt=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(gt||{}),Se=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Mt(1);_beforeClosed=new Mt(1);_result;_closeFallbackTimeout;_state=gt.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(x(n=>n.state==="opened"),C(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(x(n=>n.state==="closed"),C(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),K(this.backdropClick(),this.keydownEvents().pipe(x(n=>n.keyCode===27&&!this.disableClose&&!re(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),eo(this,n.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(x(t=>t.state==="closing"),C(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=gt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=gt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function eo(i,o,e){return i._closeInteractionType=o,i.close(e)}var Wt=new _("MatMdcDialogData"),to=new _("mat-mdc-dialog-default-options"),no=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(g);return()=>st(i)}}),_t=(()=>{class i{_defaultOptions=r(to,{optional:!0});_scrollStrategy=r(no);_parentDialog=r(i,{optional:!0,skipSelf:!0});_idGenerator=r(he);_injector=r(g);_dialog=r(Vt);_animationsDisabled=le();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=ft;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ve(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(V(void 0)));constructor(){this._dialogRefConstructor=Se,this._dialogContainerType=Ji,this._dialogDataToken=Wt}open(e,t){let n;t=M(M({},this._defaultOptions||new ft),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,Ee(M({},t),{positionStrategy:dt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ce,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(s,m,u)=>(n=new this._dialogRefConstructor(s,t,u),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:m.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=H({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ni=(()=>{class i{_dialogRef=r(Se,{optional:!0});_elementRef=r(j);_dialog=r(_t);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=io(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i})}return i})(),ii=(()=>{class i extends ni{id=r(he).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275dir=ne({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&Ae("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[A]})}return i})(),oi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=ne({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[tn([se])]})}return i})(),ai=(()=>{class i extends ni{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=te(i)))(n||i)}})();static \u0275dir=ne({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&y("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[A]})}return i})();function io(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=q({type:i});static \u0275inj=Y({providers:[_t],imports:[Kn,Me,Fe,we]})}return i})();function si(i,o){let t=!o?.manualCleanup?o?.injector?.get(St)??r(St):null,n=ao(o?.equal),a;o?.requireSync?a=W({kind:0},{equal:n}):a=W({kind:1,value:o?.initialValue},{equal:n});let s,m=i.subscribe({next:u=>a.set({kind:1,value:u}),error:u=>{a.set({kind:2,error:u}),s?.()},complete:()=>{s?.()}});if(o?.requireSync&&a().kind===0)throw new B(601,!1);return s=t?.onDestroy(m.unsubscribe.bind(m)),Ze(()=>{let u=a();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new B(601,!1)}},{equal:o?.equal})}function ao(i=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&i(o.value,e.value)}function lo(i,o){i&1&&(l(0,"ol",8)(1,"li"),c(2,"Appuyez sur le bouton "),l(3,"strong"),c(4,"Partager"),d(),c(5," (ic\xF4ne carr\xE9 avec fl\xE8che)."),d(),l(6,"li"),c(7,"Choisissez "),l(8,"strong"),c(9,"Sur l'\xE9cran d'accueil"),d(),c(10,"."),d(),l(11,"li"),c(12,"Confirmez avec "),l(13,"strong"),c(14,"Ajouter"),d(),c(15,"."),d()())}function co(i,o){i&1&&(l(0,"p"),c(1,"Installez Optimo 360 comme une application native en un clic."),d())}function mo(i,o){i&1&&(l(0,"ol",8)(1,"li"),c(2,"Ouvrez le menu "),l(3,"strong"),c(4,"\u22EE"),d(),c(5," du navigateur Chrome."),d(),l(6,"li"),c(7,"S\xE9lectionnez "),l(8,"strong"),c(9,"Installer l'application"),d(),c(10," ou "),l(11,"strong"),c(12,"Ajouter \xE0 l'\xE9cran d'accueil"),d(),c(13,"."),d()())}function uo(i,o){i&1&&(l(0,"ol",8)(1,"li"),c(2,"Ouvrez Optimo 360 dans Chrome ou Safari sur votre t\xE9l\xE9phone."),d(),l(3,"li"),c(4,"Suivez l'option d'installation propos\xE9e par le navigateur."),d()())}function po(i,o){i&1&&(l(0,"p"),c(1,"Installez Optimo 360 sur votre bureau pour l'ouvrir comme une application."),d())}function ho(i,o){i&1&&(l(0,"ol",8)(1,"li"),c(2,"Utilisez Chrome, Edge ou un navigateur compatible PWA."),d(),l(3,"li"),c(4,"Cliquez sur l'ic\xF4ne "),l(5,"strong"),c(6,"Installer"),d(),c(7," dans la barre d'adresse."),d(),l(8,"li"),c(9,"Confirmez l'ajout de l'application."),d()())}function go(i,o){if(i&1){let e=U();l(0,"button",12),v("click",function(){I(e);let n=w();return E(n.installNow())}),l(1,"mat-icon"),c(2,"download"),d(),c(3," Installer maintenant "),d()}}function fo(i,o){if(i&1){let e=U();l(0,"button",12),v("click",function(){I(e);let n=w();return E(n.dismissLater())}),c(1,"Compris"),d()}}var bt=class i{dialogRef=r(Se);data=r(Wt);installNow(){this.dialogRef.close("install")}dismissLater(){this.dialogRef.close("dismiss")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-install-app-dialog"]],decls:32,vars:7,consts:[[1,"install-dialog"],[1,"install-dialog__hero"],[1,"install-dialog__icon-wrap"],["src","/images/logo-icon.png","alt","Optimo 360",1,"install-dialog__logo"],["mat-dialog-title",""],[1,"install-dialog__subtitle"],[1,"install-section"],[1,"install-section__head"],[1,"install-steps"],["align","end"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","type","button"],["mat-raised-button","","color","primary","type","button",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),k(3,"img",3),d(),l(4,"h2",4),c(5,"Installer Optimo 360"),d(),l(6,"p",5),c(7," Ajoutez l'application sur votre smartphone ou ordinateur pour un acc\xE8s rapide, m\xEAme hors ligne. "),d()(),l(8,"mat-dialog-content")(9,"section",6)(10,"div",7)(11,"mat-icon"),c(12,"smartphone"),d(),l(13,"h3"),c(14,"Sur smartphone"),d()(),P(15,lo,16,0,"ol",8)(16,co,2,0,"p")(17,mo,14,0,"ol",8)(18,uo,5,0,"ol",8),d(),l(19,"section",6)(20,"div",7)(21,"mat-icon"),c(22,"computer"),d(),l(23,"h3"),c(24,"Sur ordinateur"),d()(),P(25,po,2,0,"p")(26,ho,10,0,"ol",8),d()(),l(27,"mat-dialog-actions",9)(28,"button",10),v("click",function(){return t.dismissLater()}),c(29,"Plus tard"),d(),P(30,go,4,0,"button",11)(31,fo,2,0,"button",11),d()()),e&2&&(h(9),y("install-section--highlight",t.data.isMobileDevice),h(6),T(t.data.isIos?15:t.data.isAndroid&&t.data.canNativeInstall?16:t.data.isAndroid?17:18),h(4),y("install-section--highlight",!t.data.isMobileDevice),h(6),T(!t.data.isMobileDevice&&t.data.canNativeInstall?25:26),h(5),T(t.data.canNativeInstall?30:31))},dependencies:[ri,ii,ai,oi,at,ot,it,nt],styles:[".install-dialog__hero[_ngcontent-%COMP%]{text-align:center;padding:8px 8px 0}.install-dialog__icon-wrap[_ngcontent-%COMP%]{width:72px;height:72px;margin:0 auto 12px;border-radius:18px;background:var(--optimo-primary-light);display:flex;align-items:center;justify-content:center;box-shadow:var(--optimo-shadow-sm)}.install-dialog__logo[_ngcontent-%COMP%]{width:48px;height:48px;object-fit:contain}.install-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.35rem;font-weight:700;color:var(--optimo-text)}.install-dialog__subtitle[_ngcontent-%COMP%]{margin:8px 0 0;color:var(--optimo-text-muted);font-size:.95rem;line-height:1.5}.install-section[_ngcontent-%COMP%]{background:var(--optimo-bg);border:1px solid var(--optimo-border);border-radius:var(--optimo-radius-sm);padding:16px;margin-bottom:12px}.install-section--highlight[_ngcontent-%COMP%]{border-color:color-mix(in srgb,var(--optimo-primary) 35%,var(--optimo-border));background:color-mix(in srgb,var(--optimo-primary-light) 70%,white)}.install-section__head[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:10px}.install-section__head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--optimo-primary)}.install-section__head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:600;color:var(--optimo-text)}.install-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--optimo-text-muted);line-height:1.5;font-size:.92rem}.install-steps[_ngcontent-%COMP%]{margin:0;padding-left:1.2rem;color:var(--optimo-text-muted);font-size:.92rem;line-height:1.55}.install-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:6px}.install-steps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--optimo-text);font-weight:600}mat-dialog-actions[_ngcontent-%COMP%]{padding:8px 16px 16px!important;gap:8px}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:4px;font-size:20px;width:20px;height:20px}"]})};var vt=class i{deferredPrompt=null;dialogOpen=!1;dismissKey="optimo360-install-dismissed-until";constructor(){typeof window>"u"||(window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),this.deferredPrompt=o}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null,this.markDismissed(365)}))}isStandalone(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}isIos(){let o=navigator.userAgent;return/iPad|iPhone|iPod/.test(o)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}isAndroid(){return/android/i.test(navigator.userAgent)}isMobileDevice(){return this.isIos()||this.isAndroid()||window.innerWidth<768}canNativeInstall(){return!!this.deferredPrompt}shouldOfferInstall(){return this.isStandalone()?!1:!this.isDismissedRecently()}async promptInstall(){if(!this.deferredPrompt)return!1;await this.deferredPrompt.prompt();let{outcome:o}=await this.deferredPrompt.userChoice;return this.deferredPrompt=null,o==="accepted"&&this.markDismissed(365),o==="accepted"}markDismissed(o=14){let e=Date.now()+o*864e5;localStorage.setItem(this.dismissKey,String(e))}isDismissedRecently(){let o=Number(localStorage.getItem(this.dismissKey)||0);return Date.now()<o}maybeOpenDialog(o){if(this.dialogOpen||!this.shouldOfferInstall())return;this.dialogOpen=!0,o.open(bt,{width:"520px",maxWidth:"95vw",autoFocus:!1,panelClass:"install-app-dialog-panel",data:{canNativeInstall:this.canNativeInstall(),isIos:this.isIos(),isAndroid:this.isAndroid(),isMobileDevice:this.isMobileDevice()}}).afterClosed().subscribe(t=>{this.dialogOpen=!1,t==="install"?this.promptInstall():t==="dismiss"&&this.markDismissed()})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=H({token:i,factory:i.\u0275fac,providedIn:"root"})};var _o=(i,o)=>o.route;function bo(i,o){if(i&1){let e=U();l(0,"a",32),v("click",function(){I(e);let n=w();return E(n.closeSidenavIfMobile())}),l(1,"mat-icon",33),c(2),d(),l(3,"span",34),c(4),d()()}if(i&2){let e=o.$implicit;be("routerLink",e.route),h(2),ie(e.icon),h(2),ie(e.label)}}function vo(i,o){i&1&&(l(0,"button",29)(1,"mat-icon"),c(2,"settings"),d(),l(3,"span"),c(4,"Param\xE8tres"),d()())}var yo={super_admin:"Super administrateur",admin:"Administrateur",manager:"Manager",agent:"Agent"},yt=class i{auth=r(ae);bp=r(wn);dialog=r(_t);pwaInstall=r(vt);user=this.auth.currentUser;isMobile=si(this.bp.observe([Dn.XSmall]).pipe(R(o=>o.matches)),{initialValue:!1});drawerOpened=W(!0);installPromptScheduled=!1;constructor(){We(()=>{this.drawerOpened.set(!this.isMobile())}),We(()=>{!this.user()||this.installPromptScheduled||(this.installPromptScheduled=!0,window.setTimeout(()=>this.pwaInstall.maybeOpenDialog(this.dialog),1500))})}navItems=Ze(()=>{let o=this.auth.userRole();return o?[{label:"Tableau de bord",icon:"dashboard",route:"/dashboard",roles:["super_admin","admin","manager","agent"]},{label:"Entreprises",icon:"business",route:"/entreprises",roles:["super_admin"]},{label:"Utilisateurs",icon:"people",route:"/users",roles:["super_admin","admin","manager"]},{label:"Journal",icon:"history",route:"/journal",roles:["super_admin","admin","manager"]},{label:"Encaissement",icon:"point_of_sale",route:"/encaissement",roles:["agent"]},{label:"Caisses",icon:"account_balance_wallet",route:"/caisses",roles:["admin","manager","agent"]},{label:"Produits",icon:"inventory_2",route:"/produits",roles:["admin","manager"]},{label:"Prestations",icon:"handyman",route:"/prestations",roles:["admin","manager"]}].filter(t=>t.roles.includes(o)):[]});roleLabel(o){return o?yo[o]??o:""}toggleSidenav(){this.drawerOpened.update(o=>!o)}closeSidenavIfMobile(){this.isMobile()&&this.drawerOpened.set(!1)}logout(){this.auth.logout()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-main-layout"]],decls:64,vars:9,consts:[["drawer",""],["accountMenu","matMenu"],[1,"layout-container"],[1,"sidenav",3,"openedChange","mode","opened"],[1,"sidenav-header"],["src","/images/logo-icon.png","alt","Optimo 360",1,"logo"],[1,"brand-text"],[1,"brand"],[1,"sidenav-nav"],["mat-list-item","","routerLinkActive","active-link",1,"nav-item",3,"routerLink"],[1,"main-content"],[1,"topbar"],["mat-icon-button","","aria-label","Menu",1,"menu-btn",3,"click"],[1,"topbar-brand"],["src","/images/logo.png","alt","Optimo 360",1,"topbar-logo"],[1,"topbar-title"],[1,"page-sub"],[1,"spacer"],["mat-button","",1,"account-trigger",3,"matMenuTriggerFor"],[1,"account-avatar"],[1,"account-summary"],[1,"account-name"],[1,"account-role"],[1,"chevron"],["xPosition","before",1,"account-menu"],[1,"menu-profile",3,"click"],[1,"menu-avatar"],[1,"menu-info"],["mat-menu-item","","routerLink","/profil"],["mat-menu-item","","routerLink","/parametres"],["mat-menu-item","",3,"click"],[1,"content"],["mat-list-item","","routerLinkActive","active-link",1,"nav-item",3,"click","routerLink"],["matListItemIcon",""],["matListItemTitle",""]],template:function(e,t){if(e&1&&(l(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0),v("openedChange",function(a){return t.drawerOpened.set(a)}),l(3,"div",4),k(4,"img",5),l(5,"div",6)(6,"span",7),c(7,"Optimo 360"),d(),l(8,"small"),c(9,"Gestion de caisse"),d()()(),l(10,"nav",8)(11,"mat-nav-list"),an(12,bo,5,3,"a",9,_o),d()()(),l(14,"mat-sidenav-content",10)(15,"header",11)(16,"button",12),v("click",function(){return t.toggleSidenav()}),l(17,"mat-icon"),c(18,"menu"),d()(),l(19,"div",13),k(20,"img",14),l(21,"div",15)(22,"span",16),c(23,"Gestion de tr\xE9sorerie multi-devises"),d()()(),k(24,"span",17),l(25,"button",18)(26,"div",19)(27,"mat-icon"),c(28,"person"),d()(),l(29,"div",20)(30,"span",21),c(31),d(),l(32,"span",22),c(33),d()(),l(34,"mat-icon",23),c(35,"expand_more"),d()(),l(36,"mat-menu",24,1)(38,"div",25),v("click",function(a){return a.stopPropagation()}),l(39,"div",26)(40,"mat-icon"),c(41,"person"),d()(),l(42,"div",27)(43,"strong"),c(44),d(),l(45,"span"),c(46),d(),l(47,"small"),c(48),d()()(),k(49,"mat-divider"),l(50,"button",28)(51,"mat-icon"),c(52,"account_circle"),d(),l(53,"span"),c(54,"Mon profil"),d()(),P(55,vo,5,0,"button",29),k(56,"mat-divider"),l(57,"button",30),v("click",function(){return t.logout()}),l(58,"mat-icon"),c(59,"logout"),d(),l(60,"span"),c(61,"D\xE9connexion"),d()()()(),l(62,"main",31),k(63,"router-outlet"),d()()()),e&2){let n,a,s,m,u,f=dn(37);h(),be("mode",t.isMobile()?"over":"side")("opened",t.drawerOpened()),h(11),rn(t.navItems()),h(13),be("matMenuTriggerFor",f),h(6),ie((n=t.user())==null?null:n.full_name),h(2),ie(t.roleLabel((a=t.user())==null?null:a.role)),h(11),ie((s=t.user())==null?null:s.full_name),h(2),ie((m=t.user())==null?null:m.email),h(2),ie(t.roleLabel((u=t.user())==null?null:u.role)),h(7),T(t.auth.hasRole("super_admin","admin","manager")?55:-1)}},dependencies:[Ke,fn,_n,Qn,Bt,Gn,ut,Fn,Rn,Tn,Pn,On,An,it,nt,at,ot,Bn,Zn,ke,Be,Xn,In],styles:[".layout-container[_ngcontent-%COMP%]{height:100vh;background:var(--optimo-bg)}.sidenav[_ngcontent-%COMP%]{width:248px;background:var(--optimo-surface);border-right:none;box-shadow:var(--optimo-shadow-sm);display:flex;flex-direction:column}.sidenav-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:20px 18px}.sidenav-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:cover;border-radius:10px;flex-shrink:0}.sidenav-header[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav-header[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:var(--optimo-text)}.sidenav-header[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:12px;color:var(--optimo-text-muted);margin-top:1px}.sidenav-nav[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px 10px}.nav-item[_ngcontent-%COMP%]{margin:2px 0;border-radius:var(--optimo-radius-sm)!important;height:42px!important;transition:background var(--transition)}.nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--optimo-text-muted)}.active-link[_ngcontent-%COMP%]{background:var(--optimo-primary-light)!important;color:var(--optimo-primary)!important}.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--optimo-primary)!important}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:0 20px;height:64px;background:var(--optimo-surface);border-bottom:1px solid var(--optimo-border);flex-shrink:0}.menu-btn[_ngcontent-%COMP%]{display:none}@media(max-width:600px){.menu-btn[_ngcontent-%COMP%]{display:inline-flex}}.topbar-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.topbar-logo[_ngcontent-%COMP%]{height:34px;width:auto;max-width:160px;object-fit:contain;border-radius:6px;flex-shrink:0}.topbar-title[_ngcontent-%COMP%]{min-width:0}.topbar-title[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%]{display:block;font-size:12px;color:var(--optimo-text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spacer[_ngcontent-%COMP%]{flex:1}.account-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:6px 10px 6px 6px!important;border-radius:24px!important;height:auto!important;min-height:44px}.account-trigger[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{color:var(--optimo-text-muted);font-size:20px;width:20px;height:20px}.account-avatar[_ngcontent-%COMP%], .menu-avatar[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--optimo-primary-light);display:flex;align-items:center;justify-content:center;color:var(--optimo-primary);flex-shrink:0}.account-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .menu-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.account-summary[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;text-align:left;line-height:1.3}@media(max-width:600px){.account-summary[_ngcontent-%COMP%]{display:none}}.account-summary[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:var(--optimo-text)}.account-summary[_ngcontent-%COMP%]   .account-role[_ngcontent-%COMP%]{font-size:11px;color:var(--optimo-text-muted)}.menu-profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:16px 16px 12px;min-width:260px}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;min-width:0}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:var(--optimo-text)}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:var(--optimo-text-muted);word-break:break-all}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;color:var(--optimo-primary);margin-top:2px}.content[_ngcontent-%COMP%]{flex:1;width:100%;padding:16px 20px 20px;overflow:auto;display:flex;flex-direction:column;min-height:0}@media(max-width:600px){.content[_ngcontent-%COMP%]{padding:12px 14px 16px}.topbar[_ngcontent-%COMP%]{padding:0 14px}.topbar-title[_ngcontent-%COMP%]{display:none}.topbar-logo[_ngcontent-%COMP%]{max-width:130px;height:30px}}"]})};var di=[{path:"login",loadComponent:()=>import("./chunk-FOERTEQH.js").then(i=>i.LoginComponent),canActivate:[Un]},{path:"",component:yt,canActivate:[Wn],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadComponent:()=>import("./chunk-ZCFYGZ57.js").then(i=>i.DashboardComponent)},{path:"encaissement",loadComponent:()=>import("./chunk-FEP5E73V.js").then(i=>i.EncaissementComponent),canActivate:[de("agent")]},{path:"caisses",loadComponent:()=>import("./chunk-OQT2C43S.js").then(i=>i.CaissesComponent)},{path:"produits",loadComponent:()=>import("./chunk-3GXO6JRU.js").then(i=>i.ProduitsComponent),canActivate:[de("admin","manager")]},{path:"prestations",loadComponent:()=>import("./chunk-OCGELRYS.js").then(i=>i.PrestationsComponent),canActivate:[de("admin","manager")]},{path:"users",loadComponent:()=>import("./chunk-DLT3TTVC.js").then(i=>i.UsersComponent),canActivate:[de("super_admin","admin","manager")]},{path:"entreprises",loadComponent:()=>import("./chunk-AMYGSFIR.js").then(i=>i.EntreprisesComponent),canActivate:[de("super_admin")]},{path:"journal",loadComponent:()=>import("./chunk-B2ILCXZ4.js").then(i=>i.JournalComponent),canActivate:[de("super_admin","admin","manager")]},{path:"profil",loadComponent:()=>import("./chunk-VAW3RZM6.js").then(i=>i.ProfilComponent)},{path:"parametres",loadComponent:()=>import("./chunk-F6CLPYM7.js").then(i=>i.ParametresComponent),canActivate:[de("super_admin","admin","manager")]}]},{path:"**",redirectTo:"dashboard"}];var ci=(i,o)=>{let t=r(ae).getToken();return t&&(i=i.clone({setHeaders:{Authorization:`Bearer ${t}`}})),o(i)};var Ut="Service workers are disabled or not supported by this browser",Oe=class{serviceWorker;worker;registration;events;constructor(o,e){if(this.serviceWorker=o,!o)this.worker=this.events=this.registration=new ze(t=>t.error(new B(5601,!1)));else{let t=null,n=new p;this.worker=new ze(f=>(t!==null&&f.next(t),n.subscribe(Z=>f.next(Z))));let a=()=>{let{controller:f}=o;f!==null&&(t=f,n.next(t))};o.addEventListener("controllerchange",a),a(),this.registration=this.worker.pipe(J(()=>o.getRegistration().then(f=>{if(!f)throw new B(5601,!1);return f})));let s=new p;this.events=s.asObservable();let m=f=>{let{data:Z}=f;Z?.type&&s.next(Z)};o.addEventListener("message",m),e?.get(qe,null,{optional:!0})?.onDestroy(()=>{o.removeEventListener("controllerchange",a),o.removeEventListener("message",m)})}}postMessage(o,e){return new Promise(t=>{this.worker.pipe(C(1)).subscribe(n=>{n.postMessage(M({action:o},e)),t()})})}postMessageWithOperation(o,e,t){let n=this.waitForOperationCompleted(t),a=this.postMessage(o,e);return Promise.all([a,n]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(o){let e;return typeof o=="string"?e=t=>t.type===o:e=t=>o.includes(t.type),this.events.pipe(x(e))}nextEventOfType(o){return this.eventsOfType(o).pipe(C(1))}waitForOperationCompleted(o){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(x(n=>n.nonce===o),C(1),R(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},Co=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new p;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=$,this.notificationClicks=$,this.notificationCloses=$,this.pushSubscriptionChanges=$,this.subscription=$;return}this.messages=this.sw.eventsOfType("PUSH").pipe(R(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(R(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(R(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(R(n=>n.data)),this.pushManager=this.sw.registration.pipe(R(n=>n.pushManager));let t=this.pushManager.pipe(J(n=>n.getSubscription()));this.subscription=new ze(n=>{let a=t.subscribe(n),s=this.subscriptionChanges.subscribe(n);return()=>{a.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Ut));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(n.length));for(let s=0;s<n.length;s++)a[s]=n.charCodeAt(s);return t.applicationServerKey=a,new Promise((s,m)=>{this.pushManager.pipe(J(u=>u.subscribe(t)),C(1)).subscribe({next:u=>{this.subscriptionChanges.next(u),s(u)},error:m})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Ut));let e=t=>{if(t===null)throw new B(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new B(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(C(1),J(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(kt(Oe))};static \u0275prov=H({token:i,factory:i.\u0275fac})}return i})(),wo=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=$,this.unrecoverable=$;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Ut));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new B(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(kt(Oe))};static \u0275prov=H({token:i,factory:i.\u0275fac})}return i})(),ui=new _("");function Mo(){let i=r(Ne);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let o=r(ui),e=r(N),t=r(qe);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,a=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",a),t.onDestroy(()=>{n.removeEventListener("controllerchange",a)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:a}=i;if(typeof a=="function")n=new Promise(s=>a().subscribe(()=>s()));else{let[s,...m]=(a||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=mi(+m[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),mi(+m[0])]);break;default:throw new B(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(o,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(s=>console.error(Yt(5604,!1)))})})}function mi(i){return new Promise(o=>setTimeout(o,i))}function xo(){let i=r(Ne),o=r(g),e=!0;return new Oe(e&&i.enabled!==!1?navigator.serviceWorker:void 0,o)}var Ne=class{enabled;updateViaCache;type;scope;registrationStrategy};function pi(i,o={}){return He([Co,wo,{provide:ui,useValue:i},{provide:Ne,useValue:o},{provide:Oe,useFactory:xo},on(Mo)])}var hi={providers:[Xt(),bn(di),hn(gn([ci])),Hn(),pi("ngsw-worker.js",{enabled:!mn(),registrationStrategy:"registerWhenStable:30000"})]};var Ct=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&k(0,"router-outlet")},dependencies:[Ke],encapsulation:2})};pn(Ct,hi).catch(i=>console.error(i));
