import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LE Legends - Coming Soon</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <img src="/logo.png" alt="LE Legends Logo" className="w-72 mb-8" />
        <h1 className="text-5xl font-bold mb-4">Coming Soon...</h1>
        <p className="text-lg text-gray-400">Launching soon - Stay tuned!</p>
      </main>
    </>
  );
}
