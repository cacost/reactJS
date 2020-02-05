import React, { useState, useEffect } from 'react';
import { mock } from '../getOrders';
import './style.scss';

const Filter = (props) => {
	const [ state, setState ] = useState({});

	return(
		<div className="cea-orderFeed--orders-header_filter">
			<button className="cea-orderFeed--orders-header_filter-button appearance pointer cea b flex item-center"
				onClick={() => setState({active: 'is-menu-open'})}>
				filtrar por 
				<i className="ceaicon-arrow-down f5 cea pa1 ml1 nt1 b"></i>
			</button>
			<ul className={`cea-orderFeed--orders-header_filter-list bl b--cea ${state.active}`}>
				<button className="cea-orderFeed--orders-header_filter-list-close appearance bg-cea br-pill pa2 flex item-center justify-center pointer"
					onClick={() => setState({active: ''})} >
					<i className="ceaicon-crossed-bars white f5"></i>
				</button>
				
				<li><button className="pa0 b cea f5 mt3 mb2 pb2 w-100 tl">por data</button>
					<ul className="pa0">
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="ontem" value="ontem"/> Ontem
							</label>
						</li>
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="uma semana" value="uma semana"/> Há uma semana
							</label>
						</li>
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="mes atual" value="mes atual"/> Mês atual
							</label>
						</li>
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="um mes" value="um mes"/> Há um mês
							</label>
						</li>
					</ul>
				</li>

				<li><button className="pa0 b cea f5 mt3 mb2 pb2 w-100 tl">por status</button>
					<ul className="pa0">
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="completo" value="completo"/> Completo
							</label>
						</li>
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="inCompleto" value="inCompleto"/> Incompleto
							</label>
						</li>
						<li className="pv2 pl3">
							<label>
								<input type="radio" className="mr2" name="pendente" value="pendente"/> Pendente
							</label>
						</li>
					</ul>
				</li>				
			</ul>
		</div>	
	)
}

export default Filter;