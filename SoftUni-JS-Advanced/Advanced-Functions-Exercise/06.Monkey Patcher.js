function solution(cmd) {
    switch (cmd) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':

            let result = [];
            let popularVote = Math.max(this.upvotes, this.downvotes);
            let commonVotes =this.upvotes + this.downvotes;
            let subVotes=this.upvotes - this.downvotes;
            if (commonVotes > 50) {
                result.push(Math.ceil(this.upvotes + popularVote * 0.25))
                result.push(Math.ceil(this.downvotes + popularVote * 0.25))
            } else {
                result.push(this.upvotes)
                result.push(this.downvotes)
            }
            result.push(subVotes)
            let rating = 'new';
            if (commonVotes < 10) {
                rating = 'new';
            } else if (this.upvotes > commonVotes * 0.66) {
                rating = 'hot';
            } else if (subVotes>=0&&commonVotes > 100) {
                rating = 'controversial';
            } else if (subVotes< 0) {
                rating = 'unpopular';
            }
            result.push(rating)
            return result;
            break;

    }
    return solution;
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 4,
    downvotes: 4
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);