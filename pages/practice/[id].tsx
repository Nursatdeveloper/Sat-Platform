import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import PracticeTestAnswers from '../../components/PracticeTestAnswers';
import PracticeTestViewer from '../../components/PracticeTestViewer';
import MainLayout from '../../layouts/MainLayout'

const PracticePage = () => {
    const { query } = useRouter();

  return (
    <MainLayout>
        <Grid container>
            <PracticeTestViewer />
            <PracticeTestAnswers />
        </Grid>
    </MainLayout>
  )
}

export default PracticePage