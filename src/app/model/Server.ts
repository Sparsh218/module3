export class Server {

    name : String;

    type : string;

    content : string;

    constructor(name : string, content: string) {
        this.name = name;
        this.type = "server";
        this.content = content;
    }
}