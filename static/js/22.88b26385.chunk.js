(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{650:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(651);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],l=!0,n=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(l=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);l=!0);}catch(d){n=!0,r=d}finally{try{l||null==c.return||c.return()}finally{if(n)throw r}}return a}}(e,t)||Object(l.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},651:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var l=a(653);function n(e,t){if(e){if("string"===typeof e)return Object(l.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(l.a)(e,t):void 0}}},653:function(e,t,a){"use strict";function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}a.d(t,"a",(function(){return l}))},655:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(653);var n=a(651);function r(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},656:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c}));var l=[{key:"no",_style:{width:"3%"},label:"No"},{key:"noaju",_style:{width:"20%"},label:"Nomor AJU"},{key:"tglaju",_style:{width:"10%"},label:"Tanggal AJU"},{key:"periode",_style:{width:"10%"},label:"Periode"},{key:"status",_style:{width:"20%"},label:"Status"},{key:"action",_style:{width:"15%"},label:"Aksi"}],n=[{key:"no",_style:{width:"3%"},label:"No"},{key:"title",_style:{width:"25%"},label:"Title"},{key:"issuingauthority",label:"Issuing Authority"},{key:"dateofissue",label:"Date of Issue"},{key:"dateofexpiry",label:"Date of Expiry"},{key:"action",_style:{width:"10%"},label:"Aksi",filter:!1}],r=[{key:"no",_style:{width:"3%"},label:"No"},{key:"date",_style:{width:"25%"},label:"Date"},{key:"surveyingauthority",label:"Surveying Authority"},{key:"place",label:"Place"},{key:"action",_style:{width:"10%"},label:"Aksi",filter:!1}],i=[{key:"no",_style:{width:"3%"},label:"No"},{key:"code",_style:{width:"10%"},label:"Code"},{key:"nature",_style:{width:"20%"},label:"Nature of Deficiency"},{key:"convention",_style:{width:"15%"},label:"Convention Reference"},{key:"action",_style:{width:"10%"},label:"Action Taken"},{key:"responsible",_style:{width:"15%"},label:"Responsible RO"},{key:"RP",_style:{width:"3%"},label:"RP"},{key:"aksi",_style:{width:"10%"},label:"Aksi"}],c=[{key:"no",_style:{width:"3%"},label:"No"},{key:"subdeficiencies",_style:{width:"35%"},label:"Subdeficiencies"},{key:"status",_style:{width:"25%"},label:"Status"},{key:"komentargovt",_style:{width:"10%"},label:"Komentar Pemerintah"},{key:"komentarro",_style:{width:"10%"},label:"Komentar RO"},{key:"action",_style:{width:"15%"},label:"Action"}]},752:function(e,t,a){"use strict";a.r(t);var l=a(655),n=a(650),r=a(1),i=a.n(r),c=a(125),d=a(58),s=a(656);t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),m=a[0],o=a[1],u=Object(r.useState)([{id:1,noaju:"4000077EEF8F61512202100001",tglaju:"",periode:"2021",status:"Draft"},{id:2,noaju:"4000088AAF5461512202000002",tglaju:"05/03/2020",periode:"2020",status:"Proses di Kemenperin"},{id:3,noaju:"400007799F8F61513201900001",tglaju:"21/03/2019",periode:"2019",status:"Penerbitan LHV"},{id:4,noaju:"400007799G9G41514201900003",tglaju:"10/03/2019",periode:"2019",status:"Penolakan Kemenperin"},{id:5,noaju:"4000099OOF8K61512201800001",tglaju:"15/03/2018",periode:"2018",status:"Penerbitan LHV"}]),y=Object(n.a)(u,2),E=y[0],h=(y[1],Object(r.useState)([])),w=Object(n.a)(h,2),b=w[0],f=w[1];return Object(r.useEffect)((function(){"ya"==m&&e.history.push("/RKI/form")})),i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{color:"warning",closeButton:!0},i.a.createElement("h6",null,"Simulasi User Pelaku Usaha")),i.a.createElement(c.j,null,i.a.createElement(c.n,null,i.a.createElement("h4",null,"Histori Rencana Kebutuhan Impor")),i.a.createElement(c.k,null,i.a.createElement(c.y,{fields:s.e,items:E,addTableClasses:"josss",overTableSlot:i.a.createElement("div",{className:"d-flex justify-content-end pb-2"},i.a.createElement(c.f,{onClick:function(){o("ya")}.bind(void 0),color:"info"}," Tambah + ")),scopedSlots:{action:function(e){var t=!1;return"Draft"!==e.status&&(t=!0),i.a.createElement("td",null,i.a.createElement(c.f,{size:"sm",color:"info",disabled:t},"Edit")," ",i.a.createElement(c.f,{size:"sm",color:"success"},"Lihat")," ",i.a.createElement(c.f,{size:"sm",color:"danger",disabled:t},"Hapus"))},no:function(e){return i.a.createElement("td",null,e.id)},status:function(e,t){return i.a.createElement("td",null,i.a.createElement(c.f,{onClick:function(){!function(e){var t=b.indexOf(e),a=b.slice();-1!==t?a.splice(t,1):a=[].concat(Object(l.a)(b),[e]),f(a)}(t)}},b.includes(t)?i.a.createElement(d.a,{size:"sm",name:"cilArrowCircleBottom"}):i.a.createElement(d.a,{size:"sm",name:"cilArrowCircleRight"}))," ",e.status)},details:function(e,t){return i.a.createElement(c.v,{show:b.includes(t)},i.a.createElement("table",null,1==e.id?i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Draft"),i.a.createElement("td",{style:{width:400}},"05/03/2021 07:06:00"))):2==e.id?i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Draft"),i.a.createElement("td",{style:{width:400}},"05/03/2020 07:00:16")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Pengajuan Terkirim"),i.a.createElement("td",{style:{width:400}},"05/03/2020 07:53:30")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penerimaan Kemenperin"),i.a.createElement("td",{style:{width:400}},"05/03/2020 07:53:32")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Proses di Kemenperin"),i.a.createElement("td",{style:{width:400}},"05/03/2020 07:53:32"))):3==e.id?i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Draft"),i.a.createElement("td",{style:{width:400}},"21/03/2019 07:10:27")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Pengajuan Terkirim"),i.a.createElement("td",{style:{width:400}},"21/03/2019 07:39:06")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penerimaan Kemenperin"),i.a.createElement("td",{style:{width:400}},"21/03/2019 07:39:08")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Proses di Kemenperin"),i.a.createElement("td",{style:{width:400}},"21/03/2019 07:39:08")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Verifikasi Lapangan"),i.a.createElement("td",{style:{width:400}},"21/03/2019 11:25:34")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penerbitan LHV"),i.a.createElement("td",{style:{width:400}},"25/03/2019 15:30:26"))):4==e.id?i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Draft"),i.a.createElement("td",{style:{width:400}},"10/03/2019 07:10:27")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Pengajuan Terkirim"),i.a.createElement("td",{style:{width:400}},"10/03/2019 07:39:06")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penerimaan Kemenperin"),i.a.createElement("td",{style:{width:400}},"10/03/2019 07:39:08")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Proses di Kemenperin"),i.a.createElement("td",{style:{width:400}},"10/03/2019 07:39:08")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penolakan Kemenperin"),i.a.createElement("td",{style:{width:400}},"10/03/2019 11:25:34",i.a.createElement("br",null),i.a.createElement("b",null,"Keterangan"),": ",i.a.createElement("br",null),"- Blokir Kepabeanan",i.a.createElement("br",null),"- Blokir Kemendag",i.a.createElement("br",null),"Hubungi Instansi Terkait"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Draft"),i.a.createElement("td",{style:{width:400}},"15/03/2018 07:10:27")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Pengajuan Terkirim"),i.a.createElement("td",{style:{width:400}},"15/03/2018 07:39:06")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penerimaan Kemenperin"),i.a.createElement("td",{style:{width:400}},"15/03/2018 07:39:08")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Proses di Kemenperin"),i.a.createElement("td",{style:{width:400}},"15/03/2018 07:39:08")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Verifikasi Lapangan"),i.a.createElement("td",{style:{width:400}},"15/03/2018 11:25:34")),i.a.createElement("tr",null,i.a.createElement("td",{style:{width:750}}),i.a.createElement("td",{style:{width:200}},"- Penerbitan LHV"),i.a.createElement("td",{style:{width:400}},"21/03/2018 15:30:26")))))}}}))))}}}]);
//# sourceMappingURL=22.88b26385.chunk.js.map