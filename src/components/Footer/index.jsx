import styled from 'styled-components'

/**
 * Displaying page's footer
 * @function Footer
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright, SportSee 2020</p>
    </FooterWrapper>
  )
}

export default Footer

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const FooterWrapper = styled.footer`
  height: calc(138px + 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin-bottom: 0;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    font-size: 12px;
    letter-spacing: 1px;
  }
`
