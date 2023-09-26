import sidebar from "./config/sidebar"
import nav from "./config/nav"

export default {
  lang: 'zh-CN',
  title: 'jy-ui',
  description: '基于 Antd Design Vue 组件二次开发的组件库',
  base: '/',
  themeConfig: {
    nav,
    sidebar,
		siteTitle: 'jy-ui',
    author: 'FanJunyang',
    logo: '/logo.png',
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: [],
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
  },
}
