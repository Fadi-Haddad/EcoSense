import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const MyChart = ()=>{
    return (
      <Chart
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: -2, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
        <HorizontalAxis tickCount={5} />
        <Area theme={{ gradient: { from: { color: '#fff000' }, to: { color: '#fff000', opacity: 0.4 } }}} />
        <Line theme={{ stroke: { color: '#fff999', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
      </Chart>)
  }