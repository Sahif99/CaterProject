import{u as b,e as w,r as d,a as j,g as D,h as C,j as e,L as S,i as E}from"./index-JZG9T5qo.js";function U(){const u=b(),v=w(),[a,y]=d.useState(),{det:t}=j(i=>i.Crud),{status:f}=j(i=>i.Crud),{id:p}=D();console.log(p);const[s,c]=d.useState({title:"",description:"",image:""});d.useEffect(()=>{u(C(p))},[p]);const[l,o]=d.useState("");let m,n;const g=i=>{m=i.target.name,n=i.target.value,m==="title"&&(n.length===0?(c({...s,title:""}),o({...l,title:"Title is important"})):(c({...s,title:n}),o({...l,title:""}))),m==="description"&&(n.length===0?(c({...s,description:""}),o({...l,description:"Description is important"})):(c({...s,description:n}),o({...l,description:""})))},N=()=>{let i={};return s.title||(i.title="Please write the title"),s.description||(i.description="Please write the description"),i};d.useEffect(()=>{t!==null&&c({title:t==null?void 0:t.title,description:t==null?void 0:t.description})},[t]);const x=i=>{i.preventDefault(),o(N);let r=new FormData;r.append("id",p),r.append("title",s.title),r.append("description",s.description),a?r.append("image",a):r.append("image",t.image),u(E(r)).then(h=>{console.log(h),h.payload.status===200?v("/services"):alert("Something Wrong")})};return e.jsx("div",{className:"container-fluid contact py-6 wow bounceInUp","data-wow-delay":"0.1s",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-1",children:e.jsx("img",{src:"/img/background-site.jpg",className:"img-fluid h-100 w-100 rounded-start",style:{objectFit:"cover",opacity:"0.7"},alt:""})}),e.jsx("div",{className:"col-10",children:e.jsxs("div",{className:"border-bottom border-top border-primary bg-light py-5 px-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"display-5 mb-5",children:"Update Your Services"})}),e.jsxs("div",{className:"row g-4 form ",style:{flexDirection:"column"},children:[e.jsxs("div",{className:"col-lg-4 col-md-6 mx-auto",children:[e.jsx("input",{type:"text",className:"form-control border-primary p-2",placeholder:"Enter Your New Title",name:"title",value:s.title,onChange:g}),e.jsx("span",{style:{color:"red"},children:l.title})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 mx-auto",children:[e.jsx("input",{type:"text",className:"form-control border-primary p-2",placeholder:"Enter Your New Description",name:"description",value:s.description,onChange:g}),e.jsx("span",{style:{color:"red"},children:l.description})]}),e.jsxs("div",{class:"col-lg-4 col-md-6 mx-auto",children:[e.jsx("input",{type:"file",onChange:i=>y(i.target.files[0]),name:"img",accept:"image/*",class:"form-control"}),a!==""&&a!==void 0&&a!==null?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{style:{height:"120px",width:"130px",objectFit:"cover"},src:URL.createObjectURL(a),alt:"",className:"upload-img mt-3 rounded-circle"})}):e.jsx(e.Fragment,{children:(t==null?void 0:t.image)!==""?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{height:"70px",src:`https://wtsacademy.dedicateddevelopers.us/uploads/product/${t==null?void 0:t.image}`,alt:"",className:"upload-img mt-3 rounded-circle ",style:{height:"120px",width:"130px",objectFit:"cover"}})}):e.jsx("img",{height:"90px",alt:"",className:"upload-img"})}),a===""&&e.jsx("p",{children:"Drag or drop content here"})]}),e.jsx("div",{className:"col-12 text-center",children:f=="loading"?e.jsx("button",{type:"submit",onClick:x,className:"btn btn-primary px-5 py-3 rounded-pill",children:"Loading..."}):e.jsx("button",{type:"submit",onClick:x,className:"btn btn-primary px-5 py-3 rounded-pill",children:"Update"})}),e.jsx("div",{className:"col-12 text-center mt-3",style:{fontSize:"20px"},children:e.jsx(S,{to:"/services",children:"Go To Services"})})]})]})}),e.jsx("div",{className:"col-1",children:e.jsx("img",{src:"/img/background-site.jpg",className:"img-fluid h-100 w-100 rounded-end",style:{objectFit:"cover",opacity:"0.7"}})})]})})})}export{U as default};
