import { Search } from '@mui/icons-material'
import { Button, Input } from '@mui/material'
import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <div className='navigation'>
        <div className="navigation__container">
            <div className="navigation__divs">
                <span className="navigation__title">by platform</span>
                <div className="navigation__platforms">
                    <span className="navigation__platform">Windows</span>
                    <span className="navigation__platform">X Box One</span>
                    <span className="navigation__platform">PS5</span>
                </div>
            </div>
            <div className="navigation__divs2">
                <span className="navigation__title">by category</span>
                <div className="navigation__categories">
                    <div className="navigation__category">Best sellers</div>
                    <div className="navigation__category">Pre-order</div>
                    <div className="navigation__category">Discounts</div>
                    <div className="navigation__category">New games</div>
                </div>
            </div>
            <div className="navigation__divs search">
                <span className="navigation__title">search games</span>
                <form action="" className="navigation__searchDiv">
                    <Input  className='navigation__search' placeholder='For example: Battledfield' >Input</Input>
                    <Button className='navigation__searchButton'><Search /></Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Navigation
