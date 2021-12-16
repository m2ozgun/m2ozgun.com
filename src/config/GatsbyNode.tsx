import * as path from "path"
import { GatsbyNode } from "gatsby"

type TypePost = {
  id: string
  title: string
  slug: string
  content: string
}

type TypeData = {
  allPost: {
    nodes: TypePost[]
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions

  const data = await graphql<TypeData>(`
    {
      allPost {
        nodes {
          id
          title
          slug
          content
        }
      }
    }
  `)

  // Create Post Pages
  const postTemplate = path.resolve("./src/templates/Post.tsx")
  const createPostPromise = data?.data?.allPost.nodes.map(post => {
    createPage({
      path: `posts/${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    })
  })

  await Promise.all([createPostPromise])
}
