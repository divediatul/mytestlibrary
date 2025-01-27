import React from 'react';
import liveStyle from './Blinker.scss';

function Blinker({
  isTextVisible,
  isbBlinkerSmall,
  transparentBtn,
  isBlinkerAnimation,
  inLineStyleBlinker,
}) {
  return (
    <span
      className={`${liveStyle['_live']} ${isTextVisible && !transparentBtn ? liveStyle['live-bg'] : ''} ${liveStyle[isbBlinkerSmall]} ${isBlinkerAnimation ? '' : liveStyle['no-animation']}`}
      style={{ ...inLineStyleBlinker }}
    >
      <span className={liveStyle['blinker']}>
        <span className={liveStyle['blinkOuter']}></span>
        <span className={liveStyle['blinkInner']}></span>
      </span>
      {isTextVisible && (
        <span className={`${liveStyle['text']} text`}>
          LIVE
        </span>
      )}
    </span>
  );
}

Blinker.propTypes = {};
Blinker.defaultProps = {
  isTextVisible: false,
  isbBlinkerSmall: '',
  transparentBtn: false,
  isBlinkerAnimation: true,
  inLineStyleBlinker: {},
};

export default Blinker;
