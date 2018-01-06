- 进来会返回Store、version、mapState、mapAction之类的对象
···
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
···

- 全局定义了一些工具方法比如段言、循环、Promise方法

- vuex的核心就是一个Store对象
 > 它定义dispatch、commit、watch这些原型方法
 > 在Store方法里面判断全局下是否有vue,有的话
 > 然后是把dispatc、commit指向自己接着执行installModule