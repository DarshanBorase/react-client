import React from 'react';
import { TextField, Slider } from '../../component';
import { inputContainer, mainContainer } from './style';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../configs/constant';

const TextFieldDemo = () => {
  const images = [
    `${PUBLIC_IMAGE_FOLDER}cloud.jpg`,
    `${PUBLIC_IMAGE_FOLDER}dns-server.png`,
    `${PUBLIC_IMAGE_FOLDER}full-stack-web-development.jpg`,
    `${PUBLIC_IMAGE_FOLDER}js.jpg`,
    `${PUBLIC_IMAGE_FOLDER}load-balancer.png`,
  ];

  return (
    <>
      <div style={mainContainer}>
        <Slider altText="Image not found" banners={images} defaultBanner={DEFAULT_BANNER_IMAGE} duration={2000} height={200} random={false} />
      </div>
      <div style={inputContainer}>
        <TextField label="This is a disable Input" value="Disabled Input" disabled />
        <TextField label="A Valid Input" value="Accessible" disabled={false} />
        <TextField label="An Input with error" value="101" errorMessage="Could not be greater than" disabled={false} />
      </div>
    </>
  );
};

export default TextFieldDemo;