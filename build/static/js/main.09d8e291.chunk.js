(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(16),i=n.n(s),c=(n(90),n(18)),r=n(19),l=n(21),u=n(20),p=n(22),d=(n(91),n(48)),m=n.n(d),h=n(81),f=n(15),b=n.n(f),g=(n(102),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=function(){var t=Object(h.a)(m.a.mark(function t(n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"1"!==n){t.next=12;break}return t.next=4,e.props.questions[0].qtitle;case 4:return t.t0=t.sent,t.next=7,e.props.questions[0].qbody;case 7:t.t1=t.sent,document.getElementById("qsn").innerHTML=t.t0+t.t1,e.props.setQid(e.props.questions[0].qid),t.next=32;break;case 12:if("2"!==n){t.next=23;break}return t.next=15,e.props.questions[1].qtitle;case 15:return t.t2=t.sent,t.next=18,e.props.questions[1].qbody;case 18:t.t3=t.sent,document.getElementById("qsn").innerHTML=t.t2+t.t3,e.props.setQid(e.props.questions[1].qid),t.next=32;break;case 23:if("3"!==n){t.next=32;break}return t.next=26,e.props.questions[2].qtitle;case 26:return t.t4=t.sent,t.next=29,e.props.questions[2].qbody;case 29:t.t5=t.sent,document.getElementById("qsn").innerHTML=t.t4+t.t5,e.props.setQid(e.props.questions[2].qid);case 32:t.next=38;break;case 34:t.prev=34,t.t6=t.catch(0),console.log(t.t6.message),document.getElementById("qsn").innerHTML="Dev Error : "+JSON.stringify(t.t6.message);case 38:case"end":return t.stop()}},t,this,[[0,34]])}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(b.a,{defaultExpanded:!1,onSelect:t,width:50},o.a.createElement(b.a.Toggle,null),o.a.createElement(b.a.Nav,{defaultSelected:"home",disabled:!1},o.a.createElement(f.NavItem,{eventKey:"1"},o.a.createElement(f.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),o.a.createElement(f.NavText,null,"Question 1")),o.a.createElement(f.NavItem,{eventKey:"2"},o.a.createElement(f.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-line-chart",style:{fontSize:"1.75em"}})),o.a.createElement(f.NavText,null,"Question 2")),o.a.createElement(f.NavItem,{eventKey:"3"},o.a.createElement(f.NavIcon,null,o.a.createElement("i",{className:"fa fa-fw fa-line-chart",style:{fontSize:"1.75em"}})),o.a.createElement(f.NavText,null,"Question 3"))))}}]),t}(o.a.Component)),E=n(82),v=(n(105),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"button"},o.a.createElement(E.AwesomeButton,{type:"primary",action:function(){e.props.submit(),document.getElementById("buttonResponse").setAttribute("hidden",!1)}},this.props.text),o.a.createElement("p",{hidden:!0,id:"buttonResponse"}," Helloooo "))}}]),t}(a.Component)),q=n(83),y=n.n(q),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={questions:"null",ans:"",qid:-1},e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement("div",{className:"App",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},o.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},o.a.createElement("div",{className:"sidebar"},o.a.createElement(g,{questions:this.props.questions,setQid:function(e){t.setState({qid:e})}})),o.a.createElement("div",{id:"qanda"},o.a.createElement("div",{className:"question",id:"qsn"},o.a.createElement("h3",null,"Select a Question...")),o.a.createElement("div",{className:"answer",id:"ans"},o.a.createElement(y.a,{id:"answer",label:"Answer",multiline:!0,rows:"4",variant:"outlined",onChange:function(e){t.setState({ans:e.target.value})}}),o.a.createElement("div",{className:"submit-button",id:"submit"},o.a.createElement(v,{text:"Submit Answer",submit:function(){fetch("http://54.146.176.87/api/question/checkAnswer",{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":"true"},body:JSON.stringify({qid:t.state.qid,ans:t.state.ans})}).then(function(e){return console.log(e),e.json()}).then(function(e){return console.log(e),t.setState({questions:e.questionData}),e}).catch(function(e){console.log(e)})}})),o.a.createElement("div",{className:"logout-button",id:"logout"},o.a.createElement(v,{text:"logout",submit:function(){fetch("/api/logout",{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":"true"}}).then(function(e){return console.log(e),e.json()}).then(function(e){return console.log(e),e}).catch(function(e){console.log(e)})}})),o.a.createElement("p",{id:"userData"},JSON.stringify(this.props.userDetails)||"Fetching User Details...")))))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={questions:"Null"},fetch("https://cicada.iecsemanipal.com/lolmylifesucks/api/login",{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":"true"},body:JSON.stringify({udata:"Magician",upass:"password"})}).then(function(e){return e.json()}).then(function(e){return console.log(e),e}).catch(function(e){console.log(e)}),fetch("/api/question/getQuestions",{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http"}}).then(function(e){return console.log(e),e.json()}).then(function(t){return console.log(t),e.setState({questions:t.questionData}),t}).catch(function(e){console.log(e)}),fetch("/api/rank",{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":"true"}}).then(function(e){return console.log(e),e.json()}).then(function(t){return console.log(t),e.setState({rank:t}),t}).catch(function(e){console.log(e)}),e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(j,{questions:this.state.questions,userDetails:this.state.userDetails})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,n){e.exports=n(242)},90:function(e,t,n){},91:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.09d8e291.chunk.js.map