import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

const HumidityChart = ()=>{
    return (
      <Chart
      style={{ height: 190, width: 380, marginBottom: 10}}
      data={[
        { x: 0, y: 30 },
        { x: 1, y: 32 },
        { x: 2, y: 33 },
        { x: 3, y: 34 },
        { x: 4, y: 35 },
        { x: 5, y: 37 },
        { x: 6, y: 38 },
        { x: 7, y: 36 },
        { x: 8, y: 35 },
        { x: 9, y: 35},
        { x: 10, y: 32 },
      ]}
        padding={{ left: 40, bottom: 10, right: 20, top: 10 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 0, max: 50 }}>
        <VerticalAxis tickCount={5} 
        theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
        <HorizontalAxis tickCount={10} theme={{ labels: { formatter: (v) => null } }}/>
        <Area theme={{ gradient: { from: { color: '#2596be' }, to: { color: '#527ff4', opacity: 0.7 } }}} />
        <Line theme={{ stroke: { color: '#2596be', width: 2 }, scatter: { default: { width: 2, height: 2, rx: 2 }} }} />
      </Chart>)
  }

  export default HumidityChart;