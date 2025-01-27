import React from 'react';
import style from './ElectionPartyResult.scss';

const defaultImage = '/assets/images/tmc.svg';
const staticValues = ['bjp +', 'cong +', ''];
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

function ElectionPartyResult({ data, partyList }) {
  return (
    data?.length > 0 && (
      <div className={style['election-details']}>
        {data.map((item, index) => {
          return (
            <div className={style['grid']}>
              <div className={`${style['party-1']} ${style['party-color']}`}>
                <span
                  style={{
                    backgroundColor: `${
                      partyColorsCode[
                        item?.party?.replace(/\./g, '').toUpperCase()
                      ] || partyColorsCode['OTH']
                    }`,
                  }}
                ></span>
                <div className={style['party-result']}>
                  <div className={style['party-vode-result']}>
                    <div className={style['party-flag']}>
                      <img
                        src={`/assets/images/${
                          partyFlag[
                            item?.party?.replace(/\./g, '').toLowerCase()
                          ] || partyFlag['oth']
                        }.svg`}
                        alt=""
                        onError={(e) => {
                          e.target.src = '';
                        }}
                      />
                    </div>
                    <div className={style['total-vode']}>{item?.won || 0}</div>
                  </div>

                  <div className={style['party-name']}>
                    <span>
                      <b>{item.party}</b>
                    </span>
                    <span className={style['partyname']}>
                      {staticValues[index % staticValues.length]}
                    </span>
                  </div>
                </div>
                <div className={style['vode-percentage']}>
                  winning:{' '}
                  <span>
                    {item?.percentage !== '∞' ? item?.percentage : 0} %
                  </span>
                </div>
              </div>
              {partyList[item.party?.replace(/\./g, '')]
                ?.slice(0, 10)
                ?.map((list, index) => {
                  return (
                    <div className={`${style['ele-party']}`}>
                      <div className={style['party-vode-total']}>
                        {list?.won || 0}
                      </div>
                      <div className={style['partyname']}>
                        {list.party || ''}
                      </div>
                      <span
                        style={{
                          backgroundColor: `${
                            partyColorsCode[
                              list?.party?.replace(/\./g, '').toUpperCase()
                            ] || partyColorsCode['OTH']
                          }`,
                        }}
                      ></span>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    )
  );
}

export default ElectionPartyResult;
