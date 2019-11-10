<template>
  <section class="section cta">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-5">
          <h3 style="color: white">Hey how are you</h3>
          <p style="color: white">Fine, You?</p>
        </div>
        <div class="col-5">
          <ul style="color: green">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#arrow {
  border-right: 2px solid green;
  border-bottom: 2px solid green;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  margin-top: 40px;
}

ul li {
  position: relative;
  padding-bottom: 10px;
}

ul {
  list-style: none;
}

ul li:before {
  content: "";
  position: absolute;
  border-right: 2px solid green;
  border-bottom: 2px solid green;
  width: 10px;
  height: 10px;
  top: calc(50% - 4px);
  left: -20px;
  transform: translateY(-50%) rotate(-45deg);
}
</style>