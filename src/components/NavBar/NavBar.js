import React from 'react'
import './NavBar.scss'

export default function NavBar() {
   
        return (
            <div className='NavBar'>
                <div className='NavBar-buttons'>
                <button><i className="fa fa-bars" aria-hidden="true"></i> BROWSE</button>
                <button><i className="fa fa-plus" aria-hidden="true"></i> ADD NEW QUESTIONS</button>
                <button><i className="fa fa-cogs" aria-hidden="true"></i> API</button>
                <button><i className="fa fa-comments" aria-hidden="true"></i> DISCUSS</button>
                <button><i className="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button>
                </div>
            </div>
        )
    
}
