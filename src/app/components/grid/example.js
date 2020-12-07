export default {
  widgets: [{
      id: 1,
      rows: 6,
      cols: 10,
      x: 4,
      y: 1,
      widget: {
        type: 'BarWidget',
        name: 'Hello Bar',
        config: {
          type: 'bar',
          series: [{
            values: [
              4642,
              4345,
              2350,
              1251
            ]
          }]
        }
      }
    },
    {
      id: 1,
      rows: 6,
      cols: 10,
      x: 4,
      y: 8,
      widget: {
        type: 'RadarWidget',
        name: 'Hello Radar',
        config: {
          type: 'radar',
          plot: {
            aspect: 'area',
            animation: {
              effect: 3,
              sequence: 1,
              speed: 700
            }
          },
          scaleV: {
            visible: false
          },
          scaleK: {
            values: '0:5:1',
            labels: ['Dogs', 'Cats', 'Fish', 'Birds', 'Reptiles', 'Horses'],
            item: {
              fontColor: '#607D8B',
              backgroundColor: "white",
              borderColor: "#aeaeae",
              borderWidth: 1,
              padding: '5 10',
              borderRadius: 10
            },
            refLine: {
              lineColor: '#c10000'
            },
            tick: {
              lineColor: '#59869c',
              lineWidth: 2,
              lineStyle: 'dotted',
              size: 20
            },
            guide: {
              lineColor: "#607D8B",
              lineStyle: 'solid',
              alpha: 0.3,
              backgroundColor: "#c5c5c5 #718eb4"
            }
          },
          series: [{
              values: [59, 39, 38, 19, 21, 35],
              text: 'farm'
            },
            {
              values: [20, 20, 54, 41, 41, 35],
              lineColor: '#53a534',
              backgroundColor: '#689F38'
            }
          ]
        }
      }
    },
    {
      id: 2,
      rows: 6,
      cols: 10,
      x: 16,
      y: 1,
      widget: {
        type: 'LineWidget',
        name: 'Hello Line',
        config: {
          "type": "line",
          "series": [{
            "values": [20, 40, 25, 50, 15, 45, 33, 34]
          }, {
            "values": [5, 30, 21, 18, 59, 50, 28, 33]
          }, {
            "values": [30, 5, 18, 21, 33, 41, 29, 15]
          }]
        }
      }
    },
    {
      id: 3,
      rows: 6,
      cols: 10,
      x: 16,
      y: 8,
      widget: {
        type: 'AreaWidget',
        name: 'Hello Area',
        config: {
          type: "area",
          series: [{
              values: [20, 40, 25, 50, 15, 45, 33, 34]
            },
            {
              values: [5, 30, 21, 18, 59, 50, 28, 33]
            },
            {
              values: [30, 5, 18, 21, 33, 41, 29, 15]
            }

          ]
        }
      }
    }
  ]
}
