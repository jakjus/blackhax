/*! For license information please see main.e89260b1.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(23),o=a.n(l),s=a(11),c=a(10),i=a(19),m=a(26),d=a(4),p=a.n(d),u=a(225),h=a(226),E=a(227),b=a(245),g=a(228);class v extends n.a.Component{constructor(e){super(e),this.updateColor=()=>{window.innerWidth<993&&this.state.collapseOpen?this.setState({color:"bg-white"}):this.setState({color:"navbar-transparent"})},this.toggleCollapse=()=>{this.state.collapseOpen?this.setState({color:"navbar-transparent"}):this.setState({color:"bg-white"}),this.setState({collapseOpen:!this.state.collapseOpen})},this.toggleModalSearch=()=>{this.setState({modalSearch:!this.state.modalSearch})},this.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"}}componentDidMount(){window.addEventListener("resize",this.updateColor)}componentWillUnmount(){window.removeEventListener("resize",this.updateColor)}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{className:p()("navbar-absolute",this.state.color),expand:"lg"},n.a.createElement(h.a,{fluid:!0},n.a.createElement("div",{className:"navbar-wrapper"},n.a.createElement("div",{className:p()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},n.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},n.a.createElement("span",{className:"navbar-toggler-bar bar1"}),n.a.createElement("span",{className:"navbar-toggler-bar bar2"}),n.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),n.a.createElement(E.a,{href:"#",onClick:e=>e.preventDefault()},this.props.brandText)))),n.a.createElement(b.a,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},n.a.createElement("div",{className:"modal-header"},n.a.createElement(g.a,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),n.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},n.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}var w=v;class M extends n.a.Component{render(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(h.a,{fluid:!0},n.a.createElement("div",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," made by"," ",n.a.createElement("a",{href:"https://jakjus.com",target:"_blank"},"@jakjus"))))}}var f,A=M,k=a(229),y=a(230),N=a(246),C=a(231),S=a(247),x=a(232);class O extends n.a.Component{constructor(e){super(e),this.toggleDropdown=()=>{this.setState({dropdownOpen:!this.state.dropdownOpen}),console.log(this.state.dropdownOpen)},this.linkOnClick=()=>{document.documentElement.classList.remove("nav-open")},this.activeRoute.bind(this),this.state={dropdownOpen:!1},this.toggleDropdown=this.toggleDropdown.bind(this)}activeRoute(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(f=new m.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&f.destroy()}render(){const{bgColor:e,routes:t,rtlActive:a,logo:r}=this.props;let l=null,o=null;return void 0!==r&&(void 0!==r.outterLink?(l=n.a.createElement("a",{href:r.outterLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:r.imgSrc,alt:"react-logo"}))),o=n.a.createElement("a",{href:r.outterLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},r.text)):(l=n.a.createElement(c.b,{to:r.innerLink,className:"simple-text logo-mini",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:r.imgSrc,alt:"react-logo"}))),o=n.a.createElement(c.b,{to:r.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},r.text))),n.a.createElement("div",{className:"sidebar",data:e},n.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==l||null!==o?n.a.createElement("div",{className:"logo"},l,o):null,n.a.createElement(k.a,null,n.a.createElement("li",{className:"text-center",key:"dd"},n.a.createElement(y.a,{className:"btn-group",isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},n.a.createElement(N.a,{caret:!0,className:"btn-warning"},n.a.createElement(C.a,null,n.a.createElement("span",{className:"mr-2"},"Region:")," ",n.a.createElement("span",null,this.props.location.pathname.includes("tr")?"\ud83c\uddf9\ud83c\uddf7 TR":" \ud83c\uddf5\ud83c\uddf1  EU"))),n.a.createElement(S.a,null,n.a.createElement(c.b,{to:"/tables/classic"},n.a.createElement(x.a,{tag:"a"},"Europe")," "),"//         ",n.a.createElement(c.b,{to:"/tables/classic-tr"},"//          ",n.a.createElement(x.a,{tag:"a"},"Turkey"),"//         ")))),t.map((e,t)=>e.redirect||e.server.includes("-tr")&&!this.props.location.pathname.includes("-tr")||!e.server.includes("-tr")&&this.props.location.pathname.includes("-tr")||e.redirect?null:n.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?" active-pro":""),key:t},n.a.createElement(c.c,{to:e.pathStripped+e.server,className:"nav-link",activeClassName:"active",onClick:this.props.toggleSidebar},n.a.createElement("i",{className:e.icon}),n.a.createElement("p",null,a?e.rtlName:e.name))))),n.a.createElement("iframe",{className:"mt-4",src:"https://discord.com/widget?id=744104994340601927&theme=light",width:"100%",height:"350",allowtransparency:"true",frameBorder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"})))}}O.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var j=O,B=(a(128),a(233)),D=a(24),R=a(14),T=a.n(R),P=a(234),L=a(235),U=a(236),W=a(237),F=a(89),H=a(238);var z=e=>{const[t,a]=Object(r.useState)(null),[l,o]=Object(r.useState)(null),[s,c]=Object(r.useState)("all"),i=Object(r.useRef)(null),[m,d]=Object(r.useState)(null);return Object(r.useEffect)(()=>{const t="https://host.jakjus.com/playersProjAll?server="+e.server+"&auth="+e.auth;fetch(t).then(e=>e.json()).then(e=>{a(e[0].name),o(e[0].history)}).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{let e=i.current.getContext("2d").createLinearGradient(0,230,0,50);if(e.addColorStop(1,"rgba(29,140,248,0.2)"),e.addColorStop(.4,"rgba(29,140,248,0.0)"),e.addColorStop(0,"rgba(29,140,248,0)"),i&&i.current){let t=D.chartExample1;t.data.datasets[0].backgroundColor=e;const a=new T.a(i.current,t);d(a)}},[]),Object(r.useEffect)(()=>{if(m&&l&&l.length>0){if("week"===s){let e=new Date;m.data.datasets[0].data=l.filter(t=>new Date(t.date).getTime()>e.getTime()-6048e5).map(e=>({t:e.date,y:e.elo}))}else if("month"===s){let e=new Date;m.data.datasets[0].data=l.filter(t=>new Date(t.date).getTime()>e.getTime()-2592e6).map(e=>({t:e.date,y:e.elo}))}else if("all"===s){new Date;m.data.datasets[0].data=l.map(e=>({t:e.date,y:e.elo}))}m.update()}},[l,s]),n.a.createElement(C.a,null,n.a.createElement(B.a,{xs:"12"},n.a.createElement(P.a,{className:"card-chart"},n.a.createElement(L.a,null,n.a.createElement(C.a,null,n.a.createElement(B.a,{className:"text-left",sm:"6"},n.a.createElement("h5",{className:"card-category"},"Rank history - ",e.server),n.a.createElement(U.a,{tag:"h2"},n.a.createElement("i",{className:"tim-icons icon-chart-bar-32 text-info"})," ",t)),n.a.createElement(B.a,{sm:"6"},n.a.createElement(W.a,{className:"btn-group-toggle float-right","data-toggle":"buttons"},n.a.createElement(F.a,{tag:"label",className:p()("btn-simple",{active:"week"===s}),color:"info",id:"0",size:"sm",onClick:()=>c("week")},n.a.createElement("input",{defaultChecked:!0,className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"Week"),n.a.createElement("span",{className:"d-block d-sm-none"},"W")),n.a.createElement(F.a,{color:"info",id:"1",size:"sm",tag:"label",className:p()("btn-simple",{active:"month"===s}),onClick:()=>c("month")},n.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"Month"),n.a.createElement("span",{className:"d-block d-sm-none"},"M")),n.a.createElement(F.a,{color:"info",id:"2",size:"sm",tag:"label",className:p()("btn-simple",{active:"all"===s}),onClick:()=>c("all")},n.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),n.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"All Time"),n.a.createElement("span",{className:"d-block d-sm-none"},"A")))))),n.a.createElement(H.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement("canvas",{ref:i}))))))},Q=a(239);var I=e=>{const t=[11707539,null,"Bronze"],a=[13619151,null,"Silver"],l=[15129224,null,"Gold"],o=[12319482,null,"Diamond"],s=[16573439,"bold","Master"];let c=1130,i=1310,m=1440,d=1550;const[p,u]=Object(r.useState)(null),h=Object(r.useRef)(null),[E,b]=Object(r.useState)(null);return Object(r.useEffect)(()=>{const t="https://host.jakjus.com/players?server="+e.server+"&auth="+e.auth;fetch(t).then(e=>e.json()).then(e=>{u(e[0])}).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{if(h&&h.current){let e=D.chartDoughnut;const t=new T.a(h.current,e);b(t)}},[]),Object(r.useEffect)(()=>{E&&(E.data.datasets[0].data=[p.wins,p.losses],E.update())},[p]),n.a.createElement(P.a,{className:"card-chart"},n.a.createElement(L.a,null,n.a.createElement(C.a,null,n.a.createElement(B.a,{className:"text-left"},n.a.createElement("h5",{className:"card-category"},"Summary - ",e.server),n.a.createElement(U.a,{tag:"h2"},n.a.createElement("i",{className:"tim-icons icon-single-02 text-info"})," ",p&&p.name," ",n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"secondary"},p&&p.elo),n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"default"},p&&(g=p.elo,g<c?t:g<i?a:g<m?l:g<d?o:s)[2]))))),n.a.createElement(H.a,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement("canvas",{ref:h}))));var g},G=a(240);var V=e=>{const[t,a]=Object(r.useState)(null);return Object(r.useEffect)(()=>{let t=e.auth||"";const r="https://host.jakjus.com/matches?server="+e.servername+"&auth="+t+"&n=5";fetch(r).then(e=>e.json()).then(e=>a(e)).catch(e=>console.log("Error: ",e))},[e]),t?n.a.createElement(P.a,null,n.a.createElement(L.a,null,n.a.createElement(U.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-bullet-list-67 text-info"})," Latest Matches")),n.a.createElement(H.a,null,n.a.createElement(G.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Winner"),n.a.createElement("th",null,"Loser"),n.a.createElement("th",null,"Date"))),n.a.createElement("tbody",null,t.map(t=>n.a.createElement("tr",{key:t.date},n.a.createElement("td",null,t.winners.map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"secondary"},!t.placement&&t.elo||t.placement&&"--")))),n.a.createElement("td",null,t.losers.map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"secondary"},!t.placement&&t.elo||t.placement&&"--")))),n.a.createElement("td",null,n.a.createElement("small",null,new Date(t.date).toLocaleString())))))))):n.a.createElement(U.a,{tag:"h4"}," Loading...")},J=a(241),q=a(242);class X extends r.Component{constructor(e){super(e),this.fetchData=e=>{const t="https://host.jakjus.com/search?server="+this.props.server+"&name="+e+"&n=5";fetch(t).then(e=>e.json()).then(e=>{this.setState({data:e})}).catch(e=>console.log("Error: ",e))},this.state={data:""},this.fetchData=this.fetchData.bind(this)}componentDidUpdate(e){this.props.query!==e.query&&this.fetchData(this.props.query)}render(){const e=this.state.data,t=[];for(let a of e)t.push(n.a.createElement(c.b,{key:this.props.server+a.auth,to:"/ranks/".concat(this.props.server,"/").concat(a.auth),onClick:e=>this.props.callback(e)},n.a.createElement(J.a,{className:"list-group-item-action",key:a.name},a.name," ",n.a.createElement("small",null,"(",a.elo,")"))));return this.props.dActive?n.a.createElement(q.a,{flush:!0},t):n.a.createElement(n.a.Fragment,null)}}var Z=X,K=a(243),Y=a(244),_=a(94);class $ extends r.Component{constructor(e){super(e),this.onFocus=()=>{""!==this.state.query&&this.setState({dActive:!0})},this.callback=e=>{this.setState({dActive:!1})},this.state={active:"is-active",query:"",dActive:!1},this.handleChange=this.handleChange.bind(this),this.onFocus=this.onFocus.bind(this)}handleChange(e){this.setState({[e.target.name]:e.target.value}),""!==e.target.value?this.setState({dActive:!0}):this.setState({dActive:!1})}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P.a,null,n.a.createElement(H.a,null,n.a.createElement(K.a,null,n.a.createElement(Y.a,{addonType:"prepend"},n.a.createElement(_.a,null,n.a.createElement("i",{className:"tim-icons icon-zoom-split"}))),n.a.createElement(g.a,{onFocus:this.onFocus,autoComplete:"off",name:"query",type:"text",value:this.state.query,onChange:this.handleChange,placeholder:"Enter nickname"}))),n.a.createElement(Z,{callback:e=>this.callback(e),query:this.state.query,dActive:this.state.dActive,server:this.props.server})))}}var ee=$;class te extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(C.a,null,n.a.createElement(B.a,{md:"12"},n.a.createElement(ee,{server:this.props.match.params.server}))),n.a.createElement(C.a,null,n.a.createElement(B.a,{md:"6"},n.a.createElement(I,{server:this.props.match.params.server,auth:this.props.match.params.auth})),n.a.createElement(B.a,{md:"6"},n.a.createElement(V,{servername:this.props.match.params.server,auth:this.props.match.params.auth}))),n.a.createElement(z,{server:this.props.match.params.server,auth:this.props.match.params.auth})))}}var ae=te;var re=e=>{const[t,a]=Object(r.useState)(null),l=[11707539,null,"Bronze"],o=[13619151,null,"Silver"],s=[15129224,null,"Gold"],i=[12319482,null,"Diamond"],m=[16573439,"bold","Master"];let d=1130,p=1310,u=1440,h=1550;return Object(r.useEffect)(()=>{const t="https://host.jakjus.com/allplayers?server="+e.servername+"&n=30";fetch(t).then(e=>e.json()).then(e=>(e.forEach((e,t)=>e.id=t+1),e.forEach((e,t)=>{var a;e.league=(a=e.elo,a<d?l:a<p?o:a<u?s:a<h?i:m)[2]}),e)).then(e=>a(e)).catch(e=>console.log("Error: ",e))},[e]),null==t?n.a.createElement(U.a,{tag:"h4"}," Loading..."):n.a.createElement(P.a,null,n.a.createElement(L.a,null,n.a.createElement(U.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-trophy text-info"})," ","Standings")),n.a.createElement(H.a,null,n.a.createElement(G.a,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Place"),n.a.createElement("th",null,"Nickname"),n.a.createElement("th",null,"Elo points"),n.a.createElement("th",null,"Rank"))),n.a.createElement("tbody",null,t.map(t=>n.a.createElement("tr",null,n.a.createElement("td",null,"#",t.id),n.a.createElement("td",null,n.a.createElement(c.b,{className:"d-block",to:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name)),n.a.createElement("td",null,t.elo),n.a.createElement("td",null,t.league)))))))};var ne=e=>{const[t,a]=Object(r.useState)(null);let l;return l=e.server_instance?"&server_instance="+e.server_instance:"",Object(r.useEffect)(()=>{const t="https://host.jakjus.com/readStatus?server="+e.servername+l;fetch(t).then(e=>e.json()).then(e=>a(e[0])).catch(e=>console.log("Error: ",e))},[e]),Object(r.useEffect)(()=>{const t=setInterval(()=>{const t="https://host.jakjus.com/readStatus?server="+e.servername+l;fetch(t).then(e=>e.json()).then(e=>a(e[0])).catch(e=>console.log("Error: ",e))},7e3);return()=>clearInterval(t)},[e]),t?n.a.createElement(P.a,null,n.a.createElement(L.a,null,n.a.createElement(U.a,{tag:"h4"},n.a.createElement("i",{className:"mr-2 tim-icons icon-planet text-info"})," Server Status")),n.a.createElement(H.a,null,n.a.createElement("h6",{className:"mb-3"},t.roomName),n.a.createElement(H.a,{className:"border"},n.a.createElement(C.a,null,n.a.createElement(B.a,null,"Red",t.players&&t.players.filter(e=>1==e.team).map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"secondary"},!t.placement&&t.elo||t.placement&&"--")))),n.a.createElement(B.a,null,"Spec",t.players&&t.players.filter(e=>0==e.team).map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"secondary"},!t.placement&&t.elo||t.placement&&"--")))),n.a.createElement(B.a,null,"Blue",t.players&&t.players.filter(e=>2==e.team).map(t=>n.a.createElement(c.b,{className:"d-block",to:t.placement?void 0:"/ranks/".concat(e.servername,"/").concat(t.auth)},t.name," ",n.a.createElement(Q.a,{style:{verticalAlign:"middle"},color:"secondary"},!t.placement&&t.elo||t.placement&&"--")))))),n.a.createElement("h6",{className:"mt-4 text-muted"},t.players?t.players.length:0,"/",t.maxPlayers," ","players online"),n.a.createElement("a",{key:t.link,className:"btn mt-3 btn-block",href:t.link,target:"_blank"},n.a.createElement("i",{className:"tim-icons icon-controller mr-2"}),"Join server"))):n.a.createElement(U.a,{tag:"h4"}," Loading...")};class le extends n.a.Component{render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(C.a,null,n.a.createElement(B.a,{md:"7"},n.a.createElement(ee,{server:this.props.match.params.server}),n.a.createElement(ne,{servername:this.props.match.params.server}),n.a.createElement(V,{servername:this.props.match.params.server})),n.a.createElement(B.a,{md:"5"},n.a.createElement(re,{servername:this.props.match.params.server})))))}}var oe=le,se=a(95);const ce=Object(se.a)("pk_live_51HFxnOHmV2D708We1FkfH067SuU4FEOTfw2QyC7kcw03MFUbHcLvSlElIZZPSPuWn8QKdZuaaH9rWHHmf5luGOUy00IhvezZyE"),ie=e=>{const t=async e=>{const t=await ce,a=await fetch("https://host.jakjus.com/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await a.json(),l=await t.redirectToCheckout({sessionId:r.id});if(l.error)return n.a.createElement("section",{className:"section"},n.a.createElement("h2",null,"Shop"),n.a.createElement("div",{className:"card"},n.a.createElement("p",null,"$",l.error.message)))};return n.a.createElement("div",{className:"content"},n.a.createElement(P.a,null,n.a.createElement(L.a,null,n.a.createElement(C.a,null,n.a.createElement(B.a,{className:"text-left"},n.a.createElement("h3",{className:"card-category"},"Buy coins"),n.a.createElement(U.a,{tag:"h2"},"Store")))),n.a.createElement(H.a,null,n.a.createElement("p",{className:"h4"},"Welcome to the ",n.a.createElement("b",null,"store"),"!"),n.a.createElement("ul",null,n.a.createElement("li",null,"Coins will be signed to your haxball account."),n.a.createElement("li",null,"After purchase, ",n.a.createElement("b",null,"code")," will be sent on your e-mail address automatically."),n.a.createElement("li",null,'Activate it on server by typing "!code code_from_email" in chat.')),n.a.createElement(P.a,null,n.a.createElement(C.a,null,n.a.createElement(B.a,null,n.a.createElement(F.a,{key:"coins16000",role:"link",className:"btn-block",onClick:()=>t({itemname:"coins16000",currency:"eur"})},"Buy ",n.a.createElement("i",{className:"tim-icons icon-coins"})," 16000 coins (2.39EUR)")),n.a.createElement(B.a,null,n.a.createElement(F.a,{key:"coins16000",role:"link",className:"btn-block",onClick:()=>t({itemname:"coins16000",currency:"pln"})},"Buy ",n.a.createElement("i",{className:"tim-icons icon-coins"})," 16000 coins (9.99PLN)"))),n.a.createElement(C.a,null,n.a.createElement(B.a,null,n.a.createElement(F.a,{key:"coins80000",role:"link",className:"btn-block",onClick:()=>t({itemname:"coins80000",currency:"eur"})},"Buy ",n.a.createElement("i",{className:"tim-icons icon-coins"})," 80000 coins (7.99EUR)")),n.a.createElement(B.a,null,n.a.createElement(F.a,{key:"coins80000",role:"link",className:"btn-block",onClick:()=>t({itemname:"coins80000",currency:"pln"})},"Buy ",n.a.createElement("i",{className:"tim-icons icon-coins"})," 80000 coins (39.99PLN)")))),n.a.createElement("p",{className:"text-info"},"Any problems? Contact: jakub@jakjus.com"),n.a.createElement("p",{className:"text-danger"},n.a.createElement("b",null,"Never")," give your code to any other person. Admin will never ask you for your code."))))};var me,de=[{path:"/shop/success",pathStripped:"/shop/success",redirect:1,server:"",name:"Success!",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-money-coins",component:e=>n.a.createElement("div",{className:"content"},n.a.createElement(P.a,null,n.a.createElement(L.a,null,n.a.createElement(C.a,null,n.a.createElement(B.a,{className:"text-left"},n.a.createElement("h3",{className:"card-category"},"Buy coins"),n.a.createElement(U.a,{tag:"h2"},"Store")))),n.a.createElement(H.a,null,n.a.createElement("p",{className:"h4"},"Welcome to the ",n.a.createElement("b",null,"store"),"!"),n.a.createElement("p",{className:"text-primary"},"Your purchase is successfully completed! Check your email for the code (also spam folder).")))),layout:"/admin"},{path:"/shop",pathStripped:"/shop",server:"",name:"BUY COINS",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-money-coins",component:ie,layout:"/admin"},{path:"/shop-tr",pathStripped:"/shop",server:"-tr",name:"BUY COINS",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-money-coins",component:ie,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/classic",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/power3",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/power4",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/waterpolo",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/kafatopu2",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/futsal4",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/volley3",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/classic-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/power3-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/power4-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/waterpolo-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/war-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/ranks/:server/:auth",redirect:1,pathStripped:"/ranks",server:"/magic-tr",name:"Profile Details",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons ",component:ae,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/classic",name:"1v1 Classic EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/power3",name:"3v3 Power EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/waterpolo",name:"4v4 Waterpolo EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/futsal4",name:"4v4 Futsal EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/kafatopu2",name:"2v2 Kafa Topu EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/volley3",name:"3v3 Volley EU",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/classic-tr",name:"1v1 Classic TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/power3-tr",name:"3v3 Power TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/power4-tr",name:"4v4 Power TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/waterpolo-tr",name:"4v4 Waterpolo TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/war-tr",name:"8v8 War TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"},{path:"/tables/:server",pathStripped:"/tables",server:"/magic-tr",name:"5v5 Superhero TR",rtlName:"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062c\u062f\u0648\u0644",icon:"tim-icons icon-chart-pie-36",component:oe,layout:"/admin"}],pe=a(96),ue=a.n(pe);class he extends n.a.Component{constructor(e){super(e),this.toggleSidebar=()=>{document.documentElement.classList.toggle("nav-open"),this.setState({sidebarOpened:!this.state.sidebarOpened})},this.getRoutes=e=>e.map((e,t)=>"/admin"===e.layout?n.a.createElement(i.b,{path:e.path,component:e.component,key:t}):null),this.handleBgClick=e=>{this.setState({backgroundColor:e})},this.getBrandText=e=>{for(let t=0;t<de.length;t++)if(this.props.location.pathname.includes(de[t].pathStripped+de[t].server)&&!this.props.location.pathname.includes(de[t].pathStripped+de[t].server+"-"))return de[t].name;return""},this.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")}}componentDidMount(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),me=new m.a(this.refs.mainPanel,{suppressScrollX:!0});let e=document.querySelectorAll(".table-responsive");for(let t=0;t<e.length;t++)me=new m.a(e[t])}}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(me.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}componentDidUpdate(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1){let e=document.querySelectorAll(".table-responsive");for(let t=0;t<e.length;t++)me=new m.a(e[t])}document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(j,Object.assign({},this.props,{routes:de,bgColor:this.state.backgroundColor,logo:{outterLink:"#",text:"hb.jakjus.com",imgSrc:ue.a},toggleSidebar:this.toggleSidebar})),n.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},n.a.createElement(w,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),n.a.createElement(i.d,null,this.getRoutes(de),n.a.createElement(i.a,{from:"/",to:"/tables/classic"}),n.a.createElement(i.a,{from:"/#/tr",to:"/tables/classic-tr"})),n.a.createElement(A,{fluid:!0}))))}}var Ee=he;a(221),a(222),a(223);Object(s.a)();document.body.classList.add("white-content"),o.a.render(n.a.createElement(c.a,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/",render:e=>n.a.createElement(Ee,e)}))),document.getElementById("root"))},24:function(e,t){e.exports={chartExample1:{type:"line",data:{datasets:[{label:"ELO Points",fill:!0,borderColor:"#1f8ef1",borderWidth:2,cubicInterpolationMode:"default",borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:0}]},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:1150,suggestedMax:1250,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{type:"time",barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}},chartExample2:{data:e=>{let t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(29,140,248,0.2)"),t.addColorStop(.4,"rgba(29,140,248,0.0)"),t.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"Data",fill:!0,backgroundColor:t,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,100,70,80,120,80]}]}}},chartExample3:{data:e=>{let t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(72,72,176,0.1)"),t.addColorStop(.4,"rgba(72,72,176,0.0)"),t.addColorStop(0,"rgba(119,52,169,0)"),{labels:["USA","GER","AUS","UK","RO","BR"],datasets:[{label:"Countries",fill:!0,backgroundColor:t,hoverBackgroundColor:t,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,data:[53,20,10,80,100,45]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartExample4:{data:e=>{let t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(66,134,121,0.15)"),t.addColorStop(.4,"rgba(66,134,121,0.0)"),t.addColorStop(0,"rgba(66,134,121,0)"),{labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:t,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}},chartDoughnut:{type:"doughnut",data:{labels:["Wins","Losses"],datasets:[{label:"Win/Lose Ratio",fill:!0,backgroundColor:["#67aceb","#eba7a7"],borderColor:"#1f8ef1",borderWidth:2,cubicInterpolationMode:"default",borderDash:[],borderDashOffset:0}]},options:{maintainAspectRatio:!1,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,position:"nearest"},responsive:!0}}}},96:function(e,t){e.exports="data:image/png;base64,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"},97:function(e,t,a){e.exports=a(224)}},[[97,1,2]]]);
//# sourceMappingURL=main.e89260b1.chunk.js.map