(this.webpackJsonpreact_camera=this.webpackJsonpreact_camera||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/test_img.5301fbed.jpeg"},20:function(e,t,a){e.exports=a(42)},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t){},35:function(e,t){},36:function(e,t){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(17),o=a.n(c),s=(a(25),a(3)),i=a.n(s),u=a(4),l=a(7),m=a(8),h=a(11),f=a(9),d=a(12),p=(a(27),a(18)),g=a.n(p),b=a(5),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading models"),t="/FaceRecognition_via_face-api/models",e.next=4,b.f(t);case 4:return e.next=6,b.d(t);case 6:return e.next=8,b.e(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:512,console.log("Models loaded"),n=.5,r=new b.a({inputSize:a,scoreThreshold:n}),c=!0,e.next=7,b.c(t);case 7:return o=e.sent,e.next=10,b.b(o,r).withFaceLandmarks(c).withFaceDescriptors();case 10:return s=e.sent,u=s.map((function(e){return{_height:e.detection.box.height,_x:e.detection.box._x,_y:e.detection.box._y,_width:e.detection.box._width}})),e.abrupt("return",{fullDesc:s,cordArray:u});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=(a(38),function(e){var t=e.container.map((function(e,t){console.log(e);var a=e._height,n=e._x,c=e._y,o=e._width;return r.a.createElement("div",{key:t,className:"bounding-box",style:{width:o,height:a,transform:"translate(".concat(n,"px,").concat(c,"px)")}})}));return r.a.createElement("div",null,t)}),E=(a(39),function(e){var t=e.src,a=e.container,n=e.detectStatus,c=e.ImageUrl;return r.a.createElement("div",{className:"center",width:"770",height:"auto"},r.a.createElement("div",{className:"new1"},r.a.createElement("input",{type:"text",placeholder:"Enter the url",className:"w-50 shadow-5 f4 mb3",onChange:c})),r.a.createElement("div",{className:"new"},n?r.a.createElement(x,{container:a}):null,r.a.createElement("img",{src:t,id:"new"})))}),y=a(19),j=a.n(y),k=(a(40),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).componentDidMount=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:e.startCapture();case 3:case"end":return t.stop()}}),t)}))),e.capture=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e.webcam.current.getScreenshot());case 2:a=t.sent,e.setState({faceDesc:a.fullDesc,box:a.cordArray});case 4:case"end":return t.stop()}}),t)}))),e.startCapture=function(){e.interval=setInterval((function(){e.capture()}),1500)},console.log("we are on web cam"),e.webcam=r.a.createRef(),e.state={videoConstraints:{width:800,height:400,facingMode:"user"},inputSize:{width:"800px",height:"400px"},faceDesc:null,box:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"new mt3"},r.a.createElement("div",{className:"rel"},r.a.createElement(x,{container:this.state.box}),r.a.createElement(j.a,{className:" shadow-5 br3",audio:!1,height:400,ref:this.webcam,screenshotFormat:"image/jpeg",width:800,videoConstraints:this.state.videoConstraints})))}}]),t}(n.Component)),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(h.a)(this,Object(f.a)(t).call(this))).componentDidMount=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:case"end":return e.stop()}}),e)}))),e.sayHello=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({cameraStatus:!1}),t.next=3,w(e.state.image).then((function(t){return e.setState({fullDesc:t.fullDesc,box:t.cordArray,faceDetected:!0})}));case 3:console.log(e.state.fullDesc);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getImageFromInput=function(t){e.setState({image:t.target.value})},e.camera=function(t){e.setState({cameraStatus:!0}),console.log(e.state.cameraStatus)},e.state={image:g.a,fullDesc:[],box:[],faceDetected:!1,discription:null,cameraStatus:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"f2 tc"},"Welcome to the face recognition"),r.a.createElement("div",{className:"container new"},r.a.createElement("button",{className:"f3 br3 bg-light-green pointer mr3",onClick:this.sayHello},"Picture"),r.a.createElement("button",{className:"f3 br3 bg-light-green pointer",onClick:this.camera},"Camera")),r.a.createElement("div",{className:"new mt1"}),this.state.cameraStatus?r.a.createElement(k,{status:this.cameraStatus}):r.a.createElement(E,{ImageUrl:this.getImageFromInput,container:this.state.box,src:this.state.image,detectStatus:this.state.faceDetected}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.44040cce.chunk.js.map