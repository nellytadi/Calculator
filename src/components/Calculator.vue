<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-7 col-sm-9 col-xs-11 mx-auto mt-5">
        <div class="calculator">
        <div class="display">
          <div class="toCal">
            789*45
          </div>
          <div class="result">
            35,505
          </div>
        </div>
        <div class="row buttons mx-0">
          <div class="col-9 numbers">
            <div>
              <button>7</button>
              <button>8</button>
              <button>9</button>
            </div>
            <div>
              <button>4</button>
              <button>5</button>
              <button>6</button>
            </div>
            <div>
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div>
              <button>.</button>
              <button>0</button>
              <button>=</button>
            </div>
          </div>
          <div class="col-3 symbols" >
            <button>c</button>
            <button>&#247;</button>
            <button>&#xd7;</button>
            <button>-</button>
            <button>+</button>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calculator'
}
</script>
<style scoped>

</style>