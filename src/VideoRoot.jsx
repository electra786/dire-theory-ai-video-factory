import React from 'react';
import {Composition, useCurrentFrame, interpolate} from 'remotion';

const Stickman = () => {
  const frame = useCurrentFrame();
  const phase = frame * 0.18;

  const x = interpolate(frame, [0, 299], [150, 570], {
    extrapolateRight: 'clamp',
  });

  const bob = Math.abs(Math.sin(phase)) * 9;
  const leftLeg = Math.sin(phase) * 28;
  const rightLeg = Math.sin(phase + Math.PI) * 28;
  const leftKnee = Math.max(0, Math.cos(phase)) * 35;
  const rightKnee = Math.max(0, Math.cos(phase + Math.PI)) * 35;

  return (
    <g
      transform={`translate(${x}, ${620 - bob})`}
      stroke="white"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    >
      <circle cx="0" cy="-200" r="42" />
      <line x1="0" y1="-158" x2="0" y2="20" />

      <g transform={`rotate(${Math.sin(phase + Math.PI) * 38} 0 -125)`}>
        <line x1="0" y1="-125" x2="0" y2="-45" />
        <line x1="0" y1="-45" x2="-15" y2="-5" />
      </g>

      <g transform={`rotate(${Math.sin(phase) * 38} 0 -125)`}>
        <line x1="0" y1="-125" x2="0" y2="-45" />
        <line x1="0" y1="-45" x2="15" y2="-5" />
      </g>

      <g transform={`rotate(${leftLeg} 0 20)`}>
        <line x1="0" y1="20" x2="0" y2="100" />
        <g transform={`rotate(${leftKnee} 0 100)`}>
          <line x1="0" y1="100" x2="0" y2="175" />
          <line x1="0" y1="175" x2="30" y2="175" />
        </g>
      </g>

      <g transform={`rotate(${rightLeg} 0 20)`}>
        <line x1="0" y1="20" x2="0" y2="100" />
        <g transform={`rotate(${rightKnee} 0 100)`}>
          <line x1="0" y1="100" x2="0" y2="175" />
          <line x1="0" y1="175" x2="30" y2="175" />
        </g>
      </g>
    </g>
  );
};

const Main = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#101018',
      color: 'white',
      fontFamily: 'Arial',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute',
        top: 110,
        fontSize: 48,
        fontWeight: 'bold',
        letterSpacing: 5,
      }}>
        THE HUMAN MIND
      </div>

      <svg width="720" height="1280" viewBox="0 0 720 1280">
        <Stickman />
      </svg>

      <div style={{
        position: 'absolute',
        bottom: 150,
        fontSize: 38,
        color: '#00E5FF',
        fontWeight: 'bold',
      }}>
        KEEP MOVING FORWARD
      </div>
    </div>
  );
};

export const VideoRoot = () => (
  <Composition
    id="Main"
    component={Main}
    durationInFrames={300}
    fps={30}
    width={720}
    height={1280}
  />
);
