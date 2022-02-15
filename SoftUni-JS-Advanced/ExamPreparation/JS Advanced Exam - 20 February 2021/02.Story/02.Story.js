class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }


    get likes() {
        if (this._likes.length == 0) {

            return `${this.title} has 0 likes`

        } else if (this._likes.length == 1) {

            return `${this._likes[0]} likes this story!`

        } else {

            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`

        }

    }

    like(username) {
        if (this._likes.includes(username)) {

            throw new Error("You can't like the same story twice!");

        } else if (username == this.creator) {

            throw new Error("You can't like your own story!");

        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        this._likes = this._likes.filter(x => x != username);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        if (!this.comments.some(x => x.id == id) || id == undefined) {

            this.comments.push({
                id: this.comments.length+1,
                username,
                content,
                replies: []
            })
            return `${username} commented on ${this.title}`
        }
        else {
            let currentComment = this.comments.find(x => x.id == id)
            currentComment.replies.push({
                id: Number(`${currentComment.id}.${currentComment.replies.length+1}`),
                username,
                content
            })
            return "You replied successfully";
        }
    }

    toString(sortingType) {
        switch (sortingType) {
            case 'asc':
                this.comments.sort((a, b) => a.id - b.id).forEach(x=>x.replies.sort((a, b) => a.id - b.id))
                break;
            case 'desc':
                this.comments.sort((a, b) => b.id - a.id).forEach(x=>x.replies.sort((a, b) => b.id - a.id))
                break;
            case 'username':
                this.comments.sort((a, b) => a.username.localeCompare(b.username)) .forEach(c => {
                    c.replies.sort((a, b) => a.username.localeCompare(b.username));
                });
                break;
        }

        let result='';
        result+=`Title: ${this.title}\n`
        result+=`Creator: ${this.creator}\n`
        result+=`Likes: ${this._likes.length}\n`
        result+=`Comments:\n`
       
        this.comments.forEach(x=>{
            result+=`-- ${x.id}. ${x.username}: ${x.content}\n`
          
            x.replies.forEach(s=>result+=`--- ${s.id}. ${s.username}: ${s.content}\n`);
        });

        return result.trimEnd();
    }

}
let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.likes);

console.log(art.like('Ivan'));
console.log(art.like('Steven'));
console.log(art.likes);


console.log(art.comment("Anny", "Some Content"));
console.log(art.comment("Ammy", "New Content",1));

console.log(art.comment("Zane", "Reply", 2));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 2));
console.log(art.toString('asc'));
