(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports=a(21)},17:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),u=a(7),o=a(1),l=a(2),c=a(4),p=a(3),h=a(5),d=(a(17),function(t,e,a,n){return function(t,e,a){return t*Math.pow(1+e/a,a)}(t,a,n)+function(t,e,a){var n=e/a;return t*((Math.pow(1+n,a)-1)/n)}(e,a,n)}),m=function(t){var e=0;return t<=18200?(e+=0,e+=0*(t-0)):t<=37e3?(e+=0,e+=.19*(t-18200)):t<=87e3?(e+=3572,e+=.325*(t-37e3)):t<=18e4?(e+=19822,e+=.37*(t-87e3)):(e+=54232,e+=.45*(t-18e4)),e},b=a(10),f=a.n(b),g=a(6),v=a.n(g),I=function(t){function e(){return Object(o.a)(this,e),Object(c.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentWillUpdate",value:function(t){this.chart.config.data.labels=t.labels,this.chart.config.data.datasets=this.calculateDataSet(t.data),this.chart.update()}},{key:"componentDidMount",value:function(){this.chart=new f.a(this.canvas,{type:"bar",data:{labels:this.props.labels,datasets:this.calculateDataSet(this.props.data)},options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0,ticks:{callback:function(t){return v()(t).format("$0a")}}}]},tooltips:{callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a&&(a+=": "),a+=v()(t.yLabel).format("$0a"),a}}}}})}},{key:"calculateDataSet",value:function(t){return[{type:"bar",data:t.initialDeposit,label:"Initial Deposit",backgroundColor:"rgba(132,5,97,0.2)",borderColor:"rgba(132,5,97,1)",borderWidth:1},{type:"bar",data:t.regularDeposits,label:"Regular Deposits",backgroundColor:"rgba(201, 79, 167, 0.2)",borderColor:"rgba(201, 79, 167, 1)",borderWidth:1},{type:"bar",data:t.totalInterest,label:"Total Interest",backgroundColor:"rgba(221, 123, 194, 0.2)",borderColor:"rgba(221, 123, 194, 1)",borderWidth:1},{type:"bar",data:t.capitalGainsTax,label:"Tax",backgroundColor:"rgba(194,200,212,0.2)",borderColor:"rgba(194,200,212,1)",borderWidth:1}]}},{key:"render",value:function(){var t=this;return r.a.createElement("canvas",{ref:function(e){return t.canvas=e}})}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).toggleInputFocus=function(t){a.setState({focused:t})},a.onBlur=function(){a.toggleInputFocus(!1),a.props.inputValue!==a.state.inputValue&&a.props.onUpdate(a.state.inputValue)},a.onFocus=function(){a.toggleInputFocus(!0)},a.handleFormChange=function(t){a.setState({inputValue:t.target.value})},a.state={focused:!1,inputValue:t.inputValue},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:this.props.id},this.props.label),r.a.createElement("input",{id:this.props.id,type:this.state.focused?"number":"text",name:this.props.name,min:"0",value:this.state.focused?this.state.inputValue:v()(this.state.inputValue).format("$0,0"),onChange:this.handleFormChange,onBlur:this.onBlur,onFocus:this.onFocus}))}}]),e}(n.Component),y=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).toggleInputFocus=function(t){a.setState({focused:t})},a.onBlur=function(){a.toggleInputFocus(!1),a.props.inputValue!==a.state.inputValue&&a.props.onUpdate(a.state.inputValue)},a.onFocus=function(){a.toggleInputFocus(!0)},a.handleFormChange=function(t){a.setState({inputValue:t.target.value})},a.state={focused:!1,inputValue:t.inputValue},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:this.props.id},this.props.label),r.a.createElement("input",{id:this.props.id,step:"0.01",type:this.state.focused?"number":"text",name:this.props.name,min:"0",value:this.state.focused?this.state.inputValue:v()(this.state.inputValue).format("0,0.00%"),onChange:this.handleFormChange,onBlur:this.onBlur,onFocus:this.onFocus}))}}]),e}(n.Component),D=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).toggleInputFocus=function(t){a.setState({focused:t})},a.onBlur=function(){a.toggleInputFocus(!1),a.props.inputValue!==a.state.inputValue&&a.props.onUpdate(a.state.inputValue)},a.onFocus=function(){a.toggleInputFocus(!0)},a.handleFormChange=function(t){a.setState({inputValue:t.target.value})},a.state={focused:!1,inputValue:t.inputValue},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:this.props.id},this.props.label),r.a.createElement("input",{id:this.props.id,type:this.state.focused?"number":"text",name:this.props.name,min:"1",max:"60",value:this.state.focused?this.state.inputValue:"".concat(this.state.inputValue," year").concat("1"!==this.state.inputValue?"s":""),onChange:this.handleFormChange,onBlur:this.onBlur,onFocus:this.onFocus}))}}]),e}(n.Component),V=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(p.a)(e).call(this,t))).handleFormChange=function(t){var e=t.target.value;switch(t.target.name){case"numberOfYears":e<0?e=0:e>60&&(e=60);break;default:e=t.target.value}a.setState(Object(u.a)({},t.target.name,e))},a.updateInitialDeposit=function(t){a.setState({initialDeposit:t})},a.updateRegularDeposit=function(t){a.setState({regularDeposit:t})},a.updateAnnualIncome=function(t){a.setState({annualIncome:t})},a.updateInterestRate=function(t){a.setState({interestRate:t})},a.updateNumberOfYears=function(t){a.setState({numberOfYears:t})},a.handleToggle=function(t){a.setState(Object(u.a)({},t.target.name,!a.state[t.target.name]))},a.calculateCapitalGainsTax=function(t,e){return m(e+t)-m(e)},a.state={initialDeposit:100,regularDeposit:0,numberOfYears:5,interestRate:.03,applyTax:!0,annualIncome:6e4},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"getYearlyInterest",value:function(){for(var t=[],e=this.state.initialDeposit,a=0,n=0,r=1;r<=this.state.numberOfYears;r++){n+=12*this.state.regularDeposit;var s=d(e,this.state.regularDeposit,this.state.interestRate,12),i=s-e-12*this.state.regularDeposit;a+=i,e=s;var u=0;this.state.applyTax&&(u=this.calculateCapitalGainsTax(i,+this.state.annualIncome)),e-=u,a-=u,t=t.concat({name:"Year ".concat(r),principal:Math.round(e),regularDeposits:n,capitalGainsTax:Math.round(u),totalInterest:Math.round(a)})}return t}},{key:"render",value:function(){var t=this,e={initialDeposit:this.getYearlyInterest().map(function(e){return t.state.initialDeposit}),regularDeposits:this.getYearlyInterest().map(function(t){return t.regularDeposits}),totalInterest:this.getYearlyInterest().map(function(t){return t.totalInterest}),capitalGainsTax:this.getYearlyInterest().map(function(t){return t.capitalGainsTax})};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"pure-g"},r.a.createElement("div",{className:"sidebar pure-u-1 pure-u-md-1-5"},r.a.createElement("h2",null,"Your Strategy"),r.a.createElement(O,{id:"initialDeposit",label:"Initial Deposit",name:"initialDeposit",inputValue:this.state.initialDeposit,onUpdate:this.updateInitialDeposit}),r.a.createElement(O,{id:"regularDeposit",label:"Regular Deposit (Per Month)",name:"regularDeposit",inputValue:this.state.regularDeposit,onUpdate:this.updateRegularDeposit}),r.a.createElement(D,{id:"numberOfYears",label:"Number of Years (Max. 60)",name:"numberOfYears",inputValue:this.state.numberOfYears,onUpdate:this.updateNumberOfYears}),r.a.createElement(y,{id:"interestRate",label:"Interest Rate",name:"interestRate",inputValue:this.state.interestRate,onUpdate:this.updateInterestRate}),r.a.createElement("h2",null,"Taxes"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Apply Tax"),r.a.createElement("input",{type:"checkbox",name:"applyTax",checked:this.state.applyTax,onChange:this.handleToggle})),r.a.createElement(O,{id:"annualIncome",label:"Annual Income",name:"annualIncome",inputValue:this.state.annualIncome,onUpdate:this.updateAnnualIncome})),r.a.createElement("div",{className:"content pure-u-1 pure-u-md-4-5"},r.a.createElement("h2",null,"Results"),r.a.createElement(I,{labels:this.getYearlyInterest().map(function(t){return t.name}),data:e}))))}}]),e}(n.Component);a(20);i.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4cb33751.chunk.js.map