import { NextResponse } from "next/server";
import OpenAI from "openai";
export async function POST(req: Request) {

    try {
        const body = await req.json();
        const { room, style, materials, aspect_ratio } = body;

        if (!room) {
            console.log("Room is Required!!!")
            return new NextResponse("Room is required")
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })

        const image = await openai.images.generate({
            model: "dall-e-2",
            prompt: `Generate ${room} room.The room style should be ${style}.Material should be ${materials}.Aspect Ratio of the image should be ${aspect_ratio}`
        })

        console.log(image.data)

        return NextResponse.json({ image: image.data }, { status: 200 })

    } catch (error) {
        console.log("ERROR GENERATING ROOM IMAGES", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}