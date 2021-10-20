<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Movies, Series & more" 
      @keyup.enter="apply" />
    <div class="selects">
      <!-- 양방향데이터 바인딩 v-model -->
      <!-- $data[filter.name] 이형식은 data.type 혹은 data.number 등에 접근하기 위해 사용-->
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          value="" 
          v-if="filter.name === 'year'">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters:[
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: ['10', '20', '30']
        },
        {
          name: 'year',
          //즉시 실행함수
          items: (()=>{
            const years = []
            const thisYear = new Date().getFullYear()
            for(let i = thisYear; i >= 1985; i--){
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  },
  methods:{
    //store에 mutations를 실행할때는 .commit() 메소드를
    //Actions를 실행 할때는 .dispatch 메소드를 실행한다.
    async apply(){
      //store에 dispatch 즉, Actions에 접근할건데 접근경로는 movie(여기서 movie는 store폴더에 index.js에 modules에 들어간 이름이다.)이고 거기에 있는 searchMovies를 실행할거다.
      //거기에 매개변수로 객체로 만들어진 title,type,number,year를 보낼거다.
      this.$store.dispatch('movie/searchMovies', {
        title:  this.title,
        type:   this.type,
        number: this.number,
        year:   this.year
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  > *{
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects{
    display: flex;
    select {
      width : 120px;
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
  
  @include media-breakpoint-down(lg){
    display: block;
    input {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects {
      margin-right: 0;
      margin-bottom: 10px;
      select {
        width: 100%
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>