import { ManagePostForm } from "@/components/admin/ManagePostForm"
import { makePublicPost } from "@/dto/post/dto"
import { findByIdAdmin } from "@/lib/posts/queries/admin"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Editar post'
}

type AdminPostIdPageProps = {
    params: Promise<{
        id: string
    }>
}

export default async function AdminPostIdPage({params}: AdminPostIdPageProps) {
    const { id } = await params

    const post = await findByIdAdmin(id).catch()

    if(!post) notFound()

    const publicPost = makePublicPost(post)

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-xl font-extrabold">Editar post</h1>
            <ManagePostForm publicPost={publicPost} />
        </div>
    )
}