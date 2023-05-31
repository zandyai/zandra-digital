'use client';

import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";


type Props = {
    params: {project: string};
}

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    const pages = await getPages();
    
    return <div className="max-w-3xl mx-auto py-20">

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
            
            <div className="flex items-center justify-between">
               <h1 className="bg-gradient-to-r from-orange-200 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"> {project.name} </h1>

               <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">View Project</a>
            </div>

            {/* content goes here */}
            <div className="text-lg text-gray-700 mt-5"><PortableText value={project.content} /></div>


            {/* image goes here */}
            <Image src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
        </div>
}