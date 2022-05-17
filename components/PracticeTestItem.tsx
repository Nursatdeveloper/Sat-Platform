import { Button, Grid, IconButton, Paper, Popover, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CalculateIcon from '@mui/icons-material/Calculate';
import { IPracticeTestItem } from '../types/IPracticeTestItem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { useRouter } from 'next/router';

interface PracticeTestItemProps {
    test: IPracticeTestItem,
    index:number
}

const PracticeTestItem:FC<PracticeTestItemProps> = ({index, test}) => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [popoverText, setPopoverText] = useState('Has Reading part');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, text:string, hasPart: boolean) => {
        setAnchorEl(event.currentTarget);
        if(hasPart) {
            setPopoverText(`Contains ${text} Part`);
        } else {
            setPopoverText(`Not Contains ${text} Part`);
        }

    };

    const handleClose = () => {
    setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
    <Grid 
        key={index} 
        item  
        sx={{
            height:260,
            marginBottom: 5
        }}
    >
        <Paper
            onClick={() => router.push(`/practice/${test.id}`)}
            elevation={5}
            sx={{
                height: 230,
                width: 170,
                cursor: 'pointer',
                transition: 'width, height, 0.2s ease-in-out',
                '&:hover': {
                    height:240,
                    width:180
                }
            }}
        >
            <Grid container direction='column'>
                <div className='test-info'>{test.month} {test.year}</div>
                <div className='test-info'>{test.type}</div>
            </Grid>
            <Grid container justifyContent='space-evenly' style={{marginTop:15}}>
                <IconButton onClick={(e) => handleClick(e,'Reading', test.reading)}>
                    <AutoStoriesIcon color={test.reading ? 'primary' : 'disabled'}  />
                </IconButton>
                <IconButton onClick={(e)=> handleClick(e, 'Writing', test.writing)}> 
                    <BorderColorIcon color={test.writing ? 'secondary' : 'disabled'} />
                </IconButton>
                <IconButton onClick={(e) => handleClick(e, 'Math', test.math)}>
                    <CalculateIcon color={test.math ? 'success' : 'disabled'}  />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >        
                    <Typography sx={{ p: 1 }}>{popoverText}</Typography>
                </Popover>
                   
            </Grid>
            <Grid container style={{marginTop: 20, fontSize:14}} justifyContent='center'>
                <div>Answers:</div>
                {test.answers ? 
                   <CheckCircleIcon color='success' fontSize='small' />
                : <DoDisturbOnIcon color='error' fontSize='small' />}
            </Grid>
            <Grid container style={{marginTop: 5, fontSize:14}} justifyContent='center'>
                <div>Verified:</div>
                {test.verified ? 
                   <CheckCircleIcon color='success' fontSize='small' />
                : <DoDisturbOnIcon color='error' fontSize='small' />}
            </Grid>
        </Paper>
        <div>
      
    </div>
        <style jsx>
            {`
                .test-info {
                    text-align:center;
                    font-size:18px;
                    font-weight: 600;
                    margin-top:15px;
                    color: #4d4d4d;
                }
            `}
        </style>
    </Grid>

  )
}

export default PracticeTestItem