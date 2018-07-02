class SortedList {
    constructor (items, length) {
        this.items = []; 
        this.length = this.items.length;

    }



add(item) {
    this.items.push(item);
    this.length++;
    
    function compare(a, b){
        let comparison = 0;
      
        if (a > b) {
          comparison = 1;
        } else if (b > a) {
          comparison = -1;
        }
      
        return comparison;
      }

 this.items = this.items.sort(compare);
    
}


get(pos) {
   return this.items[pos-1];

}


max () {
    if (this.items.length >0 ) {
        return Math.max(...this.items);

    }

}


min () {
    if (this.items.length >0 ) {
        return Math.min(...this.items);

    }

}


average () { 

    
    if (this.items.length >0 ) {
        
        return (this.items.reduce(function(a, b) {return a + b; }))/this.items.length;
   
     }

}


sum () {
    if (this.items.length >0 ) {
        
        return this.items.reduce(function(a, b) { return a + b; });

    }

};
}


// let b = new SortedList();
// console.log(b.length);
// b.add(2);
// b.add(10);
// b.add(32);
// b.add(4);
// console.log(b.length);

// console.log(b);
module.exports = SortedList;
