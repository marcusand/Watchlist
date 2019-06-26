// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32472__delegate = function (x__32456__auto__){
if(cljs.core.truth_(frontend.core.mount_root)){
return cljs.core.apply.call(null,frontend.core.mount_root,x__32456__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","frontend.core/mount-root","' is missing"].join(''));
}
};
var G__32472 = function (var_args){
var x__32456__auto__ = null;
if (arguments.length > 0) {
var G__32473__i = 0, G__32473__a = new Array(arguments.length -  0);
while (G__32473__i < G__32473__a.length) {G__32473__a[G__32473__i] = arguments[G__32473__i + 0]; ++G__32473__i;}
  x__32456__auto__ = new cljs.core.IndexedSeq(G__32473__a,0,null);
} 
return G__32472__delegate.call(this,x__32456__auto__);};
G__32472.cljs$lang$maxFixedArity = 0;
G__32472.cljs$lang$applyTo = (function (arglist__32474){
var x__32456__auto__ = cljs.core.seq(arglist__32474);
return G__32472__delegate(x__32456__auto__);
});
G__32472.cljs$core$IFn$_invoke$arity$variadic = G__32472__delegate;
return G__32472;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1561537547738
