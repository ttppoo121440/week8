(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{4650:function(e,s,t){Promise.resolve().then(t.bind(t,444))},444:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return P}});var l=t(7437),a=t(6648),i=t(2265),r=t(3872),n=t(9721),c=t(5097);let d=[{href:"#",icon:(0,l.jsx)(n.Lec,{size:20,className:"mr-2"}),text:"我的課程",className:"flex items-center rounded-[12px] bg-[#E5F4FF] px-3 py-2 text-sm font-semibold leading-[21px] tracking-[2ern] text-[#0068FF] mr-2 md:text-base md:leading-6 md:py-4 md:px-8"},{href:"#",icon:(0,l.jsx)(c.C14,{size:20,className:"mr-2"}),text:"我的收藏",className:"flex items-center px-3 py-2 text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#909090] mr-2 md:text-base md:leading-6 md:py-4 md:px-8"},{href:"#",icon:(0,l.jsx)(r.tU3,{size:20,className:"mr-2"}),text:"作品成果",className:"flex items-center px-3 py-2 text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#909090] md:text-base md:leading-6 md:py-4 md:px-8"}];var o=e=>{let{className:s=""}=e;return(0,l.jsx)("ul",{className:s,children:d.map((e,s)=>(0,l.jsx)("li",{className:e.className,children:(0,l.jsxs)("a",{href:e.href,className:"flex items-center",children:[e.icon,e.text]})},s))})};let x=[{title:"我的課程",count:4},{title:"我的收藏",count:2},{title:"作品成果",count:5}];var m=e=>{let{className:s=""}=e;return(0,l.jsx)("ul",{className:s,children:x.map((e,s)=>(0,l.jsxs)("li",{className:"h-[83px] w-[106.33px] text-center",children:[(0,l.jsx)("h4",{className:"text-sm leading-[21px] tracking-[0.02em] text-[#4B4B4B]",children:e.title}),(0,l.jsx)("h5",{className:"text-5xl font-semibold leading-[57.6px] tracking-[0.02em]",children:e.count})]},s))})};let u=[{text:"所有課程 (4)",href:"#",isActive:!0},{text:"正在上課中",href:"#",isActive:!1},{text:"等待開課",href:"#",isActive:!1},{text:"已完課",href:"#",isActive:!1}];var h=()=>(0,l.jsx)("ul",{className:"flex justify-between md:justify-normal",children:u.map((e,s)=>(0,l.jsx)("li",{className:"md:mr-8",children:(0,l.jsxs)("a",{href:e.href,className:"leading-6 tracking-[0.02em] ".concat(e.isActive?"pb-3 font-semibold text-[#0068FF]":"text-[#666666]"),children:[e.text,e.isActive&&(0,l.jsx)("span",{className:"mx-auto mt-3 block h-1 w-8 bg-[#0068FF]"})]})},s))}),f=t(4300),g=t(5137),p=t(1976),N=t(9354),j=t(1538);let b=(0,t(2218).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),v=i.forwardRef((e,s)=>{let{className:t,variant:a,size:i,asChild:r=!1,...n}=e,c=r?j.g7:"button";return(0,l.jsx)(c,{className:(0,N.cn)(b({variant:a,size:i,className:t})),ref:s,...n})});v.displayName="Button";let w=i.createContext(null);function y(){let e=i.useContext(w);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let k=i.forwardRef((e,s)=>{let{orientation:t="horizontal",opts:a,setApi:r,plugins:n,className:c,children:d,...o}=e,[x,m]=(0,f.Z)({...a,axis:"horizontal"===t?"x":"y"},n),[u,h]=i.useState(!1),[g,p]=i.useState(!1),j=i.useCallback(e=>{e&&(h(e.canScrollPrev()),p(e.canScrollNext()))},[]),b=i.useCallback(()=>{null==m||m.scrollPrev()},[m]),v=i.useCallback(()=>{null==m||m.scrollNext()},[m]),y=i.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),b()):"ArrowRight"===e.key&&(e.preventDefault(),v())},[b,v]);return i.useEffect(()=>{m&&r&&r(m)},[m,r]),i.useEffect(()=>{if(m)return j(m),m.on("reInit",j),m.on("select",j),()=>{null==m||m.off("select",j)}},[m,j]),(0,l.jsx)(w.Provider,{value:{carouselRef:x,api:m,opts:a,orientation:t||((null==a?void 0:a.axis)==="y"?"vertical":"horizontal"),scrollPrev:b,scrollNext:v,canScrollPrev:u,canScrollNext:g},children:(0,l.jsx)("div",{ref:s,onKeyDownCapture:y,className:(0,N.cn)("relative",c),role:"region","aria-roledescription":"carousel",...o,children:d})})});k.displayName="Carousel";let C=i.forwardRef((e,s)=>{let{className:t,...a}=e,{carouselRef:i,orientation:r}=y();return(0,l.jsx)("div",{ref:i,className:"overflow-hidden",children:(0,l.jsx)("div",{ref:s,className:(0,N.cn)("flex","horizontal"===r?"-ml-4":"-mt-4 flex-col",t),...a})})});C.displayName="CarouselContent";let F=i.forwardRef((e,s)=>{let{className:t,...a}=e,{orientation:i}=y();return(0,l.jsx)("div",{ref:s,role:"group","aria-roledescription":"slide",className:(0,N.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===i?"pl-4":"pt-4",t),...a})});F.displayName="CarouselItem",i.forwardRef((e,s)=>{let{className:t,variant:a="outline",size:i="icon",...r}=e,{orientation:n,scrollPrev:c,canScrollPrev:d}=y();return(0,l.jsxs)(v,{ref:s,variant:a,size:i,className:(0,N.cn)("absolute  h-8 w-8 rounded-full","horizontal"===n?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!d,onClick:c,...r,children:[(0,l.jsx)(g.Z,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",i.forwardRef((e,s)=>{let{className:t,variant:a="outline",size:i="icon",...r}=e,{orientation:n,scrollNext:c,canScrollNext:d}=y();return(0,l.jsxs)(v,{ref:s,variant:a,size:i,className:(0,N.cn)("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!d,onClick:c,...r,children:[(0,l.jsx)(p.Z,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext";var z=t(7059),D=e=>{let{data:s}=e;return(0,l.jsx)("div",{className:"block pt-10 md:hidden",children:(0,l.jsx)(k,{className:"shadow-card-shadow",plugins:[(0,z.Z)({delay:3e3})],children:(0,l.jsx)(C,{children:s.map(e=>(0,l.jsxs)(F,{className:"relative",children:[(0,l.jsx)(a.default,{src:e.image,alt:"course",width:300,height:200,priority:!0,className:"mr-2 w-full rounded-tl-[20px] rounded-tr-[20px] md:m-0"}),e.discount&&(0,l.jsx)("div",{className:"absolute left-4 top-4 flex h-[37px] w-[101px] items-center justify-center rounded-full bg-[#FFE0D7]",children:(0,l.jsx)("span",{className:"text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#FF3A55]",children:e.discount})}),(0,l.jsxs)("div",{className:"flex flex-grow flex-col",children:[(0,l.jsxs)("div",{className:"flex-grow p-4",children:[(0,l.jsx)("h2",{className:"mb-4 text-xl font-semibold leading-6 tracking-[0.02em]",children:e.title}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(a.default,{src:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",alt:"course",width:32,height:32,priority:!0,className:"mr-2 h-8 w-8 rounded-full"}),(0,l.jsx)("p",{className:"leading-6 tracking-[0.02em] text-[#4B4B4B]",children:e.instructor}),(0,l.jsxs)("div",{className:"ml-auto flex flex-col items-end",children:[(0,l.jsx)("p",{className:"text-xl font-bold leading-[30px] text-[#0068FF]",children:e.price}),(0,l.jsx)("p",{className:"text-sm leading-[21px] text-[#808080] line-through",children:e.originalPrice})]})]})]}),(0,l.jsx)("div",{className:"border-t",children:(0,l.jsx)("div",{className:"p-4",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"mb-1 flex h-[29px] w-[81px] items-center justify-center rounded-full bg-[#ECECEC]",children:e.category}),(0,l.jsxs)("p",{className:"text-sm",children:["已有 ",e.students," 位同學加入"]})]}),(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{className:"mr-1 flex items-center justify-center",children:(0,l.jsx)(c.T8x,{size:12,color:"#F6BD2B",className:"inline-block"})}),(0,l.jsx)("span",{className:"text-sm font-medium leading-[21px]",children:e.rating}),(0,l.jsxs)("span",{className:"text-sm font-medium leading-[21px] text-[#808080]",children:["(",e.reviews,")"]})]})})]})})})]})]},e.id))})})})},E=e=>{let{data:s}=e;return(0,l.jsx)("ul",{className:"mt-10 hidden md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4",children:s.map(e=>(0,l.jsxs)("li",{className:"relative",children:[(0,l.jsx)(a.default,{src:e.image,alt:"course",width:300,height:200,priority:!0,className:"mr-2 w-full rounded-tl-[20px] rounded-tr-[20px] md:m-0"}),e.discount&&(0,l.jsx)("div",{className:"absolute left-4 top-4 flex h-[37px] w-[101px] items-center justify-center rounded-full bg-[#FFE0D7]",children:(0,l.jsx)("span",{className:"text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#FF3A55]",children:e.discount})}),(0,l.jsxs)("div",{className:"flex flex-grow flex-col shadow-card-shadow",children:[(0,l.jsxs)("div",{className:"flex-grow p-4",children:[(0,l.jsx)("h2",{className:"mb-4 text-xl font-semibold leading-6 tracking-[0.02em]",children:e.title}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(a.default,{src:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",alt:"course",width:32,height:32,priority:!0,className:"mr-2 h-8 w-8 rounded-full"}),(0,l.jsx)("p",{className:"leading-6 tracking-[0.02em] text-[#4B4B4B]",children:e.instructor}),(0,l.jsxs)("div",{className:"ml-auto flex flex-col items-end",children:[(0,l.jsx)("p",{className:"text-xl font-bold leading-[30px] text-[#0068FF]",children:e.price}),(0,l.jsx)("p",{className:"text-sm leading-[21px] text-[#808080] line-through",children:e.originalPrice})]})]})]}),(0,l.jsx)("div",{className:"border-t",children:(0,l.jsx)("div",{className:"p-4",children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"mb-1 flex h-[29px] w-[81px] items-center justify-center rounded-full bg-[#ECECEC]",children:e.category}),(0,l.jsxs)("p",{className:"text-sm",children:["已有 ",e.students," 位同學加入"]})]}),(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{className:"mr-1 flex items-center justify-center",children:(0,l.jsx)(c.T8x,{size:12,color:"#F6BD2B",className:"inline-block"})}),(0,l.jsx)("span",{className:"text-sm font-medium leading-[21px]",children:e.rating}),(0,l.jsxs)("span",{className:"text-sm font-medium leading-[21px] text-[#808080]",children:["(",e.reviews,")"]})]})})]})})})]})]},e.id))})};let B=[{id:1,image:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",discount:"限時 8 折 \uD83D\uDD25",title:"小白也會！從零開始學習 Python 程式設計",instructor:"Kelly Hsu",price:"NT$ 2,480",originalPrice:"NT$ 3,200",category:"程式開發",students:420,rating:4,reviews:333},{id:2,image:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",discount:"限時 8 折 \uD83D\uDD25",title:"全面掌握 JavaScript 開發技術",instructor:"Kelly Hsu",price:"NT$ 2,480",originalPrice:"NT$ 3,200",category:"程式開發",students:420,rating:4,reviews:333},{id:3,image:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",title:"HTML & CSS 網頁設計基礎教程",instructor:"Kelly Hsu",price:"NT$ 2,480",originalPrice:"NT$ 3,200",category:"程式開發",students:420,rating:4,reviews:333},{id:4,image:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",title:"更進一步！深入學習 Node.js 與後端開發",instructor:"Kelly Hsu",price:"NT$ 2,480",originalPrice:"NT$ 3,200",category:"程式開發",students:420,rating:4,reviews:333}];var P=()=>(0,l.jsxs)("main",{children:[(0,l.jsx)("section",{className:"bg-[#F9F9F9] px-3 py-10 lg:p-0",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"mb-8 lg:mb-0",children:[(0,l.jsxs)("div",{className:"mb-6 flex lg:mb-0 lg:py-20",children:[(0,l.jsx)(a.default,{src:"https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true",alt:"logo",width:80,height:80,priority:!0,className:"mr-2 lg:mr-6 lg:h-[100px] lg:w-[100px]"}),(0,l.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,l.jsx)("h3",{className:"flex items-center text-[32px] font-semibold leading-[38.4px] tracking-[0.02em] lg:mb-4 lg:text-5xl lg:leading-[57.6px]",children:"Jessica"}),(0,l.jsx)(o,{className:"hidden lg:flex"})]}),(0,l.jsx)(m,{className:"hidden items-center gap-4 lg:ml-auto lg:flex"})]}),(0,l.jsx)(o,{className:"flex justify-between lg:hidden"})]}),(0,l.jsx)(m,{className:"flex gap-4 lg:hidden"})]})}),(0,l.jsxs)("section",{className:"container px-3 pb-[120px] pt-6 md:pb-[160px] md:pt-10 xl:px-0",children:[(0,l.jsx)(h,{}),(0,l.jsx)(D,{data:B}),(0,l.jsx)(E,{data:B})]})]})},9354:function(e,s,t){"use strict";t.d(s,{cn:function(){return i}});var l=t(4839),a=t(6164);function i(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,a.m6)((0,l.W)(s))}}},function(e){e.O(0,[706,305,240,562,926,971,23,744],function(){return e(e.s=4650)}),_N_E=e.O()}]);