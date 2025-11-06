import{s as e,p as a,k as r}from"./index-CbBFicO6.js";const t=r`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`,i=e.section`
  background: #0d0d0d;
  color: #fff;
  padding: 5rem 2rem;
  text-align: center;
  animation: ${t} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`,d=e.h2`
  font-size: 2.3rem;
  color: #00adb5;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 70px;
    height: 2px;
    background: #06d6a0;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`,m=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1260px;
  margin: 0 auto 2rem auto;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,s=e(a)`
  display: inline-block;
  background: transparent;
  color: #00adb5;
  border: 2px solid #00adb5;
  padding: 0.7rem 1.8rem;
  border-radius: 30px;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #00adb5;
    color: #0d0d0d;
    box-shadow: 0 0 15px rgba(0, 173, 181, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.4rem;
  }
`,n=e.div`
  max-width: 400px;
  margin: auto;
  background: #111;
  border: 1px solid #222;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  text-align: left;

  &:hover {
    transform: translateY(-6px);
    border-color: #00adb5;
    box-shadow: 0 0 15px rgba(0, 173, 181, 0.3);

    img {
      transform: scale(1.08);
    }
  }

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`,p=e.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid #222;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`,x=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`,c=e.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.6rem;
  }
`,l=e.h3`
  font-size: 1.2rem;
  color: #00adb5;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,g=e.p`
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`,h=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,f=e.span`
  background: rgba(0, 173, 181, 0.1);
  color: #00adb5;
  border: 1px solid #00adb5;
  border-radius: 15px;
  font-size: 0.75rem;
  padding: 0.3rem 0.8rem;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }
`,b=e.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`,w=e.a`
  font-size: 1.2rem;
  color: #ccc;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00adb5;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;export{i as P,f as T,s as V,d as a,m as b,n as c,p as d,x as e,c as f,l as g,g as h,h as i,b as j,w as k};
