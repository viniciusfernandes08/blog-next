import { Container } from "@/components/Container";
import { FeaturedPost } from "@/components/FeaturedPost";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostImage } from "@/components/PostImage";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList /> 
      </Suspense>
    </>
  )
}