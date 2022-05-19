
		//Potential number storage 
		let num1;
		let operator;
		
		//SELECT ALL THE BUTTONS AS AN ARRAY
		btn = document.querySelectorAll('button')
		btnArray = Array.prototype.slice.call(btn, 0)
		btnArray.splice(0,2)
		btnArray.splice(3,1)
		btnArray.splice(6,1)
		btnArray.splice(9,1)
		btnArray.splice(10,2)
		btnArray.pop()
		//Get the buttons in the to display
		const display = document.getElementById('display');
		
		btnArray.forEach(function(item){
			item.addEventListener('click', showInput)
			function showInput(){
				num1 = parseInt(item.innerHTML)
				display.value+=item.innerHTML
				return item.innerHTML
			}
		})

		//Get the operators to display
		let delArr1=document.getElementById('divide');
		let delArr2= document.getElementById('multiply');
		let delArr3= document.getElementById('add');
		let delArr4= document.getElementById('subtract');
		let delArr5= document.getElementById('decimal');
		let delArr6= document.getElementById('exponent');
		
		let operatorArr= [delArr1, delArr2, delArr3, delArr4, delArr5, delArr6]
		operatorArr.forEach(function(operand){ 
         operand.addEventListener('click', showOperand)
		  function showOperand(){
			  operator = operand.innerHTML
			  display.value += operand.innerHTML
			  return operand.innerHTML
			  console.log(operand.innerHTML)
		  }
		})

		let cancel = document.getElementById('ac');
		cancel.addEventListener('click', remove)
		function remove() {
			display.value =''; 
		}
		
		// let num1;
		// let operation;
		// console.log(display.value)
		let solution =  document.getElementById('equal');
		solution.addEventListener('click', solveOutput)
		function solveOutput() {
			let num2 = document.getElementById('display').value
			 num2 = parseInt(num2)
			 let result;
			 if(operator==='+'){
				 result = num1 + num2
			 }
			 else if(operator==='-'){
				result = num2 - num1
			 }
			 else if(operator==='*'){
				result = num1 * num2
			 }
			 else if(operator==='/'){
				result = num1 / num2
			 }
			 else if(operator==='^'){
				result = num1 ^ num2
			 }
		   display.value = result
		}
		
	
		// let solution = document.getElementById('equal');
		// // let num2 = document.getElementById('display').value;
		// // let num1 = document.getElementById('display').value;
		// let result;
		// // num2 = parseInt(num2)
		// // num1 = parseInt(num1)
		//

		
		
	
		//shoud return 3
        	/*
			1. User enters the first number (could be multi-digit)
				a. String concatenation
			2. User presses an operation (addition, subtraction, multiplication, or division)
			3. User enters the second number (could be multi-digit)
			4. User presses = button to see the result
			5. User presses AC button to clear the display (show 0)
		    */

		    /*
			1. Make 'display' variable
			2. Save 'display' into 'num1' 
			3. Clear 'display' variable
		    */