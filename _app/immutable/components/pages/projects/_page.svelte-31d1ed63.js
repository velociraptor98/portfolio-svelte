import{S as ue,i as me,s as pe,k as Z,w as F,l as G,m as H,x as z,h as m,n as C,b as D,y as Y,f as $,t as d,z as N,F as Ve,a as B,q as ae,c as T,r as ie,C as M,g as ne,d as oe,u as ce,E as fe,N as Le,Y as Me,T as qe,Z as Be,o as Te,B as Fe}from"../../../chunks/index-cfef3dd3.js";import{C as $e}from"../../../chunks/Chip-705d0813.js";import{I as ze}from"../../../chunks/Input-8b8029d4.js";import{M as Ye}from"../../../chunks/MainTitle-5608568a.js";import{c as Ne,g as he,u as ge}from"../../../chunks/helpers-d0eb819c.js";import{C as Ae,a as Re}from"../../../chunks/CardTitle-053a3857.js";import{I as Ue}from"../../../chunks/Icon-0c3efb38.js";import{I as Ze,P as de,b as Ge}from"../../../chunks/params-51d20861.js";import{C as ve}from"../../../chunks/CardDivider-9faa2e77.js";import{C as He}from"../../../chunks/ChipIcon-e0279b2c.js";import{C as Je}from"../../../chunks/CardLogo-9599b185.js";import{t as Ke}from"../../../chunks/theme-b9fbc695.js";function Oe(r){let t,n,e;return n=new Ue({props:{icon:Ze.Link,size:"17px"}}),{c(){t=Z("a"),F(n.$$.fragment),this.h()},l(o){t=G(o,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=H(t);z(n.$$.fragment,a),a.forEach(m),this.h()},h(){C(t,"class","card-link svelte-e00lk8"),C(t,"href",r[1]),C(t,"title",r[0]),C(t,"target","_blank"),C(t,"rel","noreferrer"),C(t,"data-help",r[0])},m(o,a){D(o,t,a),Y(n,t,null),e=!0},p(o,[a]){(!e||a&2)&&C(t,"href",o[1]),(!e||a&1)&&C(t,"title",o[0]),(!e||a&1)&&C(t,"data-help",o[0])},i(o){e||($(n.$$.fragment,o),e=!0)},o(o){d(n.$$.fragment,o),e=!1},d(o){o&&m(t),N(n)}}}function Qe(r,t,n){let{label:e}=t,{to:o}=t;return r.$$set=a=>{"label"in a&&n(0,e=a.label),"to"in a&&n(1,o=a.to)},[e,o]}class We extends ue{constructor(t){super(),me(this,t,Qe,Oe,pe,{label:0,to:1})}}function be(r,t,n){const e=r.slice();return e[6]=t[n],e}function je(r,t,n){const e=r.slice();return e[9]=t[n],e}function ke(r){let t,n;return t=new We({props:{label:r[9].label??"",to:r[9].to}}),{c(){F(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){Y(t,e,o),n=!0},p(e,o){const a={};o&1&&(a.label=e[9].label??""),o&1&&(a.to=e[9].to),t.$set(a)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function we(r){let t,n;return t=new $e({props:{label:r[1]}}),{c(){F(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){Y(t,e,o),n=!0},p(e,o){const a={};o&2&&(a.label=e[1]),t.$set(a)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Ce(r){let t,n;return t=new He({props:{logo:r[6].logo,name:r[6].name,inverted:r[4]&&r[6].inverted}}),{c(){F(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){Y(t,e,o),n=!0},p(e,o){const a={};o&1&&(a.logo=e[6].logo),o&1&&(a.name=e[6].name),o&17&&(a.inverted=e[4]&&e[6].inverted),t.$set(a)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function Xe(r){let t,n,e,o,a,_,E,v,S,P,J,p=r[0].type+"",b,A,V,L,h,O,R=r[0].description+"",g,le,s,c,j,K,f,U,y,W;t=new Je({props:{alt:r[0].name,src:r[0].logo,size:40,radius:"0"}}),o=new Re({props:{title:r[0].name}});let X=r[0].links,k=[];for(let l=0;l<X.length;l+=1)k[l]=ke(je(r,X,l));const ye=l=>d(k[l],1,1,()=>{k[l]=null});v=new ve({}),c=new $e({props:{label:r[2]}});let I=r[2]!==r[1]&&we(r);f=new ve({});let x=r[0].technologies,w=[];for(let l=0;l<x.length;l+=1)w[l]=Ce(be(r,x,l));const De=l=>d(w[l],1,1,()=>{w[l]=null});return{c(){F(t.$$.fragment),n=B(),e=Z("div"),F(o.$$.fragment),a=B(),_=Z("div");for(let l=0;l<k.length;l+=1)k[l].c();E=B(),F(v.$$.fragment),S=B(),P=Z("div"),J=Z("p"),b=ae(p),A=B(),V=Z("p"),L=ae(r[3]),h=B(),O=Z("p"),g=ae(R),le=B(),s=Z("div"),F(c.$$.fragment),j=B(),I&&I.c(),K=B(),F(f.$$.fragment),U=B(),y=Z("div");for(let l=0;l<w.length;l+=1)w[l].c();this.h()},l(l){z(t.$$.fragment,l),n=T(l),e=G(l,"DIV",{class:!0});var i=H(e);z(o.$$.fragment,i),a=T(i),_=G(i,"DIV",{class:!0});var q=H(_);for(let te=0;te<k.length;te+=1)k[te].l(q);q.forEach(m),i.forEach(m),E=T(l),z(v.$$.fragment,l),S=T(l),P=G(l,"DIV",{class:!0});var ee=H(P);J=G(ee,"P",{class:!0});var re=H(J);b=ie(re,p),re.forEach(m),A=T(ee),V=G(ee,"P",{class:!0});var u=H(V);L=ie(u,r[3]),u.forEach(m),ee.forEach(m),h=T(l),O=G(l,"P",{class:!0});var Q=H(O);g=ie(Q,R),Q.forEach(m),le=T(l),s=G(l,"DIV",{class:!0});var se=H(s);z(c.$$.fragment,se),j=T(se),I&&I.l(se),se.forEach(m),K=T(l),z(f.$$.fragment,l),U=T(l),y=G(l,"DIV",{class:!0});var _e=H(y);for(let te=0;te<w.length;te+=1)w[te].l(_e);_e.forEach(m),this.h()},h(){C(_,"class","project-card-links svelte-y9rnwj"),C(e,"class","project-card-top svelte-y9rnwj"),C(J,"class","project-card-type svelte-y9rnwj"),C(V,"class","project-card-period svelte-y9rnwj"),C(P,"class","project-card-mid svelte-y9rnwj"),C(O,"class","project-card-description svelte-y9rnwj"),C(s,"class","project-card-bottom svelte-y9rnwj"),C(y,"class","project-card-technologies svelte-y9rnwj")},m(l,i){Y(t,l,i),D(l,n,i),D(l,e,i),Y(o,e,null),M(e,a),M(e,_);for(let q=0;q<k.length;q+=1)k[q].m(_,null);D(l,E,i),Y(v,l,i),D(l,S,i),D(l,P,i),M(P,J),M(J,b),M(P,A),M(P,V),M(V,L),D(l,h,i),D(l,O,i),M(O,g),D(l,le,i),D(l,s,i),Y(c,s,null),M(s,j),I&&I.m(s,null),D(l,K,i),Y(f,l,i),D(l,U,i),D(l,y,i);for(let q=0;q<w.length;q+=1)w[q].m(y,null);W=!0},p(l,i){const q={};i&1&&(q.alt=l[0].name),i&1&&(q.src=l[0].logo),t.$set(q);const ee={};if(i&1&&(ee.title=l[0].name),o.$set(ee),i&1){X=l[0].links;let u;for(u=0;u<X.length;u+=1){const Q=je(l,X,u);k[u]?(k[u].p(Q,i),$(k[u],1)):(k[u]=ke(Q),k[u].c(),$(k[u],1),k[u].m(_,null))}for(ne(),u=X.length;u<k.length;u+=1)ye(u);oe()}(!W||i&1)&&p!==(p=l[0].type+"")&&ce(b,p),(!W||i&8)&&ce(L,l[3]),(!W||i&1)&&R!==(R=l[0].description+"")&&ce(g,R);const re={};if(i&4&&(re.label=l[2]),c.$set(re),l[2]!==l[1]?I?(I.p(l,i),i&6&&$(I,1)):(I=we(l),I.c(),$(I,1),I.m(s,null)):I&&(ne(),d(I,1,1,()=>{I=null}),oe()),i&17){x=l[0].technologies;let u;for(u=0;u<x.length;u+=1){const Q=be(l,x,u);w[u]?(w[u].p(Q,i),$(w[u],1)):(w[u]=Ce(Q),w[u].c(),$(w[u],1),w[u].m(y,null))}for(ne(),u=x.length;u<w.length;u+=1)De(u);oe()}},i(l){if(!W){$(t.$$.fragment,l),$(o.$$.fragment,l);for(let i=0;i<X.length;i+=1)$(k[i]);$(v.$$.fragment,l),$(c.$$.fragment,l),$(I),$(f.$$.fragment,l);for(let i=0;i<x.length;i+=1)$(w[i]);W=!0}},o(l){d(t.$$.fragment,l),d(o.$$.fragment,l),k=k.filter(Boolean);for(let i=0;i<k.length;i+=1)d(k[i]);d(v.$$.fragment,l),d(c.$$.fragment,l),d(I),d(f.$$.fragment,l),w=w.filter(Boolean);for(let i=0;i<w.length;i+=1)d(w[i]);W=!1},d(l){N(t,l),l&&m(n),l&&m(e),N(o),fe(k,l),l&&m(E),N(v,l),l&&m(S),l&&m(P),l&&m(h),l&&m(O),l&&m(le),l&&m(s),N(c),I&&I.d(),l&&m(K),N(f,l),l&&m(U),l&&m(y),fe(w,l)}}}function xe(r){let t,n;return t=new Ae({props:{color:r[0].color,$$slots:{default:[Xe]},$$scope:{ctx:r}}}),{c(){F(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){Y(t,e,o),n=!0},p(e,[o]){const a={};o&1&&(a.color=e[0].color),o&4127&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function et(r,t,n){let e,o,a,_,E;Ve(r,Ke,S=>n(4,E=S));let{project:v}=t;return r.$$set=S=>{"project"in S&&n(0,v=S.project)},r.$$.update=()=>{r.$$.dirty&1&&n(5,e=Ne(v.period.from,v.period.to)),r.$$.dirty&32&&n(3,o=`${e} month${e>1?"s":""}`),r.$$.dirty&1&&n(2,a=`${he(v.period.from.getMonth())} ${v.period.from.getFullYear()}`),r.$$.dirty&1&&n(1,_=v.period.to?`${he(v.period.to.getMonth())} ${v.period.to.getFullYear()}`:"now")},[v,_,a,o,E,e]}class tt extends ue{constructor(t){super(),me(this,t,et,xe,pe,{project:0})}}function Ee(r,t,n){const e=r.slice();return e[9]=t[n],e}function Ie(r,t,n){const e=r.slice();return e[12]=t[n],e}function lt(r){let t;return{c(){t=ae(r[3])},l(n){t=ie(n,r[3])},m(n,e){D(n,t,e)},p:Fe,d(n){n&&m(t)}}}function Pe(r){let t,n;function e(){return r[6](r[12])}return t=new $e({props:{label:r[12].name,active:r[12].isSelected}}),t.$on("click",e),{c(){F(t.$$.fragment)},l(o){z(t.$$.fragment,o)},m(o,a){Y(t,o,a),n=!0},p(o,a){r=o;const _={};a&1&&(_.label=r[12].name),a&1&&(_.active=r[12].isSelected),t.$set(_)},i(o){n||($(t.$$.fragment,o),n=!0)},o(o){d(t.$$.fragment,o),n=!1},d(o){N(t,o)}}}function Se(r){let t,n;return t=new tt({props:{project:r[9]}}),{c(){F(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,o){Y(t,e,o),n=!0},p(e,o){const a={};o&4&&(a.project=e[9]),t.$set(a)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){N(t,e)}}}function rt(r){let t,n,e,o,a,_,E,v,S,P,J,p,b;document.title=t=ge(r[3],de),o=new Ye({props:{$$slots:{default:[lt]},$$scope:{ctx:r}}});function A(s){r[5](s)}let V={placeholder:"Enter keywords..."};r[1]!==void 0&&(V.value=r[1]),E=new ze({props:V}),Le.push(()=>Me(E,"value",A));let L=r[0],h=[];for(let s=0;s<L.length;s+=1)h[s]=Pe(Ie(r,L,s));const O=s=>d(h[s],1,1,()=>{h[s]=null});let R=r[2],g=[];for(let s=0;s<R.length;s+=1)g[s]=Se(Ee(r,R,s));const le=s=>d(g[s],1,1,()=>{g[s]=null});return{c(){n=B(),e=Z("div"),F(o.$$.fragment),a=B(),_=Z("div"),F(E.$$.fragment),S=B(),P=Z("div");for(let s=0;s<h.length;s+=1)h[s].c();J=B(),p=Z("div");for(let s=0;s<g.length;s+=1)g[s].c();this.h()},l(s){qe("svelte-s4huv4",document.head).forEach(m),n=T(s),e=G(s,"DIV",{class:!0});var j=H(e);z(o.$$.fragment,j),a=T(j),_=G(j,"DIV",{class:!0});var K=H(_);z(E.$$.fragment,K),K.forEach(m),S=T(j),P=G(j,"DIV",{class:!0});var f=H(P);for(let y=0;y<h.length;y+=1)h[y].l(f);f.forEach(m),J=T(j),p=G(j,"DIV",{class:!0});var U=H(p);for(let y=0;y<g.length;y+=1)g[y].l(U);U.forEach(m),j.forEach(m),this.h()},h(){C(_,"class","projects-search svelte-plyfrh"),C(P,"class","projects-filters svelte-plyfrh"),C(p,"class","projects-list svelte-plyfrh"),C(e,"class","projects svelte-plyfrh")},m(s,c){D(s,n,c),D(s,e,c),Y(o,e,null),M(e,a),M(e,_),Y(E,_,null),M(e,S),M(e,P);for(let j=0;j<h.length;j+=1)h[j].m(P,null);M(e,J),M(e,p);for(let j=0;j<g.length;j+=1)g[j].m(p,null);b=!0},p(s,[c]){(!b||c&8)&&t!==(t=ge(s[3],de))&&(document.title=t);const j={};c&32768&&(j.$$scope={dirty:c,ctx:s}),o.$set(j);const K={};if(!v&&c&2&&(v=!0,K.value=s[1],Be(()=>v=!1)),E.$set(K),c&17){L=s[0];let f;for(f=0;f<L.length;f+=1){const U=Ie(s,L,f);h[f]?(h[f].p(U,c),$(h[f],1)):(h[f]=Pe(U),h[f].c(),$(h[f],1),h[f].m(P,null))}for(ne(),f=L.length;f<h.length;f+=1)O(f);oe()}if(c&4){R=s[2];let f;for(f=0;f<R.length;f+=1){const U=Ee(s,R,f);g[f]?(g[f].p(U,c),$(g[f],1)):(g[f]=Se(U),g[f].c(),$(g[f],1),g[f].m(p,null))}for(ne(),f=R.length;f<g.length;f+=1)le(f);oe()}},i(s){if(!b){$(o.$$.fragment,s),$(E.$$.fragment,s);for(let c=0;c<L.length;c+=1)$(h[c]);for(let c=0;c<R.length;c+=1)$(g[c]);b=!0}},o(s){d(o.$$.fragment,s),d(E.$$.fragment,s),h=h.filter(Boolean);for(let c=0;c<h.length;c+=1)d(h[c]);g=g.filter(Boolean);for(let c=0;c<g.length;c+=1)d(g[c]);b=!1},d(s){s&&m(n),s&&m(e),N(o),N(E),fe(h,s),fe(g,s)}}}function nt(r,t,n){const{items:e,title:o}=Ge;let a=e.reduce((p,b)=>(b.technologies.forEach(A=>{p.some(V=>V.name===A.name)||p.push(A)}),p),[]),_="",E=[];const v=p=>a.some(b=>b.name===p.name&&b.isSelected),S=p=>{n(0,a=a.map(b=>(b.name===p.name&&(b.isSelected=!v(b)),b)))};Te(()=>{if(location.search){const A=new URLSearchParams(location.search).get("item");A&&n(1,_=A)}});function P(p){_=p,n(1,_)}const J=p=>S(p);return r.$$.update=()=>{r.$$.dirty&3&&n(2,E=e.filter(p=>{const b=a.every(V=>!V.isSelected)||p.technologies.some(V=>a.some(L=>L.isSelected&&L.name===V.name)),A=_.trim().length===0||p.name.trim().toLowerCase().includes(_.trim().toLowerCase());return b&&A}))},[a,_,E,o,S,P,J]}class gt extends ue{constructor(t){super(),me(this,t,nt,rt,pe,{})}}export{gt as default};
