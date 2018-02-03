export class Like {
    constructor(private _numberOfLikes: number, private _state: boolean) {
    }

    like() {
        this._numberOfLikes += (this._state ? -1 : 1 )
        this._state = !this._state;
    }

    get numberOfLikes() {
        return this._numberOfLikes;
    }

    get state() {
        return this._state;
    }
}