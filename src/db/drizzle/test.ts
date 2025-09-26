import { drizzleDb } from "."
import { postsTable } from "./schema"

(async () => {
    const posts = await drizzleDb.select().from(postsTable)

    console.log(posts)
})()