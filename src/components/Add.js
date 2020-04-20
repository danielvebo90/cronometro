import React from 'react';
import uniqueId from 'react-html-id';
import store from '../store';
import { Button, ButtonGroup, Card, Form } from 'react-bootstrap';

class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      project: ""
    }

    uniqueId.enableUniqueIds(this);

  }

  render() {
    return (
      <form>
        <div>
          <label>Titulo</label>
          <input placeholder='Titulo' value={this.state.title} onChange={this.onChangeT}/>
          <label>Proyecto</label>
          <input placeholder='Proyecto' value={this.state.project} onChange={this.onChangeP}/>
        </div>
        <div className="d-flex flex-column">
           	<ButtonGroup>
              <Button variant="outline-primary" size="sm" type="submit" onClick={this.createInfo} >Create</Button>

              <Button variant="outline-danger" size="sm" type="submit"  onClick={this.props.onToggleAddTimer} >Cancel</Button>
            </ButtonGroup>
        </div>
      </form>
    )
  }

  onChangeT = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onChangeP = (e) => {
    this.setState({
      project: e.target.value
    })
  }

  createInfo = (e) => {
    e.preventDefault();

    store.dispatch({
      type:'NEW_STOPWATCH',
      payload: {
        id: this.nextUniqueId(),
        title: this.state.title,
        project: this.state.project,
        timerTime: 0,
        updateInfo: false
      }
    });

    this.props.onToggleAddTimer();

    this.setState({
      title: '',
      project: ''
    });
  }

}

export default Add;
