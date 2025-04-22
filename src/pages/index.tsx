import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DKC Games - Coming Soon</title>
      </Head>
      <main
        className="flex min-h-screen flex-col bg-black bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content above the overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center text-white p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            DKC Games - Coming Soon!!!!!!
          </h1>
          <p className="text-2xl mt-4">A New Fantasy Experience Awaits...</p>
        </div>
      </main>
    </>
  );
}
