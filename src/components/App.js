import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
// import TodoInput from './TodoInput';
// import TodoList from './TodoList';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

class App extends Component { 

    // state = {
    //     input: '',
    //     todos: [
    //         { id: 0, text: '리액트 공부하기', done: true},
    //         { id: 1, text: '컴포넌트 스타일링 해보기', done: false}
    //     ]
    // }

    // id = 1
    // getId = () => {
    //     return ++this.id;
    // }

    // handleInsert = () => {
    //     const { todos, input } = this.state;

    //     // 새 데이터 객체
    //     const newTodo = {
    //         text: input,
    //         done: false,
    //         id: this.getId()
    //     };

    //     if (input) {
    //         this.setState({
    //             todos: [...todos, newTodo],
    //             input: ''
    //         })
    //     }else {
    //         alert('할일을 입력해주세요');
    //     }
        
        
    // }

    // handleToggle = (id) => {
    //     const { todos } = this.state;
    //     const index = todos.findIndex(todo => todo.id === id);

    //     const toggled = {
    //         ...todos[index],
    //         done: !todos[index].done
    //     }

    //     this.setState({
    //         todos: [
    //             ...todos.slice(0, index),
    //             toggled, // 수정하려는 인덱스
    //             ...todos.slice(index + 1, todos.length)
    //         ]
    //     });
    // }

    // handleRemove = (id) => {
    //     const { todos } = this.state;
    //     const index = todos.findIndex(todo => todo.id === id);

    //     const result = window.confirm('','정말 삭제하시겠습니까?');

    //     if(result){
    //         this.setState({
    //             todos : [
    //                 ...todos.slice(0, index),
    //                 ...todos.slice(index + 1, todos.length)
    //             ]
    //         })
    //     }else{
    //         this.setState({
    //             todos
    //         })
    //     }
        
    // }

    // handleChange = (e) => {
    //     const { value } = e.target;
    //     this.setState({
    //         input: value
    //     })
    // }

    render() {
        return (
            <div>
                <PageTemplate>
                    <TodoInputContainer />
                    <TodoListContainer />
                </PageTemplate>
            </div>
        )
    }
}

export default App;