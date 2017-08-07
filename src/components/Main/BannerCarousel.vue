<template>
  <div class="main-banner">
    <div class="music-player">
      <ul class="music-coverlist is-list">
        <li class="music-cover-item main-banner">
            <img class="banner music-cover is-rwd" src="../../assets/images/main_banner01.png" >
        </li>
      </ul>
      <div class="player-indicators">
        <a href role="tab" class="indicator is-active" aria-label=""></a>
        <a href role="tab" class="indicator" aria-label=""></a>
        <a href role="tab" class="indicator" aria-label=""></a>
        <a href role="tab" class="indicator" aria-label=""></a>
        <a href role="tab" class="indicator" aria-label=""></a>
      </div>
      <div class="player-controller">
        <button type="button" class="button is-button is-prev" aria-label="PREV"></button>
        <button type="button" class="button is-button is-next" aria-label="NEXT"></button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
     return {
     coverList : [
  {
    src: "001.EdSheeran-ShapeOfYou.jpg",
    alt: "Ed Sheeran - Shape Of You"
  },
  {
    src: "002.TheChainsmokers&Halsey-Closer.jpg",
    alt: "The Chainsmokers & Halsey - Closer"
  },
  {
    src: "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
    alt: "Zayn & TaylorSwift - I Don't Wanna Live Forever (Fifty Shades Darker)"
  },
  {
    src: "004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
    alt: "Katy Perry & Skip Marley - Chained To The Rhythm"
  },
  {
    src: "005.Migos&LilUziVert-BadAndBoujee.jpg",
    alt: "Migos & Lil Uzi Vert - Bad And Boujee"
  },
  {
    src: "006.TheChainsmokers-Paris.jpg",
    alt: "The Chainsmokers - Paris"
  },
  {
    src: "007.Rihanna-LoveOnTheBrain.jpg",
    alt: "Rihanna - Love On The Brain"
  },
  {
    src: "008.BrunoMars-That'sWhatILike.jpg",
    alt: "Bruno Mars - That's What I Like"
  },
  {
    src: "009.BigSean-BounceBack.jpg",
    alt: "Big Sean - Bounce Back"
  },
  {
    src: "010.MachineGunKelly&CamilaCabello-BadThings.jpg",
    alt: "Machine Gun Kelly & Camila Cabello - Bad Things"
  }
]

    }
  },
  
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .main-banner
    background: black
    width: 100%
    
  .is-list 
    margin-top: 0
    margin-bottom: 0
    padding-left: 0
    list-style: none
  .is-rwd 
    width: 100%
    height: auto
  .is-button 
    border: none
    background: none
  .music-player 
    position: relative
    overflow: hidden
    padding-top: 35%
    
  .banner
    background-size: cover
  .music-cover
    position: absolute
    width: 80%
    height: auto
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .music-coverlist 
    // display: flex
    // transform: translateX(0px)
    // transition: all 0.4s cubic-bezier(0.92, 0, 0.49, 0.47)
  .music-cover-item 
    flex: 1 0 400px
  .player-controller 
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
  .player-controller .button 
    opacity: 0.85
    position: absolute
    top: 50%
    width: 24px
    height: 40px
    // background: url("../images/icon-arrow-prev-next-bw.png") no-repeat
    background-size: 48px 80px
    transform: translateY(-50%)
    transition: all 0.4s
  .player-controller .is-prev 
    left: 10px
    background-position: 0 100%

  .player-controller .is-next 
    right: 10px
    background-position: 100% 100%

  .player-indicators 
    position: absolute
    z-index: 100
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
  .indicator.is-active 
    opacity: 1
    background: rgb(255, 255, 255)
    transform: scale(1.6)
  .indicator 
    opacity: 1
    cursor: pointer
    display: inline-block
    width: 10px
    height: 10px
    background: #fff
    border-radius: 50%
    margin-left: 5px
    margin-right: 5px
    font-size: 14px
    transition: all .3s ease
   

</style>