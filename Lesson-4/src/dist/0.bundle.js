exports.ids = [0];
exports.modules = {

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_Foo_vue__ = __webpack_require__(19);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_2673ebee_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Foo_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
function injectStyle (context) {
var i
;(i=__webpack_require__(21),i.__inject__&&i.__inject__(context),i)
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
var __vue_module_identifier__ = "62e2ae13"

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

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 19:
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("10db07f1", content, false, context)
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.foo {\n  color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "foo" }, [
    _vm._ssrNode(
      "<h2>Foo.vue</h2> <span>" + _vm._ssrEscape(_vm._s(_vm.item)) + "</span>"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


/***/ })

};;