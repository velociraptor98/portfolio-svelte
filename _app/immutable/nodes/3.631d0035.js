import{S as me,i as ue,s as de,y as F,z as S,A as q,g as E,d as V,B as A,F as Ee,k as D,a as P,q as K,l as I,m as b,c as T,h as _,r as O,n as k,b as U,C as u,u as ne,v as he,f as $e,E as ge,T as Ce,G as _e}from"../chunks/index.61793a16.js";import{c as De,g as re,u as ae}from"../chunks/helpers.0160106b.js";import{C as Ie,a as be}from"../chunks/CardTitle.7e86b312.js";import{C as ke}from"../chunks/CardLogo.e93192d9.js";import{C as Ve}from"../chunks/Chip.8b7c6ef7.js";import{C as we}from"../chunks/ChipIcon.7816a26b.js";import{t as ye}from"../chunks/theme.74aa1002.js";import{M as Pe}from"../chunks/MainTitle.603a5bc0.js";import{P as oe,a as Te}from"../chunks/params.aff2f515.js";function ie(s,t,l){const e=s.slice();return e[6]=t[l],e}function ce(s){let t,l;return t=new we({props:{logo:s[6].logo,name:s[6].name,inverted:s[1]&&s[6].inverted}}),{c(){F(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){q(t,e,n),l=!0},p(e,n){const i={};n&1&&(i.logo=e[6].logo),n&1&&(i.name=e[6].name),n&3&&(i.inverted=e[1]&&e[6].inverted),t.$set(i)},i(e){l||(E(t.$$.fragment,e),l=!0)},o(e){V(t.$$.fragment,e),l=!1},d(e){A(t,e)}}}function Me(s){let t,l,e,n,i,h,C,v,o,w,a,c,g=s[0].company.name+"",p,y,N,W,X,Y,H=s[0].location+"",Q,Z,G,L=s[0].description+"",R,ee,x,B;l=new ke({props:{src:s[0].company.logo,alt:s[0].company.name,size:75}}),h=new be({props:{title:s[0].title}}),w=new Ve({props:{label:s[0].employmentType,size:"0.75em"}});let z=s[0].skills,m=[];for(let r=0;r<z.length;r+=1)m[r]=ce(ie(s,z,r));const ve=r=>V(m[r],1,1,()=>{m[r]=null});return{c(){t=D("div"),F(l.$$.fragment),e=P(),n=D("div"),i=D("h3"),F(h.$$.fragment),C=P(),v=D("div"),o=P(),F(w.$$.fragment),a=P(),c=D("span"),p=K(g),y=P(),N=D("div"),W=K(s[2]),X=P(),Y=D("div"),Q=K(H),Z=P(),G=D("div"),R=K(L),ee=P(),x=D("div");for(let r=0;r<m.length;r+=1)m[r].c();this.h()},l(r){t=I(r,"DIV",{class:!0});var f=b(t);S(l.$$.fragment,f),e=T(f),n=I(f,"DIV",{class:!0});var d=b(n);i=I(d,"H3",{class:!0});var M=b(i);S(h.$$.fragment,M),C=T(M),v=I(M,"DIV",{class:!0}),b(v).forEach(_),o=T(M),S(w.$$.fragment,M),M.forEach(_),a=T(d),c=I(d,"SPAN",{class:!0});var j=b(c);p=O(j,g),j.forEach(_),y=T(d),N=I(d,"DIV",{class:!0});var $=b(N);W=O($,s[2]),$.forEach(_),X=T(d),Y=I(d,"DIV",{class:!0});var J=b(Y);Q=O(J,H),J.forEach(_),Z=T(d),G=I(d,"DIV",{class:!0});var le=b(G);R=O(le,L),le.forEach(_),ee=T(d),x=I(d,"DIV",{class:!0});var se=b(x);for(let te=0;te<m.length;te+=1)m[te].l(se);se.forEach(_),d.forEach(_),f.forEach(_),this.h()},h(){k(v,"class","experience-title-divider svelte-1pe2n5d"),k(i,"class","experience-title svelte-1pe2n5d"),k(c,"class","experience-company-name svelte-1pe2n5d"),k(N,"class","experience-period svelte-1pe2n5d"),k(Y,"class","experience-location svelte-1pe2n5d"),k(G,"class","experience-description svelte-1pe2n5d"),k(x,"class","experience-skills svelte-1pe2n5d"),k(n,"class","experience-data svelte-1pe2n5d"),k(t,"class","experience svelte-1pe2n5d")},m(r,f){U(r,t,f),q(l,t,null),u(t,e),u(t,n),u(n,i),q(h,i,null),u(i,C),u(i,v),u(i,o),q(w,i,null),u(n,a),u(n,c),u(c,p),u(n,y),u(n,N),u(N,W),u(n,X),u(n,Y),u(Y,Q),u(n,Z),u(n,G),u(G,R),u(n,ee),u(n,x);for(let d=0;d<m.length;d+=1)m[d].m(x,null);B=!0},p(r,f){const d={};f&1&&(d.src=r[0].company.logo),f&1&&(d.alt=r[0].company.name),l.$set(d);const M={};f&1&&(M.title=r[0].title),h.$set(M);const j={};if(f&1&&(j.label=r[0].employmentType),w.$set(j),(!B||f&1)&&g!==(g=r[0].company.name+"")&&ne(p,g),(!B||f&1)&&H!==(H=r[0].location+"")&&ne(Q,H),(!B||f&1)&&L!==(L=r[0].description+"")&&ne(R,L),f&3){z=r[0].skills;let $;for($=0;$<z.length;$+=1){const J=ie(r,z,$);m[$]?(m[$].p(J,f),E(m[$],1)):(m[$]=ce(J),m[$].c(),E(m[$],1),m[$].m(x,null))}for(he(),$=z.length;$<m.length;$+=1)ve($);$e()}},i(r){if(!B){E(l.$$.fragment,r),E(h.$$.fragment,r),E(w.$$.fragment,r);for(let f=0;f<z.length;f+=1)E(m[f]);B=!0}},o(r){V(l.$$.fragment,r),V(h.$$.fragment,r),V(w.$$.fragment,r),m=m.filter(Boolean);for(let f=0;f<m.length;f+=1)V(m[f]);B=!1},d(r){r&&_(t),A(l),A(h),A(w),ge(m,r)}}}function xe(s){let t,l;return t=new Ie({props:{margin:"0px 0px 20px 0px",tiltDegree:2,$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){F(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){q(t,e,n),l=!0},p(e,[n]){const i={};n&515&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){l||(E(t.$$.fragment,e),l=!0)},o(e){V(t.$$.fragment,e),l=!1},d(e){A(t,e)}}}function Be(s,t,l){let e;Ee(s,ye,o=>l(1,e=o));let{experience:n}=t;const i=De(n.period.from,n.period.to),h=`${re(n.period.from.getMonth())} ${n.period.from.getFullYear()}`,C=n.period.to?`${re(n.period.to.getMonth())} ${n.period.to.getFullYear()}`:"Present",v=`${h} - ${C} · ${i} month${i>1?"s":""}`;return s.$$set=o=>{"experience"in o&&l(0,n=o.experience)},[n,e,v]}class ze extends me{constructor(t){super(),ue(this,t,Be,xe,de,{experience:0})}}function fe(s,t,l){const e=s.slice();return e[2]=t[l],e}function Fe(s){let t;return{c(){t=K(s[1])},l(l){t=O(l,s[1])},m(l,e){U(l,t,e)},p:_e,d(l){l&&_(t)}}}function pe(s){let t,l;return t=new ze({props:{experience:s[2]}}),{c(){F(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){q(t,e,n),l=!0},p:_e,i(e){l||(E(t.$$.fragment,e),l=!0)},o(e){V(t.$$.fragment,e),l=!1},d(e){A(t,e)}}}function Se(s){let t,l,e,n,i,h,C;document.title=t=ae(s[1],oe),n=new Pe({props:{$$slots:{default:[Fe]},$$scope:{ctx:s}}});let v=s[0],o=[];for(let a=0;a<v.length;a+=1)o[a]=pe(fe(s,v,a));const w=a=>V(o[a],1,1,()=>{o[a]=null});return{c(){l=P(),e=D("div"),F(n.$$.fragment),i=P(),h=D("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){Ce("svelte-s4huv4",document.head).forEach(_),l=T(a),e=I(a,"DIV",{class:!0});var g=b(e);S(n.$$.fragment,g),i=T(g),h=I(g,"DIV",{class:!0});var p=b(h);for(let y=0;y<o.length;y+=1)o[y].l(p);p.forEach(_),g.forEach(_),this.h()},h(){k(h,"class","experience-experiences svelte-l1ygh2"),k(e,"class","experience svelte-l1ygh2")},m(a,c){U(a,l,c),U(a,e,c),q(n,e,null),u(e,i),u(e,h);for(let g=0;g<o.length;g+=1)o[g].m(h,null);C=!0},p(a,[c]){(!C||c&2)&&t!==(t=ae(a[1],oe))&&(document.title=t);const g={};if(c&32&&(g.$$scope={dirty:c,ctx:a}),n.$set(g),c&1){v=a[0];let p;for(p=0;p<v.length;p+=1){const y=fe(a,v,p);o[p]?(o[p].p(y,c),E(o[p],1)):(o[p]=pe(y),o[p].c(),E(o[p],1),o[p].m(h,null))}for(he(),p=v.length;p<o.length;p+=1)w(p);$e()}},i(a){if(!C){E(n.$$.fragment,a);for(let c=0;c<v.length;c+=1)E(o[c]);C=!0}},o(a){V(n.$$.fragment,a),o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)V(o[c]);C=!1},d(a){a&&_(l),a&&_(e),A(n),ge(o,a)}}}function qe(s){const{items:t,title:l}=Te;return[t,l]}class Oe extends me{constructor(t){super(),ue(this,t,qe,Se,de,{})}}export{Oe as component};
