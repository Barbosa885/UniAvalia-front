import { Theme as ITheme } from '@mui/material'

import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
