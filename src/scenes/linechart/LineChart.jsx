import { Box } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

function LineChart() {

  const data = [
    {
      'id': 'japan',
      'color': 'hsl(134, 70%, 50%)',
      'data': [
        {
          'x': 'plane',
          'y': 129
        },
        {
          'x': 'helicopter',
          'y': 190
        },
        {
          'x': 'boat',
          'y': 177
        },
        {
          'x': 'train',
          'y': 5
        },
        {
          'x': 'subway',
          'y': 13
        },
        {
          'x': 'bus',
          'y': 228
        },
        {
          'x': 'car',
          'y': 228
        },
        {
          'x': 'moto',
          'y': 265
        },
        {
          'x': 'bicycle',
          'y': 297
        },
        {
          'x': 'horse',
          'y': 270
        },
        {
          'x': 'skateboard',
          'y': 134
        },
        {
          'x': 'others',
          'y': 266
        }
      ]
    },
    {
      'id': 'france',
      'color': 'hsl(191, 70%, 50%)',
      'data': [
        {
          'x': 'plane',
          'y': 167
        },
        {
          'x': 'helicopter',
          'y': 68
        },
        {
          'x': 'boat',
          'y': 74
        },
        {
          'x': 'train',
          'y': 251
        },
        {
          'x': 'subway',
          'y': 241
        },
        {
          'x': 'bus',
          'y': 225
        },
        {
          'x': 'car',
          'y': 39
        },
        {
          'x': 'moto',
          'y': 138
        },
        {
          'x': 'bicycle',
          'y': 186
        },
        {
          'x': 'horse',
          'y': 178
        },
        {
          'x': 'skateboard',
          'y': 115
        },
        {
          'x': 'others',
          'y': 286
        }
      ]
    },
    {
      'id': 'us',
      'color': 'hsl(120, 70%, 50%)',
      'data': [
        {
          'x': 'plane',
          'y': 123
        },
        {
          'x': 'helicopter',
          'y': 48
        },
        {
          'x': 'boat',
          'y': 55
        },
        {
          'x': 'train',
          'y': 25
        },
        {
          'x': 'subway',
          'y': 235
        },
        {
          'x': 'bus',
          'y': 105
        },
        {
          'x': 'car',
          'y': 239
        },
        {
          'x': 'moto',
          'y': 149
        },
        {
          'x': 'bicycle',
          'y': 253
        },
        {
          'x': 'horse',
          'y': 194
        },
        {
          'x': 'skateboard',
          'y': 48
        },
        {
          'x': 'others',
          'y': 121
        }
      ]
    },
    {
      'id': 'germany',
      'color': 'hsl(188, 70%, 50%)',
      'data': [
        {
          'x': 'plane',
          'y': 283
        },
        {
          'x': 'helicopter',
          'y': 13
        },
        {
          'x': 'boat',
          'y': 268
        },
        {
          'x': 'train',
          'y': 283
        },
        {
          'x': 'subway',
          'y': 128
        },
        {
          'x': 'bus',
          'y': 75
        },
        {
          'x': 'car',
          'y': 198
        },
        {
          'x': 'moto',
          'y': 19
        },
        {
          'x': 'bicycle',
          'y': 31
        },
        {
          'x': 'horse',
          'y': 209
        },
        {
          'x': 'skateboard',
          'y': 239
        },
        {
          'x': 'others',
          'y': 34
        }
      ]
    },
    {
      'id': 'norway',
      'color': 'hsl(303, 70%, 50%)',
      'data': [
        {
          'x': 'plane',
          'y': 148
        },
        {
          'x': 'helicopter',
          'y': 184
        },
        {
          'x': 'boat',
          'y': 174
        },
        {
          'x': 'train',
          'y': 206
        },
        {
          'x': 'subway',
          'y': 67
        },
        {
          'x': 'bus',
          'y': 108
        },
        {
          'x': 'car',
          'y': 274
        },
        {
          'x': 'moto',
          'y': 152
        },
        {
          'x': 'bicycle',
          'y': 39
        },
        {
          'x': 'horse',
          'y': 118
        },
        {
          'x': 'skateboard',
          'y': 160
        },
        {
          'x': 'others',
          'y': 42
        }
      ]
    }
  ]
  return (
    <Box width={'100%'} height={'600px'}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </Box>
  )
}

export default LineChart