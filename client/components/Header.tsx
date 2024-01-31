import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { JSX, SVGProps } from "react";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet our Advocates
                </h2>

                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our team consists of highly qualified and experienced
                  advocates who are dedicated to providing the best legal
                  services.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 lg:grid-cols-4 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
                <div className="mx-auto flex w-full items-center justify-center">
                  <img
                    alt="Advocate 1"
                    className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-bold">Advocate 1</h3>
                    <p className="text-sm text-gray-500">Corporate Law</p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center">
                  <img
                    alt="Advocate 2"
                    className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-bold">Advocate 2</h3>
                    <p className="text-sm text-gray-500">Criminal Law</p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center">
                  <img
                    alt="Advocate 3"
                    className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-bold">Advocate 3</h3>
                    <p className="text-sm text-gray-500">Family Law</p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center">
                  <img
                    alt="Advocate 4"
                    className="aspect-[1/1] overflow-hidden rounded-full object-cover object-center"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-bold">Advocate 4</h3>
                    <p className="text-sm text-gray-500">Corporate Law</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

function AlignJustifyIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

function FacebookIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
