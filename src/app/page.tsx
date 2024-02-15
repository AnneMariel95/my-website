import Image from "next/image";
import Link from "next/link";

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
            Hi, this is Anne Mariel!
            <br />
          </h1>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
            This page is under construction.
          </h2>
          <p className="mt-4 text-base text-white/90 sm:mt-6">
            Stay tuned for my update.
          </p>
          <div className="mt-10 flex-col justify-center text-sm font-semibold text-neutral-50">
            <a href="mailto:a.mariel.recio@gmail.com">
              Contact me <span aria-hidden="true">&rarr;</span>
            </a>
            <div>
              <Link
                className="underline text-green-200 text-lg"
                href="https://l.anne-mariel.com/finance-manager"
              >
                Click to visit my Finance Manager App{" "}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
