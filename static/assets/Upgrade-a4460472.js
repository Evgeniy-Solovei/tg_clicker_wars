import{e as l,j as a,L as d,o as n,r as t,M as u,O as c,p as g}from"./index-4ce5ff13.js";const i="_upgradeBlock_16655_1",o="_upgradeInf_16655_10",A="_upgradeNumbers_16655_20",h="_upgradeTitle_16655_24",j="_upgradeModal_16655_35",x="_upgradeOverlay_16655_38",m="_upgradeContent_16655_42",N="_upgradeBack_16655_47",e={upgradeBlock:i,upgradeInf:o,upgradeNumbers:A,upgradeTitle:h,upgradeModal:j,upgradeOverlay:x,upgradeContent:m,upgradeBack:N},y="_upgradeList_n1a4a_1",k="_upgradeLink_n1a4a_7",B="_upgradeLinkActive_n1a4a_16",p={upgradeList:y,upgradeLink:k,upgradeLinkActive:B},F=[{key:1,path:"/upgrades/army",label:"Army"},{key:2,path:"/upgrades/passive",label:"Passive"},{key:3,path:"/upgrades/special",label:"Special"}],b=()=>{const r=l();return a.jsx("ul",{className:p.upgradeList,children:F.map(s=>a.jsx("li",{children:a.jsx(d,{className:r.pathname===s.path?p.upgradeLinkActive:p.upgradeLink,to:s.path,children:s.label})},s.key))})},M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARNSURBVHgB7ZZdTFtlHMafc9rSj9OvU6FQmMAKjg+FiIMF2TCBkE0CUdRAcJGoS2DMmJipF3hFuFOzqFfLEj8Spy7bNO5Gw4KTsenGh26wWlpk7ShdGaWUftDSntOe9nhY4qX9YPFqey7PefN78n//z/t/X+CR/kcRyFLDwyD1FqlRFE2UcGJAwnKOo6OwZ8PIyvSzbmlFIZ07pi8sKpbJFcKXBII+H3w+78/+rbW+t87AnwlHjCxEssl3DnW2FyspDbg4A1IsASGSwGI2d1wb/6UO4MYz4WRlqiZFNyyTYzCWGhBY9wimYmhUSthNDnAct5Qph8xkES+0objjsPEM2dLhDUSQCG2A1iihoeTYWHXB7QM+lfb3D1cjJxNeWlOeB3G0z/h4wTOtN2veO/XSPR8HbyiBGMuBZRNwukMIlzWj5djQB6efGJjYDtoDmxIEeIapLgCl1SgeMyD5xleYWlXiwjU7RqeW4dQ1QvHaR9DmFiKhLTCMjCCZjplRTw8/O2cbmJ2H/ckWxNXNKD8+jToVh02GxOJmAvYVFjbnXXDe27ZMeBmZHjru8iu6nWO2mYmDsuda4HZyuLL9g48jRyqGUs3BYR2Hjgt/fi8DXsbntKur6enxeN1lhs/RKmkt5FIKCT6CGMMi7PNjlyjk+JD6przne+HwplFm6T0PEVlQ9iqUOm1e0wAY3X6sS8oRyKkDk98BbcMgQpSh5Bz9Sv399XzqYtJWug1o7u06cUex/93ahh5IaCnyjQp4GEYIWQy5MhkCazy8Sx5Yrp71aTRbbbYvP5lNxRSlM50MDrbORWtPHWjvx7LPht1lUyjNNaHJYECVjsUWM4oNdgM+txx7KhvlTvN0T3NFxQ+2hVv+HZuG6NrRvQdfz10R+lZTfRJvH/gb9XQQ+1RFqKS8MNJX0FRixujsKhLiJnAEKV+8a/NH7bMT/8VMl16CVRVVyNQGhNcvQ8JYYVrbA7UsBLv4RyFICUQSEXgZDsVFU7hh6UKpsRbrixebUkFTBun0+8o8khAhKTQ2xsWEe0yCObsLq8I0usP4scxuws3GYXf5QZC80P8kSIKEhGP1qbgpK+07EV4ffCEMIh4HJS/FWtCIfCzBbF6BSpUjRFqMQDACjheGg7sdelqHTe+asD/RCHZaqRBtPi+xenPhr0soLSjF9EwvHN4yQMEhFAsjIAQISilMSy/C5+mETqOB1fQr9FLFH9hppduief/QguX6GCXXonFvA24782FZ3EA85gKSckgVeujVhagqVmJ+8jxifo/DQHw9YkLKYlJr+5xW9r45uBSkTlJ0ARrbWtFYWYiXa/T35+5Fqxd//j4P6+xvQDzoqlWHO2fOfXsLD2L6r44NPd991lw1yMYjrawoB2SSEK4TDryIFHZ7K6SiqEu7+auD1y+YPOlYWT/M9h05Us9HQ232KC3bJWNpIhK2PlVJ//Tdx1+48EgPrf4BxI7DFcEBtE0AAAAASUVORK5CYII=";function C(){const r=l(),s=n();return t.useEffect(()=>{r.pathname==="/upgrades"&&s("army")},[r.pathname,s]),a.jsx(u,{classNameModal:e.upgradeModal,classNameOverlay:e.upgradeOverlay,classNameContent:e.upgradeContent,children:a.jsxs("div",{className:e.upgradeBlock,children:[a.jsxs("h2",{className:e.upgradeTitle,children:[a.jsx("img",{src:M,alt:"upgradeIcon"}),a.jsx("span",{children:"Upgrades"})]}),a.jsx(b,{}),a.jsxs("div",{className:e.upgradeInf,children:[a.jsxs("p",{children:["Total army count:",a.jsx("span",{className:e.upgradeNumbers,children:"35 000"})]}),a.jsxs("p",{children:["Total army damage:",a.jsx("span",{className:e.upgradeNumbers,children:"35 000"})]})]}),a.jsx(c,{}),a.jsx(d,{className:e.upgradeBack,to:"/",children:a.jsx("img",{src:g,alt:"домой"})})]})})}export{C as default};