import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-regular-svg-icons'

import { colours, harmonics } from '../helpers/style-helpers'


const noLinkDecoration = `
  & > a:link {
    color: ${colours.main};
    text-decoration: none;
  }
  & > a:visited {
    color: ${colours.main};
    text-decoration: none;
  }
  & > a:hover {
    color: ${colours.main};
    text-decoration: none;
  }
  & > a:active {
    color: ${colours.main};
    text-decoration: none;
  }
`

const CollapsableGroup = styled.ul`
  listStyleType: none;
  margin: 0;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 2rem;
    right: 1rem;
    background-color: ${colours.background};
    opacity: 0.8;
    z-index: 2;
    border-radius: ${harmonics.s4};
    display: none;
    &.visible {
      display: flex;
    }
  }
`

const ListItem = styled.li`
  display: inline-block;
  margin: 1rem;
  float: right;
  ${noLinkDecoration}
  & a {
    font-style: normal;
  }
`

const BrandItem = styled.li`
  display: inline-block;
  font-size: ${harmonics.h2};
  float: left;
  margin: 1rem;
  ${noLinkDecoration}
  & a {
    font-style: normal;
  }
`


// HACK to allow CSS is JS class (Emotion) for the activeClassName. See My question: https://stackoverflow.com/questions/57117445/how-to-create-a-css-class-for-use-in-activeclassname?noredirect=1#comment100753976_57117445 and a workaround https://github.com/styled-components/styled-components/issues/184#issuecomment-284300950
const NavLink = styled(Link)`
  &.${(props) => props.activeClassName} {
    border-bottom: 3px solid ${colours.loudEmphasis};
  }
`
NavLink.defaultProps = {
  activeClassName: 'active'
}


function toggleMenu () {
  let menuIsVisible = false
  console.log('------- outer')
  return () => {
    console.log('------- inner')
    const collapsableContent = document.querySelector('.collapsable-group')

    console.log('--- click' + menuIsVisible)
    menuIsVisible = !menuIsVisible
    if (menuIsVisible) {
      collapsableContent.classList.add('visible')
    } else {
      collapsableContent.classList.remove('visible')
    }
  }
}



export default () => {
  return (
    <nav style={{ width: 'calc(100vw)', position: 'absolute', color: '#e5e9da' }}>
      <div style={{ margin: 0, padding: '0 1rem' }}>
        <BrandItem>
          <Link activeStyle={{ display: 'none' }} to="/">Geraint Anderson</Link>
        </BrandItem>
        <FontAwesomeIcon
          className={'toggle-control'}
          css={css`
            float: right;
            margin: 1rem;
            @media (min-width: 700px) {
              display: none;
            }
          `}
          icon={faBars}
          onClick={toggleMenu()}
        />
        <CollapsableGroup className={'collapsable-group'}>
          <ListItem>
            <NavLink to="/about/">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/articles/">Articles</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contact/">Contact</NavLink>
          </ListItem>
        </CollapsableGroup>
      </div>
    </nav>
  )
}

