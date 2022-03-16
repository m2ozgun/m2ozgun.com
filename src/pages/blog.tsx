import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Post from "../components/post"

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            excerpt: string
            frontmatter: {
              title: string
              date: string
              slug: string
              author: string
              coverImage: string
            }
          }
        }
      ]
    }
  }
}

const Blog = ({ data }: BlogProps) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <div>
          {posts.map(({ node }) => {
            const {
              id,
              excerpt: autoExcerpt,
              frontmatter: { title, date, slug },
            } = node

            return (
              <Post
                key={id}
                title={title}
                date={date}
                slug={slug}
                hideMetadata={true}
                excerpt={autoExcerpt}
              />
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            author
          }
        }
      }
    }
  }
`

export default Blog
