/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rollopapel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play(0);

      });
      //Edge binding end

   })("rollopapel");
   //Edge symbol end:'rollopapel'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'review3'
   (function(symbolName) {   
   
   })("contexto3");
   //Edge symbol end:'contexto3'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'review2'
   (function(symbolName) {   
   
   })("contexto2");
   //Edge symbol end:'contexto2'

   //=========================================================
   
   //Edge symbol: 'review1'
   (function(symbolName) {   
   
   })("contexto1");
   //Edge symbol end:'contexto1'

})(jQuery, AdobeEdge, "EDGE-85071606");