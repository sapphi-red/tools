<template>
  <div>
    <router-link :to="{ name: 'index' }">Index</router-link>
    <span>|</span>
    <router-link :to="{ name: 'jsonFormatter' }">JSON Formatter</router-link>
    <span>|</span>
    <router-link :to="{ name: 'time' }">Time</router-link>
    <span>|</span>
    <router-link :to="{ name: 'encode' }">Encode</router-link>
    <span>|</span>
    <router-link :to="{ name: 'formatText' }">Format Text</router-link>
    <span>|</span>
    <router-link :to="{ name: 'richCopy' }">Rich Copy</router-link>
  </div>
</template>
