import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


    const Head = styled.header`
        background-color: gray;
        height: 120px;
        position: relative;
        ul{
            position: absolute;
            right: 10px;
            bottom: 10px;
            list-style: none;
            margin: 0;
            display: flex;

            li{
              padding: 0px 8px;
              cursor: pointer;
            }
            
        }
    `;
const Header: React.FC = () => {
  return (

  <>
  <Head>Header
<ul>
  

  
 <li> <Link to='/' >Home</Link>  </li>
  <li> <Link to='/container' >Conteiner</Link>  </li>
  <li> <Link to='/contact' >Contact</Link>  </li>

  </ul>
  </Head>
  </>
  );

};

export default Header;
