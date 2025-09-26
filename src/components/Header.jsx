import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Link to="/">
              <h1>BooRoad</h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
