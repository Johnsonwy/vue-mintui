<template>
    <div class="demo header-top">
        <mt-header fixed title="demo">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'demo',
    data() {
        return {
            msg: 'demo'
        }
    }
}
</script>

<style lang="scss">

</style>