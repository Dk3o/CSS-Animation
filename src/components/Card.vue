<script setup>
    // import { useSidenavStore } from '@/stores/sidenav'
    // const sidenavStore = useSidenavStore();

    // const handleCard = () => {
    //     sidenavStore.isActive = true;
    // }
</script>

<template>
    <div class="card">
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

    .animation {
        display: flex;
        height: 280px;
        width: 280px;
    }
</style>