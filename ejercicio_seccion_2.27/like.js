"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_numberOfLikes, _state) {
        this._numberOfLikes = _numberOfLikes;
        this._state = _state;
    }
    Like.prototype.like = function () {
        this._numberOfLikes += (this._state ? -1 : 1);
        this._state = !this._state;
    };
    Object.defineProperty(Like.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
