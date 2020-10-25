function solve() {

    class Post {

        constructor(title, content) {

            this.title = title;
            this.content = content;
        }

        toString() {

            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {

            super(title, content);

            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {

            this.comments.push(comment);
        }

        toString() {

            let output = [`Post: ${this.title}`, `Content: ${this.content}`, `Rating: ${this.likes - this.dislikes}`];

            if (this.comments.length !== 0) {
                
                output.push('Comments:');

                this.comments.forEach(el => output.push(` * ${el}`));
            }

            return output.join('\n');
        }
    }

    class BlogPost extends Post {

        constructor(title, content, views) {

            super(title, content);

            this.views = views;
        }

        view() {

            this.views ++;

            return this;
        }

        toString() {
            
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    /* let post = new Post('makashi', 'nai-dobroto');
    console.log(post.toString());

    let social = new SocialMediaPost('makashi', 'nai-dobroto', 30, 20);
    console.log(social.toString());
    social.addComment('top');
    console.log(social.toString());

    let blogPost = new BlogPost('makashi', 'nai-dobroto', 30, 20, 200);
    blogPost.view().view();
    console.log(blogPost.toString()); */

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

// Post: TestTitle\nContent: TestContent\nRating: -5\n * 1\n * 2\n * 3
// Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n * 1\n * 2\n * 3
let classes = solve();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);
console.log(test.toString());