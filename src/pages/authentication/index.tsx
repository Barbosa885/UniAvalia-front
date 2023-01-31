import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import footer from '../../assets/footer.png'
import logoSVG from '../../assets/logo.svg'
import { Button } from '../../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 270px;
  gap: 20px;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
`

const Wrapper = styled.div`
  margin-bottom: 126px;
`

function Authentication(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
        <Image src={logoSVG} alt="Logo" />
      </Wrapper>
      <ButtonDiv>
        <Button fullWidth>Aluno</Button>
        <Button fullWidth>Professor</Button>
        <Button fullWidth href="search">
          Anônimo
        </Button>
      </ButtonDiv>
      <Footer>
        {/* eslint-disable @typescript-eslint/no-unsafe-assignment */}
        <Image src={footer} alt="Footer" />
      </Footer>
    </Container>
  )
}

export default dynamic(async () => await Promise.resolve(Authentication), {
  ssr: false,
})
