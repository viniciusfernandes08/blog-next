import { MenuAdmin } from "@/components/admin/MenuAdmin"

type Props = {
    children: React.ReactNode
}

export default function AdminPostLayout({children}: Props) {
    return (
        <>
          <MenuAdmin />

          {children}
        </>
    )
}