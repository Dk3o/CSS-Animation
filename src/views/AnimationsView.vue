<script setup>
  import Card from '../components/Card.vue';
  import { useDataStore } from "@/stores/data"
  import { useSidenavStore } from "@/stores/sidenav"

  const dataStore = useDataStore();
  const sidenavStore = useSidenavStore();

  const handleCard = (index) => {
    sidenavStore.isActive = true
    dataStore.selectedAnimation(index)
  }

</script>

<template>
  <main>
    <div class="card-list">
      <!-- <div class="card-list-row"> -->

      <Card
        v-for="(item, index) in dataStore.animations" 
        :key="index"
        @click="handleCard(index)"
      >
        <template #animation>
            <div :id="item.id">
              <template v-if="item.name">
                {{ item.text }}
              </template>
            </div>
        </template>
      </Card>
        <!-- <Card>
          <template #animation>
            <div id="loader">
            </div>
          </template>
        </Card>
        <Card>
          <template #animation>
            <div id="loader2">
              Whheee...
            </div>
          </template>
        </Card>
        <Card>
          <template #animation>
            <div id="loader3">
            </div>
          </template>
        </Card>
        <Card>
          <template #animation>
            <div id="sunny">
            </div>
          </template>
        </Card> -->
      <!-- </div> -->
    </div>
  </main>
</template>

<style scoped>
  /* .card-list {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 50px 0;
    flex-direction: column;
  } */

  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    padding: 10px;
    margin: 50px 0;
    gap: 10px;
    justify-content: center;
  }
  
  .card-list-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
</style>
