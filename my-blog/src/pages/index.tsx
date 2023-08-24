import Navbar from '../components/Navbar';
import { blogPosts } from '../lib/data';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">素敵なトップページ</h1>
        {/* ...他のコンテンツ... */}

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">最新のブログ</h2>
          <ul>
            {blogPosts.map(post => (
              <li key={post.id}>
                <Link href={`/blogs/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
