
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server"

//GET SINGLE POST
export const GET = async (req) => {
    const {searchParams} = new URL(req.url)

    const page = searchParams.get("page")
    const cat = searchParams.get("cat")

    const POST_PER_PAGE = 2
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page-1),
        where: {
            ...(cat && {catSlug: cat})
        }
    }

    try{
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count() 
        ])
        return new NextResponse(JSON.stringify({}))
    }
}