/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@/lib/server";

export async function getBlogById(id: number) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(`Error fetching blog with ID ${id}:`, error);
      return error.message;
    }

    return data as Blog;
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return error?.message as string;
  }
}
