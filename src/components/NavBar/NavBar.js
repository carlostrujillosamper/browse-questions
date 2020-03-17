import React, { Component } from 'react'
import './NavBar.scss'

export default class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div className='NavBar-buttons'>
                <button><i class="fa fa-bars" aria-hidden="true"></i> BROWSE</button>
                <button><i class="fa fa-plus" aria-hidden="true"></i> ADD NEW QUESTIONS</button>
                <button><i class="fa fa-cogs" aria-hidden="true"></i> API</button>
                <button><i class="fa fa-comments" aria-hidden="true"></i> DISCUSS</button>
                <button><i class="fa fa-sign-in" aria-hidden="true"></i> LOGIN</button>
                </div>
            </div>
        )
    }
}
