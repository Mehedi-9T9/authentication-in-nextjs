import { connectDB } from "@/database/connectdb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/Models/userScema";
import bcryptjs from "bcryptjs"


export const POST = async (request: NextRequest) => {
    try {
        await connectDB()
        const userInfo = await request.json()
        const { name, email, password } = userInfo
        const newPass = await bcryptjs.hash(password, 10)
        const newUser = new User({ name, email, password: newPass })
        const result = await newUser.save()
        return NextResponse.json(result, { status: 200 })





    } catch (error: any) {
        return NextResponse.json({ message: 'Post data fail', status: 500 })

    }
}

//checking parpass

export const GET = async (request: NextRequest) => {
    try {
        return NextResponse.json({ message: "rejister user page check" })

    } catch (error: any) {
        return NextResponse.json({ message: error.message })

    }
}