import localFont from 'next/font/local';


export const regime = localFont({
  src: [
    {
        path: '../public/fonts/Regime-Light.ttf',
        weight: '300',
        style: 'normal',
    },
    {
        path: '../public/fonts/Regime-LightOblique.ttf',
        weight: '300',
        style: 'italic',
    },
    {
      path: '../public/fonts/Regime-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Regime-RegularOblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Regime-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Regime-MediumOblique.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Regime-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Regime-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
    // ...Add the rest as needed
  ],
  variable: '--font-regime',
  display: 'swap',
});