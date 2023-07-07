import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, {params}) => {
  const {id} = params; // Access the route parameter using request.query
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (e) {
    return new NextResponse('Database Error' + e, { status: 500 });
  }
};
