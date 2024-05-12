import { Box, Typography } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'
import { capitalizeLetter } from '~/utils/formatter'

const BAR_CHART_TITLE = 'bar chart'

function BarChart() {
  const data =
 [
   {
     'country': 'AD',
     'hot dog': 29,
     'hot dogColor': 'hsl(263, 70%, 50%)',
     'burger': 32,
     'burgerColor': 'hsl(198, 70%, 50%)',
     'sandwich': 198,
     'sandwichColor': 'hsl(80, 70%, 50%)',
     'kebab': 104,
     'kebabColor': 'hsl(153, 70%, 50%)',
     'fries': 89,
     'friesColor': 'hsl(300, 70%, 50%)',
     'donut': 165,
     'donutColor': 'hsl(308, 70%, 50%)'
   },
   {
     'country': 'AE',
     'hot dog': 128,
     'hot dogColor': 'hsl(290, 70%, 50%)',
     'burger': 89,
     'burgerColor': 'hsl(136, 70%, 50%)',
     'sandwich': 136,
     'sandwichColor': 'hsl(45, 70%, 50%)',
     'kebab': 21,
     'kebabColor': 'hsl(240, 70%, 50%)',
     'fries': 30,
     'friesColor': 'hsl(273, 70%, 50%)',
     'donut': 49,
     'donutColor': 'hsl(10, 70%, 50%)'
   },
   {
     'country': 'AF',
     'hot dog': 51,
     'hot dogColor': 'hsl(268, 70%, 50%)',
     'burger': 61,
     'burgerColor': 'hsl(7, 70%, 50%)',
     'sandwich': 56,
     'sandwichColor': 'hsl(197, 70%, 50%)',
     'kebab': 198,
     'kebabColor': 'hsl(155, 70%, 50%)',
     'fries': 48,
     'friesColor': 'hsl(43, 70%, 50%)',
     'donut': 139,
     'donutColor': 'hsl(325, 70%, 50%)'
   },
   {
     'country': 'AG',
     'hot dog': 46,
     'hot dogColor': 'hsl(94, 70%, 50%)',
     'burger': 135,
     'burgerColor': 'hsl(84, 70%, 50%)',
     'sandwich': 136,
     'sandwichColor': 'hsl(169, 70%, 50%)',
     'kebab': 93,
     'kebabColor': 'hsl(238, 70%, 50%)',
     'fries': 152,
     'friesColor': 'hsl(199, 70%, 50%)',
     'donut': 135,
     'donutColor': 'hsl(137, 70%, 50%)'
   },
   {
     'country': 'AI',
     'hot dog': 168,
     'hot dogColor': 'hsl(323, 70%, 50%)',
     'burger': 13,
     'burgerColor': 'hsl(74, 70%, 50%)',
     'sandwich': 103,
     'sandwichColor': 'hsl(292, 70%, 50%)',
     'kebab': 197,
     'kebabColor': 'hsl(303, 70%, 50%)',
     'fries': 80,
     'friesColor': 'hsl(95, 70%, 50%)',
     'donut': 68,
     'donutColor': 'hsl(271, 70%, 50%)'
   },
   {
     'country': 'AL',
     'hot dog': 97,
     'hot dogColor': 'hsl(196, 70%, 50%)',
     'burger': 82,
     'burgerColor': 'hsl(227, 70%, 50%)',
     'sandwich': 97,
     'sandwichColor': 'hsl(218, 70%, 50%)',
     'kebab': 90,
     'kebabColor': 'hsl(355, 70%, 50%)',
     'fries': 77,
     'friesColor': 'hsl(300, 70%, 50%)',
     'donut': 58,
     'donutColor': 'hsl(154, 70%, 50%)'
   },
   {
     'country': 'AM',
     'hot dog': 123,
     'hot dogColor': 'hsl(338, 70%, 50%)',
     'burger': 82,
     'burgerColor': 'hsl(356, 70%, 50%)',
     'sandwich': 13,
     'sandwichColor': 'hsl(39, 70%, 50%)',
     'kebab': 73,
     'kebabColor': 'hsl(174, 70%, 50%)',
     'fries': 193,
     'friesColor': 'hsl(45, 70%, 50%)',
     'donut': 131,
     'donutColor': 'hsl(156, 70%, 50%)'
   }
 ]

  return (
    <Box width={'100%'} height={'550px'}
    >
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
            {capitalizeLetter(BAR_CHART_TITLE)}
          </Typography>
        </Box>
      </Box>
      <ResponsiveBar
        data={data}
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id+': '+e.formattedValue+' in country: '+e.indexValue}
      />
    </Box>
  )
}

export default BarChart