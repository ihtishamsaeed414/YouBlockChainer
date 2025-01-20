import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

let style = {
    '& .Mui-selected': {
        color: '#3770FF !important'
    },
    '& .MuiTabs-indicator': {
        backgroundColor: '#3770FF'
    },
    '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root ': {
        textTransform: 'none'
    }
}

function TabPanel(props) {
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} sx={style} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Lorem" sx={{}} {...a11yProps(0)} />
                    <Tab label="Ipsum" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Typography sx={{ fontSize: { md: '16px', sm: '14px', xs: '12px' } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum accumsan dolor id tincidunt. Pellentesque nec eros euismod, sodales nulla ac, rhoncus libero. Mauris tristique quis quam in facilisis. Sed ac ligula sit amet est malesuada sagittis. Duis id aliquam velit. Sed vel sollicitudin magna. Nullam malesuada libero vel tortor ultricies vehicula. Aenean nec ullamcorper ipsum. Sed vitae aliquet risus.</Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography sx={{ fontSize: { md: '16px', sm: '14px', xs: '12px' } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum accumsan dolor id tincidunt. Pellentesque nec eros euismod, sodales nulla ac, rhoncus libero. Mauris tristique quis quam in facilisis. Sed ac ligula sit amet est malesuada sagittis. Duis id aliquam velit. Sed vel sollicitudin magna. Nullam malesuada libero vel tortor ultricies vehicula. Aenean nec ullamcorper ipsum. Sed vitae aliquet risus.</Typography>
            </TabPanel>
        </Box>
    );
}