import styled from '@emotion/styled'
import { Button } from '@mui/material'

const SwitchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '.25rem',

  width: 'min-content',
  height: 48,
  padding: '.25rem',
  backgroundColor: theme.palette.primary.main,
  borderRadius: 10,

  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '.25rem',
    bottom: '.25rem',
    left: '50%',
    right: '.25rem',

    borderRadius: 10,
    backgroundColor: theme.palette.secondary.main,

    transition: 'left .2s ease-in-out, right .2s ease-in-out',
  },

  '&.isTeacher::after': {
    left: '.25rem',
    right: '50%',
  },
}))

const SwitchButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.contrastText,
  verticalAlign: 'middle',
  height: '100%',
  fontSize: 16,
  borderRadius: 10,
  padding: '0 .5rem',
  zIndex: 1,

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, .1)',
  },
}))

export interface SwitchProps {
  isTeacher: boolean
  setIsTeacher: (isTeacher: boolean) => void
}

export const Switch = ({
  isTeacher,
  setIsTeacher,
}: SwitchProps): JSX.Element => {
  const handleClick = (isT: boolean): void => {
    setIsTeacher(isT)
  }

  return (
    <SwitchContainer className={isTeacher ? 'isTeacher' : ''}>
      <SwitchButton
        disableRipple
        onClick={() => {
          handleClick(true)
        }}
      >
        Professor
      </SwitchButton>
      <SwitchButton
        disableRipple
        onClick={() => {
          handleClick(false)
        }}
      >
        Disciplina
      </SwitchButton>
    </SwitchContainer>
  )
}
