/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true // GitHub Pages-д зургуудыг зөв харуулах
	},
	basePath: "/", // Репогийн нэрийг энд тавина
	assetPrefix: "/",
	reactStrictMode: true
};

module.exports = nextConfig;
