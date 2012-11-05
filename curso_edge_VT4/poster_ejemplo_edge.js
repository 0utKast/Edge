/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Chela one\', Georgia, \'MS Serif\'']='<link href=\'http://fonts.googleapis.com/css?family=Chela+One\' rel=\'stylesheet\' type=\'text/css\'>';


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
            rect:['377px','1543px','180px','120px','auto','auto'],
            borderRadius:["0px 0px","50px 50px","0px 0px","50px 50px"],
            fill:["rgba(120,100,69,0.89)"],
            stroke:[2,"rgba(255,255,255,1.00)","solid"],
            transform:[[],[],['10deg']]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['662px','1543px','180px','120px','auto','auto'],
            borderRadius:["0px","50px 50px","0px 0px","50px 50px"],
            fill:["rgba(167,113,89,0.88)"],
            stroke:[2,"rgb(255, 255, 255)","solid"],
            transform:[[],[],['10deg']]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['247px','1777px','112px','56px','auto','auto'],
            borderRadius:["60px 60px","60px 60px","60px 60px","60px 60px"],
            fill:["rgba(220,210,79,0.89)"],
            stroke:[2,"rgb(255, 255, 255)","solid"]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['592px','1777px','120px','56px','auto','auto'],
            borderRadius:["60px 60px","60px 60px","60px 60px","60px 60px"],
            fill:["rgba(220,210,79,0.8867)"],
            stroke:[2,"rgb(255, 255, 255)","solid"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['427px','1582px','auto','auto','auto','auto'],
            text:"VER",
            align:"left",
            font:['Arial, Helvetica, sans-serif',40,"rgba(246,238,238,1.00)","normal","none","normal"]
         },
         {
            id:'Text4Copy3',
            type:'text',
            rect:['712px','1582px','auto','auto','auto','auto'],
            text:"OIR",
            align:"left",
            font:['Arial, Helvetica, sans-serif',40,"rgba(246,238,238,1.00)","normal","none","normal"]
         },
         {
            id:'Rectangle3Copy',
            type:'rect',
            rect:['935px','1777px','120px','56px','auto','auto'],
            borderRadius:["60px 60px","60px 60px","60px 60px","60px 60px"],
            fill:["rgba(220,210,79,0.8867)"],
            stroke:[2,"rgb(255, 255, 255)","solid"]
         },
         {
            id:'Text10',
            type:'text',
            rect:['263px','1790px','83px','34px','auto','auto'],
            text:"Primera",
            align:"left",
            font:['Chela one, Georgia, MS Serif',20,"rgba(246,238,238,1)","normal","none","normal"]
         },
         {
            id:'Text11Copy',
            type:'text',
            rect:['955px','1790px','93px','34px','auto','auto'],
            sizeRange:['','93px','',''],
            text:"Tercera<br>",
            align:"left",
            font:['Chela one, Georgia, MS Serif',20,"rgba(246,238,238,1)","normal","none","normal"],
            source:['','93px','','']
         },
         {
            id:'Text11',
            type:'text',
            rect:['608px','1790px','93px','34px','auto','auto'],
            sizeRange:['','93px','',''],
            text:"Segunda",
            align:"left",
            font:['Chela one, Georgia, MS Serif',20,"rgba(246,238,238,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '1777px'],
            ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '247px'],
            ["style", "border-bottom-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '56px'],
            ["style", "border-bottom-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '111.75562984934px']
         ],
         "${_Text11}": [
            ["style", "font-family", 'Chela one, Georgia, MS Serif'],
            ["style", "max-width", '92.800003051758px']
         ],
         "${_Text11Copy}": [
            ["style", "top", '1790px'],
            ["style", "font-family", 'Chela one, Georgia, MS Serif'],
            ["style", "left", '955.17px'],
            ["style", "max-width", '92.800003051758px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '1582px'],
            ["color", "color", 'rgba(246,238,238,1.00)'],
            ["style", "left", '712px'],
            ["style", "font-size", '40px']
         ],
         "${_Text10}": [
            ["style", "top", '1790px'],
            ["style", "font-family", 'Chela one, Georgia, MS Serif'],
            ["style", "left", '263px'],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(167,113,89,0.88)'],
            ["style", "top", '1543px'],
            ["transform", "skewX", '10deg'],
            ["style", "height", '120px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "left", '662.03px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '1777px'],
            ["style", "border-bottom-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '591.5px'],
            ["style", "border-top-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ]
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
            ["style", "left", '377.03px'],
            ["style", "width", '180px'],
            ["style", "top", '1543px'],
            ["style", "border-bottom-left-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "skewX", '10deg'],
            ["style", "height", '120px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-right-radius", [50,50], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '2px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '1777px'],
            ["style", "border-bottom-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '934.5px'],
            ["style", "border-top-right-radius", [60,60], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(246,238,238,1.00)'],
            ["style", "top", '1582px'],
            ["style", "left", '427px'],
            ["style", "font-size", '40px']
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
