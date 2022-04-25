// Core
import styled from 'styled-components';

export const Container = styled.div`


.keyboard__container {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 20px;
    background-color: rgba(255, 186, 58, .6);
    position: relative;
    z-index: 1;
}

.keyboard__body {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr ;
    grid-template-rows: 5fr;
}

.keyboard__row {
    display: grid;
    grid-gap: 2px;
    width: 100%;
    grid-template-columns: repeat(10, 1fr) ;
    grid-template-rows: 1fr;
}
.keyboard__row--smaller {
    grid-template-columns: repeat(9, 1fr) ;
}
.keyboard__row--footer {
    grid-template-columns: 1.20fr 1.3fr 4fr 1.20fr 1.3fr ;
}

.keyboard__item {
    position: relative;
    background-color: #fff;
    z-index: 3;
    padding: 10px 0;
    text-align: center;
    border: 1px solid grey;
    border-radius:5px;
    cursor: pointer;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.keyboard__item:active {
    box-shadow: 0px 5px 8px 2px rgba(2, 3, 3, 0.3) inset;
} 
/* ========================================== */
.keyboard__row--ru {
    grid-template-columns: repeat(12, 1fr) ;
}
.keyboard__row--ru-small {
    grid-template-columns: repeat(11, 1fr) ;
}

`;
