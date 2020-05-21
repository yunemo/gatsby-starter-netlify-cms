import React from 'react'
import IconLeft from '../img/icon-left.svg'
import IconRight from '../img/icon-right.svg'
import { Link } from 'gatsby'

const Pagenation = ({ baseDir, currentPage, numPages }) => 
  {
    return numPages > 1 ?  
      <div className="pagenation">
        <div className="pagenation_left">
          {currentPage > 1 ? <Link to={currentPage === 2 ? baseDir : `${baseDir}${currentPage - 1}`}  className="pagenation_prev"><img src={IconLeft} alt="left" /></Link> : null
          }
        </div>
        <div className="pagenation_center">
          { 
            Array.from({ length: numPages }).map((unusedItem, index) => {
              const destination = index === 0 ? baseDir : `${baseDir}${index + 1}`
              if (index + 1 === currentPage) {
                return <Link to={destination} className="pagenation_number current">{index + 1}</Link>
              } else {
                return <Link to={destination}  className="pagenation_number">{index + 1}</Link>
              }
            })
          }
        </div>
        <div className="pagenation_right">
        {currentPage < numPages ?
          <Link to={`${baseDir}${currentPage + 1}`}className="pagenation_next"><img src={IconRight} alt="Right" /></Link> : null
        }
        </div>
      </div> 
    : null
  }

export default Pagenation;