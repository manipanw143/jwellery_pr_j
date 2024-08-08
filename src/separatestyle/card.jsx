import React from 'react';
import './card.css';

export const TempleCard = () => {
  return (
    
        <div className="sample-card">
          <a href="/new" className="no-tap-highlight">
            <div className="text-compact-xxs">
              <div className="relative card scorecard">
                <div className="flex justify-between items-center">
                  <div className="truncate">
                    <span></span>
                    <span className="text-tight-xs typo-mid2">
                      <span className="font-medium">
                        <span>Dharm</span>&nbsp;•&nbsp;Siksha&nbsp;•&nbsp;Soch&nbsp;•&nbsp;Gyan
                        {/* <span className="text-tight-xs uppercase">&nbsp;•&nbsp;</span> */}
                      </span>
                    </span>
                  </div>
                  <div className="leading-0"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col mb-2 mt-1 space-y-1">
                    <div className="team-score flex justify-between items-center typo">
                      <div className="flex items-center min-w-0 mr-1">
                        <img
                          width="20"
                          height="20"
                          alt=""
                          className="mr-2"
                          src=""
                          style={{ width: '20px', height: '20px' }}
                        />
                        <p className="text-tight-s font-bold capitalize truncate">Templename</p>
                      </div>
                    </div>
                    <div className="team-score flex justify-between items-center typo">
                      <div className="flex items-center min-w-0 mr-1">
                        <img
                          width="20"
                          height="20"
                          alt=""
                          className="mr-2"
                          src=""
                          style={{ width: '20px', height: '20px' }}
                        />
                        <p className="text-tight-s font-bold capitalize truncate">Programs</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-tight-xs text-right">
                    <div>Tomorrow</div>
                    <div className="text-tight-m font-bold">6:00 AM</div>
                  </div>
                </div>
                <p className="text-tight-xs font-medium truncate typo" >
                  <span>start at 2</span>
                </p>
              
                <div className="flex mt-2 py-1 border-t line-default-translucent">
                  <a href="/Business" title="" className="inline-flex items-start leading-none mr-4">
                    <span className="text-compact-xs decoration-ui-stroke block">Business</span>
                  </a>
                  <a href="/Family" title="" className="inline-flex items-start leading-none mr-4">
                    <span className="text-compact-xs decoration-ui-stroke block">Family</span>
                  </a>
                  <a href="/Education" title="" className="inline-flex items-start leading-none mr-4">
                    <span className="text-compact-xs  decoraton-ui-stroke block">Education</span>
                  </a>
                  <a href="TempleFunvtion" title="" className="inline-flex items-start leading-none mr-4">
                    <span className="text-compact-xs decoration-ui-stroke block">TempleFunction</span>
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
  );
};
