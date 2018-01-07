import React from 'react';
import { Navbar, Button } from 'reactstrap';
import '../index.css';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

      
  render() {
    return (
        <Navbar className="footer">
            <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button>
        </Navbar>
      
    );
  }
}






  