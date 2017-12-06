<template>
	<div
	class="f-row"
	:style="style">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name: 'NRow',
		props: {
			gutter: Number
		},
		computed: {
			style(){
				var ret = {};
				if (this.gutter) {
					ret.marginLeft = `-${this.gutter/2}px`;
					ret.marginRight = ret.marginLeft;
				}
				return ret;
			}
		}
	}
</script>