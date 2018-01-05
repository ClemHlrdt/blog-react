import React from 'react';
import {Container, Row} from 'reactstrap';
import '../index.css';
export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date(), increment: 1, counter: 1 };
    }
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState((prevState, state) => ({
        date: new Date(),
        increment: 1,
        counter: prevState.counter + this.state.increment
      }));
    }
    render() {
      return (
        <Container>
        <Row>
          <p>It is {this.state.date.toLocaleTimeString()}.{" "}</p>
          <p> Number of seconds past since the beginning: {this.state.counter}</p>
        </Row>
        </Container>
      );
    }
  }