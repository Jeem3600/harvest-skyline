export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, clientEmail, sector, items, discount = 0, userId } = body;

    // 1. FIXED: Added 'sector' to the validation to prevent build-time crashes
    if (!clientName || !clientEmail || !sector || !items || !Array.isArray(items) || !userId) {
      return NextResponse.json(
        { error: "Missing required quotation parameters." },
        { status: 400 }
      );
    }

    // Calculate base total amount from the JSON item array
    const baseAmount = items.reduce((acc: number, item: any) => {
      return acc + (Number(item.price || 0) * Number(item.quantity || 1));
    }, 0);

    // Apply corporate metrics (7.5% VAT standard in Nigeria)
    const taxRate = 0.075;
    const taxAmount = baseAmount * taxRate;
    const totalFinalAmount = baseAmount + taxAmount - Number(discount);

    // Generate an institutional serial tracker number safely
    const sectorCode = sector ? sector.substring(0, 3).toUpperCase() : "GEN";
    const runningTimestamp = Date.now();
    const quoteNumber = `HS-${sectorCode}-${runningTimestamp.toString().slice(-6)}`;

    // Persist the structured transaction into the database via Prisma
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

// 2. ADDED: Explicit GET handler to satisfy the Next.js static page data collector
export async function GET() {
  return NextResponse.json({ message: "Quotation API is online" }, { status: 200 });
}