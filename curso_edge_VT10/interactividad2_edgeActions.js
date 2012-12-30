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

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_mini_notre_gris}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_notre").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_sagrada_gris}", "mouseover", function(sym, e) {
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_sagrada").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_cascada_gris}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_cascada").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_santiago_gris}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_santiago3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_partenon_gris}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_partenon").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_notre}", "mouseout", function(sym, e) {
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_notre").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_sagrada}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_sagrada").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_cascada}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_cascada").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_santiago3}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_santiago3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_partenon}", "mouseout", function(sym, e) {
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("mini_partenon").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_notre}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.stop("notredame");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_sagrada}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.stop("familia");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_cascada}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.stop("cascada");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_santiago3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.stop("santiago");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mini_partenon}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.stop("partenon");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-371105384");