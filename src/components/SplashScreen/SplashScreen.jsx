import React, { Suspense } from 'react';
import './SplashScreen.css';

import 'animate.css'

export default function SplashScreen() {
  return (
    <div className="SplashScreen">
      <div className="SplashScreenWrapper">
        <Suspense>
          <img src="/apple-touch-icon.png" alt="Poppy icon" />
        </Suspense>
      </div>
    </div>
  )
}
