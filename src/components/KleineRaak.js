import * as React from "react";
import PropTypes from "prop-types";
import { Link } from 'gatsby'
import Image from './Image'
import './KleineRaak.css'


const KleineRaak = ({ 
  kleineraak, 
  slug,
  className = '',
}) => (
  <Link to={slug} className={`kleine-raak ${className}`}>
    {kleineraak.foto && (
      <div className="kleine-raak--Image relative">
      
        <Image lazy isUploadcare src={kleineraak.foto} alt={kleineraak.maand} />
    
      </div>
    )}
    <div className="kleine-raak--Content">
      {kleineraak.title && <h3 className="kleine-raak--Title">{kleineraak.title}</h3>}
      <div className="kleine-raak--Category">
        {kleineraak.categories && kleineraak.categories.map(cat => cat.category).join(', ')}
      </div>
      {kleineraak.kort && <div className="kleine-raak--Excerpt">{kleineraak.kort}</div>}
    </div>
  </Link>
);

KleineRaak.propTypes = {
  maand: PropTypes.string,
  pdf: PropTypes.string,
  foto: PropTypes.string,
  excerpt: PropTypes.string,
  title: PropTypes.string,
  kort: PropTypes.string,
  categories: [],
};

export default KleineRaak;
