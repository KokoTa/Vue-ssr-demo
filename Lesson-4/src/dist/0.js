webpackJsonp([0],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_Foo_vue__ = __webpack_require__(23);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_2673ebee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Foo_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(6);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(25)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_Foo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_2673ebee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Foo_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_2673ebee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Foo_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components\\Foo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2673ebee", Component.options)
  } else {
    hotAPI.reload("data-v-2673ebee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  // 注意，由于此函数会在组件实例化之前调用，所以它无法访问 this
  // 需要将 store 和路由信息作为参数传递进去
  // 这个函数是在后端触发的
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    console.log(route.params);
    return store.dispatch('fetchItem', route.params.id);
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    // 这个 store 是 entry-client 中创建的 store
    item() {
      console.log(this.$store.state.items);
      return this.$store.state.items[this.$route.params.id];
    }
  }
});

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("10db07f1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../node_modules/_vue-loader@14.2.2@vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/_vue-loader@14.2.2@vue-loader/lib/selector.js?type=styles&index=0!./Foo.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../node_modules/_vue-loader@14.2.2@vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../node_modules/_vue-loader@14.2.2@vue-loader/lib/selector.js?type=styles&index=0!./Foo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.foo {\n  color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "foo" }, [
    _c("h2", [_vm._v("Foo.vue")]),
    _vm._v(" "),
    _c("span", [_vm._v(_vm._s(_vm.item))])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-2673ebee", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});