import{S as R,i as U,s as O,e as P,b as j,g as w,d as E,h,o as V,J as W,K as D,X as Z,k as X,l as Y,m as k,n as z,Y as I,Z as N,p as A,C as G,D as Q,L as x,M as $,N as ee,_ as te,w as le}from"./index.61793a16.js";import{b as v}from"./index.67c2d81e.js";function b(n){let l,s,a,e,r,c;const m=n[12].default,t=W(m,n,n[11],null);let d=[{href:n[1]},{class:a=D(["card",...n[0]].join(" "))+" svelte-88kl2o"}],_={};for(let o=0;o<d.length;o+=1)_=Z(_,d[o]);return{c(){l=X(n[1]?"a":"div"),s=X("div"),t&&t.c(),this.h()},l(o){l=Y(o,((n[1]?"a":"div")||"null").toUpperCase(),{href:!0,class:!0});var f=k(l);s=Y(f,"DIV",{class:!0});var u=k(s);t&&t.l(u),u.forEach(h),f.forEach(h),this.h()},h(){z(s,"class","flex-1 flex flex-col card-bg-img svelte-88kl2o"),/-/.test(n[1]?"a":"div")?I(l,_):N(l,_),A(l,"bgColor","red")},m(o,f){j(o,l,f),G(l,s),t&&t.m(s,null),n[13](l),e=!0,r||(c=Q(l,"mousemove",n[3]),r=!0)},p(o,f){t&&t.p&&(!e||f&2048)&&x(t,m,o,o[11],e?ee(m,o[11],f,null):$(o[11]),null),_=te(d,[(!e||f&2)&&{href:o[1]},(!e||f&1&&a!==(a=D(["card",...o[0]].join(" "))+" svelte-88kl2o"))&&{class:a}]),/-/.test(o[1]?"a":"div")?I(l,_):N(l,_)},i(o){e||(w(t,o),e=!0)},o(o){E(t,o),e=!1},d(o){o&&h(l),t&&t.d(o),n[13](null),r=!1,c()}}}function se(n){let l=n[1]?"a":"div",s,a,e=(n[1]?"a":"div")&&b(n);return{c(){e&&e.c(),s=P()},l(r){e&&e.l(r),s=P()},m(r,c){e&&e.m(r,c),j(r,s,c),a=!0},p(r,[c]){r[1],l?O(l,r[1]?"a":"div")?(e.d(1),e=b(r),e.c(),e.m(s.parentNode,s)):e.p(r,c):(e=b(r),e.c(),e.m(s.parentNode,s)),l=r[1]?"a":"div"},i(r){a||(w(e),a=!0)},o(r){E(e),a=!1},d(r){r&&h(s),e&&e.d(r)}}}function oe(n,l,s){let a,e,r,{$$slots:c={},$$scope:m}=l,t,{color:d="#ffffff00"}=l,{margin:_="0px"}=l,{tiltDegree:o=5}=l,{classes:f=[]}=l,{href:u=void 0}=l,{bgImg:g=void 0}=l;const F=i=>{const y=i.currentTarget.getBoundingClientRect(),M=i.clientX-y.left,S=i.clientY-y.top;t.style.setProperty("--drop-x",`${M}px`),t.style.setProperty("--drop-y",`${S}px`);const p=t.offsetWidth,C=t.offsetHeight,T=y.x+p/2,q=y.y+C/2,B=i.clientX-T,J=i.clientY-q,K=(o*B/(p/2)).toFixed(2),L=(-1*(o*J)/(C/2)).toFixed(2);t.style.setProperty("--rot-x",`${L}deg`),t.style.setProperty("--rot-y",`${K}deg`)};V(()=>{t.style.setProperty("margin",_),t.style.setProperty("--bg-img",g?`url(${g})`:"")});function H(i){le[i?"unshift":"push"](()=>{t=i,s(2,t)})}return n.$$set=i=>{"color"in i&&s(4,d=i.color),"margin"in i&&s(5,_=i.margin),"tiltDegree"in i&&s(6,o=i.tiltDegree),"classes"in i&&s(0,f=i.classes),"href"in i&&s(1,u=i.href),"bgImg"in i&&s(7,g=i.bgImg),"$$scope"in i&&s(11,m=i.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&s(10,a=v.changeColorOpacity(d,.5)),n.$$.dirty&16&&s(9,e=v.changeColorOpacity(d,.15)),n.$$.dirty&16&&s(8,r=v.changeColorOpacity(d,.01)),n.$$.dirty&1796&&t&&(t.style.setProperty("--border-color",a),t.style.setProperty("--drop-color",e),t.style.setProperty("--bg-color",r))},[f,u,t,F,d,_,o,g,r,e,a,m,c,H]}class ae extends R{constructor(l){super(),U(this,l,oe,se,O,{color:4,margin:5,tiltDegree:6,classes:0,href:1,bgImg:7})}}export{ae as C};
