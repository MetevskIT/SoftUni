class ArtGallery {

    constructor(name) {
        this.name = name;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250,
        }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel=articleModel.toLowerCase();
        if (this.possibleArticles[articleModel] == undefined) {
            throw new Error("This article model is not included in this gallery!")
        }
        if (this.listOfArticles.some(x => x.articleName == articleName) && this.listOfArticles.some(x => x.articleModel.toLowerCase() == articleModel.toLowerCase())) {
            this.listOfArticles.find(x => x.articleName == articleName).quantity += quantity;
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity,
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 0;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        }
        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0,
        })
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let currentArticle = this.listOfArticles.find(x => x.articleName == articleName);
        if (!currentArticle || currentArticle.articleModel !== articleModel) {
            throw new Error("This article is not found.");
        }
        if (this.listOfArticles.find(x => x.articleName == articleName).quantity <= 0) {
            return(`The ${articleName} is not available.`);
        }
        if (!this.guests.some(x => x.guestName == guestName)) {
            return('This guest is not invited.')
        }

        let current = this.guests.find(x => x.guestName == guestName);
        let points = this.possibleArticles[articleModel.toLowerCase()];

        if (current.points < points) {
            return("You need to more points to purchase the article.")
        }
        current.points -= points;
        current.purchaseArticle++;
        currentArticle.quantity--;
        return `${guestName} successfully purchased the article worth ${points} points.`
    }

    showGalleryInfo(criteria) {
        let result = '';
        if (criteria == 'article') {
            result += "Articles information:";
            this.listOfArticles.forEach(x => result += `\n${x.articleModel.toLowerCase()} - ${x.articleName} - ${x.quantity}`)
        } else {
            result += "Guests information:";
            this.guests.forEach(x => result += `\n${x.guestName} - ${x.purchaseArticle}`)
        }
        return result;
    }


}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));

console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
