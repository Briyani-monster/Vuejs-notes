<template>
  <Teleport to="#modals">
    <div v-if="showModal">
      <div class="backdrop" @click.self="closeModal">
        <div
          class="modal"
          :class="{
            danger: theme === modalTheme.danger,
            success: theme === modalTheme.success,
            neutral: theme === modalTheme.neutral,
          }"
        >
          <slot>default slot</slot>
          <div class="actions">
            <slot name="links"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "asModel",
  props: ["showModal", "theme"],
  data() {
    return {
      modalTheme: { danger: "danger", success: "success", neutral: "neutral" },
    };
  },
  methods: {
    closeModal() {
      console.log("ran ", this.showModal, close);
      this.$emit("close");
      console.log("ran ", this.showModal, close);
    },
  },
};
</script>
<style>
.backdrop {
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  min-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.modal.neutral {
  background-color: skyblue;
}
.modal.success {
  background-color: greenyellow;
}
.modal.danger {
  background-color: red;
}
.actions a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid white;
}
</style>
