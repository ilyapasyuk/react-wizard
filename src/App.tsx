import React from 'react'
import Wizard from './Wizard'

const rule = [
  {
    elementId: 'elementId1',
    title: 'Title 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    elementId: 'elementId2',
    title: 'Title 2',
    description: 'description 2',
  },
  {
    elementId: 'elementId3',
    title: 'Title 3',
    description: 'description 3',
  },
]

function App() {
  return (
    <div>
      <header>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          <span id="elementId1">
            Edit <code>src/App.js</code> and save to reload.
          </span>
          <a
            id="elementId2"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <img
          id="elementId3"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDA5eXdkOGhrOGw1YWc1ZzM4YmMzZzdlMG5nZ3JlY3hkeXYxYjVpZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ataczOlHD9YYjumCh7/giphy.gif"
          alt=""
        />
      </header>
      <Wizard rule={rule} />
    </div>
  )
}

export { App }
