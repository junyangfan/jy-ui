import sidebar from "./config/sidebar"
import nav from "./config/nav"

export default {
  lang: 'zh-CN',
  title: 'jy-ui',
  description: '基于 Antd Design Vue 组件二次开发的组件库',
  base: '/jy-ui/',
  themeConfig: {
    nav,
    sidebar,
		siteTitle: 'jy-ui',
    author: 'FanJunyang',
    logo: '/logo.png',
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: "最近更新时间",
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
