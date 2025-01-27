import React from 'react';
import LazyImage from 'components/common/LazyImage';
import style from './Sponsors.scss';
import Link from 'components/common/Link';
import { isMobile } from 'utils/common';

const Sponsors = (props) => {
  const { sponsors } = props;
  return (
    <div className={style['budget-poweredby']}>
      {typeof sponsors !== 'undefined' && Array.isArray(sponsors)
        ? sponsors.map((sponsor) => (
            <div className={style['icon']} key={sponsor?.icon}>
              {sponsor?.link !== '' ? (
                <Link key={sponsor?.text} to={`${sponsor?.link || ''}`}>
                  <p>
                    {sponsor?.text} {isMobile ? '' : `:`}
                  </p>
                  <LazyImage
                    datasrc={sponsor?.icon || ''}
                    alt={sponsor?.icon || ''}
                    title={sponsor?.icon || ''}
                    useOriginalSource
                  />
                </Link>
              ) : (
                <>
                  <p>
                    {sponsor?.text} {isMobile ? '' : `:`}
                  </p>
                  <LazyImage
                    datasrc={sponsor?.icon || ''}
                    alt={sponsor?.icon || ''}
                    title={sponsor?.icon || ''}
                    useOriginalSource
                  />
                </>
              )}
            </div>
          ))
        : null}
    </div>
  );
};

export default Sponsors;
