import React, { Component } from 'react'
import Sidebar from "react-sidebar";

export class SidePanel extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true,
          pullRight: true,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

    render() {
        return (
        <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white", width: "300px" } }}
      >
        <button
         styles={ { float: "left" } }
         onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
        )
    }
}



export default SidePanel
