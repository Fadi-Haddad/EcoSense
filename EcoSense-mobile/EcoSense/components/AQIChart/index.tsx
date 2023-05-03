import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

const AQIChart = ()=>{
    return (
      <Chart
      style={{ height: 190, width: 380, marginBottom: 10}}
      data={[
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 8 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13 },
        { x: 10, y: 18 },
      ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis tickCount={11} 
        theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
        <HorizontalAxis tickCount={10} theme={{ labels: { formatter: (v) => null } }}/>
        <Area theme={{ gradient: { from: { color: '#00e0ff' }, to: { color: '#00e0ff', opacity: 0.7 } }}} />
        <Line theme={{ stroke: { color: '#00bbff', width: 2 }, scatter: { default: { width: 2, height: 2, rx: 2 }} }} />
      </Chart>)
  }

  export default AQIChart;