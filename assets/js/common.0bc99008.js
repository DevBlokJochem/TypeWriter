"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8592],{9047:(e,n,i)=>{i.d(n,{Z:()=>B});var t=i(7294),o=i(5893);function r(e){const{mdxAdmonitionTitle:n,rest:i}=function(e){const n=t.Children.toArray(e),i=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==i)),s=i?.props.children;return{mdxAdmonitionTitle:s,rest:r.length>0?(0,o.jsx)(o.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:i}}var s=i(512),a=i(5999),d=i(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:n,className:i,children:t}=e;return(0,o.jsx)("div",{className:(0,s.Z)(d.k.common.admonition,d.k.common.admonitionType(n),l.admonition,i),children:t})}function h(e){let{icon:n,title:i}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:n}),i]})}function m(e){let{children:n}=e;return n?(0,o.jsx)("div",{className:l.admonitionContent,children:n}):null}function x(e){const{type:n,icon:i,title:t,children:r,className:s}=e;return(0,o.jsxs)(c,{type:n,className:s,children:[(0,o.jsx)(h,{title:t,icon:i}),(0,o.jsx)(m,{children:r})]})}function u(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(u,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,o.jsx)(x,{...f,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,o.jsx)(x,{...g,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function b(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,o.jsx)(b,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(e){return(0,o.jsx)(x,{...y,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function N(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const M={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Z={...{note:j,tip:v,info:w,warning:function(e){return(0,o.jsx)(x,{...C,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(x,{...M,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(j,{title:"secondary",...e}),important:e=>(0,o.jsx)(w,{title:"important",...e}),success:e=>(0,o.jsx)(v,{title:"success",...e}),caution:function(e){return(0,o.jsx)(x,{...T,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}}};function B(e){const n=r(e),i=(t=n.type,Z[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),Z.info));var t;return(0,o.jsx)(i,{...n})}},2463:(e,n,i)=>{i.r(n),i.d(n,{ActionsField:()=>A,ColorInfo:()=>z,ColoredBadge:()=>p,CommentField:()=>Z,CriteriaField:()=>C,DeprecatedBadge:()=>j,DisplayNameField:()=>B,DurationInfo:()=>H,EntryField:()=>N,EventsField:()=>I,FactsField:()=>F,InheritedBadge:()=>x,ModifiersField:()=>k,MultiLineBadge:()=>g,MultipleBadge:()=>f,OptionalBadge:()=>u,PlaceholderInfo:()=>P,PlaceholdersBadge:()=>b,ReadonlyFactInfo:()=>D,ReferenceBadge:()=>y,RegexBadge:()=>v,RegexInfo:()=>_,RequiredBadge:()=>m,SegmentBadge:()=>w,SegmentInfo:()=>q,SoundField:()=>R,SpeakerField:()=>T,SpeakersField:()=>S,TriggersField:()=>M});i(7294);var t=i(9047);const o="entryField_LQuR",r="name_R6gP",s="header_odoB";var a=i(2949);const d="badge_JMXK";var l=i(5893);function c(e){let{name:n,color:i}=e;const t="dark"===(0,a.I)().colorMode,o=t?`${i}CC`:`${i}44`,r=t?"white":i;return(0,l.jsx)("span",{style:{backgroundColor:o,color:r},className:d,children:n})}var h=i(3692);const m=()=>(0,l.jsx)(c,{name:"Required",color:"#ff3838"}),x=()=>(0,l.jsx)(c,{name:"Inherited",color:"#a83dff"}),u=()=>(0,l.jsx)(c,{name:"Optional",color:"#3191f7"}),f=()=>(0,l.jsx)(c,{name:"List",color:"#20bf7c"}),j=()=>(0,l.jsx)(c,{name:"Deprecated",color:"#fa9d2a"}),p=()=>(0,l.jsx)(c,{name:"Colored",color:"#ff8e42"}),g=()=>(0,l.jsx)(c,{name:"Multi-Line",color:"#b39e00"}),v=()=>(0,l.jsx)(c,{name:"Regex",color:"#f731d6"}),b=()=>(0,l.jsx)(c,{name:"Placeholders",color:"#00b300"}),y=()=>(0,l.jsx)(c,{name:"Reference",color:"#b21fde"}),w=()=>(0,l.jsx)(c,{name:"Segment",color:"#1fde99"}),N=e=>(0,l.jsxs)("div",{className:o,children:[(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("h2",{className:r,children:e.name}),e.required&&(0,l.jsx)(m,{}),e.inherited&&(0,l.jsx)(x,{}),e.optional&&(0,l.jsx)(u,{}),e.multiple&&(0,l.jsx)(f,{}),e.deprecated&&(0,l.jsx)(j,{}),e.colored&&(0,l.jsx)(p,{}),e.multiline&&(0,l.jsx)(g,{}),e.regex&&(0,l.jsx)(v,{}),e.placeholders&&(0,l.jsx)(b,{}),e.reference&&(0,l.jsx)(y,{}),e.segment&&(0,l.jsx)(w,{})]}),(0,l.jsxs)("div",{className:"",children:[e.children,e.colored&&(0,l.jsx)(z,{}),e.regex&&(0,l.jsx)(_,{}),e.placeholders&&(0,l.jsx)(P,{}),e.duration&&(0,l.jsx)(H,{}),e.segment&&(0,l.jsx)(q,{})]})]}),C=()=>(0,l.jsx)(N,{name:"Criteria",inherited:!0,multiple:!0,children:"A list of facts that must be met by the player before this entry can be triggered."}),k=()=>(0,l.jsx)(N,{name:"Modifiers",inherited:!0,multiple:!0,children:"A list of facts that will be modified for the player when this entry is triggered."}),M=()=>(0,l.jsx)(N,{name:"Triggers",inherited:!0,multiple:!0,children:"A list of entries that will be triggered after this entry is triggered."}),T=()=>(0,l.jsx)(N,{name:"Speaker",inherited:!0,children:"A reference to a speaker that will be used."}),Z=()=>(0,l.jsx)(N,{name:"Comment",optional:!0,inherited:!0,children:"A comment to keep track of what this fact is used for."}),B=()=>(0,l.jsx)(N,{name:"Display Name",required:!0,inherited:!0,children:"The display name of the speaker."}),R=()=>(0,l.jsx)(N,{name:"Sound",required:!0,inherited:!0,children:"The sound that will be played when the speaker speaks."}),A=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)(C,{}),(0,l.jsx)(k,{}),(0,l.jsx)(M,{})]}),F=()=>(0,l.jsx)("div",{children:(0,l.jsx)(N,{name:"Comment",optional:!0,inherited:!0,children:"A comment to keep track of what this fact is used for."})}),I=()=>(0,l.jsx)("div",{children:(0,l.jsx)(M,{})}),S=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)(N,{name:"Display Name",required:!0,inherited:!0,children:"The display name of the speaker."}),(0,l.jsx)(N,{name:"Sound",required:!0,inherited:!0,children:"The sound that will be played when the speaker speaks."})]}),z=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),"Colors and formatting from the"," ",(0,l.jsx)(h.Z,{to:"https://docs.advntr.dev/minimessage/format.html",children:(0,l.jsx)("code",{children:"MiniMessage Adventure Api"})})," ","can be used. So for example, you can use ",(0,l.jsx)("code",{children:"<red>Some Text</red>"})," for red text."]}),P=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),"Placeholders from the"," ",(0,l.jsx)(h.Z,{to:"https://github.com/PlaceholderAPI/PlaceholderAPI/wiki",children:(0,l.jsx)("code",{children:"PlaceholderApi"})})," ","can be used. So for example, you can use ",(0,l.jsx)("code",{children:"%player_name%"})," for the player name."]}),H=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),"Durations can be specified in the following format: ",(0,l.jsx)("code",{children:"1d 2h 3m 4s"}),". The following units are supported: ",(0,l.jsx)("code",{children:"d"})," for days, ",(0,l.jsx)("code",{children:"h"})," for hours,",(0,l.jsx)("code",{children:"m"})," for minutes and ",(0,l.jsx)("code",{children:"s"})," for seconds."]}),_=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)(h.Z,{to:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",children:(0,l.jsx)("code",{children:"Regular expressions"})})," ","can be used to match a pattern. For example, ",(0,l.jsx)("code",{children:"^.*$"})," will match any string."]}),D=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),"This fact can only be ",(0,l.jsx)("b",{children:"read"}),", not written to. Hence, it is only suitable for criteria."]}),q=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),"Segments are time frames in a cinematic. During a segment can take actions or display information.",(0,l.jsx)("br",{}),(0,l.jsx)(t.Z,{type:"info",children:"Segments cannot overlap. If you need overlapping segments, create a new entry."})]})},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);