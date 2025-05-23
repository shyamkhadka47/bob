import Image from "next/image"
import Link from "next/link"

export default function BlogGrid() {
  // Blog posts array with dummy data
  const blogPosts = [
    {
      id: 1,
      category: "Fashion & Style",
      title: "I Got Baby Brows, A Subtle Alternative To Lamination",
      image: "/hero.jpg",
      excerpt:
        "The beauty industry has a clever knack for taking popular treatments and cutifying them for the masses by stitching on one email word...",
      date: "Mar 28, 2025",
      author: "admin",
    },
    {
      id: 2,
      category: "Fashion & Style",
      title: "Blazer & Sneakers: A Casual Outfit Formula to Copy this Fall",
      image: "/hero.jpg",
      excerpt:
        "Fall is my favorite season for a lot of reasons: the weather, the flavors, the scented candles, the leaves. But I especially love...",
      date: "Mar 28, 2025",
      author: "admin",
    },
    {
      id: 3,
      category: "Fashion & Style",
      title: "Nordstrom's Cyber Monday Deals Have Arrived",
      image: "/hero.jpg",
      excerpt:
        "Whether your giftee desperately needs new winter layers, is a homebody who only lives in cozy loungewear, or likes tobe on top of...",
      date: "Mar 28, 2025",
      author: "admin",
    },
    {
      id: 4,
      category: "Fashion & Style",
      title: "The Best Beauty Product I've Tried All Year",
      image: "/hero.jpg",
      excerpt:
        "This past summer, my bff Gemma broke my heart and moved to London, but the good news is, we still text all the...",
      date: "Mar 28, 2025",
      author: "admin",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className=" mb-6">
        <h2 className="text-4xl  font-medium text-center text-gray-900">Latest Stories</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="border border-green-400 rounded-lg overflow-hidden hover:border-green-900 transition-all duration-500" >
            <div className="p-4">
              {/* <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-3">
                {post.category}
              </span> */}

              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 h-14">{post.title}</h3>

              <div className="mb-4 h-48 overflow-hidden rounded-md">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3 h-16">{post.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div><span>{post.date}</span>
                <span className="mx-1">by</span>
                <span className="font-medium">{post.author}</span></div>
                <Link href={`/storyteller/${post.id}`}  className="px-4 py-2 border-[2px] text black rounded-md border-green-700" >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
