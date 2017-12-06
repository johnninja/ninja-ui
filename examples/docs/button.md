# Button 按钮
---

#### 基础用法
使用type、plain和round属性来定义 Button 的样式。

<div class="demo-block">
	<div>
		<n-button type='default'>DEFAULT</n-button>
		<n-button type='primary'>PRIMARY</n-button>
		<n-button type='danger'>DANGER</n-button>
		<n-button type='warning'>WARNING</n-button>
		<n-button type='success'>SUCCESS</n-button>
	</div>
	<div class="m-10">
		<n-button type='yellow'>YELLOW</n-button>
		<n-button type='purple'>PURPLE</n-button>
		<n-button type='gray'>GRAY</n-button>
		<n-button type='teal'>TEAL</n-button>
	</div>
</div>

::: demo

```html
<div>
  <n-button type='default'>DEFAULT</n-button>
  <n-button type='primary'>PRIMARY</n-button>
  <n-button type='danger'>DANGER</n-button>
  <n-button type='warning'>WARNING</n-button>
  <n-button type='success'>SUCCESS</n-button>
</div>
<div>
  <n-button type='yellow'>YELLOW</n-button>
  <n-button type='purple'>PURPLE</n-button>
  <n-button type='gray'>GRAY</n-button>
  <n-button type='teal'>TEAL</n-button>
</div>
```

:::

#### 禁用按钮
<div class="demo-block">
	<div>
		<n-button type='default' disabled>DEFAULT</n-button>
		<n-button type='primary' disabled>PRIMARY</n-button>
		<n-button type='danger' disabled>DANGER</n-button>
		<n-button type='warning' disabled>WARNING</n-button>
		<n-button type='success' disabled>SUCCESS</n-button>
	</div>
	<div class="m-10">
		<n-button type='yellow' disabled>YELLOW</n-button>
		<n-button type='purple' disabled>PURPLE</n-button>
		<n-button type='gray' disabled>GRAY</n-button>
		<n-button type='teal' disabled>TEAL</n-button>
	</div>
</div>

::: demo

```html
<div>
  <n-button type='default' disabled>DEFAULT</n-button>
  <n-button type='primary' disabled>PRIMARY</n-button>
  <n-button type='danger' disabled>DANGER</n-button>
  <n-button type='warning' disabled>WARNING</n-button>
  <n-button type='success' disabled>SUCCESS</n-button>
</div>
<div>
  <n-button type='yellow' disabled>YELLOW</n-button>
  <n-button type='purple' disabled>PURPLE</n-button>
  <n-button type='gray' disabled>GRAY</n-button>
  <n-button type='teal' disabled>TEAL</n-button>
</div>
```

:::


#### 按钮尺寸
通过size定义按钮尺寸
<div class="demo-block">
	<n-button>NORMAL</n-button>
	<n-button size="medium">MEDIUM</n-button>
	<n-button size="small">SMALL</n-button>
	<n-button size="mini">MINI</n-button>
</div>

:::demo
```html
<n-button>NORMAL</n-button>
<n-button size="medium">MEDIUM</n-button>
<n-button size="small">SMALL</n-button>
<n-button size="mini">MINI</n-button>
```
:::

#### Attribues

|参数|说明|类型|可选值|默认值|
|:---|----|---|-----|-----:|
|size|尺寸|string|medium,small,mini|-|
