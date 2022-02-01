<template>
  <section>
    <ul>
      <li>
        <span class="avatar">{{ list.name.charAt(0) }}</span>
        {{ list.name }} ({{ list.id }}), {{ list.subtitle }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 380px;
  margin: 0 10px;
  padding: 10px;
  word-wrap: break-word;
  border-bottom: solid 1px lightgray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.avatar {
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  background-color: #ff7369;
  color: #fff;
  font-size: 0.85rem;
}
</style>
