<template>
  <div class="footer-callback__wrapper">
    <div class="feedback-button" @click="feedbackForm">
      <span>FeedBack</span>
    </div>
    <div class="catalog">
      <a href="" target="_blank">Company Directory</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterCallback",
        methods: {
            feedbackForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
.footer-callback__wrapper {
  margin-left: auto;
}
.feedback-button {
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 5px;
  font-size: 18px;
  padding: 25px 40px;
  box-sizing: border-box;
  text-decoration: none;
  background: transparent;
  border: 3px solid #ffffff;
  transition-duration: 0.3s;
  cursor: pointer;
}
.feedback-button > span {
  color: #ffffff;
  font-weight: normal;
}
.feedback-button:hover {
  transform: scale(0.95);
  transition-duration: 0.3s;
  background-color: rgba(245, 245, 245, 0.11);
}
.catalog {
  margin-top: 20px;
  text-align: right;
}
.catalog > a {
  color: #c4c4c4;
  text-decoration: none;
  padding-bottom: 5px;
  position: relative;
}
.catalog > a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #e76c1e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.catalog > a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
@media only screen and (max-width : 1750px) {
  .feedback-button {
    font-size: 14px;
    padding: 20px 30px;
  }
}
@media only screen and (max-width : 533px) {
  .feedback-button {
    margin: 40px auto 0;
  }
  .catalog {
    margin-top: 30px;
    text-align: center;
  }
}
</style>