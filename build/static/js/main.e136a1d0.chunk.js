(this.webpackJsonpspaceloverapp=this.webpackJsonpspaceloverapp||[]).push([[0],{29:function(e,a,t){e.exports=t(46)},46:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(10),l=t.n(r),o=t(8),i=t(1),c=t(22),m=t(23),p=t(28),u=t(27),h="https://api.nasa.gov/planetary/apod?api_key=SQN2WmYfw1ZNBsrUoBaAlRlDtdhJHdUo3K041TC6",d=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={apodpic:""},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(h,{method:"GET"}).then((function(e){return e.ok?e:fetch(h+"&date="+function(){var e=new Date;e.setDate(e.getDate()-1);var a=e.toISOString().split("T")[0];return console.log(h+"&date="+a),a}())})).then((function(e){return e.json()})).then((function(a){return e.setState({apodpic:a})}))}},{key:"render",value:function(){this.state;var e=this.state.apodpic.media_type;return s.a.createElement("div",{className:"home-display"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"apod-title"},"APOD NASA : ",this.state.apodpic.title),s.a.createElement("div",{className:"apod-pic"},"image"==e?s.a.createElement("img",{src:this.state.apodpic.url,alt:"OOps...Seems like Astronomy Pic Of The Day is not available at this time"}):"video"==e?s.a.createElement("iframe",{width:"80%",height:"750px",src:this.state.apodpic.url}," "):s.a.createElement("img",{className:"dummy-image",src:""})," "),s.a.createElement("div",{className:"apod-descrip"},s.a.createElement("div",{className:"desc-text"},this.state.apodpic.explanation))))}}]),t}(n.Component),v=function(){return s.a.createElement("div",{className:"headerBar"},s.a.createElement("div",{className:"logo"},"Space Lover's Lounge"))},f=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("span",{class:"rocket-attri"}," Rocket favicon made by ",s.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",s.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")),s.a.createElement("span",{className:"made-with-love"}," React app made with ",s.a.createElement("span",{className:"heart-beat"})),s.a.createElement("span",{className:"copyright-state"},"\xa9 Copyright 2020 Kiranjit Kaur"))},E=function(){return s.a.createElement("div",{className:"iss-widget-display"},s.a.createElement("div",{className:"widget-div"},s.a.createElement("iframe",{className:"widget-frame",width:"800",height:"750",src:"https://www.n2yo.com/widgets/widget-tracker.php?s=25544&size=large&all=1&me=5&map=2&foot=0",scrolling:"no",style:{border:"none",overflow:"hidden"}}),s.a.createElement("div",{className:"map-descrip"},s.a.createElement("ul",null,s.a.createElement("li",null,"240 individuals from 19 countries have visited the International Space Station"),s.a.createElement("li",null,"An international crew of six people live and work while traveling at a speed of five miles per second, orbiting Earth about every 90 minutes."),s.a.createElement("li",null,"In 24 hours, the space station makes 16 orbits of Earth, traveling through 16 sunrises and sunsets"),s.a.createElement("li",null,"The acre of solar panels that power the station means sometimes you can look up in the sky at dawn or dusk and see the spaceship flying over your home, even if you live in a big city. Find sighting opportunities at ",s.a.createElement("a",{href:"http://spotthestation.nasa.gov",target:"_blank"},"http://spotthestation.nasa.gov")),s.a.createElement("li",null,"More than 3 million lines of software code on the ground support more than 1.5 million lines of flight software code."),s.a.createElement("li",null,"In the International Space Station\u2019s U.S. segment alone, more than 1.5 million lines of flight software code run on 44 computers communicating via 100 data networks transferring 400,000 signals (e.g. pressure or temperature measurements, valve positions, etc.)")),s.a.createElement("p",null,"Source : ",s.a.createElement("a",{href:"https://www.nasa.gov/feature/facts-and-figures",target:"_blank",color:"#F8B5EE"},"https://www.nasa.gov/feature/facts-and-figures")))),s.a.createElement("div",{className:"links-wrapper-div"},s.a.createElement("a",{className:"who-iss",href:"https://www.nasa.gov/mission_pages/station/expeditions/index.html",target:"_blank"},s.a.createElement("span",null,"People on ISS right now ")),s.a.createElement("a",{className:"astro-bios",href:"https://www.nasa.gov/astronauts",target:"_blank"},s.a.createElement("span",null,"Astronaut Biographies ")),s.a.createElement("a",{className:"iss-news",href:"https://www.nasa.gov/mission_pages/station/main/index.html",target:"_blank"},s.a.createElement("span",null,"Latest ISS News "))))},g=t(11),w=t.n(g),N=t(24),y=t(14),k=(t(35),t(25)),b=function(){var e=Object(n.useState)(!1),a=Object(y.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)({}),l=Object(y.a)(r,2),o=l[0],i=l[1];function c(){return(c=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=SQN2WmYfw1ZNBsrUoBaAlRlDtdhJHdUo3K041TC6&page=1");case 2:e.sent.json().then((function(e){return i(e)})).catch((function(e){return t(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]);var m=Object.values(o);return s.a.createElement("div",{className:"display-photos"},s.a.createElement("div",{className:"mars-pic-descrip"},s.a.createElement("h2",null,"Today's Images from Mars")),s.a.createElement(k.Carousel,null,o?m.map((function(e,a){return console.log(e),e.map((function(e){return console.log(e),s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:"rover-name"},"Rover: ",e.rover.name),s.a.createElement("h3",{className:"camera-name"}," Camera: ",e.camera.full_name," "),s.a.createElement("img",{className:"mars-photos",width:"100%",src:e.img_src,alt:"mars-photos-here",key:a}))}))})):s.a.createElement("div",{id:"nodata"}," Oops...no photos to display right now !")))},S=function(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"appDiv"},s.a.createElement(v,null),s.a.createElement("div",{className:"navBar"},s.a.createElement("nav",{role:"navigation",className:"navLinks"},s.a.createElement(o.b,{to:"/",activeClassName:"active",className:"nav-item",activeStyle:{color:"violet"},exact:!0,"data-page":"home"},s.a.createElement("span",{className:"iconrocket"}),"Home"),s.a.createElement(o.b,{to:"/iss",activeClassName:"active",className:"nav-item",activeStyle:{color:"violet"},exact:!0,"data-page":"iss"},s.a.createElement("span",{className:"iconrocket"}),"Where is ISS"),s.a.createElement(o.b,{to:"/mars",activeClassName:"active",className:"nav-item",activeStyle:{color:"violet"},exact:!0,"data-page":"mars"},s.a.createElement("span",{className:"iconrocket"}),"Mars Photos"))),s.a.createElement(i.c,null,s.a.createElement(i.a,{exact:!0,path:"/",component:d}),s.a.createElement(i.a,{exact:!0,path:"/iss",component:E}),s.a.createElement(i.a,{exact:!0,path:"/mars",component:b}))),s.a.createElement(f,{className:"footerDiv"}))};l.a.render(s.a.createElement(S,null),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e136a1d0.chunk.js.map