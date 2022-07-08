// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Flex } from '@chakra-ui/react'
import SchoolOfCodeLogo from './SchoolOfCodeLogo'
import SVGComponent from './logo'

export default function Header() {
  return (
    <Flex display="flex" direction="row" align="end" justify="space-between">
      {/* <SchoolOfCodeLogo autoStart={true} loop={true} /> */}
      <img src="./assets/logo.svg" />
      {/* <ConnectButton chainStatus="icon" showBalance={false} /> */}
    </Flex>
  )
}
