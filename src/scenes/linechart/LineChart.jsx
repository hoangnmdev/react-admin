import { Box, Typography } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import { capitalizeLetter } from '~/utils/formatter'

const LINE_CHART_TITLE = 'line chart'
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
    }
  ]
  return (
    <Box width={'100%'} height={'550px'}>
      <Box
        borderTop= '2px solid rgba(0, 0, 0, 0.1)'
        borderBottom= '2px solid rgba(0, 0, 0, 0.1)'
        bgcolor={'white'}
        height={'60px'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Box>
          <Typography
            fontSize={'25px'}
            fontWeight={'600'}
            p={'12px'}
            ml={'10px'}
          >
            {capitalizeLetter(LINE_CHART_TITLE)}
          </Typography>
        </Box>
      </Box>

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