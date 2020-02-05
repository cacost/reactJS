import React, { useState } from 'react';
import { Header } from '../_commons';
import List from './List';

const Orders = () => {
	const [ selectState, setSelectState ] = useState();
	const [ inputState, setInputState ] = useState();
	const [ listState, setListState ] = useState();

	return(
		<article className="cea-orderFeed">
			<Header />
			<section className="cea-orderFeed--search flex justify-center pa2 mv2">
				<div className="cea-orderFeed--search-wrapper ba br5 b--smoke flex justify-between w-40">
					<select id='selectSearch' onChange={(e) => setSelectState(e.target.value)} className="cea-orderFeed--search-select appearance f7 pv1 pl3 tc ba b--smoke tc">
						<option>buscar por</option>
						<option value='cpf'>CPF</option>
						<option value='id'>ID Pedido</option>
						<option value='cliente'>Nome Cliente</option>
						<option value='status'>status</option>
					</select>

					<input id="inputSearch" onChange={(e) => setInputState(e.target.value)} className="cea-orderFeed--search-input w-70 tl f6 appearance" 
						placeholder="número do pedido, CPF, nome do cliente..."
					/>

					<button onClick={() => setListState({'tipo' : selectState,'termo' : inputState})} className="cea-orderFeed--search-button bg-transparent pv1 ph2 appearance">
						<i className="ceaicon-magnifier f3"></i>
					</button>
				</div>					
			</section>

			<List searchTerm={listState} />
		</article>
	)
}

export default Orders;