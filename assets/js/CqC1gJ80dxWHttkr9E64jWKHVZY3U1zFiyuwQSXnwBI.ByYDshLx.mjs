import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{U as t,q as n,y as r}from"./framer.S4yswze6.mjs";async function i(e,t,n){let r=s[e],i=r?await r(t,n):void 0,o={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]};for(let t of a){if(t.pageIds&&!t.pageIds.has(e))continue;let n=t.code(i);n&&o[t.placement].push({...t,code:n})}return o}var a,o,s,c,l;e((()=>{n(),a=[{code:e=>`<!-- 1. Canonical aur OG URL Bypass Script -->\r
<script>\r
  document.addEventListener("DOMContentLoaded", function() {\r
    var canonical = document.querySelector('link[rel="canonical"]');\r
    if (canonical) {\r
      canonical.setAttribute('href', 'https://rrdpress.com/');\r
    }\r
    var ogUrl = document.querySelector('meta[property="og:url"]');\r
    if (ogUrl) {\r
      ogUrl.setAttribute('content', 'https://rrdpress.com/');\r
    }\r
  });\r
<\/script>\r
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
<\/script>`,id:`bXT4v09CG`,loadMode:`once`,name:`Organization Schema Markup`,pageIds:new Set([`pBeELKT9s`]),placement:`bodyEnd`},{code:e=>`<script type="application/ld+json">\r
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
<\/script>`,id:`SIE3Fg0gV`,loadMode:`once`,name:`Article Schema Markup`,pageIds:new Set([`RctWLXqQt`]),placement:`bodyEnd`}],o=new r,s={RctWLXqQt:async(e,n)=>{let r={from:{alias:`RctWLXqQt`,data:(await import(`./MB6ABbw2miQAQYOJI95q2EsHL5ZuJG_mGME8vP31_o8.BrfDJOzH.mjs`)).default,type:`Collection`},select:[],where:t(e,`RctWLXqQt`)},i=await o.query(r,n);if(i.length===0)throw Error(`No data matches pathVariables`);return i[0]}},c={bodyEnd:[`bXT4v09CG`,`SIE3Fg0gV`],bodyStart:[],headEnd:[],headStart:[]},l={exports:{getSnippets:{type:`function`,annotations:{framerContractVersion:`1`}},snippetsSorting:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{l as __FramerMetadata__,i as getSnippets,c as snippetsSorting};
//# sourceMappingURL=CqC1gJ80dxWHttkr9E64jWKHVZY3U1zFiyuwQSXnwBI.ByYDshLx.mjs.map