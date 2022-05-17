import { FC, ReactNode, useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import { useRouter } from 'next/router';
import { Backdrop, Button, CircularProgress, Divider, Grid } from '@mui/material';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout:FC<MainLayoutProps> = ({children}) => {
    
    const drawerWidth = 240;
    const router = useRouter();
    const [showBackDrop, setShowBackDrop] = useState(false);
    const handleClose = () => {
        setShowBackDrop(false);
    };
    const handleToggle = () => {
        setShowBackDrop(!showBackDrop);
    };

    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" onClick={() => router.push("/")}>
              SAT Practice
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
                {['2022', '2021', '2020', '2019', '2018'].map((item, index) =>
                    <Grid>
                        <ListItem 
                            key={index}
                            sx={{
                                cursor: 'pointer'
                            }}>
                            <Grid container justifyContent='center' onClick={() => router.push(`/${item}`)}>{item}</Grid>
                        </ListItem>
                        <Divider />
                    </Grid>     
                            
                )}
                <Button onClick={handleToggle}>Show backdrop</Button>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '50px' }}>
          {children}
        </Box>
        
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={showBackDrop}
            onClick={handleClose}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
}

export default MainLayout