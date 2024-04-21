<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav class="nav">
          <div class="wrapper">
            <div class="nav-container">
                <h1 class="title">
                    <a href="/">CSS Animation</a>
                </h1>
                <div class="menu">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </div>
                <div class="search">
                    <input type="text" placeholder="search animation"/>
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
    }

    .nav {
        display: flex;
        justify-content: center;
        background-color: #213f3f;
        padding: 0 50px;
        position: sticky;
        top: 0;
        width: 100%;
    }

    .nav-container {
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        gap: 60px;
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
        background-color: burlywood;
    }

    .search {
        display: flex;
    }

    .search input {
        /* border-radius: 20px;
        border-width: 0;
        height: 40px;
        width: 402px;
        outline: 0;
        padding: 0 18px;
        font-size: 16px; */

        border-width: 0;
        height: 40px;
        width: 402px;
        outline: 0;
        padding: 0 12px;
        font-size: 16px;
        background: transparent;
        color: #fff;
        border-bottom: 1px solid;
    }

    .search input::placeholder {
        color: #fff;
    }

    button {
        width: 40px;
        background-color: #fff;
        border: 0;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>