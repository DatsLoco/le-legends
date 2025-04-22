import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DKC Games - Coming Soon</title>
      </Head>
      <main
        className="flex min-h-screen flex-col bg-black bg-cover bg-center relative"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="w-full bg-black bg-opacity-70 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            DKC Games - Coming Soon!!!!!!
          </h1>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-white">
          <p className="text-2xl mt-20">A New Fantasy Experience Awaits...</p>
        </div>
      </main>
    </>
  );
}
