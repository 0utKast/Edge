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
            id:'flores',
            type:'image',
            rect:['200px','0px','600px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"06_flores.png",'0px','0px']
         },
         {
            id:'partenon',
            type:'image',
            rect:['200px','0px','600px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"02_partenon.png",'0px','0px']
         },
         {
            id:'santiago',
            type:'image',
            rect:['200px','0px','600px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"03_santiago.png",'0px','0px']
         },
         {
            id:'cascada',
            type:'image',
            rect:['200px','0px','600px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"04_cascada.png",'0px','0px']
         },
         {
            id:'sagrada',
            type:'image',
            rect:['200px','0px','600px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"05_sagrada.png",'0px','0px']
         },
         {
            id:'notre',
            type:'image',
            rect:['200px','0px','600px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"01_notre.png",'0px','0px']
         },
         {
            id:'mini_partenon_gris',
            type:'image',
            rect:['0px','320px','200px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mini_partenon_gris.png",'0px','0px']
         },
         {
            id:'mini_santiago_gris',
            type:'image',
            rect:['0px','240px','200px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mini_santiago_gris.png",'0px','0px']
         },
         {
            id:'mini_cascada_gris',
            type:'image',
            rect:['0px','160px','200px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mini_cascada_gris.png",'0px','0px']
         },
         {
            id:'mini_sagrada_gris',
            type:'image',
            rect:['0px','80px','200px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mini_sagrada_gris.png",'0px','0px']
         },
         {
            id:'mini_notre_gris',
            type:'image',
            rect:['0px','0px','200px','80px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mini_notre_gris.png",'0px','0px']
         },
         {
            id:'mini_partenon',
            display:'none',
            type:'image',
            rect:['0px','320px','200px','80px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"mini_partenon.png",'0px','0px']
         },
         {
            id:'mini_santiago3',
            display:'none',
            type:'image',
            rect:['0px','240px','200px','80px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"mini_santiago.png",'0px','0px']
         },
         {
            id:'mini_cascada',
            display:'none',
            type:'image',
            rect:['0px','160px','200px','80px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"mini_cascada.png",'0px','0px']
         },
         {
            id:'mini_sagrada',
            display:'none',
            type:'image',
            rect:['0px','80px','200px','80px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"mini_sagrada.png",'0px','0px']
         },
         {
            id:'mini_notre',
            display:'none',
            type:'image',
            rect:['0px','0px','200px','80px','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"mini_notre.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_partenon}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '200px']
         ],
         "${_mini_cascada}": [
            ["style", "top", '160px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_mini_santiago3}": [
            ["style", "top", '240px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_sagrada}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '200px']
         ],
         "${_mini_partenon}": [
            ["style", "top", '320px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_flores}": [
            ["style", "left", '200px'],
            ["style", "top", '0px']
         ],
         "${_santiago}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '200px']
         ],
         "${_mini_santiago_gris}": [
            ["style", "left", '0px'],
            ["style", "top", '240px']
         ],
         "${_cascada}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '200px']
         ],
         "${_mini_cascada_gris}": [
            ["style", "left", '0px'],
            ["style", "top", '160px']
         ],
         "${_mini_notre}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_notre}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '200px']
         ],
         "${_mini_notre_gris}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '800px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mini_sagrada_gris}": [
            ["style", "left", '0px'],
            ["style", "top", '80px']
         ],
         "${_mini_partenon_gris}": [
            ["style", "left", '0px'],
            ["style", "top", '320px']
         ],
         "${_mini_sagrada}": [
            ["style", "top", '80px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10082,
         autoPlay: true,
         labels: {
            "notredame": 0,
            "familia": 2000,
            "cascada": 4000,
            "santiago": 6000,
            "partenon": 8000
         },
         timeline: [
            { id: "eid2", tween: [ "style", "${_sagrada}", "opacity", '0.056603773584906', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid6", tween: [ "style", "${_mini_notre}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_notre}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid3", tween: [ "style", "${_cascada}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
            { id: "eid10", tween: [ "style", "${_mini_partenon}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_mini_santiago3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_mini_sagrada}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_mini_cascada}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_partenon}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 500 },
            { id: "eid4", tween: [ "style", "${_santiago}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-371105384");
