<template>
  <div class="hero">
    <div>
      <img class="avatar" src="/avatar.jpg" alt="avatar" />
    </div>
    <div>
      <p class="introduce">
        <i>Hi, I'm aiktb.</i>👋
      </p>
      <p>
        <i>Hope my blog can help you.</i>😎
      </p>
      <div class="contact">
        <a class="link" href="/about#contact-me">
          <i>contact me</i>❤️
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 70px;
  font-weight: bold;
  font-size: 1.5em;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 20px 20px var(--my-blue-light);
  background-color: var(--my-blue-light);
}

.introduce {
  font-size: 35px;
  margin-top: 70px;
  color: var(--my-blue-light);
  line-height: 1.5em;
}

.avatar:hover {
  animation: 5s linear 0s infinite spin;
}

.contact {
  margin-top: 20px;
}

.link {
  display: inline-block;
  width: auto;
  border-radius: 30px;
  padding: 5px 10px;
  box-shadow: 6px 6px var(--my-blue);
  border: 4px solid var(--my-blue-light);
}

.link:hover {
  color: var(--my-blue-light);
  box-shadow: 9px 9px var(--my-blue);
  border: 4px solid var(--my-blue-light);
  transform: translate(-2px, -2px);
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>