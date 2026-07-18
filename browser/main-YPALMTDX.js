import{a as qt,b as Zt,c as $t,d as Jt,e as en,f as tn,g as nn}from"./chunk-HIYP6U62.js";import{a as Oe,b as Te,c as Ft,d as Bt,e as Nt,f as Y}from"./chunk-466BVLP7.js";import"./chunk-PNEZG4IF.js";import{b as ln,g as cn,h as mn,i as un,l as pn,o as hn}from"./chunk-JAZKVP6M.js";import{I as Kt,K as an,L as sn,M as dn,a as jt,b as Lt,d as ge,h as Ut,i as Ht,k as Ae,m as Wt,n as Gt,u as Yt,v as Xt}from"./chunk-DUEOLVJV.js";import"./chunk-WNOY24BS.js";import{d as Je,e as re,f as et,h as fe}from"./chunk-2S6R5AGL.js";import{a as $e,d as $}from"./chunk-3IXGHBDV.js";import{B as _e,C as rn,D as on,i as Ot,j as Tt,m as Rt,n as At,r as Re,s as Vt,w as zt,x as Fe,y as Be,z as Qt}from"./chunk-SJXJPIUC.js";import{$ as Ce,$b as P,Ab as d,Bb as l,Bc as ie,C as mt,Cb as x,D as I,Da as ft,Db as Ke,E as Qe,Eb as kt,Jb as K,Kb as Dt,N as q,Nb as k,O as V,Ob as St,P as y,Pb as b,Qb as A,Ra as p,Rb as f,S as w,Sb as pe,T as ut,Tb as he,Ub as D,V as le,Va as _t,Vb as S,W as ce,Xa as me,Y as M,Ya as bt,Z as Ye,Za as vt,Zb as Pt,_ as a,_a as De,_b as Ee,a as we,ab as Se,ac as Et,bb as yt,bc as m,c as Me,cc as W,da as O,e as g,ea as T,fa as pt,fb as _,gb as ue,gc as G,ha as C,hb as Ze,ia as te,ja as Xe,jb as Z,k as Ge,la as z,lb as wt,ma as R,o as v,pa as ht,pb as Mt,pc as Ie,qa as F,ra as gt,rb as Pe,ta as qe,tb as H,ub as B,va as xe,vb as N,w as ee,x as L,xa as U,xb as Ct,xc as It,y as E,ya as ke,yb as xt,yc as Q,zb as ne}from"./chunk-W36PVD56.js";import{a as J,b as We}from"./chunk-7CGTOI24.js";var On="@",Tn=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=a(C);loadingSchedulerFn=a(Rn,{optional:!0});_engine;constructor(e,t,n,o,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-32LXCKKK.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new w(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:o})=>{this._engine=n(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let o=new tt(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(e,t);o.use(c),this.scheduler??=this.injector.get(gt,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{o.use(n)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Se()};static \u0275prov=le({token:i,factory:i.\u0275fac})}return i})(),tt=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,n){this.delegate.insertBefore(r,e,t,n)}removeChild(r,e,t,n){this.delegate.removeChild(r,e,t,n)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,n){this.delegate.setAttribute(r,e,t,n)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,n){this.delegate.setStyle(r,e,t,n)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t,n){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(r,e,t,n)),this.delegate.listen(r,e,t,n)}shouldReplay(r){return this.replay!==null&&r.startsWith(On)}},Rn=new M("");function gn(i="animations"){return _t("NgAsyncAnimations"),Ce([{provide:vt,useFactory:()=>new Tn(a(te),a(Ot),a(R),i)},{provide:ft,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var fn=()=>{let i=a(Y),r=a(Te);return i.isAuthenticated()?!0:(r.navigate(["/login"]),!1)},X=(...i)=>()=>{let r=a(Y),e=a(Te);return r.hasRole(...i)?!0:(e.navigate(["/dashboard"]),!1)},_n=()=>{let i=a(Y),r=a(Te);return i.isAuthenticated()?(r.navigate(["/dashboard"]),!1):!0};var Le=["*"],An=["content"],Fn=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Bn=["mat-drawer","mat-drawer-content","*"];function Nn(i,r){if(i&1){let e=K();d(0,"div",1),k("click",function(){O(e);let n=b();return T(n._onBackdropClicked())}),l()}if(i&2){let e=b();P("mat-drawer-shown",e._isShowingBackdrop())}}function jn(i,r){i&1&&(d(0,"mat-drawer-content"),f(1,2),l())}var Ln=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Vn=["mat-sidenav","mat-sidenav-content","*"];function zn(i,r){if(i&1){let e=K();d(0,"div",1),k("click",function(){O(e);let n=b();return T(n._onBackdropClicked())}),l()}if(i&2){let e=b();P("mat-drawer-shown",e._isShowingBackdrop())}}function Un(i,r){i&1&&(d(0,"mat-sidenav-content"),f(1,2),l())}var Hn=`.mat-drawer-container {
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
`;var Wn=new M("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ot=new M("MAT_DRAWER_CONTAINER"),Ne=(()=>{class i extends re{_platform=a(Re);_changeDetectorRef=a(Q);_container=a(it);constructor(){let e=a(U),t=a(Je),n=a(R);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Ee("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),P("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[G([{provide:re,useExisting:i}]),Z],ngContentSelectors:Le,decls:1,vars:0,template:function(t,n){t&1&&(A(),f(0))},encapsulation:2,changeDetection:0})}return i})(),nt=(()=>{class i{_elementRef=a(U);_focusTrapFactory=a(Ht);_focusMonitor=a(ge);_platform=a(Re);_ngZone=a(R);_renderer=a(De);_interactivityChecker=a(Ut);_doc=a(te);_container=a(ot,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=$(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=$(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle($(e))}_opened=F(!1);_openedVia=null;_animationStarted=new g;_animationEnd=new g;openedChange=new z(!0);_openedStream=this.openedChange.pipe(E(e=>e),v(()=>{}));openedStart=this._animationStarted.pipe(E(()=>this.opened),Qe(void 0));_closedStream=this.openedChange.pipe(E(e=>!e),v(()=>{}));closedStart=this._animationStarted.pipe(E(()=>!this.opened),Qe(void 0));_destroyed=new g;onPositionChanged=new z;_content;_modeChanged=new g;_injector=a(C);_changeDetectorRef=a(Q);constructor(){this.openedChange.pipe(y(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Ae(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),s=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":me(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(I(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&he(An,5),t&2){let o;D(o=S())&&(n._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(H("align",null)("tabIndex",n.mode!=="side"?"-1":null),Ee("visibility",!n._container&&!n.opened?"hidden":null),P("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Le,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(A(),d(0,"div",1,0),f(2),l())},dependencies:[re],encapsulation:2,changeDetection:0})}return i})(),it=(()=>{class i{_dir=a(Fe,{optional:!0});_element=a(U);_ngZone=a(R);_changeDetectorRef=a(Q);_animationDisabled=_e();_transitionsEnabled=!1;_allDrawers;_drawers=new ke;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=$(e)}_autosize=a(Wn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:$(e)}_backdropOverride=null;backdropClick=new z;_start=null;_end=null;_left=null;_right=null;_destroyed=new g;_doCheckSubject=new g;_contentMargins={left:null,right:null};_contentMarginChanges=new g;get scrollable(){return this._userContent||this._content}_injector=a(C);constructor(){let e=a(Re),t=a(et);this._dir?.change.pipe(y(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(y(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(q(this._allDrawers),y(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(q(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(mt(10),y(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(y(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(y(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(y(this._drawers.changes)).subscribe(()=>{me({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(y(ee(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,o){if(t&1&&pe(o,Ne,5)(o,nt,5),t&2){let s;D(s=S())&&(n._content=s.first),D(s=S())&&(n._allDrawers=s)}},viewQuery:function(t,n){if(t&1&&he(Ne,5),t&2){let o;D(o=S())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&P("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[G([{provide:ot,useExisting:i}])],ngContentSelectors:Bn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(A(Fn),B(0,Nn,1,2,"div",0),f(1),f(2,1),B(3,jn,2,0,"mat-drawer-content")),t&2&&(N(n.hasBackdrop?0:-1),p(3),N(n._content?-1:3))},dependencies:[Ne],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),je=(()=>{class i extends Ne{static \u0275fac=(()=>{let e;return function(n){return(e||(e=xe(i)))(n||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[G([{provide:re,useExisting:i}]),Z],ngContentSelectors:Le,decls:1,vars:0,template:function(t,n){t&1&&(A(),f(0))},encapsulation:2,changeDetection:0})}return i})(),at=(()=>{class i extends nt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=$(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=$e(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=$e(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=xe(i)))(n||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(H("tabIndex",n.mode!=="side"?"-1":null)("align",null),Ee("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),P("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[G([{provide:nt,useExisting:i}]),Z],ngContentSelectors:Le,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(A(),d(0,"div",1,0),f(2),l())},dependencies:[re],encapsulation:2,changeDetection:0})}return i})(),bn=(()=>{class i extends it{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=xe(i)))(n||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,o){if(t&1&&pe(o,je,5)(o,at,5),t&2){let s;D(s=S())&&(n._content=s.first),D(s=S())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&P("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[G([{provide:ot,useExisting:i},{provide:it,useExisting:i}]),Z],ngContentSelectors:Vn,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(A(Ln),B(0,zn,1,2,"div",0),f(1),f(2,1),B(3,Un,2,0,"mat-sidenav-content")),t&2&&(N(n.hasBackdrop?0:-1),p(3),N(n._content?-1:3))},dependencies:[je],styles:[Hn],encapsulation:2,changeDetection:0})}return i})(),vn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ue({type:i});static \u0275inj=ce({imports:[fe,Be,fe]})}return i})();var Zn=["mat-menu-item",""],Kn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],$n=["mat-icon, [matMenuItemIcon]","*"];function Jn(i,r){i&1&&(pt(),d(0,"svg",2),x(1,"polygon",3),l())}var ei=["*"];function ti(i,r){if(i&1){let e=K();Ke(0,"div",0),St("click",function(){O(e);let n=b();return T(n.closed.emit("click"))})("animationstart",function(n){O(e);let o=b();return T(o._onAnimationStart(n.animationName))})("animationend",function(n){O(e);let o=b();return T(o._onAnimationDone(n.animationName))})("animationcancel",function(n){O(e);let o=b();return T(o._onAnimationDone(n.animationName))}),Ke(1,"div",1),f(2),kt()()}if(i&2){let e=b();Et(e._classList),P("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Dt("id",e.panelId),H("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var dt=new M("MAT_MENU_PANEL"),ve=(()=>{class i{_elementRef=a(U);_document=a(te);_focusMonitor=a(ge);_parentMenu=a(dt,{optional:!0});_changeDetectorRef=a(Q);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new g;_focused=new g;_highlighted=!1;_triggersSubmenu=!1;constructor(){a(Vt).load(Xt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&k("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(H("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),P("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ie],disableRipple:[2,"disableRipple","disableRipple",ie]},exportAs:["matMenuItem"],attrs:Zn,ngContentSelectors:$n,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(A(Kn),f(0),d(1,"span",0),f(2,1),l(),x(3,"div",1),B(4,Jn,2,0,":svg:svg",2)),t&2&&(p(3),ne("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),p(),N(n._triggersSubmenu?4:-1))},dependencies:[Yt],encapsulation:2,changeDetection:0})}return i})();var ni=new M("MatMenuContent");var ii=new M("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),st="_mat-menu-enter",Ve="_mat-menu-exit",ae=(()=>{class i{_elementRef=a(U);_changeDetectorRef=a(Q);_injector=a(C);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=_e();_allItems;_directDescendantItems=new ke;_classList={};_panelAnimationState="void";_animationDone=new g;_isAnimating=F(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=J({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{n[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{n[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new z;close=this.closed;panelId=a(Gt).getId("mat-menu-panel-");constructor(){let e=a(ii);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Wt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(q(this._directDescendantItems),V(e=>ee(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),o=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[o]&&!n[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(q(this._directDescendantItems),V(t=>ee(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Ae(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=me(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=We(J({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ve;(t||e===st)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===st||e===Ve)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ve),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?st:Ve)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(q(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,o){if(t&1&&pe(o,ni,5)(o,ve,5)(o,ve,4),t&2){let s;D(s=S())&&(n.lazyContent=s.first),D(s=S())&&(n._allItems=s),D(s=S())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&he(bt,5),t&2){let o;D(o=S())&&(n.templateRef=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&H("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ie],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ie(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[G([{provide:dt,useExisting:i}])],ngContentSelectors:ei,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(A(),wt(0,ti,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return i})(),ri=new M("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=a(C);return()=>cn(i)}});var oe=new WeakMap,oi=(()=>{class i{_canHaveBackdrop;_element=a(U);_viewContainerRef=a(yt);_menuItemInstance=a(ve,{optional:!0,self:!0});_dir=a(Fe,{optional:!0});_focusMonitor=a(ge);_ngZone=a(R);_injector=a(C);_scrollStrategy=a(ri);_changeDetectorRef=a(Q);_animationsDisabled=_e();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=we.EMPTY;_menuCloseSubscription=we.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=a(dt,{optional:!0});this._parentMaterialMenu=t instanceof ae?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&oe.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=oe.get(t);oe.set(t,this),n&&n!==this&&n._closeMenu();let o=this._createOverlay(t),s=o.getConfig(),c=s.positionStrategy;this._setPosition(t,c),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof ae&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(y(t.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof ae&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(I(1)).subscribe(()=>{t.detach(),oe.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&oe.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=pn(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof ae&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new mn({positionStrategy:un(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let o=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,t){let[n,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,c]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,h]=[s,c],[j,He]=[n,o],de=0;if(this._triggersSubmenu()){if(He=n=e.xPosition==="before"?"start":"end",o=j=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let ct=this._parentMaterialMenu.items.first;this._parentInnerPadding=ct?ct._getHostElement().offsetTop:0}de=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=s==="top"?"bottom":"top",h=c==="top"?"bottom":"top");t.withPositions([{originX:n,originY:u,overlayX:j,overlayY:s,offsetY:de},{originX:o,originY:u,overlayX:He,overlayY:s,offsetY:de},{originX:n,originY:h,overlayX:j,overlayY:c,offsetY:-de},{originX:o,originY:h,overlayX:He,overlayY:c,offsetY:-de}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ge(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(E(s=>this._menuOpen&&s!==this._menuItemInstance)):Ge();return ee(e,n,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ln(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return oe.get(e)===this}_triggerIsAriaDisabled(){return ie(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Se()};static \u0275dir=Ze({type:i})}return i})(),Mn=(()=>{class i extends oi{_cleanupTouchstart;_hoverSubscription=we.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new z;onMenuOpen=this.menuOpened;menuClosed=new z;onMenuClose=this.menuClosed;constructor(){super(!0);let e=a(De);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Lt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){jt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=Ze({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&k("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),t&2&&H("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Z]})}return i})();var Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ue({type:i});static \u0275inj=ce({imports:[Kt,hn,Be,fe]})}return i})();function xn(i,r){let t=!r?.manualCleanup?r?.injector?.get(Xe)??a(Xe):null,n=si(r?.equal),o;r?.requireSync?o=F({kind:0},{equal:n}):o=F({kind:1,value:r?.initialValue},{equal:n});let s,c=i.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{o.set({kind:2,error:u}),s?.()},complete:()=>{s?.()}});if(r?.requireSync&&o().kind===0)throw new w(601,!1);return s=t?.onDestroy(c.unsubscribe.bind(c)),Ie(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new w(601,!1)}},{equal:r?.equal})}function si(i=Object.is){return(r,e)=>r.kind===1&&e.kind===1&&i(r.value,e.value)}var li=(i,r)=>r.route;function ci(i,r){if(i&1){let e=K();d(0,"a",32),k("click",function(){O(e);let n=b();return T(n.closeSidenavIfMobile())}),d(1,"mat-icon",33),m(2),l(),d(3,"span",34),m(4),l()()}if(i&2){let e=r.$implicit;ne("routerLink",e.route),p(2),W(e.icon),p(2),W(e.label)}}function mi(i,r){i&1&&(d(0,"button",29)(1,"mat-icon"),m(2,"settings"),l(),d(3,"span"),m(4,"Param\xE8tres"),l()())}var ui={super_admin:"Super administrateur",admin:"Administrateur",manager:"Manager",agent:"Agent"},ze=class i{auth=a(Y);bp=a(zt);user=this.auth.currentUser;isMobile=xn(this.bp.observe([Qt.XSmall]).pipe(v(r=>r.matches)),{initialValue:!1});drawerOpened=F(!0);constructor(){qe(()=>{this.drawerOpened.set(!this.isMobile())})}navItems=Ie(()=>{let r=this.auth.userRole();return r?[{label:"Tableau de bord",icon:"dashboard",route:"/dashboard",roles:["super_admin","admin","manager","agent"]},{label:"Entreprises",icon:"business",route:"/entreprises",roles:["super_admin"]},{label:"Utilisateurs",icon:"people",route:"/users",roles:["super_admin","admin","manager"]},{label:"Journal",icon:"history",route:"/journal",roles:["super_admin","admin","manager"]},{label:"Encaissement",icon:"point_of_sale",route:"/encaissement",roles:["agent"]},{label:"Caisses",icon:"account_balance_wallet",route:"/caisses",roles:["admin","manager","agent"]},{label:"Produits",icon:"inventory_2",route:"/produits",roles:["admin","manager"]},{label:"Prestations",icon:"handyman",route:"/prestations",roles:["admin","manager"]}].filter(t=>t.roles.includes(r)):[]});roleLabel(r){return r?ui[r]??r:""}toggleSidenav(){this.drawerOpened.update(r=>!r)}closeSidenavIfMobile(){this.isMobile()&&this.drawerOpened.set(!1)}logout(){this.auth.logout()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-main-layout"]],decls:64,vars:9,consts:[["drawer",""],["accountMenu","matMenu"],[1,"layout-container"],[1,"sidenav",3,"openedChange","mode","opened"],[1,"sidenav-header"],["src","/images/logo-icon.png","alt","Optimo 360",1,"logo"],[1,"brand-text"],[1,"brand"],[1,"sidenav-nav"],["mat-list-item","","routerLinkActive","active-link",1,"nav-item",3,"routerLink"],[1,"main-content"],[1,"topbar"],["mat-icon-button","","aria-label","Menu",1,"menu-btn",3,"click"],[1,"topbar-brand"],["src","/images/logo.png","alt","Optimo 360",1,"topbar-logo"],[1,"topbar-title"],[1,"page-sub"],[1,"spacer"],["mat-button","",1,"account-trigger",3,"matMenuTriggerFor"],[1,"account-avatar"],[1,"account-summary"],[1,"account-name"],[1,"account-role"],[1,"chevron"],["xPosition","before",1,"account-menu"],[1,"menu-profile",3,"click"],[1,"menu-avatar"],[1,"menu-info"],["mat-menu-item","","routerLink","/profil"],["mat-menu-item","","routerLink","/parametres"],["mat-menu-item","",3,"click"],[1,"content"],["mat-list-item","","routerLinkActive","active-link",1,"nav-item",3,"click","routerLink"],["matListItemIcon",""],["matListItemTitle",""]],template:function(e,t){if(e&1&&(d(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0),k("openedChange",function(o){return t.drawerOpened.set(o)}),d(3,"div",4),x(4,"img",5),d(5,"div",6)(6,"span",7),m(7,"Optimo 360"),l(),d(8,"small"),m(9,"Gestion de caisse"),l()()(),d(10,"nav",8)(11,"mat-nav-list"),Ct(12,ci,5,3,"a",9,li),l()()(),d(14,"mat-sidenav-content",10)(15,"header",11)(16,"button",12),k("click",function(){return t.toggleSidenav()}),d(17,"mat-icon"),m(18,"menu"),l()(),d(19,"div",13),x(20,"img",14),d(21,"div",15)(22,"span",16),m(23,"Gestion de tr\xE9sorerie multi-devises"),l()()(),x(24,"span",17),d(25,"button",18)(26,"div",19)(27,"mat-icon"),m(28,"person"),l()(),d(29,"div",20)(30,"span",21),m(31),l(),d(32,"span",22),m(33),l()(),d(34,"mat-icon",23),m(35,"expand_more"),l()(),d(36,"mat-menu",24,1)(38,"div",25),k("click",function(o){return o.stopPropagation()}),d(39,"div",26)(40,"mat-icon"),m(41,"person"),l()(),d(42,"div",27)(43,"strong"),m(44),l(),d(45,"span"),m(46),l(),d(47,"small"),m(48),l()()(),x(49,"mat-divider"),d(50,"button",28)(51,"mat-icon"),m(52,"account_circle"),l(),d(53,"span"),m(54,"Mon profil"),l()(),B(55,mi,5,0,"button",29),x(56,"mat-divider"),d(57,"button",30),k("click",function(){return t.logout()}),d(58,"mat-icon"),m(59,"logout"),l(),d(60,"span"),m(61,"D\xE9connexion"),l()()()(),d(62,"main",31),x(63,"router-outlet"),l()()()),e&2){let n,o,s,c,u,h=Pt(37);p(),ne("mode",t.isMobile()?"over":"side")("opened",t.drawerOpened()),p(11),xt(t.navItems()),p(13),ne("matMenuTriggerFor",h),p(6),W((n=t.user())==null?null:n.full_name),p(2),W(t.roleLabel((o=t.user())==null?null:o.role)),p(11),W((s=t.user())==null?null:s.full_name),p(2),W((c=t.user())==null?null:c.email),p(2),W(t.roleLabel((u=t.user())==null?null:u.role)),p(7),N(t.auth.hasRole("super_admin","admin","manager")?55:-1)}},dependencies:[Oe,Ft,Bt,vn,at,bn,je,nn,tn,en,Jt,qt,$t,on,rn,dn,sn,an,Cn,ae,ve,Mn,Zt],styles:[".layout-container[_ngcontent-%COMP%]{height:100vh;background:var(--optimo-bg)}.sidenav[_ngcontent-%COMP%]{width:248px;background:var(--optimo-surface);border-right:none;box-shadow:var(--optimo-shadow-sm);display:flex;flex-direction:column}.sidenav-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:20px 18px}.sidenav-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:cover;border-radius:10px;flex-shrink:0}.sidenav-header[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidenav-header[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:var(--optimo-text)}.sidenav-header[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:12px;color:var(--optimo-text-muted);margin-top:1px}.sidenav-nav[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:8px 10px}.nav-item[_ngcontent-%COMP%]{margin:2px 0;border-radius:var(--optimo-radius-sm)!important;height:42px!important;transition:background var(--transition)}.nav-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--optimo-text-muted)}.active-link[_ngcontent-%COMP%]{background:var(--optimo-primary-light)!important;color:var(--optimo-primary)!important}.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--optimo-primary)!important}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:0 20px;height:64px;background:var(--optimo-surface);border-bottom:1px solid var(--optimo-border);flex-shrink:0}.menu-btn[_ngcontent-%COMP%]{display:none}@media(max-width:600px){.menu-btn[_ngcontent-%COMP%]{display:inline-flex}}.topbar-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;min-width:0}.topbar-logo[_ngcontent-%COMP%]{height:34px;width:auto;max-width:160px;object-fit:contain;border-radius:6px;flex-shrink:0}.topbar-title[_ngcontent-%COMP%]{min-width:0}.topbar-title[_ngcontent-%COMP%]   .page-sub[_ngcontent-%COMP%]{display:block;font-size:12px;color:var(--optimo-text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spacer[_ngcontent-%COMP%]{flex:1}.account-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:6px 10px 6px 6px!important;border-radius:24px!important;height:auto!important;min-height:44px}.account-trigger[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%]{color:var(--optimo-text-muted);font-size:20px;width:20px;height:20px}.account-avatar[_ngcontent-%COMP%], .menu-avatar[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--optimo-primary-light);display:flex;align-items:center;justify-content:center;color:var(--optimo-primary);flex-shrink:0}.account-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .menu-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.account-summary[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;text-align:left;line-height:1.3}@media(max-width:600px){.account-summary[_ngcontent-%COMP%]{display:none}}.account-summary[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:var(--optimo-text)}.account-summary[_ngcontent-%COMP%]   .account-role[_ngcontent-%COMP%]{font-size:11px;color:var(--optimo-text-muted)}.menu-profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:16px 16px 12px;min-width:260px}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;min-width:0}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:var(--optimo-text)}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:var(--optimo-text-muted);word-break:break-all}.menu-profile[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;color:var(--optimo-primary);margin-top:2px}.content[_ngcontent-%COMP%]{flex:1;width:100%;padding:16px 20px 20px;overflow:auto;display:flex;flex-direction:column;min-height:0}@media(max-width:600px){.content[_ngcontent-%COMP%]{padding:12px 14px 16px}.topbar[_ngcontent-%COMP%]{padding:0 14px}.topbar-title[_ngcontent-%COMP%]{display:none}.topbar-logo[_ngcontent-%COMP%]{max-width:130px;height:30px}}"]})};var kn=[{path:"login",loadComponent:()=>import("./chunk-WLQBIENH.js").then(i=>i.LoginComponent),canActivate:[_n]},{path:"",component:ze,canActivate:[fn],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadComponent:()=>import("./chunk-GDCLF3BZ.js").then(i=>i.DashboardComponent)},{path:"encaissement",loadComponent:()=>import("./chunk-ZN2HSVWP.js").then(i=>i.EncaissementComponent),canActivate:[X("agent")]},{path:"caisses",loadComponent:()=>import("./chunk-ORWRRTTT.js").then(i=>i.CaissesComponent)},{path:"produits",loadComponent:()=>import("./chunk-RJBXTBMX.js").then(i=>i.ProduitsComponent),canActivate:[X("admin","manager")]},{path:"prestations",loadComponent:()=>import("./chunk-KYHC2JCZ.js").then(i=>i.PrestationsComponent),canActivate:[X("admin","manager")]},{path:"users",loadComponent:()=>import("./chunk-MMT2FZ4N.js").then(i=>i.UsersComponent),canActivate:[X("super_admin","admin","manager")]},{path:"entreprises",loadComponent:()=>import("./chunk-GZMABU73.js").then(i=>i.EntreprisesComponent),canActivate:[X("super_admin")]},{path:"journal",loadComponent:()=>import("./chunk-5VGZK6HK.js").then(i=>i.JournalComponent),canActivate:[X("super_admin","admin","manager")]},{path:"profil",loadComponent:()=>import("./chunk-ITVJ7JPR.js").then(i=>i.ProfilComponent)},{path:"parametres",loadComponent:()=>import("./chunk-PHN7KIZE.js").then(i=>i.ParametresComponent),canActivate:[X("super_admin","admin","manager")]}]},{path:"**",redirectTo:"dashboard"}];var Dn=(i,r)=>{let t=a(Y).getToken();return t&&(i=i.clone({setHeaders:{Authorization:`Bearer ${t}`}})),r(i)};var lt="Service workers are disabled or not supported by this browser",se=class{serviceWorker;worker;registration;events;constructor(r,e){if(this.serviceWorker=r,!r)this.worker=this.events=this.registration=new Me(t=>t.error(new w(5601,!1)));else{let t=null,n=new g;this.worker=new Me(h=>(t!==null&&h.next(t),n.subscribe(j=>h.next(j))));let o=()=>{let{controller:h}=r;h!==null&&(t=h,n.next(t))};r.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(V(()=>r.getRegistration().then(h=>{if(!h)throw new w(5601,!1);return h})));let s=new g;this.events=s.asObservable();let c=h=>{let{data:j}=h;j?.type&&s.next(j)};r.addEventListener("message",c),e?.get(Pe,null,{optional:!0})?.onDestroy(()=>{r.removeEventListener("controllerchange",o),r.removeEventListener("message",c)})}}postMessage(r,e){return new Promise(t=>{this.worker.pipe(I(1)).subscribe(n=>{n.postMessage(J({action:r},e)),t()})})}postMessageWithOperation(r,e,t){let n=this.waitForOperationCompleted(t),o=this.postMessage(r,e);return Promise.all([o,n]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(r){let e;return typeof r=="string"?e=t=>t.type===r:e=t=>r.includes(t.type),this.events.pipe(E(e))}nextEventOfType(r){return this.eventsOfType(r).pipe(I(1))}waitForOperationCompleted(r){return new Promise((e,t)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(E(n=>n.nonce===r),I(1),v(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).subscribe({next:e,error:t})})}get isEnabled(){return!!this.serviceWorker}},pi=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new g;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=L,this.notificationClicks=L,this.notificationCloses=L,this.pushSubscriptionChanges=L,this.subscription=L;return}this.messages=this.sw.eventsOfType("PUSH").pipe(v(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(v(n=>n.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(v(n=>n.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(v(n=>n.data)),this.pushManager=this.sw.registration.pipe(v(n=>n.pushManager));let t=this.pushManager.pipe(V(n=>n.getSubscription()));this.subscription=new Me(n=>{let o=t.subscribe(n),s=this.subscriptionChanges.subscribe(n);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(lt));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(n.length));for(let s=0;s<n.length;s++)o[s]=n.charCodeAt(s);return t.applicationServerKey=o,new Promise((s,c)=>{this.pushManager.pipe(V(u=>u.subscribe(t)),I(1)).subscribe({next:u=>{this.subscriptionChanges.next(u),s(u)},error:c})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(lt));let e=t=>{if(t===null)throw new w(5602,!1);return t.unsubscribe().then(n=>{if(!n)throw new w(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((t,n)=>{this.subscription.pipe(I(1),V(e)).subscribe({next:t,error:n})})}decodeBase64(e){return atob(e)}static \u0275fac=function(t){return new(t||i)(Ye(se))};static \u0275prov=le({token:i,factory:i.\u0275fac})}return i})(),hi=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=L,this.unrecoverable=L;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(lt));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new w(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(t){return new(t||i)(Ye(se))};static \u0275prov=le({token:i,factory:i.\u0275fac})}return i})(),Pn=new M("");function gi(){let i=a(ye);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let r=a(Pn),e=a(R),t=a(Pe);e.runOutsideAngular(()=>{let n=navigator.serviceWorker,o=()=>n.controller?.postMessage({action:"INITIALIZE"});n.addEventListener("controllerchange",o),t.onDestroy(()=>{n.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let n,{registrationStrategy:o}=i;if(typeof o=="function")n=new Promise(s=>o().subscribe(()=>s()));else{let[s,...c]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":n=Promise.resolve();break;case"registerWithDelay":n=Sn(+c[0]||0);break;case"registerWhenStable":n=Promise.race([t.whenStable(),Sn(+c[0])]);break;default:throw new w(5600,!1)}}n.then(()=>{t.destroyed||navigator.serviceWorker.register(r,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(s=>console.error(ut(5604,!1)))})})}function Sn(i){return new Promise(r=>setTimeout(r,i))}function fi(){let i=a(ye),r=a(C),e=!0;return new se(e&&i.enabled!==!1?navigator.serviceWorker:void 0,r)}var ye=class{enabled;updateViaCache;type;scope;registrationStrategy};function En(i,r={}){return Ce([pi,hi,{provide:Pn,useValue:i},{provide:ye,useValue:r},{provide:se,useFactory:fi},Mt(gi)])}var In={providers:[ht(),Nt(kn),Rt(At([Dn])),gn(),En("ngsw-worker.js",{enabled:!It(),registrationStrategy:"registerWhenStable:30000"})]};var Ue=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&x(0,"router-outlet")},dependencies:[Oe],encapsulation:2})};Tt(Ue,In).catch(i=>console.error(i));
