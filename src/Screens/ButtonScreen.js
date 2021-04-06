import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 10%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const P = styled.p`
    font-size: 12px;
`

const Buttons = ({ label, className, startIcon, endIcon, disabled }) => (
    <button className={className}>
        {startIcon && (
            <span
                className='material-icons md-18'
                css={`
                    font-size: inherit;
                    vertical-align: middle;
                    margin-right: 5%;
                `}>
                {startIcon}
            </span>
        )}
        {disabled ? 'disabled' : label}
        {endIcon && (
            <span
                className='material-icons md-18'
                css={`
                    font-size: inherit;
                    vertical-align: middle;
                    margin-left: 5%;
                `}>
                {endIcon}
            </span>
        )}
    </button>
)

const Button = styled(Buttons)`
    display: flex;
    flex-direction: row;
    background-color: #e0e0e0;
    border: none;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 1px rgba(51, 51, 51, 0.2);
    ${({ color }) => theme.color[color]};
    ${({ size }) => size && theme.size[size]};
    ${({ variant }) =>
        variant === 'outline'
            ? theme.variant.outline
            : variant === 'text'
            ? theme.variant.text
            : theme.variant.default}
    ${({ hover, focus, variant, color }) =>
        (hover || focus) &&
        (variant ? theme.hoverFocus[variant] : theme.hoverFocus[color])}
        ${({ disabledShadow }) => disabledShadow && theme.disabledShadow}
        ${({ disabled }) => disabled && theme.disabled}
`

const Heading = styled.h2`
    color: #4f4f4f;
`
const theme = {
    variant: {
        outline: `
        color:#3d5afe;
        border: 1px solid #3d5afe;
        border-radius: 6px;
        background-color:inherit;
    `,
        text: `
        border:none;
        color: #3D5AFE;
        background-color: inherit;
        padding: 0;
        box-shadow: none;
        `
    },
    hoverFocus: {
        default: `
        &:hover,&:focus {
            background: #AEAEAE;
        }
        `,
        outline: `
        &:hover,&:focus{
            background: rgba(41, 98, 255, 0.1);
            border: 1px solid #3D5AFE;
        }
        `,
        text: `
        &:hover,&:focus{
            padding: 0.75% 1.5% 0.75% 1.5%;
            background: rgba(41, 98, 255, 0.1);
            border-radius: 6px;
        }
        `,
        primary: `&:hover,&:focus {
            background-color: #0039CB;
        }`,
        secondary: `
        &:hover,&:focus {
            background-color: #1C313A;
        }`,
        danger: `&:hover,&:focus {
            background-color: #9A0007;
        }`
    },
    disabledShadow: `
    background: #3D5AFE;
    border-radius: 6px;
    box-shadow: none;
    color: white;
    `,
    disabled: `
    color: #9E9E9E;
    `,
    size: {
        sm: `padding: 0.5% 1% 0.5% 1%;`,
        md: `padding: 0.75% 1.5% 0.75% 1.5%;`,
        lg: `padding: 1% 2% 1% 2%;`
    },
    color: {
        default: `background-color: #e0e0e0;`,
        primary: `
            background-color: #2962FF;
            color: white;
        `,
        secondary: `
            background-color: #455A64;
            color: white;
        `,
        danger: `
            background-color: #D32F2F;
            color: white;
        `
    }
}

Button.defaultProps = {
    size: 'md',
    color: 'default',
    label: 'Default'
}

const ButtonScreen = () => {
    return (
        <Wrapper>
            <Heading>Buttons</Heading>
            <Row>
                <P>{'<Button />'}</P>
                <P>{'<Button hover />'}</P>
            </Row>
            <Row>
                <Button />
                <Button hover />
            </Row>
            <Row>
                <P>{`<Button variant='outline' />`}</P>
                <P>{`<Button variant='outline' hover />`}</P>
            </Row>
            <Row>
                <Button variant='outline' />
                <Button variant='outline' hover>
                    Default
                </Button>
            </Row>
            <Row>
                <P>{`<Button variant='text' />`}</P>
                <P>{`<Button variant='text' hover />`}</P>
            </Row>
            <Row>
                <Button variant='text' />
                <Button variant='text' hover>
                    Default
                </Button>
            </Row>
            <Row>
                <P>{`<Button disabledShadow />`}</P>
            </Row>
            <Row>
                <Button disabledShadow />
            </Row>
            <Row>
                <P>{`<Button disabled />`}</P>
                <P>{`<Button variant='text' disabled />`}</P>
            </Row>
            <Row>
                <Button disabled>Disabled</Button>
                <Button variant='text' disabled>
                    Disabled
                </Button>
            </Row>
            <Row>
                <P>{`<Button startIcon='local_grocery_store' />`}</P>
                <P>{`<Button endIcon='local_grocery_store' />`}</P>
            </Row>
            <Row>
                <Button startIcon='local_grocery_store' />
                <Button endIcon='local_grocery_store' />
            </Row>
            <Row>
                <P>{`<Button size='sm' />`}</P>
                <P>{`<Button size='md' />`}</P>
                <P>{`<Button size='lg' />`}</P>
            </Row>
            <Row>
                <Button size='sm' />
                <Button size='md' />
                <Button size='lg' />
            </Row>
            <Row>
                <P>{`<Button color='default' />`}</P>
                <P>{`<Button color='primary' />`}</P>
                <P>{`<Button color='secondary' />`}</P>
                <P>{`<Button color='danger' />`}</P>
            </Row>
            <Row>
                <Button color='default' />
                <Button color='primary' />
                <Button color='secondary' />
                <Button color='danger' />
            </Row>
            <Row>
                <P>{`<Button color='default' focus />`}</P>
                <P>{`<Button color='primary' focus />`}</P>
                <P>{`<Button color='secondary' focus />`}</P>
                <P>{`<Button color='danger' focus />`}</P>
            </Row>
            <Row>
                <Button color='default' focus>
                    Default
                </Button>
                <Button color='primary' focus>
                    Default
                </Button>
                <Button color='secondary' focus>
                    Default
                </Button>
                <Button color='danger' focus>
                    Default
                </Button>
            </Row>
        </Wrapper>
    )
}

export default ButtonScreen
