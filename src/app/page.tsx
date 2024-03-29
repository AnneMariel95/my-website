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
        <div className="px-8 py-4 w-full flex justify-between items-center">
          <nav>
            <ul className="flex gap-4 text-lg text-green-200 font-bold">
              <li>
                <Link href="https://ai.anne-mariel.com/">AI Chatbot</Link>
              </li>
              <li>
                <Link href="https://notes.anne-mariel.com/">Notes</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Hi, this is Anne Mariel!
            <br />
          </h1>
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
