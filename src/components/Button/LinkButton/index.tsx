import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import Link from 'next/link'

export type ButtonLinkProps = MuiLinkProps & {
  href: string
}

export const LinkButton = ({ ...props }: ButtonLinkProps): JSX.Element => {
  return (
    <MuiLink
      component={Link}
      color="secondary"
      fontSize={14}
      fontWeight="bold"
      {...props}
    />
  )
}
