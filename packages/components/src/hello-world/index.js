import HelloWorld from './src/hello-world';

HelloWorld.install = function install(Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
