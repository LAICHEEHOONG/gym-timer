(this["webpackJsonpgym-timer"]=this["webpackJsonpgym-timer"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(9),r=n.n(a),i=(n(29),n(11)),l=n(12),o=n(14),j=n(13),u=n(41),d=n(42),m=n(22),b=n(43),h=(n(30),n(3)),p=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.s,n=e.setTimer;return Object(h.jsxs)(u.a,{bg:"light",expand:"lg",children:[Object(h.jsx)(u.a.Brand,{className:"navbar-brand ",href:"#",children:"Gym Timer"}),Object(h.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(h.jsx)(u.a.Collapse,{id:"navbarScroll",children:Object(h.jsxs)(d.a,{className:"d-flex",children:[Object(h.jsx)(m.a,{type:"number",placeholder:"Seconds",className:"mr-2 search-bar","aria-label":"Timer",onChange:function(e){return t=e.target.value}}),Object(h.jsx)(b.a,{variant:"outline-success",onClick:function(e){n(e,t)},children:"Set Timer"})]})})]})}}]),n}(s.Component),f=(n(35),function(e){var t=e.timer,n=t.s,s=t.ms;return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"seconds",children:n}),Object(h.jsx)("span",{className:"millisecond",children:s})]})}),O=(n(36),function(e){var t=e.timer.count;return Object(h.jsx)("div",{className:"count",children:t})}),x=function(e){var t=e.timer;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(f,{timer:t})}),Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(O,{timer:t})})]})},v=n(44),y=(n(37),function(e){var t=e.run,n=e.reset,s=e.percent,c=e.display;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"d-flex justify-content-center footer",children:[Object(h.jsx)(b.a,{className:"control-btn",variant:"success",style:{display:"".concat(c)},onClick:t,children:"START"}),Object(h.jsx)(b.a,{className:"control-btn",variant:"danger",onClick:n,children:"RESET"})]}),Object(h.jsx)(v.a,{animated:!0,now:s,label:"".concat(Math.floor(s),"%")})]})}),g=n.p+"static/media/done.33e69535.mp3",S=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={s:0,ms:0,count:0,percent:100,display:"inline-block"},e.setTimer=function(t,n){e.setState({s:Math.floor(n)}),t.preventDefault()},e.runTimer=function(){if(0!==e.state.s){e.setState({percent:100,display:"none"});var t=e.state.s,n=setInterval((function(){(e.setState({ms:e.state.ms+1}),e.state.ms>9&&(e.setState({ms:0}),e.setState({s:e.state.s-1,percent:e.state.percent-100/t})),0===e.state.s)&&(new Audio(g).play(),clearInterval(n),e.setState({s:t,count:e.state.count+1,display:"inline-block"}))}),100)}else alert("Please set timer...")},e.reset=function(){e.setState({s:0,ms:0,count:0,percent:100})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{s:this.state.s,setTimer:this.setTimer}),Object(h.jsx)(x,{timer:this.state}),Object(h.jsx)(y,{run:this.runTimer,reset:this.reset,percent:this.state.percent,display:this.state.display})]})}}]),n}(s.Component);n(38);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.774ba4a3.chunk.js.map