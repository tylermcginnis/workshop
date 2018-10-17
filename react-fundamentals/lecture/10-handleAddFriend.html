
<!DOCTYPE html>
<html>
<head>
  <title>First React App</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src='https://unpkg.com/babel-standalone@6/babel.min.js'></script>
</head>
<body>
  <div id='app'></div>

  <script type='text/babel'>
    function FriendsList (props) {
      return (
        <ul>
          {props.list.map((name) => (
            <li key={name}>
              <span>{name}</span>
              <button onClick={() => props.onRemoveFriend(name)}>X</button>
            </li>
          ))}
        </ul>
      )
    }

    class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          friends: ['Jordyn', 'Mikenzi', 'Jake']
        }

        this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
        this.handleAddFriend = this.handleAddFriend.bind(this)
      }
      handleAddFriend() {
        this.setState((currentState) => {
          return {
            friends: currentState.friends.concat([this.state.input]),
            input: ''
          }
        })
      }
      handleRemoveFriend(name) {
        this.setState((currentState) => {
          return {
            friends: currentState.friends.filter((friend) => friend !== name)
          }
        })
      }
      render() {
        return (
          <div>
            <FriendsList
              list={this.state.friends}
              onRemoveFriend={this.handleRemoveFriend} />
          </div>
        )
      }
    }

    ReactDOM.render(
      <App />,
      document.getElementById('app')
    )
  </script>
</body>
</html>