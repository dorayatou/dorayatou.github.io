if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const o=e=>c(e,a),r={module:{uri:a},exports:t,require:o};s[a]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"daa3df6df450c02473ec15edf5f1d108"},{url:"/_next/static/chunks/250-80c21a564ff3b1f0.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/69-266d143b70aded8b.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/982-d2cabb4f0ee7870c.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/_not-found-ad25da3e022d5339.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/about/page-6d07bec080592ca9.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/contact/page-e440bb2609e974e9.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/layout-b6f24dc12e30950b.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/life/page-1cea9f95e11f97da.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/page-3a615e6753c68857.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/page-6ff08b78c97b7d5a.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/app/posts/page-96c003cf6a7ee94e.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/fd9d1056-cbe891f358786d92.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/main-app-893cf761196a6fd1.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/main-faffbfa3c300f7cc.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a560eba91f4c32be.js",revision:"kPbh7o3xFYzc5K8z9XWmR"},{url:"/_next/static/css/2b0f6b284963c3b1.css",revision:"2b0f6b284963c3b1"},{url:"/_next/static/css/934b8cf2f3bc2311.css",revision:"934b8cf2f3bc2311"},{url:"/_next/static/css/c1e06d815ff161af.css",revision:"c1e06d815ff161af"},{url:"/_next/static/css/d4cdb051b10700af.css",revision:"d4cdb051b10700af"},{url:"/_next/static/kPbh7o3xFYzc5K8z9XWmR/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/kPbh7o3xFYzc5K8z9XWmR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon-16x16.png",revision:"dbe2e655f444e2456dfeaec0bb970a7e"},{url:"/favicon-32x32.png",revision:"9425d8ceaf417da73c0744cf79eba902"},{url:"/favicon.ico",revision:"c017f769b9ab568f6765fc963f3c9082"},{url:"/icons/icon-192x192.png",revision:"72296c37323b15c1f3213593b7279656"},{url:"/icons/icon-256x256.png",revision:"6cf0de713748c05ce693f3986ceb087b"},{url:"/icons/icon-384x384.png",revision:"9d20bdfe4f5b39ae830c717eafb112a8"},{url:"/icons/icon-512x512.png",revision:"771fadba8960b5e5cc9787d6db9abb24"},{url:"/images/profile.png",revision:"72296c37323b15c1f3213593b7279656"},{url:"/manifest.json",revision:"2b0cada04cf42cd0d58897d331c1e614"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
