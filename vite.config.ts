import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置name属性
import viteCompression from 'vite-plugin-compression' // 静态资源压缩
import dts from 'vite-plugin-dts' // 类型声明文件
import postcssPresetEnv from 'postcss-preset-env'	// css样式兼容处理

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts(),
    vueSetupExtend(),
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10 * 1024, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './packages'),
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue',],
  },
	css: {
		postcss: {
			plugins: [postcssPresetEnv()]
		},
		preprocessorOptions: {
      less: {
				modifyVars: {},
        javascriptEnabled: true,
      },
    },
	},
  build: {
    outDir: 'lib',
		// assetsDir: 'assets',
		assetsInlineLimit: 8 * 1024, // 图片转base64的最大限制
    minify: 'terser',	//压缩
		terserOptions:{
			compress:{
				drop_console:true,	// 去除console
				drop_debugger: true, // 去除debugger
			}
		},
    lib: {
      entry: resolve(__dirname, './packages/index.ts'),
      name: 'jy-ui',
      fileName: (format) => `jy-ui.${format}.js`,
      // formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      // input: {
      //   main: resolve(__dirname, 'packages/index.ts'),
      //   utils: resolve(__dirname, 'packages/utils/index.ts'),
      // },
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
				// format: 'cjs',
      },
      // output: [
      //   {
      //     //打包格式
      //     format: "es",
      //     //打包后文件名
      //     entryFileNames: "[name].mjs",
      //     //让打包目录和我们目录对应
      //     preserveModules: true,
      //     exports: "named",
      //     //配置打包根目录
      //     dir: "./lib",
      //   },
      //   {
      //     //打包格式
      //     format: "cjs",
      //     //打包后文件名
      //     entryFileNames: "[name].js",
      //     //让打包目录和我们目录对应
      //     preserveModules: true,
      //     exports: "named",
      //     //配置打包根目录
      //     dir: "./lib",
      //   },
      // ]
    },
  }
})
