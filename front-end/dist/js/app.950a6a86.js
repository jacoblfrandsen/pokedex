(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"/ordinary.png"}})])]),t._m(0)],1),n("div",{staticClass:"content"},[n("router-view")],1),n("div",{staticClass:"footer"},[n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")]),n("p"),n("a",{attrs:{href:"https://github.com/BYUCS260/museum-jacoblfrandsen"}},[t._v("https://github.com/BYUCS260/museum-jacoblfrandsen")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v("Museum of Ordinary Objects Hello world")])])}],s=(n("034f"),n("2877")),o={},c=Object(s["a"])(o,r,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"image-gallery"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"image"},[n("h2",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.description))]),n("img",{attrs:{src:e.path}})])})),0)])},p=[],m=n("1da1"),f=(n("96cf"),n("bc3a")),v=n.n(f),h={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},g=h,_=(n("fd89"),Object(s["a"])(g,d,p,!1,null,"39548601",null)),b=_.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("h1",[t._v("The Admin Page!")]),t._m(0),n("div",{staticClass:"add"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("p"),n("input",{attrs:{type:"file",name:"photo"},on:{change:t.fileChanged}}),n("button",{on:{click:t.upload}},[t._v("Upload")])]),t.addItem?n("div",{staticClass:"upload"},[n("h2",[t._v(t._s(t.addItem.title))]),n("p",[t._v(t._s(t.addItem.description))]),n("img",{attrs:{src:t.addItem.path}})]):t._e()]),t._m(1),n("div",{staticClass:"edit"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?n("div",{staticClass:"suggestions"},t._l(t.suggestions,(function(e){return n("div",{key:e.id,staticClass:"suggestion",on:{click:function(n){return t.selectItem(e)}}},[t._v(t._s(e.title)+" - "+t._s(e.description)+" ")])})),0):t._e()]),t.findItem?n("div",{staticClass:"upload"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findItem.title,expression:"findItem.title"}],domProps:{value:t.findItem.title},on:{input:function(e){e.target.composing||t.$set(t.findItem,"title",e.target.value)}}}),n("p"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.findItem.description,expression:"findItem.description"}],domProps:{value:t.findItem.description},on:{input:function(e){e.target.composing||t.$set(t.findItem,"description",e.target.value)}}}),n("p"),n("img",{attrs:{src:t.findItem.path}}),n("p")]):t._e(),t.findItem?n("div",{staticClass:"actions"},[n("button",{on:{click:function(e){return t.deleteItem(t.findItem)}}},[t._v("Delete")]),n("button",{on:{click:function(e){return t.editItem(t.findItem)}}},[t._v("Edit")])]):t._e()])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[t._v("1")]),n("h2",[t._v("Add an Item")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"circle"},[t._v("2")]),n("h2",[t._v("Edit/Delete an Item")])])}],x=(n("4de4"),n("d3b7"),n("2ca0"),n("4e82"),n("a4d3"),n("e01a"),n("b0c0"),{name:"Admin",data:function(){return{title:"",file:null,addItem:null,items:[],findTitle:"",findItem:null,description:"",findDescription:""}},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))}},created:function(){this.getItems()},methods:{fileChanged:function(t){this.file=t.target.files[0]},editItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.put("/api/items/"+t._id,{title:e.findItem.title,description:e.findItem.description});case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},selectItem:function(t){this.findTitle="",this.findDescription="",this.findItem=t},deleteItem:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.delete("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},upload:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new FormData,n.append("photo",t.file,t.file.name),e.next=5,v.a.post("/api/photos",n);case 5:return i=e.sent,e.next=8,v.a.post("/api/items",{title:t.title,description:t.description,path:i.data.path});case 8:r=e.sent,t.addItem=r.data,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}}),C=x,y=(n("82f2"),Object(s["a"])(C,I,w,!1,null,"68498844",null)),O=y.exports;i["a"].use(l["a"]);var j=[{path:"/",name:"home",component:b},{path:"/admin",name:"admin",component:O}],k=new l["a"]({mode:"history",base:"/",routes:j}),P=k;i["a"].config.productionTip=!1,new i["a"]({router:P,render:function(t){return t(u)}}).$mount("#app")},6284:function(t,e,n){},"82f2":function(t,e,n){"use strict";n("6284")},"85ec":function(t,e,n){},daf6:function(t,e,n){},fd89:function(t,e,n){"use strict";n("daf6")}});
//# sourceMappingURL=app.950a6a86.js.map