import { usePostsStore } from "../store/postsStore";
import { useEffect } from "react";

function Posts() {
  const { posts, loading, error, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading)
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
      </div>
    );
  if (error)
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:bg-red-900/20 dark:border-red-900/30">
        <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
      </div>
    );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Recent Posts
        </h2>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium dark:bg-gray-700 dark:text-gray-300">
          {posts.length} items
        </span>
      </div>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="group p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:border-gray-700/50"
          >
            <h3 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors dark:text-gray-200 dark:group-hover:text-indigo-400">
              {post.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
