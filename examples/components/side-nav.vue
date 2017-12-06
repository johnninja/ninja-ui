<template>
  <aside class="side-nav">
    <nav>
      <p class="side-nav__title">组件</p>
      <ul>
      	<li><router-link to="/layout">Layout布局</router-link></li>
      	<li><router-link to="/button">Button按钮</router-link></li>
      	<li><router-link to="/test">test</router-link></li>
      </ul>
    </nav>
  </aside>
</template>
<script>
  export default {
    name: 'side-nav'
  }
</script>
<style lang="less">
	.side-nav{
		position: fixed;
		top: 0;
		bottom: 0;
		margin-top: 50px;
		width: 220px;
		border-right: 1px solid #e2ecf4;
		text-align: left;
		ul{
			margin: 0;
			padding: 0;
		}
		li{
			padding: 5px 10px 5px 20px;
			list-style: none;
		}
		a{
			text-decoration: none;
			color: #616367;
		}
		a.router-link-active{
			color: #2196F3;
		}
		&__title{
			margin: 0;
			padding: 10px 10px 5px;
			font-weight: bold;
		}
	}
</style>