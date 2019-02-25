module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=30)}([function(t,e){t.exports=require("vue")},function(t,e){t.exports=require("vuex")},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("vue-meta")},function(t,e,n){"use strict";n.r(e);var o=n(2),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(3),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(4),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(5),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(6),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(7),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(8),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(9),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function o(a,r){try{var s=e[a](r),i=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(i).then(function(t){o("next",t)},function(t){o("throw",t)});t(i)}("next")})}}const a=n(24),r=n(25),s=r.create({baseURL:"https://d.apicloud.com/mcm/api"}),i=t=>{let{status:e,data:n}=t,o=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["status","data"]);return 200===e?n:((t,e)=>{const n=new Error(e.message);return n.code=t,n})(e,o)};t.exports=((t,e)=>{const n=()=>{const n=Date.now(),o=a(`${t}UZ${e}UZ${n}`);return{"X-APICloud-AppId":t,"X-APICloud-AppKey":`${o}.${n}`}};return{getAllTodos:()=>o(function*(){return i(yield s.get("/Todo",{headers:n()}))})(),addTodo:t=>o(function*(){return i(yield s.post("/Todo",t,{headers:n()}))})(),updateTodo:(t,e)=>o(function*(){return i(yield s.put(`/Todo/${t}`,e,{headers:n()}))})(),deleteTodo:(t,e)=>o(function*(){return i(yield s.delete(`/Todo/${t}`,{headers:n()}))})(),deleteCompleted:t=>o(function*(){const e=t.map(function(t){return{method:"delete",path:`/mcm/api/Todo/${t}`}});return i(yield s.post("/batch",{requests:e},{headers:n()}))})()}})},function(t,e){t.exports=require("sha1")},function(t,e){t.exports=require("axios")},function(t,e){t.exports={db:{appId:"A6005187534951",appKey:"B26CE767-F67F-BC50-A4CB-39925D24AAC6"},cdn:{host:"http://pngpypvw2.bkt.clouddn.com/",bucket:"vue-ssr-demo",ak:"c5s3dIUTqAcd_wS-AoFrrletCMR8wxyvVS4EJvEl",sk:"p7XpPz_XvvZea6BtsLiotCu4UIq_RqKc-QDWNHEX"}}},function(t,e,n){"use strict";n.r(e);var o=n(10),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){"use strict";n.r(e);var o=n(11),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=a.a},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(12),s=n.n(r),i=n(1),d=n.n(i),l=n(13),c=n.n(l);function u(t,e,n,o,a,r,s,i){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=d):a&&(d=i?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}var f=u({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"},[this._ssrNode('<div class="dot dot1" data-v-2da79f00></div> <div class="dot dot2" data-v-2da79f00></div> <div class="dot dot3" data-v-2da79f00></div>')])},[],!1,function(t){var e=n(14);e.__inject__&&e.__inject__(t)},"2da79f00","2945ff49");var p=u({components:{Loading:f.exports},metaInfo:{title:"Meta Info"},data:()=>({text:"Hello World"}),computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t})({},Object(i.mapState)({num:t=>t.mA.num,loading:t=>t.mA.loading}))},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"test"}},[e("Loading",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}]}),this._ssrNode(" "),e("RouterView"),this._ssrNode(this._ssrEscape("\n  Vuex："+this._s(this.num)+"\n"))],2)},[],!1,function(t){var e=n(15);e.__inject__&&e.__inject__(t)},"5e4b8228","d5e6cec4").exports;var h=u({data:()=>({})},function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"header"},[this._ssrNode('<h1 class="title" data-v-2d536cab>\n    TODO DEMO\n  </h1>')])},[],!1,function(t){var e=n(16);e.__inject__&&e.__inject__(t)},"2d536cab","6337898e").exports;var v=u({props:{todo:{type:Object,required:!0}},data:()=>({}),methods:{handleDelete(t){this.$emit("delete",t.id)},handleToggle(t){t.preventDefault(),this.$emit("toggle",this.todo)}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["item",t.todo.completed?"completed":""]},[t._ssrNode("<input"+t._ssrAttr("id",t.todo.id)+' type="checkbox"'+t._ssrAttr("checked",t.todo.completed)+' class="toggle" data-v-705e5d8d> <label'+t._ssrAttr("for",t.todo.id)+' class="toggle-label" data-v-705e5d8d></label> <span class="content" data-v-705e5d8d>'+t._ssrEscape("\n    "+t._s(t.todo.content)+"\n  ")+'</span> <button class="delete" data-v-705e5d8d>\n    X\n  </button>')])},[],!1,function(t){var e=n(17);e.__inject__&&e.__inject__(t)},"705e5d8d","4f820bd6").exports;var m=u({props:{todos:{type:Array,required:!0},filter:{type:String,required:!0}},data(){return{status:["all","active","completed"],unFinishedTodoLength:this.todos.length}},watch:{todos:{deep:!0,handler(){this.unFinishedTodoLength=this.todos.filter(t=>!t.completed).length}}},methods:{handleFilter(t){this.$emit("toggle",t)},handleClear(){this.$emit("clearCompleted")}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tabs"},[t._ssrNode('<span class="count" data-v-f68b36c4>'+t._ssrEscape("\n    "+t._s(t.unFinishedTodoLength)+" items left\n  ")+'</span> <span class="clear" data-v-f68b36c4>\n    Clear completed\n  </span> <div class="status" data-v-f68b36c4>'+t._ssrList(t.status,function(e,n){return"<span"+t._ssrClass(null,[t.filter===e?"active":""])+" data-v-f68b36c4>"+t._ssrEscape("\n      "+t._s(e)+"\n    ")+"</span>"})+"</div>")])},[],!1,function(t){var e=n(18);e.__inject__&&e.__inject__(t)},"f68b36c4","5762d27e").exports,_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};var g=u({components:{Item:v,Tabs:m},data:()=>({filter:"all"}),computed:_({},Object(i.mapState)({todos:t=>t.mA.todos}),{filterTodos(){return"all"===this.filter?this.todos:"active"===this.filter?this.todos.filter(t=>!t.completed):"completed"===this.filter&&this.todos.filter(t=>t.completed)}}),created(){this.todos&&this.todos.length&&this.fetchTodos()},methods:_({},Object(i.mapActions)(["fetchTodos","addTodo","updateTodo","deleteTodo","deleteAllCompleted"]),{handleAddTodo(t){const e=t.target.value.trim();if(!e)return this.$notify({content:"请输入内容"});this.addTodo({content:e,completed:!1}),t.target.value=""},handleDeleteTodo(t){this.deleteTodo(t)},handleClearCompleted(){this.deleteAllCompleted()},handleToggleItem(t){this.updateTodo({id:t.id,todo:_({},t,{completed:!t.completed})})},handleToggleFilter(t){this.filter=t}})},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t._ssrNode('<input type="text" placeholder="接下去要做什么" autocomplete class="main-input" data-v-26bf9dd0> '),t._l(t.filterTodos,function(e){return n("Item",{key:e.id,attrs:{todo:e},on:{delete:t.handleDeleteTodo,toggle:t.handleToggleItem}})}),t._ssrNode(" "),n("Tabs",{attrs:{filter:t.filter,todos:t.todos},on:{toggle:t.handleToggleFilter,clearCompleted:t.handleClearCompleted}})],2)},[],!1,function(t){var e=n(19);e.__inject__&&e.__inject__(t)},"26bf9dd0","4bc4460c").exports;n(20);var b=[{path:"/Todo",component:u({components:{Header:h,Main:g,Footer:{data:()=>({text:"Written by KokoTa"}),render(){const t=arguments[0];return t("div",{class:"footer"},[t("span",[this.text])])}}},data:()=>({tabValue:"1"}),methods:{notify(){this.$notify({content:"test $notify",btn:"close"})},handleChange(t){console.log(t),this.tabValue=t}},asyncData:({store:t,router:e})=>t.state.mA.user?t.dispatch("fetchTodos"):(e.replace("/Login"),Promise.resolve())},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo"},[t._ssrNode('<div class="mask" data-v-5302f997></div> '),t._ssrNode('<div class="content" data-v-5302f997>',"</div>",[n("Header"),t._ssrNode(" "),n("Main"),t._ssrNode(" "),n("Footer"),t._ssrNode(" <button data-v-5302f997>\n      get notify\n    </button> "),n("tabs",{attrs:{value:t.tabValue},on:{change:t.handleChange}},[n("tab",{attrs:{label:"tab1",index:"1"}},[n("article",[t._v("content1")])]),t._v(" "),n("tab",{attrs:{index:"2"}},[n("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n          tab2\n        ")]),t._v(" "),n("article",[t._v("content2")])]),t._v(" "),n("tab",{attrs:{label:"tab3",index:"3"}},[n("article",[t._v("content3")])])],1)],2)],2)},[],!1,function(t){var e=n(21);e.__inject__&&e.__inject__(t)},"5302f997","66f628ce").exports},{path:"/Login",component:u({data:()=>({username:"",password:"",errorMessage:""}),methods:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t})({},Object(i.mapActions)(["login"]),{handleSubmit(){this.validate()&&this.login({username:this.username,password:this.password}).then(()=>{this.$router.push("/Todo")})},validate(){return this.username&&this.password?(this.errorMessage="",!0):(this.errorMessage="请完善登录信息",!1)}})},function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[t._ssrNode('<h1 data-v-4b0a5922><span data-v-4b0a5922>Login</span> <span class="error-message"'+t._ssrStyle(null,null,{display:t.errorMessage?"":"none"})+" data-v-4b0a5922>"+t._ssrEscape("\n      "+t._s(t.errorMessage)+"\n    ")+'</span></h1> <input type="text" placeholder="User Name"'+t._ssrAttr("value",t.username)+' class="login-input" data-v-4b0a5922> <input type="text" placeholder="Password"'+t._ssrAttr("value",t.password)+' class="login-input" data-v-4b0a5922> <button type="submit" class="login-button" data-v-4b0a5922>\n    登 录\n  </button>')])},[],!1,function(t){var e=n(22);e.__inject__&&e.__inject__(t)},"4b0a5922","d3ccf79a").exports},{path:"*",redirect:"/Login"}],T={fillTodo(t,e){t.todos=e},login(t,e){t.user=e},addTodo(t,e){t.todos.unshift(e)},updateTodo(t,{id:e,todo:n}){const o=t.todos.findIndex(t=>t.id===e);t.todos.splice(o,1,n)},deleteTodo(t,e){const n=t.todos.findIndex(t=>t.id===e);t.todos.splice(n,1)},deleteAllCompleted(t){t.todos=t.todos.filter(t=>!t.completed)},showLoading(t){t.loading=!0},hideLoading(t){t.loading=!1}};const y=n(23),x=n(26).db,C=y(x.appId,x.appKey);var $={getAllTodos:()=>C.getAllTodos()};var w=u({name:"Notification",props:{content:{type:String,required:!0},btn:{type:String,default:"关闭"}},data:()=>({message:"abc",visible:!0}),computed:{style:()=>({})},methods:{handleClose(){this.$emit("close")},handleAfterLeave(){this.$emit("closed")},handleAfterEnter(){},createTimer(){},clearTimer(){}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"},on:{"after-leave":t.handleAfterLeave,"after-enter":t.handleAfterEnter}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"notification",style:t.style,on:{mouseenter:t.clearTimer,mouseleave:t.createTimer}},[n("span",{staticClass:"notification-content"},[t._v("\n      "+t._s(t.content)+" - "+t._s(t.message)+"\n    ")]),t._v(" "),n("a",{staticClass:"notification-close",on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}},[t._v("\n      "+t._s(t.btn)+"\n    ")])])])},[],!1,function(t){var e=n(27);e.__inject__&&e.__inject__(t)},"1646f57a","45285ea9").exports,j={extends:w,computed:{style(){return{position:"fixed",right:"20px",bottom:`${this.verticalOffset}px`,"z-index":"9999"}}},data:()=>({verticalOffset:0,autoCloseTime:3e3,timer:null,height:0,visible:!1}),methods:{createTimer(){this.autoCloseTime&&(console.log("createTimer"),this.timer=setTimeout(()=>{this.visible=!1},this.autoCloseTime))},clearTimer(){this.timer&&(console.log("clearTimer"),clearTimeout(this.timer))},handleAfterEnter(){this.height=this.$el.offsetHeight}},mounted(){this.createTimer()},beforeDestroy(){this.clearTimer()}};const A=a.a.extend(j);let O=[],L=1;var E=t=>{if(a.a.prototype.$isServer)return;const{autoCloseTime:e}=t,n=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["autoCloseTime"]);let o=new A({propsData:n,data:{autoCloseTime:e||3e3}});const r=`notification_${L++}`;o.id=r,o=o.$mount(),document.body.appendChild(o.$el),o.visible=!0;let s=0;return O.forEach(t=>{s+=t.$el.offsetHeight+16}),o.verticalOffset=s,o.$on("close",()=>{o.visible=!1}),o.$on("closed",()=>{(t=>{if(!t)return;const e=O.length,n=O.findIndex(e=>e.id===t.id);if(O.splice(n,1),e<=1)return;const o=t.height+16;for(let t=n;t<e-1;t++)O[t].verticalOffset=O[t].verticalOffset-o})(o),document.body.removeChild(o.$el),o.$destroy()}),O.push(o),o},S=new a.a;const N=t=>{401===t.code?(E({content:"请先登录"}),S.$emit("auth")):E({content:"请求发生了错误"})};var P={state:{todos:[],user:null,loading:!1},getter:{},mutations:T,actions:{fetchTodos:({commit:t})=>(t("showLoading"),$.getAllTodos().then(e=>{t("fillTodo",e),t("hideLoading")}).catch(e=>{N(e),t("hideLoading")})),login:({commit:t},{username:e,password:n})=>(t("showLoading"),new Promise((o,a)=>{$.login(e,n).then(e=>{t("login",e),E({content:"登陆成功"}),t("hideLoading"),o()}).catch(e=>{N(e),t("hideLoading"),a(e)})})),addTodo({commit:t},e){t("showLoading"),$.addTodo(e).then(e=>{t("addTodo",e),E({content:"新增了一条 todo"}),t("hideLoading")}).catch(e=>{N(e),t("hideLoading")})},updateTodo({commit:t},{id:e,todo:n}){t("showLoading"),$.updateTodo(e,n).then(n=>{t("updateTodo",{id:e,todo:n}),E({content:"更新了一条 todo"}),t("hideLoading")}).catch(e=>{N(e),t("hideLoading")})},deleteTodo({commit:t},e){t("showLoading"),$.deleteTodo(e).then(n=>{t("deleteTodo",e),E({content:"删除了一条 todo"}),t("hideLoading")}).catch(e=>{N(e),t("hideLoading")})},deleteAllCompleted({commit:t,state:e}){t("showLoading");const n=e.todos.filter(t=>t.completed).map(t=>t.id);$.deleteAllCompleted(n).then(()=>{t("deleteAllCompleted"),E({content:"删除已完成的所有 todo"}),t("hideLoading")}).catch(e=>{N(e),t("hideLoading")})}}};var q=u({props:{panels:{type:Array,required:!0}},render(){return(0,arguments[0])("div",{class:"tab-content"},[this.panels.map(t=>t.active?t.$slots.default:null)])}},void 0,void 0,!1,null,null,"5fd9be86");var I=u({name:"Tabs",components:{tabContent:q.exports},props:{value:{type:[String,Number],required:!0}},data:()=>({panels:[]}),methods:{handleChange(t){this.$emit("change",t)}},render(){const t=arguments[0];return t("div",{class:"tabs"},[t("ul",{class:"tabs-header"},[this.$slots.default]),t("tab-content",{attrs:{panels:this.panels}})])}},void 0,void 0,!1,function(t){},"1ee19af0","a0ba84ee").exports;var D=u({name:"Tab",props:{index:{type:[String,Number],required:!0},label:{type:String,default:"tab"}},computed:{active(){return this.$parent.value===this.index}},mounted(){this.$parent.panels.push(this)},methods:{handleClick(){this.$parent.handleChange(this.index)}},render(){const t=arguments[0],e=this.$slots.label||t("span",[this.label]);return t("li",{class:{tab:!0,active:this.active},on:{click:this.handleClick}},[e])}},void 0,void 0,!1,function(t){var e=n(28);e.__inject__&&e.__inject__(t)},"5ab3bc54","5820beda").exports;n(29);a.a.use(s.a),a.a.use(d.a),a.a.use(c.a),a.a.use(t=>{t.component(w.name,w),t.prototype.$notify=E}),a.a.use(()=>{a.a.component(I.name,I),a.a.component(D.name,D)});var M=()=>{const t=(()=>new s.a({mode:"history",routes:b}))(),e=(()=>new d.a.Store({strict:!1,modules:{mA:P}}))();return{router:t,store:e,app:new a.a({router:t,store:e,render:t=>t(p)})}};e.default=(t=>new Promise((e,n)=>{const{app:o,router:a,store:r}=M();t.user&&(r.state.mA.user=t.user),a.push(t.url),a.onReady(()=>{const s=a.getMatchedComponents();s.length||n(new Error("no matched component")),Promise.all(s.map(t=>{if(t.asyncData)return t.asyncData({route:a.currentRoute,router:a,store:r})})).then(()=>{t.state=r.state,t.router=a,e(o)})})}))}]);
//# sourceMappingURL=server-entry.js.map