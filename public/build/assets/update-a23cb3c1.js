import{b as g}from"./components-07a97223.js";import{b as u,d as h,c as x}from"./bootstrap-ffaf6d09.js";import{_}from"./currency-feccde3d.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{r as y,o as a,c,a as e,t,e as i,g as m,w as f}from"./runtime-core.esm-bundler-414a078a.js";import"./ns-prompt-popup-24cc8d6f.js";import"./ns-avatar-image-1a727bdf.js";import"./index.es-25aa42ee.js";import"./chart-2ccf8ff7.js";const w={name:"ns-database-update",data(){return{files:Update.files,returnLink:Update.returnLink,modules:Update.modules,updating:!1,xXsrfToken:null,updatingModule:!1,error:!1,lastErrorMessage:"",index:0}},computed:{totalModules(){return Object.values(this.modules).length}},mounted(){u.get("/sanctum/csrf-cookie").subscribe(r=>{try{this.xXsrfToken=u.response.config.headers["X-XSRF-TOKEN"],this.proceedUpdate()}catch(o){h.error(o.message).subscribe()}})},methods:{__:_,async proceedUpdate(){this.updating=!0;for(let r in this.files)try{this.index=parseInt(r)+1;const o=await new Promise((d,l)=>{u.post("/api/update",{file:this.files[r]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:d,error:l})})}catch(o){return this.updating=!1,this.error=!0,this.lastErrorMessage=o.message||_("An unexpected error occurred"),h.error(o.message).subscribe()}if(this.index=0,Object.values(this.modules).length>0){this.updatingModule=!0;let r=0;for(let o in this.modules)try{r+=1,this.index=r;const d=await new Promise((l,s)=>{u.post("/api/update",{module:this.modules[o]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:l,error:s})})}catch(d){return this.updating=!1,this.error=!0,this.lastErrorMessage=d.message||_("An unexpected error occurred"),h.error(d.message).subscribe()}}this.error=!1,this.updating=!1,document.location=this.returnLink}}},k={class:"container mx-auto flex-auto items-center justify-center flex"},v={id:"database-update",class:"w-full md:w-2/3 lg:w-1/3"},U=e("div",{class:"flex justify-center items-center py-6"},[e("img",{class:"w-32",src:"/svg/nexopos-variant-1.svg",alt:"NexoPOS"})],-1),M={class:"my-3 rounded shadow ns-box"},X={class:"border-b ns-box-header py-4 flex items-center justify-center"},E={class:"text-xl font-bold"},T={class:"p-2 ns-box-body"},j={class:"text-center text-sm py-4"},N={key:0,class:"border-l-4 text-sm ns-notice error p-4"},O={class:"rounded whitespace-pre-wrap my-2 p-2"},S={class:"border-t ns-box-footer p-2 flex justify-between"},C=e("i",{class:"las la-sync"},null,-1),B={class:"ml-1"},L={class:"flex"},P=e("i",{class:"las la-sync animate-spin"},null,-1),A={key:0},R={key:1,class:"mr-1"},D={key:2},F={key:3,class:"mr-1"},I=e("i",{class:"las la-undo"},null,-1),K={class:"ml-1"};function H(r,o,d,l,s,n){const p=y("ns-button");return a(),c("div",k,[e("div",v,[U,e("div",M,[e("div",X,[e("h3",E,t(n.__("Database Update")),1)]),e("div",T,[e("p",j,t(n.__("In order to keep NexoPOS running smoothly with updates, we need to proceed to the database migration. In fact you don't need to do any action, just wait until the process is done and you'll be redirected.")),1),s.error?(a(),c("div",N,[e("p",null,t(n.__("Looks like an error has occurred during the update. Usually, giving another shot should fix that. However, if you still don't get any chance."))+" "+t(n.__("Please report this message to the support : ")),1),e("pre",O,t(s.lastErrorMessage),1)])):i("",!0)]),e("div",S,[e("div",null,[s.error?(a(),m(p,{key:0,onClick:o[0]||(o[0]=q=>n.proceedUpdate()),type:"error",class:"rounded shadow-inner"},{default:f(()=>[C,e("span",B,t(n.__("Try Again")),1)]),_:1})):i("",!0)]),e("div",L,[s.updating?(a(),m(p,{key:0,type:"info",class:"rounded shadow-inner"},{default:f(()=>[P,s.updatingModule?i("",!0):(a(),c("span",A,t(n.__("Updating"))+"...",1)),s.updatingModule?i("",!0):(a(),c("span",R,t(s.index)+"/"+t(s.files.length),1)),s.updatingModule?(a(),c("span",D,t(n.__("Updating Modules"))+"...",1)):i("",!0),s.updatingModule?(a(),c("span",F,t(s.index)+"/"+t(n.totalModules),1)):i("",!0)]),_:1})):i("",!0),s.updating?i("",!0):(a(),m(p,{key:1,type:"info",href:s.returnLink,class:"rounded shadow-inner"},{default:f(()=>[I,e("span",K,t(n.__("Return")),1)]),_:1},8,["href"]))])])])])])}const V=b(w,[["render",H]]);window.nsUpdate=x({components:{nsDatabaseUpdate:V}});for(let r in g)window.nsUpdate.component(r,g[r]);window.nsUpdate.mount("#main-container");
