import React from 'react'
import TrendingFootware from './TrendingFootware'
import TrendingIndian from './TrendingIndian'
import TrendingSports from './TrendingSports'

export default function Trending() {
  return (
    <div>
        <TrendingIndian/>
        <TrendingSports/>
        <TrendingFootware/>
    </div>
  )
}
