(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/background.6e64ac66.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/logo.66e04fee.png"},27:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(2),s=a(3),o=a(5),m=a(4),p=a(6),u=a(14),h=a(10),d=a(22),b=a(13),v=a(15),E=a.n(v),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={redirectToReferrerDepto:!1,redirectToReferrerCond:!1,departamentos:["Cargando..."],departamento:"Norte de Santander",temperatura:0,precipitacion:0,elevmin:0,elevmax:0},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmitDepto=a.handleSubmitDepto.bind(Object(b.a)(a)),a.handleSubmitCond=a.handleSubmitCond.bind(Object(b.a)(a)),fetch("/departamentos").then((function(e){return e.json()})).then((function(e){a.setState({departamentos:e.map((function(e,t){return e.nombre}))})})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmitDepto",value:function(e){this.setState({redirectToReferrerDepto:!0})}},{key:"handleSubmitCond",value:function(e){this.setState({redirectToReferrerCond:!0})}},{key:"render",value:function(){return!0===this.state.redirectToReferrerDepto?r.a.createElement(h.a,{to:"/search/".concat(this.state.departamento)}):!0===this.state.redirectToReferrerCond?r.a.createElement(h.a,{to:"/search/".concat(this.state.temperatura,"/").concat(this.state.precipitacion,"/").concat(this.state.elevmin,"/").concat(this.state.elevmax)}):r.a.createElement("div",{className:"container-fluid",style:{height:"90vh",backgroundImage:"url(".concat(E.a,")"),backgroundSize:"cover"}},r.a.createElement("div",{className:"row",style:{height:"10%"},align:"center"}),r.a.createElement("div",{className:"row",style:{height:"20%"},align:"center"},r.a.createElement("div",{className:"h3",style:{color:"white",flex:1,alignItems:"center"}}," Ingresa el departamento o las condiciones de tu cultivo!")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body "},r.a.createElement("h5",{className:"card-title",align:"center"},"Departamento"),r.a.createElement("form",{onSubmit:this.handleSubmitDepto},r.a.createElement("label",{className:"d-flex align-items-center"},"Selecciona tu departamento:",r.a.createElement("select",{name:"departamento",className:"form-control ",value:this.state.departamento,onChange:this.handleChange},this.state.departamentos.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"})))))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",align:"center"},"Condiciones"),r.a.createElement("form",{onSubmit:this.handleSubmitCond},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Temperatura"),r.a.createElement("input",{name:"temperatura",type:"number",className:"form-control",value:this.state.temperatura,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Precipitacion"),r.a.createElement("input",{name:"precipitacion",type:"number",className:"form-control",value:this.state.precipitacion,onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"col-form-label"},"Elevacion Min"),r.a.createElement("input",{name:"elevmin",min:"0",type:"number",className:"form-control",value:this.state.elevmin,onChange:this.handleChange}),r.a.createElement("label",{className:"col-form-label"},"Elevacion   Max"),r.a.createElement("input",{name:"elevmax",min:"0",type:"number",className:"form-control",value:this.state.elevmax,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null))}}]),t}(r.a.Component),j=a(25),O=a.n(j),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{style:{alignItems:"center",background:"#507433"},className:"navbar navbar-expamd-md navbar-light sticky-top "},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(u.b,{to:"/Home"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("img",{src:O.a,alt:"logo",style:{width:"10%"}}),"  GROWER"))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:{height:"90vh",backgroundImage:"url(".concat(E.a,")"),backgroundSize:"cover"}},r.a.createElement("div",{className:"row",style:{height:"10%"},align:"center"}),r.a.createElement("div",{className:"row",style:{height:"20%"},align:"center"},r.a.createElement("div",{className:"h3",style:{color:"white",flex:1,alignItems:"center"}},"Lista de plantas:")))}}]),t}(r.a.Component),C=a(26),x=a.n(C),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={planta:a.props.planta},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderInformation",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,this.state.planta.sinonimos),r.a.createElement("p",null,"Tipo de planta: ",this.state.planta.habitad),r.a.createElement("p",null,"Temperatura: (",this.state.planta.temperatura.min,"-",this.state.planta.temperatura.max,")"),r.a.createElement("p",null,"Precipitacion: (",this.state.planta.presipitacion.min,"-",this.state.planta.presipitacion.max,")"),r.a.createElement("p",null,"Elevacion: (",this.state.planta.elevacion_minima,"-",this.state.planta.elevacion_maxima,")"),r.a.createElement("p",null,"Provenencia: ",this.state.planta.origen),r.a.createElement("p",null,"Estado de Conservacion: ",this.state.planta.estado_de_conservacion),r.a.createElement("p",null,"Region de Habitad: ",this.state.planta.regiones_biogeograficas),r.a.createElement("p",null,"Distribucion Global: ",this.state.planta.distribucion_global),r.a.createElement("p",null,"Departamentos donde se encuentra: ",this.state.planta.departamentos))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("image",{src:this.state.planta.img_src}),r.a.createElement("h2",null,this.state.planta.nombre),r.a.createElement(x.a,{trigger:"ver+"},this.renderInformation()))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={plantas:a.props.plantas},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.plantas.map((function(e){return r.a.createElement(k,{planta:e,id:e.id})})))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={temperatura:0,precipitacion:0,elevmin:0,elevmax:0,plantas:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.match)try{if("/search/:departamento"===this.props.match.path){fetch("/planta/departamento/"+this.props.match.params.departamento+"?num_pagina=2&cantidad=2").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({plantas:t})}))}else"/search/:temperatura/:precipitacion/:elevacionMin/:elevacionMax"===this.props.match.path&&(console.log(this.props.match),fetch("/planta/f/tpe?temp="+this.props.match.params.temperatura+"&prec="+this.props.match.params.precipitacion+"&min="+this.props.match.params.elevacionMin+"&max="+this.props.match.params.elevacionMax).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({plantas:t})})),console.log(this.state.plantas))}catch(t){alert(t)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(S,{plantas:this.state.plantas}),">")}}]),t}(r.a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:g}),r.a.createElement(h.b,{exact:!0,path:"/Home",component:g}),r.a.createElement(h.b,{exact:!0,path:"/search/:departamento",component:w}),r.a.createElement(h.b,{exact:!0,path:"/search/:temperatura/:precipitacion/:elevacionMin/:elevacionMax",component:w}))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e8d23544.chunk.js.map