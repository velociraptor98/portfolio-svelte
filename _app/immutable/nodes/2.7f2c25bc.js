import{S as W,i as X,s as Y,k as E,l as k,m as y,h as g,n as d,b as w,E as _,I as N,G as x,H as oe,o as re,a as $,q as H,c as q,r as S,O as j,P as Q,u as ne,w as ie,y as ee,Q as ce,z as te,A as se,g as T,f as ue,d as B,B as le,v as he}from"../chunks/index.509efd15.js";import{I as me}from"../chunks/Icon.d3c307ad.js";import{t as fe}from"../chunks/theme.6ec4d23d.js";import{P as R,H as _e}from"../chunks/params.21e503ab.js";import{u as F,a as ve}from"../chunks/helpers.2fc32a31.js";import{b as de}from"../chunks/index.67c2d81e.js";function J(o,s,t){const r=o.slice();return r[9]=s[t],r}function K(o){let s,t,r,a,e,n,l=o[9].name+"",f,p;return{c(){s=E("div"),t=E("img"),e=$(),n=E("span"),f=H(l),p=$(),this.h()},l(m){s=k(m,"DIV",{class:!0});var c=y(s);t=k(c,"IMG",{class:!0,src:!0,alt:!0}),e=q(c),n=k(c,"SPAN",{class:!0});var v=y(n);f=S(v,l),v.forEach(g),p=q(c),c.forEach(g),this.h()},h(){d(t,"class","carrousel-item-img svelte-4z11qv"),j(t.src,r=o[9].logo)||d(t,"src",r),d(t,"alt",a=o[9].name),Q(t,"carrousel-item-img-inverted",o[2]&&o[9].inverted),d(n,"class","carrousel-item-label svelte-4z11qv"),d(s,"class","carrousel-item svelte-4z11qv")},m(m,c){w(m,s,c),_(s,t),_(s,e),_(s,n),_(n,f),_(s,p)},p(m,c){c&1&&!j(t.src,r=m[9].logo)&&d(t,"src",r),c&1&&a!==(a=m[9].name)&&d(t,"alt",a),c&5&&Q(t,"carrousel-item-img-inverted",m[2]&&m[9].inverted),c&1&&l!==(l=m[9].name+"")&&ne(f,l)},d(m){m&&g(s)}}}function ge(o){let s,t,r=o[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=K(J(o,r,e));return{c(){s=E("div"),t=E("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){s=k(e,"DIV",{class:!0});var n=y(s);t=k(n,"DIV",{class:!0});var l=y(t);for(let f=0;f<a.length;f+=1)a[f].l(l);l.forEach(g),n.forEach(g),this.h()},h(){d(t,"class","carrousel-content svelte-4z11qv"),d(s,"class","carrousel svelte-4z11qv")},m(e,n){w(e,s,n),_(s,t);for(let l=0;l<a.length;l+=1)a[l].m(t,null);o[4](t)},p(e,[n]){if(n&5){r=e[0];let l;for(l=0;l<r.length;l+=1){const f=J(e,r,l);a[l]?a[l].p(f,n):(a[l]=K(f),a[l].c(),a[l].m(t,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},i:N,o:N,d(e){e&&g(s),x(a,e),o[4](null)}}}const pe=1e3;function be(o,s,t){let r;oe(o,fe,v=>t(2,r=v));let{items:a=[]}=s,e,n,l=0,f=!0;const p=v=>{v?l<a.length-1?t(3,l=l+1):(t(3,l=l-1),f=!1):l>0?t(3,l=l-1):(t(3,l=l+1),f=!0)},m=v=>{clearTimeout(n),n=setTimeout(()=>{p(v),m(f)},pe)};re(()=>{m(!0)});function c(v){ie[v?"unshift":"push"](()=>{e=v,t(1,e)})}return o.$$set=v=>{"items"in v&&t(0,a=v.items)},o.$$.update=()=>{o.$$.dirty&10&&e&&e.scroll({left:l*150,behavior:"smooth"})},[a,e,r,l,c]}class Ee extends W{constructor(s){super(),X(this,s,be,ge,Y,{items:0})}}function L(o,s,t){const r=o.slice();return r[8]=s[t],r}function U(o){let s,t,r,a;return t=new me({props:{icon:o[8].icon,color:"var(--accent-text)"}}),{c(){s=E("a"),ee(t.$$.fragment),r=$(),this.h()},l(e){s=k(e,"A",{class:!0,href:!0,target:!0,rel:!0});var n=y(s);te(t.$$.fragment,n),r=q(n),n.forEach(g),this.h()},h(){d(s,"class","home-social-item svelte-yhat8"),d(s,"href",`${o[6](o[8].to)?"mailto:":""}${o[8].to}`),d(s,"target","_blank"),d(s,"rel","noreferrer")},m(e,n){w(e,s,n),se(t,s,null),_(s,r),a=!0},p:N,i(e){a||(T(t.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),a=!1},d(e){e&&g(s),le(t)}}}function ke(o){let s,t,r,a,e,n,l,f,p,m,c,v,C,z,M,D,V;document.title=s=F(o[4],R);let P=o[5],h=[];for(let i=0;i<P.length;i+=1)h[i]=U(L(o,P,i));const ae=i=>B(h[i],1,1,()=>{h[i]=null});return D=new Ee({props:{items:o[3]}}),{c(){t=$(),r=E("div"),a=E("div"),e=E("h1"),n=H(o[2]),l=$(),f=H(o[1]),p=H(","),m=$(),c=E("p"),v=H(o[0]),C=$(),z=E("div");for(let i=0;i<h.length;i+=1)h[i].c();M=$(),ee(D.$$.fragment),this.h()},l(i){ce("svelte-s4huv4",document.head).forEach(g),t=q(i),r=k(i,"DIV",{class:!0});var u=y(r);a=k(u,"DIV",{class:!0});var I=y(a);e=k(I,"H1",{class:!0});var A=y(e);n=S(A,o[2]),l=q(A),f=S(A,o[1]),p=S(A,","),A.forEach(g),m=q(I),c=k(I,"P",{class:!0});var O=y(c);v=S(O,o[0]),O.forEach(g),C=q(I),z=k(I,"DIV",{class:!0});var Z=y(z);for(let G=0;G<h.length;G+=1)h[G].l(Z);Z.forEach(g),I.forEach(g),M=q(u),te(D.$$.fragment,u),u.forEach(g),this.h()},h(){d(e,"class","home-title svelte-yhat8"),d(c,"class","home-subtitle svelte-yhat8"),d(z,"class","home-social svelte-yhat8"),d(a,"class","home-section svelte-yhat8"),d(r,"class","home svelte-yhat8")},m(i,b){w(i,t,b),w(i,r,b),_(r,a),_(a,e),_(e,n),_(e,l),_(e,f),_(e,p),_(a,m),_(a,c),_(c,v),_(a,C),_(a,z);for(let u=0;u<h.length;u+=1)h[u].m(z,null);_(r,M),se(D,r,null),V=!0},p(i,[b]){if((!V||b&16)&&s!==(s=F(i[4],R))&&(document.title=s),b&96){P=i[5];let u;for(u=0;u<P.length;u+=1){const I=L(i,P,u);h[u]?(h[u].p(I,b),T(h[u],1)):(h[u]=U(I),h[u].c(),T(h[u],1),h[u].m(z,null))}for(he(),u=P.length;u<h.length;u+=1)ae(u);ue()}},i(i){if(!V){for(let b=0;b<P.length;b+=1)T(h[b]);T(D.$$.fragment,i),V=!0}},o(i){h=h.filter(Boolean);for(let b=0;b<h.length;b+=1)B(h[b]);B(D.$$.fragment,i),V=!1},d(i){i&&g(t),i&&g(r),x(h,i),le(D)}}}function ye(o){const{description:s,lastName:t,links:r,name:a,skills:e,title:n}=_e,l=Object.keys(r).map(p=>{const m=r[p],c=ve(p);return{to:m,title:c.title,icon:c.icon}});return[s,t,a,e,n,l,p=>{const m=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!de.isBlank(p)&&m.test(p)}]}class Ve extends W{constructor(s){super(),X(this,s,ye,ke,Y,{})}}export{Ve as component};