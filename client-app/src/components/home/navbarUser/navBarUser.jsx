import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import FavoriteIcon from '../../../icons/Favorite'
import Moon from '../../../icons/moon'
import Notification from '../../../icons/notification'
import Sun from '../../../icons/sun'
import darkTheme from './navbarUserBlack.module.css'
import lightTheme from './navbarUserLight.module.css'

function NavBarUser () {
  const dispatch = useDispatch()
  const MoonIcon = <Moon />
  const SunIcon = <Sun />
  let style = lightTheme
  const [theme, setTheme] = useState('dark')
  const [themeIcon, setThemeIcon] = useState(Moon)
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setThemeIcon(MoonIcon)
      document.documentElement.style.setProperty(
        '--backgroundColor',
        '#272727 '
      )
      dispatch({
        type: 'NEW_THEME',
        payload: 'dark'
      })
    } else {
      setTheme('light')
      setThemeIcon(SunIcon)
      document.documentElement.style.setProperty(
        '--backgroundColor',
        '#E3E3E3 '
      )
      dispatch({
        type: 'NEW_THEME',
        payload: 'light'
      })
    }
  }

  return (
    <ThemeProvider
      theme={theme === 'light' ? (style = lightTheme) : (style = darkTheme)}
    >
      <div className={style.container}>
        <div className={style.icon21}>
          <Link to='#' onClick={toggleTheme}>
            {themeIcon}
          </Link>
        </div>
        <div className={style.icon2}>
          <Link to='#'>
            <FavoriteIcon />
          </Link>
        </div>
        <div className={style.icon2}>
          <Link to='#'>
            <Notification />
          </Link>
        </div>
        <div className={style.icon3}>
          <Link to='#'>
            <img src='https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png?x=480&quality=20' />
          </Link>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default NavBarUser
