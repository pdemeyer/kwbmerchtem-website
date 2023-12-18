import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Bestuursleden from "../components/Bestuursleden";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const BestuurPageTemplate = ({
  image,
  title,
  heading,
  description,
  bestuursleden,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
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
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Bestuursleden bestuursleden={bestuursleden} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BestuurPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  bestuursleden: PropTypes.array,
};

const BestuurPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BestuurPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        bestuursleden={frontmatter.bestuursleden}
      />
    </Layout>
  );
};

BestuurPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BestuurPage;

export const bestuurPageQuery = graphql`
  query ProductPage($id: String!) {
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
        bestuursleden {
          naam
          quote
          functie
        }
      }
    }
  }
`;
