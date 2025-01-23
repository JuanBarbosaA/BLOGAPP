
import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server"

//GET ALL COMMENTS OF A POST
export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const postSlug = searchParams.get("postSlug")

    try{
        const comments = await prisma.comment.findMany({
          where: {
            ...GET(postSlug && {postSlug})
          },
          include: {user: true}
        });
        return new NextResponse(JSON.stringify(comments, {status: 200}))
    }
    catch(err){
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong"}, {status: 500})
        )
    }
}