(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[66],{779:function(e,a,t){"use strict";t.r(a);var l=t(180),n=t(650),u=t(1),r=t.n(u),c=t(125),i=t(58),s=(t(658),t(663),t(664),t(698),t(699),t(700)),m=(t(701),t(702),t(703),t(704),t(705)),o=t(706),b=t(654),E=function(e){var a=Object(u.useState)(!1),t=Object(n.a)(a,2),l=t[0],s=t[1],m=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),o=Object(n.a)(m,2),E=(o[0],o[1]),d=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),p=Object(n.a)(d,2),j=(p[0],p[1]),f=Object(u.useState)(),k=Object(n.a)(f,2),O=(k[0],k[1],Object(u.useState)(0)),h=Object(n.a)(O,2),v=(h[0],h[1],Object(u.useState)([{id:1,periode:"2020",bulan:"Januari",rcnpenggunaan:"Rumah Tangga",nmproduk:"Garam Konsumsi",hscode:"2501.00.99",stdmutu:"NaCl maksimal 97%",bahanbaku:"0.3",jnssatuanbahanbaku:"TNE",kota:"Brebes",produkjadi:"160.000",jnssatuanprodukjadi:"LTR"},{id:2,periode:"2020",bulan:"Januari",rcnpenggunaan:"Rumah Tangga",nmproduk:"Garam Konsumsi",hscode:"2501.00.99",stdmutu:"NaCl 97-99%",bahanbaku:"0.15",jnssatuanbahanbaku:"TNE",kota:"Boyolali",produkjadi:"1.400.000",jnssatuanprodukjadi:"PCS"}])),g=Object(n.a)(v,2),S=g[0],y=g[1],N=Object(u.useState)(),C=Object(n.a)(N,2),P=(C[0],C[1]),R=[{key:"id",_style:{width:"3%"},label:"No"},{key:"periode",_style:{width:"5%"},label:"Periode"},{key:"bulan",_style:{width:"5%"},label:"Bulan"},{key:"nmproduk",_style:{width:"15%"},label:"Jenis"},{key:"rcnpenggunaan",_style:{width:"15%"},label:"Rincian Penggunaan"},{key:"hscode",_style:{width:"10%"},label:"Post Tarif"},{key:"stdmutu",_style:{width:"20%"},label:"Standard Mutu"},{key:"bahanbaku",_style:{width:"12%"},label:"Jumlah"},{key:"jnssatuanbahanbaku",_style:{width:"3%"},label:"Satuan"},{key:"kota",_style:{width:"3%"},label:"Kota"},{key:"action",_style:{width:"12%"},label:"Aksi"}],K=Object(u.useState)([{value:"LR",label:"LR"}]),T=Object(n.a)(K,2),w=(T[0],T[1],Object(u.useState)([{value:"KR",label:"Republic of Korea"},{value:"JP",label:"Japan"},{value:"SG",label:"Singapore"},{value:"MY",label:"Malaysia"}])),J=Object(n.a)(w,2),x=(J[0],J[1],Object(u.useState)([{value:"01",label:"Gas Carrier"},{value:"02",label:"Oil Tanker"},{value:"03",label:"Bulk Carrier"},{value:"04",label:"General Cargo/Multipurpose"}])),M=Object(n.a)(x,2),B=(M[0],M[1],Object(u.useState)([{value:"01",label:"Load Line"},{value:"02",label:"SC"},{value:"03",label:"SE"},{value:"04",label:"SR"},{value:"05",label:"IOPP"},{value:"06",label:"IAPP"}])),L=Object(n.a)(B,2);L[0],L[1];Object(u.useEffect)((function(){E(e.certificate),j(e.informasi)}));var G=[{value:"TNE",label:"Ton"},{value:"LTR",label:"Liter"},{value:"KGM",label:"Kilogram"}],I=[{value:"25010099",label:"2501.00.99"},{value:"25010092",label:"2501.00.92"}],_=[{value:"1",label:"NaCl Maks 97%"},{value:"2",label:"NaCl 97-99%"}],A=Object(u.useState)(!1),z=Object(n.a)(A,2),F=z[0],D=z[1],Q=Object(u.useState)(!1),U=Object(n.a)(Q,2),Y=U[0],V=U[1],q=Object(u.useState)(!1),H=Object(n.a)(q,2),W=H[0],X=H[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.eb,{show:W,onClose:function(){return X(!1)}},r.a.createElement(c.hb,null,"Masukkan PIN"),r.a.createElement(c.fb,null,r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"12"},r.a.createElement(c.Q,{type:"password"})))),r.a.createElement(c.gb,null,r.a.createElement(c.ub,null,r.a.createElement(c.bb,{to:"/intercept",class:"btn btn-warning"},"Lanjutkan")))),r.a.createElement(c.eb,{show:F,onClose:function(){return D(!1)},size:"lg"},r.a.createElement(c.hb,{closeButton:!0},r.a.createElement("h4",null,"Input Realisasi Produksi")),r.a.createElement(c.fb,null,r.a.createElement(c.K,null,r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"3"},r.a.createElement(c.ab,null,"Periode"),r.a.createElement(c.vb,null,r.a.createElement("option",null,"2020"),r.a.createElement("option",null,"2019"),r.a.createElement("option",null,"2018")))),r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"4"},r.a.createElement(c.ab,null,"Jenis"),r.a.createElement(c.Q,null)),r.a.createElement(c.u,{md:"4"},r.a.createElement(c.ab,null,"Standard Mutu"),r.a.createElement(b.a,{options:_})),r.a.createElement(c.u,{md:"4"},r.a.createElement(c.ab,null,"Pos Tarif"),r.a.createElement(b.a,{options:I}))),r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"6"},r.a.createElement(c.ab,null,"Jumlah "),r.a.createElement(c.Q,{type:"number"})),r.a.createElement(c.u,{md:"6"},r.a.createElement(c.ab,null,"Satuan Produk"),r.a.createElement(b.a,{options:G}))))),r.a.createElement(c.gb,null,r.a.createElement(c.ub,null,r.a.createElement("div",{className:"pr-2"},r.a.createElement(c.f,{onClick:function(){return D(!1),void P([{id:1,tahun:"2020",jenis:"Cairan Inhalasi",hscode:"3004.90.20",stdmutu:"NaCl maksimal 97%",jnssatuanproduk:"LTR",volume:"158.678"},{id:2,tahun:"2020",jenis:"Tetes Mata",hscode:"3004.90.96",stdmutu:"NaCl 97-99%",jnssatuanproduk:"PCS",volume:"1.357.135"}])},color:"info"},"Simpan")),r.a.createElement("div",null,r.a.createElement(c.f,{color:"danger"},"Batal"))))),r.a.createElement(c.eb,{show:Y,onClose:function(){return V(!1)},size:"lg"},r.a.createElement(c.hb,{closeButton:!0},r.a.createElement("h4",null,"Input Rencana Penggunaan Garam Impor dan Produksi")),r.a.createElement(c.fb,null,r.a.createElement(c.K,null,r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"3"},r.a.createElement(c.ab,null,"Periode"),r.a.createElement(c.vb,null,r.a.createElement("option",null,"2020"),r.a.createElement("option",null,"2019"),r.a.createElement("option",null,"2018"))),r.a.createElement(c.u,{md:"3"},r.a.createElement(c.ab,null,"Bulan"),r.a.createElement(c.vb,null,r.a.createElement("option",null,"Januari"),r.a.createElement("option",null,"Februari"),r.a.createElement("option",null,"Maret"),r.a.createElement("option",null,"April"),r.a.createElement("option",null,"Mei"),r.a.createElement("option",null,"Juni"),r.a.createElement("option",null,"Juli"),r.a.createElement("option",null,"Agustus"),r.a.createElement("option",null,"September"),r.a.createElement("option",null,"Oktober"),r.a.createElement("option",null,"November"),r.a.createElement("option",null,"Desember"))),r.a.createElement(c.u,{md:"3"},r.a.createElement(c.ab,null,"Rincian Penggunaan"),r.a.createElement(b.a,{options:[{value:"1",label:"Rumah Tangga"},{value:"2",label:"Konsumsi"}]}))),r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"4"},r.a.createElement(c.ab,null,"Jenis"),r.a.createElement(b.a,{options:[{value:"garamkonsumsi",label:"Garam Konsumsi"},{value:"garamindustri",label:"Garam Industri"}]})),r.a.createElement(c.u,{md:"4"},r.a.createElement(c.ab,null,"Standard Mutu"),r.a.createElement(b.a,{options:_})),r.a.createElement(c.u,{md:"4"},r.a.createElement(c.ab,null,"Pos Tarif"),r.a.createElement(b.a,{options:I}))),r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"6"},r.a.createElement(c.ab,null,"Jumlah"),r.a.createElement(c.Q,{type:"number"})),r.a.createElement(c.u,{md:"6"},r.a.createElement(c.ab,null,"Satuan"),r.a.createElement(b.a,{options:G}))),r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"12"},r.a.createElement(c.ab,null,"Kota"),r.a.createElement(b.a,{options:[{value:"brebes",label:"Brebes"},{value:"gresik",label:"Gresik"},{value:"salatiga",label:"Salatiga"},{value:"boyolali",label:"Boyolali"}]}))),r.a.createElement(c.ub,null,r.a.createElement(c.u,{md:"12"},r.a.createElement(c.ab,null,"Keterangan"),r.a.createElement(c.Jb,null))))),r.a.createElement(c.gb,null,r.a.createElement(c.ub,null,r.a.createElement("div",{className:"pr-2"},r.a.createElement(c.f,{onClick:function(){return V(!1),void y([{id:1,periode:"2020",bulan:"Januari",rcnpenggunaan:"Rumah Tangga",nmproduk:"Garam Konsumsi",hscode:"2501.00.99",stdmutu:"NaCl maksimal 97%",bahanbaku:"0.3",jnssatuanbahanbaku:"TNE",kota:"Brebes",produkjadi:"160.000",jnssatuanprodukjadi:"LTR"},{id:2,periode:"2020",bulan:"Januari",rcnpenggunaan:"Rumah Tangga",nmproduk:"Garam Konsumsi",hscode:"2501.00.99",stdmutu:"NaCl 97-99%",bahanbaku:"0.15",jnssatuanbahanbaku:"TNE",kota:"Boyolali",produkjadi:"1.400.000",jnssatuanprodukjadi:"PCS"}])},color:"info"},"Simpan")),r.a.createElement("div",null,r.a.createElement(c.f,{color:"danger"},"Batal"))))),r.a.createElement("div",null,r.a.createElement("h4",null,"Rencana Konsumsi")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"ml-auto p-2 d-flex align-items-end"},r.a.createElement(c.f,{onClick:function(){return V(!0)},className:"btn btn-sm btn-info"},"Tambah + "))),r.a.createElement(c.eb,{show:l,onClose:function(){return s(!1)},size:"lg",closeOnBackdrop:!0},r.a.createElement(c.hb,null,r.a.createElement("h4",null,"Rencana Distribusi")),r.a.createElement(c.fb,null,r.a.createElement(c.ub,{className:"px-2"},r.a.createElement(c.y,{addTableClasses:"joss",fields:R}))),r.a.createElement(c.gb,null)),r.a.createElement(c.ub,{className:"px-2"},r.a.createElement(c.y,{addTableClasses:"joss",fields:R,items:S,scopedSlots:{action:function(e){return r.a.createElement("td",null,r.a.createElement(c.f,{onClick:function(){return V(!0)},className:"btn btn-sm btn-warning"},r.a.createElement(i.a,{size:"sm",name:"cilPencil"}))," ",r.a.createElement(c.f,{className:"btn btn-sm btn-danger"},r.a.createElement(i.a,{size:"sm",name:"cilTrash"})))}}})),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("div",null,r.a.createElement(c.f,{onClick:function(){return X(!0)},color:"primary"},"Simpan")," ")))},d=t(707),p=t(708),j=(t(655),function(e){var a=Object(u.useState)([]),t=Object(n.a)(a,2),l=(t[0],t[1],Object(u.useState)([])),i=Object(n.a)(l,2),s=(i[0],i[1],Object(u.useState)(!1)),m=Object(n.a)(s,2),o=(m[0],m[1],Object(u.useState)()),b=Object(n.a)(o,2),E=(b[0],b[1],Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}])),d=Object(n.a)(E,2),p=(d[0],d[1]),j=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),f=Object(n.a)(j,2),k=(f[0],f[1]),O=Object(u.useState)(),h=Object(n.a)(O,2),v=(h[0],h[1],Object(u.useState)(0)),g=Object(n.a)(v,2),S=(g[0],g[1],Object(u.useState)([{value:"LR",label:"LR"}])),y=Object(n.a)(S,2),N=(y[0],y[1],Object(u.useState)([{value:"KR",label:"Republic of Korea"},{value:"JP",label:"Japan"},{value:"SG",label:"Singapore"},{value:"MY",label:"Malaysia"}])),C=Object(n.a)(N,2),P=(C[0],C[1],Object(u.useState)([{value:"01",label:"Gas Carrier"},{value:"02",label:"Oil Tanker"},{value:"03",label:"Bulk Carrier"},{value:"04",label:"General Cargo/Multipurpose"}])),R=Object(n.a)(P,2),K=(R[0],R[1],Object(u.useState)([{value:"01",label:"Load Line"},{value:"02",label:"SC"},{value:"03",label:"SE"},{value:"04",label:"SR"},{value:"05",label:"IOPP"},{value:"06",label:"IAPP"}])),T=Object(n.a)(K,2);T[0],T[1];return Object(u.useEffect)((function(){p(e.certificate),k(e.informasi)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.j,null,r.a.createElement(c.n,null,r.a.createElement("h4",null,"Checkpoint Konfirmasi")),r.a.createElement(c.k,null,r.a.createElement(c.K,null,r.a.createElement(c.ub,null,r.a.createElement(c.u,{xsd:"6"},r.a.createElement(c.ab,null,r.a.createElement("h5",null,"Form Konsumsi"))),r.a.createElement(c.u,{xsd:"6"},r.a.createElement(c.b,{color:"success"},"Lengkap"))))),r.a.createElement(c.l,null,r.a.createElement(c.ub,{className:"d-flex justify-content-end"},r.a.createElement("div",{className:"pr-2"},r.a.createElement(c.f,{className:"btn btn-success"},"Kirim")),r.a.createElement("div",{className:"pr-2"},r.a.createElement(c.f,{className:"btn btn-info"},"Simpan"))))))}),f=t(709),k=(t(710),t(665));function O(e){var a=e.button;return a.profil?r.a.createElement(m.a,null):a.impor?r.a.createElement(o.a,null):a.produksi?r.a.createElement(E,null):a.distribusi?r.a.createElement(d.a,null):a.penyerapan?r.a.createElement(p.a,null):a.stok?r.a.createElement(f.a,null):r.a.createElement(j,null)}a.default=function(e){var a=Object(u.useState)({produksi:!0}),t=Object(n.a)(a,2),i=t[0],m=t[1],o=Object(u.useState)("a"),b=Object(n.a)(o,2),E=b[0],d=b[1],p=Object(u.useState)(),j=Object(n.a)(p,2),f=j[0],h=j[1],v=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),g=Object(n.a)(v,2),S=g[0],y=g[1],N=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),C=Object(n.a)(N,2),P=C[0],R=C[1],K=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),T=Object(n.a)(K,2),w=T[0],J=T[1],x=Object(u.useState)([{id:1,title:"",issuingauthority:"",dateofissue:"",dateofexpiry:""}]),M=Object(n.a)(x,2),B=M[0],L=M[1],G=Object(u.useState)(""),I=Object(n.a)(G,2),_=I[0],A=I[1],z=Object(u.useState)(""),F=Object(n.a)(z,2),D=F[0],Q=F[1];return Object(u.useEffect)((function(){"ya"==_&&e.history.push("/helpkapal"),"ya"==D&&e.history.push("/helpkapal")})),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{color:"warning",closeButton:!0},r.a.createElement("h6",null,"SIMULASI USER KEMENKO")),r.a.createElement(c.j,null,r.a.createElement(c.k,null,r.a.createElement("div",{className:"align-self-start"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement(k.a,{class:"px-2"},r.a.createElement(c.f,{id:"produksi",class:i.produksi?"btn-sm btn-danger shadow-lg":"btn-sm btn-danger",onClick:function(e){m(Object(l.a)({},e.target.id,!0)),console.log(i),console.log(e.target.id)}.bind(void 0)},r.a.createElement("div",{id:"produksi",className:"item px-1 btn "},r.a.createElement(s.a,null),r.a.createElement("span",{id:"produksi",style:{color:"white",display:"block"}},"Konsumsi")))))),r.a.createElement("div",{className:"pt-5"},r.a.createElement(O,{button:i,defic:B,kirimDefic:function(e){L(e)},kembali:function(e){Q(e),console.log("kembali",D)},tab:E,Viavalen:function(e){A(e),console.log(_)},kirimDefisiensi:function(e){J(e)},defisiensi:w,kirimInformasi:function(e){R(e)},informasi:P,s:!0,certificate:S,kirimCertificate:function(e){y(e)},juhuu:function(e){h(e),d("a")},jehee:function(e){h(e),d("b")},calleback:function(e){h(!e),console.log(f)}})))))}}}]);
//# sourceMappingURL=66.01e69e85.chunk.js.map