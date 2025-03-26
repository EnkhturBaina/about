/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true // GitHub Pages-д зургуудыг зөв харуулах
	},
	basePath: "/about", // Репогийн нэрийг энд тавина
	assetPrefix: "/about/",
	reactStrictMode: true
};

module.exports = nextConfig;
