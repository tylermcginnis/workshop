export function fetchFriends() {
  return new Promise((res, rej) => {
    const friends = [
      {
        name: 'Jordyn',
        active: true,
      },
      {
        name: 'Mikenzi',
        active: true,
      },
      {
        name: 'Jake',
        active: false
      }
    ]
    setTimeout(() => res(friends), 2000)
  })
}