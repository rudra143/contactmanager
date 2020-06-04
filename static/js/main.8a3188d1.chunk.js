(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{30:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),o=t.n(c),l=t(14),i=t(2),s=t(7),m=t(13),u=t(27),p=t(29),d=t(8),h={contact:{},contacts:[{id:"1",name:"Maharudra Kekan",email:"mkekan@gmail.com",phone:"222-222-2222"},{id:"2",name:"Kushal Bhosale",email:"kbhosale@gmail.com",phone:"111-111-1111"},{id:"3",name:"Sachin Pawar",email:"spawar@gmail.com",phone:"444-444-4444"}]},E=Object(m.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_CONTACTS":return Object(d.a)({},e);case"DELETE_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:[a.payload].concat(Object(p.a)(e.contacts))});case"GET_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contact:e.contacts.filter((function(e){return e.id===a.payload}))});case"UPDATE_CONTACT":return Object(d.a)(Object(d.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}}}),b=[u.a],v=Object(m.e)(E,{},Object(m.d)(m.a.apply(void 0,b),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),f=t(9),C=t(10),g=t(12),N=t(11),O=function(e){Object(g.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(a){e.props.deleteContact(a)},e}return Object(C.a)(t,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,i=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{style:{cursor:"pointer"},onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down"}),r.a.createElement("i",{onClick:this.onDeleteClick.bind(this,t),className:"fa fa-times",style:{color:"red",cursor:"pointer",float:"right"}}),r.a.createElement(l.b,{to:"/contact/edit/".concat(t)},r.a.createElement("i",{className:"fa fa-pencil-alt",style:{cursor:"pointer",color:"black",marginRight:"1rem",float:"right"}}))),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Phone : ",o),r.a.createElement("li",{className:"list-group-item"},"Email : ",c)):null)}}]),t}(n.Component),y=Object(s.b)(null,{deleteContact:function(e){return{type:"DELETE_CONTACT",payload:e}}})(O),j=function(e){Object(g.a)(t,e);var a=Object(N.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"mb-5"},"Contact List"),e.map((function(e){return r.a.createElement(y,{key:e.id,contact:e})})))}}]),t}(n.Component),T=Object(s.b)((function(e){return{contacts:e.contact.contacts}}),{getContacts:function(){return{type:"GET_CONTACTS"}}})(j),k=t(16),S=t(28),A=t.n(S),w=function(e){var a=e.name,t=e.label,n=e.placeholder,c=e.type,o=e.onChange,l=e.value,i=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{onChange:o,type:c,name:a,className:A()("form-control",{"is-invalid":i}),placeholder:n,value:l}),i&&r.a.createElement("div",{className:"invalid-feedback"},i))};w.defaultProps={type:"text"};var _=w,D=t(43),P=function(e){Object(g.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(a){return e.setState(Object(k.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t=e.state,n=t.name,r=t.email,c=t.phone,o={id:Object(D.a)(),name:n,email:r,phone:c};""!==n?""!==r?""!==c?(e.props.addContact(o),e.setState({name:"",email:"",phone:"",errors:""}),e.props.history.push("/")):e.setState({errors:{phone:"Phone is Required"}}):e.setState({errors:{email:"Email is Required"}}):e.setState({errors:{name:"Name is Required"}})},e}return Object(C.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(_,{name:"name",label:"Name",placeholder:"Enter Name...",onChange:this.onChange,value:a,error:c.name}),r.a.createElement(_,{name:"email",label:"Email",type:"email",placeholder:"Enter Email...",onChange:this.onChange,value:t,error:c.email}),r.a.createElement(_,{name:"phone",label:"Phone",placeholder:"Enter Phone...",onChange:this.onChange,value:n,error:c.phone}),r.a.createElement("button",{className:"btn btn-outline-success btn-block"},"Add Contact"))))}}]),t}(n.Component),R=Object(s.b)(null,{addContact:function(e){return{type:"ADD_CONTACT",payload:e}}})(P),x=function(e){Object(g.a)(t,e);var a=Object(N.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={id:"",name:"",email:"",phone:"",errors:{}},e.onChange=function(a){return e.setState(Object(k.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault();var t=e.state,n=t.name,r=t.email,c=t.phone;if(""!==n)if(""!==r)if(""!==c){var o={id:e.props.match.params.id,name:n,email:r,phone:c};e.props.updateContact(o),e.setState({id:"",name:"",email:"",phone:"",errors:""}),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is Required"}});else e.setState({errors:{email:"Email is Required"}});else e.setState({errors:{name:"Name is Required"}})},e}return Object(C.a)(t,[{key:"componentWillReceiveProps",value:function(e,a){var t=e.contact[0],n=t.id,r=t.name,c=t.email,o=t.phone;this.setState({id:n,name:r,email:c,phone:o})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Update Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(_,{name:"name",label:"Name",placeholder:"Enter Name...",onChange:this.onChange,value:a,error:c.name}),r.a.createElement(_,{name:"email",label:"Email",type:"email",placeholder:"Enter Email...",onChange:this.onChange,value:t,error:c.email}),r.a.createElement(_,{name:"phone",label:"Phone",placeholder:"Enter Phone...",onChange:this.onChange,value:n,error:c.phone}),r.a.createElement("button",{className:"btn btn-outline-success btn-block"},"Update Contact"))))}}]),t}(n.Component),q=Object(s.b)((function(e){return{contact:e.contact.contact}}),{getContact:function(e){return{type:"GET_CONTACT",payload:e}},updateContact:function(e){return{type:"UPDATE_CONTACT",payload:e}}})(x),I=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fa fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fa fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fa fa-question"})," About"))))))};I.defaultProps={branding:"My App"};var M=I,U=function(){return r.a.createElement("div",{className:"display-4"},r.a.createElement("h1",null,"About Page"))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))};t(40);var G=function(){return r.a.createElement(s.a,{store:v},r.a.createElement(l.a,{basename:"/contactmanager"},r.a.createElement("div",{className:"App"},r.a.createElement(M,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:T}),r.a.createElement(i.a,{exact:!0,path:"/contact/add",component:R}),r.a.createElement(i.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(i.a,{exact:!0,path:"/about",component:U}),r.a.createElement(i.a,{component:L}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.8a3188d1.chunk.js.map