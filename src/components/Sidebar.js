import * as React from 'react';
import {
    Box,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Senecaglobal from '../../src/senecaglobal.png';
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sidebarData = [
        {
            name: "Dashboard",
            url: "/dashboard"
        },
        {
            name: "Products",
            url: "/Products"
        },
        {
            name: "Send email",
            url: "/Sendemail"
        },
        {
            name: "All Mails",
            url: "/allmails"
        },
        {
            name: "Drafts",
            url: "/drafts"
        },
        {
            name: "Trash",
            url: "/trash"
        }]

    const drawer = (
        <div>
            <div style={{ height: '50px', width: '50px', display: 'inline-flex' }}>
                <img src={Senecaglobal} alt="logo" />
                <div style={{ display: 'inline-flex', textAlign: 'center' }}>
                    <h3 style={{ marginTop: '18px', marginLeft: '5px' }}> Seneca </h3>
                    <h3 style={{ marginTop: '18px', marginLeft: '5px' }}> Global </h3>
                </div>
            </div>
            <Divider />
            <List>
                {sidebarData.map((obj, index) => (
                    <ListItem key={obj.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Link to={obj.url} className="btn btn-primary">
                                <ListItemText primary={obj.name} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
            </Box>
        </Box>
    );
}