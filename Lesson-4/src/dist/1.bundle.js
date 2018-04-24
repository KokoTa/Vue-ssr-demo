exports.ids = [1];
exports.modules = {

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_Bar_vue__ = __webpack_require__(20);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_3b216cbb_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Bar_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
function injectStyle (context) {
var i
;(i=__webpack_require__(24),i.__inject__&&i.__inject__(context),i)
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
var __vue_module_identifier__ = "77902ee0"

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_Bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_3b216cbb_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Bar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_3b216cbb_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_Bar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components\\Bar.vue"

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 20:
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
  asyncData({ store, route }) {
    return store.dispatch('fetchItem2', 'KokoTa');
  },
  computed: {
    userName() {
      console.log(this.$store.state.userName);
      return this.$store.state.userName;
    }
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7c47f06a", content, false, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.bar {\n  color: green;\n}\n", ""]);

// exports


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bar" }, [
    _vm._ssrNode(
      "<h2>Bar.vue</h2> <span>" +
        _vm._ssrEscape(_vm._s(_vm.userName)) +
        "</span>"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


/***/ })

};;