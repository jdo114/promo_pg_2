import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebookF, FaRegEnvelopeOpen } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'

import Section from '../components/Section'

import logo from '../images/logo.png'
import dropdown from '../images/dropdown.png'

import divider from '../images/divider.png'

import phone from '../images/phone.png'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import email from '../images/email.png'

import image1 from '../images/top.png'
import image2 from '../images/middle.png'
import image3 from '../images/bottom.png'

import './styles.css'

const Wrapper = styled.div`
  font-family: sans-serif;
`

const Header = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;
background-color: #ff6363;
  
`

const Content = styled.div`
  background-color: black;
  min-height: 100px;
  border-bottom: 3px solid black;

`

const Footer = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  background-color: #ff6363;

`

const TextHeader = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`

const SocialIcon = styled.a`
  color: black;
  text-decoration: none;
`

const HeaderImage = styled.img`
  height: 2rem;
  text-align: center;

`
const Divider = styled.img`
  height: 0.1rm;
  text-align: center;

`

const IndexPage = () =>
  <Wrapper>

    <Header>
      <HeaderImage src={logo} />
      <HeaderImage src={dropdown} />
    </Header>
      

    <Content>
      <Section image={image1} textLeft='' textRight='' />
      <Section image={image2} textLeft='.' textRight='' flip />

      <Section image={image3} textLeft='' textRight='' imageRight />
    </Content>

    <Footer>
    <HeaderImage src={phone} />
    <HeaderImage src={facebook} />
    <HeaderImage src={insta} />
    <HeaderImage src={twitter} />
    <HeaderImage src={email} />
    
      
    {/*   <SocialIcon href='tel:9569291450' target='_blank'><MdPhone style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaInstagram style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaFacebookF style={{ display: 'flex' }} /></SocialIcon>
      <SocialIcon href='tel:9569291450' target='_blank'><FaRegEnvelopeOpen style={{ display: 'flex' }} /></SocialIcon> */}
    </Footer>

  </Wrapper>

export default IndexPage
