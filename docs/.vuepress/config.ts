import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'



export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Kelearn学习秘籍',
  description: 'Kelearn学习官方文档',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    home: '/zh/chapter-1',
    // 默认主题配置
    base: '/zh',
    toggleDarkMode: 'toggle light mode'
  }),
})
