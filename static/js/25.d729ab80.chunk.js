/*! For license information please see 25.d729ab80.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{665:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(184),r=a(1),o=a.n(r),l=a(130),c=o.a.memo((function(e){var t=e.name,a=e.text,r=Object(n.a)(e,["name","text"]),c=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return o.a.createElement("div",{className:"card-header-actions"},o.a.createElement(l.bb,Object.assign({},r,{href:c,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),o.a.createElement("small",{className:"text-muted"},a||"docs")))}))},675:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return m})),a.d(t,"f",(function(){return b})),a.d(t,"d",(function(){return f})),a.d(t,"e",(function(){return g}));var n=a(1),r=a.n(n),o=(a(0),a(674)),l=a.n(o);function c(e){var t=this,a="c-above",n="c-below",r="c-chartjs-tooltip",o="c-no-transform",l="c-tooltip-body",c="c-tooltip-body-item",i="c-tooltip-body-item-color",s="c-tooltip-body-item-label",u="c-tooltip-body-item-value",d="c-tooltip-header",p="c-tooltip-header-item",m={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},a="_canvas-"+(e()+e());return t._chart.canvas.id=a,a}())+"-tooltip"},b=document.getElementById(m.TOOLTIP);if(b||((b=document.createElement("div")).id=m.TOOLTIP,b.className=r,this._chart.canvas.parentNode.appendChild(b)),0!==e.opacity){if(b.classList.remove(a,n,o),e.yAlign?b.classList.add(e.yAlign):b.classList.add(o),e.body){var f=e.title||[],g=document.createElement(m.DIV);g.className=d,f.forEach((function(e){var t=document.createElement(m.DIV);t.className=p,t.innerHTML=e,g.appendChild(t)}));var h=document.createElement(m.DIV);h.className=l,e.body.map((function(e){return e.lines})).forEach((function(t,a){var n=document.createElement(m.DIV);n.className=c;var r=e.labelColors[a],o=document.createElement(m.SPAN);if(o.className=i,o.style.backgroundColor=r.backgroundColor,n.appendChild(o),t[0].split(":").length>1){var l=document.createElement(m.SPAN);l.className=s,l.innerHTML=t[0].split(": ")[0],n.appendChild(l);var d=document.createElement(m.SPAN);d.className=u,d.innerHTML=t[0].split(": ").pop(),n.appendChild(d)}else{var p=document.createElement(m.SPAN);p.className=u,p.innerHTML=t[0],n.appendChild(p)}h.appendChild(n)})),b.innerHTML="",b.appendChild(g),b.appendChild(h)}var C=this._chart.canvas.getBoundingClientRect(),E=this._chart.canvas.offsetTop,v=this._chart.canvas.offsetLeft+e.caretX,y=E+e.caretY,k=e.width/2;v+k>C.width?v-=k:v<k&&(v+=k),b.style.opacity=1,b.style.left=v+"px",b.style.top=y+"px"}else b.style.opacity=0}a(688);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=["January","February","March","April","May","June","July","August","September","October","November","December"],u=function(e){var t=e.innerRef,a=e.datasets,o=e.labels,u=e.options,d=e.plugins,p=e.type,m=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["innerRef","datasets","labels","options","plugins","type"]),b=Object(n.useRef)({firstRun:!0}).current,f=Object(n.useState)(),g=f[0],h=f[1],C=Object(n.useRef)(),E=Object(n.useState)("safe_id_"+Math.random().toString(36).replace("0.",""))[0],v=function(){return g&&g.destroy()},y=a&&a[0]&&a[0].data||[],k=Object(n.useMemo)((function(){if(o&&"string"!==typeof o)return o;var e=Array(y.length).fill("");return"indexes"===o?e.map((function(e,t){return t+1})):"months"===o?e.map((function(e,t){return s[t%12]})):e}),[JSON.stringify(o),y.length]),O=function(){if(!u||!u.tooltips)return{tooltips:{enabled:!1,custom:c,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){var a,n=t.data.datasets[e.datasetIndex];return{backgroundColor:"object"===typeof(a=n.tooltipLabelColor||n.pointHoverBackgroundColor||n.borderColor||n.backgroundColor)?a[e.index]:a}}}}}}(),B={type:p,data:{datasets:a,labels:k},options:Object.assign({},u,O||{}),plugins:d};return Object(n.useEffect)((function(){b.firstRun||(Object.assign(g,B),g.update())}),[B]),Object(n.useEffect)((function(){return v(),h(new l.a(C.current.getContext("2d"),B)),b.firstRun=!1,function(){return v()}}),[]),r.a.createElement("div",i({},m,{ref:t}),r.a.createElement("canvas",{id:E,ref:C}))};u.propTypes={};var d=function(e){return r.a.createElement(u,i({},e,{type:"bar"}))},p=function(e){return r.a.createElement(u,i({},e,{type:"line"}))},m=function(e){return r.a.createElement(u,i({},e,{type:"doughnut"}))},b=function(e){return r.a.createElement(u,i({},e,{type:"radar"}))},f=function(e){return r.a.createElement(u,i({},e,{type:"pie"}))},g=function(e){return r.a.createElement(u,i({},e,{type:"polarArea"}))}},688:function(e,t,a){},811:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(130),l=a(675),c=a(665);t.default=function(){return r.a.createElement(o.m,{columns:!0,className:"cols-2"},r.a.createElement(o.j,null,r.a.createElement(o.n,null,"Bar Chart",r.a.createElement(c.a,{href:"http://www.chartjs.org"})),r.a.createElement(o.k,null,r.a.createElement(l.a,{datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}],labels:"months",options:{tooltips:{enabled:!0}}}))),r.a.createElement(o.j,null,r.a.createElement(o.n,null,"Doughnut Chart"),r.a.createElement(o.k,null,r.a.createElement(l.b,{datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}],labels:["VueJs","EmberJs","ReactJs","AngularJs"],options:{tooltips:{enabled:!0}}}))),r.a.createElement(o.j,null,r.a.createElement(o.n,null,"Line Chart"),r.a.createElement(o.k,null,r.a.createElement(l.c,{datasets:[{label:"Data One",backgroundColor:"rgb(228,102,81,0.9)",data:[30,39,10,50,30,70,35]},{label:"Data Two",backgroundColor:"rgb(0,216,255,0.9)",data:[39,80,40,35,40,20,45]}],options:{tooltips:{enabled:!0}},labels:"months"}))),r.a.createElement(o.j,null,r.a.createElement(o.n,null,"Pie Chart"),r.a.createElement(o.k,null,r.a.createElement(l.d,{datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}],labels:["VueJs","EmberJs","ReactJs","AngularJs"],options:{tooltips:{enabled:!0}}}))),r.a.createElement(o.j,null,r.a.createElement(o.n,null,"Polar Area Chart"),r.a.createElement(o.k,null,r.a.createElement(l.e,{datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(179,181,198,1)",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(255,99,132,1)",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}],options:{aspectRatio:1.5,tooltips:{enabled:!0}},labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}))),r.a.createElement(o.j,null,r.a.createElement(o.n,null,"Radar Chart"),r.a.createElement(o.k,null,r.a.createElement(l.f,{datasets:[{label:"2019",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2020",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}],options:{aspectRatio:1.5,tooltips:{enabled:!0}},labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}))))}}}]);
//# sourceMappingURL=25.d729ab80.chunk.js.map