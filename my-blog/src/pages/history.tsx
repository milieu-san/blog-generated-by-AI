import Navbar from '../components/Navbar';

const History = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">ワーキングヒストリー</h1>
        <ul className="mt-4 space-y-4">
          <li>
            <h2 className="text-xl">2020 - 現在: 〇〇株式会社</h2>
            <p>フロントエンドエンジニアとして〇〇プロジェクトに参加...</p>
          </li>
          <li>
            <h2 className="text-xl">2018 - 2020: △△株式会社</h2>
            <p>バックエンドエンジニアとして△△プロジェクトの設計、実装に従事...</p>
          </li>
          {/* 他のヒストリーを追加... */}
        </ul>
      </div>
    </div>
  );
}

export default History;
