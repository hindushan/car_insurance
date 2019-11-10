<template>
  <header class="navigation">
    <nav
      class="navbar navbar-expand-lg main-nav py-lg-3 position-absolute w-100"
      id="main-nav"
      style="background-color: #669b4f;"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <!-- <img src="../../public/images/logo.png" alt="" class="img-fluid"> -->
          Car Insurance
        </router-link>

        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse" id="navigation">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Service</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">News</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
