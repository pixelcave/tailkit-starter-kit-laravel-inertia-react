export default function Welcome() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto flex flex-col gap-16 px-4 py-12 text-center sm:py-20 xl:max-w-6xl">
          <div>
            <a
              href="https://tailkit.com"
              className="active group inline-flex items-center justify-center gap-1.5 active:opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="inline-block size-8 transition duration-150 ease-out group-hover:scale-105 group-active:scale-100"
              >
                <circle
                  cx={128}
                  cy={128}
                  r={120}
                  fillOpacity={0}
                  stroke="#13cdc6"
                  strokeLinejoin="round"
                  strokeWidth={16}
                  fill="#293340"
                />
                <circle cx={128} cy={128} r={96} fill="#293340" />
                <path
                  d="M130.424 165.032a20 20 0 01-14.142 24.495l-8.842 2.373a20 20 0 01-24.495-14.142l-2.369-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.5 14.142z"
                  fill="#818cf8"
                  fillRule="evenodd"
                />
                <path
                  d="M191.9 148.561a20 20 0 01-14.143 24.5l-8.842 2.369a20 20 0 01-24.494-14.142l-2.37-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.5 14.142z"
                  fill="#f472b6"
                  fillRule="evenodd"
                />
                <path
                  d="M113.953 103.561a20 20 0 01-14.142 24.5l-8.842 2.369a20 20 0 01-24.495-14.142l-2.369-8.842a20 20 0 0114.142-24.5l8.842-2.369a20 20 0 0124.495 14.142z"
                  fill="#34d399"
                  fillRule="evenodd"
                />
                <path
                  d="M175.424 87.09a20 20 0 01-14.142 24.495l-8.842 2.369a20 20 0 01-24.5-14.142l-2.369-8.842a20 20 0 0114.142-24.495l8.842-2.369a20 20 0 0124.5 14.142z"
                  fill="#fbbf24"
                  fillRule="evenodd"
                />
              </svg>
              <span className="text-3xl font-bold transition-opacity duration-150 ease-out group-hover:opacity-75">
                Tailkit
              </span>
            </a>
          </div>
          <div>
            <a
              href="https://pixelcave.com"
              className="group mb-2 inline-flex items-center gap-1 rounded-sm border border-gray-200 bg-gray-200/50 px-1.5 py-1 text-sm leading-4 font-semibold text-gray-700 transition hover:border-rose-100 hover:bg-rose-100 hover:text-rose-700 active:border-gray-200 active:bg-gray-200/50 active:text-gray-700 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-rose-900 dark:hover:bg-rose-800 dark:hover:text-rose-100 dark:active:border-gray-700 dark:active:bg-gray-700/50 dark:active:text-gray-300"
            >
              <span>Crafted with</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="inline-block h-4 w-4 text-rose-500 transition will-change-auto group-hover:animate-ping group-active:animate-none"
              >
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
              </svg>
              <span>by pixelcave</span>
            </a>
            <h1 className="lg:leading-tighter mb-4 text-3xl font-black text-black md:text-5xl lg:mx-auto lg:w-5/6 dark:text-white">
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Build
              </span>{" "}
              super modern web applications and websites{" "}
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                really fast
              </span>
              .
            </h1>
            <h2 className="text-lg/relaxed font-medium text-gray-700 sm:text-xl/relaxed lg:mx-auto lg:w-3/5 dark:text-gray-300">
              Carefully crafted, easy to customize, fully responsive UI
              Components, Templates and Tools for your Tailwind CSS based
              projects.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:items-center">
              <a
                href="https://tailkit.com/login"
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 p-3 text-sm leading-5 font-semibold text-white transition hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-2 focus:ring-blue-500/50 focus:outline-hidden active:border-blue-700 active:bg-blue-700 sm:w-auto sm:px-4"
              >
                <svg
                  className="hi-mini hi-rocket-launch inline-block size-5 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Get Started</span>
              </a>
              <a
                href="https://tailkit.com/docs"
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-3 text-sm leading-5 font-semibold text-gray-800 transition hover:border-gray-300 hover:text-gray-900 hover:shadow-xs focus:ring-2 focus:ring-gray-300/25 focus:outline-hidden active:border-gray-200 active:shadow-none sm:w-auto sm:px-4 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/50 dark:active:border-gray-700"
              >
                <svg
                  className="hi-mini hi-document-text inline-block size-5 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
