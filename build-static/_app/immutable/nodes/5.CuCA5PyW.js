import{a as s,t as u}from"../chunks/disclose-version.Cgb6QxUY.js";import{p as K,f as D,a as L,s as r,i as p,r as i,g as b,t as c}from"../chunks/runtime.CZdwG2ZK.js";import{s as _}from"../chunks/render.CN2uiBlA.js";import{p as M,i as l}from"../chunks/if.CPIkIpuF.js";import{r as U,s as I,a as Q}from"../chunks/attributes.gW5-xvXj.js";var R=u('<form method="POST" action="?/update_password">Change your password: <input name="password" type="password"> <button style="margin-top: 12px;">Change</button></form>'),X=u('<form method="POST" action="?/convert_provider">Convert to a permanent user: <button style="margin-top: 12px;" name="provider" value="github">Use GitHub auth</button></form> <form method="POST" action="?/convert_email">Convert to a permanent user: <input name="email" type="email" placeholder="email"> <input name="password" type="password" placeholder="password"> <button style="margin-top: 12px;">Use email auth</button></form>',1),Y=u('<h2>Welcome to /self!</h2> <h3>User Information:</h3> <p style="margin-left: 10px;"> </p> <p style="margin-left: 10px;"> </p> <p style="margin-left: 10px;"> </p> <p style="margin-left: 10px;"> </p> <form method="POST" action="?/delete_user">Delete a user by ID: <input name="user" type="text"> <button style="margin-top: 12px;">Delete</button></form> <form method="POST" action="?/update_nickname">Change your nickname: <input name="nickname" type="text"> <button style="margin-top: 12px;">Update</button> <button formaction="?/delete_nickname" style="margin-top: 12px;">Delete</button></form> <form method="POST" action="?/update_phone">Change your phone number: <input name="phone" type="text"> <button style="margin-top: 12px;">Update</button></form> <!> <!>',1),Z=u("<p> </p>"),$=u('<p style="color: red;"> </p>'),tt=u('<form method="POST" action="?/verify_otp"><input name="otp" type="text"> <input name="phone" type="hidden"> <button style="margin-top: 12px;">Verify</button></form>'),et=u("<!> <!> <!> <!>",1);function pt(N,o){K(o,!0);let E=o.data,a=M(E.session);const P=a==null?void 0:a.user.app_metadata.providers,G=P?P.some(e=>e==="email"):(a==null?void 0:a.user.app_metadata.provider)==="email";var k=et(),O=D(k);{var H=e=>{var t=Y(),n=r(D(t),4),d=p(n);i(n);var f=r(n,2),h=p(f);i(f);var y=r(f,2),z=p(y);i(y);var x=r(y,2),A=p(x);i(x);var g=r(x,4),S=r(p(g));U(S),b(4),i(g);var C=r(g,4);{var B=m=>{var v=R();s(m,v)};l(C,m=>{G&&m(B)})}var F=r(C,2);{var J=m=>{var v=X();b(2),s(m,v)};l(F,m=>{a.user.is_anonymous&&m(J)})}c(()=>{var m,v;_(d,`ID: ${a.user.id??""}`),_(h,`Email: ${a.user.email||"not set"}`),_(z,`Phone Number: ${a.user.phone||"not set"}`),_(A,`Nickname: ${a.user.user_metadata.nickname||"not set"}`),I(S,((v=(m=o.form)==null?void 0:m.data)==null?void 0:v.nickname)??"")}),s(e,t)};l(O,e=>{a&&e(H)})}var T=r(O,2);{var V=e=>{var t=Z(),n=p(t,!0);i(t),c(()=>_(n,o.form.message)),s(e,t)};l(T,e=>{var t;(t=o.form)!=null&&t.message&&e(V)})}var w=r(T,2);{var W=e=>{var t=$(),n=p(t,!0);i(t),c(()=>_(n,o.form.error)),s(e,t)};l(w,e=>{var t;(t=o.form)!=null&&t.error&&e(W)})}var j=r(w,2);{var q=e=>{var t=tt(),n=p(t),d=r(n,2);U(d),b(2),i(t),c(()=>{var f,h;Q(n,"placeholder",`OTP sent to ${(f=o.form)==null?void 0:f.phone}`),I(d,(h=o.form)==null?void 0:h.phone)}),s(e,t)};l(j,e=>{var t;(t=o.form)!=null&&t.verify&&e(q)})}s(N,k),L()}export{pt as component};