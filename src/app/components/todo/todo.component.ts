import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from "../../models/Todo";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    todo: Todo = {
        id: '',
        title: '',
        text: '',
        complete: false
    }

    @ViewChild('form') form;

  constructor() { }

  ngOnInit() { //LifeHook
    //Получаем список задач
    this.todos = [
        {
            title: 'Task 1',
            text: 'My task text',
            complete: false,
            id: '1'
        },
        {
            title: 'Task 2',
            text: 'My task text 2',
            complete: false,
            id: '2'
        }
    ];
  }

    //AddTask
    addTodo() {
        const newTask = {
            id: String(this.todos.length + 1),
            title: this.todo.title,
            text: this.todo.text,
            complete: false
        }

        this.todos = [
            ...this.todos,
            newTask
        ]

        this.form.reset();
    }

    //Delete Task
    deleteTask(i) {
        this.todos = this.todos.filter(task => task.id !== i)
    }

    identify(index) {
        return index;
    }

}
