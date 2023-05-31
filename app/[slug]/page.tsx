'use client'

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";


type Props = {
    params: { slug: string}
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);
    const pages = await getPages();

    return (
        <div className="max-w-5xl mx-auto p-20">
            <header className="flex items-center justify-between mx-auto pb-10">
                <Link href='/'
                    className='bg-gradient-to-r from-orange-200 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
                    >
                    Zandra
                </Link>
                    
                <div className="flex items-center gap-5 text-gray-600">
                    {pages.map((page) => (
                    <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                        {page.title}
                    </Link>
                    ))}
                </div>
            </header>

            <h1 className="bg-gradient-to-r from-orange-200 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
            
            <div className="text-lg text-gray-700 mt-10">
                <PortableText value={page.content}/>
            </div>
        </div>
    )
}