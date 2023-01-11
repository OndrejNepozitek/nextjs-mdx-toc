import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import createMDX from "@next/mdx";

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            remarkToc,
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings
        ]
    }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true
}

// Merge MDX config with Next.js config
export default withMDX(nextConfig);