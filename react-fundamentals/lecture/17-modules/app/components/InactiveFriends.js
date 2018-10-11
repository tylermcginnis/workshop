import React from 'react'

export default function InactiveFriends (props) {
  return (
    <div>
      <h2>Inactive Friends</h2>
      <ul>
        {props.list.map((friend) => (
          <li key={friend.name}>
            <span>{friend.name}</span>
            <button onClick={() => props.onToggleFriend(friend.name)}>Activate</button>
          </li>
        ))}
      </ul>
    </div>
  )
}