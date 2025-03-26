/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Static export горим
	basePath: "/about", // Repo-н нэртэй таарах ёстой
	assetPrefix: "/about/", // Статик файлууд зөв дуудагдах ёстой
	images: {
		unoptimized: true // GitHub Pages Next.js-ийн зураг оновчлолыг дэмждэггүй
	}
};

module.exports = nextConfig;
