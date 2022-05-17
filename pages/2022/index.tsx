import { Container, Grid } from '@mui/material'
import React from 'react'
import PracticeTestItem from '../../components/PracticeTestItem'
import PracticeTestItemSkeleton from '../../components/PracticeTestItemSkeleton'
import MainLayout from '../../layouts/MainLayout'
import { IPracticeTestItem } from '../../types/IPracticeTestItem'

const Index = () => {
    const practiceTests:IPracticeTestItem[] = [
        {id: 1, month: 'March', year: '2022', type: 'US', reading: true, writing: true, math: true, answers: true, verified: true},
        {id: 2, month: 'May', year: '2020', type: 'International', reading: true, writing: false, math: true, answers: true, verified: false},
        {id: 3, month: 'December', year: '2021', type: 'US', reading: true, writing: true, math: true, answers: true, verified: true},
        {id: 4, month: 'August', year: '2022', type: 'US', reading: false, writing: true, math: true, answers: false, verified: false},
        {id: 5, month: 'September', year: '2020', type: 'US', reading: true, writing: true, math: true, answers: true, verified: false},
        {id: 6, month: 'March', year: '2022', type: 'US', reading: true, writing: true, math: true, answers: true, verified: true},
        {id: 7, month: 'May', year: '2020', type: 'International', reading: true, writing: false, math: true, answers: true, verified: false},
        {id: 8, month: 'December', year: '2021', type: 'US', reading: true, writing: true, math: true, answers: true, verified: true},
        {id: 9, month: 'August', year: '2022', type: 'US', reading: false, writing: true, math: true, answers: false, verified: false},
        {id: 10, month: 'September', year: '2020', type: 'US', reading: true, writing: true, math: true, answers: true, verified: false},
    ]
  return (
    <MainLayout>
        <Container>
            <h2>2022 - Practice Tests</h2>
            <Grid container justifyContent='space-between' spacing={3} >
                { practiceTests.length ? 
                    practiceTests.map((test, index) => 
                        <PracticeTestItem test={test} index={index} />) :
                    [1, 2, 3, 4, 5].map((index) => 
                        {
                            return <PracticeTestItemSkeleton index={index} />
                        })       
                }
            </Grid>
        </Container>
    </MainLayout>
  )
}

export default Index