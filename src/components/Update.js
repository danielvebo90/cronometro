import React from 'react';
import store from '../store'
import { Button, ButtonGroup} from 'react-bootstrap';


class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.values.title,
      project: props.values.project,
      updateInfo: props.values.updateInfo
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>Title</label>
          <input placeholder='Title' value={this.state.title} onChange={this.onChangeT}/>
          <label>Proyecto</label>
          <input placeholder='Proyecto' value={this.state.project} onChange={this.onChangeP}/>
        </div>

        <div className="d-flex flex-column">
            <ButtonGroup>
              <Button variant="outline-primary" size="sm" type="submit" onClick={this.updateInfo} >Editar</Button>

              <Button variant="outline-danger" size="sm" type="submit"  onClick={this.cancelUpdate}>Cancelar</Button>
            </ButtonGroup>
        </div>

      </form>
    );
  };

  onChangeT = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  onChangeP = (e) => {
    this.setState({
      project: e.target.value
    })
  };

  updateInfo = (e) => {
    e.preventDefault();
    store.dispatch({
      type:'UPDATE_STOPWATCH',
      payload: {
        id: this.props.values.id,
        title: this.state.title,
        project: this.state.project,
      }
    });
  };

  cancelUpdate = (e) => {
    e.preventDefault();
    store.dispatch({
      type:'CANCEL_UPDATE',
      payload: {
        id: this.props.values.id
      }
    })
  }

}



export default Update;
