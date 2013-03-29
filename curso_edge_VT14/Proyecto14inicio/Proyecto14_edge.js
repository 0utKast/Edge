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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'photo1',
            type:'image',
            rect:['0px','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo1.png",'0px','0px','960px','360px']
         },
         {
            id:'photo2',
            type:'image',
            rect:['740','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo2.png",'0px','0px','960px','360px']
         },
         {
            id:'photo3',
            type:'image',
            rect:['828','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo3.png",'0px','0px','960px','360px']
         },
         {
            id:'photo4',
            type:'image',
            rect:['753','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo4.png",'0px','0px','960px','360px']
         },
         {
            id:'photo1Copy',
            type:'image',
            rect:['470','0px','960px','360px','0px','auto'],
            fill:["rgba(0,0,0,0)",im+"photo1.png",'0px','0px','960px','360px']
         },
         {
            id:'Group',
            type:'group',
            rect:['408px','328px','144px','32','auto','auto'],
            c:[
            {
               id:'Rectangle',
               type:'rect',
               rect:['0px','0px','144px','32px','auto','auto'],
               opacity:0.69827586206897,
               fill:["rgba(0,0,0,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'button1',
               type:'ellipse',
               rect:['14px','6px','15px','15px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button2',
               type:'ellipse',
               rect:['45px','6px','15px','15px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button3',
               type:'ellipse',
               rect:['77px','6px','15px','15px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button4',
               type:'ellipse',
               rect:['108px','6px','15px','15px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button1Copy',
               type:'ellipse',
               rect:['14px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button2Copy',
               type:'ellipse',
               rect:['45px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button3Copy',
               type:'ellipse',
               rect:['77px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'button4Copy',
               type:'ellipse',
               rect:['108px','6px','20px','20px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(127,182,100,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_photo1}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "left", '0px'],
            ["style", "right", 'auto'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button1}": [
            ["style", "top", '6px'],
            ["style", "height", '15px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '14px'],
            ["style", "width", '15px']
         ],
         "${_button1Copy}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(164,145,77,0.84)'],
            ["style", "display", 'block'],
            ["style", "height", '15px'],
            ["style", "left", '14px'],
            ["style", "width", '15px']
         ],
         "${_button2}": [
            ["style", "top", '6px'],
            ["style", "height", '15px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '45px'],
            ["style", "width", '15px']
         ],
         "${_photo1Copy}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "left", '960px'],
            ["style", "right", 'auto'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0.69827586206897'],
            ["style", "left", '0px'],
            ["style", "width", '144px']
         ],
         "${_button3}": [
            ["style", "top", '6px'],
            ["style", "height", '15px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '77px'],
            ["style", "width", '15px']
         ],
         "${_button4}": [
            ["style", "top", '6px'],
            ["style", "height", '15px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '108px'],
            ["style", "width", '15px']
         ],
         "${_photo2}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "left", '960px'],
            ["style", "right", 'auto'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_button4Copy}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(164,145,77,0.84)'],
            ["style", "display", 'block'],
            ["style", "height", '15px'],
            ["style", "left", '108px'],
            ["style", "width", '15px']
         ],
         "${_button3Copy}": [
            ["color", "background-color", 'rgba(164,145,77,0.84)'],
            ["style", "height", '15px'],
            ["style", "display", 'block'],
            ["style", "top", '6px'],
            ["style", "left", '77px'],
            ["style", "width", '15px']
         ],
         "${_photo4}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "left", '960px'],
            ["style", "right", 'auto'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '360px'],
            ["style", "max-width", 'none'],
            ["style", "width", '960px']
         ],
         "${_Group}": [
            ["style", "top", '328px'],
            ["style", "right", 'auto'],
            ["style", "left", '408px']
         ],
         "${_button2Copy}": [
            ["color", "background-color", 'rgba(164,145,77,0.84)'],
            ["style", "height", '15px'],
            ["style", "display", 'block'],
            ["style", "top", '6px'],
            ["style", "left", '45px'],
            ["style", "width", '15px']
         ],
         "${_photo3}": [
            ["style", "top", '0px'],
            ["style", "bottom", 'auto'],
            ["style", "left", '960px'],
            ["style", "right", 'auto'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "background-size", [960,360], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         labels: {
            "photo1": 0,
            "photo2": 2500,
            "photo3": 5076,
            "photo4": 7500
         },
         timeline: [
            { id: "eid156", tween: [ "style", "${_button4Copy}", "height", '15px', { fromValue: '15px'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid147", tween: [ "style", "${_button2Copy}", "height", '15px', { fromValue: '15px'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid145", tween: [ "color", "${_button1Copy}", "background-color", 'rgba(164,145,77,0.84)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(164,145,77,0.84)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_button3Copy}", "height", '15px', { fromValue: '15px'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid107", tween: [ "style", "${_photo1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_photo4}", "left", '0px', { fromValue: '960px'}], position: 7000, duration: 500, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_button1Copy}", "height", '15px', { fromValue: '15px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_button3Copy}", "width", '15px', { fromValue: '15px'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid150", tween: [ "color", "${_button2Copy}", "background-color", 'rgba(164,145,77,0.84)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(164,145,77,0.84)'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_photo1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_button4Copy}", "width", '15px', { fromValue: '15px'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid103", tween: [ "style", "${_photo1Copy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_photo4}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "style", "${_photo1Copy}", "left", '960px', { fromValue: '960px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "style", "${_photo1Copy}", "left", '0px', { fromValue: '960px'}], position: 9500, duration: 500, easing: "easeOutQuad" },
            { id: "eid70", tween: [ "style", "${_button3Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid151", tween: [ "style", "${_button3Copy}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid158", tween: [ "color", "${_button4Copy}", "background-color", 'rgba(164,145,77,0.84)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(164,145,77,0.84)'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid105", tween: [ "style", "${_photo3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_photo2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_photo3}", "left", '0px', { fromValue: '960px'}], position: 4500, duration: 500, easing: "easeOutQuad" },
            { id: "eid148", tween: [ "style", "${_button2Copy}", "width", '15px', { fromValue: '15px'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid144", tween: [ "style", "${_button1Copy}", "width", '15px', { fromValue: '15px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "color", "${_button3Copy}", "background-color", 'rgba(164,145,77,0.84)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(164,145,77,0.84)'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "style", "${_button1Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid149", tween: [ "style", "${_button1Copy}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_button2Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_button2Copy}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "style", "${_photo2}", "left", '0px', { fromValue: '960px'}], position: 2000, duration: 500, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "style", "${_button4Copy}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "style", "${_button4Copy}", "display", 'none', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-94802810");
