"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[518],{355:function(t,e,n){n.d(e,{Hx:function(){return o},hd:function(){return i},uV:function(){return a},vw:function(){return s},wr:function(){return c}});var r=n(44);r.ZP.defaults.baseURL="https://api.themoviedb.org/";var u="438b209afcbf786d00b41cef323b2ca7",c=function(){return r.ZP.get("3/trending/movie/day?api_key=".concat(u)).then((function(t){return t.data.results}))},i=function(t){return r.ZP.get("3/movie/".concat(t,"?api_key=").concat(u)).then((function(t){return t.data}))},a=function(t){return r.ZP.get("3/movie/".concat(t,"/credits?api_key=").concat(u)).then((function(t){return t.data.cast}))},o=function(t){return r.ZP.get("3/movie/".concat(t,"/reviews?api_key=").concat(u)).then((function(t){return t.data.results}))},s=function(t){return r.ZP.get("3/search/movie?api_key=".concat(u,"&query=").concat(t)).then((function(t){return t.data.results}))}},518:function(t,e,n){n.r(e);var r=n(885),u=n(731),c=n(791),i=n(355),a=n(689),o=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],f=(0,u.lr)(),h=(0,r.Z)(f,2),l=h[0],d=h[1],v=l.get("query"),m=(0,a.TH)();return(0,c.useEffect)((function(){""!==v&&null!==v&&(0,i.vw)(v).then(s)}),[v]),(0,o.jsxs)("main",{children:[(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;d(""!==v?{query:e.elements.query.value}:{}),e.reset()},children:[(0,o.jsx)("input",{type:"text",name:"query"}),(0,o.jsx)("button",{type:"submit",children:"search"})]}),n.length>0&&(0,o.jsx)("ul",{children:n.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(u.OL,{to:"/movies/".concat(t.id),state:{from:m},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=518.94543d65.chunk.js.map