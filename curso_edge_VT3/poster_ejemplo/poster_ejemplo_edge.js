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
            id:'Baloncesto_fondo2',
            type:'image',
            rect:['0px','0px','1275px','1875px','auto','auto'],
            opacity:0.9,
            fill:["rgba(0,0,0,0)",im+"Baloncesto_fondo.jpg",'0px','0px']
         },
         {
            id:'fans',
            type:'image',
            rect:['0','0','1275px','1875px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fans.png",'0px','0px']
         },
         {
            id:'logobaloncesto',
            type:'image',
            rect:['0','0','1275px','1875px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logobaloncesto.png",'0px','0px']
         },
         {
            id:'basket_vector',
            type:'image',
            rect:['202px','160px','925px','540px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"basket_vector.svg",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['188px','1565px','180px','120px','auto','auto'],
            borderRadius:["0px 0px","50px 50px","0px 0px","50px 50px"],
            fill:["rgba(120,100,69,0.89)"],
            stroke:[2,"rgba(255,255,255,1.00)","solid"],
            transform:[[],[],['10deg']]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['473px','1565px','180px','120px','auto','auto'],
            borderRadius:["0px","50px 50px","0px 0px","50px 50px"],
            fill:["rgba(167,113,89,0.88)"],
            stroke:[2,"rgb(255, 255, 255)","solid"],
            transform:[[],[],['10deg']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(167,113,89,0.88)'],
            ["transform", "skewX", '10deg'],
            ["style", "height", '120px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px']
         ],
         "${_basket_vector}": [
            ["style", "top", '159.52px'],
            ["style", "height", '539.7815099786px'],
            ["style", "left", '202px'],
            ["style", "width", '925.38336181641px']
         ],
         "${_Baloncesto_fondo2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.9'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.80)'],
            ["style", "width", '1275px'],
            ["style", "height", '1875px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(120,100,69,0.89)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "left", '188px'],
            ["style", "width", '180px'],
            ["style", "top", '1565px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "skewX", '10deg'],
            ["style", "height", '120px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '2px']
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
         ]
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
})(jQuery, AdobeEdge, "EDGE-5549986");
