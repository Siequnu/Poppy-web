import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MessageIcon from '@mui/icons-material/Message';

import { Device } from '@capacitor/device';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    const [devicePlatform, setDevicePlatform] = React.useState('web')
    const getDeviceInfo = async () => {
      const info = await Device.getInfo();
      setDevicePlatform(info.platform)
    };
    getDeviceInfo()
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="navbar"
        style={{
          paddingBottom : devicePlatform === 'web' ? '0' : '20px',
          height: devicePlatform === 'web' ? 'auto' : '80px'
          }}
      >
        <BottomNavigationAction component={Link} to="/" label="Poppy" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/about" label="Art" icon={<BubbleChartIcon />} />
        <BottomNavigationAction component={Link} to="/contact" label="Inquiry" icon={<MessageIcon />} />
        
      </BottomNavigation>
    );
  }
