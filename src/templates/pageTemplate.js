import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark

	return (
		<Layout>
			<SEO title={frontmatter.title} />
      <div className="container mx-auto p-4 my-16">
        <h1 className="text-4xl font-extrabold">{frontmatter.title}</h1>
        <div
          className="container mx-auto p-4 my-16 bg-gray-400 rounded"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`
