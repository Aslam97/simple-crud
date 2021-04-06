(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        status_id: '',
        due_date: ''
      },
      tryToSubmit: false,
      datePickerOptions: {
        disabledDate: function disabledDate(date) {
          var d = new Date();
          d.setDate(d.getDate() - 1);
          return date < d;
        }
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('status', ['statuses'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('assignees', ['assignees'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', ['tasks'])),
  mounted: function mounted() {
    Promise.all([this.$store.dispatch('status/index'), this.$store.dispatch('assignees/index'), this.$store.dispatch('user/tasks')]);
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this$$store$d, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.tryToSubmit = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.$store.dispatch('task/store', _this.model);

              case 4:
                _yield$_this$$store$d = _context.sent;
                message = _yield$_this$$store$d.message;
                _this.model = {
                  title: '',
                  description: '',
                  status_id: '',
                  due_date: ''
                };
                _this.tryToSubmit = false;

                _this.$refs.formTask.reset();

                _this.$store.dispatch('user/tasks');

                _this.$notify({
                  title: 'Success',
                  type: 'success',
                  message: message
                });

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                _this.tryToSubmit = false;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }))();
    }
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-4" },
        [
          _c("ValidationObserver", {
            ref: "formTask",
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
                        _c("div", { staticClass: "card-header" }, [
                          _c("h3", { staticClass: "card-title" }, [
                            _vm._v("\n              Create Task\n            ")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "card-body" },
                          [
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
                              attrs: { name: "Description", label: true },
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
                                            _vm._v("\n                Status "),
                                            _c(
                                              "span",
                                              { staticClass: "form-required" },
                                              [_vm._v("*")]
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
                                              "popper-class": "xxx"
                                            },
                                            model: {
                                              value: _vm.model.status_id,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.model,
                                                  "status_id",
                                                  $$v
                                                )
                                              },
                                              expression: "model.status_id"
                                            }
                                          },
                                          _vm._l(_vm.statuses, function(
                                            status
                                          ) {
                                            return _c(
                                              "ElOption",
                                              {
                                                key: status.id,
                                                attrs: {
                                                  label: status.name,
                                                  value: status.id
                                                }
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass: "pill",
                                                    style: {
                                                      color: status.color,
                                                      backgroundColor: status.bg
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(status.name) +
                                                        "\n                  "
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
                                              "\n                Assignee "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "form-required" },
                                              [_vm._v("*")]
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
                                                      "\n                    " +
                                                        _vm._s(
                                                          assignee.role.name
                                                        ) +
                                                        "\n                  "
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
                                              "\n                Due Date "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "form-required" },
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
                                    "\n                Create\n              "
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
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass:
                  "table table-hover table-outline table-vcenter text-nowrap card-table"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.tasks, function(task) {
                    return _c("tr", { key: task.id }, [
                      _c("td", [_vm._v(_vm._s(task.title))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(task.description ? task.description : "-")
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass: "pill",
                            style: {
                              color: task.status.color,
                              backgroundColor: task.status.bg
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(task.status.name) +
                                "\n                  "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.assignee.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.due_date))]),
                      _vm._v(" "),
                      _vm._m(1, true)
                    ])
                  }),
                  0
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Assigned")]),
        _vm._v(" "),
        _c("th", [_vm._v("Due Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _c("i", { staticClass: "icon-settings" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center" }, [
      _c("div", { staticClass: "item-action dropdown" }, [
        _c(
          "a",
          {
            staticClass: "icon",
            attrs: { href: "javascript:void(0)", "data-toggle": "dropdown" }
          },
          [_c("i", { staticClass: "fe fe-more-vertical" })]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
          _c(
            "a",
            {
              staticClass: "dropdown-item",
              attrs: { href: "javascript:void(0)" }
            },
            [
              _c("i", { staticClass: "dropdown-icon fe fe-link" }),
              _vm._v(" Separated link\n                      ")
            ]
          )
        ])
      ])
    ])
  }
]
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