import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

import './TopBar.css';

import { Device } from '@capacitor/device';

export default function TopBar(props) {

  const [devicePlatform, setDevicePlatform] = React.useState('web')
  const getDeviceInfo = async () => {
    const info = await Device.getInfo();
    setDevicePlatform(info.platform)
  };
  getDeviceInfo()

  return (
    <div className="TopBar" style={{
        paddingTop : devicePlatform === 'web' ? '0' : '35px',
        height: devicePlatform === 'web' ? '75px' : '75px'
        }}
      >
      <Link component={RouterLink} to="/" className="AccountLink">
        <img className="MyoLogo" src="/apple-touch-icon.png" alt="Myo app logo" />
      </Link>
      <h3 className="MyoText">Poppy</h3>
      <Link component={RouterLink} to="/user" className="AccountLink">
        
      </Link>
    </div>
  )
}

