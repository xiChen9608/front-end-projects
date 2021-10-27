<template>
  <div>
    <h3>贪吃蛇小游戏</h3>
    <h4>得分：{{ score }}</h4>
  </div>
  <div class="box">
    <div class="gridBox">
      <div class="girdRow" v-for="(i, iindex) in 20" :key="iindex">
        <div
          class="grid"
          :ref="
            (el) => {
              girdItem[iindex * 20 + jindex] = el;
            }
          "
          v-for="(j, jindex) in 20"
          :key="jindex"
        ></div>
      </div>
    </div>
  </div>
  <button @click="start()"></button>
</template>

<script>
import { ref, watch, reactive, onMounted } from "vue";

export default {
  name: "GreedySnake",
  setup() {
    let score = ref(0);
    let girdItem = ref([]);

    // 查看蛇是否发生变化，重新渲染
    let snake = reactive([]);
    watch(
      () => snake,
      (newSnake, oldSnake) => {
        console.log(newSnake);
        newSnake.forEach((item) => {
          girdItem.value[item.row * 20 + item.col].setAttribute(
            "class",
            "grid snakeGrid"
          );
        });
      },
      {
        deep: true, // 深度监听的参数
      }
    );

    // 随机创建鸡蛋
    let createEgg = () => {
      let randrow = null;
      let randcol = null;
      let randFlag = true;
      while (randFlag) {
        randrow = Math.floor(Math.random() * 20);
        randcol = Math.floor(Math.random() * 20);
        if (notInSnake(randrow, randcol)) break;
      }
      girdItem.value[randrow * 20 + randcol].setAttribute(
        "class",
        "grid eggGrid"
      );

      function notInSnake(randrow, randcol) {
        let flag = true;
        snake.forEach((item) => {
          if (item.row == randrow && item.col == randcol) {
            flag = false;
          }
        });
        return flag;
      }
    };

    // 开始游戏
    function start() {
      let moveDir = "right";
      let snakeMove = () => {
        let newRow = null;
        let newCol = null;

        switch (moveDir) {
          case "right":
            newRow = snake[0].row;
            newCol = snake[0].col + 1;
            break;
          case "up":
            newRow = snake[0].row - 1;
            newCol = snake[0].col;
            break;
          case "left":
            newRow = this.snake[0].row;
            newCol = this.snake[0].column - 1;
            break;
          case "down":
            newRow = this.snake[0].row + 1;
            newCol = this.snake[0].column;
            break;
        }
        snake.unshift({
          row: newRow,
          col: newCol,
        });
      };
      snakeMove();
    }

    //初始化
    onMounted(() => {
      for (let i = 4; i > 0; i--) {
        snake.push({
          row: 2,
          col: i + 1,
        });
      }

      createEgg();
    });
    return { score, girdItem, start };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  display: flex;
  justify-content: center;
}
.gridBox {
  width: 400px;
  height: 400px;
  border: 3px solid #000;
}
.gridRow {
  display: flex;
}
.grid {
  width: 20px;
  height: 20px;
  border: 0.5px solid rgb(214, 125, 125);
  float: left;
  box-sizing: border-box;
  margin: 0px 0px;
  padding: 0px 0px;
}

.snakeGrid {
  background-color: red;
}

.eggGrid {
  background-color: green;
}
</style>
