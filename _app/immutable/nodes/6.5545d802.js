import{S as M,i as O,s as R,a as y,y as v,k as T,O as S,h as i,c as C,z as g,l as q,m as z,n as d,b as _,A as b,g as p,d as $,B as k,q as V,r as B,I as w}from"../chunks/index.158b7385.js";import{C as A}from"../chunks/Chip.b61adad7.js";import{M as j}from"../chunks/MainTitle.039c2f18.js";import{P,R as x}from"../chunks/params.21e503ab.js";import{u as E}from"../chunks/helpers.2fc32a31.js";function F(r){let e;return{c(){e=V(r[1])},l(t){e=B(t,r[1])},m(t,s){_(t,e,s)},p:w,d(t){t&&i(e)}}}function G(r){let e,t;return e=new A({props:{label:"Ooops! no CV at the moment."}}),{c(){v(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){b(e,s,n),t=!0},p:w,i(s){t||(p(e.$$.fragment,s),t=!0)},o(s){$(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function H(r){let e,t,s;return t=new A({props:{label:"Download",size:"1.25em"}}),{c(){e=T("a"),v(t.$$.fragment),this.h()},l(n){e=q(n,"A",{href:!0,class:!0});var l=z(e);g(t.$$.fragment,l),l.forEach(i),this.h()},h(){d(e,"href",r[0]),d(e,"class","svelte-wl30ce")},m(n,l){_(n,e,l),b(t,e,null),s=!0},p:w,i(n){s||(p(t.$$.fragment,n),s=!0)},o(n){$(t.$$.fragment,n),s=!1},d(n){n&&i(e),k(t)}}}function J(r){let e,t,s,n,l,m,c,f;document.title=e=E(r[1],P),s=new j({props:{$$slots:{default:[F]},$$scope:{ctx:r}}});const D=[H,G],h=[];function I(a,o){return a[0]?0:1}return m=I(r),c=h[m]=D[m](r),{c(){t=y(),v(s.$$.fragment),n=y(),l=T("div"),c.c(),this.h()},l(a){S("svelte-s4huv4",document.head).forEach(i),t=C(a),g(s.$$.fragment,a),n=C(a),l=q(a,"DIV",{class:!0});var u=z(l);c.l(u),u.forEach(i),this.h()},h(){d(l,"class","resume svelte-wl30ce")},m(a,o){_(a,t,o),b(s,a,o),_(a,n,o),_(a,l,o),h[m].m(l,null),f=!0},p(a,[o]){(!f||o&2)&&e!==(e=E(a[1],P))&&(document.title=e);const u={};o&4&&(u.$$scope={dirty:o,ctx:a}),s.$set(u),c.p(a,o)},i(a){f||(p(s.$$.fragment,a),p(c),f=!0)},o(a){$(s.$$.fragment,a),$(c),f=!1},d(a){a&&i(t),k(s,a),a&&i(n),a&&i(l),h[m].d()}}}function K(r){const{cv:e,title:t}=x;return[e,t]}class X extends M{constructor(e){super(),O(this,e,K,J,R,{})}}export{X as component};