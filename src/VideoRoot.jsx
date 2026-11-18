import React from 'react';
import {Composition} from 'remotion';

const Main = () => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: '#101018',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 70,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    }}>
      DIRE THEORY
    </div>
  );
};

export const VideoRoot = () => {
  return (
    <Composition
      id="Main"
      component={Main}
      durationInFrames={300}
      fps={30}
      width={720}
      height={1280}
    />
  );
};
