// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting(props) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  // const name = ''
  const [state, setState] = React.useState({
    name: props.initialName,
  })

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setState({name: event.target.value})
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {state.name}
      {state.name ? (
        <strong>Hello {state.name}</strong>
      ) : (
        'Please type your name'
      )}
    </div>
  )
}

function App() {
  return <Greeting initialName={'tugi'} />
}

export default App
