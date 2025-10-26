import { Button } from "@/components/Button"

export const dynamic = 'force-dynamic'

export default async function AdminPostNewPage() {
    return (
      <div className="pt-16 flex gap-4 flex-wrap items-center">
        <Button variant="default" size="sm">Confirma</Button>
        <Button variant="ghost" size="md">Confirma</Button>
        <Button variant="danger" size="lg" disabled>Confirma</Button>
      </div>
    )
}