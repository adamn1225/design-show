import React, { Component } from 'react'

export class Header extends Component {
    render() {
        
        const headerStyle =  {
            div: {
            padding: '10px',
            boxShadow: '0px 14px 5px -12px rgba(0,0,0,0.56)',
            width: '100%'
            },

        }
        return (
            <div style={headerStyle.div}>
                <h1>Design Show</h1>
            </div>
        )
    }
}

export default Header
