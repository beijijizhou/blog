import { Link } from "react-router-dom";
import { blogPosts } from "./constants";
import type { BlogPost } from "./interface";

function Blog() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/">
            <button className="mt-8 rounded-md bg-slate-700 px-4 py-2 text-white font-semibold hover:bg-slate-600 transition-colors duration-200">
              Home
            </button>
          </Link>


          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From the Blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300">
            Stay updated with the latest news and insights from Indemni.
          </p>

          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogPosts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                {/* Image */}
                <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt={post.title || "Blog post image"}
                    src={post.image_url || "/static/placeholder-image.png"}
                    className="absolute inset-0 size-full rounded-2xl bg-slate-800 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>

                {/* Content */}
                <div>
                  {/* Meta Info */}
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.published_at} className="text-gray-400">
                      {(post.published_at)}
                    </time>
                    {(post.category || post.tags?.[0]) && (
                      <span className="rounded-full bg-slate-700 px-3 py-1.5 font-medium text-gray-300 text-xs">
                        {post.category || post.tags?.[0]}
                      </span>
                    )}
                  </div>

                  {/* Title + Excerpt */}
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                      <Link to={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title || "Untitled Post"}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm/6 text-gray-400">
                      {post.excerpt || "No description available."}
                    </p>
                  </div>

                  {/* Author */}
                  {post.author_name && (
                    <div className="mt-6 flex border-t border-white/10 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <p className="font-bold text-white">Author:</p>
                        <div className="text-sm/6">
                          <p className="font-semibold text-white">
                            {post.author_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
