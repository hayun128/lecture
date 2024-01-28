<!-- src/routes/+page.svelte -->
<script>
	import { onMount } from "svelte"
	  
	  let todo = "", todos = [], loaded = false, synced = false, id = Date.now();
  
	const upload = (data, method = 'POST') => {
	  synced = false; //저장 안됨
		  fetch('http://localhost:2000/api/todo', { //새로고침하지 않고 서버에 정보를 불러오는것 
			method,
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }).then(() => synced = true)  //저장됨
	}
  
	  const toggle = (i) => () => {
		todos[i].completed = !todos[i].completed;
		upload(todos[i]);
	}
  
	  const remove = (i) => () => {
		upload(todos[i], 'DELETE');
		todos = todos.filter((_, j) => i !== j);
	}
  
	  const add = () => {
		  if (todo.trim()) {
		   const data = { title: todo, completed: false, id: id++ };
		   upload(data);
		   todos = [...todos, data];
		}
		  todo = "";
	  }
  
	  onMount(() => {  //스벨트가 처음에 로딩될때 실행시킬거 
		  fetch('http://localhost:2000/api/todo').then(r => r.json()).then(r => {
			  todos = r;
		loaded = synced = true;
		  });
	});
  </script>
  
  {#if !loaded}
	  <p>로드 중...</p>
  {:else if !synced}
	  <p>동기화 중...</p>
  {/if}
  <input bind:value={todo} on:keydown={(e) => e.key === 'Enter' && add()} />
  <button on:click={add}>추가</button>
  <ul>
	  {#each todos as item, i}
		  <li>
			  {item.title}
			  <button on:click={toggle(i)}>{item.completed ? "✅" : "❎"}</button>
			  <button on:click={remove(i)}>삭제</button>
		  </li>
	  {/each}
  </ul>
  
  
  <style>
	  button {
		  margin: 0 1em;
	  }
  
	  li {
		  margin: 1em 0;
	  }
  </style>