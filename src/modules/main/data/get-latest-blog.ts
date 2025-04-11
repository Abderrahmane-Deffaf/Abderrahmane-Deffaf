import { createClient } from "@/lib/server";

export async function getLatestBlog() {
  try {
    // Assuming your table is called 'projects'
    // Replace 'projects' with your actual table name
    const supabase = createClient();

    const { data, error } = await supabase
      .from("blogs")
      .select("id, created_at, title, topics, updated_at")
      .order("created_at", { ascending: false })
      .limit(1)
      .single(); // Select all columns - you can specify specific columns if needed// Use single() to expect only one result

    if (error) {
      console.error("Error fetching latest blog:", error);
      return error.message;
    }
    console.log("Latest blog:", data);
    return data as Blog;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return error?.message as string;
  }
}
