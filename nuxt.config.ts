// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwincss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	modules: ["@nuxt/eslint", "@nuxt/icon"],
	eslint: {
		config: {
			standalone: false,
		},
	},
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwincss()],
	},
})
