// app/posts/page.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function PostsPage() {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts, error } = await supabase.from("user").select("*");
  console.log(posts);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-2">
        {posts?.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h2 className="font-semibold">{post.id}</h2>
            <p className="text-gray-200">{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
