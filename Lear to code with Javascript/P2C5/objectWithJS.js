function Pastry(type, flavor, levels, price, occasion){
  this.type     = type;
  this.flavor   = flavor;
  this.levels   = levels;
  this.price    = price;
  this.occasion = occasion;
};
Pastry.prototype.describe = function(){
  var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
  return description;
}
Pastry.prototype.bake = function(){
  var baked = "The " + this.flavor + this.type + " was placed in the oven. It's done !";
  return baked; 
}
Pastry.prototype.eat = function(){
  var eated = "The " + this.flavor + this.type + " was placed in my mounth. It's eated !";
  return eated;
}
var muffin = new Pastry("muffin", "blueberry", 1, "$2", "breakfast");
var cake = new Pastry("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());