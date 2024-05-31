export const Header = () => {
    return (
        <Flex
          as='header'
          position='fixed'
          width='100%'
          height='70px'
          css={'box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1)'}
          alignItems='center'
          justify='space-between'
          bg='white'
          padding='0 24px'
          zIndex={{sm: '1500', md: '1500', lg: '500', xl: '500'}}
      >
        <Flex gap='48px'>
          <Flex
              as='button'
              onClick={()=>{handleLogoNavigate('/')}}
              align='center'
          >
            <Image src={mainLogo} alt='logo' width={{sm: '105px', md: '105px', lg: '105px', xl: '105px'}}></Image>
          </Flex>
          <Flex
              gap='32px'
              display={{sm: 'none', md: 'none', lg: 'flex', xl: 'flex'}}
              align='center'
          >
            <HeaderLink path={'/ticket-fares'} text={'ticket_fares.ticket_fares'} />
            <HeaderLink path={'/network-and-schedules'} text={'network_schedule.network_schedule'} />
            { config.sections.news && <HeaderLink path={'/news'} text={'news.news'} /> }
            { config.sections.support && <HeaderLink path={'/support'} text={'support.support'} /> }
          </Flex>
        </Flex>

        <Flex display={{sm: 'none', md: 'none', lg: 'flex', xl: 'flex'}}>
          <LanguageSelector />
        </Flex>

        <Flex display={{sm: 'flex', md: 'flex', lg: 'none', xl: 'none'}} align='center'>
          <LanguageSelector />
          <Button
              style='ghost'
              type='neutralDark'
              size='small'
              leftIconProps={isOpen ? {src: closeIcon, css: { width: 24, height: 24 }} : {src: menuButtonIcon, css: { width: 24 }}}
              onClick={isOpen ? onClose : onOpen}
          />
          <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent padding='16px 24px 24px' mt='68px' minW='calc(100vw)' gap='24px' css={'box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)'}>
              <Flex direction='column' align='flex-start' w='100%'>
                <HeaderLink path={'/ticket-fares'} text={'ticket_fares.ticket_fares'} onClose={onClose} mobile />
                <HeaderLink path={'/network-and-schedules'} text={'network_schedule.network_schedule'} onClose={onClose} mobile />
                { config.sections.news && <HeaderLink path={'/news'} text={'news.news'} onClose={onClose} mobile /> }
                { config.sections.support && <HeaderLink path={'/support'} text={'support.support'} onClose={onClose} mobile /> }
              </Flex>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    )
}