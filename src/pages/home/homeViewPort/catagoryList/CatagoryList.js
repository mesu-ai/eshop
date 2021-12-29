import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ListIcon from '@mui/icons-material/List';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WatchIcon from '@mui/icons-material/Watch';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar } from '@mui/material';

const CatagoryList = () => {
    return (
        <Paper>
            <Toolbar style={{paddingLeft:'16px'}}  sx={{fontWeight:'bold',fontSize:'20px',color:'green'}}>
            <ListIcon sx={{mr:2,fontSize:'25px'}}/>
            Catagories
            </Toolbar>

            <Divider />
            <List>
                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon  >
                    <i class="fas fa-female fa-lg"></i>
                    </ListItemIcon>
                    <ListItemText  sx={{fontWeight:'bold'}}  primary="Women's Fashion"/>
                </ListItemButton>
                </ListItem>

                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon  >
                    <i class="fas fa-tshirt"></i>
                    </ListItemIcon>
                    <ListItemText sx={{fontWeight:'bold'}}  primary="Men's Fashion"/>
                </ListItemButton>
                </ListItem>

                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon  >
                    <PhoneIphoneIcon/>
                    </ListItemIcon>
                    <ListItemText sx={{fontWeight:'bold'}}  primary="Phone and Parts"/>
                </ListItemButton>
                </ListItem>

                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon  >
                    <WatchIcon/>
                    </ListItemIcon>
                    <ListItemText sx={{fontWeight:'bold'}}  primary="Jewelry & Watch"/>
                </ListItemButton>
                </ListItem>

                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon  >
                    <ShoppingBagIcon/>
                    </ListItemIcon>
                    <ListItemText sx={{fontWeight:'bold'}}  primary="Bag & Bagpack"/>
                </ListItemButton>
                </ListItem>

                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon  >
                    <HeadphonesIcon/>
                    </ListItemIcon>
                    <ListItemText sx={{fontWeight:'bold'}}  primary="Accessories"/>
                </ListItemButton>
                </ListItem>

                <ListItem className="list-item" disablePadding>
                <ListItemButton >
                    <ListItemIcon >
                    <HealthAndSafetyIcon/>
                    </ListItemIcon>
                    <ListItemText sx={{fontWeight:'bold'}}  primary="Beauty & Health"/>
                </ListItemButton>
                </ListItem>

             </List>
            
        </Paper>
    );
};

export default CatagoryList;