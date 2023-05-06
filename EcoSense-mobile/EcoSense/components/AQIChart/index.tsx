// import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

// import { useState, useEffect } from 'react';

// const AQIChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://192.168.0.100:8000/data/get_sensor_readings/AQI');
//       const responseData = await response.json();
//       setData(responseData);
//     };

//     fetchData();

//     const interval = setInterval(() => {
//       fetchData();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Chart
//       style={{ height: 190, width: 380, marginBottom: 10 }}
//       data={data.map((d, i) => ({ x: i, y: d }))}
//       padding={{ left: 40, bottom: 10, right: 20, top: 10 }}
//       xDomain={{ min: 0, max: data.length - 1 }}
//       yDomain={{ min: 0, max: 100 }}
//     >
//       <VerticalAxis
//         tickCount={11}
//         theme={{ labels: { formatter: (v) => v.toFixed(0) } }}
//       />
//       <HorizontalAxis
//         tickCount={data.length}
//         theme={{ labels: { formatter: (v) => null } }}
//       />
//       <Area
//         theme={{
//           gradient: {
//             from: { color: '#2596be' },
//             to: { color: '#527ff4', opacity: 0.6 },
//           },
//         }}
//       />
//       <Line
//         theme={{
//           stroke: { color: '#2596be', width: 2 },
//           scatter: { default: { width: 2, height: 2, rx: 2 } },
//         }}
//       />
//     </Chart>
//   );
// };

// export default AQIChart;

import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';
import { useEffect, useState } from 'react';

const AQIChart = ({ Data }) => {
  return (
    <Chart
      style={{ height: 190, width: 380, marginBottom: 10 }}
      data={Data.map((d, i) => ({ x: i, y: d }))}
      padding={{ left: 40, bottom: 10, right: 20, top: 10 }}
      xDomain={{ min: 0, max: Data.length - 1 }}
      yDomain={{ min: 0, max: 100 }}
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

export default AQIChart;

