import React from 'react'
import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
 } from 'components'


function home() {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142D"}>
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75,25]}
          colors={['#475be8',"#e4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60,40]}
          colors={['#475ae8',"#e4b8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={44684}
          series={[75,25]}
          colors={['#423be8',"#e428ef"]}
        />
        <PieChart
          title="Total Cities"
          value={482}
          series={[75,25]}
          colors={['#4658e8',"#78576"]}
        />
      </Box>
    </Box>
  )
}

export default home