import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({
    data: tasks,
  });
};

export const POST = async (request) => {
  const body = await request.json();
  const task = await db.task.create({
    data: {
      content: body.content,
    },
  });
  return Response.json({
    data: task,
  });
};
