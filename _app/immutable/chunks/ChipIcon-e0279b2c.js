import{S as d,i as v,s as y,k as m,l as g,m as b,h as f,n,P as _,Q as o,b as C,C as w,B as u,F as I}from"./index-cfef3dd3.js";import{t as p}from"./theme-b9fbc695.js";function q(i){let e,a,c;return{c(){e=m("div"),a=m("img"),this.h()},l(s){e=g(s,"DIV",{class:!0,"data-help":!0});var t=b(e);a=g(t,"IMG",{class:!0,src:!0,alt:!0}),t.forEach(f),this.h()},h(){n(a,"class","chip-icon-logo svelte-1w2wshb"),_(a.src,c=i[1])||n(a,"src",c),n(a,"alt",i[0]),o(a,"chip-icon-logo-inverted",i[4]&&i[2]),n(e,"class","chip-icon svelte-1w2wshb"),n(e,"data-help",i[0]),o(e,"chip-icon-grayscale",i[3])},m(s,t){C(s,e,t),w(e,a)},p(s,[t]){t&2&&!_(a.src,c=s[1])&&n(a,"src",c),t&1&&n(a,"alt",s[0]),t&20&&o(a,"chip-icon-logo-inverted",s[4]&&s[2]),t&1&&n(e,"data-help",s[0]),t&8&&o(e,"chip-icon-grayscale",s[3])},i:u,o:u,d(s){s&&f(e)}}}function S(i,e,a){let c;I(i,p,l=>a(4,c=l));let{name:s}=e,{logo:t}=e,{inverted:r=!1}=e,{grayscale:h=!0}=e;return i.$$set=l=>{"name"in l&&a(0,s=l.name),"logo"in l&&a(1,t=l.logo),"inverted"in l&&a(2,r=l.inverted),"grayscale"in l&&a(3,h=l.grayscale)},[s,t,r,h,c]}class D extends d{constructor(e){super(),v(this,e,S,q,y,{name:0,logo:1,inverted:2,grayscale:3})}}export{D as C};
