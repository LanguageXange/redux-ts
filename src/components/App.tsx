import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any; // will fix it later
}

export class _App extends React.Component<AppProps> {
  onBtnClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.slice(0, 15).map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }
  render() {
    return (
      <div>
        TS redux app!
        <button onClick={this.onBtnClick}> fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
