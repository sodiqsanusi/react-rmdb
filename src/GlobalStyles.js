// THIS FILE CONTAINS ALL THE STYLES THAT STYLED COMPONENTS
// WILL APPLY TO THE REACT APP GLOBALLY.

import { createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* THE :ROOT APPLLIES STYLING TO THE ROOT ELEMENT SELCTOR,
WHICH IN THIS CASE IS THE HTML SELCTOR AND I INITIALIZED THE CSS VARIABLES
IN IT SO ALL ELEMENTS WILL HAVE ACCESS TO THEM */
:root{
  --maxWidth: 1200px;
  --white: #fff;
  --lightGrey: #eee;
  --medGrey: #353535;
  --darkGrey: #1c1c1c;
  --fontSuperBig: 2.5rem;
  --fontBig: 1.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
}

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Abel', sans-serif;
 }

 body{
   h1{
     font-size: 2rem;
     font-weight: 600;
     color: var(--white);
   }
   h3{
     font-size: 1.1rem;
     font-weight: 600;
   }
   p{
     font-size: var(--fontSmall);
     color: var(--white);
   }
 }

 img{
   width: 100%;
 }
`

export default GlobalStyles;