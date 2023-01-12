import createMDX from "@next/mdx";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            remarkToc,
        ],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behaviour: 'append',
                    properties: {
                        ariaHidden: true,
                        tabIndex: -1,
                        className: 'hash-link',
                    }
                }
            ]
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