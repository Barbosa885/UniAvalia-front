import styled from '@emotion/styled'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  SvgIcon as MuiSvgIcon,
} from '@mui/material'

export type IconButtonProps = MuiIconButtonProps & {
  Icon: typeof MuiSvgIcon
}

export type ButtonProps = MuiButtonProps

export const IconButton = ({
  Icon,
  ...props
}: IconButtonProps): JSX.Element => (
  <MuiIconButton {...props}>
    <Icon />
  </MuiIconButton>
)

const StyledButton = styled(MuiButton)`
  border-radius: 9999px;
`

export const Button = ({ ...props }: ButtonProps): JSX.Element => {
  return <StyledButton variant="contained" color="primary" {...props} />
}
