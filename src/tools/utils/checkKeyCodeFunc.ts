export const checkKeyCodeFunction = (msg: string, setMsg : Function, isEnglKeyPad: boolean) => {
    const checkKeyCode = (innerHTML: string | number) => {
        // -------------- for Russins key
        if (isEnglKeyPad === false) {
            if (innerHTML === 49 || innerHTML === '1') {
                return 1;
            }
            if (innerHTML === 50 || innerHTML === '2') {
                return 2;
            }
            if (innerHTML === 51 || innerHTML === '3') {
                return 3;
            }
            if (innerHTML === 52 || innerHTML === '4') {
                return 4;
            }
            if (innerHTML === 53 || innerHTML === '5') {
                return 5;
            }
            if (innerHTML === 54 || innerHTML === '6') {
                return 6;
            }
            if (innerHTML === 55 || innerHTML === '7') {
                return 7;
            }
            if (innerHTML === 56 || innerHTML === '8') {
                return 8;
            }
            if (innerHTML === 57 || innerHTML === '9') {
                return 9;
            }
            if (innerHTML === 48 || innerHTML === '0') {
                return 0;
            }
            // ------------------------------
            if (innerHTML === 81 || innerHTML === 'й') {
                return 'й';
            }
            if (innerHTML === 87 || innerHTML === 'ц') {
                return 'ц';
            }
            if (innerHTML === 69 || innerHTML === 'у') {
                return 'у';
            }
            if (innerHTML === 82 || innerHTML === 'к') {
                return 'к';
            }
            if (innerHTML === 84 || innerHTML === 'е') {
                return 'е';
            }
            if (innerHTML === 89 || innerHTML === 'н') {
                return 'н';
            }
            if (innerHTML === 85 || innerHTML === 'г') {
                return 'г';
            }
            if (innerHTML === 73 || innerHTML === 'ш') {
                return 'ш';
            }
            if (innerHTML === 79 || innerHTML === 'щ') {
                return 'щ';
            }
            if (innerHTML === 80 || innerHTML === 'з') {
                return 'з';
            }
            if (innerHTML === 219 || innerHTML === 'х') {
                return 'х';
            }
            if (innerHTML === 221 || innerHTML === 'ъ') {
                return 'ъ';
            }
            // --------------------------------------

            if (innerHTML === 65 || innerHTML === 'ф') {
                return 'ф';
            }
            if (innerHTML === 83 || innerHTML === 'ы') {
                return 'ы';
            }
            if (innerHTML === 68 || innerHTML === 'в') {
                return 'в';
            }
            if (innerHTML === 70 || innerHTML === 'а') {
                return 'а';
            }
            if (innerHTML === 71 || innerHTML === 'п') {
                return 'п';
            }
            if (innerHTML === 72 || innerHTML === 'р') {
                return 'р';
            }
            if (innerHTML === 74 || innerHTML === 'о') {
                return 'о';
            }
            if (innerHTML === 75 || innerHTML === 'л') {
                return 'л';
            }
            if (innerHTML === 76 || innerHTML === 'д') {
                return 'д';
            }
            if (innerHTML === 186 || innerHTML === 'ж') {
                return 'ж';
            }
            if (innerHTML === 222 || innerHTML === 'э') {
                return 'э';
            }

            // -------------------------------------


            if (innerHTML === 90 || innerHTML === 'я') {
                return 'я';
            }
            if (innerHTML === 88 || innerHTML === 'ч') {
                return 'ч';
            }
            if (innerHTML === 67 || innerHTML === 'с') {
                return 'с';
            }
            if (innerHTML === 86 || innerHTML === 'м') {
                return 'м';
            }
            if (innerHTML === 66 || innerHTML === 'и') {
                return 'и';
            }
            if (innerHTML === 78 || innerHTML === 'т') {
                return 'т';
            }
            if (innerHTML === 77 || innerHTML === 'ь') {
                return 'ь';
            }
            if (innerHTML === 188 || innerHTML === 'б') {
                return 'б';
            }
            if (innerHTML === 190 || innerHTML === 'ю') {
                return 'ю';
            }
        }

        // =====================================================================================
        // ------------- for Englesh
        if (isEnglKeyPad === true) {
            if (innerHTML === 49 || innerHTML === '1') {
                return 1;
            }
            if (innerHTML === 50 || innerHTML === '2') {
                return 2;
            }
            if (innerHTML === 51 || innerHTML === '3') {
                return 3;
            }
            if (innerHTML === 52 || innerHTML === '4') {
                return 4;
            }
            if (innerHTML === 53 || innerHTML === '5') {
                return 5;
            }
            if (innerHTML === 54 || innerHTML === '6') {
                return 6;
            }
            if (innerHTML === 55 || innerHTML === '7') {
                return 7;
            }
            if (innerHTML === 56 || innerHTML === '8') {
                return 8;
            }
            if (innerHTML === 57 || innerHTML === '9') {
                return 9;
            }
            if (innerHTML === 48 || innerHTML === '0') {
                return 0;
            }
            // -------------------------------------------------------
            if (innerHTML === 81 || innerHTML === 'q') {
                return 'q';
            }
            if (innerHTML === 87 || innerHTML === 'w') {
                return 'w';
            }
            if (innerHTML === 69 || innerHTML === 'e') {
                return 'e';
            }
            if (innerHTML === 82 || innerHTML === 'r') {
                return 'r';
            }
            if (innerHTML === 84 || innerHTML === 't') {
                return 't';
            }
            if (innerHTML === 89 || innerHTML === 'y') {
                return 'y';
            }
            if (innerHTML === 85 || innerHTML === 'u') {
                return 'u';
            }
            if (innerHTML === 73 || innerHTML === 'i') {
                return 'i';
            }
            if (innerHTML === 79 || innerHTML === 'o') {
                return 'o';
            }
            if (innerHTML === 80 || innerHTML === 'p') {
                return 'p';
            }
            // -----------------------------------------------------
            if (innerHTML === 65 || innerHTML === 'a') {
                return 'a';
            }
            if (innerHTML === 83 || innerHTML === 's') {
                return 's';
            }
            if (innerHTML === 68 || innerHTML === 'd') {
                return 'd';
            }
            if (innerHTML === 70 || innerHTML === 'f') {
                return 'f';
            }
            if (innerHTML === 71 || innerHTML === 'g') {
                return 'g';
            }
            if (innerHTML === 72 || innerHTML === 'h') {
                return 'h';
            }
            if (innerHTML === 74 || innerHTML === 'j') {
                return 'j';
            }
            if (innerHTML === 75 || innerHTML === 'k') {
                return 'k';
            }
            if (innerHTML === 76 || innerHTML === 'l') {
                return 'l';
            }
            // ---------------------------------------------------
            if (innerHTML === 90 || innerHTML === 'z') {
                return 'z';
            }
            if (innerHTML === 88 || innerHTML === 'x') {
                return 'x';
            }
            if (innerHTML === 67 || innerHTML === 'c') {
                return 'c';
            }
            if (innerHTML === 86 || innerHTML === 'v') {
                return 'v';
            }
            if (innerHTML === 66 || innerHTML === 'b') {
                return 'b';
            }
            if (innerHTML === 78 || innerHTML === 'n') {
                return 'n';
            }
            if (innerHTML === 77 || innerHTML === 'm') {
                return 'm';
            }
        }
        // ------------------------------------------------------------
        if (innerHTML === 13 || innerHTML === 'Enter') {
            console.log('Enter');
        }
        if (innerHTML === 17 || innerHTML === 'ctrl') {
            console.log('ctrl');
        }
        if (innerHTML === 32 || innerHTML === 'probel') {
            return ' ';
        }
        if (innerHTML === 8 || innerHTML === 'Backspace') {
            console.log('backspace');
        }
        if (innerHTML === 191 || innerHTML === 110 || innerHTML === '.') {
            console.log('.');

            return '.';
        }
        if (innerHTML === ',' || (innerHTML === 188 && isEnglKeyPad === true)) {
            console.log(',');

            return ',';
        }
        if (innerHTML === 16 || innerHTML === 'shift') {
            console.log('shift');
        }


        return 'test';
    };

    let value = '';
    const elements = document.getElementsByClassName('keyboard__item');

    document.addEventListener('keydown', (event)=>{
        for (let i = 0; i < elements.length; i++) {
            if (event.key === elements[ i ].innerHTML) {
                elements[ i ].classList.add('active');
                setMsg(event.key);
                value += event.key;
            }
            elements[ i ].classList.remove('active');
        }
    });

    console.log('🚀 ~ file: checkKeyCodeFunc.ts ~ line 301 ~ checkKeyCodeFunction ~ value', value);
    // for (let i = 0; i < elements.length; i++) {
    //     elements[ i ].addEventListener('click', ()=>{
    //         console.log('🚀 ~ file: checkKeyCodeFunc.ts ~ line 42 ~ elements[i].addEventListener ~ click', checkKeyCode(elements[ i ].innerHTML));
    //         setMsg(msg + checkKeyCode(elements[ i ].innerHTML));
    //     });
    // }

    // setMsg(value);
};
