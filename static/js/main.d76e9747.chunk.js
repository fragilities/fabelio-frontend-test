(this["webpackJsonpfabelio-frontend-test"]=this["webpackJsonpfabelio-frontend-test"]||[]).push([[0],{10:function(e,t){e.exports={intersectingStyle:function(e,t){return e.filter((function(e){return t.includes(e)})).length>0},intersectingDeliveryTime:function(e,t){console.log({deliveryTime:e,deliveryTimeFilter:t}),t.indexOf("Lebih dari 30");var r=t.filter((function(t){return"Lebih dari 30"==t?+e>=+t:+e<=+t}));return console.log({intersection:r}),r.length>0}}},15:function(e,t,r){e.exports=r(29)},20:function(e,t,r){},21:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(5),i=r.n(l),c=(r(20),r(21),r(1));function o(e){var t=Object(c.b)();return a.a.createElement("input",{type:"text",className:"bg-transparent w-5/12 border-b border-white text-white placeholder-white text-xl font-bold outline-none",placeholder:"Search Furniture",onChange:function(e){return t({type:"SET_SEARCHSTRING",payload:{searchString:e.target.value}})}})}var s=r(14);function u(e){var t=Object(c.b)(),r="deliveryTime"==e.filterType,n=r&&e.labelName.toString().includes("Lebih")?"".concat(e.labelName," hari"):"Dalam ".concat(e.labelName," hari");return a.a.createElement("div",{className:"flex justify-between items-center px-3 py-1 text-gray-700"},a.a.createElement("label",{htmlFor:e.id},r?n:e.labelName),a.a.createElement("input",{type:"checkbox",id:e.id,onChange:function(r){"style"==e.filterType?r.target.checked?t({type:"SET_STYLEFILTER",payload:{styleFilter:r.target.id}}):t(function(e){return{type:"REMOVE_STYLEFILTER",payload:{styleFilter:e}}}(r.target.id)):"deliveryTime"==e.filterType&&(r.target.checked?t({type:"SET_DELIVERYTIMEFILTER",payload:{deliveryTimeFilter:r.target.id}}):t(function(e){return{type:"REMOVE_DELIVERYTIMEFILTER",payload:{deliveryTimeFilter:e}}}(r.target.id)))}}))}function d(e){var t=Object(n.useState)(!1),r=Object(s.a)(t,2),l=r[0],i=r[1];return a.a.createElement("div",{className:"h-8 bg-gray-200 w-5/12 relative text-gray-500",onClick:function(){return i(!l)}},a.a.createElement("span",{className:"px-3 inline-block pt-1"},e.filterLabel),a.a.createElement("div",{className:function(){var e="bg-gray-300 flex-col absolute w-full overflow-x-hidden overflow-y-auto";return l?"flex "+e:"hidden "+e}(),style:{top:"2rem",maxHeight:"6rem"}},e.filterData&&e.filterData.length>0?e.filterData.map((function(t){return a.a.createElement(u,{filterType:e.filterType,id:t,labelName:t,key:t})})):a.a.createElement("p",null,"No furniture style")))}function f(e){var t=Object(c.c)((function(e){return e.FurnitureReducer.styles}));return a.a.createElement("div",{className:"flex flex-col bg-blue-500 px-12 py-6"},a.a.createElement("div",{className:"flex items-center pb-6"},a.a.createElement(o,null)),a.a.createElement("div",{className:"flex items-center justify-between"},a.a.createElement(d,{filterType:"style",filterData:t,filterLabel:"Furniture style"}),a.a.createElement(d,{filterType:"deliveryTime",filterData:[7,14,30,"Lebih dari 30"],filterLabel:"Delivery Time"})))}var y=r(4),m=r(9),p=r.n(m),E=r(13),v=function(e){return{type:"SET_PRODUCTS",payload:{products:e}}};function b(e){var t=e.product.description.length>=114?e.product.description.slice(0,114)+"...":e.product.description;return a.a.createElement("div",{className:"flex flex-col w-5/12 shadow p-4 mb-6 rounded"},a.a.createElement("div",{className:"flex justify-between mb-2"},a.a.createElement("span",{className:"text-gray-800 font-bold"},e.product.name),a.a.createElement("span",{className:"text-gray-800"},"IDR ",e.product.price)),a.a.createElement("p",{className:"text-gray-700 mb-2"},t),a.a.createElement("div",{className:"flex items-center mb-2"},e.product.furniture_style&&e.product.furniture_style.length>0?e.product.furniture_style.map((function(e){return a.a.createElement("span",{key:e,className:"text-xs text-gray-800 bg-blue-200 rounded-full py-1 px-2 mr-1"},e)})):a.a.createElement("span",null,"Furniture style is not specified")),a.a.createElement("div",{className:"flex justify-end"},a.a.createElement("span",{className:"mr-1 text-sm text-gray-800"},"Delivery time:"),a.a.createElement("span",{className:"text-sm text-gray-800"},e.product.delivery_time," day(s)")))}var g=r(10);function h(e){var t=Object(c.b)(),r=Object(c.c)((function(e){return e.FurnitureReducer})),l=Object(c.c)((function(e){return e.FilterReducer})),i=function(){var e=Object(E.a)(p.a.mark((function e(){var r,n,a,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://www.mocky.io/v2/5c9105cb330000112b649af8");case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,a=n.furniture_styles,l=n.products,t({type:"SET_STYLES",payload:{styles:a}}),t(v(l)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]),Object(n.useEffect)((function(){if(r.products&&r.products.length>0){var e=Object(y.a)(r.products);l.searchString&&l.searchString.length>0&&(e=e.filter((function(e){return new RegExp(l.searchString,"i").test(e.name)}))),l.styleFilter&&l.styleFilter.length>0&&(e=e.filter((function(e){return Object(g.intersectingStyle)(e.furniture_style,l.styleFilter)}))),l.deliveryTimeFilter&&l.deliveryTimeFilter.length>0&&(e=e.filter((function(e){return Object(g.intersectingDeliveryTime)(e.delivery_time,l.deliveryTimeFilter)}))),t(function(e){return{type:"SET_FILTEREDPRODUCTS",payload:{filteredProducts:e}}}(e))}}),[l]);return r.products?a.a.createElement("div",{className:"flex justify-evenly overflow-y-visible flex-wrap py-4"},!r.filteredProducts||r.filteredProducts.length<1?r.products&&r.products.length>0?r.products.map((function(e){return a.a.createElement(b,{product:e,key:e.name})})):a.a.createElement("p",null,"No products"):r.filteredProducts&&r.filteredProducts.length>0?r.filteredProducts.map((function(e){return a.a.createElement(b,{product:e,key:e.name})})):a.a.createElement("p",null,"No products")):a.a.createElement("p",null,"Loading...")}var T=function(){return a.a.createElement("div",{className:"flex flex-col overflow-x-hidden overflow-y-visible min-h-screen bg-gray-200"},a.a.createElement(f,null),a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=r(3),F=r(2),S={styles:null,products:null,filteredProducts:null};var O={searchString:null,styleFilter:[],deliveryTimeFilter:[]};var w=Object(x.b)({FurnitureReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STYLES":return Object(F.a)({},e,{styles:t.payload.styles});case"SET_PRODUCTS":return Object(F.a)({},e,{products:t.payload.products});case"SET_FILTEREDPRODUCTS":return Object(F.a)({},e,{filteredProducts:t.payload.filteredProducts});default:return e}},FilterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCHSTRING":return Object(F.a)({},e,{searchString:t.payload.searchString});case"SET_STYLEFILTER":return Object(F.a)({},e,{styleFilter:[].concat(Object(y.a)(e.styleFilter),[t.payload.styleFilter])});case"REMOVE_STYLEFILTER":var r=e.styleFilter.indexOf(t.payload.styleFilter);return e.styleFilter.splice(r,1),Object(F.a)({},e);case"SET_DELIVERYTIMEFILTER":return Object(F.a)({},e,{deliveryTimeFilter:[].concat(Object(y.a)(e.deliveryTimeFilter),[t.payload.deliveryTimeFilter])});case"REMOVE_DELIVERYTIMEFILTER":var n=e.deliveryTimeFilter.indexOf(t.payload.deliveryTimeFilter);return e.deliveryTimeFilter.splice(n,1),Object(F.a)({},e);default:return e}}}),R=Object(x.c)(w);i.a.render(a.a.createElement(c.a,{store:R},a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d76e9747.chunk.js.map