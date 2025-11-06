import{s as a,p as c,d as l,r as d,j as e,q as j,t as x,n as m,o as h}from"./index-D62kSyIa.js";import{P as g,a as b,b as P,c as u,d as f,e as p,f as k,g as v,h as L,i as T,T as w,j as A,k as r}from"./styles-B5p3hJzY.js";const B=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: #888;
`,E=a(c)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #00adb5;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,F=a.span`
  color: #aaa;
  font-size: 0.9rem;
`,y=a.span`
  color: #b8b6b6;
  font-weight: 600;
`,G=()=>{const{data:{projects:t}}=l();return d.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),e.jsxs(g,{children:[e.jsxs(B,{children:[e.jsxs(E,{to:"/",children:[e.jsx(j,{})," Home"]}),e.jsx(F,{children:e.jsx(x,{})}),e.jsx(y,{children:"Projects"})]}),e.jsx(b,{children:"All Projects"}),e.jsx(P,{children:t?.map((s,n)=>e.jsxs(u,{children:[e.jsx(f,{children:e.jsx(p,{src:s.image,alt:s.name})}),e.jsxs(k,{children:[e.jsx(v,{children:s.name}),e.jsx(L,{children:s.description}),s.tags&&e.jsx(T,{children:s.tags.map((i,o)=>e.jsx(w,{children:i},o))}),e.jsxs(A,{children:[s.links.github&&e.jsx(r,{href:s.links.github,target:"_blank","aria-label":"GitHub",children:e.jsx(m,{})}),s.links.live&&e.jsx(r,{href:s.links.live,target:"_blank","aria-label":"Live Demo",children:e.jsx(h,{})})]})]})]},n))})]})};export{G as default};
