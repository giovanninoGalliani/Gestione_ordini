$(document).ready(function() {
	$('#userForm').bootstrapValidator({
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh',
		},
		fields: {
			nome: {
				container: '#infoNome',
				validators: {
					notEmpty: {
						message: 'Il campo nome non pu&ograve; essere vuoto'
					},
					regexp: {
						regexp: /^[a-zA-Z ,.'-]{2,30}$/,
						message: 'Da 2 a 30 caratteri (Solo lettere accettate)'
						}
				}
			},
				cognome: {
				container: '#infoCognome',
				validators: {
					notEmpty: {
						message: 'Il campo cognome non pu&ograve; essere vuoto'
					},
					regexp: {
						regexp: /^[a-zA-Z ,.'-]{2,30}$/,
						message: 'Da 2 a 30 caratteri (Solo lettere accettate)'
						}
				}
			},
				indirizzo: {
				container: '#infoIndirizzo',
				validators: {
					notEmpty: {
						message: 'Il campo indirizzo non pu&ograve; essere vuoto'
					},
					regexp: {
						regexp: /^[a-zA-Z ,.'-]+[0-9]{1,3}$/,
						message: 'Formato indirizzo(Via |Viale | Piazza n&deg; civico)'
						}
				}
			},
			
				cap: {
				container: '#infoCap',
				validators: {
					notEmpty: {
						message: 'Il campo cap non pu&ograve; essere vuoto'
					},
					regexp: {
						regexp: /^[0-9]{5}$/,
						message: 'Inserire 5 cifre per il CAP'
						}
				}
			},
				nascita: {
				container: '#infoNascita',
				validators: {
					notEmpty: {
						message: 'Il campo nascita non pu&ograve; essere vuoto'
					},
				date: {
						format: 'DD/MM/YYYY',
						message: 'Data non valida. Formato DD/MM/YYYY'
					}
				}
			},
				username: {
				container: '#infoUsername',
				validators: {
					notEmpty: {
						message: 'Il campo username non pu&ograve; essere vuoto'
					},
				regexp: {
						regexp: /^[a-zA-Z0-9]{4,10}$/,
						message: 'Da 4 a 10 caratteri alfanumerici'
						}
				}
			},
				password: {
				container: '#infoPassword',
				validators: {
					notEmpty: {
						message: 'Il campo password non pu&ograve; essere vuoto'
					},
				regexp: {
						regexp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
						message: 'Almeno un carattere maiuscolo, uno minuscolo, un numero e un carattere speciale (@$!%*#?&). Da 8 a 15 caratteri.'
						}
				}
			},
				email: {
				container: '#infoEmail',
				validators: {
					notEmpty: {
						message: 'Il campo e-mail non pu&ograve; essere vuoto'
					},
				regexp: {
						regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Inserire una e-mail valida.'
						}
				}
			},


		}


	});

});