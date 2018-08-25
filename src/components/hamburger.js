import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Container = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  z-index: 100;
  cursor: pointer;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 60px;
  background: ${props => props.theme.colors.white};
  z-index: 0;
  transform-origin: top right;
  transform: scale(0.6, 1.0);
  transition: transform 400ms;
  will-change: transform;

  ${Container}:hover &,
  ${Container}:focus & {
    transform: scale(${props => props.active ? 1.6 : 1.4}, 1.0);
  }
`

const Icon = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  transform: rotate(${props => props.active ? '45deg' : '0deg'});
  transition: transform 400ms;
  will-change: transform;
`

const Line = styled.path`
  fill: none;
  stroke ${props => props.theme.colors.black};
  stroke-width: 5.5;
  stroke-linecap: round;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
`

const LineTop = styled(Line)`
  stroke-dasharray: 40 160;
  stroke-dashoffset: ${props => props.active ? '-64px' : '0px'};
`

const LineMiddle = styled(Line)`
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transform: rotate(${props => props.active ? '90deg': 0});
  transition: transform 400ms;
`

const LineBottom = styled(Line)`
  transform-origin: 50%;
  stroke-dasharray: 40 85;
  stroke-dashoffset: ${props => props.active ? '-64px' : '0px'};
`

const Label = styled.span`
  position: absolute;
  top: 0;
  right: 66px;
  display: block;
  height: 60px;
  line-height: 60px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sansSerif};
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms linear;
  will-change: opacity, transition;

  ${Container}:hover & {
    transition: opacity 400ms 250ms linear;
    opacity: 1.0;
  }
`




export default class Hamburger extends PureComponent {

  state = {
		toggled: false,
	}

  _onClick = (e) => {
    if(e) {
			e.preventDefault()
			e.stopPropagation()
		}

    this.setState({toggled: !this.state.toggled});
  }

  render() {
    return (
      <Container onClick={this._onClick} aria-haspopup="true" aria-controls="#menu" aria-expanded={this.state.toggled === true ? "true" : "false"} aria-label={this.state.toggled === true ? 'Fermer le menu' : 'Ouvrir le menu'}>
        <Background active={this.state.toggled} />
        <Icon active={this.state.toggled} viewBox="0 0 100 100" width="60" aria-hidden="true">
          <LineTop active={this.state.toggled} d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
          <LineMiddle active={this.state.toggled} d="m 30,50 h 40" />
          <LineBottom active={this.state.toggled} d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
        </Icon>
        <Label aria-hidden="true">Menu</Label>
      </Container>
    )
  }
}
