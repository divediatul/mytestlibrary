import React from 'react';
import StateElectionResult from './StateElectionResult.js';
import LiveNews from '../../common/LiveNews.js';
import style from './ArticleTally.scss';
import AssemblyElectionLatest from './AssemblyElectionLatest.js';

const StateTally = ({ componentData, data }) => {
  return (
    (componentData?.data?.length > 0 ||
      componentData?.assemblyData?.data?.length > 0) && (
      <>
        <LiveNews
          blogData={componentData?.liveblogData?.data?.[0] || []}
          transparentBtn={true}
        />

        {componentData?.election_type === 'ae'
          ? componentData?.isAssemblyShow && (
              <div className={`${style['tnn_container']} `}>
                <div className={`${style['mt-20']} ${style['mb-20']}`}>
                  <AssemblyElectionLatest
                    assemblyData={componentData?.assemblyData?.data || []}
                  />
                </div>
              </div>
            )
          : componentData?.isTallyShow && (
              <div className={`${style['mt-10']} ${style['mb-20']}`}>
                <StateElectionResult componentData={componentData} />
              </div>
            )}
      </>
    )
  );
};

StateTally.defaultProps = {
  componentData: {},
  data: [],
};

export default StateTally;
