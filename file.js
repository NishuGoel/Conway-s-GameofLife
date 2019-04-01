(function() {
    var _=self.Life=function(seed){
        this.seed=seed;
        this.height=seed.length;
        this.width=seed[0].length;

        this.prevBoard=[];
        this.Board= cloneArray(seed);
    };



_.prototype = {
    next: function(){
        this.prevBoard=cloneArray(this.Board);

    for(y=0; y<height; y++){
        for(x=0; x<width; x++){
            var neighbors=this.aliveNeighbors(this.prevBoard, x, y);
            var alive =!!this.Board[y][x];

            if(alive){
                if((neighbors<2) || (neighbors>3)){
                    this.Board[y][x]=0;
                }
            }
            else{
                if(neighbors==3)
                    this.Board[y][x]=1;
            }
        }
    }


    },
    aliveNeighbors: function(array, x, y){

        var prevRow=array[y-1] || [];
        var nextRow=array[y+1] | [];

        return [
            prevRow[x-1], prevRow[x], prevRow[x+1],
            nextRow[x-1], nextRow[x], nextRow[x+1]

        ].reduce(function (prev, cur){
            return prev + +!!cur;
        }, 0);
    },

    toString: function(){
       return this.Board.map(function (row) {return row.join('');}).join('\n');
    }
}


//Helper
function cloneArray(array){

    return array.slice().map(function (row) {return row.slice(); });
}


var game = new Life([
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
]);


console.log(game + '');
game.next();
console.log(game + '');








