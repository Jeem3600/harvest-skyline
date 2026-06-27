export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function POST(request: Request) {
  try {
    // Escape early during build phase if the database string is just our fallback dummy
    if (process.env.DATABASE_URL?.includes("dummy_url_for_build_purposes")) {
      return NextResponse.json({ success: true, mock: true }, { status: 201 });
    }

    const body = await request.json();
    const { clientName, clientEmail, sector, items, discount = 0, userId } = body;

    if (!clientName || !clientEmail || !sector || !items || !Array.isArray(items) || !userId) {
      return NextResponse.json(
        { error: "Missing required quotation parameters." },
        { status: 400 }
      );
    }

    const baseAmount = items.reduce((acc: number, item: any) => {
      return acc + (Number(item.price || 0) * Number(item.quantity || 1));
    }, 0);

    const taxRate = 0.075;
    const taxAmount = baseAmount * taxRate;
    const totalFinalAmount = baseAmount + taxAmount - Number(discount);

    const sectorCode = sector ? sector.substring(0, 3).toUpperCase() : "GEN";
    const runningTimestamp = Date.now();
    const quoteNumber = `HS-${sectorCode}-${runningTimestamp.toString().slice(-6)}`;

    const storedQuotation = await db.quotation.create({
      data: {
        quoteNumber,
        clientName,
        clientEmail,
        amount: totalFinalAmount,
        tax: taxAmount,
        discount: Number(discount),
        status: "PENDING",
        items: items as any, 
        userId: userId
      }
    });

    return NextResponse.json({ success: true, quotation: storedQuotation }, { status: 201 });

  } catch (error: any) {
    console.error("Quotation generation failure:", error);
    return NextResponse.json(
      { error: "Internal Server Processing Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Quotation API is online" }, { status: 200 });
}