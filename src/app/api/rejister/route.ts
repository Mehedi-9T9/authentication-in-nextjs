import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        const userInfo = await request.json()
        console.log('server line 6', userInfo);
        return NextResponse.json(userInfo)


    } catch (error: any) {
        return NextResponse.json({ message: 'Post data fail', status: 500 })

    }
}

export const GET = async (request: NextRequest) => {
    try {
        return NextResponse.json({ message: "rejister user page check" })

    } catch (error: any) {
        return NextResponse.json({ message: error.message })

    }
}