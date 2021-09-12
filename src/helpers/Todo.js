
import { v4 as uuidv4  } from "uuid";

export default class Todo {
    constructor(description){
        this.id = uuidv4();
        this.description = description;
        this.done = false;
    }
}