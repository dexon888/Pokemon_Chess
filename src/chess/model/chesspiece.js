class ChessPiece {
    constructor(name, id, isAttacked, color) {
        this.name = name
        this.color = color
        this.id = id
        this.isAttacked = isAttacked
    }

    setSquare(square) {
        //assign this piece to a specific square
        //this.square = square
    }

    getSquare() {
        //get the current square this piece is on.
        //undefined if the piece is dead
    }
}