<template>
  <div>User</div>
</template>

<script>

export default {
  name: 'User',
  created() {
    console.log(this.$router.currentRoute);
  }
}
</script>
