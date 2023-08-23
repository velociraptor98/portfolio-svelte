import{S as X,i as Z,s as x,y as N,z as B,A as S,g as V,d as P,B as j,k as C,a as y,q as A,l as D,m as b,c as M,h,r as F,n as I,b as U,C as d,u as K,T as te,f as ae,E as ne,G as ee,v as se}from"../chunks/index.61793a16.js";import{c as oe,g as L,u as O}from"../chunks/helpers.1e5d4d9d.js";import{C as le,a as re}from"../chunks/CardTitle.7e86b312.js";import{C as ie}from"../chunks/Chip.8b7c6ef7.js";import{M as ce}from"../chunks/MainTitle.603a5bc0.js";import{P as Q,E as ue}from"../chunks/params.e1efa8bf.js";function de(l){let t,a,e,s,$,f,v,c,o,T,n=l[0].UniversityName.name+"",i,m,r,_,Y,w,z=l[0].location+"",q,k;return s=new re({props:{title:l[0].subject}}),c=new ie({props:{label:l[0].educationType,size:"0.75em"}}),{c(){t=C("div"),a=C("div"),e=C("h3"),N(s.$$.fragment),$=y(),f=C("div"),v=y(),N(c.$$.fragment),o=y(),T=C("span"),i=A(n),m=y(),r=C("div"),_=A(l[1]),Y=y(),w=C("div"),q=A(z),this.h()},l(u){t=D(u,"DIV",{class:!0});var g=b(t);a=D(g,"DIV",{class:!0});var p=b(a);e=D(p,"H3",{class:!0});var E=b(e);B(s.$$.fragment,E),$=M(E),f=D(E,"DIV",{class:!0}),b(f).forEach(h),v=M(E),B(c.$$.fragment,E),E.forEach(h),o=M(p),T=D(p,"SPAN",{class:!0});var G=b(T);i=F(G,n),G.forEach(h),m=M(p),r=D(p,"DIV",{class:!0});var H=b(r);_=F(H,l[1]),H.forEach(h),Y=M(p),w=D(p,"DIV",{class:!0});var J=b(w);q=F(J,z),J.forEach(h),p.forEach(h),g.forEach(h),this.h()},h(){I(f,"class","education-title-divider svelte-vvhf1d"),I(e,"class","education-title svelte-vvhf1d"),I(T,"class","education-company-name svelte-vvhf1d"),I(r,"class","education-period svelte-vvhf1d"),I(w,"class","education-location svelte-vvhf1d"),I(a,"class","education-data svelte-vvhf1d"),I(t,"class","education svelte-vvhf1d")},m(u,g){U(u,t,g),d(t,a),d(a,e),S(s,e,null),d(e,$),d(e,f),d(e,v),S(c,e,null),d(a,o),d(a,T),d(T,i),d(a,m),d(a,r),d(r,_),d(a,Y),d(a,w),d(w,q),k=!0},p(u,g){const p={};g&1&&(p.title=u[0].subject),s.$set(p);const E={};g&1&&(E.label=u[0].educationType),c.$set(E),(!k||g&1)&&n!==(n=u[0].UniversityName.name+"")&&K(i,n),(!k||g&1)&&z!==(z=u[0].location+"")&&K(q,z)},i(u){k||(V(s.$$.fragment,u),V(c.$$.fragment,u),k=!0)},o(u){P(s.$$.fragment,u),P(c.$$.fragment,u),k=!1},d(u){u&&h(t),j(s),j(c)}}}function fe(l){let t,a;return t=new le({props:{margin:"0px 0px 20px 0px",tiltDegree:2,$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){N(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,s){S(t,e,s),a=!0},p(e,[s]){const $={};s&33&&($.$$scope={dirty:s,ctx:e}),t.$set($)},i(e){a||(V(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}function me(l,t,a){let{education:e}=t;const s=oe(e.period.from,e.period.to),$=`${L(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,f=e.period.to?`${L(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",v=`${$} - ${f} · ${s} month${s>1?"s":""}`;return l.$$set=c=>{"education"in c&&a(0,e=c.education)},[e,v]}class he extends X{constructor(t){super(),Z(this,t,me,fe,x,{education:0})}}function R(l,t,a){const e=l.slice();return e[2]=t[a],e}function $e(l){let t;return{c(){t=A(l[1])},l(a){t=F(a,l[1])},m(a,e){U(a,t,e)},p:ee,d(a){a&&h(t)}}}function W(l){let t,a;return t=new he({props:{education:l[2]}}),{c(){N(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,s){S(t,e,s),a=!0},p:ee,i(e){a||(V(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}function ve(l){let t,a,e,s,$,f,v;document.title=t=O(l[1],Q),s=new ce({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}});let c=l[0],o=[];for(let n=0;n<c.length;n+=1)o[n]=W(R(l,c,n));const T=n=>P(o[n],1,1,()=>{o[n]=null});return{c(){a=y(),e=C("div"),N(s.$$.fragment),$=y(),f=C("div");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){te("svelte-s4huv4",document.head).forEach(h),a=M(n),e=D(n,"DIV",{class:!0});var m=b(e);B(s.$$.fragment,m),$=M(m),f=D(m,"DIV",{class:!0});var r=b(f);for(let _=0;_<o.length;_+=1)o[_].l(r);r.forEach(h),m.forEach(h),this.h()},h(){I(f,"class","education-educations svelte-onrozi"),I(e,"class","education svelte-onrozi")},m(n,i){U(n,a,i),U(n,e,i),S(s,e,null),d(e,$),d(e,f);for(let m=0;m<o.length;m+=1)o[m].m(f,null);v=!0},p(n,[i]){(!v||i&2)&&t!==(t=O(n[1],Q))&&(document.title=t);const m={};if(i&32&&(m.$$scope={dirty:i,ctx:n}),s.$set(m),i&1){c=n[0];let r;for(r=0;r<c.length;r+=1){const _=R(n,c,r);o[r]?(o[r].p(_,i),V(o[r],1)):(o[r]=W(_),o[r].c(),V(o[r],1),o[r].m(f,null))}for(se(),r=c.length;r<o.length;r+=1)T(r);ae()}},i(n){if(!v){V(s.$$.fragment,n);for(let i=0;i<c.length;i+=1)V(o[i]);v=!0}},o(n){P(s.$$.fragment,n),o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)P(o[i]);v=!1},d(n){n&&h(a),n&&h(e),j(s),ne(o,n)}}}function pe(l){const{education:t,title:a}=ue;return[t,a]}class Ie extends X{constructor(t){super(),Z(this,t,pe,ve,x,{})}}export{Ie as component};