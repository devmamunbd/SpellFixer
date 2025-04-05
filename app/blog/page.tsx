import React from "react";
import Link from "next/link";
const page = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Proper Spelling Matters in Bengali Writing",
      excerpt:
        "Discover how accurate spelling can improve readability and credibility in your Bengali content.",
      slug: "/blog/proper-spelling-bengali",
      date: "March 20, 2025",
    },
    {
      id: 2,
      title: "Top 5 Tools for Checking English Grammar in 2025",
      excerpt:
        "Looking for tools that help polish your English writing? Check out our top picks!",
      slug: "/blog/english-grammar-tools",
      date: "March 25, 2025",
    },
    {
      id: 3,
      title: "How AI is Changing the Way We Write",
      excerpt:
        "Explore how AI-driven tools like ShuddhoSpell are transforming spelling and grammar checking.",
      slug: "/blog/ai-writing-tools",
      date: "April 2, 2025",
    },
  ];
  return (
    <section className="bg-white py-16" id="blog">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Blog</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get tips, insights, and updates about writing, spelling, grammar,
            and language technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-6 hover:shadow-md transition duration-200"
            >
              <p className="text-xs text-gray-400 mb-1">{post.date}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
              <Link
                href={post.slug}
                className="inline-block mt-4 text-sm text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
