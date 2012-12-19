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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10082, function(sym, e) {
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play(0);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_mini_notre_gris}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // detener la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.stop(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-371105384");