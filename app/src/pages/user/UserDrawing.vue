<template>
    <div class="user-drawing header-top">
        <mt-header fixed title="user-drawing">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'user-drawing',
    data() {
        return {
            msg: 'user-drawing'
        }
    }
}
</script>

<style lang="scss">

</style>