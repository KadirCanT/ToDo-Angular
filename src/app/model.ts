export class Model {
    //user;
    items;

    constructor () {
        // this.user = "";
        this.items= [
                        new TodoItem("Spor",false),
                        new TodoItem("Kahvaltı",true),
                        new TodoItem("Okul",false),
                        new TodoItem("Sinema",false),
                     ];
    }
}
export class TodoItem {
    description;
    action;

    constructor(description: string,action: boolean) {
        this.description=description;
        this.action=action;
    }
}
