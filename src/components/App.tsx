import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      // we don't have any todos previously and now we have some todos
      // indicate that we've successfully fetched todos
      this.setState({ fetching: false });
    }
  }
  onBtnClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onDeleteTodo = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.slice(0, 8).map((todo: Todo) => {
      return (
        <div key={todo.id}>
          <h3>
            {todo.title} - {todo.id}
          </h3>
          <button onClick={() => this.onDeleteTodo(todo.id)}>delete</button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        TS redux app!
        <button onClick={this.onBtnClick}> fetch</button>
        {this.state.fetching && !this.props.todos.length ? "LOADING" : null}
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

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
