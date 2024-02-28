import React from 'react'

import ArtistChart from './artist-chart'
import './chart-rank.css'

const ChartRank = (props) => {
  return (
    <div className="chart-rank-container">
      <ArtistChart rootClassName="artist-chart-root-class-name"></ArtistChart>
      <ArtistChart rootClassName="artist-chart-root-class-name1"></ArtistChart>
    </div>
  )
}

export default ChartRank
