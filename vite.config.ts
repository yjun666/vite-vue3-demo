import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// 方法1
// import * as path from 'path';
// 方法2
import { resolve } from 'path';

console.log(resolve);

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	return defineConfig({
		plugins: [vue()],
		base: `${env.VITE_APP_BASE_BASE_PATH}`,
		build: {
			brotliSize: false,
			outDir: `${env.VITE_APP_BASE_OUTPUT_NAME}`,
			rollupOptions: {
				output: {
					chunkFileNames: "static/js/[name]-[hash].js",
					entryFileNames: "static/js/[name]-[hash].js",
					assetFileNames: "static/[ext]/[name]-[hash].[ext]",
					manualChunks(id) {
						// 分包
						if (id.includes("node_modules")) {
							return id
								.toString()
								.split("node_modules/")[1]
								.split("/")[0]
								.toString();
						}
					},
				},
			},
			terserOptions: {
				compress: {
					// warnings: false,
					drop_console: true, //打包时删除console
					drop_debugger: true, //打包时删除 debugger
					pure_funcs: ["console.log"],
				},
				output: {
					// 去掉注释内容
					comments: true,
				},
			},
		},
		resolve: {
			alias: {
				// 如何 __dirname 找不到 需要 yarn add @types/node --save-dev
				"@": resolve(__dirname, "src"), // 别名
			},
		},
		server: {
			open: true,
			port: 3005,
			host: "0.0.0.0", // 还要再package.json中也配置一下， 才能实现使用 ip 地址访问启动的服务
            proxy: {
                '/v1': {
                    target: 'http://127.0.0.1:8080',
                    changeOrigin: true
                },
            }
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
                    // 这样就能全局使用 src/assets/styles/base.less 定义的 变量
                    // additionalData:  `@import "${path.resolve(__dirname, 'src/assets/styles/base.less')}";`
				},
			},
		},
	});
};