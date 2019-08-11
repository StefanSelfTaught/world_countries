(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=(a(31),a(6)),o=a(7),u=a(9),s=a(8),m=a(10),h=(a(32),function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Where in the world?"),l.a.createElement("p",null,l.a.createElement("i",{className:"far fa-moon"})," Dark Mode")))}),p=(a(33),a(25)),f=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"input-container"},l.a.createElement("i",{className:"fas fa-search"}),l.a.createElement("input",{onChange:this.props.searchChange,type:"text",placeholder:"Search for a country..."}),l.a.createElement(p.a,{className:"select",value:this.props.selectedOption,options:this.props.options,onChange:this.props.handleCountryChange,placeholder:"Filter by Region"}))}}]),t}(l.a.Component),E=(a(38),a(39),a(14)),d=function(e){return l.a.createElement("div",{className:"country-card"},l.a.createElement(E.b,{className:"link",to:"/countries/".concat(e.name)},l.a.createElement("img",{src:e.img,alt:"text"}),l.a.createElement("div",{className:"info"},l.a.createElement("h3",null,e.name),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Population"),": ",e.population),l.a.createElement("li",null,l.a.createElement("span",null,"Region"),": ",e.region),l.a.createElement("li",null,l.a.createElement("span",null,"Capital"),": ",e.capital)))))},g=function(e){return l.a.createElement("div",{className:"grid"},e.countries.map(function(e){var t=e.flag,a=e.name,n=e.population,r=e.region,c=e.capital;return l.a.createElement(d,{img:t,key:a,name:a,population:n,region:r,capital:c})}))},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={hasError:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.a.createElement("h2",null,"Something went wrong"):this.props.children}}]),t}(n.Component),b=(a(42),function(){return l.a.createElement("div",{class:"lds-dual-ring"})}),y=[{value:"all",label:"All Countries"},{value:"Africa",label:"Africa"},{value:"Americas",label:"America"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={countries:[],filter:"",error:null,isLoaded:!1,selectedOption:{value:"all",label:"All countries"}},a.handleChange=function(e){try{a.setState({filter:e.target.value})}catch(t){a.setState({error:!0})}},a.handleCountryChange=function(e){a.setState({selectedOption:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag").then(function(e){return e.json()}).then(function(t){return e.setState({countries:t,isLoaded:!0})}).catch(function(t){return e.setState({error:!0})})}},{key:"render",value:function(){var e,t,a=this,r=this.state,c=r.filter,i=r.error,o=r.isLoaded,u=r.selectedOption;return e=(e=this.state.countries.filter(function(t){return"all"!==u.value?t.region===u.value:e=a.state.countries})).filter(function(e){return e.name.toLowerCase().includes(c.toLowerCase())}),t=o?l.a.createElement(g,{countries:e}):l.a.createElement(b,null),i?l.a.createElement("h1",null,"Error: Something went wrong "):l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement(f,{searchChange:this.handleChange,handleCountryChange:this.handleCountryChange,selectedOption:this.state.selectedOption,options:y}),l.a.createElement(v,null,t))}}]),t}(n.Component),O=a(11),j=(a(43),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={specificCountry:[],isLoaded:!1},a.handleClick=function(){a.props.history.goBack()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;fetch("https://restcountries.eu/rest/v2/name/".concat(t.countryName,"?fullText=true")).then(function(e){return e.json()}).then(function(t){return e.setState({specificCountry:t,isLoaded:!0})})}},{key:"render",value:function(){var e,t,a,r,c,i,o,u,s,m=this.state.isLoaded;return this.state.specificCountry.map(function(n){e=n.name,s=n.flag,t=n.nativeName,a=n.population,r=n.region,c=n.subregion,i=n.capital,o=n.topLevelDomain,u=n.currencies[0].code,n.languages.map(function(e){return e.name})}),m?l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement("div",{className:"detailsContainer"},l.a.createElement("button",{className:"btn",onClick:this.handleClick},l.a.createElement("i",{className:"fas fa-arrow-left"}),"Back"),l.a.createElement("div",{className:"info-main"},l.a.createElement("img",{src:s,alt:!0}),l.a.createElement("div",{className:"info-right"},l.a.createElement("h1",null,e),l.a.createElement("ul",{className:"left"},l.a.createElement("li",null,l.a.createElement("span",null,"Native Name:")," ",t),l.a.createElement("li",null,l.a.createElement("span",null,"Population:")," ",a),l.a.createElement("li",null,l.a.createElement("span",null,"Region:")," ",r),l.a.createElement("li",null,l.a.createElement("span",null,"Sub Region:")," ",c),l.a.createElement("li",null,l.a.createElement("span",null,"Capital:")," ",i)),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement("span",null,"Top Level Domain:")," ",o),l.a.createElement("li",null,l.a.createElement("span",null,"Currencies:")," ",u),l.a.createElement("li",null,l.a.createElement("span",null,"Languages:")," ",u)))))):l.a.createElement(b,null)}}]),t}(n.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O.d,null,l.a.createElement(O.a,{exact:!0,from:"/",to:"countries"}),l.a.createElement(O.b,{exact:!0,path:"/countries",component:C}),l.a.createElement(O.b,{exact:!0,path:"/countries/:countryName",component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=l.a.createElement(E.a,null,l.a.createElement(w,null));c.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.06a5baa8.chunk.js.map