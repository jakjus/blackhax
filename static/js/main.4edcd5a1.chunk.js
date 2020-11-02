/*!

=========================================================
* Black Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.4edcd5a1.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{180:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(18),o=t.n(l),s=t(9),c=t(8),i=t(16),m=t(19),d=t(4),p=t.n(d),u=t(184),h=t(185),g=t(186),b=t(203),E=t(187);class M extends n.a.Component{constructor(e){super(e),this.updateColor=()=>{window.innerWidth<993&&this.state.collapseOpen?this.setState({color:"bg-white"}):this.setState({color:"navbar-transparent"})},this.toggleCollapse=()=>{this.state.collapseOpen?this.setState({color:"navbar-transparent"}):this.setState({color:"bg-white"}),this.setState({collapseOpen:!this.state.collapseOpen})},this.toggleModalSearch=()=>{this.setState({modalSearch:!this.state.modalSearch})},this.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"}}componentDidMount(){window.addEventListener("resize",this.updateColor)}componentWillUnmount(){window.removeEventListener("resize",this.updateColor)}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{className:p()("navbar-absolute",this.state.color),expand:"lg"},n.a.createElement(h.a,{fluid:!0},n.a.createElement("div",{className:"navbar-wrapper"},n.a.createElement("div",{className:p()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},n.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},n.a.createElement("span",{className:"navbar-toggler-bar bar1"}),n.a.createElement("span",{className:"navbar-toggler-bar bar2"}),n.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),n.a.createElement(g.a,{href:"#pablo",onClick:e=>e.preventDefault()},this.props.brandText)))),n.a.createElement(b.a,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},n.a.createElement("div",{className:"modal-header"},n.a.createElement(E.a,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),n.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},n.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}var v=M;class w extends n.a.Component{render(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(h.a,{fluid:!0},n.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," made by"," ",n.a.createElement("a",{href:"https://jakjus.com",target:"_blank"},"@jakjus"))))}}var f,A=w,C=t(188);class k extends n.a.Component{constructor(e){super(e),this.linkOnClick=()=>{document.documentElement.classList.remove("nav-open")},this.activeRoute.bind(this)}activeRoute(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(f=new m.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&f.destroy()}render(){var e=this.props,a=e.bgColor,t=e.routes,r=e.rtlActive,l=e.logo,o=null,s=null;return void 0!==l&&(void 0!==l.outterLink?(o=n.a.createElement("a",{href:l.outterLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:l.imgSrc,alt:"react-logo"}))),s=n.a.createElement("a",{href:l.outterLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},l.text)):(o=n.a.createElement(c.b,{to:l.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:l.imgSrc,alt:"react-logo"}))),s=n.a.createElement(c.b,{to:l.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},l.text))),n.a.createElement("div",{className:"sidebar",data:a},n.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==o||null!==s?n.a.createElement("div",{className:"logo"},o,s):null,n.a.createElement(C.a,null,t.map((e,a)=>e.redirect?null:n.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?" active-pro":""),key:a},n.a.createElement(c.c,{to:e.pathStripped+e.server,className:"nav-link",activeClassName:"active",onClick:this.props.toggleSidebar},n.a.createElement("i",{className:e.icon}),n.a.createElement("p",null,r?e.rtlName:e.name)))))))}}k.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var S=k,N=(t(87),t(189)),y=t(190),x=t(23),O=t(11),j=t(13),B=t.n(j),D=t(191),L=t(192),F=t(193),R=t(194),T=t(195),U=t(196),P=e=>{var a=Object(r.useState)(null),t=Object(O.a)(a,2),l=t[0],o=t[1],s=Object(r.useState)(null),c=Object(O.a)(s,2),i=c[0],m=c[1],d=Object(r.useState)("all"),u=Object(O.a)(d,2),h=u[0],g=u[1],b=Object(r.useRef)(null),E=Object(r.useState)(null),M=Object(O.a)(E,2),v=M[0],w=M[1];return Object(r.useEffect)(()=>{var a="https://host.jakjus.com/players?server="+e.server+"&auth="+e.auth;fetch(a).then(e=>e.json()).then(e=>{o(e[0].name),m(e[0].history)}).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{var e=b.current.getContext("2d").createLinearGradient(0,230,0,50);if(e.addColorStop(1,"rgba(29,140,248,0.2)"),e.addColorStop(.4,"rgba(29,140,248,0.0)"),e.addColorStop(0,"rgba(29,140,248,0)"),b&&b.current){var a=x.chartExample1;a.data.datasets[0].backgroundColor=e;var t=new B.a(b.current,a);w(t)}},[]),Object(r.useEffect)(()=>{v&&i&&i.length>0&&("week"===h?v.data.datasets[0].data=i.map(e=>({t:e.date,y:e.elo})).slice(-42):"month"===h?v.data.datasets[0].data=i.map(e=>({t:e.date,y:e.elo})).slice(-180):"all"===h&&(v.data.datasets[0].data=i.map(e=>({t:e.date,y:e.elo}))),v.update())},[i,h]),n.a.createElement(N.a,null,n.a.createElement(y.a,{xs:"12"},n.a.createElement(D.a,{className:"card-chart"},n.a.createElement(L.a,null,n.a.createElement(N.a,null,n.a.createElement(y.a,{className:"text-left",sm:"6"},n.a.createElement("h5",{className:"card-category"},"Rank history - ",e.server),n.a.createElement(F.a,{tag:"h2"},n.a.createElement("i",{className:"tim-icons icon-chart-bar-32 text-info"})," ",l)),n.a.createElement(y.a,{sm:"6"},n.a.createElement(R.a,{className:"btn-group-toggle float-right","data-toggle":"buttons"},n.a.createElement(T.a,{tag:"label",className:p()("btn-simple",{active:"week"===h}),color:"info",id:"0",size:"sm",onClick:()=>g("week")},n.a.createElement("input",{defaultChecked:!0,className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"Week"),n.a.createElement("span",{className:"d-block d-sm-none"},"W")),n.a.createElement(T.a,{color:"info",id:"1",size:"sm",tag:"label",className:p()("btn-simple",{active:"month"===h}),onClick:()=>g("month")},n.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"Month"),n.a.createElement("span",{className:"d-block d-sm-none"},"M")),n.a.createElement(T.a,{color:"info",id:"2",size:"sm",tag:"label",className:p()("btn-simple",{active:"all"===h}),onClick:()=>g("all")},n.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"All Time"),n.a.createElement("span",{className:"d-block d-sm-none"},"A")))))),n.a.createElement(U.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement("canvas",{ref:b}))))))},W=t(197),G=e=>{var a,t=[11707539,null,"Bronze"],l=[13619151,null,"Silver"],o=[15129224,null,"Gold"],s=[12319482,null,"Diamond"],c=[16573439,"bold","Master"],i=1130,m=1310,d=1440,p=1600,u=Object(r.useState)(null),h=Object(O.a)(u,2),g=h[0],b=h[1],E=Object(r.useRef)(null),M=Object(r.useState)(null),v=Object(O.a)(M,2),w=v[0],f=v[1];return Object(r.useEffect)(()=>{var a="https://host.jakjus.com/players?server="+e.server+"&auth="+e.auth;fetch(a).then(e=>e.json()).then(e=>{b(e[0])}).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{if(E&&E.current){var e=x.chartDoughnut,a=new B.a(E.current,e);f(a)}},[]),Object(r.useEffect)(()=>{w&&(w.data.datasets[0].data=[g.wins,g.losses],w.update())},[g]),n.a.createElement(D.a,{className:"card-chart"},n.a.createElement(L.a,null,n.a.createElement(N.a,null,n.a.createElement(y.a,{className:"text-left"},n.a.createElement("h5",{className:"card-category"},"Summary - ",e.server),n.a.createElement(F.a,{tag:"h2"},n.a.createElement("i",{className:"tim-icons icon-single-02 text-info"})," ",g&&g.name," ",n.a.createElement(W.a,{style:{verticalAlign:"middle"},color:"secondary"},g&&g.elo),n.a.createElement(W.a,{style:{verticalAlign:"middle"},color:"default"},g&&(a=g.elo,a<i?t:a<m?l:a<d?o:a<p?s:c)[2]))))),n.a.createElement(U.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement("canvas",{ref:E}))))},H=t(198),z=e=>{var a=Object(r.useState)(null),t=Object(O.a)(a,2),l=t[0],o=t[1];return Object(r.useEffect)(()=>{var a=e.auth||"",t="https://host.jakjus.com/matches?server="+e.servername+"&auth="+a+"&n=5";fetch(t).then(e=>e.json()).then(e=>o(e)).catch(e=>console.log("Error: ",e))},[e]),l?n.a.createElement(D.a,null,n.a.createElement(L.a,null,n.a.createElement(F.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-bullet-list-67 text-info"})," Latest Matches")),n.a.createElement(U.a,null,n.a.createElement(H.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Winner"),n.a.createElement("th",null,"Loser"),n.a.createElement("th",null,"Date"))),n.a.createElement("tbody",null,l.map(a=>n.a.createElement("tr",{key:a.date},n.a.createElement("td",null,a.winners.map(a=>n.a.createElement(c.b,{className:"d-block",to:a.placement?void 0:"/ranks/".concat(e.servername,"/").concat(a.auth)},a.name," ",n.a.createElement("small",null,"(",!a.placement&&a.elo||a.placement&&"--",")")))),n.a.createElement("td",null,a.losers.map(a=>n.a.createElement(c.b,{className:"d-block",to:a.placement?void 0:"/ranks/".concat(e.servername,"/").concat(a.auth)},a.name," ",n.a.createElement("small",null,"(",!a.placement&&a.elo||a.placement&&"--",")")))),n.a.createElement("td",null,new Date(a.date).toLocaleString()))))))):n.a.createElement(F.a,{tag:"h4"}," Loading...")},V=t(68),I=t(199),Q=t(200);class X extends r.Component{constructor(e){super(e),this.fetchData=e=>{var a="https://host.jakjus.com/search?server="+this.props.server+"&name="+e+"&n=5";fetch(a).then(e=>e.json()).then(e=>{this.setState({data:e})}).catch(e=>console.log("Error: ",e))},this.state={data:""},this.fetchData=this.fetchData.bind(this)}componentDidUpdate(e){this.props.query!==e.query&&this.fetchData(this.props.query)}render(){var e,a=this.state.data,t=[],r=Object(V.a)(a);try{for(r.s();!(e=r.n()).done;){var l=e.value;t.push(n.a.createElement(c.b,{key:this.props.server+l.auth,to:"/ranks/".concat(this.props.server,"/").concat(l.auth),onClick:e=>this.props.callback(e)},n.a.createElement(I.a,{className:"list-group-item-action",key:l.name},l.name," ",n.a.createElement("small",null,"(",l.elo,")"))))}}catch(o){r.e(o)}finally{r.f()}return this.props.dActive?n.a.createElement(Q.a,{flush:!0},t):n.a.createElement(n.a.Fragment,null)}}var q=X,J=t(201),Y=t(202),Z=t(69);class K extends r.Component{constructor(e){super(e),this.onFocus=()=>{""!==this.state.query&&this.setState({dActive:!0})},this.callback=e=>{this.setState({dActive:!1})},this.state={active:"is-active",query:"",dActive:!1},this.handleChange=this.handleChange.bind(this),this.onFocus=this.onFocus.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value}),""!==e.target.value?this.setState({dActive:!0}):this.setState({dActive:!1})}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,null,n.a.createElement(U.a,null,n.a.createElement(J.a,null,n.a.createElement(Y.a,{addonType:"prepend"},n.a.createElement(Z.a,null,n.a.createElement("i",{className:"tim-icons icon-zoom-split"}))),n.a.createElement(E.a,{onFocus:this.onFocus,autoComplete:"off",name:"query",type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"Enter nickname"}))),n.a.createElement(q,{callback:e=>this.callback(e),query:this.state.query,dActive:this.state.dActive,server:this.props.server})))}}var _=K;class $ extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(N.a,null,n.a.createElement(y.a,{md:"12"},n.a.createElement(_,{server:this.props.match.params.server}))),n.a.createElement(N.a,null,n.a.createElement(y.a,{md:"6"},n.a.createElement(G,{server:this.props.match.params.server,auth:this.props.match.params.auth})),n.a.createElement(y.a,{md:"6"},n.a.createElement(z,{servername:this.props.match.params.server,auth:this.props.match.params.auth}))),n.a.createElement(P,{server:this.props.match.params.server,auth:this.props.match.params.auth})))}}var ee=$,ae=e=>{var a=Object(r.useState)(null),t=Object(O.a)(a,2),l=t[0],o=t[1],s=[11707539,null,"Bronze"],i=[13619151,null,"Silver"],m=[15129224,null,"Gold"],d=[12319482,null,"Diamond"],p=[16573439,"bold","Master"],u=1130,h=1310,g=1440,b=1600;return Object(r.useEffect)(()=>{var a="https://host.jakjus.com/allplayers?server="+e.servername+"&n=30";fetch(a).then(e=>e.json()).then(e=>(e.forEach((e,a)=>e.id=a+1),e.forEach((e,a)=>{var t;e.league=(t=e.elo,t<u?s:t<h?i:t<g?m:t<b?d:p)[2]}),e)).then(e=>o(e)).catch(e=>console.log("Error: ",e))},[e]),null==l?n.a.createElement(F.a,{tag:"h4"}," Loading..."):n.a.createElement(D.a,null,n.a.createElement(L.a,null,n.a.createElement(F.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-trophy text-info"})," ","Standings")),n.a.createElement(U.a,null,n.a.createElement(H.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Place"),n.a.createElement("th",null,"Nickname"),n.a.createElement("th",null,"Elo points"),n.a.createElement("th",null,"Rank"))),n.a.createElement("tbody",null,l.map(a=>n.a.createElement("tr",null,n.a.createElement("td",null,"#",a.id),n.a.createElement("td",null,n.a.createElement(c.b,{className:"d-block",to:"/ranks/".concat(e.servername,"/").concat(a.auth)},a.name)),n.a.createElement("td",null,a.elo),n.a.createElement("td",null,a.league)))))))};class te extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(N.a,null,n.a.createElement(y.a,{md:"6"},n.a.createElement(_,{server:this.props.match.params.server}),n.a.createElement(z,{servername:this.props.match.params.server})),n.a.createElement(y.a,{md:"6"},n.a.createElement(ae,{servername:this.props.match.params.server})))))}}var re,ne=[{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/classic",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/classic",name:"1v1 Classic",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:te,layout:"/admin"},{pathStripped:"/tables",server:"/huge",name:"4v4 Hot Huge",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:te,layout:"/admin"}],le=t(70),oe=t.n(le);class se extends n.a.Component{constructor(e){super(e),this.toggleSidebar=()=>{document.documentElement.classList.toggle("nav-open"),this.setState({sidebarOpened:!this.state.sidebarOpened})},this.getRoutes=e=>e.map((e,a)=>"/admin"===e.layout?n.a.createElement(i.b,{path:e.path,component:e.component,key:a}):null),this.handleBgClick=e=>{this.setState({backgroundColor:e})},this.getBrandText=e=>{for(var a=0;a<ne.length;a++)if(this.props.location.pathname.includes(ne[a].pathStripped+ne[a].server))return ne[a].name;return this.props.location.pathname},this.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")}}componentDidMount(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),re=new m.a(this.refs.mainPanel,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),a=0;a<e.length;a++)re=new m.a(e[a])}}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(re.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}componentDidUpdate(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1)for(var a=document.querySelectorAll(".table-responsive"),t=0;t<a.length;t++)re=new m.a(a[t]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(S,Object.assign({},this.props,{routes:ne,bgColor:this.state.backgroundColor,logo:{outterLink:"#",text:"hb.jakjus.com",imgSrc:oe.a},toggleSidebar:this.toggleSidebar})),n.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},n.a.createElement(v,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),n.a.createElement(i.d,null,this.getRoutes(ne),n.a.createElement(i.a,{from:"/",to:"/tables/classic"})),n.a.createElement(A,{fluid:!0}))))}}var ce=se;t(180),t(181),t(182),Object(s.a)();document.body.classList.add("white-content"),o.a.render(n.a.createElement(c.a,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/",render:e=>n.a.createElement(ce,e)}))),document.getElementById("root"))},23:function(e,a){e.exports={chartExample1:{type:"line",data:{datasets:[{label:"ELO Points",fill:!0,borderColor:"#1f8ef1",borderWidth:2,cubicInterpolationMode:"default",borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:1150,suggestedMax:1250,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{type:"time",barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}},chartExample2:{data:e=>{var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(29,140,248,0.2)"),a.addColorStop(.4,"rgba(29,140,248,0.0)"),a.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:a,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]}}},chartExample3:{data:e=>{var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(72,72,176,0.1)"),a.addColorStop(.4,"rgba(72,72,176,0.0)"),a.addColorStop(0,"rgba(119,52,169,0)"),{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,backgroundColor:a,hoverBackgroundColor:a,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartExample4:{data:e=>{var a=e.getContext("2d").createLinearGradient(0,230,0,50);return a.addColorStop(1,"rgba(66,134,121,0.15)"),a.addColorStop(.4,"rgba(66,134,121,0.0)"),a.addColorStop(0,"rgba(66,134,121,0)"),{labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:a,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartDoughnut:{type:"doughnut",data:{labels:["Wins","Losses"],datasets:[{label:"Win/Lose Ratio",fill:!0,backgroundColor:["#67aceb","#eba7a7"],borderColor:"#1f8ef1",borderWidth:2,cubicInterpolationMode:"default",borderDash:[],borderDashOffset:0}]},options:{maintainAspectRatio:!1,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,position:"nearest"},responsive:!0}}}},70:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABg1BMVEUAAAD4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr///+C0529AAAAf3RSTlMAAA5YZmVaEAF2+/yAA0fq7k8izNInC6GpcPn+5r/a9vrc5HhB6N0pCRxASkgeCCZ062iTAhU7Fgw+j+NyGfTEr8bp9cLy0/1uE8Hh3skX97ENCmG28zPvvhFL+DlUOLLxBZylBzXnPJcEK+AxgorXfBrNH8PK8LBEs0U2MEkGYYfm5AAAAAFiS0dEgGW9nmgAAAAHdElNRQfkCgkTMBJEJv6NAAABjUlEQVQ4y42T+TcCURTHuy20UIkS7TVIqyUhoURkKZUkki37vu/ev+7VzDQzNTm+P91zv5/zffe9e55A8D+BUCSWsNXSChxfKpMjjhRt7SwCQKlCdVJ3ADC+phM1qEtbI0DXjXikFwId0NOLkMFoMlusVVlsJrsBIblDCqRP9CHU7xhwDrrcHqXS4ya8Pv+QGaFhT/UQgBGMG0cJYcA55g8GtePOwMRkaAofEiangOnqiDOzkah5LmZRmaOR+YVKJ+4FagYJ8wiLi0y5RF8DEst0c0UWXqXrtWTtmiBKUc31dEZPldYs66XSG1Q3F9zMU+VWAVhPvZ0juztEcYasLLvAXoZPTwMlCtjTsdcJ4FJzgX0lcPd9cMgFjsocH0ccn7CB4VNuACYCITZwdl7nY+LikgHsV9AIwDUD3EgbfExobmnApuXxccSQgQLugA8QwP0DCcQfeX0cIVZgIMasuYFIPFmJUuo52cTHES0vRDGfbRZQ+YCvb8H3QlMfR3x8fn03D8DET8ZZ/sPn0y/6/azYEoPugAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0wOVQxOTo0ODoxOCswMjowMFhYDfAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMDlUMTk6NDg6MTgrMDI6MDApBbVMAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},71:function(e,a,t){e.exports=t(183)}},[[71,1,2]]]);
//# sourceMappingURL=main.4edcd5a1.chunk.js.map