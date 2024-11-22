export default function Home() {
  return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-5xl font-bold">Hi, I'm Livia 👋</h1>
          <p className="mt-4 text-xl max-w-2xl text-center">
            I’m a Computer Science and Data Science student passionate about building interactive applications, exploring machine learning, and creating meaningful user experiences.
          </p>
          <div className="mt-8 space-x-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow hover:bg-gray-100"
            >
              Explore Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-purple-800 font-medium rounded-full shadow hover:bg-purple-700"
            >
              Contact Me
            </a>
          </div>
        </main>
  );
}
