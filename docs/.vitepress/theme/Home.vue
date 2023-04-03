<script>
export default {
  name: "Home",
  data() {
    return {
      quotes: [
        ":) Sorry, I don't have inspiration for my blog homepage design yet...",
        "@_@ This might take a little while.",
        "^_^ Hi, I am the blogger aiktb, welcome to my blog."

      ],
      currentQuoteIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    }, 3000);
  },
};
</script>

<template>
  <div class="full-screen-container">
    <div class="quote-icon-container">
      <img src="/home.svg" alt="icon" width="200" height="200" class="icon-rotate"/>
    </div>
    <div class="quote-container">
      <p>
        <span class="quote"> {{ quotes[currentQuoteIndex] }} </span>
        <span class="cursor">|</span>
      </p>
    </div>
  </div>
</template>

<style>
.full-screen-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--my-black-light);
}

.quote-icon-container {
  position: absolute;
  top: 50%;
  transform: translateY(-100%);
}

.cursor {
  animation: 0.6s van-cursor-flicker infinite;
}

.quote-container {
  font-family: "UD Digi Kyokasho NK-B", serif;
  margin-top: 20px;
  font-size: 2.5vw;
  color: var(--my-white);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  line-height: 500px;
  animation: typing 3s steps(100) infinite;
}

@keyframes van-cursor-flicker {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

.icon-rotate {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
