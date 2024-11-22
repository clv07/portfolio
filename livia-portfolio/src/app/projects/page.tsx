export default function Projects() {
    const projects = [
      {
        title: "Tone Training App",
        description: "An interactive app to help users improve tone differentiation skills.",
      },
      {
        title: "Quiz Generator",
        description: "A machine learning-powered app to generate quizzes from lecture notes.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    );
}