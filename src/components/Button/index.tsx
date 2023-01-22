import styled from '@emotion/styled'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import Link from 'next/link'

export type ButtonProps = MuiButtonProps & {
  rounded?: boolean
}

const DefaultButton = styled(MuiButton)`
  height: 72px;
  border-radius: 10px;
  font-size: 18px;
`

const RoundedButton = styled(MuiButton)`
  border-radius: 9999px;
`

export const Button = ({
  rounded = false,
  ...props
}: ButtonProps): JSX.Element => {
  const Component = rounded ? RoundedButton : DefaultButton

  return (
    <Component
      LinkComponent={Link}
      variant="contained"
      color="primary"
      {...props}
    />
  )
}
