"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[382],{5382:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(3396),r=a(7139);const i={class:"bg-white text-white pt-4"},n={class:"bg-blue pb-12"},c=(0,s._)("h2",{class:"text-3xl py-6 text-white md:text-6xl lg:text-4xl"},"- Varificar nueva cuenta -",-1),o={class:"container border-dashed border-2 rounded border-white p-5"},d={class:"shadow-round bg-darkBlue text-xl px-10 py-8"},l={class:"w-full text-left font-bold text-2xl pb-2"};function u(e,t,a,u,h,f){return(0,s.wg)(),(0,s.iD)("section",i,[(0,s._)("div",n,[c,(0,s._)("div",o,[(0,s._)("div",d,[(0,s._)("h3",l,(0,r.zw)(h.message),1)])])])])}var h=a(5848),f={name:"VerifyUser",components:{},data(){return{message:""}},created(){const e=this.$route.params.token;e&&this.verifyUser(e)},methods:{verifyUser(e){h.Z.verifyUser(e).then((e=>{e.active?this.message="Su cuenta ha sido verificada satisfactoriamente":this.message="Ha habido un problema a la hora de verificar su cuenta contactenos."}))}}},v=a(89);const b=(0,v.Z)(f,[["render",u]]);var x=b}}]);
//# sourceMappingURL=382.70419e5d.js.map