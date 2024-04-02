import { BlogsData } from "@src/data/data"

export default function sitemap() {


    const blogEntries = BlogsData.map((item) => {
        return { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${item.id}`, lastModified: new Date(), changeFrequency: "monthly", }

    })


    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/get-franchise`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
            lastModified: new Date()
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-products`,
            lastModified: new Date()
        },
        ...blogEntries
    ]
}