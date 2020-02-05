function mock( campoBusca) {
	const jsonExemplo = {
		"pedidos": [
			{
			  "pedido": "v15023998cea-01",
			  "data": "29/11/2019 18:40:05",
			  "cliente": null,
			  "cpf": '41279783842',
			  "valor": "294,94",
			  "origem": null,
			  "bandeira": "Cartão C&A",
			  "adquirente": "VTEXStandard",
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": "100122",
			  "status": "InCompleto",
			  "canal": null
			},
			{
			  "pedido": "v15024000cea-01",
			  "data": "29/11/2019 18:40:07",
			  "cliente": null,
			  "cpf": null,
			  "valor": "133,67",
			  "origem": null,
			  "bandeira": "Cartão C&A",
			  "adquirente": "VTEXStandard",
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": "428267",
			  "status": "InCompleto",
			  "canal": null
			},
			{
			  "pedido": "v15024000cea-02",
			  "data": "29/11/2019 18:40:07",
			  "cliente": null,
			  "cpf": null,
			  "valor": "133,67",
			  "origem": null,
			  "bandeira": "Cartão C&A",
			  "adquirente": "VTEXStandard",
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": "428267",
			  "status": "InCompleto",
			  "canal": null
			},
			{
			  "pedido": "v15024003cea-01",
			  "data": "29/11/2019 18:40:07",
			  "cliente": null,
			  "cpf": null,
			  "valor": "197,92",
			  "origem": null,
			  "bandeira": "Cartão C&A",
			  "adquirente": "VTEXStandard",
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": "128010",
			  "status": "InCompleto",
			  "canal": null
			},
			{
			  "pedido": "v15024003cea-02",
			  "data": "29/11/2019 18:40:07",
			  "cliente": null,
			  "cpf": null,
			  "valor": "197,92",
			  "origem": null,
			  "bandeira": "Cartão C&A",
			  "adquirente": "VTEXStandard",
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": "128010",
			  "status": "InCompleto",
			  "canal": null
			},
			{
			  "pedido": "v15024005cea-01",
			  "data": "29/11/2019 18:40:08",
			  "cliente": null,
			  "cpf": null,
			  "valor": "164,97",
			  "origem": null,
			  "bandeira": null,
			  "adquirente": null,
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": null,
			  "status": "InCompleto",
			  "canal": null
			},
			{
			  "pedido": "v15024006cea-01",
			  "data": "29/11/2019 18:40:07",
			  "cliente": null,
			  "cpf": null,
			  "valor": "133,96",
			  "origem": null,
			  "bandeira": "Mastercard",
			  "adquirente": "MaxiPago",
			  "nsu": "94060071",
			  "tid": "326835880",
			  "primeiroscard": "523421",
			  "status": "Faturado",
			  "canal": null
			},
			{
			  "pedido": "v15024010cea-01",
			  "data": "29/11/2019 18:40:18",
			  "cliente": null,
			  "cpf": null,
			  "valor": "185,95",
			  "origem": null,
			  "bandeira": "Mastercard",
			  "adquirente": "MaxiPago",
			  "nsu": "6157395",
			  "tid": "326906806",
			  "primeiroscard": "525320",
			  "status": "Faturado",
			  "canal": null
			},
			{
			  "pedido": "v15024012cea-01",
			  "data": "29/11/2019 18:40:21",
			  "cliente": null,
			  "cpf": null,
			  "valor": "159,99",
			  "origem": null,
			  "bandeira": "Mastercard",
			  "adquirente": "MaxiPago",
			  "nsu": "6342013",
			  "tid": "326904488",
			  "primeiroscard": "523421",
			  "status": "Faturado",
			  "canal": null
			},
			{
			  "pedido": "v15024014cea-01",
			  "data": "29/11/2019 18:40:24",
			  "cliente": null,
			  "cpf": null,
			  "valor": "80,98",
			  "origem": null,
			  "bandeira": "Cartão C&A",
			  "adquirente": "VTEXStandard",
			  "nsu": null,
			  "tid": null,
			  "primeiroscard": "428267",
			  "status": "InCompleto",
			  "canal": null
			}
		],
		"totais": {
			"totalRegistros": 3639,
			"totalPaginas": 363
		}
	};

	if(campoBusca){
		let tipo = campoBusca.tipo
		let termo = campoBusca.termo
		let vetor = []
		
		jsonExemplo.pedidos.map((item, i) => {
			if(item[tipo] === termo){
				vetor.push(item)
			}				
		})

		return vetor
	}
	else{
		return jsonExemplo
	}
}

const retornaPedidos = (campoBusca) => {
	let data = campoBusca ? {
		"pedido": campoBusca.tipo === 'id' ? campoBusca.termo : null,  // optional
		"cpf": campoBusca.tipo === 'cpf' ? campoBusca.termo : null, // optional
		"cliente": campoBusca.tipo === 'cliente' ? campoBusca.termo : null, // optional
		"status": campoBusca.tipo === 'status' ? campoBusca.termo : null, // optional
		"bandeira": "string", // optional
		"adquirente": "string", // optional
		"primeiroscard": "string", // optional
		"canal": "string", // optional
		"data": {  // optional se não passar ira fazer a data de hoje
			"dataInicial": "2019-10-01T00:00:00.820Z",
			"dataFinal": "2019-10-01T23:59:59.820Z"
		},
		"pageNumber": 1,  // optional se não passar será 1
		"pageSize": 100  // optional se não passar será 15
	} :
	{
		"bandeira": "string", // optional
		"adquirente": "string", // optional
		"primeiroscard": "string", // optional
		"canal": "string", // optional
		"data": {  // optional se não passar ira fazer a data de hoje
			"dataInicial": "2019-10-01T00:00:00.820Z",
			"dataFinal": "2019-10-01T23:59:59.820Z"
		},
		"pageNumber": 1,  // optional se não passar será 1
		"pageSize": 100  // optional se não passar será 15
	}

    fetch('/pedidos/api/pedido/PedidosFiltro', {
    	method: 'POST',
    	headers: {"content-type": "application/json"},
		body: JSON.stringify({data})
    })
    .then((response) => {
    	console.log(response)
    });
}

export {
	mock,
	retornaPedidos
}