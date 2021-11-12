(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1LhGR",box:"ImageGallery_box__3mtwE"}},17:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__gMEJ0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1DUTF"}},18:function(e,t,a){e.exports={Button:"Button_Button__1ERaL",box:"Button_box__2xzpa"}},19:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2C55B",Modal:"Modal_Modal__3MOlY"}},30:function(e,t,a){e.exports={box:"Loader_box__1Ae4k"}},36:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(36),a(4)),s=a(5),l=a(7),u=a(6),h=a(12),m=(a(37),a(9)),d=a.n(m),p=a(1),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={findImage:""},e.handleNameChange=function(t){e.setState({findImage:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.findImage.trim()?(e.props.onSubmit(e.state.findImage),e.setState({findImage:""})):h.b.error("Enter what to look for")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(p.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),b=a(20),f=a(15),j=a.n(f),O=a(29),v=a(16),x=a.n(v);x.a.defaults.baseURL="https://pixabay.com/api";var y="23504459-8998d3c986a45c76e9c9f5239",S=function(){var e=Object(O.a)(j.a.mark((function e(t){var a,n,r,o=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,e.next=4,x.a.get("/?q=".concat(t,"&page=").concat(a,"&key=").concat(y,"&image_type=photo&orientation=horizontal&per_page=12"));case 4:return n=e.sent,e.next=7,n.data;case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[1,11,14,16]])})));return function(t){return e.apply(this,arguments)}}(),_=a(17),I=a.n(_),w=function(e){var t=e.webformatURL,a=e.tags,n=e.onClick;return Object(p.jsx)("li",{className:I.a.ImageGalleryItem,onClick:n,children:Object(p.jsx)("img",{src:t,alt:a,className:I.a.ImageGalleryItemImage})})},k=a(18),L=a.n(k),C=function(e){var t=e.onLoad;return Object(p.jsx)("div",{className:L.a.box,children:Object(p.jsx)("button",{className:L.a.Button,type:"button",onClick:t,children:"Load more"})})},F=(a(58),a(30)),N=a.n(F),B=a(31),M=a.n(B),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{className:N.a.box,children:Object(p.jsx)(M.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),a}(n.Component),E=a(19),U=a.n(E),D=document.querySelector("#modal-root"),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:U.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:U.a.Modal,children:Object(p.jsx)("img",{src:this.props.image.largeImageURL,alt:this.props.image.tags})})}),D)}}]),a}(n.Component),A=R,T=a(13),K=a.n(T),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,isLoading:!1,imageIndex:null,showModal:!1},e.SmoothScrolling=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this,a=e.findImage,n=this.props.findImage;a!==n&&this.state.images.length>0&&this.setState({images:[]}),a===n&&e.page===this.props.page||(this.setState({isLoading:!0}),S(n,this.props.page).then((function(e){return t.setState((function(t){var a=t.images;return{images:[].concat(Object(b.a)(a),Object(b.a)(e.hits)),isLoading:!1}}))})).then((function(){1!==t.props.page&&t.SmoothScrolling()})).catch((function(e){return t.setState({error:e,isLoading:!1})})))}},{key:"handleClick",value:function(e){this.setState({imageIndex:e,showModal:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.error,r=t.isLoading,o=t.showModal,c=t.imageIndex;return r?Object(p.jsx)(G,{}):o?Object(p.jsx)(A,{onClose:this.toggleModal,image:a[c]}):n?Object(p.jsx)("div",{className:K.a.box,children:n.message}):0!==a.length||n?a.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:K.a.ImageGallery,children:a.map((function(t,a){return Object(p.jsx)(w,{webformatURL:t.webformatURL,type:t.type,onClick:function(){e.handleClick(a)}},t.id)}))}),Object(p.jsx)(C,{onLoad:this.props.onLoad})]}):void 0:Object(p.jsx)("div",{className:K.a.box,children:"Start your search"})}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={findImage:"",page:1,startScroll:!1},e.handleFormSubmit=function(t){e.setState({findImage:t,page:1})},e.onLoad=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.findImage;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(J,{findImage:e,onLoad:this.onLoad,page:this.state.page}),Object(p.jsx)(h.a,{})]})}}]),a}(n.Component),z=q;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3sW-5",SearchForm:"Searchbar_SearchForm__VGZhs",SearchFormButton:"Searchbar_SearchFormButton__bku8V",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2aTKy",SearchFormInput:"Searchbar_SearchFormInput__34HiQ"}}},[[79,1,2]]]);
//# sourceMappingURL=main.977d8cf1.chunk.js.map