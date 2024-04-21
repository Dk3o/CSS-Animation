<script setup>
  import Card from '../components/Card.vue';
</script>

<template>
  <main>
    <div class="card-list">
      <div class="card-list-row">
        <Card>
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
        </Card>
        <Card />
        <Card />
      </div>
      <div class="card-list-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div class="card-list-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div class="card-list-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .card-list {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 50px 0;
    flex-direction: column;
  }

  .card-list-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
</style>
