<template>
    <div class="my-form">
        <div>Create new post: </div>
        <label for="title">Title:</label>
        <pv-inputText v-model="title" id="title" ></pv-inputText>
        <label for="content">Author:</label> 
        <pv-inputText v-model="author" id="author" ></pv-inputText> 
        <label for="content">User id:</label> 
        <pv-inputNumber v-model="userId" id="userId" ></pv-inputNumber> 
        <pv-button label="Save" @click="saveuser()" ></pv-button>}

    </div>
    
</template>
    
<script>
import { PostsApiService } from '@/services/post-api-service';

export default{
    name:"post-form",
    data(){
        
        return{
            title:'',
            author:'',
            postService:new PostsApiService()
        }
    },

    methods:{
        saveuser(){
        const body={'title':this.title,'author':this.author,'userId':this.userId}
        this.postService.createPost(body).then((response)=>{
            if(response.status==201){
                alert('Created')
                //this.$router.push('/Post')
            }
            else{
                alert('error creating user')
            }
            // console.log('response',response)
        })
     }
    }   
}
</script>
    
<style scoped>

.my-form{
    display:flex;
    flex-direction: column;
    background-color: beige;
    gap:10px;
    width: 250px;
    margin:0 auto;
    margin-top: 50px;
}

</style>