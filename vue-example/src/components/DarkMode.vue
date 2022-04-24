<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span class="material-icons icon-dark"> brightness_4 </span>

      <span class="material-icons icon-light"> brightness_high </span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': dataTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    const initialUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initialUserTheme);
  },

  methods: {
    setTheme(theme) {
      const icon_light = document.querySelector(".icon-light");
      const icon_dark = document.querySelector(".icon-dark");

      if (theme === "dark") {
        icon_light.classList.remove("hidden");
        icon_dark.classList.add("hidden");
      } else {
        icon_light.classList.add("hidden");
        icon_dark.classList.remove("hidden");
      }
      
      localStorage.setItem("data-theme", theme);
      document.body.setAttribute("data-theme", theme);
    },

    toggleTheme() {
      localStorage.getItem("data-theme") === "light"
        ? this.setTheme("dark")
        : this.setTheme("light");
    },

    getMediaPreference() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    },
    getTheme() {
      return localStorage.getItem("data-theme");
    },
  },
};
</script>

<style scoped>
input,
.hidden {
  display: none;
}

label {
  transition: 0.5s;
}

label span {
  font-size: 2rem;
}
</style>