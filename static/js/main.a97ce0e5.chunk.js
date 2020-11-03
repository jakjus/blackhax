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
/*! For license information please see main.a97ce0e5.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(18),o=a.n(l),s=a(9),c=a(8),i=a(16),m=a(19),d=a(4),p=a.n(d),h=a(184),u=a(185),g=a(186),b=a(203),E=a(187);class v extends n.a.Component{constructor(e){super(e),this.updateColor=()=>{window.innerWidth<993&&this.state.collapseOpen?this.setState({color:"bg-white"}):this.setState({color:"navbar-transparent"})},this.toggleCollapse=()=>{this.state.collapseOpen?this.setState({color:"navbar-transparent"}):this.setState({color:"bg-white"}),this.setState({collapseOpen:!this.state.collapseOpen})},this.toggleModalSearch=()=>{this.setState({modalSearch:!this.state.modalSearch})},this.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"}}componentDidMount(){window.addEventListener("resize",this.updateColor)}componentWillUnmount(){window.removeEventListener("resize",this.updateColor)}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{className:p()("navbar-absolute",this.state.color),expand:"lg"},n.a.createElement(u.a,{fluid:!0},n.a.createElement("div",{className:"navbar-wrapper"},n.a.createElement("div",{className:p()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},n.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},n.a.createElement("span",{className:"navbar-toggler-bar bar1"}),n.a.createElement("span",{className:"navbar-toggler-bar bar2"}),n.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),n.a.createElement(g.a,{href:"#",onClick:e=>e.preventDefault()},this.props.brandText)))),n.a.createElement(b.a,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},n.a.createElement("div",{className:"modal-header"},n.a.createElement(E.a,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),n.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},n.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}var M=v;class w extends n.a.Component{render(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(u.a,{fluid:!0},n.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," made by"," ",n.a.createElement("a",{href:"https://jakjus.com",target:"_blank"},"@jakjus"))))}}var f,A=w,C=a(188);class k extends n.a.Component{constructor(e){super(e),this.linkOnClick=()=>{document.documentElement.classList.remove("nav-open")},this.activeRoute.bind(this)}activeRoute(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(f=new m.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&f.destroy()}render(){var e=this.props,t=e.bgColor,a=e.routes,r=e.rtlActive,l=e.logo,o=null,s=null;return void 0!==l&&(void 0!==l.outterLink?(o=n.a.createElement("a",{href:l.outterLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:l.imgSrc,alt:"react-logo"}))),s=n.a.createElement("a",{href:l.outterLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},l.text)):(o=n.a.createElement(c.b,{to:l.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:l.imgSrc,alt:"react-logo"}))),s=n.a.createElement(c.b,{to:l.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},l.text))),n.a.createElement("div",{className:"sidebar",data:t},n.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==o||null!==s?n.a.createElement("div",{className:"logo"},o,s):null,n.a.createElement(C.a,null,a.map((e,t)=>e.redirect?null:n.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?" active-pro":""),key:t},n.a.createElement(c.c,{to:e.pathStripped+e.server,className:"nav-link",activeClassName:"active",onClick:this.props.toggleSidebar},n.a.createElement("i",{className:e.icon}),n.a.createElement("p",null,r?e.rtlName:e.name)))))))}}k.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var S=k,N=(a(87),a(189)),y=a(190),x=a(23),O=a(11),j=a(13),D=a.n(j),B=a(191),L=a(192),R=a(193),F=a(194),P=a(195),T=a(196),U=e=>{var t=Object(r.useState)(null),a=Object(O.a)(t,2),l=a[0],o=a[1],s=Object(r.useState)(null),c=Object(O.a)(s,2),i=c[0],m=c[1],d=Object(r.useState)("all"),h=Object(O.a)(d,2),u=h[0],g=h[1],b=Object(r.useRef)(null),E=Object(r.useState)(null),v=Object(O.a)(E,2),M=v[0],w=v[1];return Object(r.useEffect)(()=>{var t="https://host.jakjus.com/players?server="+e.server+"&auth="+e.auth;fetch(t).then(e=>e.json()).then(e=>{o(e[0].name),m(e[0].history)}).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{var e=b.current.getContext("2d").createLinearGradient(0,230,0,50);if(e.addColorStop(1,"rgba(29,140,248,0.2)"),e.addColorStop(.4,"rgba(29,140,248,0.0)"),e.addColorStop(0,"rgba(29,140,248,0)"),b&&b.current){var t=x.chartExample1;t.data.datasets[0].backgroundColor=e;var a=new D.a(b.current,t);w(a)}},[]),Object(r.useEffect)(()=>{M&&i&&i.length>0&&("week"===u?M.data.datasets[0].data=i.map(e=>({t:e.date,y:e.elo})).slice(-42):"month"===u?M.data.datasets[0].data=i.map(e=>({t:e.date,y:e.elo})).slice(-180):"all"===u&&(M.data.datasets[0].data=i.map(e=>({t:e.date,y:e.elo}))),M.update())},[i,u]),n.a.createElement(N.a,null,n.a.createElement(y.a,{xs:"12"},n.a.createElement(B.a,{className:"card-chart"},n.a.createElement(L.a,null,n.a.createElement(N.a,null,n.a.createElement(y.a,{className:"text-left",sm:"6"},n.a.createElement("h5",{className:"card-category"},"Rank history - ",e.server),n.a.createElement(R.a,{tag:"h2"},n.a.createElement("i",{className:"tim-icons icon-chart-bar-32 text-info"})," ",l)),n.a.createElement(y.a,{sm:"6"},n.a.createElement(F.a,{className:"btn-group-toggle float-right","data-toggle":"buttons"},n.a.createElement(P.a,{tag:"label",className:p()("btn-simple",{active:"week"===u}),color:"info",id:"0",size:"sm",onClick:()=>g("week")},n.a.createElement("input",{defaultChecked:!0,className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"Week"),n.a.createElement("span",{className:"d-block d-sm-none"},"W")),n.a.createElement(P.a,{color:"info",id:"1",size:"sm",tag:"label",className:p()("btn-simple",{active:"month"===u}),onClick:()=>g("month")},n.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"Month"),n.a.createElement("span",{className:"d-block d-sm-none"},"M")),n.a.createElement(P.a,{color:"info",id:"2",size:"sm",tag:"label",className:p()("btn-simple",{active:"all"===u}),onClick:()=>g("all")},n.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"All Time"),n.a.createElement("span",{className:"d-block d-sm-none"},"A")))))),n.a.createElement(T.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement("canvas",{ref:b}))))))},W=a(197),H=e=>{var t,a=[11707539,null,"Bronze"],l=[13619151,null,"Silver"],o=[15129224,null,"Gold"],s=[12319482,null,"Diamond"],c=[16573439,"bold","Master"],i=1130,m=1310,d=1440,p=1600,h=Object(r.useState)(null),u=Object(O.a)(h,2),g=u[0],b=u[1],E=Object(r.useRef)(null),v=Object(r.useState)(null),M=Object(O.a)(v,2),w=M[0],f=M[1];return Object(r.useEffect)(()=>{var t="https://host.jakjus.com/players?server="+e.server+"&auth="+e.auth;fetch(t).then(e=>e.json()).then(e=>{b(e[0])}).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{if(E&&E.current){var e=x.chartDoughnut,t=new D.a(E.current,e);f(t)}},[]),Object(r.useEffect)(()=>{w&&(w.data.datasets[0].data=[g.wins,g.losses],w.update())},[g]),n.a.createElement(B.a,{className:"card-chart"},n.a.createElement(L.a,null,n.a.createElement(N.a,null,n.a.createElement(y.a,{className:"text-left"},n.a.createElement("h5",{className:"card-category"},"Summary - ",e.server),n.a.createElement(R.a,{tag:"h2"},n.a.createElement("i",{className:"tim-icons icon-single-02 text-info"})," ",g&&g.name," ",n.a.createElement(W.a,{style:{verticalAlign:"middle"},color:"secondary"},g&&g.elo),n.a.createElement(W.a,{style:{verticalAlign:"middle"},color:"default"},g&&(t=g.elo,t<i?a:t<m?l:t<d?o:t<p?s:c)[2]))))),n.a.createElement(T.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement("canvas",{ref:E}))))},G=a(198),z=e=>{var t=Object(r.useState)(null),a=Object(O.a)(t,2),l=a[0],o=a[1];return Object(r.useEffect)(()=>{var t=e.auth||"",a="https://host.jakjus.com/matches?server="+e.servername+"&auth="+t+"&n=5";fetch(a).then(e=>e.json()).then(e=>o(e)).catch(e=>console.log("Error: ",e))},[e]),l?n.a.createElement(B.a,null,n.a.createElement(L.a,null,n.a.createElement(R.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-bullet-list-67 text-info"})," Latest Matches")),n.a.createElement(T.a,null,n.a.createElement(G.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Winner"),n.a.createElement("th",null,"Loser"),n.a.createElement("th",null,"Date"))),n.a.createElement("tbody",null,l.map(t=>n.a.createElement("tr",{key:t.date},n.a.createElement("td",null,t.winners.map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement("small",null,"(",!t.placement&&t.elo||t.placement&&"--",")")))),n.a.createElement("td",null,t.losers.map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement("small",null,"(",!t.placement&&t.elo||t.placement&&"--",")")))),n.a.createElement("td",null,new Date(t.date).toLocaleString()))))))):n.a.createElement(R.a,{tag:"h4"}," Loading...")},V=a(68),I=a(199),Q=a(200);class X extends r.Component{constructor(e){super(e),this.fetchData=e=>{var t="https://host.jakjus.com/search?server="+this.props.server+"&name="+e+"&n=5";fetch(t).then(e=>e.json()).then(e=>{this.setState({data:e})}).catch(e=>console.log("Error: ",e))},this.state={data:""},this.fetchData=this.fetchData.bind(this)}componentDidUpdate(e){this.props.query!==e.query&&this.fetchData(this.props.query)}render(){var e,t=this.state.data,a=[],r=Object(V.a)(t);try{for(r.s();!(e=r.n()).done;){var l=e.value;a.push(n.a.createElement(c.b,{key:this.props.server+l.auth,to:"/ranks/".concat(this.props.server,"/").concat(l.auth),onClick:e=>this.props.callback(e)},n.a.createElement(I.a,{className:"list-group-item-action",key:l.name},l.name," ",n.a.createElement("small",null,"(",l.elo,")"))))}}catch(o){r.e(o)}finally{r.f()}return this.props.dActive?n.a.createElement(Q.a,{flush:!0},a):n.a.createElement(n.a.Fragment,null)}}var q=X,J=a(201),Y=a(202),Z=a(69);class K extends r.Component{constructor(e){super(e),this.onFocus=()=>{""!==this.state.query&&this.setState({dActive:!0})},this.callback=e=>{this.setState({dActive:!1})},this.state={active:"is-active",query:"",dActive:!1},this.handleChange=this.handleChange.bind(this),this.onFocus=this.onFocus.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value}),""!==e.target.value?this.setState({dActive:!0}):this.setState({dActive:!1})}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(B.a,null,n.a.createElement(T.a,null,n.a.createElement(J.a,null,n.a.createElement(Y.a,{addonType:"prepend"},n.a.createElement(Z.a,null,n.a.createElement("i",{className:"tim-icons icon-zoom-split"}))),n.a.createElement(E.a,{onFocus:this.onFocus,autoComplete:"off",name:"query",type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"Enter nickname"}))),n.a.createElement(q,{callback:e=>this.callback(e),query:this.state.query,dActive:this.state.dActive,server:this.props.server})))}}var _=K;class $ extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(N.a,null,n.a.createElement(y.a,{md:"12"},n.a.createElement(_,{server:this.props.match.params.server}))),n.a.createElement(N.a,null,n.a.createElement(y.a,{md:"6"},n.a.createElement(H,{server:this.props.match.params.server,auth:this.props.match.params.auth})),n.a.createElement(y.a,{md:"6"},n.a.createElement(z,{servername:this.props.match.params.server,auth:this.props.match.params.auth}))),n.a.createElement(U,{server:this.props.match.params.server,auth:this.props.match.params.auth})))}}var ee=$,te=e=>{var t=Object(r.useState)(null),a=Object(O.a)(t,2),l=a[0],o=a[1],s=[11707539,null,"Bronze"],i=[13619151,null,"Silver"],m=[15129224,null,"Gold"],d=[12319482,null,"Diamond"],p=[16573439,"bold","Master"],h=1130,u=1310,g=1440,b=1600;return Object(r.useEffect)(()=>{var t="https://host.jakjus.com/allplayers?server="+e.servername+"&n=30";fetch(t).then(e=>e.json()).then(e=>(e.forEach((e,t)=>e.id=t+1),e.forEach((e,t)=>{var a;e.league=(a=e.elo,a<h?s:a<u?i:a<g?m:a<b?d:p)[2]}),e)).then(e=>o(e)).catch(e=>console.log("Error: ",e))},[e]),null==l?n.a.createElement(R.a,{tag:"h4"}," Loading..."):n.a.createElement(B.a,null,n.a.createElement(L.a,null,n.a.createElement(R.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-trophy text-info"})," ","Standings")),n.a.createElement(T.a,null,n.a.createElement(G.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Place"),n.a.createElement("th",null,"Nickname"),n.a.createElement("th",null,"Elo points"),n.a.createElement("th",null,"Rank"))),n.a.createElement("tbody",null,l.map(t=>n.a.createElement("tr",null,n.a.createElement("td",null,"#",t.id),n.a.createElement("td",null,n.a.createElement(c.b,{className:"d-block",to:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name)),n.a.createElement("td",null,t.elo),n.a.createElement("td",null,t.league)))))))};class ae extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(N.a,null,n.a.createElement(y.a,{md:"6"},n.a.createElement(_,{server:this.props.match.params.server}),n.a.createElement(z,{servername:this.props.match.params.server})),n.a.createElement(y.a,{md:"6"},n.a.createElement(te,{servername:this.props.match.params.server})))))}}var re,ne=[{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/classic",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/huge",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/bouncer",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/2d",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/classic-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/huge-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ee,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/classic",name:"1v1 Classic EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:ae,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/huge",name:"4v4 Hot Huge EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:ae,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/bouncer",name:"4v4 Probounce EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:ae,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/2d",name:"4v4 Soccer 2D EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:ae,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/classic-tr",name:"1v1 Classic TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:ae,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/huge-tr",name:"4v4 Hot Huge TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:ae,layout:"/admin"}],le=a(70),oe=a.n(le);class se extends n.a.Component{constructor(e){super(e),this.toggleSidebar=()=>{document.documentElement.classList.toggle("nav-open"),this.setState({sidebarOpened:!this.state.sidebarOpened})},this.getRoutes=e=>e.map((e,t)=>"/admin"===e.layout?n.a.createElement(i.b,{path:e.path,component:e.component,key:t}):null),this.handleBgClick=e=>{this.setState({backgroundColor:e})},this.getBrandText=e=>{for(var t=0;t<ne.length;t++)if(this.props.location.pathname.includes(ne[t].pathStripped+ne[t].server)&&!this.props.location.pathname.includes(ne[t].pathStripped+ne[t].server+"-"))return ne[t].name;return""},this.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")}}componentDidMount(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),re=new m.a(this.refs.mainPanel,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),t=0;t<e.length;t++)re=new m.a(e[t])}}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(re.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}componentDidUpdate(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1)for(var t=document.querySelectorAll(".table-responsive"),a=0;a<t.length;a++)re=new m.a(t[a]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(S,Object.assign({},this.props,{routes:ne,bgColor:this.state.backgroundColor,logo:{outterLink:"#",text:"hb.jakjus.com",imgSrc:oe.a},toggleSidebar:this.toggleSidebar})),n.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},n.a.createElement(M,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),n.a.createElement(i.d,null,this.getRoutes(ne),n.a.createElement(i.a,{from:"/",to:"/tables/classic"})),n.a.createElement(A,{fluid:!0}))))}}var ce=se;a(180),a(181),a(182),Object(s.a)();document.body.classList.add("white-content"),o.a.render(n.a.createElement(c.a,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/",render:e=>n.a.createElement(ce,e)}))),document.getElementById("root"))},23:function(e,t){e.exports={chartExample1:{type:"line",data:{datasets:[{label:"ELO Points",fill:!0,borderColor:"#1f8ef1",borderWidth:2,cubicInterpolationMode:"default",borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:1150,suggestedMax:1250,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{type:"time",barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}},chartExample2:{data:e=>{var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(29,140,248,0.2)"),t.addColorStop(.4,"rgba(29,140,248,0.0)"),t.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:t,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]}}},chartExample3:{data:e=>{var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(72,72,176,0.1)"),t.addColorStop(.4,"rgba(72,72,176,0.0)"),t.addColorStop(0,"rgba(119,52,169,0)"),{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,backgroundColor:t,hoverBackgroundColor:t,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartExample4:{data:e=>{var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(66,134,121,0.15)"),t.addColorStop(.4,"rgba(66,134,121,0.0)"),t.addColorStop(0,"rgba(66,134,121,0)"),{labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:t,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartDoughnut:{type:"doughnut",data:{labels:["Wins","Losses"],datasets:[{label:"Win/Lose Ratio",fill:!0,backgroundColor:["#67aceb","#eba7a7"],borderColor:"#1f8ef1",borderWidth:2,cubicInterpolationMode:"default",borderDash:[],borderDashOffset:0}]},options:{maintainAspectRatio:!1,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,position:"nearest"},responsive:!0}}}},70:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABg1BMVEUAAAD4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr4Mwr///+C0529AAAAf3RSTlMAAA5YZmVaEAF2+/yAA0fq7k8izNInC6GpcPn+5r/a9vrc5HhB6N0pCRxASkgeCCZ062iTAhU7Fgw+j+NyGfTEr8bp9cLy0/1uE8Hh3skX97ENCmG28zPvvhFL+DlUOLLxBZylBzXnPJcEK+AxgorXfBrNH8PK8LBEs0U2MEkGYYfm5AAAAAFiS0dEgGW9nmgAAAAHdElNRQfkCgkTMBJEJv6NAAABjUlEQVQ4y42T+TcCURTHuy20UIkS7TVIqyUhoURkKZUkki37vu/ev+7VzDQzNTm+P91zv5/zffe9e55A8D+BUCSWsNXSChxfKpMjjhRt7SwCQKlCdVJ3ADC+phM1qEtbI0DXjXikFwId0NOLkMFoMlusVVlsJrsBIblDCqRP9CHU7xhwDrrcHqXS4ya8Pv+QGaFhT/UQgBGMG0cJYcA55g8GtePOwMRkaAofEiangOnqiDOzkah5LmZRmaOR+YVKJ+4FagYJ8wiLi0y5RF8DEst0c0UWXqXrtWTtmiBKUc31dEZPldYs66XSG1Q3F9zMU+VWAVhPvZ0juztEcYasLLvAXoZPTwMlCtjTsdcJ4FJzgX0lcPd9cMgFjsocH0ccn7CB4VNuACYCITZwdl7nY+LikgHsV9AIwDUD3EgbfExobmnApuXxccSQgQLugA8QwP0DCcQfeX0cIVZgIMasuYFIPFmJUuo52cTHES0vRDGfbRZQ+YCvb8H3QlMfR3x8fn03D8DET8ZZ/sPn0y/6/azYEoPugAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0wOVQxOTo0ODoxOCswMjowMFhYDfAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMDlUMTk6NDg6MTgrMDI6MDApBbVMAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},71:function(e,t,a){e.exports=a(183)}},[[71,1,2]]]);
//# sourceMappingURL=main.a97ce0e5.chunk.js.map