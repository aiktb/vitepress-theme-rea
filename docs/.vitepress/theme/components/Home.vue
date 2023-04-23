<template>
 <div class="home">
   <div class="content">
     <img src="https://s.gravatar.com/avatar/646885b88df05b60e1eb4f3d5767c2e2?s=200" class="avatar" alt="avatar"/>
   </div>
   <div class="share">
     <h1 class="title">
       <span>Hi, I'm aiktb. 👋</span>
     </h1>
     <p class="description">
       Hope my blog can help you. 😎
     </p>
     <a href="/about#contact-me" class="contact">contact me ❤️</a>
   </div>
 </div>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 20px 20px var(--my-blue-lightest);
}

@keyframes avatar-transform {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.avatar:hover {
  animation: 5s linear 0s infinite avatar-transform;
}

.share {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
  font-family: "UD Digi Kyokasho NK-B", emoji;
}

.description {
  margin: 1em 0;
  font-size: 1.5em;
  font-family: "UD Digi Kyokasho NK-B", emoji;
}
.contact{
  font-family: "UD Digi Kyokasho NK-B", emoji;
  font-size: 1.5em;
  color: var(--my-white) ;
  border: solid 3px var(--my-blue-lightest);
  border-radius: 30px;
  padding: 10px;
}
</style>
