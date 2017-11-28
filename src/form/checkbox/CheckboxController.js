export default class CheckboxController {
  constructor() {
  }

  $onInit() {
  	/*
  	console.log("this.id", this.id);
  	console.log("this.label", this.label);
    console.log("this.value", this.value);
    console.log("this.change", this.change);
    */
  }

  $onChanges(changes) {
  	/*
  	  console.log("id=%d, changes=%s", this.id, JSON.stringify(changes));
      this.value = !changes.value;
      */
  }

  clickHandler() {
  	this.change()(this.id, this.value);
  	console.log('this.value=', this.value);
  }
}
