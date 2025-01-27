import React from 'react';
import style from './ElectionSingleStrip.scss';

const SNAME = {
  MADHYA_PRADESH: ['SP', 'BSP+', 'BSP', 'OTH'],
  RAJASTHAN: ['RLP+', 'BSP', 'OTH'],
  CHHATTISGARH: ['BSP+', 'OTH'],
  TELANGANA: ['AIMIM', 'BJP+', 'OTH'],
  MIZORAM: ['ZPM', 'BJP', 'OTH'],
  ["JAMMU '&' KASHMIR"]: ['JKNC+', 'BJP', 'JKPDP', 'OTH'],
  HARYANA: ['BJP', 'CONG', 'JJP+', 'AAP', 'OTH'],
  MAHARASHTRA: ['BJP+', 'CONG+', 'OTH'],
  JHARKHAND: ['BJP+', 'JMM+', 'OTH'],
};

function ElectionSingleStrip(props) {
  
    const {
      resultdata,
      state_name,
      totalseats,
      seat_dec,
      target,
      bgColor,
      pageNameCheck,
      changeStyle,
    } = props;
    if (!resultdata) return;
    let total_party_seats = 0;
    let stateName = state_name.replace(' ', '_');
    let mapPath = `url(/assets/images/states-map/${stateName
      ?.replace(/ /g, '_')
      ?.replace(/'&'/g, 'and')
      ?.toLowerCase()}.svg)`;

    function convertToSlug(inputString) {
      let slug = inputString
        .toLowerCase()
        .replace(/\s+/g, '-')
        ?.replace("'&'", 'and');
      slug =
        '/elections/' +
        slug +
        '-election/assembly-elections-party-alliance-wise-results';
      return slug;
    }

    return (
      <>
        <a
          href={convertToSlug(props?.state_name)}
          title={props?.state_name}
        >
          <div className={`${style['election_city_result']} ${style['mb-10']}`}>
            <div
              className={`${
                pageNameCheck === 'electionHome' ||
                pageNameCheck === 'tallyEmbbed'
                  ? style['tnn_grid_short']
                  : style['tnn_grid_full']
              } ${changeStyle ? style[changeStyle] : ''}`}
            >
              <div
                className={`${style['final_result']} ${
                  bgColor ? style['bg-blue-color'] : ''
                }`}
                style={{
                  backgroundImage: `${mapPath}`,
                }}
              >
                <div className={style['city_result']}>
                  {state_name?.replace(/'/g, '')}
                </div>
                {pageNameCheck === 'electionHome' ? (
                  <div className={style['outoff_result']}>
                    <span>
                      <b>{seat_dec}</b>
                      {`/${totalseats}`}
                    </span>
                    <span>{`(Majority Mark ${target})`}</span>
                  </div>
                ) : (
                  <div className={style['outoff_result']}>
                    <span>
                      <b>SEATS</b>
                    </span>
                    <span>
                      <b>{seat_dec}</b>
                      {`/${totalseats}`}
                    </span>
                    <span>{`TARGET ${target}`}</span>
                  </div>
                )}
              </div>
              {resultdata &&
                resultdata.map((result, i) => {
                  if (
                    SNAME[state_name]
                    // && !SNAME[stateName].includes(result.party)
                  ) {
                    let partyname = result.party;
                    // lead = result.leads,
                    // win = result.won;
                    let partycolor = partyname?.toLowerCase().replace('+', '');
                    let party_seats = parseInt(result?.won || 0);
                    return (
                      <div
                        key={i}
                        className={`${style['party']} ${
                          style[partycolor] ? style[partycolor] : style['oth']
                        }`}
                      >
                        <div className={style['city_result']}>{partyname}</div>
                        <div className={style['result_totle']}>
                          <span>{party_seats}</span>
                          <span className={style['win-lead']}>
                            Wins + Leads
                          </span>
                        </div>
                      </div>
                    );
                  }
                })}
              {resultdata &&
                resultdata.forEach((result, i) => {
                  if (
                    SNAME[state_name] &&
                    SNAME[state_name].includes(result.party)
                  ) {
                    total_party_seats += parseInt(result?.won || 0);
                  }
                })}
            </div>
          </div>
        </a>
      </>
    );
  }


export default (ElectionSingleStrip);
