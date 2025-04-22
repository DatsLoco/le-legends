import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DKC Games - Coming Soon</title>
      </Head>
      <main
        className="relative flex min-h-screen flex-col items-center justify-center bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* Black semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            DKC Games - Coming Soon!!!!!!
          </h1>
          <p className="text-2xl mt-4">A New Fantasy Experience Awaits...</p>
        </div>
      </main>
    </>
  );
}

