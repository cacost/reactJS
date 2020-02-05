import React from 'react';
import Logo from '../../_assets/logo.png';

const Header = (props) => 
    <header className="cea-header bg-black flex flex-row items-center justify-between ph4 pv2">
    	<div className="cea-header--left flex flex-row items-center">
	 		<img className="cea-header--left-logo mr3" src={Logo} alt="logo C&A" />
	 		<h1 className="cea-header--left-title white cea-fonts--title-5 mv0"> <span className="cea-header--subTitle black-light normal">order feed</span></h1>
    	</div>
    	<div className="cea-header--right">
    		<span className="cea-header--right-text black-light normal f5">{props.page}</span>
    		<button className="cea-header--right-button dn-ns">
    			<i className="ceaicon-three-bars"></i>
    		</button>
    	</div>
    </header>

export default Header
