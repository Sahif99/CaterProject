import{u as j,e as v,r as d,a as y,j as e,L as f,f as b,l as N}from"./index-JZG9T5qo.js";function C(){const p=j();v();const[r,u]=d.useState(),{status:h}=y(t=>t.Crud),[s,c]=d.useState({title:"",description:"",image:""});let[i,a]=d.useState("");const g=()=>{let t={};return s.title||(t.title="Title is Important"),s.description||(t.description="Description is Important"),t};let o,l;const m=t=>{o=t.target.name,l=t.target.value,o==="title"&&(l.length===0?(c({...s,title:""}),a({...i,title:"Title Is Important"})):(c({...s,title:l}),a({...i,title:""}))),o==="description"&&(l.length===0?(c({...s,description:""}),a({...i,description:"Description Is Important"})):(c({...s,description:l}),a({...i,description:""})))},x=t=>{t.preventDefault(),a(g());const n=new FormData;n.append("title",s.title),n.append("description",s.description),n.append("image",r),p(b(n)).then(()=>{p(N())})};return e.jsx("div",{className:"container-fluid contact py-6 wow bounceInUp","data-wow-delay":"0.1s",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:"col-1",children:e.jsx("img",{src:"img/background-site.jpg",className:"img-fluid h-100 w-100 rounded-start",style:{objectFit:"cover",opacity:"0.7"},alt:""})}),e.jsx("div",{className:"col-10",children:e.jsxs("div",{className:"border-bottom border-top border-primary bg-light py-5 px-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"display-5 mb-5",children:"Create New Services"})}),e.jsxs("div",{className:"row g-4 form",style:{flexDirection:"column"},children:[e.jsxs("div",{className:"col-lg-4 col-md-6 mx-auto",children:[e.jsx("input",{type:"text",className:"form-control border-primary p-2",placeholder:"Enter Service Title",name:"title",value:s.title,onChange:m}),e.jsx("span",{style:{color:"red"},children:i.title})]}),e.jsxs("div",{className:"col-lg-4 col-md-6 mx-auto",children:[e.jsx("input",{type:"text",className:"form-control border-primary p-2",placeholder:"Enter Service Description",name:"description",value:s.description,onChange:m}),e.jsx("span",{style:{color:"red"},children:i.description})]}),e.jsxs("div",{className:" col-lg-4 col-md-6 mx-auto",children:[e.jsx("input",{type:"file",onChange:t=>u(t.target.files[0]),name:"image",accept:"image/*",className:"form-control border-primary p-2"}),e.jsx("span",{style:{color:"red"},children:i.image}),r!==""&&r!==void 0&&r!==null?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{style:{height:"120px",width:"130px",objectFit:"cover"},src:URL.createObjectURL(r),alt:"",className:"upload-img mt-3 rounded-circle"})}):e.jsx(e.Fragment,{children:r===""&&e.jsx("p",{children:"Drag or drop content here"})})]}),e.jsxs("div",{className:"col-12 text-center",children:[h=="loading"?e.jsx("button",{type:"submit",onClick:x,className:"btn btn-primary px-5 py-3 rounded-pill",children:"Loading..."}):e.jsx("button",{type:"submit",onClick:x,className:"btn btn-primary px-5 py-3 rounded-pill",children:"Create Product"}),e.jsx("div",{className:"col-12 text-center mt-3",style:{fontSize:"20px"},children:e.jsx(f,{to:"/services",children:"Go To Services"})})]})]})]})}),e.jsx("div",{className:"col-1",children:e.jsx("img",{src:"img/background-site.jpg",className:"img-fluid h-100 w-100 rounded-end",style:{objectFit:"cover",opacity:"0.7"},alt:""})})]})})})}export{C as default};
