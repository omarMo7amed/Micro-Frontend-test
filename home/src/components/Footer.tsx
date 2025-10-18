export default function Footer() {
  return (
    <footer className="w-full bg-amber-300 shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
        <p className="text-gray-900 text-sm">
          &copy; {new Date().getFullYear()} Micro
          <span className="text-amber-800">Front</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
