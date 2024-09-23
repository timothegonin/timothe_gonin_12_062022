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
    <FooterWrapper className="h-1/3 flex justify-center items-center">
      <p className="text-white text-xs mb-0 tracking-widest">
        Copyright, SportSee 2020
      </p>
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
  p {
    @media (min-width: 640px) {
      transform: rotate(180deg);
      writing-mode: vertical-rl;
      text-orientation: sideways-right;
    }
  }
`
