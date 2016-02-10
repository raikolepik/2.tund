(function(){

    "use strict";

    var Moosipurk = function(){

        //*SINGLETON PATTERN
      if(Moosipurk.instance){
        return Moosipurk.instance;
      }
      Moosipurk.instance = this; //this viitab moosipurgile


      console.log('moosipurgi sees');

    };

    window.onload = function(){
      var app = new Moosipurk();
    };

})();
