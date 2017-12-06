<template>
	<div 
		class="f-col"
		:class="'f-col-'+span"
		:style="style">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name: 'NCol',
		props: {
			span: {
				type: Number,
				default: 24
			}
		},
		computed: {
			style(){
				let style = {};
				let gutter = this.$parent.gutter;

				if (gutter) {
					style.paddingLeft = gutter/2 + 'px';
					style.paddingRight = gutter/2 + 'px';
				}
				return style;
			}
		}
	}
</script>