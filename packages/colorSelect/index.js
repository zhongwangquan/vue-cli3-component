// 导入组件
import colorSelect from './src/colorSelect.vue'

// 为组件提供 install 安装方法，供按需引入
colorSelect.install = function (Vue) {
  Vue.component(colorSelect.name, colorSelect)
}

// 默认导出组件
export default colorSelect
