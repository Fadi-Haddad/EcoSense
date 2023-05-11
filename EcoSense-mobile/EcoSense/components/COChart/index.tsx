import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

const CO2Chart = ({ Data }) => {
  return (
    <Chart
      style={{ height: 190, width: 380, marginBottom: 10 }}
      data={Data.map((d, i) => ({ x: i, y: d }))}
      padding={{ left: 40, bottom: 10, right: 20, top: 10 }}
      xDomain={{ min: 0, max: Data.length - 1 }}
      yDomain={{ min: 0, max: 5 }}
    >
      <VerticalAxis
        tickCount={11}
        theme={{ labels: { formatter: (v) => v.toFixed(0) } }}
      />
      <HorizontalAxis
        tickCount={Data.length}
        theme={{ labels: { formatter: (v) => null } }}
      />
      <Area
        theme={{
          gradient: {
            from: { color: '#2596be' },
            to: { color: '#527ff4', opacity: 0.6 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: '#2596be', width: 2 },
          scatter: { default: { width: 2, height: 2, rx: 2 } },
        }}
      />
    </Chart>
  );
};

export default CO2Chart;

