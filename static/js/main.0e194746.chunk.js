(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(8),a=n.n(r),s=n(2),d=n(9),i=n(19),l=function e(t){Object(d.a)(this,e),this.id=Object(i.a)(),this.description=t,this.done=!1},j=n(3),u=n(10),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(u.a)(e),[t.payload]);case"remove":return e.filter((function(e){return e.id!==t.payload}));case"done":return e.map((function(e){return e.id===t.payload?Object(j.a)(Object(j.a)({},e),{},{done:!e.done}):e}));default:return e}},b=n(6),O=n(0),m=function(e){var t=e.handleAdd,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(s.a)(t,2),o=n[0],r=n[1];return[o,function(e){var t=e.target;r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(b.a)({},t.name,t.value))}))},function(){r(e)}]}({description:""}),o=Object(s.a)(n,3),r=o[0].description,a=o[1],d=o[2],i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(s.a)(t,2),o=n[0],r=n[1];return[o,function(){r((function(e){return!e}))}]}(!1),l=Object(s.a)(i,2),u=l[0],h=l[1];return Object(O.jsxs)(O.Fragment,{children:[u&&Object(O.jsx)("div",{className:"error",children:Object(O.jsx)("h4",{children:"The field is required"})}),Object(O.jsx)("div",{className:"card-header",children:Object(O.jsx)("h4",{children:"Add a todo"})}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),r.trim().length<=1?u||h():(u&&h(),t(r),d())},children:[Object(O.jsxs)("div",{className:"campo",children:[Object(O.jsx)("label",{htmlFor:"nombre",children:"Todo description:"}),Object(O.jsx)("input",{type:"text",name:"description",className:"entrada",placeholder:"Description...",autoComplete:"off",value:r,onChange:a})]}),Object(O.jsx)("input",{type:"submit",value:"Save",className:"button"})]})})]})},p=function(e){var t=e.todo,n=e.handleRemove,c=e.handleDone,o=t.id,r=t.description,a=t.done;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"card-body ".concat(a&&"done-body cross cross1"),children:[Object(O.jsxs)("p",{className:"".concat(a&&"done"),children:["id: ",o]}),Object(O.jsxs)("p",{className:"".concat(a&&"done"),children:["Description: ",r]}),Object(O.jsxs)("div",{className:"flex-buttons",children:[Object(O.jsx)("a",{href:"/#",className:"button delete ".concat(a&&"delete-done-button"),onClick:function(){n(o)},children:Object(O.jsx)("span",{children:Object(O.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})}),Object(O.jsx)("a",{className:"button update ".concat(a&&"done-button"),href:"/#",onClick:function(){c(o)},children:Object(O.jsx)("span",{children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(O.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})})]})]})})},x=function(e){var t=e.todos,n=e.handleRemove,c=e.handleDone;return Object(O.jsx)(O.Fragment,{children:0===t.length?Object(O.jsx)("h2",{children:"There aren't elements"}):t.map((function(e){return Object(O.jsx)(p,{todo:e,handleRemove:n,handleDone:c},e.id)}))})},f=function(){return JSON.parse(localStorage.getItem("todo"))||[]},v=function(){var e=Object(c.useReducer)(h,[],f),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){localStorage.setItem("todo",JSON.stringify(n))}),[n]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{className:"text-center",children:["Todos (",n.length,")"]}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"flex-container",children:[Object(O.jsx)("div",{className:"formulario",children:Object(O.jsx)(m,{handleAdd:function(e){o({type:"add",payload:new l(e)})}})}),Object(O.jsx)("div",{className:"todos",children:Object(O.jsx)(x,{todos:n,handleRemove:function(e){o({type:"remove",payload:e})},handleDone:function(e){o({type:"done",payload:e})}})})]})})]})};n(16);a.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0e194746.chunk.js.map