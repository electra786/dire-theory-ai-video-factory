import React from 'react';
import {Composition, useCurrentFrame, interpolate} from 'remotion';

const Stickman = () => {
  const frame = useCurrentFrame();

  const walk = Math.sin(frame * 0.18);
  const bob = Math.abs(Math.sin(frame * 0.18)) * 12;
  const sway = Math.sin(frame * 0.09) * 8;

  const armLeft = walk * 45;
  const armRight = -walk * 45;
  const legLeft = -walk * 55;
  const legRight = walk * 55;

  const x = 360 + sway;
  const y = 620 - bob;

  return (
    <g
      stroke="white"
      strokeWidth="13"
      strokeLinecap="round"
      fill="none"
    >
      {/* Head */}
      <circle cx={x} cy={y - 190} r="48" />

      {/* Body */}
      <line x1={x} y1={y - 140} x2={x} y2={y + 35} />

      {/* Left arm */}
      <line
        x1={x} y1={y - 105}
        x2={x - 75 + armLeft} y2={y - 20}
      />

      {/* Right arm */}
      <line
        x1={x} y1={y - 105}
        x2={x + 75 + armRight} y2={y - 20}
      />

      {/* Left leg */}
      <line
        x1={x} y1={y + 35}
        x2={x - 55 + legLeft} y2={y + 160}
      />

      {/* Right leg */}
      <line
        x1={x} y1={y + 35}
        x2={x + 55 + legRight} y2={y + 160}
      />
    </g>
  );
};

const Main = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#101018',
      color: 'white',
      fontFamily: 'Arial',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute',
        top: 110,
        fontSize: 48,
        fontWeight: 'bold',
        letterSpacing: 5,
        opacity,
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
        opacity,
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
