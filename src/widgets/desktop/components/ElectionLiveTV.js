import VideoPlayer from '../../modules/VideoPlayerLoader';
import React, { useEffect, useState } from 'react';
import style from './ElectionLiveTV.scss';
// import TopNews from 'components/common/Elections/TopNews';

function ElectionLiveTV({
  data,
  ad,
  getMSID,
  rhsWidget,
  isElection,
}) {
  const CHANNEL_MSID = {
    '1xsyys39ko': '89109097',
    '1xsitrr9kk': '89109076',
    '1xrcvfb9ol': '89108819',
    '1x88csv9oz': '89109116',
    '1x8fbim9o6': '89109069',
  }
  const [autoPlay, setAutoPlay] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);
  const [channelID, setChannelData] = useState(
    '1xsyys39ko'
  );

  const channelData = Array.isArray(data.data) ? data.data : [{ slikeid: '' }];
  let value = data && data.data;
  const mainData = value;

  return (
    <>
      {/* <LiveTvSchema data={mainData} />
      <BroadcastSchema data={mainData} /> */}

      <div className={style['tnn__grid-holder']}>
        <div
          data-attr-slk={channelID}
          className={`${style['tnn__lead-story--lhs']} ${style['tnn__liveTvBudget']}`}
          title={mainData?.msid}
        >
          <VideoPlayer
            fullData={{
              title: `${mainData[0]?.title}|${CHANNEL_MSID[`${channelID}`]}`,
            }}
            categoryType={'Live TV'}
            videoId={{ id: channelID, startTime: '' }}
            msid={CHANNEL_MSID[`${channelID}`]}
            imageWidth="390"
            isPlay={true}
            isVideoStart={true}
            playerId={channelID}
            autoPlay={true}
            isLiveTv={true}
          />
        </div>
      </div>
    </>
  );
}

export default ElectionLiveTV;
