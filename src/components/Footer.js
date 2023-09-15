import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <>
      <footer class="section footer">
        <ul class="footer-links">
          {pageLinks.map((link) => {
            const { id, title, href } = link
            return (
              <li key={id}>
                <a href={href} class="footer-link">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
        <ul class="footer-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  class="footer-icon"
                >
                  <i class={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
        <p class="copyright">
          copyright &copy; Atithi Yaatra
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
