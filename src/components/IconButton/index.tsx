import styled from '@emotion/styled'
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  SvgIcon as MuiSvgIcon,
} from '@mui/material'
import Link from 'next/link'

export type IconButtonProps = MuiIconButtonProps & {
  Icon: typeof MuiSvgIcon
  filled?: boolean
  size: 'small' | 'medium' | 'large'
}

const FilledIconButton = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export const IconButton = ({
  Icon,
  filled = false,
  ...props
}: IconButtonProps): JSX.Element => {
  const Component = filled ? FilledIconButton : MuiIconButton

  return (
    <Component LinkComponent={Link} {...props}>
      <Icon fontSize={props.size} />
    </Component>
  )
}
