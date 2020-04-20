import { createStore } from 'redux';

const reducer = (state, action) => {
  if(action.type === 'SYNC_TIMER') {
    state.timers.map((t) => {
      if(t.id === action.payload.id){
       t.timerTime = action.payload.timerTime
      }
      return t
    })
    return {
      ...state
    }

  } else if(action.type === 'NEW_STOPWATCH') {
    return {      
      ...state,
      timers: [
        ...state.timers,
        { ...action.payload }
      ]
    }

  } else if(action.type === 'DELETE') {
    return {
      ...state,
      timers: state.timers.filter(t => t.id !== action.payload.id)
    }

  }else if(action.type === 'TOGGLE_UPDATE') {
    return {
      ...state,
      timers: state.timers.map(t => {
        if(t.id === action.payload.id) {
          t.timerTime = action.payload.timerTime
          t.updateInfo = !t.updateInfo;
        }
        return t;
      })
    }
  } else if(action.type === 'UPDATE_STOPWATCH') {
    return {
      ...state,
      timers: state.timers.map(t => {
        if(t.id === action.payload.id) {
          t.title = action.payload.title;
          t.project = action.payload.project;
          t.updateInfo = !t.updateInfo;
        }
        return t;
      })
    }
  } else if(action.type === 'CANCEL_UPDATE') {
    return {
      ...state,
      timers: state.timers.map(t => {
        if(t.id === action.payload.id) {
          t.updateInfo = !t.updateInfo;
        }
        return t;
      })
    }
  }

  return state;

}

export default createStore(reducer, { timers: [
  {id: 0, title: 'Primer cronómetro', project: 'Makeitreal', timerTime: 475003, updateInfo: false }
]});