(self.webpackChunkgatsby_starter_hoodie=self.webpackChunkgatsby_starter_hoodie||[]).push([[230],{1309:function(e,t,n){"use strict";var o=n(7294),l=n(2788),a=n(9583),i=n(9349);const r=l.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-5v8ml6-0"})(["display:flex;align-items:center;@media (max-width:860px){padding:0 15px;}"]),c="undefined"!=typeof window&&"localhost:8000"===window.location.host?"http://localhost:8000":i.siteUrl,s=l.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-5v8ml6-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.png);background-size:cover;background-position:center;"],c),m=l.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-5v8ml6-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(e=>e.theme.colors.text)),d=l.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-5v8ml6-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(e=>e.theme.colors.secondaryText)),p=l.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-5v8ml6-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(e=>e.theme.colors.icon),(e=>e.theme.colors.text)),u=e=>{let{link:t,children:n}=e;return t?o.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.Z=()=>{const{github:e,kaggle:t,instagram:n,facebook:l,linkedIn:c,email:g,etc:h}=i.links;return o.createElement(r,{id:"bio"},o.createElement(s,null),o.createElement("div",null,o.createElement(m,null,"@",i.author),o.createElement(d,null,i.description),o.createElement(p,null,o.createElement(u,{link:e},o.createElement(a.hJX,null)),o.createElement(u,{link:t},o.createElement(a.jnu,null)),o.createElement(u,{link:n},o.createElement(a.Zf_,null)),o.createElement(u,{link:l},o.createElement(a.Am9,null)),o.createElement(u,{link:c},o.createElement(a.ltd,null)),o.createElement(u,{link:g},o.createElement(a.SRX,null)),o.createElement(u,{link:h},o.createElement(a.gjK,null)))))}},7074:function(e,t,n){"use strict";var o=n(7294),l=n(1883),a=n(2788);const i=a.default.div.withConfig({displayName:"PageIndex__PageIndexContainer",componentId:"sc-k2x4hz-0"})(["text-align:center;margin-bottom:48px;color:",";;& > a{text-decoration:none;color:inherit;}"],(e=>e.theme.colors.text)),r=(0,a.default)(l.Link).withConfig({displayName:"PageIndex__PageLink",componentId:"sc-k2x4hz-1"})(["text-decoration:none;margin:0 1px;padding:5px 10px;transition:background-color 0.3s,color 0.3s;color:",";;&:hover{text-decoration:none;border-bottom:2px solid ",";;color:",";;}"],(e=>e.theme.colors.text),(e=>e.theme.colors.hrefLink),(e=>e.theme.colors.text)),c=(0,a.default)(r).withConfig({displayName:"PageIndex__CurrentPageLink",componentId:"sc-k2x4hz-2"})(["border-bottom:2px solid ",";;color:",";;"],(e=>e.theme.colors.hrefLink),(e=>e.theme.colors.text));t.Z=e=>{let{currentPage:t,totalPage:n}=e;const a=Array.from({length:n},((e,t)=>t+1)),s=Math.min(Math.max(1,t-2),n-5>=1?n-5:1),m=Math.min(s+5-1,n);return o.createElement(i,null,t>3&&n>5&&o.createElement(r,{to:2===t?"/":"/page/"+(t-1)},"<"),a.slice(s-1,m).map((e=>o.createElement(l.Link,{key:e,to:1===e?"/":"/page/"+e,className:e===t?"current-page":""},e===t?o.createElement(c,{to:"/page/"+e},e):o.createElement(r,{to:"/page/"+e},e)))),t<n-3&&n>5&&o.createElement(r,{to:"/page/"+(t+1)},">"))}},4246:function(e,t,n){"use strict";var o=n(3493),l=n.n(o),a=n(7294),i=n(2788),r=n(1883),c=n(2213),s=n(729),m=n(184);const d=i.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1oqnm6-0"})(["@media (max-width:860px){padding:0 10px;}"]),p=i.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1oqnm6-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:860px){padding:0 5px;}"]),u=i.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1oqnm6-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(e=>e.theme.colors.tertiaryText)),g=i.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1oqnm6-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(e=>e.theme.colors.secondaryText));t.Z=e=>{let{postList:t}=e;const{0:n,1:o}=(0,a.useState)(10),i=l()((()=>{document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&n<t.length&&setTimeout((()=>o(n+10)),300)}),250);return(0,a.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[n,t]),(0,a.useEffect)((()=>{o(10)}),[t]),a.createElement(d,null,t.slice(0,n).map(((e,o)=>{const{title:l,description:i,date:d,tags:h}=e.frontmatter,{excerpt:f}=e,{slug:x}=e.fields;return a.createElement(a.Fragment,null,a.createElement(p,null,a.createElement(m.Z,{tagList:h}),a.createElement(c.Z,{size:"md"},a.createElement(r.Link,{to:x},l)),a.createElement(u,null,d),i?a.createElement(g,null,i):a.createElement(g,null,f)),n-1!==o&&t.length-1!==o&&a.createElement(s.Z,{mt:"48px",mb:"32px"}))})))}},569:function(e,t,n){"use strict";var o=n(5161),l=n.n(o),a=n(7294),i=n(2788),r=n(1883);const c=i.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-11pn9fc-0"})(["position:relative;"]),s=i.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-11pn9fc-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),m=i.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-11pn9fc-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(e=>e.theme.colors.secondaryText)),d=i.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-11pn9fc-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(e=>e.theme.colors.tertiaryText),(e=>e.theme.colors.text));t.Z=e=>{let{tags:t,postCount:n}=e;return a.createElement(c,null,a.createElement(s,null,a.createElement(m,null,"TAG LIST"),a.createElement("ul",null,a.createElement(d,null,a.createElement(r.Link,{to:"/tags"},"all (",n,")")),l()(t,(e=>a.createElement(d,null,a.createElement(r.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")")))))))}},184:function(e,t,n){"use strict";var o=n(7294),l=n(2788),a=n(1883);const i=l.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-s1uz5f-0"})(["margin-bottom:16px;word-break:break-all;"]),r=l.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-s1uz5f-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:0px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:13px;transition:all 0.2s;&:hover{background-color:",";}"],(e=>e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground),(e=>e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText),(e=>e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground)),c=e=>e.replace(/\s+/g,"-");t.Z=e=>{let{tagList:t,count:n,selected:l}=e;return t?n?o.createElement(i,null,t.map(((e,t)=>o.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:l===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},o.createElement(r,{selected:e.fieldValue===l},c(e.fieldValue)," (",e.totalCount,")"))))):o.createElement(i,null,t.map(((e,t)=>o.createElement(a.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},o.createElement(r,null,c(e)))))):null}},610:function(e,t,n){"use strict";n.r(t);var o=n(9734),l=n.n(o),a=n(7294),i=n(5038),r=n(5609),c=n(1309),s=n(4246),m=n(569),d=n(729),p=n(1093),u=n(9349),g=n(7074);t.default=e=>{let{data:t}=e;const n=t.paging.nodes,o=l()(t.totalMarkdown.group,["totalCount"]).reverse();return 0===n.length?a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):a.createElement(i.Z,null,a.createElement(r.Z,{title:u.title,description:u.description,url:u.siteUrl}),a.createElement(p.Z,{size:48}),a.createElement(c.Z,null),a.createElement(d.Z,null),a.createElement(m.Z,{tags:o,postCount:n.length}),a.createElement(s.Z,{postList:n}),a.createElement(d.Z,null),a.createElement(g.Z,{currentPage:1,totalPage:5}))}},5161:function(e,t,n){var o=n(9932),l=n(7206),a=n(9199),i=n(1469);e.exports=function(e,t){return(i(e)?o:a)(e,l(t,3))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-10a761b75d0608dd033d.js.map