<template>
  <section class="players__wrapper">
    <h2 class="title" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">Homesef Security Systems Video
      Gallery</h2>
    <div class="players__container">
      <div class="video-players">
        <iframe src="https://www.tiktok.com/embed/v2/7306159592457669894" title="TikTok video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <p class="player-title" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">Borrowdale</p>
      </div>
      <div class="video-players">
        <iframe src="https://www.tiktok.com/embed/v2/7232215055549336837" title="TikTok video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <p class="player-title" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">Chisipite</p>
      </div>
      <div class="video-players">
        <iframe src="https://www.tiktok.com/embed/v2/7299224132229532933" title="TikTok video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <p class="player-title" style="font-family: 'Gill Sans', Arial, Helvetica, sans-serif;">Arlington Estate
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoPlayers"
}
</script>

<style scoped>
.players__wrapper {
  margin-top: 150px;
  padding: 90px 150px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  transition-duration: 0.3s;
}

.title {
  font-size: 32px;
  color: #2a2b30;
  font-weight: bold;
  text-align: center;
  margin: 0 0 50px;
}

.players__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
}

.video-players>iframe {
  width: 100%;
  height: 800px;
}

.player-title {
  color: #7d7d7d;
  text-align: center;
}

@media only screen and (max-width : 1750px) {
  .players__wrapper {
    padding: 70px 100px;
    margin-top: 100px;
  }

  .players__container {
    grid-column-gap: 30px;
  }
}

@media only screen and (max-width : 1366px) {
  .players__wrapper {
    padding: 70px 50px;
  }
}

@media only screen and (max-width : 1024px) {
  .title {
    font-size: 26px;
  }

  .players__container {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 50px;
  }

  .video-players {
    margin: auto;
  }

  .video-players>iframe {
    width: 500px;
    height: 300px;
  }
}

@media only screen and (max-width : 570px) {
  .players__wrapper {
    margin-top: 70px;
  }

  .players__container {
    display: block;
  }

  .video-players>iframe {
    width: 100%;
    height: 300px;
  }
}
</style>