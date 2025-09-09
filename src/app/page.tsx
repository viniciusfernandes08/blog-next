import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 group">
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt="Título do post" 
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time 
            dateTime="2025-04-20"
            className="text-slate-600 block text-sm/tight"
          >
            20/04/2025 10:00
          </time>

          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsun dolor sit amet consectur</Link>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Magnam aperiam sint illo. Minima eum rem vero inventore odio, 
            nam laudantium quas, nulla cumque eligendi quam at soluta accusamus dignissimos qui.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList /> 
      </Suspense>

      <footer>Footer</footer>
    </Container>
  )
}