export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4">
      <div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! This page could not be found.</p>
        <a href="/" className="text-primary underline">
          Go back home
        </a>
      </div>
    </div>
  );
}
