export default defineSitemapEventHandler(async (event) => {
    const prisma = event.context.prisma

    const flows = await prisma.flow.findMany({
        select: {
            id: true,
            updatedAt: true
        }
    })

    const posts = flows.map(p => ({
        loc: `/flow/${p.id}`,
        lastmod: p.updatedAt
    }))

    return posts
})
