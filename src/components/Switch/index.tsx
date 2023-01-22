import styled from '@emotion/styled'
import { Button } from '@mui/material'
import clsx from 'clsx'

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
    top: 0,
    bottom: 0,
    left: '50%',
    right: 0,
    margin: '.25rem',
    marginLeft: '.15rem',

    borderRadius: 10,
    backgroundColor: theme.palette.secondary.main,

    transition: 'left .2s ease-in-out, right .2s ease-in-out',
  },

  '&.isTeacher::after': {
    left: 0,
    right: '50%',
    margin: '.25rem',
    marginRight: '.15rem',
  },
}))

const SwitchButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.contrastText,
  verticalAlign: 'middle',
  height: '100%',
  width: '50%',
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
    <SwitchContainer className={clsx({ isTeacher })}>
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
