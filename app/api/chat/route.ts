import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY no está definida");
    }

    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });

    return NextResponse.json({
      reply: completion.choices[0].message,
    });
  } catch (error: any) {
    console.error("ERROR OPENAI:", error);

    return NextResponse.json(
      {
        error: error.message || "Error desconocido",
      },
      { status: 500 }
    );
  }
}