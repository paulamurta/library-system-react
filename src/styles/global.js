import { createGlobalStyle } from "styled-components";
import Poppins from "../fonts/poppins-v20-latin-regular.woff2";
import Poppins2 from "../fonts/poppins-v20-latin-regular.woff2";
import RozhaWoff from "../fonts/rozha-one-v13-latin-regular.woff";
import RozhaWoff2 from "../fonts/rozha-one-v13-latin-regular.woff2";

const GlobalStyle = createGlobalStyle`

:root {
	--color-background: #0F0F0F;
	--color-background2:#3F4677;
	--color-accent: #D39117;
	--color-accent2:#AF7810;
  --color-primary: #404EB9;
  --color-primary-disable: #202543;
  --color-text-black: #121214;
  --color-gray-3: #212529;
  --color-text--dark: #4B5660;
  --color-text: #C1C1C1;
  --color-gray-0: #F8F9FA;
	--color-white: #fff;
}


@font-face {
font-family: 'Poppins';
  src: url(${Poppins}) format('woff'),
       url(${Poppins2}) format('woff2');
}

@font-face {
	font-family: 'Rozha';
	src: url(${RozhaWoff}) format('woff'),
		url(${RozhaWoff2}) format('woff2');
	}

body {
	height: 100vh;
	width: 100vw;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, button, select, option {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	box-sizing: border-box;
  font-family: 'Poppins', sans-serif ;
  font-size: 1rem;

}

button {
	cursor: pointer;
		background-color: transparent;
		border: none;
		border-radius: 8px;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;

}
ul,ol {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

export default GlobalStyle;
