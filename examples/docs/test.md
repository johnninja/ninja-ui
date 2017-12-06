# Button 按钮
---

#### 基础用法
使用type、plain和round属性来定义 Button 的样式。

<div class="demo-block">
	<div>
		<n-button type='primary'>PRIMARY</n-button>
		<n-button type='danger'>DANGER</n-button>
		<n-button type='warning'>WARNING</n-button>
		<n-button type='success'>SUCCESS</n-button>
		<n-button type='yellow'>YELLOW</n-button>
		<n-button type='purple'>PURPLE</n-button>
		<n-button type='gray'>GRAY</n-button>
		<n-button type='teal'>TEAL</n-button>
	</div>
	<div class="m-10">
		<n-button type='primary'>PRIMARY</n-button>
		<n-button type='success' size="medium">SUCCESS</n-button>
		<n-button type='danger' size="small">DANGER</n-button>
		<n-button type='warning' size="mini">WARNING</n-button>
	</div>
</div>

::: demo

```html
<div>
  <n-button type='primary'>PRIMARY</n-button>
  <n-button type='danger'>DANGER</n-button>
  <n-button type='warning'>WARNING</n-button>
  <n-button type='success'>SUCCESS</n-button>
  <n-button type='yellow'>YELLOW</n-button>
  <n-button type='purple'>PURPLE</n-button>
  <n-button type='gray'>GRAY</n-button>
  <n-button type='teal'>TEAL</n-button>
</div>
<div>
  <n-button type='primary'>PRIMARY</n-button>
  <n-button type='success' size="medium">SUCCESS</n-button>
  <n-button type='danger' size="small">DANGER</n-button>
  <n-button type='warning' size="mini">WARNING</n-button>
</div>
```

:::

#### Attribues

|参数|说明|类型|可选值|默认值|
|:---|----|---|-----|-----:|
|size|尺寸|string|medium,small,mini|-|
