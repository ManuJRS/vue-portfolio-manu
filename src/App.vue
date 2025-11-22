<script setup>
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">Portafolio</RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
                aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="nav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" active-class="active">Proyectos</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/info" class="nav-link" active-class="active">Información</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>
