
// const MQ = MathQuill.getInterface(2)
// const formulaSpan = document.getElementById('txtFormula')
// const formulaMathField = MQ.MathField(formulaSpan, {
//     spaceBehavesLikeTab: true, // configurable
//     handlers: {
//     edit: () => {
//         const enteredMath = formulaMathField.latex() // Get entered math in LaTeX format
//         console.log({ enteredMath})
//         // this.item.value = enteredMath
//         // eslint-disable-next-line no-undef
//         // checkAnswer(enteredMath)
//     }
//     }
// })


var mathFieldSpan = document.getElementById('math-field');
var latexSpan = document.getElementById('latex');

var MQ = MathQuill.getInterface(2); // for backcompat
var mathField = MQ.MathField(mathFieldSpan, {
  spaceBehavesLikeTab: true, // configurable
  handlers: {
    edit: function() { // useful event handlers
      latexSpan.textContent = mathField.latex(); // simple API
    }
  }
});