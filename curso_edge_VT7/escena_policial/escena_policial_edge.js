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
            id:'fondo',
            type:'image',
            rect:['0','0','1000px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
         },
         {
            id:'cinta',
            type:'rect',
            rect:['-327px','586px','200px','90px','auto','auto'],
            fill:["rgba(255,246,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['-23deg']]
         },
         {
            id:'rollopapel',
            type:'rect',
            rect:['510','207','auto','auto','auto','auto'],
            transform:[[],['-23deg'],[],['1','0.8']]
         },
         {
            id:'cinta2',
            type:'rect',
            rect:['854px','520px','200px','90px','auto','auto'],
            fill:["rgba(255,246,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],['9deg']]
         },
         {
            id:'rollopapel2',
            type:'rect',
            rect:['775px','318px','auto','auto','auto','auto'],
            transform:[[],[],[],['-1','0.8']]
         }],
         symbolInstances: [
         {
            id:'rollopapel',
            symbolName:'rollopapel'
         },
         {
            id:'rollopapel2',
            symbolName:'rollopapel'
         }
         ]
      },
   states: {
      "Base State": {
         "${_cinta}": [
            ["style", "top", '585.53px'],
            ["transform", "rotateZ", '-23deg'],
            ["style", "height", '90px'],
            ["style", "-webkit-transform-origin", [107.29,-31.11], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '-327.49px'],
            ["style", "width", '200px']
         ],
         "${_rollopapel2}": [
            ["transform", "scaleX", '-1'],
            ["style", "top", '317.6px'],
            ["transform", "scaleY", '0.8'],
            ["style", "left", '775px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1000px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
         ],
         "${_cinta2}": [
            ["style", "-webkit-transform-origin", [107.29,-31.11], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '9deg'],
            ["style", "height", '90px'],
            ["style", "top", '519.91px'],
            ["style", "left", '853.82px'],
            ["style", "width", '200px']
         ],
         "${_rollopapel}": [
            ["style", "top", '410.53px'],
            ["transform", "scaleY", '0.8'],
            ["style", "left", '-210.91px'],
            ["transform", "rotateZ", '-23deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid23", tween: [ "style", "${_cinta2}", "left", '-59.39px', { fromValue: '853.82px'}], position: 2000, duration: 1000 },
            { id: "eid20", tween: [ "style", "${_rollopapel}", "left", '1024.16px', { fromValue: '-210.91px'}], position: 0, duration: 2000 },
            { id: "eid21", tween: [ "style", "${_rollopapel}", "top", '-124.46px', { fromValue: '410.53px'}], position: 0, duration: 2000 },
            { id: "eid22", tween: [ "style", "${_cinta2}", "top", '548.75px', { fromValue: '519.91px'}], position: 2000, duration: 1000 },
            { id: "eid26", tween: [ "style", "${_rollopapel2}", "top", '211.6px', { fromValue: '317.6px'}], position: 2000, duration: 1000 },
            { id: "eid25", tween: [ "style", "${_rollopapel2}", "left", '-196px', { fromValue: '775px'}], position: 2000, duration: 1000 },
            { id: "eid17", tween: [ "style", "${_cinta}", "top", '19.58px', { fromValue: '585.53px'}], position: 0, duration: 2000 },
            { id: "eid24", tween: [ "style", "${_cinta2}", "width", '1200px', { fromValue: '200px'}], position: 2000, duration: 1000 },
            { id: "eid18", tween: [ "style", "${_cinta}", "left", '-442.63px', { fromValue: '-327.49px'}], position: 0, duration: 2000 },
            { id: "eid19", tween: [ "style", "${_cinta}", "width", '1550px', { fromValue: '200px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"rollopapel": {
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
      id: 'borde',
      type: 'image',
      rect: ['0px','0px','196px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/borde.png','0px','0px']
   },
   {
      id: 'frente',
      type: 'image',
      rect: ['0px','98px','196px','196px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/frente.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_frente}": [
            ["style", "top", '98px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_borde}": [
            ["style", "left", '-0.11px'],
            ["style", "top", '0.42px']
         ],
         "${symbolSelector}": [
            ["style", "height", '294px'],
            ["style", "width", '196px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "transform", "${_frente}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-85071606");
