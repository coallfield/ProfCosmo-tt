module.exports = class TodoDto {
    email;
    title;
    body;
    status;
    id;
    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.title = model.title
        this.body = model.body
        this.status = model.status
    }

}