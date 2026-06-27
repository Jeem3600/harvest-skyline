

import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, clientEmail, sector, items, discount = 0, userId } = body;

    // Validate incoming parameters
    if (!clientName || !clientEmail || !items || !Array.isArray(items) || !userId) {
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

    // Generate an institutional serial serial tracker number
    const runningTimestamp = Date.now();
    const quoteNumber = `HS-${sector.substring(0, 3).toUpperCase()}-${runningTimestamp.toString().slice(-6)}`;

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
        items: items as any, // Cast directly into database JSON field
        userId: userId
      }
    });

    // Return the successful ledger response
    return NextResponse.json({ success: true, quotation: storedQuotation }, { status: 201 });

  } catch (error: any) {
    console.error("Quotation generation failure:", error);
    return NextResponse.json(
      { error: "Internal Server Processing Error", details: error.message },
      { status: 500 }
    );
  }
}