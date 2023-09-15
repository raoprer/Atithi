import React from 'react'
import logo from '../images/logo.svg'
import prof from '../images/profile.svg'
import { pageLinks, socialLinks } from '../data'

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="nav-center">
          <div class="nav-header">
            {/* <img src={logo} class="nav-logo" alt="backroads" /> */}
            <h5 style={{ letterSpacing: '7px' }}>ATITHI</h5>
            <button type="button" class="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <ul class="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} class="nav-link">
                    {link.title}
                  </a>
                </li>
              )
            })}
          </ul>

          <ul class="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link
              return (
                <li>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    class="nav-icon"
                  >
                    <i class={icon}></i>
                  </a>
                </li>
              )
            })}
            <li>
              <a href="">
                <img src={prof} alt="profile" style={{ maxHeight: '30px' }} />
              </a>
            </li>
          </ul>
          {/* <ul>
            <img src={prof} alt="profile" style={{ maxHeight: '30px' }} />
          </ul> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
