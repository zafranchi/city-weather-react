(this["webpackJsonpcity-weather"]=this["webpackJsonpcity-weather"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(4),i=a(3),c=a(5),o=a(9),l=a(0),u=a.n(l),h=a(7),d=a.n(h);a(15),a(8),a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(o.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}function v(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(u.a.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history,a=t[t.length-1].squares.slice();m(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[a.length-1],n=m(r.squares);return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(f,{squares:r.squares,onClick:function(e){return t.handleClick(e)}})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,e),u.a.createElement("ol",null)))}}]),t}(u.a.Component);d.a.render(u.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.393c8a31.chunk.js.map