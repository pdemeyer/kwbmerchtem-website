import * as React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Bestuursleden = ({ bestuursleden }) => (
  <div>
    {bestuursleden.map((lid) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {lid.quote}
          <br />
          <cite> – {lid.naam}</cite>
          <cite> – {lid.functie}</cite>
        </div>
      </article>
    ))}
  </div>
);

Bestuursleden.propTypes = {
  bestuursleden: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      naam: PropTypes.string,
      functie: PropTypes.string,
    })
  ),
};

export default Bestuursleden;
