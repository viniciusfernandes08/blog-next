import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostImage } from "@/components/PostImage";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 group">
        <PostImage 
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_9.png',
            alt: 'Imagem pessoa',
            priority: true,
          }}
          
          linkProps={{
            href: '#'
          }}
        />
        
        <div className="flex flex-col gap-4 sm:justify-center">

          <time 
            dateTime="2025-04-20"
            className="text-slate-600 block text-sm/tight"
          >
            20/04/2025 10:00
          </time>

          <PostHeading as="h1" url="#">
            Lorem ipsum dolor sit amet consectur
          </PostHeading>

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