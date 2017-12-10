<template>
    <div class="position">
        <mt-header fixed title="position">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'position',
    data() {
        return {
            msg: 'position'
        }
    }
}
</script>

<style lang="scss">

</style>