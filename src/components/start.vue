<template>
  <div class="row justify-content-center mb-5">
    <div class="col-lg-8 text-center" style="padding: 30px;">
      <h2>We are a modern restaurant in the center of the city</h2>
      <h5>We are a modern restaurant in the center of the city We are a modern restaurant in the center of the city</h5>
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