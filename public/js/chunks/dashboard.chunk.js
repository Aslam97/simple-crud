(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  middleware: 'auth',
  data: function data() {
    return {
      model: {
        title: '',
        description: '',
        status: [],
        due_date: ''
      },
      datePickerOptions: {
        disabledDate: function disabledDate(date) {
          var d = new Date();
          d.setDate(d.getDate() - 1);
          return date < d;
        }
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('status', ['statuses'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('assignees', ['assignees'])),
  mounted: function mounted() {
    Promise.all([this.$store.dispatch('status/index'), this.$store.dispatch('assignees/index')]);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page" }, [
    _c("div", { staticClass: "page-single" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("ValidationObserver", {
              ref: "formLogin",
              staticClass: "col col-login mx-auto",
              attrs: { tag: "div" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var handleSubmit = ref.handleSubmit
                    return [
                      _c(
                        "form",
                        {
                          staticClass: "card",
                          attrs: { autocomplete: "off" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return handleSubmit(_vm.onSubmit)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "card-body p-6" },
                            [
                              _c("div", { staticClass: "card-title" }, [
                                _vm._v(
                                  "\n                Create Task\n              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("BaseInput", {
                                attrs: {
                                  rules: "required",
                                  name: "Title",
                                  label: true,
                                  vid: "title"
                                },
                                model: {
                                  value: _vm.model.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "title", $$v)
                                  },
                                  expression: "model.title"
                                }
                              }),
                              _vm._v(" "),
                              _c("BaseTextarea", {
                                attrs: {
                                  rules: "required",
                                  name: "Description",
                                  label: true
                                },
                                model: {
                                  value: _vm.model.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "description", $$v)
                                  },
                                  expression: "model.description"
                                }
                              }),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                staticClass: "form-group",
                                attrs: {
                                  tag: "div",
                                  name: "Status",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c(
                                            "label",
                                            { staticClass: "form-label" },
                                            [
                                              _vm._v(
                                                "\n                  Status\n                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "ElSelect",
                                            {
                                              class: [
                                                "w-100",
                                                { "is-invalid": errors[0] }
                                              ],
                                              attrs: {
                                                placeholder: "",
                                                multiple: ""
                                              },
                                              model: {
                                                value: _vm.model.status,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.model,
                                                    "status",
                                                    $$v
                                                  )
                                                },
                                                expression: "model.status"
                                              }
                                            },
                                            _vm._l(_vm.statuses, function(
                                              status
                                            ) {
                                              return _c("ElOption", {
                                                key: status.id,
                                                attrs: {
                                                  label: status.name,
                                                  value: status.id
                                                }
                                              })
                                            }),
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "invalid-feedback" },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                staticClass: "form-group",
                                attrs: {
                                  tag: "div",
                                  name: "Assignee",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c(
                                            "label",
                                            { staticClass: "form-label" },
                                            [
                                              _vm._v(
                                                "\n                  Assignee\n                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "ElSelect",
                                            {
                                              class: [
                                                "w-100",
                                                { "is-invalid": errors[0] }
                                              ],
                                              attrs: { placeholder: "" },
                                              model: {
                                                value: _vm.model.assignee_id,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.model,
                                                    "assignee_id",
                                                    $$v
                                                  )
                                                },
                                                expression: "model.assignee_id"
                                              }
                                            },
                                            _vm._l(_vm.assignees, function(
                                              assignee
                                            ) {
                                              return _c(
                                                "ElOption",
                                                {
                                                  key: assignee.id,
                                                  attrs: {
                                                    label: assignee.name,
                                                    value: assignee.id
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        float: "left"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(assignee.name)
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        float: "right",
                                                        color: "#8492a6",
                                                        "font-size": "13px"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      " +
                                                          _vm._s(
                                                            assignee.role.name
                                                          ) +
                                                          "\n                    "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            }),
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "invalid-feedback" },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("ValidationProvider", {
                                staticClass: "form-group",
                                attrs: {
                                  tag: "div",
                                  name: "Due Date",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c(
                                            "label",
                                            { staticClass: "form-label" },
                                            [
                                              _vm._v(
                                                "\n                  Due Date "
                                              ),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "form-required"
                                                },
                                                [_vm._v("*")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("ElDatePicker", {
                                            class: [
                                              "w-100",
                                              { "is-invalid": errors[0] }
                                            ],
                                            attrs: {
                                              type: "date",
                                              placeholder: "",
                                              format: "dd MMM yyyy",
                                              "value-format": "yyyy-MM-dd",
                                              "picker-options":
                                                _vm.datePickerOptions
                                            },
                                            model: {
                                              value: _vm.model.due_date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.model,
                                                  "due_date",
                                                  $$v
                                                )
                                              },
                                              expression: "model.due_date"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "invalid-feedback" },
                                            [_vm._v(_vm._s(errors[0]))]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-footer" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary btn-block" },
                                  [
                                    _vm._v(
                                      "\n                  Log In\n                "
                                    )
                                  ]
                                )
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_7eb83ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=7eb83ab6& */ "./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_7eb83ab6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_7eb83ab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7eb83ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=7eb83ab6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard.vue?vue&type=template&id=7eb83ab6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7eb83ab6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_7eb83ab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=dashboard.chunk.js.map