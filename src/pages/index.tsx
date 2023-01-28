/* eslint-disable multiline-ternary */

import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import styled from '@emotion/styled'
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from '@mui/icons-material'
import { Button as MuiButton, MobileStepper } from '@mui/material'
import Image from 'next/image'

import LogoSVG from '../assets/logo.svg'
import OnboardSVG from '../assets/onboard.svg'
import { Button } from '../components/Button'

const HomeContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const SwipeableViewsStyled = styled(SwipeableViews)`
  width: 100%;

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    width: 100%;
    max-width: 450px;
    margin: 4px auto;
    text-align: center;
  }
`

export default function Home(): JSX.Element {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = 2

  const handleNext = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = (step: number): void => {
    setActiveStep(step)
  }

  return (
    <HomeContainerStyled>
      <div></div>

      <SwipeableViewsStyled
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <div className="content">
          {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
          <Image src={LogoSVG} alt="Logo do UniAvalia" />
          <Image src={OnboardSVG} alt="Bem vindo" />
          {/* eslint-enable @typescript-eslint/no-unsafe-assignment */}

          <p>
            Com esse aplicativo, você pode ajudar a melhorar a qualidade do
            ensino na UnB dando feedback sobre e para os professores de forma
            anônima.
          </p>
        </div>

        <div className="content">
          {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
          <Image src={LogoSVG} alt="Logo do UniAvalia" />
          <Image src={OnboardSVG} alt="Bem vindo" />
          {/* eslint-enable @typescript-eslint/no-unsafe-assignment */}

          <p>
            Se você é professor, poderá ver comentários que alunos fizeram sobre
            você em cada disciplina.
          </p>

          <Button rounded href="search">
            Comece agora
          </Button>
        </div>
      </SwipeableViewsStyled>

      <MobileStepper
        steps={maxSteps}
        position="static"
        style={{ width: '100%' }}
        activeStep={activeStep}
        backButton={
          <MuiButton
            size="large"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeftRounded />
            Voltar
          </MuiButton>
        }
        nextButton={
          <MuiButton
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Próximo
            <KeyboardArrowRightRounded />
          </MuiButton>
        }
      />
    </HomeContainerStyled>
  )
}
