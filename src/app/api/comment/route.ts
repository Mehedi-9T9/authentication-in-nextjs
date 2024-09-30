import { connectDB } from "@/database/connectdb";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/Models/commentSchema";

export const POST = async (request: NextRequest) => {
    try {
        await connectDB();
        const commentInfo = await request.json()
        const newComment = new Comment(commentInfo)
        const result = await newComment.save()
        return NextResponse.json(result)


    } catch (error: any) {
        console.log(error?.message);

    }

}
//cheking perpass
export const GET = async (request: NextRequest) => {
    return NextResponse.json({ message: "comment data Ok" })
}