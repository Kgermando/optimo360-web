import{a as Qe}from"./chunk-QXHVS7JE.js";import{a as ze,b as Re,c as Le}from"./chunk-LARXWZPJ.js";import"./chunk-7W47JS63.js";import{b as Se,e as Oe,f as ke,s as Be,t as Ve}from"./chunk-5K5O5VX3.js";import{b as Fe,i as He,j as Ne}from"./chunk-ZEQHQ57X.js";import{P as De,e as ve,m as Ce,p as z,y as we}from"./chunk-PCWNDGIG.js";import{b as R}from"./chunk-XEF7SXCA.js";import"./chunk-ZFG7P5LY.js";import{a as Te,g as Ie}from"./chunk-5KQFJXAV.js";import{a as je}from"./chunk-O3YZGWN4.js";import"./chunk-DFGXQT3Q.js";import{B as Ee,C as Pe,D as Ae,e as be,r as ye,y as Me}from"./chunk-VSC4XGXL.js";import{$a as ae,A as v,Ab as Q,Bb as O,Bc as j,Cb as k,Db as h,Eb as i,Ec as w,F as X,Fb as a,Fc as _e,Hb as T,Ib as q,Jb as de,Nb as pe,P as G,Rb as E,Tb as u,Ua as s,Ub as U,Vb as x,Wb as le,Xb as ce,Y as A,Yb as I,Zb as F,_ as f,a as P,aa as d,bb as ie,cc as me,dc as H,e as L,eb as oe,ec as ge,fa as Y,fc as o,ga as J,gc as c,ha as ee,hc as W,ib as y,ic as he,j as K,jb as D,ka as ne,kb as b,kc as N,na as g,nb as re,nc as ue,oa as te,ob as se,oc as xe,sa as _,vc as fe,wa as B,xb as S,y as $,yb as C,za as V,zb as M}from"./chunk-3ZGOTDZA.js";import"./chunk-7CGTOI24.js";var qe=new f("CdkAccordion");var We=(()=>{class n{accordion=d(qe,{optional:!0,skipSelf:!0});_changeDetectorRef=d(j);_expansionDispatcher=d(R);_openCloseAllSubscription=P.EMPTY;closed=new g;opened=new g;destroyed=new g;expandedChange=new g;id=d(z).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=_(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",w],disabled:[2,"disabled","disabled",w]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[N([{provide:qe,useValue:void 0}])]})}return n})(),Ze=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=A({})}return n})();var on=["body"],rn=["bodyWrapper"],sn=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],dn=["mat-expansion-panel-header","*","mat-action-row"];function pn(n,p){}var ln=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],cn=["mat-panel-title","mat-panel-description","*"];function mn(n,p){n&1&&(T(0,"span",1),ee(),T(1,"svg",2),de(2,"path",3),q()())}var Ke=new f("MAT_ACCORDION"),$e=new f("MAT_EXPANSION_PANEL"),gn=(()=>{class n{_template=d(ae);_expansionPanel=d($e,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),Xe=new f("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Z=(()=>{class n extends We{_viewContainerRef=d(oe);_animationsDisabled=Ee();_document=d(ne);_ngZone=d(te);_elementRef=d(V);_renderer=d(ie);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new g;afterCollapse=new g;_inputChanges=new L;accordion=d(Ke,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=d(z).getId("mat-expansion-panel-header-");constructor(){super();let e=d(Xe,{optional:!0});this._expansionDispatcher=d(R),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(G(null),v(()=>this.expanded&&!this._portal),X(1)).subscribe(()=>{this._portal=new Se(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,r,l){if(t&1&&le(l,gn,5),t&2){let m;I(m=F())&&(r._lazyContent=m.first)}},viewQuery:function(t,r){if(t&1&&ce(on,5)(rn,5),t&2){let l;I(l=F())&&(r._body=l.first),I(l=F())&&(r._bodyWrapper=l.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,r){t&2&&H("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",w],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[N([{provide:Ke,useValue:void 0},{provide:$e,useExisting:n}]),re,B],ngContentSelectors:dn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,r){t&1&&(U(sn),x(0),i(1,"div",2,0)(3,"div",3,1)(5,"div",4),x(6,1),se(7,pn,0,0,"ng-template",5),a(),x(8,2),a()()),t&2&&(s(),S("inert",r.expanded?null:""),s(2),h("id",r.id),S("aria-labelledby",r._headerId),s(4),h("cdkPortalOutlet",r._portal))},dependencies:[Oe],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ge=(()=>{class n{panel=d(Z,{host:!0});_element=d(V);_focusMonitor=d(ve);_changeDetectorRef=d(j);_parentChangeSubscription=P.EMPTY;constructor(){d(ye).load(we);let e=this.panel,t=d(Xe,{optional:!0}),r=d(new fe("tabindex"),{optional:!0}),l=e.accordion?e.accordion._stateChanges.pipe(v(m=>!!(m.hideToggle||m.togglePosition))):K;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=$(e.opened,e.closed,l,e._inputChanges.pipe(v(m=>!!(m.hideToggle||m.disabled||m.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(v(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ce(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,r){t&1&&E("click",function(){return r._toggle()})("keydown",function(m){return r._keydown(m)}),t&2&&(S("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),me("height",r._getHeaderHeight()),H("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:_e(e)]},ngContentSelectors:cn,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,r){t&1&&(U(ln),T(0,"span",0),x(1),x(2,1),x(3,2),q(),C(4,mn,3,0,"span",1)),t&2&&(H("mat-content-hide-toggle",!r._showToggle()),s(4),M(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),Ye=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),Je=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})();var en=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=D({type:n});static \u0275inj=A({imports:[Ze,ke,Me]})}return n})();var un=(n,p)=>p.uuid;function xn(n,p){if(n&1&&(i(0,"mat-option",5),o(1),a()),n&2){let e=p.$implicit,t=u();h("value",e),s(),c(t.statusLabels[e])}}function fn(n,p){n&1&&(i(0,"mat-card",6),o(1,"Chargement..."),a())}function _n(n,p){n&1&&(i(0,"mat-card",6)(1,"mat-icon"),o(2,"inbox"),a(),i(3,"p"),o(4,"Aucune demande pour le moment."),a()())}function bn(n,p){if(n&1&&(i(0,"p",12)(1,"strong"),o(2,"Site web :"),a(),o(3),a()),n&2){let e=u().$implicit;s(3),W(" ",e.website)}}function vn(n,p){if(n&1&&(i(0,"mat-option",5),o(1),a()),n&2){let e=p.$implicit,t=u(3);h("value",e),s(),c(t.statusLabels[e])}}function yn(n,p){if(n&1){let e=pe();i(0,"mat-expansion-panel",8)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),o(3),a(),i(4,"mat-panel-description"),o(5),i(6,"span",9),o(7),a()()(),i(8,"div",10)(9,"div",11)(10,"div")(11,"strong"),o(12,"T\xE9l\xE9phone"),a(),i(13,"span"),o(14),a()(),i(15,"div")(16,"strong"),o(17,"Adresse"),a(),i(18,"span"),o(19),a()(),i(20,"div")(21,"strong"),o(22,"RCCM"),a(),i(23,"span"),o(24),a()(),i(25,"div")(26,"strong"),o(27,"IDNAT"),a(),i(28,"span"),o(29),a()(),i(30,"div")(31,"strong"),o(32,"N\xB0 Imp\xF4t"),a(),i(33,"span"),o(34),a()(),i(35,"div")(36,"strong"),o(37,"Secteur"),a(),i(38,"span"),o(39),a()(),i(40,"div")(41,"strong"),o(42,"Employ\xE9s"),a(),i(43,"span"),o(44),a()(),i(45,"div")(46,"strong"),o(47,"Caisses"),a(),i(48,"span"),o(49),a()(),i(50,"div")(51,"strong"),o(52,"Re\xE7ue le"),a(),i(53,"span"),o(54),ue(55,"date"),a()()(),C(56,bn,4,1,"p",12),i(57,"div",13)(58,"strong"),o(59,"Description de la structure"),a(),i(60,"p"),o(61),a()(),i(62,"div",14)(63,"mat-form-field",15)(64,"mat-label"),o(65,"Statut"),a(),i(66,"mat-select",3),E("valueChange",function(r){let l=Y(e).$implicit,m=u(2);return J(m.updateStatus(l,r))}),O(67,vn,2,2,"mat-option",5,Q),a()()()()()}if(n&2){let e=p.$implicit,t=u(2);s(3),W(" ",e.company_name," "),s(2),he(" ",e.contact_name," \xB7 ",e.email," "),s(),ge(e.status),s(),c(t.statusLabels[e.status]),s(7),c(e.phone),s(5),c(e.adresse),s(5),c(e.rccm||"\u2014"),s(5),c(e.idnat||"\u2014"),s(5),c(e.nimpot||"\u2014"),s(5),c(e.secteur_activite||"\u2014"),s(5),c(e.nb_employes),s(5),c(e.nb_caisses),s(5),c(xe(55,18,e.created_at,"dd/MM/yyyy HH:mm")),s(2),M(e.website?56:-1),s(5),c(e.message),s(5),h("value",e.status),s(),k(t.statusOptions)}}function Cn(n,p){if(n&1&&(i(0,"div",7),O(1,yn,69,21,"mat-expansion-panel",8,un),a()),n&2){let e=u();s(),k(e.demandes())}}var Mn={pending:"En attente",reviewed:"Examin\xE9e",accepted:"Accept\xE9e",rejected:"Refus\xE9e"},nn=class n{api=d(je);snack=d(Be);demandes=_([]);filter=_("all");loading=_(!0);statusLabels=Mn;statusOptions=["pending","reviewed","accepted","rejected"];ngOnInit(){this.load()}load(){this.loading.set(!0);let p=this.filter()==="all"?void 0:this.filter();this.api.getAdhesions(p).subscribe({next:e=>{this.demandes.set(e),this.loading.set(!1)},error:()=>{this.loading.set(!1),this.snack.open("Impossible de charger les demandes","Fermer",{duration:4e3})}})}onFilterChange(p){this.filter.set(p),this.load()}updateStatus(p,e){this.api.updateAdhesionStatus(p.uuid,e).subscribe({next:t=>{this.demandes.update(r=>r.map(l=>l.uuid===t.uuid?t:l)),this.snack.open("Statut mis \xE0 jour","Fermer",{duration:3e3})},error:()=>this.snack.open("Erreur lors de la mise \xE0 jour","Fermer",{duration:4e3})})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-demandes-adhesion"]],decls:18,vars:2,consts:[[1,"page"],[1,"page-header"],["appearance","outline",1,"filter-field"],[3,"valueChange","value"],["value","all"],[3,"value"],[1,"empty-card"],[1,"demandes-list"],[1,"demande-panel"],[1,"status-chip"],[1,"demande-body"],[1,"meta-grid"],[1,"website"],[1,"message-block"],[1,"actions"],["appearance","outline",1,"status-field"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"header",1)(2,"div")(3,"h1"),o(4,"Demandes d'adh\xE9sion"),a(),i(5,"p"),o(6,"Examinez les structures des entreprises qui souhaitent rejoindre la plateforme."),a()(),i(7,"mat-form-field",2)(8,"mat-label"),o(9,"Filtrer par statut"),a(),i(10,"mat-select",3),E("valueChange",function(l){return t.onFilterChange(l)}),i(11,"mat-option",4),o(12,"Toutes"),a(),O(13,xn,2,2,"mat-option",5,Q),a()()(),C(15,fn,2,0,"mat-card",6)(16,_n,5,0,"mat-card",6)(17,Cn,3,0,"div",7),a()),e&2&&(s(10),h("value",t.filter()),s(3),k(t.statusOptions),s(2),M(t.loading()?15:t.demandes().length===0?16:17))},dependencies:[Ie,Te,De,Ae,Pe,Qe,Le,He,Fe,Re,ze,Ne,Ve,en,Z,Ge,Je,Ye,be],styles:[".page[_ngcontent-%COMP%]{max-width:960px}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:24px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 6px;font-size:24px;font-weight:600}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--optimo-text-muted);font-size:14px}.filter-field[_ngcontent-%COMP%]{min-width:180px}.empty-card[_ngcontent-%COMP%]{padding:48px 24px;text-align:center;color:var(--optimo-text-muted)}.empty-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;margin-bottom:12px;opacity:.5}.empty-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.demandes-list[_ngcontent-%COMP%]{display:grid;gap:12px}.demande-panel[_ngcontent-%COMP%]{border-radius:12px!important;box-shadow:0 2px 8px #1f5a320a!important}.status-chip[_ngcontent-%COMP%]{margin-left:auto;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:500}.status-chip.pending[_ngcontent-%COMP%]{background:#fff8e6;color:#9a6b00}.status-chip.reviewed[_ngcontent-%COMP%]{background:#eef4ff;color:#1a56db}.status-chip.accepted[_ngcontent-%COMP%]{background:#ecfdf3;color:#067647}.status-chip.rejected[_ngcontent-%COMP%]{background:#fef3f2;color:#b42318}.demande-body[_ngcontent-%COMP%]{padding-top:8px}.meta-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 24px;margin-bottom:16px}.meta-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.meta-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:12px;color:var(--optimo-text-muted);text-transform:uppercase;letter-spacing:.03em}.meta-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:var(--optimo-text)}.website[_ngcontent-%COMP%]{margin:0 0 16px;font-size:14px}.message-block[_ngcontent-%COMP%]{background:#f8faf9;border-radius:10px;padding:14px 16px;margin-bottom:16px}.message-block[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:12px;color:var(--optimo-text-muted);text-transform:uppercase;letter-spacing:.03em;margin-bottom:8px}.message-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.55;white-space:pre-wrap}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.status-field[_ngcontent-%COMP%]{min-width:180px}@media(max-width:640px){.page-header[_ngcontent-%COMP%]{flex-direction:column}.meta-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};export{nn as DemandesAdhesionComponent};
