<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-7 col-sm-9 col-xs-11 mx-auto mt-5">
        <div class="calculator">
        <div class="display">
          <div class="toCal" v-text="cal">

          </div>
          <div class="result" v-text="result">

          </div>
        </div>
        <div class="row buttons mx-0">
          <div class="col-9 numbers">
            <div>
              <button @click="doDigit(7)">7</button>
              <button @click="doDigit(8)">8</button>
              <button @click="doDigit(9)">9</button>
            </div>
            <div>
              <button @click="doDigit(4)">4</button>
              <button @click="doDigit(5)">5</button>
              <button @click="doDigit(6)">6</button>
            </div>
            <div>
              <button @click="doDigit(1)">1</button>
              <button @click="doDigit(2)">2</button>
              <button @click="doDigit(3)">3</button>
            </div>
            <div>
              <button>.</button>
              <button @click="doDigit(0)">0</button>
              <button @click="doSolve">=</button>
            </div>
          </div>
          <div class="col-3 symbols">
            <button @click="doCancel">c</button>
            <button @click="doSymbol('/')">&#247;</button>
            <button @click="doSymbol('*')">&#xd7;</button>
            <button @click="doSymbol('-')">-</button>
            <button @click="doSymbol('+')">+</button>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  data(){
    return{
      cal:'',
      result:'',
      digits:["0","1","2","3","4","5","6","7","8","9"],
      symbols:["+","-","/","*"]
    }
  },
  methods:{
    doDigit(digit){
      this.cal = this.cal + digit
    },
    doSymbol(sign){
      // check if cal is empty and allow symbol if -
      if (this.cal === '' && sign === '-'){
        this.cal = sign;
        console.log("first");
      }
      //if last two chars are signs and last is - , replace both with sign
      let str =  this.cal.slice(-2)
      let arr = str.split("")
      if(this.in_array(arr[0],this.symbols) && this.in_array(arr[1],this.symbols) && arr[1] === '-'){
        this.cal = this.cal.slice(0, -2)+sign;
        console.log("second");
      }
      //if last char is symbol replace with new sign except if -
      if (this.in_array(this.cal.slice(-1),this.symbols) && sign !== '-') {
        this.cal = this.cal.slice(0, -1)+sign;
        console.log("third");
      }
      //if last char is symbol and sign is -
      if (this.in_array(this.cal.slice(-1),this.symbols) && sign === '-') {
        this.cal = this.cal + sign;
        console.log("fourth");
      }
      // if last char is a digit
      if(this.in_array(this.cal.slice(-1),this.digits)){
        this.cal = this.cal + sign
        console.log(this.cal.slice(-1) + ' fifth')
      }
    //todo -problem when - is click at start it appears twice
      //todo -show result as you go
    },
    in_array(needle,haystack){
      for (let i=0, len=haystack.length;i<len;i++) {
        if (haystack[i] === needle) {
            return true
        }
      }
      return false
    },
    doCancel(){
      this.cal = ''
      this.result = ''
    },
    doSolve(){
      try {
        this.result = eval(this.cal);
      } catch (e) {
        if (e instanceof SyntaxError) {
          alert(e.message);
          this.doCancel()
        } else {
          throw e;
        }
      }

    }
  }
}
</script>
