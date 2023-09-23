import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// fetch all orders
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!
        }
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({ message: "something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};

// CREATE ORDER
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();
  if (session) {
    try {
      const body = await req.json();
      if (session.user) {
        const order = await prisma.order.create({
          data: body
        });
        return new NextResponse(JSON.stringify(order), { status: 201 });
      }
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({ message: "something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};
