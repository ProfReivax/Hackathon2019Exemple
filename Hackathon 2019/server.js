var express = require('express');

var app = express();

app.get('/api/customers', (req, res) => {
    var customers = [
		{id: 1, firstName: 'Xavier', lastName: 'Dupuis'},
		{id: 2, firstName: 'PL', lastName: 'Parent'},
		{id: 3, firstName: 'Claudia', lastName: 'Lapalme'},
		{id: 4, firstName: 'Philippe', lastName: 'Dupras'},
		{id: 5, firstName: 'Jay', lastName: 'Boucher-Veilleux'},
		{id: 0, firstName: 'Cool', lastName: 'McCool'}
	];
	res.json(customers);
	res.contentType('application/json');
});

var port = 5000;

app.listen(port, onAppStart())


function onAppStart() {
    console.log(`Server started on port ${port}`);
}