import React from 'react';
import './card_1.css';

const LiveMatchCard = () => {
  return (
    <>
    <div className='main'>
    <div className="live-match-card" tabIndex="-1" >
      <a
        href="/series/sri-lanka-women-vs-west-indies-women-2024-1436883/sri-lanka-women-vs-west-indies-women-2nd-t20i-1436890/live-cricket-score"
        className="no-tap-highlight"
      >
        <div className="text-compact-xxs">
          <div className="relative card scorecard">
            <div className="flex justify-between items-center">
              <div className="truncate">
                <span className="text-raw-red">
                  <span className="text-tight-xs font-bold uppercase leading-5">Live</span>
                </span>
                <span className="text-tight-xs text-typo-mid2">
                  <span className="text-tight-xs font-medium">&nbsp;•&nbsp;2nd T20I</span>&nbsp;•&nbsp; Hambantota
                </span>
              </div>
              <div className="leading-0"></div>
            </div>
            <div className="team-scores">
              <div className="flex flex-col mb-2 mt-1 space-y-1">
                <div className="team-score flex justify-between items-center text-typo">
                  <div className="flex items-center min-w-0 mr-1" title="SL-W">
                    <img
                      width="20"
                      height="20"
                      alt="SL-W Flag"
                      className="mr-2"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png"
                      style={{ width: '20px', height: '20px' }}
                    />
                    <p className="text-tight-s font-bold capitalize truncate !text-typo-mid3">SL-W</p>
                  </div>
                  <div className="team-score-info text-compact-s text-typo text-right whitespace-nowrap">
                    <span className="text-compact-xxs mr-0.5">(15.2/15.2 ov) </span>
                    <strong className="text-typo-mid3">89/4</strong>
                  </div>
                </div>
                <div className="team-score flex justify-between items-center text-typo">
                  <div className="flex items-center min-w-0 mr-1" title="WI-W">
                    <img
                      width="20"
                      height="20"
                      alt="WI-W Flag"
                      className="mr-2"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png"
                      style={{ width: '20px', height: '20px' }}
                    />
                    <p className="text-tight-s font-bold capitalize truncate">WI-W</p>
                    <i className="icon-dot_circular text-icon-error hover:text-icon-error-hover" style={{ fontSize: '12px' }}></i>
                  </div>
                  <div className="team-score-info text-compact-s text-typo text-right whitespace-nowrap fadeIn-exit-done">
                    <span className="text-compact-xxs mr-0.5">(8.3/15 ov, T:99) </span>
                    <strong className="">53/1</strong>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-tight-xs font-medium truncate text-typo" title="SL-W vs WI-W - 2nd T20I">
              <span>WI Women need 46 runs in 39 balls.</span>
            </p>
            <div className="flex mt-2 py-1 border-t line-default-translucent">
              <a
                href="/series/sri-lanka-women-vs-west-indies-women-2024-1436883/match-schedule-fixtures-and-results"
                title="Schedule"
                className="inline-flex items-start leading-none mr-4"
              >
                <span className="text-compact-xs text-typo hover:underline hover:decoration-ui-stroke block">Schedule</span>
              </a>
              <a
                href="/series/sri-lanka-women-vs-west-indies-women-2024-1436883"
                title="West Indies Women tour of Sri Lanka"
                className="inline-flex items-start leading-none mr-4"
              >
                <span className="text-compact-xs text-typo hover:underline hover:decoration-ui-stroke block">Series</span>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
    </div>
    </>
  );
};

export default LiveMatchCard;
