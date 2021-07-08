<template>
    <h1></h1>
</template>
// Might be better to replace with SVG in future
<style>
@font-face {
    font-family: 'Discordinated';
    src: url('https://armcord.vercel.app/DISCORDINATED.woff2') format('woff2'),
        url('https://armcord.vercel.app/DISCORDINATED.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  h1 {
      font-size: 0px;
      text-align: center;
      
    }

    h1:before {
      content: "ARM";
      color: #7289da;
      font-weight: normal;
      font-family: Helvetica, sans-serif;
      font-size: 64px;
    }

    h1:after {
      content: "Cord";
      color: #ffffff;
      font-weight: normal;
      font-family: Discordinated;
      font-size: 64px;
    }

</style>
