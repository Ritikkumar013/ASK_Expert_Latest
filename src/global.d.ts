  declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      nextArrow?: React.ReactNode;
      prevArrow?: React.ReactNode;
      // Add more options as needed based on react-slick's API
    }
  
    export default class Slider extends React.Component<Settings> {}
  }

declare module '@dotlottie/player-component' {
  export const DotLottiePlayer: React.ComponentType<{
    src: string;
    autoplay: boolean;
    loop: boolean;
    className: string;
  }>;
}