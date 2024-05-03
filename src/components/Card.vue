<script setup>
    // import { useSidenavStore } from '@/stores/sidenav'
    // const sidenavStore = useSidenavStore();

    // const handleCard = () => {
    //     sidenavStore.isActive = true;
    // }

    const props = defineProps({
        isActive: Boolean
    })
</script>

<template>
    <div class="card" :class="{'card-active' : props.isActive}">
        <div class="animation">
            <slot name="animation">

            </slot>
        </div>
    </div>
</template>

<style scoped>
    .card {
        display: flex;
        min-height: 280px;
        min-width: 280px;
        background-color: #fff;
        /* align-items: center; */
        justify-content: center;
    }

    .card:hover {
        cursor: pointer;
    }

    .card-active {
        box-shadow: 0 0 12px rgb(0, 242, 255);
        outline: 4px solid rgba(0, 242, 255, 0.2);
    }

    .animation {
        display: flex;
        height: 280px;
        width: 280px;
    }
</style>