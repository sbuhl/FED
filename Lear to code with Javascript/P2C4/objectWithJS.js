var Pastry = {
  //Initialize the pastry
  init: function (type, flavor, levels, price, occasion){
    this.type     = type;
    this.flavor   = flavor;
    this.levels   = levels;
    this.price    = price;
    this.occasion = occasion;
  },
    
  // Describe the pastry
  describe : function(){
    var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
    return description;
  }

  // Bake the pastry
  bake: function(){
    var baked = "The " + this.flavor + this.type + " was placed in the oven. It's done !";
    return baked; 
  }

  // Eat the pastry
  eat : function(){
    var eated = "The " + this.flavor + this.type + " was placed in my mounth. It's eated !";
    return eated;
  }
}
var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());