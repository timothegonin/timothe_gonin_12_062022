import styled from 'styled-components'

/**
 * Template of square button in the sidebar
 * @function SquareButton
 * @param {{icon: String, alt: String}} Icons links and alternativ texte
 * @returns {HTMLElement}
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
function SquareButton(props) {
  return (
    <ButtonWrapper>
      <button className="bg-slate-50 flex justify-center border items-center rounded h-full w-full">
        <img src={props.icon} alt={props.alt} />
      </button>
    </ButtonWrapper>
  )
}

export default SquareButton

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ButtonWrapper = styled.li`
  height: 64px;
  width: 64px;
  &:hover {
    cursor: pointer;
  }
`
