"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[297],{3679:(_,l,n)=>{n.d(l,{N:()=>c});var u=n(5619),e=n(4769),t=n(9862);let c=(()=>{class o{constructor(r){this._HttpClient=r,this.baseURL="https://ecommerce.routemisr.com/",this.numOfCartItems=new u.X(null),this.userHeader={token:localStorage.getItem("userToken")},null!=localStorage.getItem("userToken")&&this.getAllCartAPI().subscribe({next:s=>{this.numOfCartItems.next(s.numOfCartItems)}})}AddCartAPI(r){return this._HttpClient.post(`${this.baseURL}api/v1/cart`,{productId:r})}updateCartItemsAPI(r,s){return this._HttpClient.put(`${this.baseURL}api/v1/cart/${r}`,{count:s})}getAllCartAPI(){return this._HttpClient.get(`${this.baseURL}api/v1/cart`)}removeCartItemAPI(r){return this._HttpClient.delete(`${this.baseURL}api/v1/cart/${r}`)}clearUserCartAPI(){return this._HttpClient.delete(`${this.baseURL}api/v1/cart`)}onLinePaymentAPI(r,s){return this._HttpClient.post(`${this.baseURL}api/v1/orders/checkout-session/${r}?url=${window.location.origin}`,{shippingAddress:s})}static#t=this.\u0275fac=function(s){return new(s||o)(e.LFG(t.eN))};static#e=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},297:(_,l,n)=>{n.r(l),n.d(l,{OnlinePaymentComponent:()=>r});var u=n(6814),e=n(95),t=n(4769),c=n(1120),o=n(3679),p=n(4219);let r=(()=>{class s{constructor(a,i,m){this._ActivatedRoute=a,this._CartService=i,this.toastEvokeService=m,this.cartId="",this.adressForm=new e.cw({details:new e.NI(null),phone:new e.NI(null),city:new e.NI(null)})}ngOnInit(){this._ActivatedRoute.params.subscribe(a=>{this.cartId=a.id})}adressFormSubmit(){this._CartService.onLinePaymentAPI(this.cartId,this.adressForm.value).subscribe({next:a=>{window.location.href=a.session.url},error:a=>{console.log(a),this.toastEvokeService.danger("Oppps! ^_^",a.error.message).subscribe()}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(c.gz),t.Y36(o.N),t.Y36(p.nm))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-online-payment"]],standalone:!0,features:[t.jDz],decls:18,vars:1,consts:[[1,"w-75","mx-auto","my-5"],[1,"text-center","text-main"],[3,"formGroup","ngSubmit"],["formControlName","details",1,"form-control"],["formControlName","phone",1,"form-control"],[1,"mb-5"],["formControlName","city",1,"form-control"],["type","submit",1,"btn","bg-main","text-white"]],template:function(i,m){1&i&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Online Payment"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return m.adressFormSubmit()}),t.TgZ(4,"div")(5,"label"),t._uU(6,"Details:"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"div")(9,"label"),t._uU(10,"phone:"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"div",5)(13,"label"),t._uU(14,"city:"),t.qZA(),t._UZ(15,"input",6),t.qZA(),t.TgZ(16,"button",7),t._uU(17,"Pay"),t.qZA()()()),2&i&&(t.xp6(3),t.Q6J("formGroup",m.adressForm))},dependencies:[u.ez,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u]})}return s})()}}]);