<template>
  <div class="row justify-content-center mb-5">
    <div class="col-lg-8 text-center" style="padding: 30px;">
      <h2>Having trouble deciding?</h2>
      <br>
      <h5>Answer two question to help uspoint you in the direction for a better deal on your car insurance</h5>
      <button type="button" class="btn btn-success" @click="pushStartFn()">START</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    pushStartFn(){
      this.$router.push('/start')
    }
  }
}
</script>