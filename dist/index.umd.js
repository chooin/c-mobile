(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("vue"));
	else
		root["index"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_i7_w__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "PWX4");
/******/ })
/************************************************************************/
/******/ ({

/***/ "PWX4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("PimI");

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/btn/index.vue?vue&type=template&id=333c8b0d
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"c-btn",class:[
    _vm.type ? 'c-btn__' + _vm.type : '',
    {
      'c-btn__o': _vm.o,
      'c-btn__disabled': _vm.disabled,
      'c-btn__suspend': _vm.suspend,
      'c-btn__small': _vm.small,
      'c-btn__icon': _vm.icon,
      'c-btn__is-miniprogram': _vm.device.isMiniProgram,
      'c-btn__is-miniprogram-is-iphonex': _vm.device.isMiniProgramIsIPhoneX
    }
  ],attrs:{"type":"type"},on:{"click":_vm.handleClick}},[_c('span',{staticClass:"c-btn__text"},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/btn/index.vue?vue&type=template&id=333c8b0d

// CONCATENATED MODULE: ./packages/utils/device.js
/* eslint-disable */
const isBrowser = typeof window !== 'undefined'
let systemInfo
if (!isBrowser) systemInfo = wx && wx.getSystemInfoSync()
const isMiniProgram = !isBrowser && systemInfo
const isMiniProgramIsIPhoneX = isMiniProgram && systemInfo.model.indexOf('iPhone X') > -1

/* harmony default export */ var device = ({
  isBrowser,
  isMiniProgram,
  isMiniProgramIsIPhoneX
});



// CONCATENATED MODULE: ./packages/utils/get-object-type.js
/* harmony default export */ var get_object_type = (v => Object.prototype.toString.call(v).slice(8, -1));

// CONCATENATED MODULE: ./packages/utils/to.js



const miniProgramTo = to => {
  let search = ''
  let uri
  if (get_object_type(to) === 'String') {
    uri = to
  } else if (
    get_object_type(to) === 'Object' &&
    to.path
  ) {
    uri = to.path
  }
  if (
    get_object_type(to) === 'Object' &&
    get_object_type(to.query) === 'Object' &&
    Object.keys(to.query).length > 0
  ) {
    let querys = []
    for (let i in to.query) {
      querys.push(`${i}=${to.query[i]}`)
    }
    search = `?${querys.join('&')}`
  }
  return `${uri}${search}`
}

/* eslint-disable */
/* harmony default export */ var utils_to = (({
  vm,
  to,
  replace,
  success,
  fail,
  complete
}) => {
  if (to) {
    if (isBrowser) { // 浏览器
      if (
        typeof to === 'string' &&
        to.indexOf('//') === 0
      ) { // 字符串
        to = to.indexOf('.') > -1
          ? to
          : to.substring(1)
        if (replace) {
          window.location.replace(to)
        } else {
          window.location.href = to
        }
      } else {
        if (
          (
            typeof to === 'string' &&
            to.indexOf('/') === 0
          ) ||
          typeof to === 'object'
        ) { // Vue router 操作
          if (replace) {
            vm.$router.replace(to)
          } else {
            vm.$router.push(to)
          }
        } else { // 其他，如：拨打电话、发送邮件
          if (replace) {
            window.location.replace(to)
          } else {
            window.location.href = to
          }
        }
      }
    } else if (isMiniProgram) { // 小程序
      if (
        typeof to === 'string' &&
        to.indexOf('tel:') === 0
      ) { // 拨打电话
        wx.makePhoneCall({
          phoneNumber: to.replace('tel:')
        })
      } else {
        let url = miniProgramTo(to)
        success = success ? success : () => {}
        fail = fail ? fail : () => {}
        complete = complete ? complete : () => {}
        if (replace) {
          wx.redirectTo({
            url,
            success,
            fail,
            complete,
          })
        } else {
          wx.navigateTo({
            url,
            success,
            fail,
            complete,
          })
        }
      }
    }
  } else {
    vm.$emit('click')
  }
});

// CONCATENATED MODULE: ./packages/utils/index.js






// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/btn/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var btnvue_type_script_lang_js = ({
  name: 'c-btn',
  props: {
    type: {
      type: String,
      default: ''
    },
    o: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    suspend: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    },
    icon: {
      type: Boolean,
      default: false
    },
    text: { // mpvue 对 slot 支持不好！
      type: String,
      default: ''
    }
  },
  data () {
    return {
      div: null,
      device: device
    }
  },
  mounted () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (device.isBrowser) {
        if (document.querySelectorAll('.c-btn__suspend__cover').length === 0) {
          this.div = document.createElement('div')
          this.div.className = 'c-btn__suspend__cover'
          if (get_object_type(this.cover) === 'Number') {
            this.div.style.height = `${this.cover}px`
          } else if (get_object_type(this.cover) === 'String') {
            this.div.style.height = this.cover
          }
          document.body.appendChild(this.div)
        }
      }
    }
  },
  onReady () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (this.device.isMiniProgram) {
        // 小程序不支持插入节点
      }
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      utils_to({
        vm: this,
        to: this.to
      })
    }
  },
  beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove()
  }
});

// CONCATENATED MODULE: ./packages/components/btn/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_btnvue_type_script_lang_js = (btnvue_type_script_lang_js); 
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/components/btn/index.vue





/* normalize component */

var btn_component = normalizeComponent(
  components_btnvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var btn = (btn_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex/flex.vue?vue&type=template&id=8e0e54e0
var flexvue_type_template_id_8e0e54e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-flex",on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var flexvue_type_template_id_8e0e54e0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/flex/flex.vue?vue&type=template&id=8e0e54e0

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex/flex.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//



/* harmony default export */ var flexvue_type_script_lang_js = ({
  name: 'cFlex',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/flex/flex.vue?vue&type=script&lang=js
 /* harmony default export */ var flex_flexvue_type_script_lang_js = (flexvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/flex/flex.vue





/* normalize component */

var flex_component = normalizeComponent(
  flex_flexvue_type_script_lang_js,
  flexvue_type_template_id_8e0e54e0_render,
  flexvue_type_template_id_8e0e54e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var flex = (flex_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex/flex-item.vue?vue&type=template&id=1b5c3496
var flex_itemvue_type_template_id_1b5c3496_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-flex-item",style:({
    flex: _vm.flex,
    margin: ("0 " + (_vm.gutter / 2) + "px")
  }),on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var flex_itemvue_type_template_id_1b5c3496_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/flex/flex-item.vue?vue&type=template&id=1b5c3496

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex/flex-item.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var flex_itemvue_type_script_lang_js = ({
  name: 'cFlexItem',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    gutter: {
      get () {
        return this.$parent.gutter || 0
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/components/flex/flex-item.vue?vue&type=script&lang=js
 /* harmony default export */ var flex_flex_itemvue_type_script_lang_js = (flex_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/flex/flex-item.vue





/* normalize component */

var flex_item_component = normalizeComponent(
  flex_flex_itemvue_type_script_lang_js,
  flex_itemvue_type_template_id_1b5c3496_render,
  flex_itemvue_type_template_id_1b5c3496_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var flex_item = (flex_item_component.exports);
// CONCATENATED MODULE: ./packages/components/flex/index.js





// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/ft/ft.vue?vue&type=template&id=a6b5ae54
var ftvue_type_template_id_a6b5ae54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-ft"},[_vm._t("default")],2)}
var ftvue_type_template_id_a6b5ae54_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/ft/ft.vue?vue&type=template&id=a6b5ae54

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/ft/ft.vue?vue&type=script&lang=js
//
//
//
//
//
//

/* harmony default export */ var ftvue_type_script_lang_js = ({
  name: 'cFt'
});

// CONCATENATED MODULE: ./packages/components/ft/ft.vue?vue&type=script&lang=js
 /* harmony default export */ var ft_ftvue_type_script_lang_js = (ftvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/ft/ft.vue





/* normalize component */

var ft_component = normalizeComponent(
  ft_ftvue_type_script_lang_js,
  ftvue_type_template_id_a6b5ae54_render,
  ftvue_type_template_id_a6b5ae54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ft = (ft_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/ft/ft-item.vue?vue&type=template&id=71924b96
var ft_itemvue_type_template_id_71924b96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-ft-item",style:({
    width: ((_vm.width * 100) + "%")
  }),on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var ft_itemvue_type_template_id_71924b96_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/ft/ft-item.vue?vue&type=template&id=71924b96

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/ft/ft-item.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ft_itemvue_type_script_lang_js = ({
  name: 'cFtItem',
  props: {
    width: {
      type: Number,
      default: 1
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/ft/ft-item.vue?vue&type=script&lang=js
 /* harmony default export */ var ft_ft_itemvue_type_script_lang_js = (ft_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/ft/ft-item.vue





/* normalize component */

var ft_item_component = normalizeComponent(
  ft_ft_itemvue_type_script_lang_js,
  ft_itemvue_type_template_id_71924b96_render,
  ft_itemvue_type_template_id_71924b96_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ft_item = (ft_item_component.exports);
// CONCATENATED MODULE: ./packages/components/ft/index.js





// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/header/index.vue?vue&type=template&id=3d9f19cf
var headervue_type_template_id_3d9f19cf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-header",class:[
    _vm.type ? 'c-header__' + _vm.type : '',
    {
      'noborder-bottom': _vm.noborderBottom
    }
  ]},[(_vm.$slots.left)?_c('span',{staticClass:"c-header__left"},[_vm._t("left")],2):(_vm._left.text || _vm._left.back)?_c('span',{staticClass:"c-header__left",class:{
      'c-header__back': _vm._left.back
    },style:({
      color: _vm._left.color
    }),on:{"click":_vm.handleLeftClick}},[_vm._v("\n    "+_vm._s(_vm._left.text)+"\n  ")]):_vm._e(),(_vm.$slots.title)?_c('h1',[_vm._t("title")],2):(_vm.title || _vm.defaultTitle)?_c('h1',[_vm._v("\n    "+_vm._s(_vm.title === undefined || _vm.title === null ? _vm.defaultTitle : _vm.title)+"\n  ")]):_vm._e(),(_vm.$slots.right)?_c('span',{staticClass:"c-header__right"},[_vm._t("right")],2):(_vm._right.text)?_c('span',{staticClass:"c-header__right",style:({
      color: _vm._right.color
    }),on:{"click":_vm.handleRightClick}},[_vm._v("\n    "+_vm._s(_vm._right.text)+"\n  ")]):_vm._e()])}
var headervue_type_template_id_3d9f19cf_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/header/index.vue?vue&type=template&id=3d9f19cf

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/header/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var headervue_type_script_lang_js = ({
  name: 'cHeader',
  data () {
    return {
      defaultTitle: ''
    }
  },
  props: {
    autoTitle: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    },
    left: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: null
    },
    right: {
      type: Object,
      default: () => {}
    },
    noborderBottom: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleLeftClick () {
      if (this._left.to) {
        utils_to({
          vm: this,
          to: this._left.to
        })
      } else if (typeof this._left.click === 'function') {
        this._left.click()
      } else if (this._left.back) {
        this.$router.go(-1)
      }
    },
    handleRightClick () {
      if (this._right.to) {
        utils_to({
          vm: this,
          to: this._right.to
        })
      } else if (typeof this._right.click === 'function') {
        this._right.click()
      }
    }
  },
  computed: {
    _left: {
      get () {
        return Object.assign({
          text: null,
          to: null,
          color: null,
          back: false,
          click: null
        }, this.left)
      }
    },
    _right: {
      get () {
        return Object.assign({
          text: null,
          to: null,
          color: null,
          click () {}
        }, this.right)
      }
    }
  },
  created () {
    if (this.autoTitle) {
      this.$nextTick(() => {
        this.defaultTitle = document.title
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/header/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_headervue_type_script_lang_js = (headervue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/header/index.vue





/* normalize component */

var header_component = normalizeComponent(
  components_headervue_type_script_lang_js,
  headervue_type_template_id_3d9f19cf_render,
  headervue_type_template_id_3d9f19cf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/icon/index.vue?vue&type=template&id=c8c8a790
var iconvue_type_template_id_c8c8a790_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"c-icon",class:[
    ("icon-" + _vm.name),
    _vm.type ? ("c-icon__" + _vm.type) : '',
    {
      'c-icon__has-background': _vm.backgroundColor
    }
  ],style:({
    width: _vm.size,
    height: _vm.size,
    fontSize: _vm.size,
    backgroundColor: _vm.backgroundColor,
    color: _vm.color,
    borderRadius: _vm.borderRadius
                  ? _vm.borderRadius
                  : '3px'
  }),on:{"click":_vm.handleClick}})}
var iconvue_type_template_id_c8c8a790_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/icon/index.vue?vue&type=template&id=c8c8a790

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/icon/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var iconvue_type_script_lang_js = ({
  name: 'cIcon',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    borderRadius: {
      type: String
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/icon/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_iconvue_type_script_lang_js = (iconvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/icon/index.vue





/* normalize component */

var icon_component = normalizeComponent(
  components_iconvue_type_script_lang_js,
  iconvue_type_template_id_c8c8a790_render,
  iconvue_type_template_id_c8c8a790_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-group.vue?vue&type=template&id=3e1901e1
var input_groupvue_type_template_id_3e1901e1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-input-group"},[(_vm.title)?_c('c-text',{staticClass:"c-input-group__title",attrs:{"type":_vm.type,"block":""}},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]):_vm._e(),_c('div',{staticClass:"c-input-group__content",class:{
      'noborder': _vm.noborder,
      'noborder-top': _vm.noborderTop,
      'noborder-bottom': _vm.noborderBottom
    }},[_vm._t("default")],2)],1)}
var input_groupvue_type_template_id_3e1901e1_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input-group/input-group.vue?vue&type=template&id=3e1901e1

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-group.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var input_groupvue_type_script_lang_js = ({
  name: 'cInputGroup',
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    noborder: {
      type: Boolean,
      default: false
    },
    noborderTop: {
      type: Boolean,
      default: false
    },
    noborderBottom: {
      type: Boolean,
      default: false
    }
  }
});

// CONCATENATED MODULE: ./packages/components/input-group/input-group.vue?vue&type=script&lang=js
 /* harmony default export */ var input_group_input_groupvue_type_script_lang_js = (input_groupvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/input-group/input-group.vue





/* normalize component */

var input_group_component = normalizeComponent(
  input_group_input_groupvue_type_script_lang_js,
  input_groupvue_type_template_id_3e1901e1_render,
  input_groupvue_type_template_id_3e1901e1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_group = (input_group_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input.vue?vue&type=template&id=79e5120d
var inputvue_type_template_id_79e5120d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.useDiv)?_c('div',{staticClass:"c-input",class:[{
    'c-input__addon': _vm.addon,
    'c-input__next': _vm.next,
    'c-input__icon': _vm.icon,
    'c-input__checked': _vm.checked,
    'noborder-top': _vm.noborderTop
  }],on:{"touchstart":function () {},"click":_vm.handleClick}},[_vm._t("default")],2):_c('label',{staticClass:"c-input",class:[{
    'c-input__addon': _vm.addon,
    'c-input__next': _vm.next,
    'c-input__icon': _vm.icon,
    'c-input__checked': _vm.checked,
    'noborder-top': _vm.noborderTop
  }],on:{"touchstart":function () {},"click":_vm.handleClick}},[_vm._t("default")],2)}
var inputvue_type_template_id_79e5120d_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input-group/input.vue?vue&type=template&id=79e5120d

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var inputvue_type_script_lang_js = ({
  name: 'cInput',
  props: {
    addon: {
      type: Boolean,
      default: false
    },
    useDiv: { // switch 组件父级是不允许使用 label 标签的
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    noborderTop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/input-group/input.vue?vue&type=script&lang=js
 /* harmony default export */ var input_group_inputvue_type_script_lang_js = (inputvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/input-group/input.vue





/* normalize component */

var input_component = normalizeComponent(
  input_group_inputvue_type_script_lang_js,
  inputvue_type_template_id_79e5120d_render,
  inputvue_type_template_id_79e5120d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-head.vue?vue&type=template&id=47cbf900
var input_headvue_type_template_id_47cbf900_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-input-head",on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var input_headvue_type_template_id_47cbf900_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input-group/input-head.vue?vue&type=template&id=47cbf900

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-head.vue?vue&type=script&lang=js
//
//
//
//
//
//

/* harmony default export */ var input_headvue_type_script_lang_js = ({
  name: 'cInputHead',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
});

// CONCATENATED MODULE: ./packages/components/input-group/input-head.vue?vue&type=script&lang=js
 /* harmony default export */ var input_group_input_headvue_type_script_lang_js = (input_headvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/input-group/input-head.vue





/* normalize component */

var input_head_component = normalizeComponent(
  input_group_input_headvue_type_script_lang_js,
  input_headvue_type_template_id_47cbf900_render,
  input_headvue_type_template_id_47cbf900_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_head = (input_head_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-body.vue?vue&type=template&id=91f942fc
var input_bodyvue_type_template_id_91f942fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-input-body",on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var input_bodyvue_type_template_id_91f942fc_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input-group/input-body.vue?vue&type=template&id=91f942fc

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-body.vue?vue&type=script&lang=js
//
//
//
//
//
//

/* harmony default export */ var input_bodyvue_type_script_lang_js = ({
  name: 'cInputBody',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
});

// CONCATENATED MODULE: ./packages/components/input-group/input-body.vue?vue&type=script&lang=js
 /* harmony default export */ var input_group_input_bodyvue_type_script_lang_js = (input_bodyvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/input-group/input-body.vue





/* normalize component */

var input_body_component = normalizeComponent(
  input_group_input_bodyvue_type_script_lang_js,
  input_bodyvue_type_template_id_91f942fc_render,
  input_bodyvue_type_template_id_91f942fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_body = (input_body_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-upload/upload.vue?vue&type=template&id=64c273a1
var uploadvue_type_template_id_64c273a1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-input-upload",class:[
    {
      'noborder-top': _vm.noborderTop,
      'c-input-upload__allow-delete': _vm.allowDelete
    }
  ]},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}],staticClass:"c-input-upload__title"},[_vm._v(_vm._s(_vm.title))]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.amount),expression:"amount"}],staticClass:"c-input-upload__amount"},[_vm._v(_vm._s(_vm.amount))]),_c('div',{staticClass:"c-input-upload__files"},[_vm._t("default"),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.allowUpload),expression:"allowUpload"}],staticClass:"c-input-upload__btn",on:{"click":_vm.handleClick}},[_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.showUploadInput),expression:"showUploadInput"}],attrs:{"type":"file","accept":_vm.accept},on:{"change":_vm.fileChange}})])],2)])}
var uploadvue_type_template_id_64c273a1_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input-group/input-upload/upload.vue?vue&type=template&id=64c273a1

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-upload/upload.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var uploadvue_type_script_lang_js = ({
  name: 'cInputUpload',
  props: {
    title: {
      type: String,
      default: null
    },
    allowUpload: {
      type: Boolean,
      default: true
    },
    showUploadInput: {
      type: Boolean,
      default: true
    },
    amount: {
      type: String,
      default: null
    },
    noborderTop: {
      type: Boolean,
      default: false
    },
    allowDelete: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: 'image/*'
    }
  },
  methods: {
    handleClick () {
      this.$emit('choose-image')
    },
    fileChange (file) {
      this.$emit('change', file)
    }
  }
});

// CONCATENATED MODULE: ./packages/components/input-group/input-upload/upload.vue?vue&type=script&lang=js
 /* harmony default export */ var input_upload_uploadvue_type_script_lang_js = (uploadvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/input-group/input-upload/upload.vue





/* normalize component */

var upload_component = normalizeComponent(
  input_upload_uploadvue_type_script_lang_js,
  uploadvue_type_template_id_64c273a1_render,
  uploadvue_type_template_id_64c273a1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload = (upload_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-upload/upload-file.vue?vue&type=template&id=3575d3b1
var upload_filevue_type_template_id_3575d3b1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.src)?_c('div',{staticClass:"c-input-upload-file",on:{"click":_vm.handleClick}},[_c('img',{attrs:{"src":_vm.src}}),_c('i',{on:{"click":function($event){$event.stopPropagation();return _vm.handleDeleteClick($event)}}})]):_vm._e()}
var upload_filevue_type_template_id_3575d3b1_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input-group/input-upload/upload-file.vue?vue&type=template&id=3575d3b1

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/input-group/input-upload/upload-file.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var upload_filevue_type_script_lang_js = ({
  name: 'cInputUploadFile',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
    handleDeleteClick () {
      this.$emit('delete')
    }
  }
});

// CONCATENATED MODULE: ./packages/components/input-group/input-upload/upload-file.vue?vue&type=script&lang=js
 /* harmony default export */ var input_upload_upload_filevue_type_script_lang_js = (upload_filevue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/input-group/input-upload/upload-file.vue





/* normalize component */

var upload_file_component = normalizeComponent(
  input_upload_upload_filevue_type_script_lang_js,
  upload_filevue_type_template_id_3575d3b1_render,
  upload_filevue_type_template_id_3575d3b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_file = (upload_file_component.exports);
// CONCATENATED MODULE: ./packages/components/input-group/input-upload/index.js





// CONCATENATED MODULE: ./packages/components/input-group/index.js








// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/switch/index.vue?vue&type=template&id=31fc9316
var switchvue_type_template_id_31fc9316_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-switch",class:[
    _vm.type ? ("c-switch__" + _vm.type) : '',
    {
      'c-switch__disabled': _vm.disabled
    }
  ]},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm._value),expression:"_value"}],attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":Array.isArray(_vm._value)?_vm._i(_vm._value,null)>-1:(_vm._value)},on:{"change":[function($event){var $$a=_vm._value,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm._value=$$a.concat([$$v]))}else{$$i>-1&&(_vm._value=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm._value=$$c}},_vm.handleChange]}}),_c('span',{staticClass:"c-switch__core"})])])}
var switchvue_type_template_id_31fc9316_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/switch/index.vue?vue&type=template&id=31fc9316

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/switch/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var switchvue_type_script_lang_js = ({
  name: 'cSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange () {
      this.$emit('change', !this._value)
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/components/switch/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_switchvue_type_script_lang_js = (switchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/switch/index.vue





/* normalize component */

var switch_component = normalizeComponent(
  components_switchvue_type_script_lang_js,
  switchvue_type_template_id_31fc9316_render,
  switchvue_type_template_id_31fc9316_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_switch = (switch_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tab/tab.vue?vue&type=template&id=4a28558f
var tabvue_type_template_id_4a28558f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tab",class:[
    _vm.type ? ("c-tab__" + _vm.type) : ''
  ]},[_vm._t("default")],2)}
var tabvue_type_template_id_4a28558f_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/tab/tab.vue?vue&type=template&id=4a28558f

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tab/tab.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tabvue_type_script_lang_js = ({
  name: 'cTab',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
});

// CONCATENATED MODULE: ./packages/components/tab/tab.vue?vue&type=script&lang=js
 /* harmony default export */ var tab_tabvue_type_script_lang_js = (tabvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/tab/tab.vue





/* normalize component */

var tab_component = normalizeComponent(
  tab_tabvue_type_script_lang_js,
  tabvue_type_template_id_4a28558f_render,
  tabvue_type_template_id_4a28558f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab = (tab_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tab/tab-item.vue?vue&type=template&id=286a7669
var tab_itemvue_type_template_id_286a7669_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"c-tab-item",class:{
    'c-tab__current': _vm.current
  },attrs:{"href":"javascript:;"},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var tab_itemvue_type_template_id_286a7669_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/tab/tab-item.vue?vue&type=template&id=286a7669

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tab/tab-item.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_itemvue_type_script_lang_js = ({
  name: 'cTabItem',
  props: {
    current: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to,
        replace: true
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/tab/tab-item.vue?vue&type=script&lang=js
 /* harmony default export */ var tab_tab_itemvue_type_script_lang_js = (tab_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/tab/tab-item.vue





/* normalize component */

var tab_item_component = normalizeComponent(
  tab_tab_itemvue_type_script_lang_js,
  tab_itemvue_type_template_id_286a7669_render,
  tab_itemvue_type_template_id_286a7669_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_item = (tab_item_component.exports);
// CONCATENATED MODULE: ./packages/components/tab/index.js





// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tabbar/tabbar.vue?vue&type=template&id=27e27672
var tabbarvue_type_template_id_27e27672_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tabbar",class:[
    _vm.type ? ("c-tabbar__" + _vm.type) : ''
  ]},[_vm._t("default")],2)}
var tabbarvue_type_template_id_27e27672_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/tabbar/tabbar.vue?vue&type=template&id=27e27672

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tabbar/tabbar.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tabbarvue_type_script_lang_js = ({
  name: 'cTabbar',
  props: {
    type: {
      type: String,
      default: ''
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    }
  },
  data () {
    return {
      div: null
    }
  },
  mounted () {
    if (
      this.cover !== false &&
      document.querySelectorAll('.c-tabbar__cover').length === 0
    ) {
      this.div = document.createElement('div')
      this.div.className = 'c-tabbar__cover'
      if (get_object_type(this.cover) === 'Number') {
        this.div.style.height = `${this.cover}px`
      } else if (get_object_type(this.cover) === 'String') {
        this.div.style.height = this.cover
      }
      document.body.appendChild(this.div)
    }
  },
  beforeDestroy () {
    this.div && this.div.remove()
  }
});

// CONCATENATED MODULE: ./packages/components/tabbar/tabbar.vue?vue&type=script&lang=js
 /* harmony default export */ var tabbar_tabbarvue_type_script_lang_js = (tabbarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/tabbar/tabbar.vue





/* normalize component */

var tabbar_component = normalizeComponent(
  tabbar_tabbarvue_type_script_lang_js,
  tabbarvue_type_template_id_27e27672_render,
  tabbarvue_type_template_id_27e27672_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabbar = (tabbar_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tabbar/tabbar-item.vue?vue&type=template&id=7c6a1a53
var tabbar_itemvue_type_template_id_7c6a1a53_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"c-tabbar-item",class:{
    'c-tabbar__current': _vm.current
  },on:{"click":_vm.handleClick}},[_vm._t("default",[_c('c-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.icon),expression:"icon"}],attrs:{"name":_vm.icon}}),_c('c-text',{directives:[{name:"show",rawName:"v-show",value:(_vm.text),expression:"text"}]},[_vm._v(_vm._s(_vm.text))])]),_c('b',{directives:[{name:"show",rawName:"v-show",value:(_vm.badge),expression:"badge"}]},[_vm._v(_vm._s(_vm.badge))])],2)}
var tabbar_itemvue_type_template_id_7c6a1a53_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/tabbar/tabbar-item.vue?vue&type=template&id=7c6a1a53

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/tabbar/tabbar-item.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tabbar_itemvue_type_script_lang_js = ({
  name: 'cTabbarItem',
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    current: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    badge: {
      type: Number,
      default: null
    }
  },
  methods: {
    handleClick () {
      utils_to({
        vm: this,
        to: this.to
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/components/tabbar/tabbar-item.vue?vue&type=script&lang=js
 /* harmony default export */ var tabbar_tabbar_itemvue_type_script_lang_js = (tabbar_itemvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/tabbar/tabbar-item.vue





/* normalize component */

var tabbar_item_component = normalizeComponent(
  tabbar_tabbar_itemvue_type_script_lang_js,
  tabbar_itemvue_type_template_id_7c6a1a53_render,
  tabbar_itemvue_type_template_id_7c6a1a53_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabbar_item = (tabbar_item_component.exports);
// CONCATENATED MODULE: ./packages/components/tabbar/index.js





// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/text/index.vue?vue&type=template&id=11c14cb4
var textvue_type_template_id_11c14cb4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"c-text",class:[
    _vm.type ? 'c-text__' + _vm.type : '',
    _vm.align ? 'c-text__' + _vm.align: '',
    {
      'c-text__light': _vm.light,
      'c-text__block': _vm.block,
      'c-text__cursor': _vm.cursor,
      'c-text__empty':
        _vm.text ||
        (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === null ||
        (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === undefined ||
        (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === '',
      'c-text__placeholder':
        _vm.placeholder !== undefined &&
        _vm.placeholder !== null &&
        (
          _vm.text ||
          (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === null ||
          (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === undefined ||
          (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === ''
        )
    }
  ],style:({
    fontFamily: _vm.fontFamily,
    fontSize: _vm._fontSize
  }),on:{"click":_vm.handleClick}},[(
      _vm.placeholder !== undefined &&
      _vm.placeholder !== null &&
      (
        _vm.text ||
        (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === null ||
        (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === undefined ||
        (_vm.$slots.default && _vm.$slots.default[0] && _vm.$slots.default[0].text) === ''
      )
    )?[_vm._v("\n    "+_vm._s(_vm.placeholder)+"\n  ")]:_c('span',{staticClass:"c-text__content"},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)],2)}
var textvue_type_template_id_11c14cb4_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/text/index.vue?vue&type=template&id=11c14cb4

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/text/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var textvue_type_script_lang_js = ({
  name: 'cText',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
    fontFamily: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    cursor: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: [Number, String],
      default: null
    },
    align: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) return
      utils_to({
        vm: this,
        to: this.to
      })
    }
  },
  computed: {
    _fontSize () {
      if (this.fontSize) {
        if (isNaN(this.fontSize)) {
          return this.fontSize
        } else {
          return `${this.fontSize}px`
        }
      } else {
        return null
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/components/text/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_textvue_type_script_lang_js = (textvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/text/index.vue





/* normalize component */

var text_component = normalizeComponent(
  components_textvue_type_script_lang_js,
  textvue_type_template_id_11c14cb4_render,
  textvue_type_template_id_11c14cb4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_text = (text_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/actionsheet/index.vue?vue&type=template&id=067a883c
var actionsheetvue_type_template_id_067a883c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-actionsheet",class:{
    'c-actionsheet__visible': _vm.value,
    'c-actionsheet__has-title': _vm.title || _vm.description,
    'c-actionsheet__actions-empty': Array.isArray(_vm.actions) && _vm.actions.length === 0
  },on:{"click":_vm.cancelClick}},[_c('div',{staticClass:"c-actionsheet__content"},[_c('div',{staticClass:"c-actionsheet__header",on:{"click":function($event){$event.stopPropagation();return (function () {})($event)}}},[(_vm.title)?_c('h5',{staticClass:"c-actionsheet__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]):_vm._e(),(_vm.description)?_c('p',{staticClass:"c-actionsheet__description"},[_vm._v("\n        "+_vm._s(_vm.description)+"\n      ")]):_vm._e()]),_c('div',{staticClass:"c-actionsheet__actions"},[_c('ul',_vm._l((_vm.actions),function(item,index){return _c('li',{key:index,style:({
            color: item.color
          }),on:{"click":function($event){$event.stopPropagation();_vm.actionClick(item)}}},[_vm._v("\n          "+_vm._s(item.text)+"\n        ")])}))]),_c('div',{staticClass:"c-actionsheet__cancel",on:{"click":function($event){$event.stopPropagation();return _vm.cancelClick($event)}}},[_vm._v("\n      "+_vm._s(_vm.cancelText)+"\n    ")])])])}
var actionsheetvue_type_template_id_067a883c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/actionsheet/index.vue?vue&type=template&id=067a883c

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/actionsheet/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var actionsheetvue_type_script_lang_js = ({
  name: 'cActionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    actionClick (item) {
      if (item.click) item.click()
      this._value = false
    },
    cancelClick () {
      this._value = false
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/components/actionsheet/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_actionsheetvue_type_script_lang_js = (actionsheetvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/actionsheet/index.vue





/* normalize component */

var actionsheet_component = normalizeComponent(
  components_actionsheetvue_type_script_lang_js,
  actionsheetvue_type_template_id_067a883c_render,
  actionsheetvue_type_template_id_067a883c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var actionsheet = (actionsheet_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/sidebar/index.vue?vue&type=template&id=34f687e0
var sidebarvue_type_template_id_34f687e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-sidebar",class:[
    {
      'c-sidebar__visible': _vm.visible
    }
  ]},[_vm._t("head"),_c('div',{staticClass:"c-sidebar__body"},[_vm._t("body")],2)],2)}
var sidebarvue_type_template_id_34f687e0_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/sidebar/index.vue?vue&type=template&id=34f687e0

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/sidebar/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var sidebarvue_type_script_lang_js = ({
  name: 'cSidebar',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
});

// CONCATENATED MODULE: ./packages/components/sidebar/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_sidebarvue_type_script_lang_js = (sidebarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/sidebar/index.vue





/* normalize component */

var sidebar_component = normalizeComponent(
  components_sidebarvue_type_script_lang_js,
  sidebarvue_type_template_id_34f687e0_render,
  sidebarvue_type_template_id_34f687e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sidebar = (sidebar_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/search/index.vue?vue&type=template&id=824d99d8
var searchvue_type_template_id_824d99d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"c-search",attrs:{"action":"","onsubmit":"return false;"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm._value),expression:"_value"}],ref:"search",staticClass:"c-search__input",attrs:{"type":"search","placeholder":_vm.placeholder},domProps:{"value":(_vm._value)},on:{"keyup":_vm.inputKeyup,"input":function($event){if($event.target.composing){ return; }_vm._value=$event.target.value}}}),(_vm._value)?_c('i',{staticClass:"c-search__cancel-button",on:{"click":_vm.deleteClick}},[_c('svg',{attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","width":"20","height":"20","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"fill":"#bbb","d":"M14.18 13.008l-3.008-3.008 3.008-3.008-1.172-1.172-3.008 3.008-3.008-3.008-1.172 1.172 3.008 3.008-3.008 3.008 1.172 1.172 3.008-3.008 3.008 3.008zM10 1.68c4.609 0 8.32 3.711 8.32 8.32s-3.711 8.32-8.32 8.32-8.32-3.711-8.32-8.32 3.711-8.32 8.32-8.32z"}})])]):_vm._e()])}
var searchvue_type_template_id_824d99d8_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/search/index.vue?vue&type=template&id=824d99d8

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/search/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var searchvue_type_script_lang_js = ({
  name: 'cSearch',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.autofocus && this.$refs.search.focus()
  },
  methods: {
    inputKeyup (keyCode) {
      if (keyCode.key === 'Enter') this.$emit('keyup-enter', this._value)
    },
    deleteClick () {
      this._value = ''
      this.$emit('delete')
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/components/search/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_searchvue_type_script_lang_js = (searchvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/search/index.vue





/* normalize component */

var search_component = normalizeComponent(
  components_searchvue_type_script_lang_js,
  searchvue_type_template_id_824d99d8_render,
  searchvue_type_template_id_824d99d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_search = (search_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/keyboard/index.vue?vue&type=template&id=69069a4f
var keyboardvue_type_template_id_69069a4f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"c-keyboard-transition"}},[(_vm._value)?_c('div',{staticClass:"c-keyboard"},[(_vm.description || _vm.doneText)?_c('div',{staticClass:"c-keyboard__done"},[_c('div',{staticClass:"c-keyboard__description"},[_vm._v(_vm._s(_vm.description))]),_c('div',{staticClass:"c-keyboard__done-btn",on:{"click":_vm.doneClick}},[_vm._v(_vm._s(_vm.doneText))])]):_vm._e(),_c('div',{staticClass:"c-keyboard__key-group"},[_c('c-keyboard-key',{attrs:{"text":"1"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"2"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"3"},on:{"click":_vm.handleClick}})],1),_c('div',{staticClass:"c-keyboard__key-group"},[_c('c-keyboard-key',{attrs:{"text":"4"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"5"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"6"},on:{"click":_vm.handleClick}})],1),_c('div',{staticClass:"c-keyboard__key-group"},[_c('c-keyboard-key',{attrs:{"text":"7"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"8"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"9"},on:{"click":_vm.handleClick}})],1),_c('div',{staticClass:"c-keyboard__key-group"},[_c('c-keyboard-key',{staticClass:"c-keyboard__key-gray",attrs:{"text":_vm._typeText},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{attrs:{"text":"0"},on:{"click":_vm.handleClick}}),_c('c-keyboard-key',{staticClass:"c-keyboard__key-gray c-keyboard__key-delete",on:{"click":_vm.handleDelete}})],1)]):_vm._e()])}
var keyboardvue_type_template_id_69069a4f_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/keyboard/index.vue?vue&type=template&id=69069a4f

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/keyboard/keyboard-key.vue?vue&type=template&id=5bf86de6
var keyboard_keyvue_type_template_id_5bf86de6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-keyboard__key",class:{
    'c-keyboard__key-active': _vm.active,
    'c-keyboard__key-empty': _vm.text === ''
  },on:{"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleClick($event)},"touchmove":_vm.handleBlur,"touchend":_vm.handleBlur,"touchcancel":_vm.handleBlur,"mousedown":_vm.handleClick,"mouseup":_vm.handleBlur}},[_vm._v("\n  "+_vm._s(_vm.text)+"\n  "),_c('i',{staticClass:"c-keyboard__border"})])}
var keyboard_keyvue_type_template_id_5bf86de6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/keyboard/keyboard-key.vue?vue&type=template&id=5bf86de6

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/keyboard/keyboard-key.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var keyboard_keyvue_type_script_lang_js = ({
  name: 'c-keyboard-key',
  props: {
    text: [String, Number]
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    handleClick () {
      if (this.text === '') return
      this.active = true
      this.$emit('click', this.text)
    },
    handleBlur () {
      this.active = false
    }
  }
});

// CONCATENATED MODULE: ./packages/components/keyboard/keyboard-key.vue?vue&type=script&lang=js
 /* harmony default export */ var keyboard_keyboard_keyvue_type_script_lang_js = (keyboard_keyvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/keyboard/keyboard-key.vue





/* normalize component */

var keyboard_key_component = normalizeComponent(
  keyboard_keyboard_keyvue_type_script_lang_js,
  keyboard_keyvue_type_template_id_5bf86de6_render,
  keyboard_keyvue_type_template_id_5bf86de6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var keyboard_key = (keyboard_key_component.exports);
// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/keyboard/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var keyboardvue_type_script_lang_js = ({
  name: 'cKeyboard',
  mounted () {
    if (typeof window.ontouchstart === 'undefined') {
      document.addEventListener('click', this.hideKeyboard, true)
    } else {
      document.addEventListener('touchstart', this.hideKeyboard, true)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'digit' // number，idcard，digit
    },
    description: {
      type: String,
      default: null
    },
    doneText: {
      type: String,
      default: null
    },
    allowHide: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick (value) {
      this.$emit('click', value)
    },
    handleDelete () {
      this.$emit('delete')
    },
    doneClick () {
      if (this.allowHide) {
        this._value = false
        this.$emit('hide')
      }
      this.$emit('done')
    },
    hideKeyboard (e) {
      if (
        this.allowHide &&
        this._value !== false &&
        e.target.className.indexOf('c-keyboard') === -1
      ) {
        this._value = false
        this.$emit('hide')
      }
    }
  },
  computed: {
    _typeText: {
      get () {
        if (this.type === 'number') {
          return ''
        } else if (this.type === 'idcard') {
          return 'X'
        } else {
          return '.'
        }
      }
    },
    _value: {
      get () {
        return this.allowHide ? this.value : true
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  components: {
    cKeyboardKey: keyboard_key
  },
  beforeDestroy () {
    if (typeof window.ontouchstart === 'undefined') {
      document.removeEventListener('click', this.hideKeyboard, true)
    } else {
      document.removeEventListener('touchstart', this.hideKeyboard, true)
    }
  }
});

// CONCATENATED MODULE: ./packages/components/keyboard/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_keyboardvue_type_script_lang_js = (keyboardvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/keyboard/index.vue





/* normalize component */

var keyboard_component = normalizeComponent(
  components_keyboardvue_type_script_lang_js,
  keyboardvue_type_template_id_69069a4f_render,
  keyboardvue_type_template_id_69069a4f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var keyboard = (keyboard_component.exports);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("i7/w");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/toast/src/index.vue?vue&type=template&id=6a57cbfa
var srcvue_type_template_id_6a57cbfa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"c-toast",on:{"click":_vm.handleClick}},[_c('div',{staticClass:"c-toast__content"},_vm._l((_vm.texts),function(item,index){return _c('p',{key:index},[_vm._v(_vm._s(item))])}))])}
var srcvue_type_template_id_6a57cbfa_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/toast/src/index.vue?vue&type=template&id=6a57cbfa

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/toast/src/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'cToast',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default: () => []
    },
    cb: {
      type: Function,
      default () {}
    }
  },
  methods: {
    handleClick () {
      this.cb()
    }
  }
});

// CONCATENATED MODULE: ./packages/components/toast/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var toast_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/toast/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  toast_srcvue_type_script_lang_js,
  srcvue_type_template_id_6a57cbfa_render,
  srcvue_type_template_id_6a57cbfa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/components/toast/index.js



/* harmony default export */ var toast = ((option = {}) => {
  if (
    typeof option === 'string' ||
    typeof option === 'number'
  ) {
    option = {
      texts: [option]
    }
  } else if (Array.isArray(option)) {
    option = {
      texts: option
    }
  } else if (
    typeof option.texts === 'string' ||
    typeof option.texts === 'number'
  ) {
    option.texts = [option.texts]
  }

  option = Object.assign({
    texts: [],
    duration: 2000,
    cb () {}
  }, option)

  const component = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    data () {
      return {
        timer: null,
        pageYOffset: null,
        visible: false
      }
    },
    render (h) {
      return h(src, {
        props: {
          texts: option.texts,
          cb: () => {
            clearTimeout(this.timer)
            this.hide()
          },
          visible: this.visible
        }
      })
    },
    methods: {
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
        option.cb()
      }
    },
    mounted () {
      this.show()
      this.timer = setTimeout(() => {
        this.hide()
      }, option.duration)
    }
  }).$mount()
  for (let _ of document.querySelectorAll('.c-toast')) _.remove()
  document.body.appendChild(component.$el)
});

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/confirm/src/index.vue?vue&type=template&id=3503b88a
var srcvue_type_template_id_3503b88a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-confirm"},[_c('div',{staticClass:"c-confirm__cell"},[_vm._v("\n    "+_vm._s(_vm.text)+"\n    "),_c('div',{staticClass:"c-confirm__btn-group"},[_c('div',{staticClass:"c-confirm__btn",style:({
          color: _vm.ok.color
        }),on:{"click":_vm.ok.click}},[_vm._v("\n        "+_vm._s(_vm.ok.text)+"\n      ")]),(_vm.cancel.text)?_c('div',{staticClass:"c-confirm__btn",style:({
          color: _vm.cancel.color
        }),on:{"click":_vm.cancel.click}},[_vm._v("\n        "+_vm._s(_vm.cancel.text)+"\n      ")]):_vm._e()])])])}
var srcvue_type_template_id_3503b88a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/confirm/src/index.vue?vue&type=template&id=3503b88a

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/confirm/src/index.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var confirm_srcvue_type_script_lang_js = ({
  name: 'cConfirm',
  props: {
    text: {
      type: String,
      default: null
    },
    cancel: {
      type: Object,
      default: null
    },
    ok: {
      type: Object,
      default: null
    }
  }
});

// CONCATENATED MODULE: ./packages/components/confirm/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_confirm_srcvue_type_script_lang_js = (confirm_srcvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/confirm/src/index.vue





/* normalize component */

var confirm_src_component = normalizeComponent(
  components_confirm_srcvue_type_script_lang_js,
  srcvue_type_template_id_3503b88a_render,
  srcvue_type_template_id_3503b88a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var confirm_src = (confirm_src_component.exports);
// CONCATENATED MODULE: ./packages/components/confirm/index.js



/* harmony default export */ var components_confirm = ((option = {}) => {
  option = Object.assign({
    text: '',
    ok: {
      text: 'OK',
      color: null,
      click () {}
    },
    cancel: {
      // text: 'Cancel',
      color: null,
      click () {}
    }
  }, option)

  const component = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
    render (h) {
      return h(confirm_src, {
        data () {
          return {
            pageYOffset: null
          }
        },
        props: {
          text: option.text,
          ok: {
            text: option.ok.text || 'OK',
            color: option.ok.color,
            click: () => {
              this.hide()
              if (option.ok.click) option.ok.click()
            }
          },
          cancel: {
            text: option.cancel.text,
            color: option.cancel.color,
            click: () => {
              this.hide()
              if (option.cancel.click) option.cancel.click()
            }
          }
        }
      })
    },
    methods: {
      show () {
        this.pageYOffset = window.pageYOffset
        let body = document.body
        body.style.height = '100%'
        body.style.width = '100%'
        body.style.overflow = 'hidden'
        body.style.position = 'fixed'
      },
      hide () {
        this.$el.remove()
        let body = document.body
        body.style.overflow = 'visible'
        body.style.position = 'static'
        window.scroll(0, this.pageYOffset)
      }
    },
    mounted () {
      this.show()
    }
  }).$mount()

  document.body.appendChild(component.$el)
});

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zhuning/Chooin/github/c-mobile/node_modules/.cache/vue-loader","cacheIdentifier":"78e6c7ec-vue-loader-template"}!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/loading/src/index.vue?vue&type=template&id=1279ea64
var srcvue_type_template_id_1279ea64_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var srcvue_type_template_id_1279ea64_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-loading"},[_c('i',{staticClass:"c-loading__loading"})])}]


// CONCATENATED MODULE: ./packages/components/loading/src/index.vue?vue&type=template&id=1279ea64

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./packages/components/loading/src/index.vue?vue&type=script&lang=js
//
//
//
//
//
//

/* harmony default export */ var loading_srcvue_type_script_lang_js = ({
  name: 'cLoading'
});

// CONCATENATED MODULE: ./packages/components/loading/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var components_loading_srcvue_type_script_lang_js = (loading_srcvue_type_script_lang_js); 
// CONCATENATED MODULE: ./packages/components/loading/src/index.vue





/* normalize component */

var loading_src_component = normalizeComponent(
  components_loading_srcvue_type_script_lang_js,
  srcvue_type_template_id_1279ea64_render,
  srcvue_type_template_id_1279ea64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading_src = (loading_src_component.exports);
// CONCATENATED MODULE: ./packages/components/loading/index.js



let loading_component

/* harmony default export */ var loading = ({
  show () {
    loading_component = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
      render (h) {
        return h(loading_src)
      }
    }).$mount()
    document.body.classList.add('c-mobile__is-loading')
    for (let _ of document.querySelectorAll('.c-loading')) _.remove()
    document.body.appendChild(loading_component.$el)
  },
  hide () {
    document.body.classList.remove('c-mobile__is-loading')
    for (let _ of document.querySelectorAll('.c-loading')) _.remove()
  }
});

// CONCATENATED MODULE: ./packages/index.js



















const components = [
  btn,
  flex,
  flex_item,
  ft,
  ft_item,
  header,
  icon,
  input_group,
  input,
  input_head,
  input_body,
  upload,
  upload_file,
  components_switch,
  tab,
  tab_item,
  tabbar,
  tabbar_item,
  components_text,
  actionsheet,
  sidebar,
  components_search,
  keyboard
]

const install = (Vue) => {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$Toast = toast
  Vue.prototype.$Confirm = components_confirm
  Vue.prototype.$Loading = loading
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = (Object.assign(components, {
  install
}));

// CONCATENATED MODULE: /Users/zhuning/.nvm/versions/node/v9.4.0/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "PimI":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "i7/w":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_i7_w__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.umd.js.map