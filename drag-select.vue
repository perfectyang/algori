<!-- <drag-select selectElementClass="box"
          checkedClass="isChoose"
          @startDrag="startClick"
          @endDrag="endDrag"
    >
    <div class="box-wrap">
      <div class="box" :data-id="item" v-for="item in 30" :key="item">{{item}}</div>
    </div>
</drag-select> -->
<template>
  <div
    class="test-range"
    ref="container"
    @mousedown.stop="handleMouseDown"
    @mousemove.stop="handleMouseMove"
  >
    <div class="test-range__select" ref="select"></div>
    <div class="test-range__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectElementClass: {
      type: String,
      default: "",
    },
    checkedClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      mouseStopId: undefined,
      mouseOn: false,
    };
  },
  mounted() {
    document.addEventListener("mouseup", this.handleMouseUp);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  },
  methods: {
    handleEdit(todoList) {
      alert(JSON.stringify(todoList));
    },
    handleMouseDown(e) {
      this.$emit("startDrag");
      // 判断是否为鼠标左键被按下
      if (e.buttons !== 1 || e.which !== 1) return;
      this.mouseStopId = window.setTimeout(() => {
        this.mouseOn = true;
        // 设置选框的初始位置
        this.startX = e.clientX;
        this.startY = e.clientY;
      }, 300);
      this.$refs.select.style.cssText = `display:block;
                                         left:${this.startX}px;
                                         top:${this.startY}px
                                         width:0;
                                         height:0;`;
    },
    handleMouseMove(e) {
      if (!this.mouseOn) return;
      const $select = this.$refs.select;
      const _w = e.clientX - this.startX;
      const _h = e.clientY - this.startY;
      this.top = _h > 0 ? this.startY : e.clientY;
      this.left = _w > 0 ? this.startX : e.clientX;
      this.width = Math.abs(_w);
      this.height = Math.abs(_h);
      $select.style.left = `${this.left}px`;
      $select.style.top = `${this.top}px`;
      $select.style.width = `${this.width}px`;
      $select.style.height = `${this.height}px`;
      const selList = document.getElementsByClassName(this.selectElementClass);
      const { bottom, left, right, top } = $select.getBoundingClientRect();
      for (let i = 0; i < selList.length; i++) {
        const rect = selList[i].getBoundingClientRect();
        const isIntersect = !(
          rect.top > bottom ||
          rect.bottom < top ||
          rect.right < left ||
          rect.left > right
        );
        selList[i].classList[isIntersect ? "add" : "remove"](this.checkedClass);
      }
    },
    handleMouseUp(e) {
      this.mouseStopId && window.clearTimeout(this.mouseStopId);
      if (!this.mouseOn) return;
      this.mouseOn = false;
      const $select = this.$refs.select;
      const selList = document.getElementsByClassName(this.selectElementClass);
      const { bottom, left, right, top } = $select.getBoundingClientRect();
      const todoList = [];
      for (let i = 0; i < selList.length; i++) {
        const nodeEl = selList[i];
        const rect = nodeEl.getBoundingClientRect();
        const isIntersect = !(
          rect.top > bottom ||
          rect.bottom < top ||
          rect.right < left ||
          rect.left > right
        );
        if (isIntersect) {
          todoList.push(nodeEl.getAttribute("data-id"));
        }
      }
      $select.style.display = "none";
      //批量操作
      this.$emit("endDrag", todoList);
    },
  },
};
</script>

<style lang="less">
.test-range {
  width: 100%;
  font-size: 12px;
  position: relative;
  user-select: none;
}
.test-range__content {
  border: 1px solid #dddee1;
  border-radius: 4px 0;
}
.test-range__select {
  background: #598fe6;
  position: fixed;
  width: 0;
  height: 0;
  display: none;
  top: 0;
  left: 0;
  opacity: 0.6;
  pointer-events: none;
}
</style>
