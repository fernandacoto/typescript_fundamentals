"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.Like(10, false);
like.like();
console.log("# de likes = " + like.numberOfLikes + " estado: " + like.state);
console.log('+++++++++');
like.like();
console.log("# de likes = " + like.numberOfLikes + " estado: " + like.state);
