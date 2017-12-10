<template>
    <div class="cancel">
        <mt-header fixed title="cancel">
            <vv-header-back slot="left"></vv-header-back>
        </mt-header>
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'cancel',
    data() {
        return {
            msg: 'cancel'
        }
    }
}
</script>

<style lang="scss">

</style>