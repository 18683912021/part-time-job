(function(e){function t(t){for(var a,c,r=t[0],u=t[1],d=t[2],s=0,b=[];s<r.length;s++)c=r[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(b.length)b.shift()();return n.push.apply(n,d||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,r=1;r<l.length;r++){var u=l[r];0!==o[u]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=l[0]))}return e}var a={},o={app:0},n=[];function c(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=e,c.c=a,c.d=function(e,t,l){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(c.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(l,a,function(t){return e[t]}.bind(null,a));return l},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/line-chart/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var i=u;n.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"0085":function(e,t,l){},"0560":function(e,t,l){},"449c":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);var a=l("7a23");const o=Object(a["createElementVNode"])("div",{id:"nav"},null,-1);function n(e,t){const l=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])(l)],64)}l("74be");var c=l("6b0d"),r=l.n(c);const u={},d=r()(u,[["render",n]]);var i=d,s=l("6605"),b=(l("14d9"),l("cee4"));const m=b["a"].create({baseURL:"/api",timeout:5e3});m.interceptors.request.use(e=>e,e=>Promise.reject(e)),m.interceptors.response.use(e=>{const t=e.data;return 200!==t.status?t.message:t},e=>Promise.reject(e));var v=l("313e");const p={class:"content"},O={class:"chart-box"},j={key:0,class:"config-box"};var f={__name:"ChartComponent",props:{result:{type:Array,default:[{x:0,y:0}]},width:{type:Number,default:20},height:{type:Number,default:30},isConfig:{type:Boolean,default:!1},pageIndex:{type:Number,default:1}},emits:["onSubmit","startMeasurement"],setup(e,{emit:t}){const l=t,o=Object(a["ref"])(null),n=Object(a["ref"])(null),c=Object(a["ref"])(!1);let r=null;const u=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10},{label:"11",value:11},{label:"12",value:12}],d=e,i=Object(a["reactive"])({ip:"127.0.0.1",port:18080,channelName:d.pageIndex,centerFrequency:1,scanWidth:1,referenceLevel:1,resolutionBandWidth:1,scanPoints:1});Object(a["watch"])(()=>d.result,e=>{r&&r.setOption({dataset:[{id:"dataset_raw",source:e}]})},{immediate:!0});const s=()=>{l("onSubmit",i)},b=()=>{r=v["a"](o.value);const e={dataset:[{id:"dataset_raw",source:d.result}],title:{text:null!==d&&void 0!==d&&d.isConfig?"":"通道"+d.pageIndex},tooltip:{trigger:"axis",formatter:function(e){let t=e[0].data["x"]+"(MHz)<br/>";return e.forEach(e=>{t+=e.data["y"]+"(dBm)<br/>"}),t}},xAxis:{type:"category",name:"MHz",nameLocation:"end",axisLabel:{interval:d.isConfig?500:150}},yAxis:{name:"dBm",min:-150,max:20,nameLocation:"end",interval:10},lineStyle:{width:1},series:[{type:"line",datasetId:"dataset_raw",showSymbol:!1,encode:{x:"x",y:"y",itemName:"dBm"}}],dataZoom:[{type:"inside",start:0,end:100}]};d.isConfig&&e.dataZoom.push({type:"slider",start:0,end:100}),r.setOption(e)};return Object(a["onMounted"])(()=>{b()}),(t,l)=>{const r=Object(a["resolveComponent"])("el-input"),d=Object(a["resolveComponent"])("el-form-item"),b=Object(a["resolveComponent"])("el-option"),m=Object(a["resolveComponent"])("el-select"),v=Object(a["resolveComponent"])("el-input-number"),f=Object(a["resolveComponent"])("el-button"),h=Object(a["resolveComponent"])("el-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,[Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("div",{ref_key:"chartRef",ref:o,style:Object(a["normalizeStyle"])({width:""+(e.isConfig?e.width+"px":e.width+"vw"),height:""+(e.isConfig?e.height+"px":e.height+"vh")})},null,4)]),e.isConfig?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",j,[Object(a["createVNode"])(h,{model:i,"label-width":"auto",style:{"max-width":"600px"},ref_key:"formRef",ref:n},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{label:"通道IP"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{modelValue:i.ip,"onUpdate:modelValue":l[0]||(l[0]=e=>i.ip=e),placeholder:"请输入IP地址"},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"通道端口"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{modelValue:i.port,"onUpdate:modelValue":l[1]||(l[1]=e=>i.port=e),placeholder:"请输入端口"},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"通道选择"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{modelValue:i.channelName,"onUpdate:modelValue":l[2]||(l[2]=e=>i.channelName=e),placeholder:"请选择"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(u,(e,t)=>Object(a["createVNode"])(b,{label:e.label,value:e.value,key:t},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"中心频率(MHz)"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{controls:!1,style:{width:"100%"},modelValue:i.centerFrequency,"onUpdate:modelValue":l[3]||(l[3]=e=>i.centerFrequency=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"扫宽(MHz)"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{controls:!1,style:{width:"100%"},modelValue:i.scanWidth,"onUpdate:modelValue":l[4]||(l[4]=e=>i.scanWidth=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"参考电平(dBm)"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{controls:!1,style:{width:"100%"},modelValue:i.referenceLevel,"onUpdate:modelValue":l[5]||(l[5]=e=>i.referenceLevel=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"分辨率带宽(MHz)"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{controls:!1,style:{width:"100%"},modelValue:i.resolutionBandWidth,"onUpdate:modelValue":l[6]||(l[6]=e=>i.resolutionBandWidth=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{label:"扫描点数"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{controls:!1,style:{width:"100%"},modelValue:i.scanPoints,"onUpdate:modelValue":l[7]||(l[7]=e=>i.scanPoints=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{style:{"text-align":"center"},class:"button-group"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,{type:"primary",onClick:s,loading:c.value},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("开始测量")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])):Object(a["createCommentVNode"])("",!0)])}}};l("cc29");const h=r()(f,[["__scopeId","data-v-6ea8aa71"]]);var x=h;const V={class:"charts-container"};var g={__name:"Home",setup(e){const t=Object(a["ref"])(!1),l=Object(a["ref"])(1),o=Object(a["ref"])("通道"+l),n=Object(a["ref"])(Array.from({length:12},()=>[])),c=Object(a["ref"])(Array.from({length:12},()=>[])),r=Object(a["ref"])([1,2,3,4,5,6,7,8,9,10,11,12]),u=Object(a["ref"])([1,2,3,4,5,6,7,8,9,10,11,12]),d=Object(a["ref"])(20),i=Object(a["ref"])(29),s=Object(a["ref"])(Array.from({length:12},()=>["max","min"])),b=Object(a["ref"])([{label:"通道1",value:1},{label:"通道2",value:2},{label:"通道3",value:3},{label:"通道4",value:4},{label:"通道5",value:5},{label:"通道6",value:6},{label:"通道7",value:7},{label:"通道8",value:8},{label:"通道9",value:9},{label:"通道10",value:10},{label:"通道11",value:11},{label:"通道12",value:12}]);let m=null;const v=()=>{try{m=new WebSocket("ws://127.0.0.1:8889/websocket"),m.onopen=()=>{console.log("WebSocket connection opened")},m.onmessage=e=>{var t;const a=e.data.split(" ").filter(e=>e).slice(0,1e4).map(Number),o=c.value[l.value];if(0===c.value[l.value].length)c.value[l.value]=a.map((e,t)=>({x:t,y:e,max:e,min:e}));else{for(let e=0;e<o.length;e++)if(e<a.length){const t=a[e];o[e]={x:o[e].x,y:0,max:Math.max(o[e].max,t),min:Math.min(o[e].min,t)}}else o[e]={...o[e],y:0};for(let e=o.length;e<a.length;e++){const t=a[e];o.push({x:e,y:t,max:t,min:t})}}var r;c.value[l.value]&&Array.isArray(c.value[l.value])&&(n.value[l.value]=null===(r=c.value[l.value])||void 0===r?void 0:r.filter(e=>e.y));console.log(null===(t=c.value[l.value])||void 0===t?void 0:t.filter(e=>e.y),c.value[l.value].length)},m.onerror=e=>{console.error("WebSocket error:",e)},m.onclose=()=>{console.log("WebSocket connection closed")}}catch(e){console.error("Failed to create WebSocket:",e)}},p=e=>e.sort((e,t)=>Number(e)-Number(t)),O=e=>{r.value=p(e),(null===e||void 0===e?void 0:e.length)<=4?(i.value=1==e.length?90:45,d.value=e.length<=2?90:45):(i.value=29,d.value=20)},j=e=>{v(),l.value=e,o.value="通道"+e,t.value=!0},f=e=>{console.log(s.value)},h=e=>{m&&m.readyState===WebSocket.OPEN&&m.send(JSON.stringify(e))},g=()=>{m.close(),m.onclose=null,m.onmessage=null,m.onerror=null,m.onopen=null},y=()=>{console.log("startMeasurement")};return(e,c)=>{const m=Object(a["resolveComponent"])("el-checkbox"),v=Object(a["resolveComponent"])("el-checkbox-group"),p=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",V,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.value,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"parent-box",key:e},[Object(a["createVNode"])(v,{class:"checkbox-group",modelValue:s.value[e],"onUpdate:modelValue":t=>s.value[e]=t,onChange:f,maxAndMin:s.value,style:{"text-align":"left"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{value:"max"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" 最大值保持 ")]),_:1}),Object(a["createVNode"])(m,{value:"min"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" 最小值保持 ")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue","maxAndMin"]),(Object(a["openBlock"])(),Object(a["createBlock"])(x,{key:d.value+"-"+i.value+"-"+e,result:n.value[e],onClick:t=>j(e),pageIndex:e,width:d.value,height:i.value},null,8,["result","onClick","pageIndex","width","height"]))]))),128))]),Object(a["createVNode"])(p,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=e=>t.value=e),title:o.value,width:"1350","destroy-on-close":"",onClose:g},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{class:"checkbox-group",modelValue:s.value[l.value],"onUpdate:modelValue":c[0]||(c[0]=e=>s.value[l.value]=e),onChange:f},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{value:"max"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" 最大值保持 ")]),_:1}),Object(a["createVNode"])(m,{value:"min"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" 最小值保持 ")]),_:1})]),_:1},8,["modelValue"]),Object(a["createVNode"])(x,{onOnSubmit:h,onStartMeasurement:y,result:n.value[l.value],width:1e3,height:600,isConfig:!0,pageIndex:l.value},null,8,["result","pageIndex"])]),_:1},8,["modelValue","title"]),Object(a["createVNode"])(v,{modelValue:u.value,"onUpdate:modelValue":c[2]||(c[2]=e=>u.value=e),onChange:O,class:"floatActionDialog"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(b.value,e=>(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:e.value,label:e.label,value:e.value},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.label),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])],64)}}};l("f7b5");const y=r()(g,[["__scopeId","data-v-18d40cf2"]]);var w=y;const N=[{path:"/",name:"Home",component:w}],C=Object(s["a"])({history:Object(s["b"])(),routes:N});var k=C,_=l("5502"),B=Object(_["a"])({state:{},mutations:{},actions:{},modules:{}}),S=(l("7437"),l("c3a1"));Object(a["createApp"])(i).use(B).use(S["a"]).use(k).mount("#app")},"74be":function(e,t,l){"use strict";l("0560")},cc29:function(e,t,l){"use strict";l("449c")},f7b5:function(e,t,l){"use strict";l("0085")}});
//# sourceMappingURL=app.f2aef7e5.js.map