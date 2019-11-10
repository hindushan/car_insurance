<template>
  <div>
    <div class="container center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="card">
        <div style="padding: 20px;">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              v-model="name"
            />
            <small class="error" v-if="error.name.error">{{error.name.message}}</small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
            <small class="error" v-if="error.email.error">{{error.email.message}}</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Phone Number"
              v-model="phone"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            />
            <small class="error" v-if="error.phone.error">{{error.phone.message}}</small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Subject</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Subject"
              v-model="subject"
            />
            <small class="error" v-if="error.subject.error">{{error.subject.message}}</small>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Message</label>
            <textarea
              type="text"
              rows="4"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Message"
              v-model="message"
            />
            <small class="error" v-if="error.message.error">{{error.message.message}}</small>
          </div>

          <input type="submit" class="btn btn-success" @click="sendFn()" value="SUBMIT" />
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import CheckEmail from "@/util/validateEmail.js";
export default {
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
      error: {
        name: {
          error: false,
          message: "Name Requried"
        },

        email: {
          error: false,
          message: "Email Required"
        },
        phone: {
          error: false,
          message: "Phone number Required"
        },
        subject: {
          error: false,
          message: "Subject Required"
        },
        message: {
          error: false,
          message: "Message Required"
        }
      }
    };
  },
  watch: {
    email: function(val) {
      this.error.email.error = !CheckEmail(val);
    },
    name: function(val) {
      if (val) {
        this.error.name.error = false;
      }
    },
    phone: function(val) {
      if (val) {
        this.error.phone.error = false;
      }
    },

    subject: function(val) {
      if (val) {
        this.error.subject.error = false;
      }
    },

    message: function(val) {
      if (val) {
        this.error.message.error = false;
      }
    }
  },
  methods: {
    sendFn() {
      const that = this;
      const error = this.error;
      this.validateFormFn();
      if (
        !error.name.error &&
        !error.phone.error &&
        !error.subject.error &&
        !error.message.error &&
        !error.email.error
      ) {
        // alert("All field are Ok");
        window.emailjs
          .send("gmail", "mailsend", {
            name: that.name,
            email: that.email,
            phone: that.phone,
            subject: that.subject,
            message: that.message
          })
          .then(
            function() {
              alert("Sent!");
              that.clrearFormFn();
            }
            // function(err) {
            // }
          );
      }
    },
    clrearFormFn() {
      this.email = "";
      this.name = "";
      this.phone = "";
      this.subject = "";
      this.message = "";
    },
    validateFormFn() {
      this.validateNameFn();
      this.validatePhoneFn();
      this.validateSubjectFn();
      this.validateMessageFn();
      this.validateEmailFn();
    },

    validateNameFn() {
      if (!this.name) {
        this.error.name.error = true;
      }
    },

    validatePhoneFn() {
      if (!this.phone) {
        this.error.phone.error = true;
      } else {
        if (this.phone.length < 10) {
          this.error.phone.error = true;
        }
      }
    },

    validateSubjectFn() {
      if (!this.subject) {
        this.error.subject.error = true;
      }
    },

    validateMessageFn() {
      if (!this.message) {
        this.error.message.error = true;
      }
    },

    validateEmailFn() {
      if (!this.email) {
        this.error.email.error = true;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>