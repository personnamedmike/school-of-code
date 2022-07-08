// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Flex } from '@chakra-ui/react'
import SchoolOfCodeLogo from './SchoolOfCodeLogo'
import HamburgerIcon from './HamburgerIcon'
import SideDrawer from './SideDrawer'

export default function Header() {
  return (
    <Flex display="flex" direction="row" align="end" justify="space-between">
      {/* <SchoolOfCodeLogo autoStart={true} loop={true} /> */}
      <img
        src="./assets/logo.svg"
        alt="Developer DAO School of Code logo"
        width="37%"
      />
      <SideDrawer />
      {/* <ConnectButton chainStatus="icon" showBalance={false} /> */}
    </Flex>
  )
}
