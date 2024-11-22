export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Livia Portfolio. All Rights Reserved.</p>
          <p className="mt-2">
            Built with <a href="https://nextjs.org/" className="text-blue-400">Next.js</a> and <a href="https://tailwindcss.com/" className="text-blue-400">Tailwind CSS</a>.
          </p>
        </div>
      </footer>
    );
}