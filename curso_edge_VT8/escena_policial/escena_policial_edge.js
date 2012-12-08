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
         },
         {
            id:'moto_policia',
            type:'image',
            rect:['28px','647px','392px','432px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"moto_policia.png",'0px','0px']
         },
         {
            id:'titulo',
            type:'image',
            rect:['0px','20px','1000px','83px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"titulo.png",'0px','0px'],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.60)"]
         },
         {
            id:'ryan',
            type:'image',
            rect:['661px','647px','413px','592px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan.png",'0px','0px']
         },
         {
            id:'semaforo',
            type:'image',
            rect:['389px','647px','334px','592px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"semaforo.png",'0px','0px']
         },
         {
            id:'contexto1',
            type:'rect',
            rect:['578','384','auto','auto','auto','auto']
         },
         {
            id:'contexto2',
            type:'rect',
            rect:['578','384','auto','auto','auto','auto']
         },
         {
            id:'contexto3',
            type:'rect',
            rect:['578','384','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'contexto3',
            symbolName:'contexto3'
         },
         {
            id:'contexto2',
            symbolName:'contexto2'
         },
         {
            id:'rollopapel2',
            symbolName:'rollopapel'
         },
         {
            id:'rollopapel',
            symbolName:'rollopapel'
         },
         {
            id:'contexto1',
            symbolName:'contexto1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_titulo}": [
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.60)'],
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '20px'],
            ["transform", "scaleY", '1'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["style", "clip", [0,0,83,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_rollopapel2}": [
            ["style", "top", '317.6px'],
            ["style", "left", '775px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '-1']
         ],
         "${_ryan}": [
            ["style", "top", '647px'],
            ["style", "left", '560px']
         ],
         "${_moto_policia}": [
            ["style", "top", '647px'],
            ["style", "left", '28px']
         ],
         "${_contexto2}": [
            ["style", "left", '1185px'],
            ["style", "top", '462px']
         ],
         "${_rollopapel}": [
            ["style", "top", '410.53px'],
            ["style", "left", '-210.91px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "rotateZ", '-23deg']
         ],
         "${_cinta}": [
            ["style", "-webkit-transform-origin", [107.29,-31.11], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-23deg'],
            ["style", "height", '90px'],
            ["style", "top", '585.53px'],
            ["style", "left", '-327.49px'],
            ["style", "width", '200px']
         ],
         "${_contexto3}": [
            ["style", "left", '1432.25px'],
            ["style", "top", '348px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '650px'],
            ["style", "width", '1000px']
         ],
         "${_cinta2}": [
            ["style", "top", '519.91px'],
            ["transform", "rotateZ", '9deg'],
            ["style", "height", '90px'],
            ["style", "-webkit-transform-origin", [107.29,-31.11], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [107.29,-31.11],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '853.82px'],
            ["style", "width", '200px']
         ],
         "${_semaforo}": [
            ["style", "top", '647px'],
            ["style", "left", '389px']
         ],
         "${_contexto1}": [
            ["style", "left", '997.5px'],
            ["style", "top", '337px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6500,
         autoPlay: true,
         timeline: [
            { id: "eid24", tween: [ "style", "${_cinta2}", "width", '1200px', { fromValue: '200px'}], position: 2000, duration: 1000 },
            { id: "eid56", tween: [ "style", "${_contexto2}", "left", '1162px', { fromValue: '1185px'}], position: 0, duration: 5500, easing: "easeOutBounce" },
            { id: "eid57", tween: [ "style", "${_contexto2}", "left", '474px', { fromValue: '1162px'}], position: 5500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid30", tween: [ "style", "${_semaforo}", "top", '185px', { fromValue: '647px'}], position: 3000, duration: 1000 },
            { id: "eid52", tween: [ "style", "${_contexto3}", "top", '348px', { fromValue: '348px'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_contexto3}", "left", '1409.25px', { fromValue: '1432.25px'}], position: 0, duration: 5500, easing: "easeOutBounce" },
            { id: "eid55", tween: [ "style", "${_contexto3}", "left", '721.35px', { fromValue: '1409.25px'}], position: 5500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid25", tween: [ "style", "${_rollopapel2}", "left", '-196px', { fromValue: '775px'}], position: 2000, duration: 1000 },
            { id: "eid29", tween: [ "style", "${_moto_policia}", "top", '258px', { fromValue: '647px'}], position: 3000, duration: 1000 },
            { id: "eid26", tween: [ "style", "${_rollopapel2}", "top", '211.6px', { fromValue: '317.6px'}], position: 2000, duration: 1000 },
            { id: "eid19", tween: [ "style", "${_cinta}", "width", '1550px', { fromValue: '200px'}], position: 0, duration: 2000 },
            { id: "eid50", tween: [ "style", "${_contexto1}", "top", '337px', { fromValue: '337px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_ryan}", "top", '57px', { fromValue: '647px'}], position: 3000, duration: 1000 },
            { id: "eid49", tween: [ "style", "${_contexto1}", "left", '1000px', { fromValue: '997.5px'}], position: 0, duration: 5500, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "style", "${_contexto1}", "left", '312px', { fromValue: '1000px'}], position: 5500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid23", tween: [ "style", "${_cinta2}", "left", '-59.39px', { fromValue: '853.82px'}], position: 2000, duration: 1000 },
            { id: "eid20", tween: [ "style", "${_rollopapel}", "left", '1024.16px', { fromValue: '-210.91px'}], position: 0, duration: 2000 },
            { id: "eid35", tween: [ "style", "${_titulo}", "clip", [0,1000,83,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,83,0]}], position: 4000, duration: 1000 },
            { id: "eid36", tween: [ "style", "${_titulo}", "clip", [0,1000,150,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1000,83,0]}], position: 5000, duration: 500 },
            { id: "eid22", tween: [ "style", "${_cinta2}", "top", '548.75px', { fromValue: '519.91px'}], position: 2000, duration: 1000 },
            { id: "eid40", tween: [ "transform", "${_titulo}", "scaleY", '1.1', { fromValue: '1'}], position: 5000, duration: 500 },
            { id: "eid39", tween: [ "transform", "${_titulo}", "scaleX", '1.1', { fromValue: '1'}], position: 5000, duration: 500 },
            { id: "eid37", tween: [ "subproperty", "${_titulo}", "boxShadow.offsetV", '25px', { fromValue: '3px'}], position: 5000, duration: 500 },
            { id: "eid38", tween: [ "subproperty", "${_titulo}", "boxShadow.blur", '14px', { fromValue: '3px'}], position: 5000, duration: 500 },
            { id: "eid44", tween: [ "style", "${_contexto2}", "top", '462px', { fromValue: '462px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_rollopapel}", "top", '-124.46px', { fromValue: '410.53px'}], position: 0, duration: 2000 },
            { id: "eid18", tween: [ "style", "${_cinta}", "left", '-442.63px', { fromValue: '-327.49px'}], position: 0, duration: 2000 },
            { id: "eid17", tween: [ "style", "${_cinta}", "top", '19.58px', { fromValue: '585.53px'}], position: 0, duration: 2000 },
            { id: "eid33", tween: [ "style", "${_ryan}", "left", '560px', { fromValue: '560px'}], position: 0, duration: 4000 },
            { id: "eid27", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_rollopapel2}', [] ], ""], position: 0 },
            { id: "eid28", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_rollopapel2}', [] ], ""], position: 2000 }         ]
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
      fill: ['rgba(0,0,0,0)','images/frente_modificado.png','0px','0px']
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
},
"contexto3": {
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
      id: 'fondotexto13',
      type: 'image',
      rect: ['-30px','-15px','335px','159px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fondotexto1.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['12px','37px','231px','69px','auto','auto'],
      id: 'TextCopy2',
      text: '\"¿Es Node.js para mi?\" - Desarrolladores Web',
      font: ['Courier, Courier New, monospace',18,'rgba(0,0,0,1)','normal','none',''],
      transform: {}
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fondotexto13}": [
            ["style", "height", '159.00012207031px'],
            ["style", "top", '-15px'],
            ["style", "left", '-29.67px'],
            ["style", "width", '334.66674804688px']
         ],
         "${symbolSelector}": [
            ["style", "height", '125px'],
            ["style", "width", '256px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '37px'],
            ["style", "font-size", '18px'],
            ["style", "height", '69.079986572266px'],
            ["style", "font-family", 'Courier, \'Courier New\', monospace'],
            ["style", "left", '12px'],
            ["style", "width", '231px']
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
},
"contexto1": {
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
      rect: ['-32px','-13px','451px','279px','auto','auto'],
      id: 'fondotexto1',
      type: 'image',
      clip: ['rect(0px 431.333251953125px 188.9998779296875px 0px)'],
      fill: ['rgba(0,0,0,0)','images/fondotexto1.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['25px','38px','349px','96','auto','auto'],
      id: 'TextCopy',
      text: '\"¿Qué es lo que intentaba resolver el creador de Node.js?.\" -Ryan Dahl',
      font: ['Courier, Courier New, monospace',18,'rgba(0,0,0,1)','normal','none',''],
      transform: {}
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fondotexto1}": [
            ["style", "top", '-13.33px'],
            ["style", "left", '-32px'],
            ["style", "clip", [0,431.333251953125,188.9998779296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '451.33349609375px']
         ],
         "${_TextCopy}": [
            ["style", "top", '38px'],
            ["style", "font-size", '18px'],
            ["style", "font-family", 'Courier, \'Courier New\', monospace'],
            ["style", "left", '25px'],
            ["style", "width", '349px']
         ],
         "${symbolSelector}": [
            ["style", "height", '171px'],
            ["style", "width", '400px']
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
},
"contexto2": {
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
      rect: ['-32px','-13px','461px','216px','auto','auto'],
      id: 'fondotexto12',
      type: 'image',
      clip: ['rect(0px 433px 239.000244140625px 0px)'],
      fill: ['rgba(0,0,0,0)','images/fondotexto1.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['26px','46px','349px','96','auto','auto'],
      id: 'Text',
      text: '\"¿Qué ventajas ofrece utilizar JavaScript también de lado del servidor?\" -Motor de Chrome.',
      font: ['Courier, Courier New, monospace',18,'rgba(0,0,0,1)','normal','none',''],
      transform: {}
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fondotexto12}": [
            ["style", "top", '-12.65px'],
            ["style", "height", '215.66662597656px'],
            ["style", "left", '-31.67px'],
            ["style", "clip", [0,433,239.000244140625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '461.3166809082px']
         ],
         "${_Text}": [
            ["style", "top", '45.66px'],
            ["style", "width", '349px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '26px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '171px'],
            ["style", "width", '400px']
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
})(jQuery, AdobeEdge, "EDGE-85071606");
