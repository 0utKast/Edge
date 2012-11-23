/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fondo_electronica2',
            type:'image',
            rect:['0px','-4px','240px','404px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fondo_electronica.png",'0px','0px']
         },
         {
            id:'ttulo',
            type:'image',
            rect:['0','185px','240px','97px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"t%C3%ADtulo.png",'0px','0px']
         },
         {
            id:'fecha_fiesta',
            display:'none',
            type:'image',
            rect:['59px','18px','113px','98px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fecha_fiesta.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '240px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ttulo}": [
            ["style", "top", '185px'],
            ["style", "left", '-240px']
         ],
         "${_fecha_fiesta}": [
            ["style", "top", '18px'],
            ["style", "left", '59px'],
            ["style", "display", 'none']
         ],
         "${_fondo_electronica2}": [
            ["style", "left", '83px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid11", tween: [ "style", "${_ttulo}", "left", '0px', { fromValue: '-240px'}], position: 250, duration: 1000 },
            { id: "eid4", tween: [ "style", "${_fondo_electronica2}", "left", '0px', { fromValue: '83px'}], position: 0, duration: 2500 },
            { id: "eid12", tween: [ "style", "${_ttulo}", "top", '185px', { fromValue: '185px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_ttulo}", "top", '185px', { fromValue: '185px'}], position: 1000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_fondo_electronica2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_fondo_electronica2}", "top", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_fecha_fiesta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_fecha_fiesta}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9717374");
