Quiz:
  1) What is a React Element?
  2) How would you create "<h1>Hello</h1>" using the createElement API?

    React.createElement(
      'a',
      { className: '' },
      'Click Me'
    )

  3) What is a React Component?
    function Component () {
      return (
        <h1>Hello</h1>
      )
    }

  4) What are props?
  5) How do you update state in a component?
  6) What's the difference between passing an object to setState and passing a function.
  7) What is the `render` method used for?
  8) What lifecycle should you make Ajax requests in?
      componentDidMount
  9) What is componentDidUpdate used for?
  10) What are controlled components?
  11) What is the purpose of Higher Order Components?
  12) What are the downsides of HOCs?

// Refactor to a Hover component with a render prop (or children).
class Hover extends React.Component {
  state = { hovering: false };
  mouseOver = () => this.setState({ hovering: true });
  mouseOut = () => this.setState({ hovering: false });
  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering, <Tooltip />)}
      </div>
    );
  }
};
