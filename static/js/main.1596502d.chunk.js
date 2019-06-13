(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=(n(81),n(50)),l=n(4),u=n(52),s=n(1),m=n(10),_=n(14),p=n(11),f=n(12),d=n(21),v=n(18),E=n(22),h=n(53),b="university.RESET",g=n(16),y=n(54),S=n.n(y),O=function(e){return e.map(function(e){return Object(g.a)({},e,{id:S.a.generate()})})},w=function(e){return{type:"university.SET_FETCHING",payload:e}},j=function(e){return{type:"university.REMOVE_SELECT_ITEM",payload:e}},T=n(33),C=n.n(T),x=function(e){var t=e.type,n=void 0===t?"button":t,a=e.onClick,c=void 0===a?function(){return null}:a,i=e.children,o=e.theme,l=void 0!==o&&o,u=e.style,s=[l?C.a.btnText:C.a.btn,u];return r.a.createElement("button",{type:n,onClick:c,className:s.join(" ")},i)},A=n(55),R=n.n(A),I=function(e){var t=e.type,n=void 0===t?"button":t,a=e.value,c=void 0===a?"":a,i=e.onChange,o=void 0===i?function(){return null}:i,l=(e.children,e.placeholder),u=void 0===l?"":l;return r.a.createElement("input",{type:n,onChange:o,className:R.a.input,placeholder:u,value:c})},k=n(56),N=n.n(k),D=function(e){var t=e.search,n=e.onChange,a=e.onSubmit,c=e.onReset;return r.a.createElement("form",{onSubmit:a,className:N.a.form},r.a.createElement(I,{type:"text",value:t,onChange:n,placeholder:"Enter country"}),r.a.createElement(x,{type:"submit"},"Search"),r.a.createElement(x,{onClick:c,theme:!0},"Reset"))},M=n(23),L=function(e){return e.search},H=function(e){return e.universityData.university.items},P=function(e){return e.universityData.university.isFetching},F=function(e){return e.universityData.selectedItems},B=function(e){return e.pagination.count},G=Object(M.a)([H],function(e){return e.length}),U=Object(M.a)([F],function(e){return e.length}),J=Object(M.a)([F,function(e,t){return t}],function(e,t){return e.some(function(e){return e===t})}),V=Object(M.a)([H,B,function(e,t){return t}],function(e,t,n){var a=t*n,r=a-t;return e.filter(function(e,t){return t>=r&&t<a})}),X=Object(M.a)([H,F],function(e,t){return e.filter(function(e){return t.some(function(t){return t===e.id})})}),W=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handelSubmit=function(e){e.preventDefault();var t=n.props,a=t.search;(0,t.fetchData)(a)},n.handleChange=function(e){(0,n.props.setSearch)(e.target.value)},n.handleReset=function(){var e=n.props,t=e.reset,a=e.history;t(),a.replace("/")},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.search;return r.a.createElement(D,Object.assign({onChange:this.handleChange,onSubmit:this.handelSubmit,onReset:this.handleReset,search:e},this.props))}}]),t}(r.a.Component),q={setSearch:function(e){return{type:"university.CHANGE_SEARCH",payload:e}},fetchData:function(e){return function(t){t(w(!0)),t({type:"university.SET_SELECT_ITEMS",payload:[]}),h.get(function(e){return"http://universities.hipolabs.com/search?country=".concat(e)}(e)).then(function(e){t({type:"university.SET_ITEMS",payload:O(e.data)})}).catch(function(e){return t({type:"university.ERROR",payload:e.message})}).finally(function(){return t(w(!1))})}},reset:function(){return{type:b}}},Q=Object(l.compose)(Object(s.b)(function(e){return{search:L(e)}},q),_.e)(W),Y=n(148),z=n(147),Z=n(36),K=n.n(Z),$=function(e){return r.a.createElement(K.a,Object.assign({},e,{minWidth:992}))},ee=function(e){return r.a.createElement(K.a,Object.assign({},e,{maxWidth:991}))},te=n(58),ne=n.n(te),ae=n(59),re=n.n(ae),ce=function(e){var t=e.children;return r.a.createElement("th",{className:re.a.cell},t)},ie=function(e){var t=e.headers;return r.a.createElement("thead",{className:ne.a.header},r.a.createElement($,null,r.a.createElement("tr",null,t.map(function(e){return r.a.createElement(ce,{key:e},e)}))),r.a.createElement(ee,null,r.a.createElement("tr",null,r.a.createElement(ce,null,t[0]),r.a.createElement(ce,null,t[1]),r.a.createElement(ce,null))))},oe=n(28),le=n(37),ue=n.n(le),se=function(e){var t=e.onClick,n=e.isSelectRow,a=e.children;return r.a.createElement("tr",{onClick:t,className:n?ue.a.rowSelect:ue.a.row},a)},me=n(60),_e=n.n(me),pe=function(e){var t=e.children,n=e.alignText,a=e.colSpan;return r.a.createElement("td",{className:_e.a.cell,colSpan:a,style:{textAlign:n}},t)},fe=function(e){var t=e.item,n=e.number,a=e.selectItem,c=e.isSelectRow,i=t.name,o=t.domains,l=t.country,u=t.alpha_two_code,s=t.web_pages;return r.a.createElement(se,{onClick:a,isSelectRow:c},r.a.createElement(pe,null,n),r.a.createElement(pe,{alignText:"left"},i),r.a.createElement(pe,null,o),r.a.createElement(pe,null,l),r.a.createElement(pe,null,u),r.a.createElement(pe,{alignText:"left"},r.a.createElement("a",{href:s},s)))},de=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isToggle:!1},n.handleToggle=function(){return n.setState(function(e){return{isToggle:!e.isToggle}})},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state.isToggle;return(0,this.props.children)({isToggle:e,toggle:this.handleToggle})}}]),t}(r.a.Component),ve=n(61),Ee=n.n(ve),he=n(62),be=n.n(he),ge=function(e){var t=e.domains,n=e.country,a=e.webPages;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Domains: ")," ",t),r.a.createElement("p",null,r.a.createElement("strong",null,"Country: ")," ",n),r.a.createElement("p",null,r.a.createElement("strong",null,"Site: ")," ",r.a.createElement("a",{href:a},a)))},ye=function(e){var t=e.item,n=e.number,a=e.selectItem,c=e.isSelectRow,i=t.name,o=Object(oe.a)(t,["name"]);return r.a.createElement(de,null,function(e){var t=e.isToggle,l=e.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{onClick:a,isSelectRow:c},r.a.createElement(pe,null,n),r.a.createElement(pe,null,i),r.a.createElement(pe,null,r.a.createElement(x,{onClick:function(e){e.stopPropagation(),l()},theme:!0,style:Ee.a.styleForBtn},"Show"))),r.a.createElement(z.a,{in:t,timeout:300,classNames:be.a,unmountOnExit:!0},r.a.createElement("tr",null,r.a.createElement(pe,{colSpan:"3"},r.a.createElement(ge,o)))))})},Se=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement(fe,e)),r.a.createElement(ee,null,r.a.createElement(ye,e)))},Oe=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){var e=n.props,t=e.addSelectItem,a=e.removeSelectItem,r=e.isSelectRow,c=e.item;r?a(c.id):t(c.id)},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.addSelectItem,e.removeSelectItem,Object(oe.a)(e,["addSelectItem","removeSelectItem"]));return r.a.createElement(Se,Object.assign({},t,{selectItem:this.handleClick}))}}]),t}(r.a.Component),we={addSelectItem:function(e){return{type:"university.ADD_SELECT_ITEM",payload:e}},removeSelectItem:j},je=Object(s.b)(function(e,t){return{isSelectRow:J(e,t.item.id)}},we)(Oe),Te=n(65),Ce=n.n(Te),xe=n(66),Ae=n.n(xe),Re=function(e){var t=e.items,n=e.startNumber;return r.a.createElement("table",{className:Ce.a.table},r.a.createElement(ie,{headers:["#","Name","Domains","Country","ISO CODE","Site"]}),r.a.createElement(Y.a,{component:"tbody"},t.map(function(e,t){return r.a.createElement(z.a,{key:e.id,timeout:300,classNames:Ae.a},r.a.createElement(je,{number:n+t+1,item:e}))})))},Ie=n(67),ke=n.n(Ie),Ne=function(e){var t=e.location;return ke.a.parse(t.search).page},De=Object(l.compose)(_.e,Object(s.b)(function(e,t){var n=Ne(t)||1;return{items:V(e,n),startNumber:(n-1)*B(e)}}))(Re),Me=n(38),Le=n.n(Me),He={changeCount:function(e){return{type:"university.CHANGE_COUNT_ITEMS",payload:e}}},Pe=Object(l.compose)(Object(s.b)(function(e){return{currentCount:B(e)}},He),_.e)(function(e){var t=e.currentCount,n=e.changeCount,a=e.options,c=e.history;return r.a.createElement("div",null,a.map(function(e){return r.a.createElement("button",{key:e,type:"button",onClick:function(){return n(e),void c.replace("/?page=1")},className:t===e?Le.a.btnActive:Le.a.btn},e)}))}),Fe=n(68),Be=n.n(Fe),Ge=Object(s.b)(function(e){return{selected:U(e),length:G(e)}})(function(e){var t=e.selected,n=e.length;return r.a.createElement("div",{className:Be.a.con},r.a.createElement("p",null,"Selected university: ",t," / ",n),r.a.createElement(Pe,{options:[5,10,15]}))}),Ue=n(69),Je=n.n(Ue),Ve=n(24),Xe=n.n(Ve),We=function(e){var t=e.count,n=e.length,a=e.currentPage;a=+a;var c=function(e,t,n){var a=t-n-1>1,r=t+n+1<e,c=[],i=0,o=0;t-n<=0&&(i=Math.abs(t-n-1)),t+n>=e&&(o=Math.abs(e-t-n));for(var l=t-n-o;l<=t+n+i;l+=1)l>=1&&l<=e&&c.push(l);return{isStart:a,isEnd:r,pages:c}}(Math.ceil(n/t),a,2).pages;return r.a.createElement("div",{className:Xe.a.con},c.map(function(e){return a!==e?r.a.createElement(m.b,{key:e,to:{path:"/",search:"?page=".concat(e)},className:Xe.a.link,activeClassName:Xe.a.activeLink},e):r.a.createElement("span",{key:e,className:[Xe.a.activeLink,Xe.a.link].join(" ")},a)}))},qe=Object(l.compose)(_.e,Object(s.b)(function(e,t){return{count:B(e),length:G(e),currentPage:Ne(t)||1}}))(We),Qe=n(39),Ye=n.n(Qe),ze=function(e){var t=e.name,n=e.id,a=e.onRemove;return r.a.createElement("div",{className:Ye.a.item},t,r.a.createElement("button",{type:"button",onClick:function(){return a(n)},className:Ye.a.btn},"x")," ")},Ze=n(70),Ke=n.n(Ze),$e=n(71),et=n.n($e),tt={removeItem:j},nt=Object(s.b)(function(e){return{items:X(e)}},tt)(function(e){var t=e.items,n=e.removeItem;return r.a.createElement(Y.a,{className:Ke.a.container},t.map(function(e){return r.a.createElement(z.a,{key:e.id,timeout:500,classNames:et.a},r.a.createElement(ze,{name:e.name,id:e.id,onRemove:n}))}))}),at=n(72),rt=n.n(at),ct=n(73),it=n.n(ct),ot=function(){return r.a.createElement("div",{className:it.a.container},r.a.createElement(rt.a,{type:"Oval",color:"black",height:40,width:40}))},lt=Object(s.b)(function(e){return{length:G(e),isLoading:P(e)}})(function(e){var t=e.length,n=e.isLoading;return r.a.createElement("div",{style:{margin:"0 10px"}},r.a.createElement(Q,null),n&&r.a.createElement(ot,null),t>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(Ge,null),r.a.createElement(De,null),r.a.createElement(qe,null)):r.a.createElement("p",{className:Je.a.text},"No found items"))}),ut=n(74),st={isFetching:!1,error:null,items:[]},mt=Object(l.combineReducers)({university:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"university.SET_FETCHING":return Object(g.a)({},e,{isFetching:t.payload});case"university.ERROR":return Object(g.a)({},e,{error:t.payload});case"university.SET_ITEMS":return Object(g.a)({},e,{items:t.payload});case b:return st;default:return e}},selectedItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"university.ADD_SELECT_ITEM":return[].concat(Object(ut.a)(e),[t.payload]);case"university.REMOVE_SELECT_ITEM":return e.filter(function(e){return e!==t.payload});case"university.SET_SELECT_ITEMS":return t.payload;case b:return[];default:return e}}}),_t=Object(l.combineReducers)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ukraine",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"university.CHANGE_SEARCH":return t.payload;case b:return"";default:return e}},universityData:mt,pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:5},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"university.CHANGE_COUNT_ITEMS":return Object(g.a)({},e,{count:t.payload});default:return e}}}),pt=function(){function e(){Object(p.a)(this,e)}return Object(f.a)(e,null,[{key:"save",value:function(e){window.localStorage.setItem(this.nameStorage,JSON.stringify(e.getState()))}},{key:"load",value:function(){return JSON.parse(window.localStorage.getItem(this.nameStorage)||"{}")}}]),e}();pt.nameStorage="university";var ft=pt;document.addEventListener("DOMContentLoaded",function(){var e=ft.load(),t=[u.a],n=l.applyMiddleware.apply(void 0,t),a=Object(l.createStore)(_t,e,Object(o.composeWithDevTools)(n));window.onbeforeunload=function(){ft.save(a)},i.a.render(r.a.createElement(s.a,{store:a},r.a.createElement(m.a,null,r.a.createElement(_.a,{path:"/",component:lt}))),document.getElementById("root"))})},24:function(e,t,n){e.exports={link:"Pagination_link__oUmMn",activeLink:"Pagination_activeLink__2QpPq",activePage:"Pagination_activePage__1R6rg",con:"Pagination_con__384s7",spreadEnd:"Pagination_spreadEnd__3tqoi"}},33:function(e,t,n){e.exports={btn:"Button_btn__btOuM",btnText:"Button_btnText__3_DhH Button_btn__btOuM"}},37:function(e,t,n){e.exports={row:"Row_row__1DDvU",rowSelect:"Row_rowSelect__3HBI3 Row_row__1DDvU"}},38:function(e,t,n){e.exports={btn:"CountItems_btn__3XMn7",btnActive:"CountItems_btnActive__3lDgs CountItems_btn__3XMn7"}},39:function(e,t,n){e.exports={item:"SelectedItem_item__1Bbv4",btn:"SelectedItem_btn__3-42S"}},55:function(e,t,n){e.exports={input:"Input_input__2UQT6"}},56:function(e,t,n){e.exports={form:"FormSearch_form__1uXpc"}},58:function(e,t,n){e.exports={header:"THead_header__26GmL",row:"THead_row__1xBmQ"}},59:function(e,t,n){e.exports={cell:"HeadCell_cell__2m3xk"}},60:function(e,t,n){e.exports={cell:"Cell_cell__1EPBp"}},61:function(e,t,n){e.exports={styleForBtn:"RowItem_styleForBtn__vAeMH"}},62:function(e,t,n){e.exports={enter:"AnimatinRowDesc_enter__2idOb",enterActive:"AnimatinRowDesc_enterActive__1DZPO",enterDone:"AnimatinRowDesc_enterDone__2yt0T",exit:"AnimatinRowDesc_exit__2Xose",exitActive:"AnimatinRowDesc_exitActive__i5EAu"}},65:function(e,t,n){e.exports={table:"Table_table__1UrEW"}},66:function(e,t,n){e.exports={enter:"AnimationTable_enter__3RYCZ",enterActive:"AnimationTable_enterActive__257GJ",enterDone:"AnimationTable_enterDone__Gx0Oz",exit:"AnimationTable_exit__SqVmj",exitActive:"AnimationTable_exitActive__TAaKN"}},68:function(e,t,n){e.exports={con:"Status_con__2ilMF"}},69:function(e,t,n){e.exports={text:"App_text__iTG5J"}},70:function(e,t,n){e.exports={container:"SelectedItems_container__uDE22"}},71:function(e,t,n){e.exports={enter:"AnimationSelecetedRow_enter__1Vjuk",enterActive:"AnimationSelecetedRow_enterActive__3zYL1",enterDone:"AnimationSelecetedRow_enterDone__20X6a",exit:"AnimationSelecetedRow_exit__2wagD",exitActive:"AnimationSelecetedRow_exitActive__340eV"}},73:function(e,t,n){e.exports={container:"Loader_container__2YAik"}},76:function(e,t,n){e.exports=n(146)},81:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.1596502d.chunk.js.map