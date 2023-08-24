import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { blogPosts } from '../../lib/data';

export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({
    params: { id: post.id }
  }));

  return {
    paths,
    fallback: false  // この例ではfallbackをfalseにしていますが、実際の状況に応じて調整してください
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find(p => p.id === params.id);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post },
  };
}

const BlogDetail = ({ post }) => {
  const router = useRouter();
  const { id } = router.query; // URLからidを取得
  const post = blogPosts.find(p => p.id === id);

  if (!post) return <div>ブログが見つかりません</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </div>
    </div>
  );
}

export default BlogDetail;
