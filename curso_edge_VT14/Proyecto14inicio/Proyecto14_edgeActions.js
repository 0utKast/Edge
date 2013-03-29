/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button4Copy").hide();
         
         sym.play(0);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_button4}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("photo4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button3}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("photo3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button2}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("photo2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button1}", "click", function(sym, e) {
         // insert code for mouse click here
         // stop the timeline at the given position (ms or label)
         sym.stop("photo1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button1Copy").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button1Copy").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button2Copy").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5076, function(sym, e) {
         // insert code here
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button2Copy").hide();
         sym.$("button1Copy").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button3Copy").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         // Hide an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button3Copy").hide();
         sym.$("button1Copy").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge element name to a DOM
         //  element that can be used with jQuery)
         sym.$("button4Copy").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

})(jQuery, AdobeEdge, "EDGE-94802810");