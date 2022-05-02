
// Core
import React, { FC } from 'react';

// Component
import { ruKeyboard } from '../../../../../tools/utils/keyboardData';

// Bus
// import {} from '../../../bus/'
import { TogglersKeys } from '../../../../../bus/client/togglers';


// Types
type PropTypes = {
    /* type props here */

}

export const KeysUppercase: FC<PropTypes> = () => {
    return (
        <>
            {/* {
                ruKeyboard[ 1 ].map((item, indexRow)=>{
                    const row = item;

                    const handleClick = (event: clickTypeEvent, key: string) => {
                        if (key === 'En') {
                            setTogglerAction({ type: 'isEnglKeyPad', value: true });
                        } else if (key === 'Enter') {
                            handleSubmit(event);
                        } else if (key === 'Backspace') {
                            setMsg(msg.slice(0, -1));
                        } else if (key === 'Space') {
                            setMsg(`${msg} `);
                        } else if (key === 'Shift') {
                            setTogglerAction({ type: 'isCapitalize', value: !isCapitalize });
                        } else {
                            setMsg(`${msg}${key}`);
                        }
                    };

                    let clRow = indexRow === 0 ? 'keyboard__row' : 'keyboard__row keyboard__row--ru';
                    if (indexRow === 0) {
                        clRow = 'keyboard__row';
                    } else if (indexRow === 1) {
                        clRow = 'keyboard__row keyboard__row--ru';
                    } else if (indexRow === 2 || indexRow === 3) {
                        clRow = 'keyboard__row keyboard__row--ru-small';
                    } else if (indexRow === 4) {
                        clRow = 'keyboard__row keyboard__row--footer';
                    }

                    return (
                        <div
                            className = { clRow }
                            key = { indexRow }>
                            {
                                row.map((btn, indexBtn)=>{
                                    const { key, code } = btn;

                                    return (
                                        <button
                                            className = 'keyboard__item'
                                            key = { indexBtn }
                                            onClick = {
                                                (event: clickTypeEvent)=> handleClick(event, key) }>{key
                                            }
                                        </button>
                                    );
                                })
                            }
                        </div>
                    );
                })
            } */}
        </>
    );
};
