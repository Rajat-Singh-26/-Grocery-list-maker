$(function() {   //Document Ready Function
	var callback = function(event) {  //Callback Function
		event.preventDefault();
		var input = $('input[type=text][name=item]'),
			value = input.val(),
			need = ($(event.target).attr('id') === 'addNeed'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (need) ? $('ul').first() : $('ul').last();
		
		input.val("");
		input.focus();

		if (value === "") return;

		if (!need) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(list);
	}

	$('#addHave, #addNeed').click(callback); //Click Event Handling for Add Buttons
	
	$('ul').on('click', 'li a', function(event){ //click Event Handling for Remove Links:
		$(event.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(event){ 
		var listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);
	});
});
