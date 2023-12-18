import * as React from "react";
import PropTypes from "prop-types";
import KleineRaak from './KleineRaak'
//import { v4 } from "uuid";
//import './PostSection.css'
import './KleineRaken.css'

const KleineRaken = ({ archief }) => (
      <div className="kleine-raak-jaargang">
        {archief.map((jaar) => (
          <div className="kleine-raak-jaargang">
            {jaar.jaar}
            <br />
            <div className="kleine-raak-jaargang--Grid">
            {jaar.maanden.map((kleineraak) => (
              <div>
                <KleineRaak kleineraak={kleineraak} slug={jaar.jaar+"-"+kleineraak.maand}/>
            </div>
            ))}
            </div>
          </div>
        ))}
      </div>
);

KleineRaken.propTypes = {
  archief: PropTypes.arrayOf(
    PropTypes.shape({
      jaar: PropTypes.string,
      maanden: PropTypes.arrayOf(
        PropTypes.shape({
          maand: PropTypes.string,
          pdf: PropTypes.string,
          foto: PropTypes.string,
          excerpt: PropTypes.string,
          title: PropTypes.string,
          kort: PropTypes.string,
          categories: [],
        })
      ),
    })
  ),
};

export default KleineRaken;
