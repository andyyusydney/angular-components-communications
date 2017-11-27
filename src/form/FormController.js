export default class FormController {
  constructor() {
  	const changeHandler = (index, value) => {
  		console.log('changeHandler is called! index=%d, value=%s', index, value)
  		this.checkboxes[+!index] = {
  			label: this.checkboxes[+!index].label,
  			value: value?'disabled':true,
  			change: this.checkboxes[+!index].change
  		};
  	}

    this.checkboxes = [
	    {
	    	label: 'checkbox A',
	    	value: true,
	    	change: changeHandler
	    },
	    {
	    	label: 'checkbox B',
	    	value: false,
	    	change: changeHandler
	    }
    ];
  }

  submit() {
  	console.log("checkbox A = %s, checkbox B = %s", this.checkboxes[0].value, this.checkboxes[1].value);
  }
}
