import{d as l,r as f,o as _,a as i,c as a,b as u,t as d,e as p,f as m,F as g,g as y}from"./@vue-b89c980d.js";const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};h();var v="/production68/static/png/logo-03d6d6da.png";const F={class:"template"},b=u(d("template")+" "),L=p("br",null,null,-1),N=l({setup(c){const o=f("production68"),n=()=>{console.log("load\u6210\u529F")};return _(()=>{window.addEventListener("unload",n)}),(r,e)=>(i(),a("div",F,[b,L,u(" \u5F53\u524D\u6253\u5305\u73AF\u5883----"+d(o.value),1)]))}});const V=p("img",{alt:"Vue logo",src:v},null,-1),x=l({setup(c){return(o,n)=>(i(),a(g,null,[V,m(N,{class:"abcdefg",msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});y(x).mount("#app");
