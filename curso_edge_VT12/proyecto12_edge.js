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
            id:'fondo',
            type:'image',
            rect:['1px','1px','1024px','683px','auto','auto'],
            opacity:0.49056604017252,
            fill:["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['502px','0px','505px','689px','auto','auto'],
            fill:["rgba(255,255,255,0.30)"],
            stroke:[0,"rgba(0,0,0,0.00)","none"]
         },
         {
            id:'body',
            type:'text',
            rect:['19px','266px','222px','166px','auto','auto'],
            text:"Lorem ipsum. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Duis aliquam vestibulum quam.<br>",
            align:"auto",
            font:['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',16,"rgba(255,255,255,1.00)","500","none","italic"],
            transform:[]
         },
         {
            id:'titulo2',
            type:'image',
            rect:['0px','0px','414px','256px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"titulo2.png",'0px','0px']
         },
         {
            id:'blackbar',
            type:'rect',
            rect:['502','400','505px','32px','auto','auto'],
            fill:["rgba(0,0,0,0.80)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[]
         },
         {
            id:'mapa',
            type:'rect',
            rect:['19px','440px','335px','230px','auto','auto'],
            fill:["rgba(255,255,255,0.2969)"],
            stroke:[0,"rgba(0, 0, 0, 0)","none"]
         },
         {
            id:'menu',
            type:'image',
            rect:['364px','343px','123px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu.png",'0px','0px']
         },
         {
            id:'cubierta',
            display:'none',
            type:'rect',
            rect:['0px','0px','1024px','690px','auto','auto'],
            opacity:0.8,
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0, 0, 0, 0)","none"]
         },
         {
            id:'video',
            display:'none',
            type:'rect',
            rect:['232px','174px','560px','315px','auto','auto'],
            fill:["rgba(255,255,255,0.2969)"],
            stroke:[0,"rgba(0, 0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_fondo}": [
            ["style", "top", '1px'],
            ["style", "opacity", '0.49056604017252'],
            ["style", "left", '1px']
         ],
         "${_cubierta}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '690px'],
            ["style", "opacity", '0.8'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_video}": [
            ["style", "top", '174px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '315px'],
            ["style", "display", 'none'],
            ["style", "left", '232px'],
            ["style", "width", '560px']
         ],
         "${_titulo2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_blackbar}": [
            ["color", "background-color", 'rgba(0,0,0,0.7969)'],
            ["style", "height", '32px'],
            ["style", "top", '400px'],
            ["style", "left", '502px'],
            ["style", "width", '505px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,255,255,0.30)'],
            ["style", "height", '689px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '502px'],
            ["style", "width", '505px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '690px'],
            ["style", "overflow", 'hidden']
         ],
         "${_menu}": [
            ["style", "left", '364px'],
            ["style", "top", '343px']
         ],
         "${_body}": [
            ["style", "line-height", '26px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", '500'],
            ["style", "left", '19px'],
            ["style", "width", '222px'],
            ["style", "top", '266px'],
            ["style", "height", '166px'],
            ["style", "font-size", '16px'],
            ["style", "font-style", 'italic']
         ],
         "${_mapa}": [
            ["style", "height", '230px'],
            ["style", "top", '440px'],
            ["style", "left", '19px'],
            ["style", "width", '335px']
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
            { id: "eid7", tween: [ "style", "${_cubierta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"main1": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: [],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      type: 'text',
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic'],
      rect: ['1','12','152px','42px','auto','auto'],
      id: 'Text8',
      text: 'Main Stage',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      rect: ['12','73','141','132','auto','auto'],
      id: 'Text9',
      text: 'Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Duis aliquam vestibulum quam, vel tempus lorem tristique at. ',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "top", '-1px'],
            ["style", "height", '56px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text8}": [
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["style", "height", '42px'],
            ["style", "font-size", '30px'],
            ["style", "left", '1px'],
            ["style", "width", '152px']
         ],
         "${_Text9}": [
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '12px']
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
            { id: "eid64", tween: [ "style", "${_Rectangle2}", "top", '-1px', { fromValue: '-1px'}], position: 1000, duration: 0 },
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"main2": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: [],
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      rect: ['12','13','141','43','auto','auto'],
      transform: [],
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic'],
      id: 'Text8',
      text: 'Food',
      align: 'center',
      type: 'text'
   },
   {
      type: 'text',
      rect: ['12','68px','141','131','auto','auto'],
      id: 'Text10',
      text: 'Nam id justo eu enim eleifend fermentum in et magna. Morbi molestie convallis eros sit amet facilisis. Fusce ut erat a nunc dapibus consequat. ',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "height", '56px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'center'],
            ["style", "left", '12px'],
            ["style", "font-size", '30px']
         ],
         "${_Text10}": [
            ["style", "top", '68px']
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
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"main3": {
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
      rect: ['0px','0px','165','230','auto','auto'],
      transform: [],
      id: 'RectangleCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.3984)']
   },
   {
      rect: ['0','0','165','56px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,1,1,1)']
   },
   {
      rect: ['12','13','141','43','auto','auto'],
      transform: [],
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',30,'rgba(255,255,255,1)','normal','none','italic'],
      id: 'Text8',
      text: 'Activities',
      align: 'center',
      type: 'text'
   },
   {
      type: 'text',
      rect: ['12','70','141','141','auto','auto'],
      id: 'Text11',
      text: 'Vestibulum et enim leo. Suspendisse vitae erat ante. Praesent nulla dui, semper vitae facilisis eget, auctor in nulla. <br><br>Fusce quis risus in quam interdum porta. Vestibulum laoreet tempor ultrices.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(123,7,7,1.00)'],
            ["style", "height", '56px']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'center'],
            ["style", "left", '12px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '165px']
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
            { id: "eid43", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(143,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,7,7,1.00)'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(143,1,1,1.00)'}], position: 1000, duration: 0 }         ]
      }
   }
},
"textscroll": {
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
      rect: ['0px','0px','128px','230px','auto','auto'],
      font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif',14,'rgba(255,255,255,1)','normal','none','italic'],
      id: 'Text3',
      text: 'Festival Dates<br>August 22-24<br><br>Prospect Park<br>Brooklyn, New York<br><br>Ticket Prices<br>$40 3-Day Pass<br>$25 1-Day Pass<br>$15 Afternoon Only<br><br>No Cameras<br>No Glass Bottles<br>No Umbrellas<br>No Outside Food<br><br>Parking Limited<br>Free Bicycle Parking',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "height", '230px'],
            ["style", "clip", [-230,128,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '230px']
         ],
         "${symbolSelector}": [
            ["style", "height", '230px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18250,
         autoPlay: true,
         timeline: [
            { id: "eid327", tween: [ "style", "${_Text3}", "top", '-290px', { fromValue: '230px'}], position: 0, duration: 18250 },
            { id: "eid328", tween: [ "style", "${_Text3}", "clip", [289,128,519,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-230,128,0,0]}], position: 0, duration: 18250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-201104104");
