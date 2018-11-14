<template>
  <div>
    <div>
      <MemberSearch></MemberSearch>
    </div>
    <div>
      <MemberList></MemberList>
    </div>
  </div>
</template>

<script>
    import MemberSearch from "./MemberSearch";
    import MemberList from "./MemberList";
    export default {
        name: "MemberEntry",
      components: {MemberList, MemberSearch}
    }
</script>

<style scoped>

</style>
