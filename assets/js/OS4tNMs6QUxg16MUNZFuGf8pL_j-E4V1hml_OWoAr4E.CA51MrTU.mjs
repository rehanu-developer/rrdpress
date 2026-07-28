import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{U as t,q as n,y as r}from"./framer.CP4PdkW2.mjs";async function i(e,t,n){let r=l[e],i=r?await r(t,n):void 0,a={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]};for(let t of s){if(t.pageIds&&!t.pageIds.has(e))continue;let n=t.code(i);n&&a[t.placement].push({...t,code:n})}return a}var a,o,s,c,l,u,d;e((()=>{n(),a=e=>typeof e==`string`?e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`):``,o=e=>typeof e==`string`?e:String(e),s=[{code:e=>`\r
\r
<!-- 2. Organization Schema Script -->\r
<script type="application/ld+json">\r
{\r
  "@context": "https://schema.org",\r
  "@type": "Organization",\r
  "@id": "https://rrdpress.com/#organization",\r
  "name": "RRDPRESS",\r
  "legalName": "RRDPRESS LLC",\r
  "url": "https://rrdpress.com/",\r
  "logo": {\r
    "@type": "ImageObject",\r
    "@id": "https://rrdpress.com/#logo",\r
    "url": "https://rrdpress.com/assets/images/image-32.png",\r
    "caption": "RRDPRESS Logo"\r
  },\r
  "image": {\r
    "@type": "ImageObject",\r
    "url": "https://rrdpress.com/assets/images/image-32.png"\r
  },\r
  "description": "RRDPRESS provides AI Search Narrative Management, Precise Narrative Engineering, SEO, and heavyweight press distribution to control how artificial intelligence models and search engines perceive and surface your brand.",\r
  "knowsAbout": [\r
    "AI Search Narrative Management",\r
    "AI Search Optimization",\r
    "Search Engine Optimization (SEO)",\r
    "Public Relations (PR)",\r
    "Digital Authority",\r
    "Brand Reputation Management",\r
    "LLM Optimization",\r
    "Entity Optimization"\r
  ],\r
  "sameAs": [\r
    "https://twitter.com/rrdpress",\r
    "https://linkedin.com/company/rrdpress"\r
  ]\r
}\r
<\/script>`,id:`bXT4v09CG`,loadMode:`always`,name:`Organization Schema Markup`,pageIds:new Set([`pBeELKT9s`]),placement:`headStart`},{code:e=>`<script type="application/ld+json">\r
{\r
  "@context": "https://schema.org",\r
  "@type": "Article",\r
  "mainEntityOfPage": {\r
    "@type": "WebPage",\r
    "@id": "{{Page URL}}"\r
  },\r
  "headline": "{{Blog Title}}",\r
  "description": "{{Blog Excerpt/Summary}}",\r
  "image": "{{Blog Feature Image}}",  \r
  "author": {\r
    "@type": "Organization",\r
    "name": "RRDPRESS",\r
    "url": "https://rrdpress.com/"\r
  },  \r
  "publisher": {\r
    "@type": "Organization",\r
    "name": "RRDPRESS",\r
    "logo": {\r
      "@type": "ImageObject",\r
      "url": "https://rrdpress.com/assets/images/image-32.png"\r
    }\r
  },\r
  "datePublished": "{{Publish Date}}",\r
  "dateModified": "{{Modified Date}}"\r
}\r
<\/script>`,id:`SIE3Fg0gV`,loadMode:`always`,name:`Article Schema Markup`,pageIds:new Set([`RctWLXqQt`]),placement:`headStart`},{code:e=>`<link rel="canonical" href="https://rrdpress.com/" />`,id:`VHhRV4KYP`,loadMode:`always`,name:`Canonical Link Tag`,pageIds:new Set([`pBeELKT9s`]),placement:`headStart`},{code:e=>`<link rel="canonical" href="https://rrdpress.com/casestudies" />`,id:`mJ6WvRpw8`,loadMode:`always`,name:`Canonical URL Tag`,pageIds:new Set([`FYZKUDFtU`]),placement:`headStart`},{code:e=>`<link rel="canonical" href="https://rrdpress.com/pricing" />`,id:`MzEmu6WpH`,loadMode:`always`,name:`Canonical Link Tag`,pageIds:new Set([`DqrYdNICo`]),placement:`headStart`},{code:e=>`<meta name="robots" content="noindex, nofollow" />`,id:`toSxig7iZ`,loadMode:`always`,name:`Robots Meta Tag`,pageIds:new Set([`eeu3w4RAA`]),placement:`headStart`},{code:e=>{let t=e?.vKFaBGcFt??``;return`<link rel="canonical" href="https://rrdpress.com/case-studies/${t===void 0?`{{vKFaBGcFt}}`:o(a(t))}" />`},id:`Bnd3hgKUT`,loadMode:`always`,name:`Canonical Link Tag`,pageIds:new Set([`vS7puIghp`]),placement:`headStart`},{code:e=>{let t=e?.Buzsonlu4??``;return`<link rel="canonical" href="https://rrdpress.com/blogs/${t===void 0?`{{Buzsonlu4}}`:o(a(t))}" />`},id:`Au_LKE0I2`,loadMode:`always`,name:`Canonical URL Tag`,pageIds:new Set([`RctWLXqQt`]),placement:`headStart`}],c=new r,l={RctWLXqQt:async(e,n)=>{let r={from:{alias:`RctWLXqQt`,data:(await import(`./pStSYZIAC-F6vgMxMIbzlmBt84xQuBpRBVhTjVYEJks.CPL31GJ1.mjs`)).default,type:`Collection`},select:[{collection:`RctWLXqQt`,name:`Buzsonlu4`,type:`Identifier`}],where:t(e,`RctWLXqQt`)},i=await c.query(r,n);if(i.length===0)throw Error(`No data matches pathVariables`);return i[0]},vS7puIghp:async(e,n)=>{let r={from:{alias:`vS7puIghp`,data:(await import(`./slQkHRVC-jBAXMU1xvhpPvEy2vdPt-43Ka0kex5bNlI.COwolBcv.mjs`)).default,type:`Collection`},select:[{collection:`vS7puIghp`,name:`vKFaBGcFt`,type:`Identifier`}],where:t(e,`vS7puIghp`)},i=await c.query(r,n);if(i.length===0)throw Error(`No data matches pathVariables`);return i[0]}},u={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[`bXT4v09CG`,`SIE3Fg0gV`,`VHhRV4KYP`,`mJ6WvRpw8`,`MzEmu6WpH`,`toSxig7iZ`,`Bnd3hgKUT`,`Au_LKE0I2`]},d={exports:{snippetsSorting:{type:`variable`,annotations:{framerContractVersion:`1`}},getSnippets:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{d as __FramerMetadata__,i as getSnippets,u as snippetsSorting};
//# sourceMappingURL=OS4tNMs6QUxg16MUNZFuGf8pL_j-E4V1hml_OWoAr4E.CA51MrTU.mjs.map