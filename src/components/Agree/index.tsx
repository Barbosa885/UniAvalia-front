import styled from '@emotion/styled'
import { ThumbDownRounded, ThumbUpRounded } from '@mui/icons-material'
import { Button, ButtonProps } from '@mui/material'

const ButtonStyled = styled(Button)(({ theme }) => ({
  padding: '4px 8px',
  borderRadius: 9999,
}))

export type AgreeProps = ButtonProps & {
  isDisagree?: boolean
  count: number
  active: boolean
}

export const Agree = ({
  isDisagree = false,
  count,
  active,
  ...props
}: AgreeProps): JSX.Element => {
  const Thumbs = isDisagree ? ThumbDownRounded : ThumbUpRounded

  return (
    <ButtonStyled
      variant={active ? 'contained' : 'outlined'}
      startIcon={
        <Thumbs
          color="primary"
          {...(active && { style: { color: 'white' } })}
        />
      }
      {...(!active && { style: { backgroundColor: 'white' } })}
      {...props}
    >
      <p>{count}</p>
    </ButtonStyled>
  )
}
