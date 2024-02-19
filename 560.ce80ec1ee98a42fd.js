"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[560],{6560:(M,m,u)=>{u.r(m),u.d(m,{RegisterComponent:()=>b});var d=u(6814),o=u(95),e=u(4769),f=u(8282),c=u(1120);function Z(r,i){if(1&r&&(e.TgZ(0,"h1",12),e._uU(1),e.qZA()),2&r){const n=e.oxw();e.xp6(1),e.Oqu(n.errMessage)}}function h(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Name is Required"),e.qZA())}function v(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Min length of name should be 3 chars"),e.qZA())}function T(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Max length of name should be 8 chars"),e.qZA())}function x(r,i){if(1&r&&(e.TgZ(0,"div",12),e.YNc(1,h,2,0,"p",13),e.YNc(2,v,2,0,"p",13),e.YNc(3,T,2,0,"p",13),e.qZA()),2&r){const n=e.oxw();let l,t,s;e.xp6(1),e.Q6J("ngIf",null==(l=n.registerForm.get("name"))||null==l.errors?null:l.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("name"))||null==t.errors?null:t.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(s=n.registerForm.get("name"))||null==s.errors?null:s.errors.maxlength)}}function I(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"Email is Required"),e.qZA())}function q(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"please enter valid email"),e.qZA())}function A(r,i){if(1&r&&(e.TgZ(0,"div",12),e.YNc(1,I,2,0,"p",13),e.YNc(2,q,2,0,"p",13),e.qZA()),2&r){const n=e.oxw();let l,t;e.xp6(1),e.Q6J("ngIf",null==(l=n.registerForm.get("email"))||null==l.errors?null:l.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("email"))||null==t.errors?null:t.errors.email)}}function R(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"password is Required"),e.qZA())}function w(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"please enter valid password"),e.qZA())}function C(r,i){if(1&r&&(e.TgZ(0,"div",12),e.YNc(1,R,2,0,"p",13),e.YNc(2,w,2,0,"p",13),e.qZA()),2&r){const n=e.oxw();let l,t;e.xp6(1),e.Q6J("ngIf",null==(l=n.registerForm.get("password"))||null==l.errors?null:l.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("password"))||null==t.errors?null:t.errors.pattern)}}function N(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"rePassword is Required"),e.qZA())}function U(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"please enter valid rePassword"),e.qZA())}function F(r,i){if(1&r&&(e.TgZ(0,"div",12),e.YNc(1,N,2,0,"p",13),e.YNc(2,U,2,0,"p",13),e.qZA()),2&r){const n=e.oxw();let l,t;e.xp6(1),e.Q6J("ngIf",null==(l=n.registerForm.get("rePassword"))||null==l.errors?null:l.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("rePassword"))||null==t.errors?null:t.errors.pattern)}}function P(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"phone is Required"),e.qZA())}function J(r,i){1&r&&(e.TgZ(0,"p"),e._uU(1,"please enter valid phone"),e.qZA())}function Y(r,i){if(1&r&&(e.TgZ(0,"div",12),e.YNc(1,P,2,0,"p",13),e.YNc(2,J,2,0,"p",13),e.qZA()),2&r){const n=e.oxw();let l,t;e.xp6(1),e.Q6J("ngIf",null==(l=n.registerForm.get("phone"))||null==l.errors?null:l.errors.required),e.xp6(1),e.Q6J("ngIf",null==(t=n.registerForm.get("phone"))||null==t.errors?null:t.errors.pattern)}}function Q(r,i){1&r&&e._UZ(0,"i",14)}let b=(()=>{class r{constructor(n,l){this._AuthService=n,this._Router=l,this.isLoading=!1,this.registerForm=new o.cw({name:new o.NI(null,[o.kI.required,o.kI.minLength(3),o.kI.maxLength(15)]),email:new o.NI(null,[o.kI.required,o.kI.email]),password:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Za-z0-9_@]{6}/)]),rePassword:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Za-z0-9_@]{6}/)]),phone:new o.NI(null,[o.kI.required,o.kI.pattern(/^(01)[0125][0-9]{8}$/)])},this.confirmPassword)}confirmPassword(n){return n.get("password")?.value===n.get("rePassword")?.value?null:{notMatch:!0}}registerSubmit(){this.isLoading=!0,this.registerForm.valid&&this._AuthService.registerAPI(this.registerForm.value).subscribe({next:n=>{this.isLoading=!1,"success"==n.message&&this._Router.navigate(["/login"])},error:n=>{this.isLoading=!1,console.log(n),this.errMessage=n.error.message}})}static#e=this.\u0275fac=function(l){return new(l||r)(e.Y36(f.e),e.Y36(c.F0))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:33,vars:9,consts:[[1,"w-75","mx-auto","my-4"],[1,"text-main"],["class","alert alert-danger",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name",1,"form-control"],["formControlName","email",1,"form-control"],["formControlName","password",1,"form-control"],["formControlName","rePassword",1,"form-control"],["formControlName","phone",1,"form-control"],["type","submit",1,"btn","bg-main","text-white","d-block","ms-auto",3,"disabled"],["class","fa-solid fa-spinner fa-spin",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(l,t){if(1&l&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"Regitser Now : "),e.qZA(),e.YNc(3,Z,2,1,"h1",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return t.registerSubmit()}),e.TgZ(5,"div",4)(6,"label"),e._uU(7,"Name"),e.qZA(),e._UZ(8,"input",5),e.YNc(9,x,4,3,"div",2),e.qZA(),e.TgZ(10,"div",4)(11,"label"),e._uU(12,"email"),e.qZA(),e._UZ(13,"input",6),e.YNc(14,A,3,2,"div",2),e.qZA(),e.TgZ(15,"div",4)(16,"label"),e._uU(17,"Password"),e.qZA(),e._UZ(18,"input",7),e.YNc(19,C,3,2,"div",2),e.qZA(),e.TgZ(20,"div",4)(21,"label"),e._uU(22,"Re-Password"),e.qZA(),e._UZ(23,"input",8),e.YNc(24,F,3,2,"div",2),e.qZA(),e.TgZ(25,"div",4)(26,"label"),e._uU(27,"Phone"),e.qZA(),e._UZ(28,"input",9),e.YNc(29,Y,3,2,"div",2),e.qZA(),e.TgZ(30,"button",10),e._uU(31,"Register "),e.YNc(32,Q,1,0,"i",11),e.qZA()()()),2&l){let s,_,a,p,g;e.xp6(3),e.Q6J("ngIf",t.errMessage),e.xp6(1),e.Q6J("formGroup",t.registerForm),e.xp6(5),e.Q6J("ngIf",(null==(s=t.registerForm.get("name"))?null:s.errors)&&(null==(s=t.registerForm.get("name"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=t.registerForm.get("email"))?null:_.errors)&&(null==(_=t.registerForm.get("email"))?null:_.touched)),e.xp6(5),e.Q6J("ngIf",(null==(a=t.registerForm.get("password"))?null:a.errors)&&(null==(a=t.registerForm.get("password"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.registerForm.get("rePassword"))?null:p.errors)&&(null==(p=t.registerForm.get("rePassword"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.registerForm.get("phone"))?null:g.errors)&&(null==(g=t.registerForm.get("phone"))?null:g.touched)),e.xp6(1),e.Q6J("disabled",t.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",t.isLoading)}},dependencies:[d.ez,d.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]})}return r})()}}]);