import {SafeHtml} from '@angular/platform-browser';

import {TextContentFilterType} from '@store/text-content-config/text-content-config.store.type';

export interface TextContentTool {
  title: string;
  route: string;
  svgIcon: SafeHtml | string;
  category: TextContentFilterType | TextContentFilterType[];
}

export interface ToolCategory {
  title: string;
  tools: TextContentTool[];
}

export const SVG_ICONS = {
  captionGenerator: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 190 121"><g clip-path="url(#a)"><g filter="url(#b)"><path fill="url(#c)" d="m139.69 5.92-.144.022c-17.422 2.717-29.343 19.047-26.625 36.475l.023.144c2.717 17.427 19.044 29.352 36.467 26.635l.144-.022c17.422-2.717 29.342-19.048 26.624-36.475l-.022-.144C173.439 15.128 157.112 3.203 139.69 5.92Z"/><g fill="#fff"><path d="m151.41 17.274-19.567 3.051c-5.406.843-9.118 5.928-8.274 11.335l2.792 17.907c.843 5.407 5.927 9.12 11.333 8.277l19.567-3.052c5.405-.843 9.117-5.927 8.274-11.335l-2.793-17.906c-.843-5.407-5.927-9.12-11.332-8.277ZM127.027 31.12a6.43 6.43 0 0 1 5.355-7.336l19.567-3.052c3.498-.545 6.789 1.858 7.335 5.358l2.792 17.906a6.43 6.43 0 0 1-5.355 7.336l-19.567 3.052a6.431 6.431 0 0 1-7.335-5.358l-2.792-17.906Z"/><path d="M145.974 46.678c5.026-.784 8.48-5.513 7.696-10.543-.785-5.031-5.512-8.484-10.541-7.7-5.03.785-8.481 5.513-7.697 10.544.785 5.03 5.513 8.483 10.542 7.7Zm-2.306-14.781a5.736 5.736 0 0 1 6.544 4.78 5.736 5.736 0 0 1-4.778 6.544 5.735 5.735 0 0 1-6.543-4.78 5.736 5.736 0 0 1 4.777-6.544ZM153.321 28.355a2.488 2.488 0 1 0-2.84-2.074 2.489 2.489 0 0 0 2.84 2.074Z"/></g></g><g filter="url(#d)"><path fill="#000" d="M76.767 51.45c-2.208 16.015-15.9 27.618-31.614 27.641a32.429 32.429 0 0 1-9.477-1.408C20.92 73.17 11.196 58.49 13.372 42.709c2.414-17.512 18.565-29.752 36.072-27.338 17.507 2.414 29.742 18.568 27.328 36.08h-.005Z"/><path fill="#fff" d="m28.671 26.756 11.924 21.568-16.902 13.869 3.311.456 14.8-12.141L50.29 65.86l11.268 1.553-12.594-22.78 15.733-12.91-3.311-.456L47.758 42.45 39.941 28.31l-11.267-1.553h-.003Zm4.533 3.111 5.175.714 18.643 33.721-5.175-.714-18.643-33.72Z"/></g><g filter="url(#e)"><path fill="#1877F2" d="M126.867 60.949c1.006 16.135-10.12 30.22-25.518 33.353a32.422 32.422 0 0 1-9.569.495C76.42 93.296 63.982 80.83 62.991 64.93c-1.1-17.645 12.31-32.84 29.946-33.94 17.637-1.099 32.831 12.314 33.93 29.959Z"/><path fill="#fff" d="m98.985 56.365.433 6.96 8.607-.537-.778 9.46-7.244.452 1.346 21.6a32.429 32.429 0 0 1-9.569.495l-1.34-21.5-7.938.495-.584-9.375 7.938-.495-.53-8.515c-.33-5.283 3.684-9.834 8.968-10.164v.005c.016-.001.029-.006.044-.007l8.562-.534.506 8.108-5.595.349a3.02 3.02 0 0 0-2.824 3.2l-.002.003Z"/></g></g><defs><filter id="b" width="105.031" height="107.048" x="108.535" y="2.534" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="1" dy="2"/><feGaussianBlur stdDeviation="2.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="6" dy="7"/><feGaussianBlur stdDeviation="4.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/><feBlend in2="effect1_dropShadow_108_1486" result="effect2_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="13" dy="15"/><feGaussianBlur stdDeviation="6"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend in2="effect2_dropShadow_108_1486" result="effect3_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="23" dy="26"/><feGaussianBlur stdDeviation="7"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/><feBlend in2="effect3_dropShadow_108_1486" result="effect4_dropShadow_108_1486"/><feBlend in="SourceGraphic" in2="effect4_dropShadow_108_1486" result="shape"/></filter><filter id="d" width="119.008" height="96.024" x="-38.932" y="-8.933" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-2" dy="-1"/><feGaussianBlur stdDeviation="2.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-9" dy="-2"/><feGaussianBlur stdDeviation="4.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/><feBlend in2="effect1_dropShadow_108_1486" result="effect2_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-21" dy="-5"/><feGaussianBlur stdDeviation="6.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend in2="effect2_dropShadow_108_1486" result="effect3_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-37" dy="-9"/><feGaussianBlur stdDeviation="7.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/><feBlend in2="effect3_dropShadow_108_1486" result="effect4_dropShadow_108_1486"/><feBlend in="SourceGraphic" in2="effect4_dropShadow_108_1486" result="shape"/></filter><filter id="e" width="124.002" height="126.021" x="7.928" y="25.928" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-2" dy="2"/><feGaussianBlur stdDeviation="3.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-9" dy="9"/><feGaussianBlur stdDeviation="6.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/><feBlend in2="effect1_dropShadow_108_1486" result="effect2_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-20" dy="21"/><feGaussianBlur stdDeviation="8.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/><feBlend in2="effect2_dropShadow_108_1486" result="effect3_dropShadow_108_1486"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-35" dy="37"/><feGaussianBlur stdDeviation="10"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/><feBlend in2="effect3_dropShadow_108_1486" result="effect4_dropShadow_108_1486"/><feBlend in="SourceGraphic" in2="effect4_dropShadow_108_1486" result="shape"/></filter><linearGradient id="c" x1="125.662" x2="163.454" y1="63.434" y2="11.695" gradientUnits="userSpaceOnUse"><stop stop-color="#FAAD4F"/><stop offset=".35" stop-color="#DD2A7B"/><stop offset=".62" stop-color="#9537B0"/><stop offset="1" stop-color="#515BD4"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 .5h190v120H0z"/></clipPath></defs></svg>`,

  blogPostGenerator: `<svg width="190" height="120" viewBox="0 0 190 120" fill="none"
xmlns="http://www.w3.org/2000/svg"
class="shared-tool-card__icon chat-select-tool__popular-tool-icon w-100"
>
<g clip-path="url(#clip0_251_4368)">
<g filter="url(#filter0_d_251_4368)">
<rect
x="19"
y="1"
width="155"
height="142"
rx="12"
fill="var(--image-gray)"
/>
</g>
<rect
x="27"
y="9"
width="60"
height="14"
rx="5"
fill="var(--background-neutral-secondary)"
/>
<rect
x="27"
y="29"
width="122"
height="14"
rx="5"
fill="var(--background-neutral-secondary)"
/>
<rect
x="27"
y="51"
width="139"
height="116"
rx="10"
fill="var(--background-neutral-primary)"
/>
<g filter="url(#filter1_d_251_4368)">
<g filter="url(#filter2_d_251_4368)">
<path
d="M58.8924 55.7113L54.3338 39.7198C54.0984 38.8941 54.956 38.181 55.7358 38.5541L70.8385 45.7792C71.6416 46.1633 71.5812 47.3159 70.7425 47.6131L64.5312 49.8139C64.3056 49.8938 64.1164 50.0511 63.9978 50.2573L60.7318 55.9361C60.2908 56.7028 59.1347 56.5616 58.8924 55.7113Z"
fill="var(--background-brand-primary)"
/>
<path
d="M53.8505 39.8544L58.4091 55.846C58.7726 57.1214 60.5067 57.3332 61.1682 56.1831L64.4342 50.5043C64.4935 50.4012 64.5881 50.3226 64.7009 50.2826L70.9122 48.0818C72.1703 47.6361 72.2608 45.9072 71.0563 45.331L55.9536 38.1059C54.7838 37.5463 53.4974 38.6158 53.8505 39.8544Z"
stroke="var(--background-brand-primary)"
/>
</g>
</g>
<g filter="url(#filter3_d_251_4368)">
<path
d="M69 70C69 61.1634 76.1634 54 85 54H137C145.837 54 153 61.1634 153 70C153 78.8366 145.837 86 137 86H85C76.1634 86 69 78.8366 69 70Z"
fill="var(--background-brand-primary)"
shape-rendering="crispEdges"
/>
<path
d="M80.9787 75H79.348L83.0121 64.8182H84.7869L88.451 75H86.8203L83.9418 66.6676H83.8622L80.9787 75ZM81.2521 71.0128H86.5419V72.3054H81.2521V71.0128ZM91.4576 64.8182V75H89.9213V64.8182H91.4576Z"
fill="white"
/>
<path
d="M97.3999 75V64.8182H103.783V66.1406H98.9361V69.2429H103.45V70.5604H98.9361V73.6776H103.843V75H97.3999ZM108.575 75.1491C107.958 75.1491 107.408 74.9917 106.924 74.6768C106.444 74.3587 106.066 73.9062 105.791 73.3196C105.519 72.7296 105.383 72.022 105.383 71.1967C105.383 70.3714 105.521 69.6655 105.796 69.0788C106.074 68.4922 106.455 68.0431 106.939 67.7315C107.423 67.42 107.972 67.2642 108.585 67.2642C109.059 67.2642 109.44 67.3438 109.728 67.5028C110.02 67.6586 110.245 67.8409 110.404 68.0497C110.567 68.2585 110.693 68.4425 110.782 68.6016H110.872V64.8182H112.358V75H110.906V73.8118H110.782C110.693 73.9742 110.563 74.1598 110.394 74.3686C110.229 74.5774 110 74.7597 109.708 74.9155C109.417 75.0713 109.039 75.1491 108.575 75.1491ZM108.903 73.8814C109.33 73.8814 109.692 73.7687 109.987 73.5433C110.285 73.3146 110.51 72.9981 110.663 72.5938C110.819 72.1894 110.896 71.7187 110.896 71.1818C110.896 70.6515 110.82 70.1875 110.668 69.7898C110.515 69.392 110.292 69.0821 109.997 68.8601C109.702 68.638 109.337 68.527 108.903 68.527C108.455 68.527 108.083 68.643 107.784 68.875C107.486 69.107 107.261 69.4235 107.108 69.8246C106.959 70.2256 106.884 70.678 106.884 71.1818C106.884 71.6922 106.961 72.1513 107.113 72.5589C107.266 72.9666 107.491 73.2898 107.789 73.5284C108.091 73.7637 108.462 73.8814 108.903 73.8814ZM114.48 75V67.3636H115.966V75H114.48ZM115.23 66.1854C114.972 66.1854 114.75 66.0992 114.564 65.9268C114.382 65.7512 114.291 65.5424 114.291 65.3004C114.291 65.0552 114.382 64.8464 114.564 64.674C114.75 64.4983 114.972 64.4105 115.23 64.4105C115.489 64.4105 115.709 64.4983 115.892 64.674C116.077 64.8464 116.17 65.0552 116.17 65.3004C116.17 65.5424 116.077 65.7512 115.892 65.9268C115.709 66.0992 115.489 66.1854 115.23 66.1854ZM121.531 67.3636V68.5568H117.36V67.3636H121.531ZM118.478 65.5341H119.965V72.7578C119.965 73.0462 120.008 73.2633 120.094 73.4091C120.18 73.5516 120.291 73.6494 120.427 73.7024C120.566 73.7521 120.717 73.777 120.879 73.777C120.999 73.777 121.103 73.7687 121.193 73.7521C121.282 73.7356 121.352 73.7223 121.401 73.7124L121.67 74.9403C121.584 74.9735 121.461 75.0066 121.302 75.0398C121.143 75.0762 120.944 75.0961 120.705 75.0994C120.314 75.1061 119.95 75.0365 119.612 74.8906C119.274 74.7448 119 74.5194 118.791 74.2145C118.583 73.9096 118.478 73.5268 118.478 73.0661V65.5341ZM123.175 75V67.3636H124.662V75H123.175ZM123.926 66.1854C123.667 66.1854 123.445 66.0992 123.26 65.9268C123.077 65.7512 122.986 65.5424 122.986 65.3004C122.986 65.0552 123.077 64.8464 123.26 64.674C123.445 64.4983 123.667 64.4105 123.926 64.4105C124.184 64.4105 124.405 64.4983 124.587 64.674C124.773 64.8464 124.865 65.0552 124.865 65.3004C124.865 65.5424 124.773 65.7512 124.587 65.9268C124.405 66.0992 124.184 66.1854 123.926 66.1854ZM128.148 70.4659V75H126.661V67.3636H128.088V68.6065H128.183C128.358 68.2022 128.633 67.8774 129.008 67.6321C129.386 67.3868 129.861 67.2642 130.435 67.2642C130.955 67.2642 131.411 67.3736 131.802 67.5923C132.193 67.8078 132.496 68.1293 132.712 68.5568C132.927 68.9844 133.035 69.513 133.035 70.1428V75H131.548V70.3217C131.548 69.7682 131.404 69.3357 131.116 69.0241C130.828 68.7093 130.432 68.5518 129.928 68.5518C129.583 68.5518 129.276 68.6264 129.008 68.7756C128.743 68.9247 128.532 69.1435 128.377 69.4318C128.224 69.7169 128.148 70.0616 128.148 70.4659ZM138.23 78.0227C137.624 78.0227 137.102 77.9432 136.664 77.7841C136.23 77.625 135.875 77.4145 135.6 77.1527C135.325 76.8909 135.12 76.6042 134.984 76.2926L136.262 75.7656C136.351 75.9115 136.47 76.0656 136.619 76.228C136.772 76.3937 136.977 76.5346 137.236 76.6506C137.498 76.7666 137.834 76.8246 138.245 76.8246C138.809 76.8246 139.274 76.687 139.642 76.4119C140.01 76.1402 140.194 75.706 140.194 75.1094V73.608H140.1C140.01 73.7704 139.881 73.951 139.712 74.1499C139.546 74.3487 139.317 74.5211 139.026 74.6669C138.734 74.8127 138.355 74.8857 137.887 74.8857C137.284 74.8857 136.74 74.7448 136.257 74.4631C135.776 74.178 135.395 73.7588 135.113 73.2053C134.835 72.6484 134.695 71.964 134.695 71.152C134.695 70.34 134.833 69.6439 135.108 69.0639C135.387 68.4839 135.768 68.0398 136.252 67.7315C136.735 67.42 137.284 67.2642 137.897 67.2642C138.371 67.2642 138.754 67.3438 139.046 67.5028C139.337 67.6586 139.564 67.8409 139.727 68.0497C139.892 68.2585 140.02 68.4425 140.11 68.6016H140.219V67.3636H141.676V75.169C141.676 75.8253 141.523 76.3639 141.218 76.7848C140.913 77.2057 140.501 77.5173 139.98 77.7195C139.463 77.9216 138.88 78.0227 138.23 78.0227ZM138.215 73.6527C138.643 73.6527 139.004 73.5533 139.299 73.3544C139.597 73.1522 139.823 72.8639 139.975 72.4893C140.131 72.1115 140.209 71.6591 140.209 71.1321C140.209 70.6184 140.133 70.166 139.98 69.7749C139.828 69.3838 139.604 69.0788 139.309 68.8601C139.014 68.638 138.65 68.527 138.215 68.527C137.768 68.527 137.395 68.643 137.097 68.875C136.798 69.1037 136.573 69.4152 136.421 69.8097C136.271 70.2041 136.197 70.6449 136.197 71.1321C136.197 71.6326 136.273 72.0717 136.426 72.4496C136.578 72.8274 136.803 73.1224 137.102 73.3345C137.403 73.5466 137.775 73.6527 138.215 73.6527Z"
fill="white"
fill-opacity="0.5"
/>
</g>
</g>
<defs>
<filter
id="filter0_d_251_4368"
x="-9.3"
y="1"
width="219.6"
height="228.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_251_4368"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_251_4368"
result="shape"
/>
</filter>
<filter
id="filter1_d_251_4368"
x="34.5878"
y="22.7543"
width="56.5243"
height="57.3792"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dy="4" />
<feGaussianBlur stdDeviation="9.35" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0.00392157 0 0 0 0 0.4 0 0 0 0 0.882353 0 0 0 0.2 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_251_4368"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_251_4368"
result="shape"
/>
</filter>
<filter
id="filter2_d_251_4368"
x="51.2878"
y="36.4543"
width="23.1243"
height="23.9792"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dy="1" />
<feGaussianBlur stdDeviation="1" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_251_4368"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_251_4368"
result="shape"
/>
</filter>
<filter
id="filter3_d_251_4368"
x="58.9"
y="45.9"
width="112.2"
height="60.2"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="6" />
<feGaussianBlur stdDeviation="7.05" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"values="0 0 0 0 0.0823529 0 0 0 0 0.439216 0 0 0 0 0.937255 0 0 0 0.12 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_251_4368" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_251_4368" result="shape"/></filter><clipPath id="clip0_251_4368"><rect width="190" height="120" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>`,

  contentIdeaGenerator: `<svg
width="190"
height="120"
viewBox="0 0 190 120"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#clip0_280_4396)">
<g filter="url(#filter0_d_280_4396)">
<rect
x="19"
y="0.5"
width="155"
height="142"
rx="12"
fill="var(--image-gray)"
/>
</g>
<rect
x="27"
y="28.5"
width="60"
height="14"
rx="5"
fill="var(--background-neutral-secondary)"
/>
<rect
x="27"
y="8.5"
width="122"
height="14"
rx="5"
fill="var(--background-neutral-secondary)"
/>
<rect
x="27"
y="49"
width="45"
height="14"
rx="5"
fill="var(--background-neutral-secondary)"
/>
<circle
cx="116.55"
cy="86.4302"
r="3.10352"
transform="rotate(10.5483 116.55 86.4302)"
fill="url(#paint0_radial_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint1_linear_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint2_linear_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint3_radial_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint4_linear_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint5_radial_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint6_radial_280_4396)"
/>
<rect
x="112.682"
y="75.1543"
width="11.8672"
height="11.7578"
rx="2.1875"
transform="rotate(10.5483 112.682 75.1543)"
fill="url(#paint7_radial_280_4396)"
/>
<path
d="M118.02 77.5676C118.052 77.5738 118.083 77.5796 118.113 77.5851C119.069 77.7588 121.276 78.1314 122.187 78.1352C123.166 78.1394 123.376 77.6904 123.682 76.9811C125.568 72.6091 127.633 71.1777 129.014 70.22C129.227 70.0723 129.423 69.936 129.601 69.8018C130.208 69.342 130.736 68.9357 131.14 68.6214C134.145 66.4251 136.352 63.1222 137.087 59.1737C138.617 50.9562 133.196 43.0542 124.979 41.524C116.761 39.9939 108.859 45.415 107.329 53.6324C106.603 57.5328 107.442 61.3622 109.404 64.4729C109.675 64.9246 110.046 65.5366 110.483 66.2419C110.559 66.3646 110.642 66.491 110.731 66.6233C110.78 66.6949 110.829 66.7681 110.88 66.8433C111.824 68.234 113.235 70.3126 113.421 75.0706C113.452 75.8425 113.486 76.337 114.4 76.6852C115.25 77.009 117.024 77.3774 117.925 77.5496C117.954 77.5551 117.986 77.5614 118.02 77.5676Z"
fill="url(#paint8_radial_280_4396)"
/>
<path
d="M118.02 77.5676C118.052 77.5738 118.083 77.5796 118.113 77.5851C119.069 77.7588 121.276 78.1314 122.187 78.1352C123.166 78.1394 123.376 77.6904 123.682 76.9811C125.568 72.6091 127.633 71.1777 129.014 70.22C129.227 70.0723 129.423 69.936 129.601 69.8018C130.208 69.342 130.736 68.9357 131.14 68.6214C134.145 66.4251 136.352 63.1222 137.087 59.1737C138.617 50.9562 133.196 43.0542 124.979 41.524C116.761 39.9939 108.859 45.415 107.329 53.6324C106.603 57.5328 107.442 61.3622 109.404 64.4729C109.675 64.9246 110.046 65.5366 110.483 66.2419C110.559 66.3646 110.642 66.491 110.731 66.6233C110.78 66.6949 110.829 66.7681 110.88 66.8433C111.824 68.234 113.235 70.3126 113.421 75.0706C113.452 75.8425 113.486 76.337 114.4 76.6852C115.25 77.009 117.024 77.3774 117.925 77.5496C117.954 77.5551 117.986 77.5614 118.02 77.5676Z"
fill="url(#paint9_radial_280_4396)"
/>
<circle
cx="126.067"
cy="50.5562"
r="5.82422"
transform="rotate(10.5483 126.067 50.5562)"
fill="url(#paint10_linear_280_4396)"
/>
<path
d="M117.524 77.4705C118.16 73.7222 118.32 71.2059 118.186 69.4086C118.031 67.337 117.483 66.217 116.855 65.2928L116.848 65.2812L116.839 65.2698C116.023 64.1483 115.654 62.7095 115.927 61.2401C116.455 58.4045 119.182 56.5338 122.018 57.0618C124.854 57.5898 126.724 60.3166 126.196 63.1523C125.923 64.6217 125.06 65.831 123.895 66.5836L123.883 66.5913L123.872 66.5993C122.97 67.2241 122.058 68.0054 121.164 69.865C120.391 71.4737 119.632 73.8875 118.858 77.715C119.378 77.8032 120.002 77.9029 120.589 77.983C121.345 74.2647 122.063 72.0348 122.742 70.6228C123.477 69.0929 124.16 68.5291 124.857 68.0455C126.403 67.0422 127.552 65.429 127.917 63.4726C128.622 59.6868 126.124 56.0463 122.338 55.3414C118.552 54.6364 114.912 57.134 114.207 60.9198C113.843 62.8761 114.334 64.7949 115.415 66.2873C115.88 66.9736 116.311 67.8028 116.441 69.5391C116.559 71.1253 116.425 73.4596 115.813 77.0948C116.403 77.2387 117.028 77.3713 117.524 77.4705Z"
fill="#FFAD55"
/>
<path
d="M120.006 77.5271C121.534 69.3188 123.036 68.2438 124.639 67.1336C125.997 66.256 127.006 64.843 127.325 63.1275C127.942 59.8168 125.758 56.6331 122.447 56.0166C119.136 55.4002 115.952 57.5843 115.336 60.895C115.016 62.6105 115.449 64.2918 116.4 65.5996C117.496 67.2122 118.308 69.8015 116.975 76.9627"
stroke="url(#paint11_linear_280_4396)"
stroke-width="0.4375"
/>
<rect
x="109.557"
y="83.9907"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 109.557 83.9907)"
fill="url(#paint12_linear_280_4396)"
/>
<rect
x="109.557"
y="83.9907"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 109.557 83.9907)"
fill="url(#paint13_linear_280_4396)"
/>
<rect
x="109.557"
y="83.9907"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 109.557 83.9907)"
fill="url(#paint14_linear_280_4396)"
/>
<rect
x="109.557"
y="83.9907"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 109.557 83.9907)"
fill="url(#paint15_radial_280_4396)"
/>
<rect
x="110.317"
y="79.9023"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 110.317 79.9023)"
fill="url(#paint16_linear_280_4396)"
/>
<rect
x="110.317"
y="79.9023"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 110.317 79.9023)"
fill="url(#paint17_linear_280_4396)"
/>
<rect
x="110.317"
y="79.9023"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 110.317 79.9023)"
fill="url(#paint18_linear_280_4396)"
/>
<rect
x="110.317"
y="79.9023"
width="14.5605"
height="1.92818"
rx="0.964089"
transform="rotate(1.64332 110.317 79.9023)"
fill="url(#paint19_radial_280_4396)"
/>
</g>
<defs>
<filter
id="filter0_d_280_4396"
x="-9.3"
y="0.5"
width="219.6"
height="228.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_280_4396"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_280_4396"
result="shape"
/>
</filter>
<radialGradient
id="paint0_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(117.371 88.1939) rotate(96.6544) scale(1.65175 3.82575)"
>
<stop offset="0.267752" stop-color="#909AC6" />
<stop offset="1" stop-color="#6A81AA" />
</radialGradient>
<linearGradient
id="paint1_linear_280_4396"
x1="124.549"
y1="81.5061"
x2="112.682"
y2="81.5061"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#C2C7D1" />
<stop offset="1" stop-color="#7C8294" />
</linearGradient>
<linearGradient
id="paint2_linear_280_4396"
x1="112.096"
y1="82.4004"
x2="114.994"
y2="82.4004"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#7B848A" />
<stop offset="1" stop-color="#7B848A" stop-opacity="0" />
</linearGradient>
<radialGradient
id="paint3_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(121.062 75.9742) rotate(88.6361) scale(1.44352 6.42673)"
>
<stop offset="0.228769" stop-color="#E2E6ED" />
<stop offset="1" stop-color="#BCC5CB" stop-opacity="0" />
</radialGradient>
<linearGradient
id="paint4_linear_280_4396"
x1="121.338"
y1="86.9121"
x2="121.338"
y2="84.6973"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#666B93" />
<stop offset="1" stop-color="#666B93" stop-opacity="0" />
</linearGradient>
<radialGradient
id="paint5_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(122.229 76.6759) rotate(90) scale(1.48203 2.90139)"
>
<stop stop-color="#E7DFE7" />
<stop offset="1" stop-color="#E7DFE7" stop-opacity="0" />
</radialGradient>
<radialGradient
id="paint6_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(117.178 81.0332) rotate(-7.17767) scale(7.42911 0.461531)"
>
<stop offset="0.946697" stop-color="#666B93" />
<stop offset="1" stop-color="#666B93" stop-opacity="0" />
</radialGradient>
<radialGradient
id="paint7_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(117.328 85.328) rotate(-7.95308) scale(7.00513 0.435191)"
>
<stop offset="0.946697" stop-color="#666A93" />
<stop offset="1" stop-color="#667093" stop-opacity="0" />
</radialGradient>
<radialGradient
id="paint8_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(129.293 53.2439) rotate(148.615) scale(17.349 14.3058)"
>
<stop offset="0.286168" stop-color="#FFEC87" />
<stop offset="1" stop-color="#FFCD4B" />
</radialGradient>
<radialGradient
id="paint9_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(129.204 62.684) rotate(-137.056) scale(25.5184 24.5452)"
>
<stop offset="0.622387" stop-color="#FFB239" stop-opacity="0" />
<stop offset="1" stop-color="#FFB239" />
</radialGradient>
<linearGradient
id="paint10_linear_280_4396"
x1="124.03"
y1="52.4362"
x2="130.018"
y2="47.7705"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="white" stop-opacity="0" />
<stop offset="0.594121" stop-color="white" />
</linearGradient>
<linearGradient
id="paint11_linear_280_4396"
x1="128.655"
y1="58.2372"
x2="118.707"
y2="73.3707"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#FFBF5C" />
<stop offset="1" stop-color="#FFBF5C" stop-opacity="0" />
</linearGradient>
<linearGradient
id="paint12_linear_280_4396"
x1="116.661"
y1="84.007"
x2="116.798"
y2="86.132"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#969AB1" />
<stop offset="1" stop-color="#D2D7E2" />
</linearGradient>
<linearGradient
id="paint13_linear_280_4396"
x1="118.36"
y1="85.8785"
x2="118.356"
y2="84.494"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#6883A9" />
<stop offset="1" stop-color="#C2C6E3" stop-opacity="0" />
</linearGradient>
<linearGradient
id="paint14_linear_280_4396"
x1="109.386"
y1="85.0813"
x2="114.263"
y2="84.8215"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#838595" />
<stop offset="1" stop-color="#848395" stop-opacity="0" />
</linearGradient>
<radialGradient
id="paint15_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(121.625 84.649) rotate(90.3213) scale(1.46564 8.67495)"
>
<stop offset="0.126697" stop-color="#F0F5FC" />
<stop offset="1" stop-color="#C9D0E5" stop-opacity="0" />
</radialGradient>
<linearGradient
id="paint16_linear_280_4396"
x1="117.421"
y1="79.9186"
x2="117.559"
y2="82.0436"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#969AB1" />
<stop offset="1" stop-color="#D2D7E2" />
</linearGradient>
<linearGradient
id="paint17_linear_280_4396"
x1="119.121"
y1="81.7902"
x2="119.116"
y2="80.4056"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#6883A9" />
<stop offset="1" stop-color="#C2C6E3" stop-opacity="0" />
</linearGradient>
<linearGradient
id="paint18_linear_280_4396"
x1="110.147"
y1="80.9929"
x2="115.024"
y2="80.7331"
gradientUnits="userSpaceOnUse"
>
<stop stop-color="#838595" />
<stop offset="1" stop-color="#848395" stop-opacity="0" />
</linearGradient>
<radialGradient
id="paint19_radial_280_4396"
cx="0"
cy="0"
r="1"
gradientUnits="userSpaceOnUse"
gradientTransform="translate(122.386 80.5606) rotate(90.3213) scale(1.46564 8.67495)"
>
<stop offset="0.126697" stop-color="#F0F5FC" />
<stop offset="1" stop-color="#C9D0E5" stop-opacity="0" />
</radialGradient>
<clipPath id="clip0_280_4396">
<rect width="190" height="120" fill="white" />
</clipPath>
</defs></svg>`,

  AIStorytellingAssistant: `<svg
xmlns="http://www.w3.org/2000/svg"
width="190"
height="120"
viewBox="0 0 190 120"
fill="none"
>
<g clip-path="url(#clip0_278_2775)">
<g filter="url(#filter0_d_278_2775)">
<rect
x="63"
y="24"
width="64"
height="64"
rx="12"
fill="var(--image-gray)"
/>
</g>
<g filter="url(#filter1_d_278_2775)">
<rect
x="143"
y="24"
width="64"
height="64"
rx="12"
fill="var(--image-gray)"
/>
</g>
<g filter="url(#filter2_d_278_2775)">
<rect
x="103"
y="96"
width="64"
height="64"
rx="12"
fill="var(--image-gray)"
/>
</g>
<g filter="url(#filter3_d_278_2775)">
<rect
x="23"
y="96"
width="64"
height="64"
rx="12"
fill="var(--image-gray)"
/>
</g>
<g filter="url(#filter4_d_278_2775)">
<rect
x="-17"
y="24"
width="64"
height="64"
rx="12"
fill="var(--image-gray)"
/>
</g>
<rect
x="121"
y="54.1963"
width="26"
height="4"
rx="2"
fill="var(--background-neutral-primary-inverse)"
/>
<path
d="M111.887 53.1387C109.78 54.7091 109.851 57.9409 112.098 59.4004L112.338 59.5449C114.846 60.9365 118 59.1328 118 56.1963C118 53.1651 114.64 51.3411 112.098 52.9922L111.887 53.1387Z"
stroke="var(--background-neutral-primary-inverse)"
stroke-width="2"
/>
<path
d="M149.709 55.3575C150.316 55.7518 150.316 56.6405 149.709 57.0348L144.545 60.389C143.879 60.8211 143 60.3436 143 59.5504L143 52.8419C143 52.0487 143.879 51.5712 144.545 52.0033L149.709 55.3575Z"
fill="var(--background-neutral-primary-inverse)"
/>
<rect
width="26"
height="4"
rx="2"
transform="matrix(-1 0 0 1 70 54.1963)"
fill="var(--background-neutral-primary-inverse)"
/>
<path
d="M79.1133 53.1387C81.2196 54.7091 81.1493 57.9409 78.9023 59.4004L78.6621 59.5449C76.1539 60.9365 73.0001 59.1328 73 56.1963C73 53.1651 76.3603 51.3411 78.9023 52.9922L79.1133 53.1387Z"
stroke="var(--background-neutral-primary-inverse)"
stroke-width="2"
/>
<path
d="M41.2912 55.3575C40.6841 55.7518 40.6841 56.6405 41.2912 57.0348L46.4553 60.389C47.1206 60.8211 48 60.3436 48 59.5504L48 52.8419C48 52.0487 47.1206 51.5712 46.4553 52.0033L41.2912 55.3575Z"
fill="var(--background-neutral-primary-inverse)"
/>
</g>
<defs>
<filter
id="filter0_d_278_2775"
x="34.7"
y="24"
width="128.6"
height="150.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_278_2775"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_278_2775"
result="shape"
/>
</filter>
<filter
id="filter1_d_278_2775"
x="114.7"
y="24"
width="128.6"
height="150.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_278_2775"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_278_2775"
result="shape"
/>
</filter>
<filter
id="filter2_d_278_2775"
x="74.7"
y="96"
width="128.6"
height="150.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_278_2775"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_278_2775"
result="shape"
/>
</filter>
<filter
id="filter3_d_278_2775"
x="-5.3"
y="96"
width="128.6"
height="150.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_278_2775"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_278_2775"
result="shape"
/>
</filter>
<filter
id="filter4_d_278_2775"
x="-45.3"
y="24"
width="128.6"
height="150.3"
filterUnits="userSpaceOnUse"
color-interpolation-filters="sRGB"
>
<feFlood flood-opacity="0" result="BackgroundImageFix" />
<feColorMatrix
in="SourceAlpha"
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
result="hardAlpha"
/>
<feOffset dx="4" dy="54" />
<feGaussianBlur stdDeviation="16.15" />
<feComposite in2="hardAlpha" operator="out" />
<feColorMatrix
type="matrix"
values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
/>
<feBlend
mode="normal"
in2="BackgroundImageFix"
result="effect1_dropShadow_278_2775"
/>
<feBlend
mode="normal"
in="SourceGraphic"
in2="effect1_dropShadow_278_2775"
result="shape"
/>
</filter>
<clipPath id="clip0_278_2775">
<rect width="190" height="120" fill="var(--image-gray)" />
</clipPath>
</defs></svg>`,

  seoGenerator: `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="120" viewBox="0 0 190 120" fill="none">
<g>
<rect x="45" y="30" width="100" height="60" rx="12" fill="var(--background-neutral-primary)"/>
<rect x="55" y="45" width="80" height="8" rx="4" fill="var(--background-neutral-tertiary)"/>
<rect x="55" y="60" width="60" height="6" rx="3" fill="var(--background-neutral-secondary)"/>
<rect x="55" y="70" width="40" height="6" rx="3" fill="var(--background-neutral-secondary)"/>
<circle cx="135" cy="50" r="10" fill="var(--background-brand-primary)"/>
<path d="M132 50L134 52L138 48" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g></svg>`,

  textFormatter: `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="120" viewBox="0 0 190 120" fill="none">
<g>
<rect x="45" y="30" width="100" height="60" rx="12" fill="var(--background-neutral-primary)"/>
<path d="M65 45H125M65 60H105M65 75H95" stroke="var(--icon-neutral-tertiary)" stroke-width="2" stroke-linecap="round"/>
<rect x="115" y="67" width="20" height="16" rx="3" fill="var(--background-brand-primary-subdued)"/>
<path d="M120 75H130" stroke="var(--icon-colored-brand)" stroke-width="2" stroke-linecap="round"/>
</g></svg>`,

  socialMediaPosts: `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="120" viewBox="0 0 190 120" fill="none">
<g>
<rect x="45" y="20" width="40" height="80" rx="10" fill="var(--background-neutral-primary)"/>
<rect x="105" y="20" width="40" height="80" rx="10" fill="var(--background-neutral-primary)"/>
<rect x="55" y="35" width="20" height="3" rx="1.5" fill="var(--background-neutral-tertiary)"/>
<rect x="55" y="45" width="20" height="10" rx="2" fill="var(--background-brand-primary-subdued)"/>
<rect x="55" y="60" width="20" height="3" rx="1.5" fill="var(--background-neutral-tertiary)"/>
<rect x="55" y="70" width="20" height="3" rx="1.5" fill="var(--background-neutral-tertiary)"/>
<rect x="115" y="35" width="20" height="3" rx="1.5" fill="var(--background-neutral-tertiary)"/>
<rect x="115" y="45" width="20" height="10" rx="2" fill="var(--background-brand-primary-subdued)"/>
<rect x="115" y="60" width="20" height="3" rx="1.5" fill="var(--background-neutral-tertiary)"/>
<rect x="115" y="70" width="20" height="3" rx="1.5" fill="var(--background-neutral-tertiary)"/>
</g></svg>`,

  productDescription: `<svg xmlns="http://www.w3.org/2000/svg" width="190" height="120" viewBox="0 0 190 120" fill="none">
<g>
<rect x="20" y="30" width="70" height="60" rx="10" fill="var(--background-neutral-primary)"/>
<rect x="100" y="30" width="70" height="60" rx="10" fill="var(--background-neutral-primary)"/>
<rect x="30" y="50" width="50" height="30" rx="4" fill="var(--background-brand-primary-subdued)"/>
<rect x="110" y="40" width="50" height="5" rx="2.5" fill="var(--background-neutral-tertiary)"/>
<rect x="110" y="50" width="40" height="3" rx="1.5" fill="var(--background-neutral-secondary)"/>
<rect x="110" y="57" width="40" height="3" rx="1.5" fill="var(--background-neutral-secondary)"/>
<rect x="110" y="64" width="40" height="3" rx="1.5" fill="var(--background-neutral-secondary)"/>
<rect x="110" y="71" width="30" height="3" rx="1.5" fill="var(--background-neutral-secondary)"/>
<rect x="110" y="80" width="20" height="5" rx="2.5" fill="var(--background-brand-primary)"/>
</g>
</svg>`,
};

export const RAW_TEXT_CONTENT_MOST_POPULAR_TOOLS: TextContentTool[] = [
  {
    title: 'AI Caption Generator',
    route: '/category/text-content/ai-caption-generator',
    svgIcon: SVG_ICONS.captionGenerator,
    category: [],
  },
  {
    title: 'AI Blog Post Generator',
    route: '/category/text-content/ai-blog-post-generator',
    svgIcon: SVG_ICONS.blogPostGenerator,
    category: [],
  },
  {
    title: 'Content Idea Generator',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.contentIdeaGenerator,
    category: [],
  },
  {
    title: 'AI Storytelling Assistant',
    route: '/category/text-content/ai-storytelling-assistant',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: [],
  },
  {
    title: 'AI Storytelling Assistant',
    route: '/category/text-content/ai-storytelling-assistant',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: [],
  },
  {
    title: 'AI Storytelling Assistant',
    route: '/category/text-content/ai-storytelling-assistant',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: [],
  },
];

const RAW_TEXT_CONTENT_IDEA_GENERATION_TOOLS: TextContentTool[] = [
  {
    title: 'Idea Generation',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['idea-generation'],
  },
  {
    title: 'Idea Generation',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['idea-generation'],
  },
  {
    title: 'Idea Generation',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['idea-generation'],
  },
  {
    title: 'Idea Generation',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['idea-generation'],
  },
  {
    title: 'Idea Generation',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['idea-generation'],
  },
];

const RAW_TEXT_CONTENT_WRITING_EDITING_TOOLS: TextContentTool[] = [
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
  {
    title: 'Writing & Editing',
    route: '/category/text-content/test',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['writing-editing'],
  },
];

const RAW_TEXT_CONTENT_FORMATTING_TOOLS: TextContentTool[] = [
  {
    title: 'Formatting',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['formatting'],
  },
  {
    title: 'Formatting',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['formatting'],
  },
];

const RAW_TEXT_CONTENT_SEO_OPTIMIZATION_TOOLS: TextContentTool[] = [
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
  {
    title: 'SEO',
    route: '/category/text-content/content-idea-generator',
    svgIcon: SVG_ICONS.AIStorytellingAssistant,
    category: ['seo-optimization'],
  },
];

export const RAW_TEXT_CONTENT_ALL_TOOLS: TextContentTool[] = [
  ...RAW_TEXT_CONTENT_IDEA_GENERATION_TOOLS,
  ...RAW_TEXT_CONTENT_WRITING_EDITING_TOOLS,
  ...RAW_TEXT_CONTENT_FORMATTING_TOOLS,
  ...RAW_TEXT_CONTENT_SEO_OPTIMIZATION_TOOLS,
];
