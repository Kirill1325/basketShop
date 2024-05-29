import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemText } from '@mui/material';
import CustomizedTables from './SizeChartTable';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Description" {...a11yProps(0)} />
                    <Tab label="Size Chart" {...a11yProps(1)} />
                    <Tab label="Shipping" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Description
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <CustomizedTables />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <List>
                    <ListItem>
                        <ListItemText primary='• £6.99 via DPD Standard Service' secondary='Order now to receive in 5 days' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='• £9.99 via DPD Next Working Day Priority Service' secondary='Order now to receive in 3 days' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='• FREE DPD Standard Service on orders over £150.00' secondary='Order now to receive in 5 days' />
                    </ListItem>
                </List>
            </CustomTabPanel>
        </Box>
    );
}