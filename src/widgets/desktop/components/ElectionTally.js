import React from 'react';
import style from './ElectionTally.scss';
import ElectionLiveTV from './ElectionLiveTV.js';
// import LiveNews from '../../common/LiveNews.js';
// import KeyCandidates from '../../common/KeyCandidates.js';
import ElectionSingleStrip from '../../common/ElectionSingleStrip.js';
// import Sponsors from '../../common/Sponsors.js';

function ElectionTally({
  componentData,
  data,
  pageNameCheck,
  sponsors = {},
}) {
  return (
    <>
      {/* <LiveNews
        blogData={componentData?.liveblogData?.data?.[0] || []}
        transparentBtn={true}
      /> */}
      <div className={`${style.electionTallyBg}`}>
        <div className={style['container']}>
          <div className={`${style.box} ${style.Boxbg}`}>
            <div className={`${style.col}`}>
              <LiveTv componentData={componentData} />
            </div>
            <div className={`${style.col} ${style.BGColor}`}>
              <div
                className={
                  componentData?.isTallyShow || componentData?.isAssemblyShow
                    ? style['electionbg']
                    : ''
                }
              >
                <div>
                  {componentData?.isAssemblyShow && (
                    <>
                      {componentData?.assemblyData?.data &&
                        componentData?.assemblyData?.data?.length > 0 &&
                        componentData?.assemblyData?.data.map(
                          function (item, index) {
                            let resultdata = item.alliancetally,
                              state_name = item.name,
                              state_code = item.code,
                              totalseats = item.total_seats,
                              seat_dec = item.seat_result_declared,
                              target =
                                Math.floor(parseInt(item?.total_seats) / 2) + 1,
                              bgColor = index % 2 !== 0 ? true : false;
                            return resultdata ? (
                              <>
                                <ElectionSingleStrip
                                  resultdata={resultdata}
                                  state_name={state_name}
                                  totalseats={totalseats}
                                  seat_dec={seat_dec}
                                  target={target}
                                  bgColor={bgColor}
                                  pageNameCheck={'electionHome'}
                                  changeStyle={'itemCount-5'}
                                />
                              </>
                            ) : null;
                          },
                        )}
                    </>
                  )}
                </div>
              </div>
              {/* {Object.keys(sponsors)?.length > 0 &&
              (sponsors?.isRajniganda || sponsors?.isDabur) ? (
                <Sponsors
                  sponsors={sponsors}
                  data={componentData?.assemblyData?.data}
                  selectedState={
                    componentData?.election_key_candidate?.data?.[0]?.scode ||
                    ''
                  }
                />
              ) : (
                componentData?.election_key_candidate &&
                Object.keys(componentData?.election_key_candidate)?.length >
                  0 && (
                  <KeyCandidates
                    loadKeyCandidateData={loadKeyCandidateData}
                    data={componentData?.election_key_candidate || {}}
                    inLineStyle={{ margin: '14px 0' }}
                  />
                )
              )} */}
            </div>
            {/* {Object.keys(sponsors)?.length > 0 &&
              (sponsors?.isRajniganda || sponsors?.isDabur) &&
              componentData?.election_key_candidate &&
              Object.keys(componentData?.election_key_candidate)?.length >
                0 && (
                <KeyCandidates
                  loadKeyCandidateData={loadKeyCandidateData}
                  data={componentData?.election_key_candidate || {}}
                  slidesToShow={4.2}
                  inLineStyle={{ marginTop: '20px', float: 'left' }}
                  changeStyle={'full-width'}
                />
              )} */}
          </div>
        </div>
      </div>
    </>
  );
}

const LiveTv = ({ componentData }) => {

  return (
    componentData?.liveTvData?.length > 0 && (
      <>
        <ElectionLiveTV
          data={componentData || {}}
          isElection={true}
        />
      </>
    )
  );
};
export default ElectionTally;
