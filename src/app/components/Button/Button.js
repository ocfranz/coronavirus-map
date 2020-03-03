import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

import { colors } from '../../styles/colors';

const Button = styled.button`
    padding : 10px 32px;
    border: 0;
    margin: 0px 10px 0px 0px;
    border-radius : 5px;
    cursor : pointer;
    &:focus{
        outline : none;
        box-shadow: none;
    }
    ${props =>
        props.primary &&
        css`
          background-color: ${colors.primary};
          color: #ffffff;
    `}
    ${props =>
        props.secondary &&
        css`
            background-color : ${colors.secondary}; 
            color: #ffffff;
        `
    }
    ${props =>
        props.success && css`background-color : ${colors.secondary};`
    }
    ${ props =>
        (props.outline) &&  css`
            background-color: transparent;
            border: 1px solid ${colors.default};
        `
    }
    ${ props =>
        (props.outline && props.primary) &&  css`
            border : 1px solid ${colors.primary};
            color :  ${colors.primary};
        `
    }
    ${ props =>
        (props.outline && props.secondary) &&  css`
            border : 1px solid ${colors.secondary};
            color :  ${colors.secondary};
        `
    }

`; 

Button.propTypes = {
    onClick : PropTypes.func.isRequired
}

export default Button;