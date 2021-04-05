import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Sider = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color: #fafbfd;
    width: 15%;
    height: 100vh;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-right: 10%;
`
const StyledLink = styled(Link)`
    color: ${(props) => (props.disabled ? '#9E9E9E' : '#090F31')};
    font-weight: 500;
    text-decoration: none;
    margin: 5% 5% 5% 0%;
`
const SideBar = () => {
    return (
        <Sider>
            <Div>
                <h3>
                    <span
                        css={`
                            color: #f7542e;
                        `}>
                        Dev
                    </span>
                    challenges.io
                </h3>
            </Div>
            <Div
                css={`
                    padding-top: 25%;
                `}>
                <StyledLink to='#' disabled>
                    Colors
                </StyledLink>
                <StyledLink to='#' disabled>
                    Typography
                </StyledLink>
                <StyledLink to='#' disabled>
                    Spaces
                </StyledLink>
                <StyledLink to='#' disabled>
                    Buttons
                </StyledLink>
                <StyledLink to='/'>Inputs</StyledLink>
                <StyledLink to='#' disabled>
                    Grid
                </StyledLink>
            </Div>
        </Sider>
    )
}

export default SideBar
