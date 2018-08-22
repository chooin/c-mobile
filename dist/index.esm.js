import Vue from 'vue';

/* eslint-disable */
var isBrowser = typeof window !== 'undefined';
var systemInfo;
if (!isBrowser) { systemInfo = wx && wx.getSystemInfoSync(); }
var isMiniProgram = !isBrowser && systemInfo;
var isMiniProgramIsIPhoneX = isMiniProgram && systemInfo.model.indexOf('iPhone X') > -1;

var device = {
  isBrowser: isBrowser,
  isMiniProgram: isMiniProgram,
  isMiniProgramIsIPhoneX: isMiniProgramIsIPhoneX
};

function getObjectType (v) { return Object.prototype.toString.call(v).slice(8, -1); }

var miniProgramTo = function (to) {
  var search = '';
  var uri;
  if (getObjectType(to) === 'String') {
    uri = to;
  } else if (
    getObjectType(to) === 'Object' &&
    to.path
  ) {
    uri = to.path;
  }
  if (
    getObjectType(to) === 'Object' &&
    getObjectType(to.query) === 'Object' &&
    Object.keys(to.query).length > 0
  ) {
    var querys = [];
    for (var i in to.query) {
      querys.push((i + "=" + (to.query[i])));
    }
    search = "?" + (querys.join('&'));
  }
  return ("" + uri + search)
};

/* eslint-disable */
function to (ref) {
  var vm = ref.vm;
  var to = ref.to;
  var replace = ref.replace;
  var success = ref.success;
  var fail = ref.fail;
  var complete = ref.complete;

  if (to) {
    if (isBrowser) { // 浏览器
      if (
        typeof to === 'string' &&
        to.indexOf('//') === 0
      ) { // 字符串
        to = to.indexOf('.') > -1
          ? to
          : to.substring(1);
        if (replace) {
          window.location.replace(to);
        } else {
          window.location.href = to;
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
            vm.$router.replace(to);
          } else {
            vm.$router.push(to);
          }
        } else { // 其他，如：拨打电话、发送邮件
          if (replace) {
            window.location.replace(to);
          } else {
            window.location.href = to;
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
        });
      } else {
        var url = miniProgramTo(to);
        success = success ? success : function () {};
        fail = fail ? fail : function () {};
        complete = complete ? complete : function () {};
        if (replace) {
          wx.redirectTo({
            url: url,
            success: success,
            fail: fail,
            complete: complete,
          });
        } else {
          wx.navigateTo({
            url: url,
            success: success,
            fail: fail,
            complete: complete,
          });
        }
      }
    }
  } else {
    vm.$emit('click');
  }
}

//

var script = {
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
  data: function data () {
    return {
      div: null,
      device: device
    }
  },
  mounted: function mounted () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (device.isBrowser) {
        if (document.querySelectorAll('.c-btn__suspend__cover').length === 0) {
          this.div = document.createElement('div');
          this.div.className = 'c-btn__suspend__cover';
          if (getObjectType(this.cover) === 'Number') {
            this.div.style.height = (this.cover) + "px";
          } else if (getObjectType(this.cover) === 'String') {
            this.div.style.height = this.cover;
          }
          document.body.appendChild(this.div);
        }
      }
    }
  },
  onReady: function onReady () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (this.device.isMiniProgram) ;
    }
  },
  methods: {
    handleClick: function handleClick () {
      if (this.disabled) { return }
      to({
        vm: this,
        to: this.to
      });
    }
  },
  beforeDestroy: function beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove();
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      staticClass: "c-btn",
      class: [
        _vm.type ? "c-btn__" + _vm.type : "",
        {
          "c-btn__o": _vm.o,
          "c-btn__disabled": _vm.disabled,
          "c-btn__suspend": _vm.suspend,
          "c-btn__small": _vm.small,
          "c-btn__icon": _vm.icon,
          "c-btn__is-miniprogram": _vm.device.isMiniProgram,
          "c-btn__is-miniprogram-is-iphonex": _vm.device.isMiniProgramIsIPhoneX
        }
      ],
      attrs: { type: "type" },
      on: { click: _vm.handleClick }
    },
    [
      _c(
        "span",
        { staticClass: "c-btn__text" },
        [_vm._t("default", [_vm._v(_vm._s(_vm.text))])],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/btn/btn.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Btn = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//

var script$1 = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to
      });
    }
  }
};

/* script */
            var __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-flex", on: { click: _vm.handleClick } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/flex/flex.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Flex = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

//

var script$2 = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to
      });
    }
  },
  computed: {
    gutter: {
      get: function get () {
        return this.$parent.gutter || 0
      }
    }
  }
};

/* script */
            var __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-flex-item",
      style: {
        flex: _vm.flex,
        margin: "0 " + _vm.gutter / 2 + "px"
      },
      on: { click: _vm.handleClick }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/flex/flex-item.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FlexItem = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  );

//
//
//
//
//
//

var script$3 = {
  name: 'cFt'
};

/* script */
            var __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-ft" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/ft/ft.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$3() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Ft = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$3,
    undefined
  );

//

var script$4 = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to
      });
    }
  }
};

/* script */
            var __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-ft-item",
      style: {
        width: _vm.width * 100 + "%"
      },
      on: { click: _vm.handleClick }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/ft/ft-item.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$4() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FtItem = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    __vue_create_injector__$4,
    undefined
  );

//

var script$5 = {
  name: 'cHeader',
  data: function data () {
    return {
      div: null,
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
      default: function () {}
    },
    title: {
      type: String,
      default: null
    },
    right: {
      type: Object,
      default: function () {}
    },
    noborderBottom: {
      type: Boolean,
      default: false
    },
    suspend: {
      type: Boolean,
      default: false
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    }
  },
  methods: {
    leftClick: function leftClick () {
      if (this._left.to) {
        to({
          vm: this,
          to: this._left.to
        });
      } else if (typeof this._left.click === 'function') {
        this._left.click();
      } else if (this._left.back) {
        this.$router.go(-1);
      }
    },
    rightClick: function rightClick () {
      if (this._right.to) {
        to({
          vm: this,
          to: this._right.to
        });
      } else if (typeof this._right.click === 'function') {
        this._right.click();
      }
    },
    closeClick: function closeClick () {
      if (typeof this._left.close === 'function') {
        this._left.close();
      }
    }
  },
  computed: {
    _left: {
      get: function get () {
        return Object.assign({
          text: null,
          to: null,
          color: null,
          back: false,
          close: null,
          click: null
        }, this.left)
      }
    },
    _right: {
      get: function get () {
        return Object.assign({
          text: null,
          to: null,
          color: null,
          click: function click () {}
        }, this.right)
      }
    }
  },
  created: function created () {
    var this$1 = this;

    if (this.autoTitle) {
      this.$nextTick(function () {
        this$1.defaultTitle = document.title;
      });
    }
  },
  mounted: function mounted () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (device.isBrowser) {
        if (document.querySelectorAll('.c-header__suspend__cover').length === 0) {
          this.div = document.createElement('div');
          this.div.className = 'c-header__suspend__cover';
          if (getObjectType(this.cover) === 'Number') {
            this.div.style.height = (this.cover) + "px";
          } else if (getObjectType(this.cover) === 'String') {
            this.div.style.height = this.cover;
          }
          document.body.insertBefore(this.div, document.body.firstChild);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove();
  }
};

/* script */
            var __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-header",
      class: [
        _vm.type ? "c-header__" + _vm.type : "",
        {
          "c-header__suspend": _vm.suspend,
          "c-header__noborder-bottom": _vm.noborderBottom
        }
      ]
    },
    [
      _vm.$slots.left
        ? _c("span", { staticClass: "c-header__left" }, [_vm._t("left")], 2)
        : _vm._left.text || _vm._left.back
          ? _c(
              "span",
              {
                staticClass: "c-header__left",
                class: {
                  "c-header__back": _vm._left.back
                },
                style: {
                  color: _vm._left.color
                },
                on: { click: _vm.leftClick }
              },
              [
                _vm._v(
                  "\n    " +
                    _vm._s(_vm._left.close ? "" : _vm._left.text) +
                    "\n  "
                )
              ]
            )
          : _vm._e(),
      _vm._v(" "),
      _vm._left.close
        ? _c(
            "span",
            { staticClass: "c-header__close", on: { click: _vm.closeClick } },
            [_c("i")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$slots.title
        ? _c("h1", [_vm._t("title")], 2)
        : _vm.title || _vm.defaultTitle
          ? _c("h1", [
              _vm._v(
                "\n    " +
                  _vm._s(
                    _vm.title === undefined || _vm.title === null
                      ? _vm.defaultTitle
                      : _vm.title
                  ) +
                  "\n  "
              )
            ])
          : _vm._e(),
      _vm._v(" "),
      _vm.$slots.right
        ? _c("span", { staticClass: "c-header__right" }, [_vm._t("right")], 2)
        : _vm._right.text
          ? _c(
              "span",
              {
                staticClass: "c-header__right",
                style: {
                  color: _vm._right.color
                },
                on: { click: _vm.rightClick }
              },
              [_vm._v("\n    " + _vm._s(_vm._right.text) + "\n  ")]
            )
          : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/header/header.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$5() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Header = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    __vue_create_injector__$5,
    undefined
  );

//

var script$6 = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to
      });
    }
  }
};

/* script */
            var __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i", {
    staticClass: "c-icon",
    class: [
      "icon-" + _vm.name,
      _vm.type ? "c-icon__" + _vm.type : "",
      {
        "c-icon__has-background": _vm.backgroundColor
      }
    ],
    style: {
      width: _vm.size,
      height: _vm.size,
      fontSize: _vm.size,
      backgroundColor: _vm.backgroundColor,
      color: _vm.color,
      borderRadius: _vm.borderRadius ? _vm.borderRadius : "3px"
    },
    on: { click: _vm.handleClick }
  })
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/icon/icon.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$6() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Icon = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    __vue_create_injector__$6,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
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
};

/* script */
            var __vue_script__$7 = script$7;
            
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-input-group" },
    [
      _vm.title
        ? _c(
            "c-text",
            {
              staticClass: "c-input-group__title",
              attrs: { type: _vm.type, block: "" }
            },
            [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "c-input-group__content",
          class: {
            noborder: _vm.noborder,
            "noborder-top": _vm.noborderTop,
            "noborder-bottom": _vm.noborderBottom
          }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* component normalizer */
  function __vue_normalize__$7(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-group.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$7() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputGroup = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    __vue_create_injector__$7,
    undefined
  );

//

var script$8 = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to
      });
    }
  }
};

/* script */
            var __vue_script__$8 = script$8;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.useDiv
    ? _c(
        "div",
        {
          staticClass: "c-input",
          class: [
            {
              "c-input__addon": _vm.addon,
              "c-input__next": _vm.next,
              "c-input__icon": _vm.icon,
              "c-input__checked": _vm.checked,
              "noborder-top": _vm.noborderTop
            }
          ],
          on: { touchstart: function() {}, click: _vm.handleClick }
        },
        [_vm._t("default")],
        2
      )
    : _c(
        "label",
        {
          staticClass: "c-input",
          class: [
            {
              "c-input__addon": _vm.addon,
              "c-input__next": _vm.next,
              "c-input__icon": _vm.icon,
              "c-input__checked": _vm.checked,
              "noborder-top": _vm.noborderTop
            }
          ],
          on: { touchstart: function() {}, click: _vm.handleClick }
        },
        [_vm._t("default")],
        2
      )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = undefined;
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* component normalizer */
  function __vue_normalize__$8(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$8() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$8.styles || (__vue_create_injector__$8.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Input = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    __vue_create_injector__$8,
    undefined
  );

//
//
//
//
//
//

var script$9 = {
  name: 'cInputHead',
  methods: {
    handleClick: function handleClick () {
      this.$emit('click');
    }
  }
};

/* script */
            var __vue_script__$9 = script$9;
            
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-input-head", on: { click: _vm.handleClick } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  var __vue_inject_styles__$9 = undefined;
  /* scoped */
  var __vue_scope_id__$9 = undefined;
  /* module identifier */
  var __vue_module_identifier__$9 = undefined;
  /* functional template */
  var __vue_is_functional_template__$9 = false;
  /* component normalizer */
  function __vue_normalize__$9(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-head.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$9() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$9.styles || (__vue_create_injector__$9.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputHead = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    __vue_create_injector__$9,
    undefined
  );

//
//
//
//
//
//

var script$a = {
  name: 'cInputBody',
  methods: {
    handleClick: function handleClick () {
      this.$emit('click');
    }
  }
};

/* script */
            var __vue_script__$a = script$a;
            
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "c-input-body", on: { click: _vm.handleClick } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  var __vue_inject_styles__$a = undefined;
  /* scoped */
  var __vue_scope_id__$a = undefined;
  /* module identifier */
  var __vue_module_identifier__$a = undefined;
  /* functional template */
  var __vue_is_functional_template__$a = false;
  /* component normalizer */
  function __vue_normalize__$a(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-body.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$a() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$a.styles || (__vue_create_injector__$a.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputBody = __vue_normalize__$a(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    __vue_create_injector__$a,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$b = {
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
    handleClick: function handleClick () {
      this.$emit('choose-image');
    },
    fileChange: function fileChange (file) {
      this.$emit('change', file);
    }
  }
};

/* script */
            var __vue_script__$b = script$b;
            
/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-input-upload",
      class: [
        {
          "noborder-top": _vm.noborderTop,
          "c-input-upload__allow-delete": _vm.allowDelete
        }
      ]
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.title,
              expression: "title"
            }
          ],
          staticClass: "c-input-upload__title"
        },
        [_vm._v(_vm._s(_vm.title))]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.amount,
              expression: "amount"
            }
          ],
          staticClass: "c-input-upload__amount"
        },
        [_vm._v(_vm._s(_vm.amount))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-input-upload__files" },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.allowUpload,
                  expression: "allowUpload"
                }
              ],
              staticClass: "c-input-upload__btn",
              on: { click: _vm.handleClick }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showUploadInput,
                    expression: "showUploadInput"
                  }
                ],
                attrs: { type: "file", accept: _vm.accept },
                on: { change: _vm.fileChange }
              })
            ]
          )
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  var __vue_inject_styles__$b = undefined;
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = undefined;
  /* functional template */
  var __vue_is_functional_template__$b = false;
  /* component normalizer */
  function __vue_normalize__$b(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-upload/upload.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$b() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$b.styles || (__vue_create_injector__$b.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputUpload = __vue_normalize__$b(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    __vue_create_injector__$b,
    undefined
  );

//
//
//
//
//
//
//
//
//
//

var script$c = {
  name: 'cInputUploadFile',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick: function handleClick () {
      this.$emit('click');
    },
    handleDeleteClick: function handleDeleteClick () {
      this.$emit('delete');
    }
  }
};

/* script */
            var __vue_script__$c = script$c;
            
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.src
    ? _c(
        "div",
        { staticClass: "c-input-upload-file", on: { click: _vm.handleClick } },
        [
          _c("img", { attrs: { src: _vm.src } }),
          _vm._v(" "),
          _c("i", {
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.handleDeleteClick($event)
              }
            }
          })
        ]
      )
    : _vm._e()
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  var __vue_inject_styles__$c = undefined;
  /* scoped */
  var __vue_scope_id__$c = undefined;
  /* module identifier */
  var __vue_module_identifier__$c = undefined;
  /* functional template */
  var __vue_is_functional_template__$c = false;
  /* component normalizer */
  function __vue_normalize__$c(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/input-group/input-upload/upload-file.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$c() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$c.styles || (__vue_create_injector__$c.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var InputUploadFile = __vue_normalize__$c(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    __vue_create_injector__$c,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$d = {
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
    onClick: function onClick () {
      var this$1 = this;

      if (this.disabled) { return }
      if (
        this._events &&
        this._events['before-change'] &&
        this._events['before-change'][0]
      ) {
        this._events['before-change'][0](function () {
          this$1.$emit('input', !this$1.value);
        });
      } else {
        this.$emit('input', !this.value);
      }
    }
  },
  computed: {
    _value: {
      get: function get () {
        return this.value
      }
    }
  }
};

/* script */
            var __vue_script__$d = script$d;
            
/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-switch",
      class: [
        _vm.type ? "c-switch__" + _vm.type : "",
        {
          "c-switch__disabled": _vm.disabled,
          "c-switch__checked": _vm._value
        }
      ],
      on: { click: _vm.onClick }
    },
    [_c("span", { staticClass: "c-switch__core" })]
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  var __vue_inject_styles__$d = undefined;
  /* scoped */
  var __vue_scope_id__$d = undefined;
  /* module identifier */
  var __vue_module_identifier__$d = undefined;
  /* functional template */
  var __vue_is_functional_template__$d = false;
  /* component normalizer */
  function __vue_normalize__$d(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/switch/switch.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$d() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$d.styles || (__vue_create_injector__$d.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Switch = __vue_normalize__$d(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    __vue_create_injector__$d,
    undefined
  );

//

var script$e = {
  name: 'cTab',
  props: {
    type: {
      type: String,
      default: ''
    },
    suspend: {
      type: Boolean,
      default: false
    },
    cover: {
      type: [Boolean, Number, String],
      default: true
    }
  },
  mounted: function mounted () {
    if (
      this.cover !== false &&
      this.suspend
    ) {
      if (device.isBrowser) {
        if (document.querySelectorAll('.c-tab__suspend__cover').length === 0) {
          this.div = document.createElement('div');
          this.div.className = 'c-tab__suspend__cover';
          if (getObjectType(this.cover) === 'Number') {
            this.div.style.height = (this.cover) + "px";
          } else if (getObjectType(this.cover) === 'String') {
            this.div.style.height = this.cover;
          }
          document.body.insertBefore(this.div, document.body.firstChild);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    this.suspend && this.cover && this.div && this.div.remove();
  }
};

/* script */
            var __vue_script__$e = script$e;
            
/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-tab",
      class: [
        _vm.type ? "c-tab__" + _vm.type : "",
        {
          "c-tab__suspend": _vm.suspend
        }
      ]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  var __vue_inject_styles__$e = undefined;
  /* scoped */
  var __vue_scope_id__$e = undefined;
  /* module identifier */
  var __vue_module_identifier__$e = undefined;
  /* functional template */
  var __vue_is_functional_template__$e = false;
  /* component normalizer */
  function __vue_normalize__$e(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/tab/tab.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$e() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$e.styles || (__vue_create_injector__$e.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Tab = __vue_normalize__$e(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    __vue_create_injector__$e,
    undefined
  );

//

var script$f = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to,
        replace: true
      });
    }
  }
};

/* script */
            var __vue_script__$f = script$f;
            
/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      staticClass: "c-tab-item",
      class: {
        "c-tab__current": _vm.current
      },
      on: { click: _vm.handleClick }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  var __vue_inject_styles__$f = undefined;
  /* scoped */
  var __vue_scope_id__$f = undefined;
  /* module identifier */
  var __vue_module_identifier__$f = undefined;
  /* functional template */
  var __vue_is_functional_template__$f = false;
  /* component normalizer */
  function __vue_normalize__$f(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/tab/tab-item.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$f() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$f.styles || (__vue_create_injector__$f.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var TabItem = __vue_normalize__$f(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    __vue_create_injector__$f,
    undefined
  );

//

var script$g = {
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
  data: function data () {
    return {
      div: null
    }
  },
  mounted: function mounted () {
    if (
      this.cover !== false &&
      document.querySelectorAll('.c-tabbar__cover').length === 0
    ) {
      this.div = document.createElement('div');
      this.div.className = 'c-tabbar__cover';
      if (getObjectType(this.cover) === 'Number') {
        this.div.style.height = (this.cover) + "px";
      } else if (getObjectType(this.cover) === 'String') {
        this.div.style.height = this.cover;
      }
      document.body.appendChild(this.div);
    }
  },
  beforeDestroy: function beforeDestroy () {
    this.div && this.div.remove();
  }
};

/* script */
            var __vue_script__$g = script$g;
            
/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-tabbar",
      class: [_vm.type ? "c-tabbar__" + _vm.type : ""]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  var __vue_inject_styles__$g = undefined;
  /* scoped */
  var __vue_scope_id__$g = undefined;
  /* module identifier */
  var __vue_module_identifier__$g = undefined;
  /* functional template */
  var __vue_is_functional_template__$g = false;
  /* component normalizer */
  function __vue_normalize__$g(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/tabbar/tabbar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$g() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$g.styles || (__vue_create_injector__$g.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Tabbar = __vue_normalize__$g(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    __vue_create_injector__$g,
    undefined
  );

//

var script$h = {
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
    handleClick: function handleClick () {
      to({
        vm: this,
        to: this.to
      });
    }
  }
};

/* script */
            var __vue_script__$h = script$h;
            
/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      staticClass: "c-tabbar-item",
      class: {
        "c-tabbar__current": _vm.current
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm._t("default", [
        _c("c-icon", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.icon,
              expression: "icon"
            }
          ],
          attrs: { name: _vm.icon }
        }),
        _vm._v(" "),
        _c(
          "c-text",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.text,
                expression: "text"
              }
            ]
          },
          [_vm._v(_vm._s(_vm.text))]
        )
      ]),
      _vm._v(" "),
      _c(
        "b",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.badge,
              expression: "badge"
            }
          ]
        },
        [_vm._v(_vm._s(_vm.badge))]
      )
    ],
    2
  )
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  var __vue_inject_styles__$h = undefined;
  /* scoped */
  var __vue_scope_id__$h = undefined;
  /* module identifier */
  var __vue_module_identifier__$h = undefined;
  /* functional template */
  var __vue_is_functional_template__$h = false;
  /* component normalizer */
  function __vue_normalize__$h(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/tabbar/tabbar-item.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$h() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$h.styles || (__vue_create_injector__$h.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var TabbarItem = __vue_normalize__$h(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    __vue_create_injector__$h,
    undefined
  );

//

var script$i = {
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
    handleClick: function handleClick () {
      if (this.disabled) { return }
      to({
        vm: this,
        to: this.to
      });
    }
  },
  computed: {
    _fontSize: function _fontSize () {
      if (this.fontSize) {
        if (isNaN(this.fontSize)) {
          return this.fontSize
        } else {
          return ((this.fontSize) + "px")
        }
      } else {
        return null
      }
    }
  }
};

/* script */
            var __vue_script__$i = script$i;
            
/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      staticClass: "c-text",
      class: [
        _vm.type ? "c-text__" + _vm.type : "",
        _vm.align ? "c-text__" + _vm.align : "",
        {
          "c-text__light": _vm.light,
          "c-text__block": _vm.block,
          "c-text__cursor": _vm.cursor,
          "c-text__empty":
            _vm.text ||
            (_vm.$slots.default &&
              _vm.$slots.default[0] &&
              _vm.$slots.default[0].text) === null ||
            (_vm.$slots.default &&
              _vm.$slots.default[0] &&
              _vm.$slots.default[0].text) === undefined ||
            (_vm.$slots.default &&
              _vm.$slots.default[0] &&
              _vm.$slots.default[0].text) === "",
          "c-text__placeholder":
            _vm.placeholder !== undefined &&
            _vm.placeholder !== null &&
            (_vm.text ||
              (_vm.$slots.default &&
                _vm.$slots.default[0] &&
                _vm.$slots.default[0].text) === null ||
              (_vm.$slots.default &&
                _vm.$slots.default[0] &&
                _vm.$slots.default[0].text) === undefined ||
              (_vm.$slots.default &&
                _vm.$slots.default[0] &&
                _vm.$slots.default[0].text) === "")
        }
      ],
      style: {
        fontFamily: _vm.fontFamily,
        fontSize: _vm._fontSize
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm.placeholder !== undefined &&
      _vm.placeholder !== null &&
      (_vm.text ||
        (_vm.$slots.default &&
          _vm.$slots.default[0] &&
          _vm.$slots.default[0].text) === null ||
        (_vm.$slots.default &&
          _vm.$slots.default[0] &&
          _vm.$slots.default[0].text) === undefined ||
        (_vm.$slots.default &&
          _vm.$slots.default[0] &&
          _vm.$slots.default[0].text) === "")
        ? [_vm._v("\n    " + _vm._s(_vm.placeholder) + "\n  ")]
        : _c(
            "span",
            { staticClass: "c-text__content" },
            [_vm._t("default", [_vm._v(_vm._s(_vm.text))])],
            2
          )
    ],
    2
  )
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  var __vue_inject_styles__$i = undefined;
  /* scoped */
  var __vue_scope_id__$i = undefined;
  /* module identifier */
  var __vue_module_identifier__$i = undefined;
  /* functional template */
  var __vue_is_functional_template__$i = false;
  /* component normalizer */
  function __vue_normalize__$i(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/text/text.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$i() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$i.styles || (__vue_create_injector__$i.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Text = __vue_normalize__$i(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    __vue_create_injector__$i,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$j = {
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
      default: function () { return []; }
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
    actionClick: function actionClick (item) {
      if (item.click) { item.click(); }
      this._value = false;
    },
    cancelClick: function cancelClick () {
      this._value = false;
    }
  },
  computed: {
    _value: {
      get: function get () {
        return this.value
      },
      set: function set (value) {
        this.$emit('input', value);
      }
    }
  }
};

/* script */
            var __vue_script__$j = script$j;
            
/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-actionsheet",
      class: {
        "c-actionsheet__visible": _vm.value,
        "c-actionsheet__has-title": _vm.title || _vm.description,
        "c-actionsheet__actions-empty":
          Array.isArray(_vm.actions) && _vm.actions.length === 0
      },
      on: { click: _vm.cancelClick }
    },
    [
      _c("div", { staticClass: "c-actionsheet__content" }, [
        _c(
          "div",
          {
            staticClass: "c-actionsheet__header",
            on: {
              click: function($event) {
                $event.stopPropagation();
                return (function() {})($event)
              }
            }
          },
          [
            _vm.title
              ? _c("h5", { staticClass: "c-actionsheet__title" }, [
                  _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.description
              ? _c("p", { staticClass: "c-actionsheet__description" }, [
                  _vm._v("\n        " + _vm._s(_vm.description) + "\n      ")
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "c-actionsheet__actions" }, [
          _c(
            "ul",
            _vm._l(_vm.actions, function(item, index) {
              return _c(
                "li",
                {
                  key: index,
                  style: {
                    color: item.color
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation();
                      _vm.actionClick(item);
                    }
                  }
                },
                [_vm._v("\n          " + _vm._s(item.text) + "\n        ")]
              )
            })
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "c-actionsheet__cancel",
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.cancelClick($event)
              }
            }
          },
          [_vm._v("\n      " + _vm._s(_vm.cancelText) + "\n    ")]
        )
      ])
    ]
  )
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  var __vue_inject_styles__$j = undefined;
  /* scoped */
  var __vue_scope_id__$j = undefined;
  /* module identifier */
  var __vue_module_identifier__$j = undefined;
  /* functional template */
  var __vue_is_functional_template__$j = false;
  /* component normalizer */
  function __vue_normalize__$j(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/actionsheet/actionsheet.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$j() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$j.styles || (__vue_create_injector__$j.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Actionsheet = __vue_normalize__$j(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    __vue_create_injector__$j,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$k = {
  name: 'cSidebar',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
            var __vue_script__$k = script$k;
            
/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-sidebar",
      class: [
        {
          "c-sidebar__visible": _vm.visible
        }
      ]
    },
    [
      _vm._t("head"),
      _vm._v(" "),
      _c("div", { staticClass: "c-sidebar__body" }, [_vm._t("body")], 2)
    ],
    2
  )
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  var __vue_inject_styles__$k = undefined;
  /* scoped */
  var __vue_scope_id__$k = undefined;
  /* module identifier */
  var __vue_module_identifier__$k = undefined;
  /* functional template */
  var __vue_is_functional_template__$k = false;
  /* component normalizer */
  function __vue_normalize__$k(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/sidebar/sidebar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$k() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$k.styles || (__vue_create_injector__$k.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Sidebar = __vue_normalize__$k(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    __vue_create_injector__$k,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$l = {
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
  mounted: function mounted () {
    this.autofocus && this.$refs.search.focus();
  },
  methods: {
    inputKeyup: function inputKeyup (keyCode) {
      if (keyCode.key === 'Enter') { this.$emit('keyup-enter', this._value); }
    },
    deleteClick: function deleteClick () {
      this._value = '';
      this.$emit('delete');
    }
  },
  computed: {
    _value: {
      get: function get () {
        return this.value
      },
      set: function set (value) {
        this.$emit('input', value);
      }
    }
  }
};

/* script */
            var __vue_script__$l = script$l;
            
/* template */
var __vue_render__$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      staticClass: "c-search",
      attrs: { action: "", onsubmit: "return false;" }
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm._value,
            expression: "_value"
          }
        ],
        ref: "search",
        staticClass: "c-search__input",
        attrs: { type: "search", placeholder: _vm.placeholder },
        domProps: { value: _vm._value },
        on: {
          keyup: _vm.inputKeyup,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm._value = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _vm._value
        ? _c(
            "i",
            {
              staticClass: "c-search__cancel-button",
              on: { click: _vm.deleteClick }
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      fill: "#bbb",
                      d:
                        "M14.18 13.008l-3.008-3.008 3.008-3.008-1.172-1.172-3.008 3.008-3.008-3.008-1.172 1.172 3.008 3.008-3.008 3.008 1.172 1.172 3.008-3.008 3.008 3.008zM10 1.68c4.609 0 8.32 3.711 8.32 8.32s-3.711 8.32-8.32 8.32-8.32-3.711-8.32-8.32 3.711-8.32 8.32-8.32z"
                    }
                  })
                ]
              )
            ]
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  var __vue_inject_styles__$l = undefined;
  /* scoped */
  var __vue_scope_id__$l = undefined;
  /* module identifier */
  var __vue_module_identifier__$l = undefined;
  /* functional template */
  var __vue_is_functional_template__$l = false;
  /* component normalizer */
  function __vue_normalize__$l(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/search/search.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$l() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$l.styles || (__vue_create_injector__$l.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Search = __vue_normalize__$l(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    __vue_create_injector__$l,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$m = {
  name: 'c-keyboard-key',
  props: {
    text: [String, Number]
  },
  data: function data() {
    return {
      active: false
    }
  },
  methods: {
    handleClick: function handleClick () {
      if (this.text === '') { return }
      this.active = true;
      this.$emit('click', this.text);
    },
    handleBlur: function handleBlur () {
      this.active = false;
    }
  }
};

/* script */
            var __vue_script__$m = script$m;
            
/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-keyboard__key",
      class: {
        "c-keyboard__key-active": _vm.active,
        "c-keyboard__key-empty": _vm.text === ""
      },
      on: {
        touchstart: function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.handleClick($event)
        },
        touchmove: _vm.handleBlur,
        touchend: _vm.handleBlur,
        touchcancel: _vm.handleBlur,
        mousedown: _vm.handleClick,
        mouseup: _vm.handleBlur
      }
    },
    [
      _vm._v("\n  " + _vm._s(_vm.text) + "\n  "),
      _c("i", { staticClass: "c-keyboard__border" })
    ]
  )
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  var __vue_inject_styles__$m = undefined;
  /* scoped */
  var __vue_scope_id__$m = undefined;
  /* module identifier */
  var __vue_module_identifier__$m = undefined;
  /* functional template */
  var __vue_is_functional_template__$m = false;
  /* component normalizer */
  function __vue_normalize__$m(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/keyboard/keyboard-key.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$m() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$m.styles || (__vue_create_injector__$m.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var cKeyboardKey = __vue_normalize__$m(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    __vue_create_injector__$m,
    undefined
  );

//

var script$n = {
  name: 'cKeyboard',
  mounted: function mounted () {
    if (typeof window.ontouchstart === 'undefined') {
      document.addEventListener('click', this.hideKeyboard, true);
    } else {
      document.addEventListener('touchstart', this.hideKeyboard, true);
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
    handleClick: function handleClick (value) {
      this.$emit('click', value);
    },
    handleDelete: function handleDelete () {
      this.$emit('delete');
    },
    doneClick: function doneClick () {
      if (this.allowHide) {
        this._value = false;
        this.$emit('hide');
      }
      this.$emit('done');
    },
    hideKeyboard: function hideKeyboard (e) {
      if (
        this.allowHide &&
        this._value !== false &&
        e.target.className.indexOf('c-keyboard') === -1
      ) {
        this._value = false;
        this.$emit('hide');
      }
    }
  },
  computed: {
    _typeText: {
      get: function get () {
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
      get: function get () {
        return this.allowHide ? this.value : true
      },
      set: function set (value) {
        this.$emit('input', value);
      }
    }
  },
  components: {
    cKeyboardKey: cKeyboardKey
  },
  beforeDestroy: function beforeDestroy () {
    if (typeof window.ontouchstart === 'undefined') {
      document.removeEventListener('click', this.hideKeyboard, true);
    } else {
      document.removeEventListener('touchstart', this.hideKeyboard, true);
    }
  }
};

/* script */
            var __vue_script__$n = script$n;
            
/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "c-keyboard-transition" } }, [
    _vm._value
      ? _c("div", { staticClass: "c-keyboard" }, [
          _vm.description || _vm.doneText
            ? _c("div", { staticClass: "c-keyboard__done" }, [
                _c("div", { staticClass: "c-keyboard__description" }, [
                  _vm._v(_vm._s(_vm.description))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "c-keyboard__done-btn",
                    on: { click: _vm.doneClick }
                  },
                  [_vm._v(_vm._s(_vm.doneText))]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-keyboard__key-group" },
            [
              _c("c-keyboard-key", {
                attrs: { text: "1" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "2" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "3" },
                on: { click: _vm.handleClick }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-keyboard__key-group" },
            [
              _c("c-keyboard-key", {
                attrs: { text: "4" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "5" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "6" },
                on: { click: _vm.handleClick }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-keyboard__key-group" },
            [
              _c("c-keyboard-key", {
                attrs: { text: "7" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "8" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "9" },
                on: { click: _vm.handleClick }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "c-keyboard__key-group" },
            [
              _c("c-keyboard-key", {
                staticClass: "c-keyboard__key-gray",
                attrs: { text: _vm._typeText },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                attrs: { text: "0" },
                on: { click: _vm.handleClick }
              }),
              _vm._v(" "),
              _c("c-keyboard-key", {
                staticClass: "c-keyboard__key-gray c-keyboard__key-delete",
                on: { click: _vm.handleDelete }
              })
            ],
            1
          )
        ])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  var __vue_inject_styles__$n = undefined;
  /* scoped */
  var __vue_scope_id__$n = undefined;
  /* module identifier */
  var __vue_module_identifier__$n = undefined;
  /* functional template */
  var __vue_is_functional_template__$n = false;
  /* component normalizer */
  function __vue_normalize__$n(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/keyboard/keyboard.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$n() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$n.styles || (__vue_create_injector__$n.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Keyboard = __vue_normalize__$n(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    __vue_create_injector__$n,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$o = {
  name: 'cToast',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default: function () { return []; }
    },
    cb: {
      type: Function,
      default: function default$1 () {}
    }
  },
  methods: {
    handleClick: function handleClick () {
      this.cb();
    }
  }
};

/* script */
            var __vue_script__$o = script$o;
            
/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "c-toast",
      on: { click: _vm.handleClick }
    },
    [
      _c(
        "div",
        { staticClass: "c-toast__content" },
        _vm._l(_vm.texts, function(item, index) {
          return _c("p", { key: index }, [_vm._v(_vm._s(item))])
        })
      )
    ]
  )
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  var __vue_inject_styles__$o = undefined;
  /* scoped */
  var __vue_scope_id__$o = undefined;
  /* module identifier */
  var __vue_module_identifier__$o = undefined;
  /* functional template */
  var __vue_is_functional_template__$o = false;
  /* component normalizer */
  function __vue_normalize__$o(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/toast/toast.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$o() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$o.styles || (__vue_create_injector__$o.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Toast = __vue_normalize__$o(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    __vue_create_injector__$o,
    undefined
  );

function Toast$1 (option) {
  if ( option === void 0 ) option = {};

  if (
    typeof option === 'string' ||
    typeof option === 'number'
  ) {
    option = {
      texts: [option]
    };
  } else if (Array.isArray(option)) {
    option = {
      texts: option
    };
  } else if (
    typeof option.texts === 'string' ||
    typeof option.texts === 'number'
  ) {
    option.texts = [option.texts];
  }

  option = Object.assign({
    texts: [],
    duration: 2000,
    cb: function cb () {}
  }, option);

  var component = new Vue({
    data: function data () {
      return {
        timer: null,
        pageYOffset: null,
        visible: false
      }
    },
    render: function render (h) {
      var this$1 = this;

      return h(Toast, {
        props: {
          texts: option.texts,
          cb: function () {
            clearTimeout(this$1.timer);
            this$1.hide();
          },
          visible: this.visible
        }
      })
    },
    methods: {
      show: function show () {
        this.visible = true;
      },
      hide: function hide () {
        this.visible = false;
        option.cb();
      }
    },
    mounted: function mounted () {
      var this$1 = this;

      this.show();
      this.timer = setTimeout(function () {
        this$1.hide();
      }, option.duration);
    }
  }).$mount();
  var nodeList = document.querySelectorAll('.c-toast');
  for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].remove();
  }
  document.body.appendChild(component.$el);
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$p = {
  name: 'cConfirm',
  props: {
    title: {
      type: String,
      default: null
    },
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
};

/* script */
            var __vue_script__$p = script$p;
            
/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "c-confirm",
      class: {
        "c-confirm__has-title": _vm.title
      }
    },
    [
      _c("div", { staticClass: "c-confirm__cell" }, [
        _vm.title
          ? _c("div", { staticClass: "c-confirm__title" }, [
              _vm._v("\n      " + _vm._s(_vm.title) + "\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "c-confirm__content" }, [
          _vm._v("\n      " + _vm._s(_vm.text) + "\n    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "c-confirm__btn-group" }, [
          _c(
            "div",
            {
              staticClass: "c-confirm__btn",
              style: {
                color: _vm.ok.color
              },
              on: { click: _vm.ok.click }
            },
            [_vm._v("\n        " + _vm._s(_vm.ok.text) + "\n      ")]
          ),
          _vm._v(" "),
          _vm.cancel.text
            ? _c(
                "div",
                {
                  staticClass: "c-confirm__btn",
                  style: {
                    color: _vm.cancel.color
                  },
                  on: { click: _vm.cancel.click }
                },
                [_vm._v("\n        " + _vm._s(_vm.cancel.text) + "\n      ")]
              )
            : _vm._e()
        ])
      ])
    ]
  )
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  var __vue_inject_styles__$p = undefined;
  /* scoped */
  var __vue_scope_id__$p = undefined;
  /* module identifier */
  var __vue_module_identifier__$p = undefined;
  /* functional template */
  var __vue_is_functional_template__$p = false;
  /* component normalizer */
  function __vue_normalize__$p(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/confirm/confirm.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$p() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$p.styles || (__vue_create_injector__$p.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Confirm = __vue_normalize__$p(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    __vue_create_injector__$p,
    undefined
  );

function Confirm$1 (option) {
  if ( option === void 0 ) option = {};

  option = Object.assign({
    title: '',
    text: '',
    ok: {
      text: 'OK',
      color: null,
      click: function click () {}
    },
    cancel: {
      // text: 'Cancel',
      color: null,
      click: function click () {}
    }
  }, option);

  var component = new Vue({
    render: function render (h) {
      var this$1 = this;

      return h(Confirm, {
        data: function data () {
          return {
            pageYOffset: null
          }
        },
        props: {
          title: option.title,
          text: option.text,
          ok: {
            text: option.ok.text || 'OK',
            color: option.ok.color,
            click: function () {
              this$1.hide();
              if (option.ok.click) { option.ok.click(); }
            }
          },
          cancel: {
            text: option.cancel.text,
            color: option.cancel.color,
            click: function () {
              this$1.hide();
              if (option.cancel.click) { option.cancel.click(); }
            }
          }
        }
      })
    },
    methods: {
      show: function show () {
        this.pageYOffset = window.pageYOffset;
        var body = document.body;
        body.style.height = '100%';
        body.style.width = '100%';
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
      },
      hide: function hide () {
        this.$el.remove();
        var body = document.body;
        body.style.overflow = 'visible';
        body.style.position = 'static';
        window.scroll(0, this.pageYOffset);
      }
    },
    mounted: function mounted () {
      this.show();
    }
  }).$mount();

  document.body.appendChild(component.$el);
}

//
//
//
//
//
//

var script$q = {
  name: 'cLoading'
};

/* script */
            var __vue_script__$q = script$q;
            
/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__$q = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "c-loading" }, [
      _c("i", { staticClass: "c-loading__loading" })
    ])
  }
];
__vue_render__$q._withStripped = true;

  /* style */
  var __vue_inject_styles__$q = undefined;
  /* scoped */
  var __vue_scope_id__$q = undefined;
  /* module identifier */
  var __vue_module_identifier__$q = undefined;
  /* functional template */
  var __vue_is_functional_template__$q = false;
  /* component normalizer */
  function __vue_normalize__$q(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/zhuning/Chooin/github/c-mobile/packages/components/loading/loading.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$q() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$q.styles || (__vue_create_injector__$q.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Loading = __vue_normalize__$q(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    __vue_create_injector__$q,
    undefined
  );

var component;

var Loading$1 = {
  show: function show () {
    component = new Vue({
      render: function render (h) {
        return h(Loading)
      }
    }).$mount();
    document.body.classList.add('c-mobile__is-loading');
    var nodeList = document.querySelectorAll('.c-loading');
    for (var i = 0; i < nodeList.length; ++i) {
      nodeList[i].remove();
    }
    document.body.appendChild(component.$el);
  },
  hide: function hide () {
    document.body.classList.remove('c-mobile__is-loading');
    var nodeList = document.querySelectorAll('.c-loading');
    for (var i = 0; i < nodeList.length; ++i) {
      nodeList[i].remove();
    }
  }
};

var components = [
  Btn,
  Flex,
  FlexItem,
  Ft,
  FtItem,
  Header,
  Icon,
  InputGroup,
  Input,
  InputHead,
  InputBody,
  InputUpload,
  InputUploadFile,
  Switch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Text,
  Actionsheet,
  Sidebar,
  Search,
  Keyboard
];

var install = function (Vue$$1) {
  if (install.installed) {
    return
  } else {
    install.installed = true;
  }

  components.map(function (component) {
    Vue$$1.component(component.name, component);
  });

  Vue$$1.prototype.$Toast = Toast$1;
  Vue$$1.prototype.$Confirm = Confirm$1;
  Vue$$1.prototype.$Loading = Loading$1;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = Object.assign(components, {
  install: install
});

export default index;
