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
      
      
      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         sym.$('<iframe width="335" height="230" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.es/maps?f=q&amp;source=s_q&amp;hl=es&amp;geocode=&amp;q=Playa+del+Ingl%C3%A9s,+San+Bartolom%C3%A9+de+Tirajana&amp;aq=0&amp;oq=playa+del+in&amp;sll=28.527148,-15.747434&amp;sspn=4.424812,8.453979&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Playa+del+Ingl%C3%A9s,+San+Bartolom%C3%A9+de+Tirajana,+Las+Palmas,+Canarias&amp;ll=27.760115,-15.573807&amp;spn=0.017469,0.028667&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://maps.google.es/maps?f=q&amp;source=embed&amp;hl=es&amp;geocode=&amp;q=Playa+del+Ingl%C3%A9s,+San+Bartolom%C3%A9+de+Tirajana&amp;aq=0&amp;oq=playa+del+in&amp;sll=28.527148,-15.747434&amp;sspn=4.424812,8.453979&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Playa+del+Ingl%C3%A9s,+San+Bartolom%C3%A9+de+Tirajana,+Las+Palmas,+Canarias&amp;ll=27.760115,-15.573807&amp;spn=0.017469,0.028667&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">Ver mapa más grande</a></small>').appendTo(sym.$("mapa"));
         sym.$("body").html("Bienvenido. La tierra del sol tiene durante todo el año temperaturas primaverales, que permiten bañarse en la <a style='color:red' href='http://www.playademaspalomas.com/'> Playa de Maspalomas</a> en pleno diciembre, por ejemplo");
         //establecer el valor de un símbolo de variable
         sym.setVariable("slidecount", "1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$('<iframe width="560" height="315" src="http://www.youtube.com/embed/Q0jmQWevFeY" frameborder="0" allowfullscreen></iframe>').appendTo(sym.$("video"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("video").show();
         // Mostrar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("cubierta").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cubierta}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$("video").children().remove();
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("video").hide();
         // Ocultar un elemento.
         //  (sym.$("name") convierte el nombre de un elemento de Edge Animate en un elemento DOM
         // que se puede usar con jQuery)
         sym.$("cubierta").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_titulo2}", "click", function(sym, e) {
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por un atributo de destino para una nueva ventana)
         window.open("http://www.youtube.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // introducir código para que se ejecute cuando el usuario pulsa una tecla. 
         // La variable “e.which” indica el código de tecla de la tecla que se ha presionado, p. ej. 32 = espacio
         //obtener el valor de un símbolo de variable
         var counter = sym.getVariable("slidecount");
         
         if (e.which == 39) { 
         	// tecla derecha pulsada
         	counter = counter + 1;
         	if(counter>5){
             counter=1;
         }
         }
         if (e.which == 37) { 
         	// tecla izquierda pulsada
         	counter = counter - 1;
         	if(counter<1){
             counter=5;
         }
         }
         
         //establecer el valor de un símbolo de variable
         sym.setVariable("slidecount", "counter");
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'main1'
   (function(symbolName) {   
   
   })("main1");
   //Edge symbol end:'main1'

   //=========================================================
   
   //Edge symbol: 'main2'
   (function(symbolName) {   
   
   })("main2");
   //Edge symbol end:'main2'

   //=========================================================
   
   //Edge symbol: 'main3'
   (function(symbolName) {   
   
   })("main3");
   //Edge symbol end:'main3'

   //=========================================================
   
   //Edge symbol: 'textscroll'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18250, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("textscroll");
   //Edge symbol end:'textscroll'

})(jQuery, AdobeEdge, "EDGE-201104104");