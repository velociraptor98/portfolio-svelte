import{S as R,i as U,s as W,k as M,y as V,l as G,m as Q,z as B,h as v,n as C,b as D,A as L,g,d as k,B as T,F as fe,a as q,q as ae,c as A,r as ie,C as y,v as K,f as N,u as ue,E as O,Q as me,G as $e}from"../chunks/index.33ef4ed0.js";import{C as _e}from"../chunks/Chip.d4cdea95.js";/* empty css                                                    */import{M as he}from"../chunks/MainTitle.9a1afd40.js";import{C as pe}from"../chunks/CardTitle.svelte_svelte_type_style_lang.701b7dbd.js";import{C as ge}from"../chunks/CardTitle.23164613.js";import{I as de}from"../chunks/Icon.6d34955c.js";import{I as ve,P as X,b as ke}from"../chunks/params.0143d7e2.js";import{C as Y}from"../chunks/CardDivider.bc0ae087.js";import{C as be}from"../chunks/ChipIcon.c087c32b.js";import{C as je}from"../chunks/CardLogo.6f9c372b.js";import{t as Ce}from"../chunks/theme.8a7467de.js";import{u as Z}from"../chunks/helpers.5486c410.js";function we(o){let t,n,e;return n=new de({props:{icon:ve.Link,size:"17px"}}),{c(){t=M("a"),V(n.$$.fragment),this.h()},l(r){t=G(r,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=Q(t);B(n.$$.fragment,a),a.forEach(v),this.h()},h(){C(t,"class","card-link svelte-e00lk8"),C(t,"href",o[1]),C(t,"title",o[0]),C(t,"target","_blank"),C(t,"rel","noreferrer"),C(t,"data-help",o[0])},m(r,a){D(r,t,a),L(n,t,null),e=!0},p(r,[a]){(!e||a&2)&&C(t,"href",r[1]),(!e||a&1)&&C(t,"title",r[0]),(!e||a&1)&&C(t,"data-help",r[0])},i(r){e||(g(n.$$.fragment,r),e=!0)},o(r){k(n.$$.fragment,r),e=!1},d(r){r&&v(t),T(n)}}}function Ee(o,t,n){let{label:e}=t,{to:r}=t;return o.$$set=a=>{"label"in a&&n(0,e=a.label),"to"in a&&n(1,r=a.to)},[e,r]}class Ie extends R{constructor(t){super(),U(this,t,Ee,we,W,{label:0,to:1})}}function x(o,t,n){const e=o.slice();return e[2]=t[n],e}function ee(o,t,n){const e=o.slice();return e[5]=t[n],e}function te(o){let t,n;return t=new Ie({props:{label:o[5].label??"",to:o[5].to}}),{c(){V(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){L(t,e,r),n=!0},p(e,r){const a={};r&1&&(a.label=e[5].label??""),r&1&&(a.to=e[5].to),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function le(o){let t,n;return t=new be({props:{logo:o[2].logo,name:o[2].name,inverted:o[1]&&o[2].inverted}}),{c(){V(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){L(t,e,r),n=!0},p(e,r){const a={};r&1&&(a.logo=e[2].logo),r&1&&(a.name=e[2].name),r&3&&(a.inverted=e[1]&&e[2].inverted),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function Se(o){let t,n,e,r,a,d,z,b,P,_,f=o[0].description+"",I,j,$,H,i,m;t=new je({props:{alt:o[0].name,src:o[0].logo,size:40,radius:"0"}}),r=new ge({props:{title:o[0].name}});let h=o[0].links,s=[];for(let l=0;l<h.length;l+=1)s[l]=te(ee(o,h,l));const F=l=>k(s[l],1,1,()=>{s[l]=null});b=new Y({}),$=new Y({});let w=o[0].technologies,p=[];for(let l=0;l<w.length;l+=1)p[l]=le(x(o,w,l));const ce=l=>k(p[l],1,1,()=>{p[l]=null});return{c(){V(t.$$.fragment),n=q(),e=M("div"),V(r.$$.fragment),a=q(),d=M("div");for(let l=0;l<s.length;l+=1)s[l].c();z=q(),V(b.$$.fragment),P=q(),_=M("p"),I=ae(f),j=q(),V($.$$.fragment),H=q(),i=M("div");for(let l=0;l<p.length;l+=1)p[l].c();this.h()},l(l){B(t.$$.fragment,l),n=A(l),e=G(l,"DIV",{class:!0});var c=Q(e);B(r.$$.fragment,c),a=A(c),d=G(c,"DIV",{class:!0});var E=Q(d);for(let S=0;S<s.length;S+=1)s[S].l(E);E.forEach(v),c.forEach(v),z=A(l),B(b.$$.fragment,l),P=A(l),_=G(l,"P",{class:!0});var J=Q(_);I=ie(J,f),J.forEach(v),j=A(l),B($.$$.fragment,l),H=A(l),i=G(l,"DIV",{class:!0});var u=Q(i);for(let S=0;S<p.length;S+=1)p[S].l(u);u.forEach(v),this.h()},h(){C(d,"class","project-card-links svelte-y9rnwj"),C(e,"class","project-card-top svelte-y9rnwj"),C(_,"class","project-card-description svelte-y9rnwj"),C(i,"class","project-card-technologies svelte-y9rnwj")},m(l,c){L(t,l,c),D(l,n,c),D(l,e,c),L(r,e,null),y(e,a),y(e,d);for(let E=0;E<s.length;E+=1)s[E].m(d,null);D(l,z,c),L(b,l,c),D(l,P,c),D(l,_,c),y(_,I),D(l,j,c),L($,l,c),D(l,H,c),D(l,i,c);for(let E=0;E<p.length;E+=1)p[E].m(i,null);m=!0},p(l,c){const E={};c&1&&(E.alt=l[0].name),c&1&&(E.src=l[0].logo),t.$set(E);const J={};if(c&1&&(J.title=l[0].name),r.$set(J),c&1){h=l[0].links;let u;for(u=0;u<h.length;u+=1){const S=ee(l,h,u);s[u]?(s[u].p(S,c),g(s[u],1)):(s[u]=te(S),s[u].c(),g(s[u],1),s[u].m(d,null))}for(K(),u=h.length;u<s.length;u+=1)F(u);N()}if((!m||c&1)&&f!==(f=l[0].description+"")&&ue(I,f),c&3){w=l[0].technologies;let u;for(u=0;u<w.length;u+=1){const S=x(l,w,u);p[u]?(p[u].p(S,c),g(p[u],1)):(p[u]=le(S),p[u].c(),g(p[u],1),p[u].m(i,null))}for(K(),u=w.length;u<p.length;u+=1)ce(u);N()}},i(l){if(!m){g(t.$$.fragment,l),g(r.$$.fragment,l);for(let c=0;c<h.length;c+=1)g(s[c]);g(b.$$.fragment,l),g($.$$.fragment,l);for(let c=0;c<w.length;c+=1)g(p[c]);m=!0}},o(l){k(t.$$.fragment,l),k(r.$$.fragment,l),s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)k(s[c]);k(b.$$.fragment,l),k($.$$.fragment,l),p=p.filter(Boolean);for(let c=0;c<p.length;c+=1)k(p[c]);m=!1},d(l){T(t,l),l&&v(n),l&&v(e),T(r),O(s,l),l&&v(z),T(b,l),l&&v(P),l&&v(_),l&&v(j),T($,l),l&&v(H),l&&v(i),O(p,l)}}}function Pe(o){let t,n;return t=new pe({props:{color:o[0].color,$$slots:{default:[Se]},$$scope:{ctx:o}}}),{c(){V(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){L(t,e,r),n=!0},p(e,[r]){const a={};r&1&&(a.color=e[0].color),r&259&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function De(o,t,n){let e;fe(o,Ce,a=>n(1,e=a));let{project:r}=t;return o.$$set=a=>{"project"in a&&n(0,r=a.project)},[r,e]}class Ve extends R{constructor(t){super(),U(this,t,De,Pe,W,{project:0})}}function re(o,t,n){const e=o.slice();return e[7]=t[n],e}function ne(o,t,n){const e=o.slice();return e[10]=t[n],e}function Be(o){let t;return{c(){t=ae(o[2])},l(n){t=ie(n,o[2])},m(n,e){D(n,t,e)},p:$e,d(n){n&&v(t)}}}function oe(o){let t,n;function e(){return o[4](o[10])}return t=new _e({props:{label:o[10].name,active:o[10].isSelected}}),t.$on("click",e),{c(){V(t.$$.fragment)},l(r){B(t.$$.fragment,r)},m(r,a){L(t,r,a),n=!0},p(r,a){o=r;const d={};a&1&&(d.label=o[10].name),a&1&&(d.active=o[10].isSelected),t.$set(d)},i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){k(t.$$.fragment,r),n=!1},d(r){T(t,r)}}}function se(o){let t,n;return t=new Ve({props:{project:o[7]}}),{c(){V(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){L(t,e,r),n=!0},p(e,r){const a={};r&2&&(a.project=e[7]),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){T(t,e)}}}function Le(o){let t,n,e,r,a,d,z,b,P;document.title=t=Z(o[2],X),r=new he({props:{$$slots:{default:[Be]},$$scope:{ctx:o}}});let _=o[0],f=[];for(let i=0;i<_.length;i+=1)f[i]=oe(ne(o,_,i));const I=i=>k(f[i],1,1,()=>{f[i]=null});let j=o[1],$=[];for(let i=0;i<j.length;i+=1)$[i]=se(re(o,j,i));const H=i=>k($[i],1,1,()=>{$[i]=null});return{c(){n=q(),e=M("div"),V(r.$$.fragment),a=q(),d=M("div");for(let i=0;i<f.length;i+=1)f[i].c();z=q(),b=M("div");for(let i=0;i<$.length;i+=1)$[i].c();this.h()},l(i){me("svelte-s4huv4",document.head).forEach(v),n=A(i),e=G(i,"DIV",{class:!0});var h=Q(e);B(r.$$.fragment,h),a=A(h),d=G(h,"DIV",{class:!0});var s=Q(d);for(let w=0;w<f.length;w+=1)f[w].l(s);s.forEach(v),z=A(h),b=G(h,"DIV",{class:!0});var F=Q(b);for(let w=0;w<$.length;w+=1)$[w].l(F);F.forEach(v),h.forEach(v),this.h()},h(){C(d,"class","projects-filters svelte-plyfrh"),C(b,"class","projects-list svelte-plyfrh"),C(e,"class","projects svelte-plyfrh")},m(i,m){D(i,n,m),D(i,e,m),L(r,e,null),y(e,a),y(e,d);for(let h=0;h<f.length;h+=1)f[h].m(d,null);y(e,z),y(e,b);for(let h=0;h<$.length;h+=1)$[h].m(b,null);P=!0},p(i,[m]){(!P||m&4)&&t!==(t=Z(i[2],X))&&(document.title=t);const h={};if(m&8192&&(h.$$scope={dirty:m,ctx:i}),r.$set(h),m&9){_=i[0];let s;for(s=0;s<_.length;s+=1){const F=ne(i,_,s);f[s]?(f[s].p(F,m),g(f[s],1)):(f[s]=oe(F),f[s].c(),g(f[s],1),f[s].m(d,null))}for(K(),s=_.length;s<f.length;s+=1)I(s);N()}if(m&2){j=i[1];let s;for(s=0;s<j.length;s+=1){const F=re(i,j,s);$[s]?($[s].p(F,m),g($[s],1)):($[s]=se(F),$[s].c(),g($[s],1),$[s].m(b,null))}for(K(),s=j.length;s<$.length;s+=1)H(s);N()}},i(i){if(!P){g(r.$$.fragment,i);for(let m=0;m<_.length;m+=1)g(f[m]);for(let m=0;m<j.length;m+=1)g($[m]);P=!0}},o(i){k(r.$$.fragment,i),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)k(f[m]);$=$.filter(Boolean);for(let m=0;m<$.length;m+=1)k($[m]);P=!1},d(i){i&&v(n),i&&v(e),T(r),O(f,i),O($,i)}}}function Te(o,t,n){const{items:e,title:r}=ke;let a=e.reduce((_,f)=>(f.technologies.forEach(I=>{_.some(j=>j.name===I.name)||_.push(I)}),_),[]),d=[];const z=_=>a.some(f=>f.name===_.name&&f.isSelected),b=_=>{n(0,a=a.map(f=>(f.name===_.name&&(f.isSelected=!z(f)),f)))},P=_=>b(_);return o.$$.update=()=>{o.$$.dirty&1&&n(1,d=e.filter(_=>a.every(I=>!I.isSelected)||_.technologies.some(I=>a.some(j=>j.isSelected&&j.name===I.name))))},[a,d,r,b,P]}class Re extends R{constructor(t){super(),U(this,t,Te,Le,W,{})}}export{Re as component};