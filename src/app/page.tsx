import Image from 'next/image';

export default function Example() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          alt=""
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Page under construction
          </h1>
          <p className="mt-4 text-base text-white/90 sm:mt-6">
            Stay tuned for my update.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="mailto:a.mariel.recio@gmail.com"
              className="text-sm font-semibold text-white"
            >
              Contact me <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
