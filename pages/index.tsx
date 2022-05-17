import { Box, Container, Grid, Paper, Skeleton } from '@mui/material'
import React from 'react'
import PracticeTestItem from '../components/PracticeTestItem'
import PracticeTestItemSkeleton from '../components/PracticeTestItemSkeleton'
import MainLayout from '../layouts/MainLayout'
import { IPracticeTestItem } from '../types/IPracticeTestItem'

const practiceTests:IPracticeTestItem[] = [
    {id: 1, month: 'March', year: '2022', type: 'US', reading: true, writing: true, math: true, answers: true, verified: true},
    {id: 2, month: 'May', year: '2020', type: 'International', reading: true, writing: false, math: true, answers: true, verified: false},
    {id: 3, month: 'December', year: '2021', type: 'US', reading: true, writing: true, math: true, answers: true, verified: true},
    {id: 4, month: 'August', year: '2022', type: 'US', reading: false, writing: true, math: true, answers: false, verified: false},
    {id: 5, month: 'September', year: '2020', type: 'US', reading: true, writing: true, math: true, answers: true, verified: false},
]

const Index = () => {
  return (
    <>
        <MainLayout>
            <Container className='border'>
                <Container>
                    <h2>New Practice Tests</h2>
                    <Grid container justifyContent='space-between' spacing={3} height={260}>
                        { practiceTests.length ? 
                            practiceTests.map((test, index) => 
                                <PracticeTestItem test={test} index={index} />) :
                            [1, 2, 3, 4, 5].map((index) => 
                                <PracticeTestItemSkeleton index={index} />)       
                        }
                    </Grid>
                </Container>

                <Container>
                    <h2>Verified Practice Tests</h2>
                    <Grid container justifyContent='space-between' spacing={3}>
                            {[0, 1, 2, 3, 4].map((value) => (
                                <Grid key={value} item>
                                <Paper
                                    sx={{
                                    height: 230,
                                    width: 170,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}
                                >

                                </Paper>
                                </Grid>
                            ))}
                        </Grid>
                </Container>

                <Container>
                    <h2>Hard Practice Tests</h2>
                    <Grid container justifyContent='space-between' spacing={3}>
                            {[0, 1, 2, 3, 4].map((value) => (
                                <Grid key={value} item>
                                <Paper
                                    sx={{
                                    height: 230,
                                    width: 170,
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                    }}
                                />
                                </Grid>
                            ))}
                        </Grid>
                </Container>
                
            </Container>
        </MainLayout>
        <style jsx>
            {`
                .fs-18{
                    font-size: 18px;
                }
                .mt-10{
                    margin-top:20px;
                }
            `}
        </style>
    </>
  )
}

export default Index