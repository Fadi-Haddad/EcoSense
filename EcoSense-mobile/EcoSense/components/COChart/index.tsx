import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

const COChart = ()=>{
    return (
      <Chart
      style={{ height: 190, width: 380, marginBottom: 10}}
      data={[
        { x: 0, y: 3.8 },
        { x: 1, y: 4 },
        { x: 2, y: 4.2 },
        { x: 3, y: 4.3 },
        { x: 4, y: 4.5 },
        { x: 5, y: 4.6 },
        { x: 6, y: 4.4 },
        { x: 7, y: 4.3 },
        { x: 8, y: 4.5 },
        { x: 9, y: 4.6},
        { x: 10, y: 4.7 },
      ]}
        padding={{ left: 40, bottom: 10, right: 20, top: 10 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 1, max: 5 }}>
        <VerticalAxis tickCount={5} 
        theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
        <HorizontalAxis tickCount={10} theme={{ labels: { formatter: (v) => null } }}/>
        <Area theme={{ gradient: { from: { color: '#2596be' }, to: { color: '#527ff4', opacity: 0.7 } }}} />
        <Line theme={{ stroke: { color: '#2596be', width: 2 }, scatter: { default: { width: 2, height: 2, rx: 2 }} }} />
      </Chart>)
  }

  export default COChart;