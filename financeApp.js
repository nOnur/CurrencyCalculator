angular.module('financeApp',[])
.controller('InvoiceController', function(){
	this.qty = 1;
	this.cost = 2;
	this.inCurr = 'EUR';
	this.currencies = ['TL', 'USD', 'EUR'];
	this.ustToForeignRates = {
		USD: 1,
		EUR: 0.74,
		TL: 2.3
	};
	this.total = function total(outCurr) {
		return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
	};
	this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
		return amount * this.ustToForeignRates[outCurr] / this.ustToForeignRates[inCurr];
	};
	this.pay = function pay(){
		window.alert('Payment has taken from your account');
	};
});