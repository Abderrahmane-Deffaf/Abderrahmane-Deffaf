export async function getLatestBlog() {
  try {
    // Assuming your table is called 'projects'
    // Replace 'projects' with your actual table name
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const host = process.env.VERCEL_URL || "localhost:3000";
    const baseUrl = `${protocol}://${host}`;
    console.log(baseUrl);

    const res = await fetch(`${baseUrl}/api/get-first-blog`, {});
    const data = await res.json();
    if (data?.data) {
      return data.data as Blog;
    }
    return data?.error as string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return error?.message as string;
  }
}
