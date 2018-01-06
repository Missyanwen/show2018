- 进来会返回Store、version、mapState、mapAction之类的对象

```
  var index = {
    Store: Store,
    install: install,
    version: '3.0.1',
    mapState: mapState,
    mapMutations: mapMutations,
    mapGetters: mapGetters,
    mapActions: mapActions,
    createNamespacedHelpers: createNamespacedHelpers
  };
```

- 全局定义了一些工具方法比如段言、循环、Promise方法

- vuex的核心就是一个Store对象
  
- 它定义dispatch、commit、watch这些原型方法

```
  Store.prototype.dispath = function() {}
  Store.prototype.commit = function() {}
  Store.prototype.watch = function() {}
```
- 在Store方法里面判断全局下是否有vue,如果有的话去区别版本来加载vuex

```
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  function install (_Vue) {
    if (Vue && _Vue === Vue) {
      {
        console.error(
          '[vuex] already installed. Vue.use(Vuex) should be called only once.'
        );
      }
      return
    }
    Vue = _Vue;
    applyMixin(Vue);
  }

  var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};
```
- 然后是把dispatc、commit指向自己接着执行installModule
