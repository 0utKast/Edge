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
            id:'Logo',
            type:'text',
            rect:['6px','129px','auto','auto','auto','auto'],
            text:"Videotutoriales.com",
            align:"left",
            font:['Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","700","none","italic"]
         },
         {
            id:'Portada',
            type:'rect',
            rect:['0px','0px','200px','300px','auto','auto'],
            fill:["rgba(240,152,9,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '400px'],
            ["style", "height", '300px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Portada}": [
            ["style", "width", '200px']
         ],
         "${_Logo}": [
            ["style", "top", '128.67px'],
            ["style", "font-style", 'italic'],
            ["style", "text-decoration", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '6px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "style", "${_Stage}", "width", '400px', { fromValue: '400px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Stage}", "height", '300px', { fromValue: '300px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-20939037");
