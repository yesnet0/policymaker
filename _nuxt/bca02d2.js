(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{619:function(e,t,l){"use strict";l.r(t);var n=l(0),o=l(99),r=l.n(o),c=n.a.extend({name:"FieldDropdown",props:{options:{type:Object}},data:function(){return{localValue:""}},mounted:function(){this.localValue=this.options.value},computed:{hasValue:function(){return!r()(this.localValue)}},methods:{},watch:{localValue:function(e,t){this.$emit("input",this.localValue)}}}),d=l(48),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"field"},[l("div",{staticClass:"label-container"},[l("label",[e._v(e._s(e.options.label))]),e._v(" "),e.options.required?l("div",{staticClass:"required",class:{ok:e.hasValue}},[e._v("Required")]):e._e()]),e._v(" "),l("select",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],attrs:{required:""},on:{change:function(t){var l=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.localValue=t.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"",disabled:"",selected:"",hidden:""}},[e._v(e._s(e.options.placeholder))]),e._v(" "),e._l(e.options.options,(function(option){return l("option",{key:option.value},[e._v(e._s(option.label))])}))],2)])}),[],!1,null,null,null);t.default=component.exports}}]);