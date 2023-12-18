import * as React from "react";

import Layout from "../../components/Layout";
import KleineRakenNew from "../../components/KleineRakenNew";

export default class KleineRakenNewPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/activiteiten.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 rgb(145,30,55), -0.5rem 0 0 rgb(145,30,55)",
              backgroundColor: "rgb(145,30,55)",
              color: "white",
              padding: "1rem",
            }}
          >
            Kleine Raak
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <KleineRakenNew />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
