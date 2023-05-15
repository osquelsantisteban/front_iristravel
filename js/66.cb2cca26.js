"use strict";(self["webpackChunkiristravel_v3"]=self["webpackChunkiristravel_v3"]||[]).push([[66],{2066:function(e,t,s){s.r(t),s.d(t,{default:function(){return _e}});var l=s(3396),a=s(7139),o=s(9242);const r={class:"bg-white"},n={class:"text-white bg-white"},i={class:"flex flex-col pb-12 gap-y-6 bg-blue"},d=(0,l._)("h2",{class:"pt-6 text-3xl text-white md:text-6xl lg:text-4xl"},"- Enviar solicitud de reserva -",-1),u={class:"text-5xl font-Clarissa"},c={class:"container p-5 mx-auto border-2 border-white border-dashed rounded"},p={class:"flex flex-col flex-wrap justify-between flex-1 px-10 py-8 text-xl gap-x-3 gap-y-6 shadow-round bg-darkBlue md:flex-row"},m={class:"flex items-center w-full gap-3"},f=(0,l._)("i",{class:"fas fa-check"},null,-1),h=[f],x={class:"flex flex-col w-full gap-3 md:flex-row"},g={class:"p-2 px-4 text-left bg-green-500 rounded-xl md:w-3/5"};function w(e,t,s,f,w,_){const b=(0,l.up)("general-request");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("section",n,[(0,l._)("div",i,[d,(0,l._)("span",u,(0,a.zw)(s.title),1),(0,l._)("div",c,[(0,l.Wm)(b,{request:w.request_info,onUpdInfo:_.updRequest},null,8,["request","onUpdInfo"]),(0,l._)("form",p,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Nombre completo","onUpdate:modelValue":t[0]||(t[0]=e=>w.name=e),min:"0",class:"w-full px-6 py-2 text-left border rounded-4xl text-orange bg-darkBlue md:w-1/2"},null,512),[[o.nr,w.name]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Teléfono","onUpdate:modelValue":t[1]||(t[1]=e=>w.phone=e),min:"0",class:"w-full px-6 py-2 text-left border rounded-4xl text-orange bg-darkBlue md:w-1/5"},null,512),[[o.nr,w.phone]]),(0,l.wy)((0,l._)("input",{type:"email",placeholder:"Email*","onUpdate:modelValue":t[2]||(t[2]=e=>w.email=e),required:"",min:"0",class:"w-full px-6 py-2 text-left border rounded-4xl text-orange bg-darkBlue md:w-1/4"},null,512),[[o.nr,w.email]]),(0,l.wy)((0,l._)("textarea",{id:"",placeholder:"Descripcion de su solicitud","onUpdate:modelValue":t[3]||(t[3]=e=>w.message=e),class:"w-full h-40 px-8 py-6 text-left border rounded-4xl text-orange bg-darkBlue"},null,512),[[o.nr,w.message]]),(0,l._)("div",m,[(0,l._)("span",{class:(0,a.C_)(["items-center inline px-2 py-1 border cursor-pointer rounded-4xl bg-darkBlue",_.isActiveTerm]),onClick:t[4]||(t[4]=e=>w.activeTerm=!w.activeTerm)},h,2),(0,l._)("label",{class:"self-center text-orange",onClick:t[5]||(t[5]=e=>w.activeTerm=!w.activeTerm)},"Términos y condiciones")]),(0,l._)("div",x,[(0,l.wy)((0,l._)("span",{class:"p-2 px-4 text-left bg-red rounded-xl md:w-3/5"},(0,a.zw)(w.error_message),513),[[o.F8,w.error]]),(0,l.wy)((0,l._)("span",g,"La solicitud fue enviada exitosamente!!!",512),[[o.F8,w.success]]),(0,l._)("button",{type:"button",class:"px-12 py-1 text-base text-white uppercase border md:text-xl bg-orange border-orange rounded-4xl md:ml-auto hover:bg-darkBlue hover:text-orange",onClick:t[6]||(t[6]=(...e)=>_.formSubmit&&_.formSubmit(...e))},"Enviar Solicitud")])])])])])])}const _={class:"flex flex-col gap-4 px-10 py-4 mb-6 text-xl shadow-round bg-darkBlue"},b={class:"flex flex-col gap-3 text-xl md:flex-row"},y=(0,l._)("h2",{class:"text-left md:w-1/12"},"Destino: ",-1),q={class:"px-4 text-left border-b md:w-2/5 capitalize"},k={class:"flex gap-3 text-xl"},v=(0,l._)("h2",{class:"text-left md:w-1/12"},"Producto: ",-1),D={class:"px-4 text-left border-b md:w-2/5 capitalize"};function R(e,t,s,o,r,n){return(0,l.wg)(),(0,l.iD)("div",_,[(0,l._)("div",b,[y,(0,l._)("span",q,(0,a.zw)(s.request.destination),1)]),(0,l._)("div",k,[v,(0,l._)("span",D,(0,a.zw)(s.request.product),1)]),((0,l.wg)(),(0,l.j4)((0,l.LL)(r.components[s.request.type]),{info:s.request,onUpdInfo:n.updRequest},null,40,["info","onUpdInfo"]))])}const z={class:"flex flex-col items-center gap-3 p-4 border rounded-xl md:flex-row md:w-2/4"},P={key:0,class:"flex w-4/12 gap-3"},Y=(0,l._)("h2",null,"Cantidad: ",-1),U={key:2,class:"ml-6"},C={key:3,class:"text-3xl font-bold text-orange"};function V(e,t,s,r,n,i){const d=(0,l.up)("Datepicker");return(0,l.wg)(),(0,l.iD)("div",z,[i.isProduct("Remesas")?((0,l.wg)(),(0,l.iD)("div",P,[Y,(0,l.wy)((0,l._)("input",{class:"w-2/4 p-1 px-2 text-blue rounded-xl",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.inputVal=e)},null,512),[[o.nr,n.inputVal]])])):(0,l.kq)("",!0),i.isProduct("Carros")||i.isProduct("Hoteles")?((0,l.wg)(),(0,l.j4)(d,{key:1,class:"datepicker-container clear",modelValue:n.dateRange,"onUpdate:modelValue":t[1]||(t[1]=e=>n.dateRange=e),format:"dd/MM/yyyy",range:"","multi-calendars":"","auto-apply":"","enable-time-picker":!1,"close-on-auto-apply":!0,placeholder:i.placeholder,onChange:i.handleDate},null,8,["modelValue","placeholder","onChange"])):(0,l.kq)("",!0),i.isProduct("Hoteles")?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("h2",U,(0,a.zw)(i.isProduct("Remesas")?"Precio a pagar:":"Precio desde:"),1)),i.isProduct("Hoteles")?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",C,"$"+(0,a.zw)(i.calcPrice),1))])}var H=s(9024),T=s(6797),M=s.n(T),S={name:"HomeRequest",props:{info:{required:!0}},components:{Datepicker:H.Z},data(){return{dateRange:{},margin:0,price:0,inputVal:100,prod:{}}},created(){this.margin=this.info.price,this.prod=this.info},watch:{price(){this.updRequest()},dateRange(){this.updRequest()}},computed:{calcPrice(){let e=this.info.price;return e=this.inputVal*this.margin/100,e},placeholder(){let e;return this.isProduct("Hoteles")?e="Fecha de entrada y salida":this.isProduct("Carros")&&(e="Fecha de recogida y entrega"),e}},methods:{handleDate(e){this.dateRange.startDate=M()(e[0].toString()).format("DD-MM-YYYY"),this.dateRange.endDate=M()(e[1].toString()).format("DD-MM-YYYY")},isProduct(e){return this.info.product==e&&(this.updRequest(),!0)},updRequest(){this.price=this.calcPrice,this.price>0&&this.$emit("updInfo",{date:`${this.dateRange.startDate} - ${this.dateRange.endDate}`,initprice:this.inputVal,price:this.price})}}},B=s(89);const j=(0,B.Z)(S,[["render",V]]);var I=j;const E={class:"flex flex-col flex-wrap shadow-round bg-darkBlue text-xl px-10 py-4 mb-6 md:flex-row"},N={class:"flex flex-col gap-3 items-start md:w-3/12"},$={class:"capitalize"},Z=(0,l._)("b",null,"Pais: ",-1),F={key:0},L=(0,l._)("b",null,"Polo: ",-1),A={key:1,class:"capitalize"},G=(0,l._)("b",null,"Producto:",-1),O={class:"flex flex-col gap-3 items-start py-3 px-8 border rounded-2xl my-2 md:w-9/12 md:m-0"},J={class:"flex gap-x-3"},K={key:0,class:"capitalize"},W={key:1,class:"text-base self-center"},Q={key:0,class:"flex flex-col w-full gap-x-3 gap-y-6 md:flex-row"},X=(0,l._)("div",{class:"flex flex-col gap-y-1 items-start md:w-5/12"},[(0,l._)("small",{class:"text ml-3"},"Fecha")],-1),ee={key:1,class:"flex flex-col text-left w-full gap-y-2"},te={class:"flex gap-x-4 text-base pb-2"},se=(0,l._)("b",null,"Plan:",-1),le={class:"flex gap-x-4 text-base pb-2"},ae=(0,l._)("b",null,"Habitaciones:",-1),oe=(0,l._)("b",null,"Noches:",-1),re=(0,l._)("b",null,"Personas:",-1),ne={key:2,class:"self-end text-2xl font-bold ml-auto"},ie={class:"text-orange"};function de(e,t,s,o,r,n){const i=(0,l.up)("number-imput");return(0,l.wg)(),(0,l.iD)("div",E,[(0,l._)("div",N,[(0,l._)("span",$,[Z,(0,l.Uk)(" "+(0,a.zw)(s.info.country),1)]),s.info.pole?((0,l.wg)(),(0,l.iD)("span",F,[L,(0,l.Uk)(" "+(0,a.zw)(s.info.pole),1)])):(0,l.kq)("",!0),""!=s.info.product?((0,l.wg)(),(0,l.iD)("span",A,[G,(0,l.Uk)(" "+(0,a.zw)(s.info.product),1)])):(0,l.kq)("",!0)]),(0,l._)("div",O,[(0,l._)("div",J,[n.ishotel?((0,l.wg)(),(0,l.iD)("b",K,(0,a.zw)(s.info.product_name),1)):(0,l.kq)("",!0),n.ishotel?((0,l.wg)(),(0,l.iD)("span",W,"("+(0,a.zw)(n.formatDate)+")",1)):(0,l.kq)("",!0)]),s.info.is_home_request?((0,l.wg)(),(0,l.iD)("div",Q,[X,"Hoteles"==s.info.product?((0,l.wg)(),(0,l.j4)(i,{key:0,class:"md:w-4/12",title:"Cantidad de personas",min:1,value:s.info.num_person,id:1,onUpdVal:e.updPerson},null,8,["value","onUpdVal"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0),n.ishotel?((0,l.wg)(),(0,l.iD)("article",ee,[(0,l._)("section",te,[(0,l._)("span",null,[se,(0,l.Uk)(" "+(0,a.zw)(s.info.category),1)])]),(0,l._)("section",le,[(0,l._)("span",null,[ae,(0,l.Uk)(" "+(0,a.zw)(s.info.num_rooms),1)]),(0,l._)("span",null,[oe,(0,l.Uk)(" "+(0,a.zw)(n.numNights),1)]),(0,l._)("span",null,[re,(0,l.Uk)(" "+(0,a.zw)(s.info.num_person),1)])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.info.rooms,((e,t)=>((0,l.wg)(),(0,l.iD)("section",{class:"flex gap-x-3 text-base",key:t},[(0,l._)("span",null,(0,a.zw)(e.type)+":",1),(0,l._)("span",null,(0,a.zw)(e.comb),1)])))),128))])):(0,l.kq)("",!0),s.info.price>0?((0,l.wg)(),(0,l.iD)("span",ne,[(0,l.Uk)("Precio total:"),(0,l._)("span",ie," $"+(0,a.zw)(s.info.price),1)])):(0,l.kq)("",!0)])])}var ue={name:"HotelRequest",props:{info:{default:{}}},data(){return{dateRange:null,num_nights:1,request_info:{type:"home",handler:{}}}},computed:{ishotel(){return"hotel"==this.info.type},persons(){const e="hotel"==this.info.product?this.info.num_person:e;return e},formatDate(){const e=this.info.date.split("/");let t;return t=e.length>1?e[0]+" - "+e[1]:M()(e[0]).format("DD/MM/YYYY"),t},numNights(){const e=this.info.date.split("/");let t,s,l=1;return e.length>1&&(t=M()(e[0],"DD/MM/YYYY"),s=M()(e[1],"DD/MM/YYYY"),l=s.diff(t,"days")),l}}};const ce=(0,B.Z)(ue,[["render",de]]);var pe=ce,me={name:"GeneralRequest",props:{request:{required:!0}},components:{HomeRequest:I,HotelRequest:pe},data(){return{components:{home:"HomeRequest",homeh:"HomehRequest",hotel:"HotelRequest"}}},methods:{updRequest(e){const t={destination:this.request.destination,product:this.request.product,is_hotel:"hotel"==this.request.type,...e};this.$emit("updInfo",t)}}};const fe=(0,B.Z)(me,[["render",R]]);var he=fe,xe=s(809),ge={name:"ContactoComp",props:{title:{require:!1,default:"Solicitud"}},components:{GeneralRequest:he},data(){return{activeTerm:!1,is_hotel:!0,success:!1,error_message:"Error. No se pudo enviar la solicitud!!!",error:!1,request_info:{type:"home"},name:"",phone:"",email:"",message:"",subject:"",msg_info:{}}},created(){const e=localStorage.getItem("request_info");this.request_info=e&&JSON.parse(e),void 0!=this.request_inf&&(this.subject=this.request_info.product)},unmounted(){localStorage.removeItem("request_info")},watch:{dateRange(e){this.request.date=e.startDate}},computed:{isActiveTerm(){return this.activeTerm?"text-orange":"text-darkBlue"}},methods:{updPerson(e){this.request.num_person=e.val},async formSubmit(){console.log(this.msg_info);const e={subject:this.subject,mail:this.email,message:{name:this.name,phone:this.phone,email:this.email,message:this.message,msg_info:0==Object.keys(this.msg_info).length?this.request_info:this.msg_info}};this.validEmail(this.email)?await xe.Z.checkLogin("/send-request",{body:e,auth:"bearer"},"post")?(localStorage.removeItem("request_info"),this.success=!0,setTimeout((()=>{this.success=!1}),3e3)):(this.error=!0,setTimeout((()=>{this.error=!1}),3e3)):(this.error=!0,this.error_message="Debe insertar una dirección de correo válida.",setTimeout((()=>{this.error_message="Error. No se pudo enviar la solicitud!!!",this.error=!1}),3e3))},validEmail(e){return!(!e||!e.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/))},updRequest(e){this.msg_info=e}}};const we=(0,B.Z)(ge,[["render",w]]);var _e=we}}]);
//# sourceMappingURL=66.cb2cca26.js.map