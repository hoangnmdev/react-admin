import { Box, useTheme, Typography } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/orders'// Adjust URL as per your backend API
const dailysales = 'daily sales'
const LineChart = () => {
  const [startDate, setStartDate] = useState(new Date('2024-06-21'))
  const [endDate, setEndDate] = useState(new Date('2024-06-30'))
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const theme = useTheme()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/daily-sales`)
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const formattedData = useMemo(() => {
    if (!data) return []

    const totalSalesLine = {
      id: 'totalSales',
      color: theme.palette.secondary.main,
      data: []
    }

    data.forEach(({ date, totalSales }) => {
      const dateFormatted = new Date(date)
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf('-') + 1)
        totalSalesLine.data.push({ x: splitDate, y: totalSales })
      }
    })

    return [totalSalesLine]
  }, [data, startDate, endDate, theme])

  if (isLoading) {
    return <Box>Loading...</Box>
  }

  if (error) {
    return <Box>Error: {error.message}</Box>
  }

  return (
    <Box >
      <Box
        borderTop= '2px solid rgba(0, 0, 0, 0.1)'
        borderBottom= '2px solid rgba(0, 0, 0, 0.1)'
        bgcolor={'white'}
        height={'60px'}
        display={'flex'}
        width={'100%'}
        justifyContent={'space-between'}
      >
        <Box>
          <Typography
            fontSize={'25px'}
            fontWeight={'600'}
            p={'12px'}
            ml={'10px'}
          >
            {dailysales.toUpperCase()}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems={'center'} pr={'30px'}>
          <Box>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Box>
          <Box>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Box>
        </Box>
      </Box>
      <Box height="70vh" m="1rem 1rem">


        <ResponsiveLine
          data={formattedData}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200]
                }
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200]
                }
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary[200],
                  strokeWidth: 1
                },
                text: {
                  fill: theme.palette.secondary[200]
                }
              }
            },
            legends: {
              text: {
                fill: theme.palette.secondary[200]
              }
            },
            tooltip: {
              container: {
                color: theme.palette.primary.main
              }
            }
          }}
          colors={{ datum: 'color' }}
          margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: '100',
            max: 'auto',
            stacked: false,
            reverse: false
          }}
          yFormat=" >-.3f"
          curve="catmullRom"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: 'Month',
            legendOffset: 60,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Total',
            legendOffset: -50,
            legendPosition: 'middle'
          }}
          enableGridX={false}
          enableGridY={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'top-right',
              direction: 'column',
              justify: false,
              translateX: 50,
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
    </Box>
  )
}

export default LineChart
