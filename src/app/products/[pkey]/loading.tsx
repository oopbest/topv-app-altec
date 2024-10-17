export default function LoadingProductDetail() {
  return (
    <>
      <section className="block bg-theme-container p-3">
        <main className="container mx-auto block pb-16">
          <div className="transition-responsive rounded-lg bg-white p-4">
            <div className="transition-responsive grid grid-cols-1 lg:grid-cols-5 lg:space-x-4">
              {/* <!-- Image --> */}
              <div className="col-span-2">
                {/* Main Image */}
                <div className="px-3">
                  <div className="h-80 animate-pulse rounded-lg bg-gray-200" />
                </div>
                {/* Thumbnail Images */}
                <div className="flex space-x-3 p-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="w-1/4">
                      <div className="h-24 animate-pulse rounded-lg bg-gray-200" />
                    </div>
                  ))}
                </div>
              </div>

              {/* !-- info --> */}
              <div className="col-span-3">
                <div className="animate-pulse divide-y *:py-7">
                  <div>
                    <div className="h-6 w-3/4 rounded bg-gray-300"></div>
                    <div className="mt-3 flex items-center divide-x *:px-2">
                      <div className="flex space-x-1">
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="ml-3 h-4 w-8 rounded bg-gray-300"></div>
                      <div className="ml-3 h-4 w-16 rounded bg-gray-300"></div>
                    </div>
                  </div>
                  {/* !-- Price --> */}
                  <div>
                    <div className="mt-3 h-10 w-full rounded bg-gray-300"></div>
                  </div>
                  {/* <!-- Online --> */}
                  <div className="mt-3">
                    <div className="mb-2 h-6 w-32 rounded bg-gray-300"></div>
                    <div className="grid grid-cols-2 justify-center gap-2 p-3 md:grid-cols-4">
                      <div className="h-16 w-full rounded-lg bg-gray-300"></div>
                      <div className="h-16 w-full rounded-lg bg-gray-300"></div>
                      <div className="h-16 w-full rounded-lg bg-gray-300"></div>
                      <div className="h-16 w-full rounded-lg bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Description --> */}
            <div className="rounded-lg lg:border lg:p-5">
              <div className="py-5">
                <div role="status" className="w-full animate-pulse">
                  <div className="mb-4 h-2.5 w-2/6 rounded-full bg-gray-200"></div>
                  <div className="mb-2.5 h-2 w-4/5 rounded-full bg-gray-200"></div>
                  <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
                  <div className="mb-2.5 h-2 w-5/6 rounded-full bg-gray-200"></div>
                  <div className="mb-2.5 h-2 w-3/6 rounded-full bg-gray-200"></div>
                  <div className="h-2 max-w-[360px] rounded-full bg-gray-200"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
