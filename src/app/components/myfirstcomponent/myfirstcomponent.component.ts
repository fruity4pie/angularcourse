//Компонент
import { Component } from '@angular/core'; //Импортируется декоратор, который позволяет понять ангуляру, что это компонент

@Component({ //Вызывается декоратор Component, который инициализирует объект
    selector: 'app-myfirstcomonent', //Селектор, по которому, компонента будет доступна
    templateUrl: './myfirstcomponent.component.html', //Адрес шаблона
    styleUrls: ['./myfirstcomponent.tcomponent.sass'] //Массив по стилями для компонента
})

export class MyFirstComonent {
    //Здесь проиходит инициализация компонентов, которые будут доступны в дальнейшем для разметки
    name: string = "Aslan";

    imageUrl: string = "https://i.ytimg.com/vi/EDzLx3hkli0/maxresdefault.jpg";

    disabled: boolean = true;

    user: any = {
        name: "Aslan",
        age: 24
    };

    users: object[] = [
        {
            name: 'Aslan',
            age: 24
        },
        {
            name: 'Danil',
            age: 22
        }
    ];

    show: boolean = false;

    constructor() {
        console.log(this.users);
        setTimeout( () => this.userNameChanges("+"), 5000);
        setTimeout(() => this.showToggle(), 2000);
        setTimeout(() => this.addUser(), 2000);
    }

    userNameChanges(symbol: string) {
        this.user.name = this.user.name.toUpperCase() + symbol;
        return this.user;
    }

    showToggle() {
        this.show = !this.show;
    }

    addUser() {
        this.users.push({name: 'Default', age: 18})
    }
}