<script setup>
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { useDataStore } from '@/stores/data';

    const dataStore = useDataStore()

</script>

<template>
    <nav class="nav">
        <div class="wrapper">
            <div class="nav-container">
                <h1 class="title">
                    <a href="/"><span class="css-text">CSS</span><span class="animation-text">Animation</span></a>
                </h1>
                <div class="menu">
                    <RouterLink to="/">Animations</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </div>
                <div class="search">
                    <input type="text" placeholder="search animation" v-model="dataStore.searchTerm"/>
                    <button type="submit">
                        <svg style="height:1em;" viewBox="0 0 12 13"><g stroke-width="2" stroke="#999999" fill="none"><path d="M11.29 11.71l-4-4"/><circle cx="5" cy="5" r="4"/></g></svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .wrapper {
        width: 100%;
    }
    
    a {
        color: #fff;
        position: relative;
    }

    .nav {
        display: flex;
        justify-content: center;
        background-color: #213f3f;
        padding: 0 80px;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 10;
    }

    .nav-container {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        gap: 60px;
    }

    .title a {
        display: flex;
    }

    .title a:hover .css-text {
        background-color: #d133db;
    }
    

    .css-text {
        background-color: #33cedb;
        padding: 0 10px;
        border-radius: 5px;
        transform: rotate(-4deg);
        margin-right: 6px;
    }

    .menu {
        align-self: normal;
        display: flex;
        align-items: center;
    }

    .menu a {
        text-decoration: none;
        align-self: normal;
        display: flex;
        align-items: center;
        padding: 0 20px;
    }

    .menu a:hover {
        background-color: #356464;
    }

    .search {
        display: flex;
        position: relative;
    }

    .search input {
        height: 32px;
        width: 180px;
        padding: 0 40px 0 12px;
        font-size: 16px;
        background: #355d5d;
        color: #fff;
        border-radius: 50px;
        transition: width 0.5s ease;
    }

    .search input::placeholder {
        color: #fff;
    }

    .search input:focus,
    .search input:focus-visible {
        width: 400px;
    }

    button {
        height: 32px;
        display: flex;
        width: 40px;
        background-color: transparent;
        border: 0;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        position: absolute;
        right: 0;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        cursor: pointer;
    }
</style>