/*
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import KleineRaken from "../components/KleineRaken";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const KleineRakenPageTemplate = ({
  image,
  title,
  heading,
  description,
  archief
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
      <main className="Blog">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
          {!!archief.length && (
            <section className="section">
              <div className="container">
                <KleineRaken archief={archief} />
              </div>
            </section>
          )}
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

KleineRakenPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  archief: PropTypes.array,
};

const KleineRakenPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <KleineRakenPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        archief={frontmatter.archief}
      />
    </Layout>
  );
};

KleineRakenPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default KleineRakenPage;

export const kleineRakenPageQuery = graphql`
  query KleineRakenPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        archief {
          jaar
          maanden {
            maand
            pdf
            foto
            kort
            excerpt
            title
            categories {
              category
            }
          }
        }
      }
    }
  }
`;

*/
