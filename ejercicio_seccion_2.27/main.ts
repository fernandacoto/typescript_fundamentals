
import { Like } from './like';

let like  = new Like(10, false);
like.like();
console.log("# de likes = " + like.numberOfLikes + " estado: " + like.state);
console.log('+++++++++');
like.like();
console.log("# de likes = " + like.numberOfLikes + " estado: " + like.state)