import React from 'react';
import style from './LiveNews.scss';
import Blinker from '../common/Blinker.js';

function LiveNews({ blogData, isNoShadow, transparentBtn, isWrap, isMobile }) {
  return (
    <>
      <div
        className={`${style['mainelection']} ${
          !isNoShadow ? style['shadow'] : ''
        }`}
      >
        <div className={style['live_elction']}>
          
            <a
              key={blogData?.msid}
              href={`#`}
              className={`${style?.items}`}
              title={`${blogData?.msid}`}
            >
              {!isMobile && (
                <>
                  {blogData?.cmstype === 'LIVEBLOG' && (
                    <Blinker
                      isbBlinkerSmall={transparentBtn}
                      isTextVisible={true}
                      transparentBtn={transparentBtn}
                      inLineStyleBlinker={{
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                      }}
                    />
                  )}
                </>
              )}
              {/* <Blinker isElection={true} /> */}
              <p>
                {isMobile && (
                  <>
                    {blogData?.cmstype === 'LIVEBLOG' && (
                      <Blinker
                        isbBlinkerSmall={transparentBtn}
                        isTextVisible={true}
                        transparentBtn={transparentBtn}
                        inLineStyleBlinker={{
                          fontWeight: 'bold',
                          fontSize: '0.75rem',
                          marginRight: '8px',
                          position: 'relative',
                          top: '3px',
                        }}
                      />
                    )}
                  </>
                )}
                {blogData?.title}
              </p>
            </a>
        </div>
      </div>
    </>
  );
}

LiveNews.defaultProps = {
  isNoShadow: false,
  transparentBtn: false,
  isMobile: false,
};

export default LiveNews;
