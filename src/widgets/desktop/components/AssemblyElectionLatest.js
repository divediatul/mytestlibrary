import React from 'react';
import style from './AssemblyElectionLatest.scss';

const partyColorsCode = {
  AAP: '#0071AE',
  'AAP+': '#0071AE',
  CONG: '#1CAAED',
  'CONG+': '#1CAAED',
  CPI: '#ED020F',
  'CPI+': '#ED020F',
  CPM: '#ED020F',
  'CPM+': '#ED020F',
  DMK: '#000000',
  'DMK+': '#000000',
  IUML: '#006600',
  'IUML+': '#006600',
  JKNC: '#FF0000',
  'JKNC+': '#FF0000',
  JKPDP: '#2A7401',
  'JKPDP+': '#2A7401',
  JMM: '#20B04A',
  'JMM+': '#20B04A',
  KC: '#DE0000',
  'KC+': '#DE0000',
  'KEC(M)': '#DE0000',
  'KEC(M)+': '#DE0000',
  MNM: '#FF0000',
  'MNM+': '#FF0000',
  'NCP(SP)': '#00B2B2',
  'NCP(SP)+': '#00B2B2',
  OTH: '#1C1C1C',
  'OTH+': '#1C1C1C',
  RJD: '#066D04',
  'RJD+': '#066D04',
  RSP: '#DE0000',
  'RSP+': '#DE0000',
  'SHS(UBT)': '#F47921',
  'SHS(UBT)+': '#F47921',
  SP: '#FF0000',
  'SP+': '#FF0000',
  TMC: '#24B44C',
  'TMC+': '#24B44C',
  VCK: '#0080FF',
  'VCK+': '#0080FF',
  AGP: '#011A7F',
  'AGP+': '#011A7F',
  AJSUP: '#4D3883',
  'AJSUP+': '#4D3883',
  BDJS: '#8F1E10',
  'BDJS+': '#8F1E10',
  BJP: '#FF9933',
  'BJP+': '#FF9933',
  'JD(S)': '#00865A',
  'JD(S)+': '#00865A',
  'JD(U)': '#008000',
  'JD(U)+': '#008000',
  JSP: '#FB0102',
  'JSP+': '#FB0102',
  LJPRV: '#0093DD',
  'LJPRV+': '#0093DD',
  NCP: '#00B2B2',
  'NCP+': '#00B2B2',
  NDPP: '#ED1B24',
  'NDPP+': '#ED1B24',
  NPEP: '#F4AE00',
  'NPEP+': '#F4AE00',
  NPF: '#28166F',
  'NPF+': '#28166F',
  PMK: '#2368C7',
  'PMK+': '#2368C7',
  RLD: '#0A8602',
  'RLD+': '#0A8602',
  SHS: '#F37021',
  'SHS+': '#F37021',
  TDP: '#FFFB01',
  'TDP+': '#FFFB01',
  'TMC(M)': '#F58634',
  'TMC(M)+': '#F58634',
  AIUDF: '#25633A',
  'AIUDF+': '#25633A',
  BJD: '#01A319',
  'BJD+': '#01A319',
  BSP: '#22409A',
  'BSP+': '#22409A',
  DMDK: '#FFFF00',
  'DMDK+': '#FFFF00',
  SDPI: '#00B220',
  'SDPI+': '#00B220',
  SKM: '#EE1821',
  'SKM+': '#EE1821',
  YSRCP: '#0267B4',
  'YSRCP+': '#0267B4',
  INDIA: '#1CAAED',
  'INDIA+': '#1CAAED',
  IND: '#1CAAED',
  'IND+': '#1CAAED',
  NDA: '#FF9933',
  'NDA+': '#FF9933',
};

const partyFlag = {
  nda: '113945694',
  'nda+': '113945694',
  bjp: '113945694',
  'bjp+': '113945694',
  india: '113945690',
  ind: '113945690',
  'ind+': '113945690',
  cong: '113945690',
  'cong+': '113945690',
  tmc: '113945695',
  'tmc+': '113945695',
  oth: '113945681',
  'oth+': '113945681',
  jkpdp: '113945683',
  aap: '113945696',
  'aap+': '113945696',
  brs: '113945693',
  'brs+': '113945693',
  bsp: '113945692',
  'bsp+': '113945692',
  jjp: '113945688',
  'jjp+': '113945688',
  jknc: '113945686',
  'jknc+': '113945686',
};

const defaultImage = '/assets/images/tmc.svg';
const staticValues = ['bjp +', 'cong +', ''];

const hexToRgba = (hex, alpha = 1) => {
  hex = hex.replace(/^#/, '');

  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

function AssemblyElection({ assemblyData }) {
  return (
    assemblyData?.length > 0 && (
      <section>
        <div className={style['state-assembly']}>
          <h2
            className={style['tnn__global-title']}
          >
            Assembly Election 2025
          </h2>
          <div className={style['assembly-elec']}>
            {assemblyData?.slice(0, 2).map((item, index) => {
              return (
                <a
                  href={`/elections/${item?.name
                    ?.replace(/\s/g, '-')
                    ?.replace(/'&'/g, 'and')
                    .toLowerCase()}-election/assembly-elections-party-alliance-wise-results`}
                >
                  <div className={style['state-cover']}>
                    <div className={style['d-flex']}>
                      <div className={style['state']}>
                        <div>
                          <div className={style['state-name']}>
                            <strong>
                              {item?.name?.replace(/'/g, '') || ''}
                            </strong>
                          </div>
                          <div className={style['state-total-vode']}>
                            Lead + Won :{' '}
                            <strong>{item?.seat_result_declared || 0}</strong>/
                            {item?.total_seats || 0}
                          </div>
                        </div>
                      </div>
                      <div className={`${style['d-flex']} ${style['flex-1']}`}>
                        {item?.alliancetally?.length > 0 &&
                          item?.alliancetally
                            ?.slice(0, 4)
                            .map((item, index) => (
                              <div
                                className={`${style['party-1']}`}
                                style={{
                                  backgroundColor: `${hexToRgba(
                                    partyColorsCode[
                                      item?.party
                                        ?.replace(/\./g, '')
                                        .toUpperCase()
                                    ] || partyColorsCode['OTH'],
                                    0.05,
                                  )}`,
                                }}
                              >
                                <span
                                  className={style['party-color']}
                                  style={{
                                    backgroundColor: `${
                                      partyColorsCode[
                                        item?.party
                                          ?.replace(/\./g, '')
                                          .toUpperCase()
                                      ] || partyColorsCode['OTH']
                                    }`,
                                  }}
                                ></span>
                                <div className={style['party-result']}>
                                  <div className={style['party-vode-result']}>
                                    <div className={style['party-flag']}>
                                      <img
                                        src={`${process.env.NEXT_PUBLIC_PHOTO_API}/photo/${partyFlag[item?.party?.replace(/\./g, '').toLowerCase()] || 113945681}.cms`}
                                        alt={`${item?.party
                                          ?.replace(/\./g, '')
                                          .toLowerCase()}`}
                                        onError={(e) => {
                                          e.target.src =
                                            defaultImage;
                                        }}
                                      />
                                    </div>

                                    <div className={style['total-vode']}>
                                      {item?.won || 0}
                                    </div>
                                  </div>

                                  <div className={style['party-name']}>
                                    <span>
                                      <strong>{item?.party || ''}</strong>
                                    </span>
                                  </div>
                                </div>
                                <div className={style['vode-percentage']}>
                                  LEADS + WINS
                                </div>
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    )
  );
}

const calculatePercentage = (value, totalValue) => {
  return Math.round((value * 100) / totalValue);
};
export default AssemblyElection;
