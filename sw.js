if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>c(e,t),l={module:{uri:t},exports:a,require:r};s[t]=Promise.all(n.map((e=>l[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1bc9bf92d40cb9ac954674275eaf310b"},{url:"/_next/static/GLrVqhmr6l-SliuDv7cgl/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/GLrVqhmr6l-SliuDv7cgl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/250-80c21a564ff3b1f0.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/69-266d143b70aded8b.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/982-d2cabb4f0ee7870c.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/_not-found-ad25da3e022d5339.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/about/page-6d07bec080592ca9.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/contact/page-e440bb2609e974e9.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/layout-51c49374a81b2e32.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/life/page-1cea9f95e11f97da.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/page-3a615e6753c68857.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/page-9e9e2dd4fc19220f.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/app/posts/page-96c003cf6a7ee94e.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/fd9d1056-cbe891f358786d92.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/main-app-893cf761196a6fd1.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/main-faffbfa3c300f7cc.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8a8222635fa5de28.js",revision:"GLrVqhmr6l-SliuDv7cgl"},{url:"/_next/static/css/186e9bedd3d8a429.css",revision:"186e9bedd3d8a429"},{url:"/_next/static/css/934b8cf2f3bc2311.css",revision:"934b8cf2f3bc2311"},{url:"/_next/static/css/d4cdb051b10700af.css",revision:"d4cdb051b10700af"},{url:"/_next/static/css/ebd01cb48d859056.css",revision:"ebd01cb48d859056"},{url:"/favicon-16x16.png",revision:"dbe2e655f444e2456dfeaec0bb970a7e"},{url:"/favicon-32x32.png",revision:"9425d8ceaf417da73c0744cf79eba902"},{url:"/favicon.ico",revision:"c017f769b9ab568f6765fc963f3c9082"},{url:"/images/webrtc-1.png",revision:"d0b70c31ebc4a74b3f534f2c39e669f7"},{url:"/images/webrtc-2.png",revision:"c4f3758471fed16ad9fff790ea4debe5"},{url:"/manifest.json",revision:"2b0cada04cf42cd0d58897d331c1e614"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
