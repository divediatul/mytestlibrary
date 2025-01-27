import React from 'react';
import style from './ArticleTally.scss';
import AssemblyElectionLatest from './AssemblyElectionLatest.js';

const ArticleTally = ({ componentData, data }) => {
  return (
    componentData?.assemblyData?.data?.length > 0 && (
      <div className={`${style['tnn_container']}`}>
        {componentData?.isAssemblyShow && (
          <div className={`${style['mt-10']} ${style['mb-20']}`}>
            <AssemblyElectionLatest
              assemblyData={componentData?.assemblyData?.data || []}
            />
          </div>
        )}
      </div>
    )
  );
};
ArticleTally.defaultProps = {
  componentData: {},
  data: [],
};
export default ArticleTally;
