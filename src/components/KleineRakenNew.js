import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const KleineRakenNewTemplate = (props) => {
  
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-4" key={post.id}>
            <article
              className={`kleine-raken-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
              </header>
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> </span>
                {/*
                <span className="subtitle is-size-6 is-block">
                  {post.frontmatter.date}
                </span>
                    */}
              </p>
              <p>
                <Link className="button" to={post.fields.slug}>
                  Lees meer →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

KleineRakenNew.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function KleineRakenNew() {
  return (
    <StaticQuery
      query={graphql`
        query KleineRakenQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "kleine-raak-new" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "DD MMMM YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <KleineRakenNewTemplate data={data} count={count} />}
    />
  );
}
