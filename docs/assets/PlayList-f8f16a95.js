import{d as S,u as I,r as L,b as w,c as u,a as t,n as x,t as h,F as P,e as q,f as B,g as F,S as $,h as D,o as f,p as N,i as V,_ as z}from"./index-71463050.js";const i=d=>(N("data-v-50b70cce"),d=d(),V(),d),C={class:"official_pylst_header"},E=i(()=>t("div",{class:"ofplheader_mask"},null,-1)),G={class:"ofplheader_wrap"},M={class:"ofplheader_name f-brk f-thide2"},O={class:"ofplheader_tag"},R={class:"ofplheader_content f-brk f-thide3"},T=i(()=>t("br",null,null,-1)),U=i(()=>t("span",{class:"arrow"},null,-1)),j=i(()=>t("div",{class:"overflow",display:"none"},null,-1)),A=i(()=>t("h3",{class:"u-smtitle"},"歌曲列表",-1)),H=S({__name:"PlayList",setup(d){const{query:b}=I(),y=b.id,e=L([]);let v=[];const r=(_,s,p=!0)=>{D(_,{method:"POST"}).then(a=>{var l,o,n,c;e.value=a,v=(o=(l=a==null?void 0:a.playlist)==null?void 0:l.description)==null?void 0:o.split(`
`),(a.code!==200||!((c=(n=a==null?void 0:a.playlist)==null?void 0:n.tracks)!=null&&c.length))&&p&&r(s,"",!1)}).catch(()=>{r(s,"",!1)})};return w(()=>{const _=`/playlist/detail?id=${y}`,s=`/mock/playlist/detail?id=${y}`;r(_,s)}),(_,s)=>{var p,a,l,o,n,c,m,g;return f(),u("div",null,[t("section",C,[t("div",{class:"ofplheader_bg",style:x(`background-image: url(${((a=(p=e.value)==null?void 0:p.playlist)==null?void 0:a.coverImgUrl)+"?param=170y170"})`)},null,4),E,t("div",G,[t("div",M,h((o=(l=e.value)==null?void 0:l.playlist)==null?void 0:o.name),1),t("div",null,[t("div",O,h((c=(n=e.value)==null?void 0:n.playlist)==null?void 0:c.updateFrequency),1)]),t("div",null,[t("div",R,[(f(!0),u(P,null,q(B(v),k=>(f(),u("span",null,[t("i",null,h(k),1),T]))),256)),U]),j])])]),A,F($,{data:(g=(m=e.value)==null?void 0:m.playlist)==null?void 0:g.tracks,isGray:!0},null,8,["data"])])}}});const K=z(H,[["__scopeId","data-v-50b70cce"]]);export{K as default};
