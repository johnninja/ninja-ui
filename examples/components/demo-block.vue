<template>
  <div class="wrapper">
    <div class="container" :style="{display: isExpand ? 'block' : 'none'}">
      <slot name="highlight"></slot>
    </div>
    <span class="toggle-show" @click="toggle">{{isExpand ? '隐藏代码': '显示代码'}}</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isExpand: false
      }
    },
    methods: {
      toggle () {
        this.isExpand = !this.isExpand
      }
    }
  }
</script>
<style lang="less">
	.hljs-doctype {
	    color: #999
	}

	.hljs-tag {
	    color: #3e76f6
	}

	.hljs-attribute {
	    color: #e96900
	}

	.hljs-value {
	    color: #42b983
	}

	.hljs-keyword {
	    color: #e96900
	}

	.hljs-string {
	    color: #42b983
	}

	.hljs-comment {
	    color: #b3b3b3
	}

	.hljs-operator .hljs-comment {
	    color: #525252
	}

	.hljs-regexp {
	    color: #af7dff
	}

	.hljs-built_in {
	    color: #2db7f5
	}

	.css .hljs-class {
	    color: #e96900
	}

	.css .hljs-number,.javascript .hljs-number {
	    color: #fc1e70
	}

	.css .hljs-attribute {
	    color: #af7dff
	}

	.css .hljs-important {
	    color: red
	}

	.actionscript .hljs-literal,.javascript .hljs-literal {
	    color: #fc1e70
	}

	pre {
	    padding: 0;
	    margin: 0;
	}

	code {
	    display: inline-block;
	    background: #f7f7f7;
	    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
	    margin: 0 3px;
	    padding: 1px 5px;
	    border-radius: 3px;
	    color: #666;
	    border: 1px solid #eee;
	}

	pre code {
	    display: inline;
	    margin: 0;
	    padding: 0;
	    border: none;
	    background: transparent;
	}
	.demo-block{
		padding: 32px;
		border: 1px solid #e2ecf4;
		border-bottom: none;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.wrapper{
		border: 1px solid #e2ecf4;
		border-top: none;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.container{
		padding: 32px;
		line-height: 1.5;
		background-color: #f8f8f8;
		border-top: 1px solid #e2ecf4;
		overflow: hidden;
	}
	.toggle-show{
		display: block;
		padding: 5px 0;
		width: 100%;
		font-size: 12px;
		color: #c5d9e8;
		border-top: 1px solid #e2ecf4;
		cursor: pointer;
		text-align: center;
	}
	pre{
		margin: 0;
		font-size: 14px;
	}
	.demo-block{
		.m-10{
			margin-top: 10px;
		}
	}
</style>