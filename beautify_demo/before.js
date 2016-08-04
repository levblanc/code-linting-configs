// before.js is indented with 2 spaces on purpose

// indention with tab
// select the whole object to see indentation style
var obj1 = {
  key1:'value1',
  key2:'value2'
}

// the new keyword
var person = function(name){
  this.greeting = 'hello, my name is '+name;
}

var sam = new person('sam');

// demo on formatting blocks wrapped with {}
// functions
var func1 = function(){
  return 'nothing happened';
}

// if-else
if('something happens'){
  return 'yay!'
}else{
  return 'nay...'
}

// strange formating of leading semi-colon
;(function(){})()
