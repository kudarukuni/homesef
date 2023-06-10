<template>
  <div id="feedback" style="display: none">
    <div class="overlay">
        <form class="form__wrapper">
          <div class="form">
            <div class="feedback-form__container">
              <div class="close-button">
                <span class="close-icon" @click="feedbackForm">&times;</span>
              </div>
              <div class="title-container">
                <h2 class="form-title">FeedBack</h2>
                <p class="form-description">Submit your request and our specialist will contact you shortly!</p>
              </div>
            </div>
            <div class="data-input">
              <input name="Name" type="text" placeholder="Name" required>
            </div>
            <div class="data-input">
              <masked-input name="Cellphone" mask="\+\263111111111" type="text" placeholder="Mobile Number" required></masked-input>
            </div>
            <div class="send-button">
              <input type="submit" id="my-form-button" value="Submit Enquiry">
            </div>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "Feedback",
        components: {
            MaskedInput
        },
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
#feedback {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(33, 33, 33, 0.71);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.overlay {
  height: 100%;
  width: 30%;
  top: 30%;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  z-index: 100;
  position: fixed;
}
.form__wrapper {
  padding: 80px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.close-button {
  transition: 0.3s;
  position: absolute;
  z-index: 100;
  right: 35px;
  top: 20px;
}
.close-icon {
  color: #e76c1e;
  font-weight: bold;
  font-size: 60px;
  cursor: pointer;
}
.close-icon::selection {
  outline: none;
  background: transparent;
}
.form-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #2a2b30;
}
.form-description {
  font-size: 16px;
  color: #737373;
  text-align: center;
}
.data-input > input {
  width: 100%;
  height: 60px;
  margin-top: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  font-family: HelveticaNeueCyr;
  border-radius: 5px;
  border: 1px solid #b1b1b1;
  background-color: transparent;
}
.data-input > input:focus {
  outline: none;
  border: 2px solid #e76c1e;
}
.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.send-button > input {
  margin-top: 50px;
  padding: 25px 40px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #e76c1e;
  font-size: 16px;
  font-family: HelveticaNeueCyr;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  transition-duration: 0.3s;
}
.send-button > input:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: #ff7621;
}
@media only screen and (max-width : 1680px) {
  .form-title {
    font-size: 26px;
  }
  .form-description {
    font-size: 14px;
  }
  .send-button > input, .data-input > input {
    font-size: 14px;
  }
  .overlay {
    width: 35%;
    top: 30%;
  }
}
@media only screen and (max-width : 1680px) {
  .overlay {
    width: 30%;
    top: 25%;
  }
}
@media only screen and (max-width : 1600px) {
  .overlay {
    width: 30%;
    top: 20%;
  }
}
@media only screen and (max-width : 1536px) {
  .overlay {
    width: 35%;
    top: 20%;
  }
}
@media only screen and (max-width : 1280px) {
  .overlay {
    width: 40%;
    top: 25%;
  }
}
@media only screen and (max-height : 720px) {
  .overlay {
    width: 40%;
    top: 0;
  }
}
@media only screen and (max-width : 1024px) {
  .overlay {
    width: 50%;
    top: 5%;
  }
}
@media only screen and (max-width : 800px) {
  .overlay {
    width: 100%;
    top: 0;
  }
  .form__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 80px 150px;
  }
}
@media only screen and (max-width : 600px) {
  .form__wrapper {
    padding: 70px 50px;
  }
}
</style>