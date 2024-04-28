<script setup>
import { computed } from 'vue';
  import Card from '../components/Card.vue';
  import { useDataStore } from "@/stores/data"
  import { useSidenavStore } from "@/stores/sidenav"

  const dataStore = useDataStore();
  const sidenavStore = useSidenavStore();

  const handleCard = (index) => {
    sidenavStore.isActive = true
    dataStore.selectedAnimation(index)
  }

  const filteredAnimations = computed(() => {
    const searchTerm = dataStore.searchTerm.toLowerCase();
    
    return dataStore.animations.filter(animation => {
      const nameMatches = animation.name.toLowerCase().includes(searchTerm);
      const tagMatches = animation.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      const textMatches = animation.text.toLowerCase().includes(searchTerm);
      
      return nameMatches || tagMatches || textMatches;
    });
  })

</script>

<template>
  <main>
    <div class="card-list">
      <Card
        v-for="(item, index) in filteredAnimations" 
        :key="index"
        @click="handleCard(index)"
      >
        <template #animation>
            <div :id="item.id" v-if="item.attribute === 'id'">
              <template v-if="item.name">
                {{ item.text }}
              </template>
            </div>
            <div :class="item.id" v-else>
              <template v-if="item.name">
                {{ item.text }}
              </template>
            </div>
        </template>
        <div>
          {{ item.name }}
        </div>
      </Card>
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
