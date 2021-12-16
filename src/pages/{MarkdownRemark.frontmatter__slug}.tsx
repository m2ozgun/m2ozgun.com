import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Post from "../components/post"

interface TemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        hideMetadata: boolean | null
        slug: string
      }
      excerpt: string
      html: string
    }
  }
}
export default function Template({ data }: TemplateProps) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout>
      <Seo title={frontmatter.title} description={excerpt} />
      <Post
        title={frontmatter.title}
        date={frontmatter.date}
        hideMetadata={frontmatter.hideMetadata}
        html={html}
        slug={frontmatter.slug}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        hideMetadata
        title
        path
      }
    }
  }
`
