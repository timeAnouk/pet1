<template>
  <div>
    <div>
      <MemberSearch></MemberSearch>
    </div>
    <div>
      <MemberList></MemberList>
    </div>
    <!--<div>
      <MemberDetail></MemberDetail>
    </div>-->
  </div>
</template>

<script>
    import MemberSearch from "./MemberSearch";
    import MemberList from "./MemberList";
    import MemberDetail from "./MemberDetail";
    export default {
        name: "MemberManage",
      components: {MemberDetail, MemberList, MemberSearch}
    }
</script>

<style scoped>

</style>
