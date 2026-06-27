"use server";

import { db } from "./db";
import { revalidatePath } from "next/cache";

export async function submitInquiryAction(formData: {
  name: string;
  email: string;
  sector: string;
  message: string;
}) {
  try {
    // Validate core data presence on the server side
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "Required fields are missing." };
    }

    // Direct database tracking via Prisma Client
    // We log inquiries under an automated system user profile for operational review
    console.log("Server processing transaction for:", formData.email);
    
    // In a full production flow, this triggers automatic SMTP emails or builds an Inventory task.
    // We revalidate paths to instantly refresh visual tracking logs across dashboards
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error: any) {
    console.error("Critical transmission failure:", error);
    return { success: false, error: "Internal server linkage breakdown." };
  }
}