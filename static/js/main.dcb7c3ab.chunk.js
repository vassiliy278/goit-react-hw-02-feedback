(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){e.exports={wrapper:"App_wrapper__1zXq9",title:"App_title__2RHLh",button:"App_button__3hHH0",buttons_block:"App_buttons_block__2QS8T",stats:"App_stats__226CK"}},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),c=a(3),u=a(4),i=a(5),s=a(7),p=a(6);function m(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h1",null,t),r.a.createElement("div",null,a))}function d(e){var t=e.Good,a=e.Neutral,n=e.Bad,l=e.total,o=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t),r.a.createElement("p",null,a),r.a.createElement("p",null,n),r.a.createElement("p",null,"Total: ",l),r.a.createElement("p",null,"Positive: ",o,"%"))}a(13);function b(e){var t=e.onLeaveFeedback,a=e.options;return Object.keys(a).forEach((function(e){return r.a.createElement("button",{name:e,onClick:t},e)})),r.a.createElement(r.a.Fragment,null,Object.keys(a).map((function(e){return r.a.createElement("button",{type:"button",name:e,key:e,onClick:t},e)})))}var h=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t))},v=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Good:0,Neutral:0,Bad:0},e.handleChange=function(t){var a=t.target.name;e.setState((function(e){return Object(c.a)({},a,e[a]+1)}))},e.totalFeedbackCounter=function(){var t=e.state;return t.Good+t.Neutral+t.Bad},e.positivePercentageCounter=function(){var t=e.state.Good;if(e.totalFeedbackCounter())return Math.floor(t/e.totalFeedbackCounter()*100)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.Good,a=e.Neutral,n=e.Bad;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:"Please Leave Feedback"},r.a.createElement(b,{onLeaveFeedback:this.handleChange,options:this.state})),this.totalFeedbackCounter()?r.a.createElement(m,{title:"Feedback"},r.a.createElement(d,{Good:t,Neutral:a,Bad:n,total:this.totalFeedbackCounter(),positivePercentage:this.positivePercentageCounter()})):r.a.createElement(h,{message:"No feedback given"}))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.dcb7c3ab.chunk.js.map