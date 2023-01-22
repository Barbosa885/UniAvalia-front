import { Fab, FabProps, SvgIcon } from '@mui/material'

export type FloatingButtonProps = FabProps & {
  Icon: typeof SvgIcon
  size: 'small' | 'medium' | 'large'
}

export const FloatingButton = ({
  Icon,
  style,
  ...props
}: FloatingButtonProps): JSX.Element => {
  return (
    <Fab
      color="primary"
      style={{ position: 'absolute', right: '2vw', bottom: '2vw', ...style }}
      {...props}
    >
      <Icon fontSize={props.size} />
    </Fab>
  )
}
