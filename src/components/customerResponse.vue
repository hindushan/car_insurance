<template>
  <div class="text-center" style="background-color: #f2f2f2">
    <br />
    <h3>Customer review</h3>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="carousel">
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="testimonial">
                      <p
                        style="color: white"
                      >Vestibulum</p>
                    </div>
                    <div class="media">
                      <b>Paula Wilson &nbsp;&nbsp;</b>
                      <span style="color: green"> &nbsp;&nbsp; 2019 Aug</span>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="testimonial">
                      <p
                        style="color: white"
                      >Vestibulum</p>
                    </div>
                    <div class="media">
                      <b>Paula Wilson &nbsp;&nbsp;</b>
                      <span style="color: green"> &nbsp;&nbsp; 2019 Aug</span>
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="testimonial">
                      <p
                        style="color: white"
                      >Vestibulum</p>
                    </div>
                    <div class="media">
                      <b>Paula Wilson &nbsp;&nbsp;</b>
                      <span style="color: green"> &nbsp;&nbsp; 2019 Aug</span>
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="testimonial">
                      <p
                        style="color: white"
                      >Vestibulum</p>
                    </div>
                    <div class="media">
                      <b>Paula Wilson &nbsp;&nbsp;</b>
                      <span style="color: green"> &nbsp;&nbsp; 2019 Aug</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #000;
  font-size: 26px;
  font-weight: 300;
  position: relative;
  margin: 0 0 50px 0;
  text-transform: uppercase;
  display: inline-block;
}
h2::after {
  content: "";
  width: 50%;
  position: absolute;
  height: 4px;
  border-radius: 1px;
  background: #ff5555;
  left: 0;
  bottom: -20px;
}
.carousel {
  margin: 50px auto;
}
.carousel .item {
  color: black;
  overflow: hidden;
  min-height: 120px;
  font-size: 13px;
}
.carousel .media {
  position: relative;
  padding: 0 0 0 20px;
  margin-left: 20px;
}
.carousel .testimonial {
  color: white;
  position: relative;
  background: green;
  padding: 15px;
  margin: 0 0 20px 20px;
}
.carousel .testimonial::before,
.carousel .testimonial::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: -20px;
}
.carousel .testimonial::before {
  width: 20px;
  height: 20px;
  background: green;
  box-shadow: inset 12px 0 13px rgba(0, 0, 0, 0.5);
}
.carousel .testimonial::after {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: #f2f2f2;
  border-left-color: #f2f2f2;
}
.carousel .item .row > div:first-child .testimonial {
  margin: 0 20px 20px 0;
}
.carousel .item .row > div:first-child .media {
  margin-left: 0;
}
.carousel .testimonial p {
  text-indent: 40px;
  line-height: 21px;
  margin: 0;
}
.carousel .testimonial p::before {
  content: "\94";
  color: #f2f2f2;
  font-weight: bold;
  font-size: 68px;
  line-height: 70px;
  position: absolute;
  left: -25px;
  top: 0;
}
.carousel .overview {
  padding: 3px 0 0 15px;
}
.carousel .overview .details {
  padding: 5px 0 8px;
}
.carousel .overview b {
  text-transform: uppercase;
  color: #ff5555;
}
.carousel .carousel-control {
  width: 30px;
  height: 30px;
  background: green;
  text-shadow: none;
  top: 4px;
}
.carousel-control i {
  font-size: 16px;
}
.carousel-control.left {
  left: auto;
  right: 40px;
}
.carousel-control.right {
  left: auto;
}
.carousel-indicators {
  bottom: -80px;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 18px;
  height: 18px;
  border-radius: 0;
  margin: 1px 4px;
}
.carousel-indicators li {
  background: #e2e2e2;
  border: 4px solid #fff;
}
.carousel-indicators li.active {
  color: #f2f2f2;
  background: #ff5555;
  border: 5px double;
}
.star-rating li {
  padding: 0 2px;
}
.star-rating i {
  font-size: 14px;
  color: #ffdc12;
}
</style>