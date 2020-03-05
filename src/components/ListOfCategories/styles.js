import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow:scroll;
    width:100%;
    ${props => props.fixed && css`
        {
            background-color: #fff;
            border-radius:60px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            left:0;
            right:0;
            top:-20px;
            transform: scale(0.5);
            margin: 0 auto;
            max-width:400px;
            padding:5px;
            position:fixed;
            z-index:1;
        }
    `}
    
`

export const Item = styled.li`    
    list-style:none;
`
