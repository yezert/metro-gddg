export default function Blog() {
  return (
    <div className="pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pb-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid sm:grid-cols-3">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 my-5 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-purple-400 hover:text-purple-800"
                aria-label="Category"
              >
                Books
              </a>
              <p className="">5 Jan 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="">
              <a
                href="/"
                aria-label="Article"
                className="  transition-colors duration-200 hover:text-purple-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Tell them I hate them
                </p>
              </a>
            </div>
            <p className="">
              Well, the way they make shows is, they make one show. That shows
              called a pilot. Then they show that show to the people who make
              shows.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 my-5 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-purple-400 hover:text-purple-800"
                aria-label="Category"
              >
                Inspiration
              </a>
              <p className="">15 Sep 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="">
              <a
                href="/"
                aria-label="Article"
                className="  transition-colors duration-200 hover:text-purple-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  A flower in my green garden
                </p>
              </a>
            </div>
            <p className="">
              Chase ball of string eat plants, meow, and throw up because I ate
              plants going to catch the red dot today going.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 my-5 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-purple-400 hover:text-purple-800"
                aria-label="Category"
              >
                Detective
              </a>
              <p className="">28 Dec 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="">
              <a
                href="/"
                aria-label="Article"
                className="  transition-colors duration-200 hover:text-purple-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  We never had the love we deserve
                </p>
              </a>
            </div>
            <p className="">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See all articles
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
