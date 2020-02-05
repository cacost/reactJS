import React, { useState, useEffect } from 'react';
import { mock } from '../getOrders';
import Filter from '../Filter';
import './style.scss';

const List = (props) => {
	const [ state, setState ] = useState({});

	useEffect(() => {
		setState(mock(props.searchTerm))
	}, [props.searchTerm])

	return(<section className="cea-orderFeed--orders flex items-center flex-column">
		<div className="cea-orderFeed--orders-header w-90 smoke f6 flex justify-between items-center">
			<p>foram encontrados 
				<strong>1900</strong> 
			</p>

			<Filter />
		</div>
		<table className="cea-orderFeed--orders-table w-90" cellPadding="6" cellSpacing="6">
		  <thead className="cea-orderFeed--orders-sumary cea f6">
		  	<tr>
		    	<th align="left">PSP reference</th>
				<th align="center">CPF</th>
				<th align="center">Cliente</th>
				<th align="center">Data</th>
				<th align="center">Status</th>
			</tr>
		  </thead>
		  <tbody>
			{	
				state.pedidos && state.pedidos.map((item, i) => 
					<tr key={i} className="cea-orderFeed--orders-list_item light-black">
						<td align="left">{item.pedido}</td>
						<td align="center">{item.cpf}</td>
						<td align="center">{item.cliente}</td>
						<td align="center">{item.data}</td>
						<td align="center">{item.status}</td>
					</tr> 
				)
			}
		  </tbody>
		</table>

		<ul className="cea-orderFeed--orders-pagination w-100 flex justify-center items-center list">
			<li>
				<button className="cea-orderFeed--orders-pagination_prevPage outline-0 appearance f6" >
					<i className="ceaicon-arrow-left fl"></i>anterior 
				</button>
			</li>
			<li id="atualPage"><span>0</span></li>
			<li>
				<button className="cea-orderFeed--orders-pagination_nextPage outline-0 appearance f6" >
					próxima <i className="ceaicon-arrow-right fr"></i>
				</button>
			</li>			
		</ul>
	</section>
	)
}
export default List;