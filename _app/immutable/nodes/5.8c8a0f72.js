import{S as Q,i as W,s as X,k as R,y as L,l as H,m as J,z as q,h as v,n as I,b as V,A as y,g,d as b,B,F as fe,a as M,q as ie,c as A,r as ce,C as G,v as K,f as N,u as ue,E as O,w as me,U as _e,T as he,V as $e,o as pe,G as ge}from"../chunks/index.61793a16.js";import{C as de}from"../chunks/Chip.8b7c6ef7.js";import{I as ve}from"../chunks/Input.50001044.js";import{M as be}from"../chunks/MainTitle.603a5bc0.js";import{C as ke,a as je}from"../chunks/CardTitle.7e86b312.js";import{I as we}from"../chunks/Icon.63c9e7e5.js";import{I as Ce,P as Y,b as Ie}from"../chunks/params.e1efa8bf.js";import{C as Ee,a as Z}from"../chunks/CardLogo.7ddddc06.js";import{C as Se}from"../chunks/ChipIcon.7816a26b.js";import{t as Pe}from"../chunks/theme.74aa1002.js";import{u as x}from"../chunks/helpers.1e5d4d9d.js";function De(o){let t,s,e;return s=new we({props:{icon:Ce.Link,size:"17px"}}),{c(){t=R("a"),L(s.$$.fragment),this.h()},l(r){t=H(r,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=J(t);q(s.$$.fragment,a),a.forEach(v),this.h()},h(){I(t,"class","card-link svelte-e00lk8"),I(t,"href",o[1]),I(t,"title",o[0]),I(t,"target","_blank"),I(t,"rel","noreferrer"),I(t,"data-help",o[0])},m(r,a){V(r,t,a),y(s,t,null),e=!0},p(r,[a]){(!e||a&2)&&I(t,"href",r[1]),(!e||a&1)&&I(t,"title",r[0]),(!e||a&1)&&I(t,"data-help",r[0])},i(r){e||(g(s.$$.fragment,r),e=!0)},o(r){b(s.$$.fragment,r),e=!1},d(r){r&&v(t),B(s)}}}function Ve(o,t,s){let{label:e}=t,{to:r}=t;return o.$$set=a=>{"label"in a&&s(0,e=a.label),"to"in a&&s(1,r=a.to)},[e,r]}class Le extends Q{constructor(t){super(),W(this,t,Ve,De,X,{label:0,to:1})}}function ee(o,t,s){const e=o.slice();return e[2]=t[s],e}function te(o,t,s){const e=o.slice();return e[5]=t[s],e}function le(o){let t,s;return t=new Le({props:{label:o[5].label??"",to:o[5].to}}),{c(){L(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,r){y(t,e,r),s=!0},p(e,r){const a={};r&1&&(a.label=e[5].label??""),r&1&&(a.to=e[5].to),t.$set(a)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){B(t,e)}}}function ne(o){let t,s;return t=new Se({props:{logo:o[2].logo,name:o[2].name,inverted:o[1]&&o[2].inverted}}),{c(){L(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,r){y(t,e,r),s=!0},p(e,r){const a={};r&1&&(a.logo=e[2].logo),r&1&&(a.name=e[2].name),r&3&&(a.inverted=e[1]&&e[2].inverted),t.$set(a)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){B(t,e)}}}function qe(o){let t,s,e,r,a,$,j,S,T,w,z=o[0].description+"",h,d,C,P,k,_;t=new Ee({props:{alt:o[0].name,src:o[0].logo,size:40,radius:"0"}}),r=new je({props:{title:o[0].name}});let F=o[0].links,u=[];for(let l=0;l<F.length;l+=1)u[l]=le(te(o,F,l));const p=l=>b(u[l],1,1,()=>{u[l]=null});S=new Z({}),C=new Z({});let U=o[0].technologies,n=[];for(let l=0;l<U.length;l+=1)n[l]=ne(ee(o,U,l));const m=l=>b(n[l],1,1,()=>{n[l]=null});return{c(){L(t.$$.fragment),s=M(),e=R("div"),L(r.$$.fragment),a=M(),$=R("div");for(let l=0;l<u.length;l+=1)u[l].c();j=M(),L(S.$$.fragment),T=M(),w=R("p"),h=ie(z),d=M(),L(C.$$.fragment),P=M(),k=R("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){q(t.$$.fragment,l),s=A(l),e=H(l,"DIV",{class:!0});var c=J(e);q(r.$$.fragment,c),a=A(c),$=H(c,"DIV",{class:!0});var i=J($);for(let D=0;D<u.length;D+=1)u[D].l(i);i.forEach(v),c.forEach(v),j=A(l),q(S.$$.fragment,l),T=A(l),w=H(l,"P",{class:!0});var E=J(w);h=ce(E,z),E.forEach(v),d=A(l),q(C.$$.fragment,l),P=A(l),k=H(l,"DIV",{class:!0});var f=J(k);for(let D=0;D<n.length;D+=1)n[D].l(f);f.forEach(v),this.h()},h(){I($,"class","project-card-links svelte-y9rnwj"),I(e,"class","project-card-top svelte-y9rnwj"),I(w,"class","project-card-description svelte-y9rnwj"),I(k,"class","project-card-technologies svelte-y9rnwj")},m(l,c){y(t,l,c),V(l,s,c),V(l,e,c),y(r,e,null),G(e,a),G(e,$);for(let i=0;i<u.length;i+=1)u[i].m($,null);V(l,j,c),y(S,l,c),V(l,T,c),V(l,w,c),G(w,h),V(l,d,c),y(C,l,c),V(l,P,c),V(l,k,c);for(let i=0;i<n.length;i+=1)n[i].m(k,null);_=!0},p(l,c){const i={};c&1&&(i.alt=l[0].name),c&1&&(i.src=l[0].logo),t.$set(i);const E={};if(c&1&&(E.title=l[0].name),r.$set(E),c&1){F=l[0].links;let f;for(f=0;f<F.length;f+=1){const D=te(l,F,f);u[f]?(u[f].p(D,c),g(u[f],1)):(u[f]=le(D),u[f].c(),g(u[f],1),u[f].m($,null))}for(K(),f=F.length;f<u.length;f+=1)p(f);N()}if((!_||c&1)&&z!==(z=l[0].description+"")&&ue(h,z),c&3){U=l[0].technologies;let f;for(f=0;f<U.length;f+=1){const D=ee(l,U,f);n[f]?(n[f].p(D,c),g(n[f],1)):(n[f]=ne(D),n[f].c(),g(n[f],1),n[f].m(k,null))}for(K(),f=U.length;f<n.length;f+=1)m(f);N()}},i(l){if(!_){g(t.$$.fragment,l),g(r.$$.fragment,l);for(let c=0;c<F.length;c+=1)g(u[c]);g(S.$$.fragment,l),g(C.$$.fragment,l);for(let c=0;c<U.length;c+=1)g(n[c]);_=!0}},o(l){b(t.$$.fragment,l),b(r.$$.fragment,l),u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)b(u[c]);b(S.$$.fragment,l),b(C.$$.fragment,l),n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)b(n[c]);_=!1},d(l){B(t,l),l&&v(s),l&&v(e),B(r),O(u,l),l&&v(j),B(S,l),l&&v(T),l&&v(w),l&&v(d),B(C,l),l&&v(P),l&&v(k),O(n,l)}}}function ye(o){let t,s;return t=new ke({props:{color:o[0].color,$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){L(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,r){y(t,e,r),s=!0},p(e,[r]){const a={};r&1&&(a.color=e[0].color),r&259&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){B(t,e)}}}function Be(o,t,s){let e;fe(o,Pe,a=>s(1,e=a));let{project:r}=t;return o.$$set=a=>{"project"in a&&s(0,r=a.project)},[r,e]}class Te extends Q{constructor(t){super(),W(this,t,Be,ye,X,{project:0})}}function re(o,t,s){const e=o.slice();return e[9]=t[s],e}function se(o,t,s){const e=o.slice();return e[12]=t[s],e}function ze(o){let t;return{c(){t=ie(o[3])},l(s){t=ce(s,o[3])},m(s,e){V(s,t,e)},p:ge,d(s){s&&v(t)}}}function oe(o){let t,s;function e(){return o[6](o[12])}return t=new de({props:{label:o[12].name,active:o[12].isSelected}}),t.$on("click",e),{c(){L(t.$$.fragment)},l(r){q(t.$$.fragment,r)},m(r,a){y(t,r,a),s=!0},p(r,a){o=r;const $={};a&1&&($.label=o[12].name),a&1&&($.active=o[12].isSelected),t.$set($)},i(r){s||(g(t.$$.fragment,r),s=!0)},o(r){b(t.$$.fragment,r),s=!1},d(r){B(t,r)}}}function ae(o){let t,s;return t=new Te({props:{project:o[9]}}),{c(){L(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,r){y(t,e,r),s=!0},p(e,r){const a={};r&4&&(a.project=e[9]),t.$set(a)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){b(t.$$.fragment,e),s=!1},d(e){B(t,e)}}}function Me(o){let t,s,e,r,a,$,j,S,T,w,z,h,d;document.title=t=x(o[3],Y),r=new be({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}});function C(n){o[5](n)}let P={placeholder:"Enter keywords..."};o[1]!==void 0&&(P.value=o[1]),j=new ve({props:P}),me.push(()=>_e(j,"value",C));let k=o[0],_=[];for(let n=0;n<k.length;n+=1)_[n]=oe(se(o,k,n));const F=n=>b(_[n],1,1,()=>{_[n]=null});let u=o[2],p=[];for(let n=0;n<u.length;n+=1)p[n]=ae(re(o,u,n));const U=n=>b(p[n],1,1,()=>{p[n]=null});return{c(){s=M(),e=R("div"),L(r.$$.fragment),a=M(),$=R("div"),L(j.$$.fragment),T=M(),w=R("div");for(let n=0;n<_.length;n+=1)_[n].c();z=M(),h=R("div");for(let n=0;n<p.length;n+=1)p[n].c();this.h()},l(n){he("svelte-s4huv4",document.head).forEach(v),s=A(n),e=H(n,"DIV",{class:!0});var l=J(e);q(r.$$.fragment,l),a=A(l),$=H(l,"DIV",{class:!0});var c=J($);q(j.$$.fragment,c),c.forEach(v),T=A(l),w=H(l,"DIV",{class:!0});var i=J(w);for(let f=0;f<_.length;f+=1)_[f].l(i);i.forEach(v),z=A(l),h=H(l,"DIV",{class:!0});var E=J(h);for(let f=0;f<p.length;f+=1)p[f].l(E);E.forEach(v),l.forEach(v),this.h()},h(){I($,"class","projects-search svelte-plyfrh"),I(w,"class","projects-filters svelte-plyfrh"),I(h,"class","projects-list svelte-plyfrh"),I(e,"class","projects svelte-plyfrh")},m(n,m){V(n,s,m),V(n,e,m),y(r,e,null),G(e,a),G(e,$),y(j,$,null),G(e,T),G(e,w);for(let l=0;l<_.length;l+=1)_[l].m(w,null);G(e,z),G(e,h);for(let l=0;l<p.length;l+=1)p[l].m(h,null);d=!0},p(n,[m]){(!d||m&8)&&t!==(t=x(n[3],Y))&&(document.title=t);const l={};m&32768&&(l.$$scope={dirty:m,ctx:n}),r.$set(l);const c={};if(!S&&m&2&&(S=!0,c.value=n[1],$e(()=>S=!1)),j.$set(c),m&17){k=n[0];let i;for(i=0;i<k.length;i+=1){const E=se(n,k,i);_[i]?(_[i].p(E,m),g(_[i],1)):(_[i]=oe(E),_[i].c(),g(_[i],1),_[i].m(w,null))}for(K(),i=k.length;i<_.length;i+=1)F(i);N()}if(m&4){u=n[2];let i;for(i=0;i<u.length;i+=1){const E=re(n,u,i);p[i]?(p[i].p(E,m),g(p[i],1)):(p[i]=ae(E),p[i].c(),g(p[i],1),p[i].m(h,null))}for(K(),i=u.length;i<p.length;i+=1)U(i);N()}},i(n){if(!d){g(r.$$.fragment,n),g(j.$$.fragment,n);for(let m=0;m<k.length;m+=1)g(_[m]);for(let m=0;m<u.length;m+=1)g(p[m]);d=!0}},o(n){b(r.$$.fragment,n),b(j.$$.fragment,n),_=_.filter(Boolean);for(let m=0;m<_.length;m+=1)b(_[m]);p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)b(p[m]);d=!1},d(n){n&&v(s),n&&v(e),B(r),B(j),O(_,n),O(p,n)}}}function Ae(o,t,s){const{items:e,title:r}=Ie;let a=e.reduce((h,d)=>(d.technologies.forEach(C=>{h.some(P=>P.name===C.name)||h.push(C)}),h),[]),$="",j=[];const S=h=>a.some(d=>d.name===h.name&&d.isSelected),T=h=>{s(0,a=a.map(d=>(d.name===h.name&&(d.isSelected=!S(d)),d)))};pe(()=>{if(location.search){const C=new URLSearchParams(location.search).get("item");C&&s(1,$=C)}});function w(h){$=h,s(1,$)}const z=h=>T(h);return o.$$.update=()=>{o.$$.dirty&3&&s(2,j=e.filter(h=>{const d=a.every(P=>!P.isSelected)||h.technologies.some(P=>a.some(k=>k.isSelected&&k.name===P.name)),C=$.trim().length===0||h.name.trim().toLowerCase().includes($.trim().toLowerCase());return d&&C}))},[a,$,j,r,T,w,z]}class Xe extends Q{constructor(t){super(),W(this,t,Ae,Me,X,{})}}export{Xe as component};