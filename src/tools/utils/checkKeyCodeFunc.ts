export const checkKeyCodeFunction = (
    msg: string,
    setMsg : Function,
    isEnglKeyPad: boolean,
    isOnFocusInput: boolean,
    setTogglerAction: Function,
) => {
    // debugger;

    const elements = document.getElementsByClassName('keyboard__item');
    const letters = document.getElementsByClassName('letter');


    let isUpperCase = false;


    let restart: boolean = false;

    const makeUpperCase = () => {
        for (let i = 0; i < letters.length; i++) {
            const text = letters[ i ].textContent;
            if (text) {
                letters[ i ].textContent = text.toUpperCase();
            }
        }
    };
    const makeLowerCase = () => {
        for (let i = 0; i < letters.length; i++) {
            const text = letters[ i ].textContent;
            if (text) {
                letters[ i ].textContent = text.toUpperCase();
            }
        }
    };

    // =====================================================
    const checkKeyCode = (key: string) => {
        // debugger;
        let check = false;

        if (key === 'Enter') {
            check = true;
        }
        if (key === 'Backspace') {
            return true;
        }
        if (key === 'Shift') {
            check = true;
        }

        return check;
    };

    const items: Array<Element> = [];
    const check = (key: string) => {
        if (key === 'Backspace'  && isOnFocusInput === false) {
            setMsg(msg.slice(0, -1));
        } else if (key === 'Enter'  && isOnFocusInput === false) {
            console.log('enter');
        } else if (key === 'Shift'  && isOnFocusInput === false) {
            if (isUpperCase) {
                makeUpperCase();
            } else {
                makeLowerCase();
            }
        }
        // debugger;
        for (let i = 0; i < elements.length; i++) {
            if (key === elements[ i ].innerHTML) {
                if (checkKeyCode(key) === false) {
                    items.push(elements[ i ]);

                    restart = false;

                    return key;
                }
            }
            if (key === ' ' && elements[ i ].innerHTML === 'Space') {
                console.log('loop');

                return ' ';
            }
        }


        return '';
    };

    const listener = (event: KeyboardEvent)=>{
        // debugger;
        event.key;
        console.log('🚀 ~ file: checkKeyCodeFunc.ts ~ line 62 ~ listener ~ event.key;', `-${event.key}-`);
        check(event.key);
        // debugger;
        let value = '';
        if (restart === false) {
            value = check(event.key);
        }
        // debugger;

        if (items.length) {
            // debugger;
            items[ 0 ].classList.add('active');
            setMsg(msg + value);
            setTimeout(()=>{
                items[ 0 ].classList.remove('active');
            }, 200);
        }

        // debugger;


        document.removeEventListener('keydown', listener);
        if (restart) {
            document.addEventListener('keydown', listener);
        }
    };

    document.addEventListener('keydown', listener);

    // debugger;


    return restart;
};

