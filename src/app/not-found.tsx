import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-5xl mb-5">Page Not Found</p>
          <p className="mb-5">
            The page you&apos;re looking for doesn&apos;t seem to exist
          </p>
          <Link href="/" className="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
