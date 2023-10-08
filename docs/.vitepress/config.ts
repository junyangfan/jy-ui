import sidebar from "./config/sidebar"
import nav from "./config/nav"
import { resolve } from 'path'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

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
    headers: {
      level: [0, 0],
    },
    // 代码块显示行号
    lineNumbers: true,
		config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
	lastUpdated: true,
	vite: {
		resolve: {
			alias: {
				'@': resolve(__dirname, '../../packages'),
			},
		},
	}
}
