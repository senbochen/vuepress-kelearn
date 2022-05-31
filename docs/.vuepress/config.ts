import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
const path = require('path')
console.log(process.cwd())
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Kelearn学习秘籍',
  description: 'Kelearn学习官方文档',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  bundler: viteBundler({
    viteOptions: {
      build: {
        outDir: path.join(process.cwd(), '/dist')
      }
    },
    vuePluginOptions: {

    },
  }),
  theme: defaultTheme({
    home: '/',
    // 默认主题配置
    base: '/',
    sidebar: {
      '/': [
        {
          text: '第一章 心理学概述',
          link: '/chapter-1',
          collapsible: false,
        },
        {
          text: '第二章 变态心理学',
          link: '/chapter-2',
          collapsible: false,
        },

      ]
    },
    toggleDarkMode: 'toggle light mode'
  }),
})
