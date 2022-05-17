import { Grid, Skeleton } from '@mui/material'
import React, { FC } from 'react'

interface PracticeTestItemSkeletonProps {
    index: number;
}

const PracticeTestItemSkeleton:FC<PracticeTestItemSkeletonProps> = ({index}) => {
  return (
    <Grid item>
        <Skeleton
            key={index}
            sx={{ bgcolor: 'grey.300' }}
            variant="rectangular"
            width={170}
            height={230}
        />
    </Grid>
  )
}

export default PracticeTestItemSkeleton