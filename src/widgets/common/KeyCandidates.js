import React, { useState, useEffect, useRef } from 'react';
import Link from 'components/common/Link';
import { isAMPRequest } from '../../../utils/serverUtils';
import style from './KeyCandidates.scss';
import SlickWrapper from 'components/common/WrapperComponents/SlickWrapper/SlickWrapper';
import { getBaseUrl } from 'utils/common';
import { partyFlag } from 'constants/index';
import ElectionTabs from './ElectionTabs';
import { isAMPURL } from 'utils/common';

const defaultImage = '/assets/images/default-party.png';

const KeyCandidates = ({
  data,
  loadKeyCandidateData,
  pathname,
  slidesToShow,
  inLineStyle,
  changeStyle,
}) => {
  const [activeTab, setActiveTab] = useState(data?.headers[0] || {});
  return (
    data?.data?.length > 0 && (
      <div
        className={`${style['key-candidates']} ${style[changeStyle]} ${style.slider}`}
        style={{ ...inLineStyle }}
      >
        <h2>Key Candidates</h2>
        <div className={style.tabWrapper}>
          {data?.headers?.length > 0 &&
            data?.headers?.map((item, index) => (
              <ElectionTabs
                item={item}
                isActive={
                  isAMPURL(pathname) && index == 0
                    ? true
                    : activeTab?.msid === item?.msid
                }
                tabSize={'medium'}
                loadKeyCandidateData={loadKeyCandidateData}
                setActiveTab={setActiveTab}
                pathname={pathname}
              />
            ))}
        </div>
        <SlickWrapper
          arrows={true}
          dots={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          infinite={false}
          changeSliderStyle={'gap-20'}
          marginBottom={0}
        >
          {data?.data?.slice(0, 10)?.map((item, index) => (
            <div key={index}>
              <div className={style.candidate}>
                <span
                  className={`${style.status} ${style[item?.result.toLowerCase() === 'wins' ? 'won' : item?.result.toLowerCase() === 'loses' ? 'lost' : 'awaited']}`}
                >
                  {item?.result === '-'
                    ? 'Awaited'
                    : item?.result?.trim()?.toLowerCase() == 'loses'
                      ? 'Lost'
                      : item?.result}
                </span>
                <span className={style.image}>
                  <img
                    src={
                      process.env.ELECTION_IMAGE_URL +
                      `${
                        item?.image?.length > 4 ? item?.image : 'male-user.svg'
                      }`
                    }
                    alt=""
                  />
                </span>
                <div className={style.details}>
                  <h5>{item?.candidateName || ''}</h5>
                  <p>{item?.nameen || ''}</p>
                </div>
                <div className={style.partyLogo}>
                  <ImageSSR
                    partyName={
                      process.env.NEXT_PUBLIC_PHOTO_API +
                      '/photo/' +
                      `${
                        partyFlag[
                          item?.party?.replace(/\./g, '').toLowerCase()
                        ] || '113945681'
                      }` +
                      '.cms'
                    }
                    defaultImage={defaultImage}
                  />
                  <span>{item?.party?.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </SlickWrapper>
      </div>
    )
  );
};

KeyCandidates.defaultProps = {
  slidesToShow: 2.2,
  inLineStyle: {},
  changeStyle: '',
};

const ImageSSR = ({ partyName, defaultImage }) => {
  return (
    <>
      <div
        className={style.logo}
        dangerouslySetInnerHTML={{
          __html: `<img loading="lazy" src=${partyName} onerror="this.onerror=null;this.src='${getBaseUrl()}${
            defaultImage || ''
          }';"/>`,
        }}
      />
    </>
  );
};

export default KeyCandidates;
