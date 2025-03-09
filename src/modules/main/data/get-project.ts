"use server";
import { createClient } from "@/lib/server";

export async function getProjects() {
  try {
    // Assuming your table is called 'projects'
    // Replace 'projects' with your actual table name
    const supabase = createClient();

    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .order("created_at", { ascending: false }); // Select all columns - you can specify specific columns if needed// Use single() to expect only one result

    if (error) {
      console.error("Error fetching first project:", error);
      return error.message;
    }
    //console.log("First project:", data);
    return data as Project[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return error?.message as string;
  }
}
