---
title: Lint Rule useHeadingContent
parent: lint/rules/index
---

# useHeadingContent (since vnext)

Put your description here

## Examples

### Invalid

```jsx
var a = 1;
a = 2;
```

<pre class="language-text"><code class="language-text">nursery/useHeadingContent.js:2:1 <a href="https://docs.rome.tools/lint/rules/useHeadingContent">lint/nursery/useHeadingContent</a> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<strong><span style="color: Orange;">  </span></strong><strong><span style="color: Orange;">⚠</span></strong> <span style="color: Orange;">Variable is read here</span>
  
    <strong>1 │ </strong>var a = 1;
<strong><span style="color: Tomato;">  </span></strong><strong><span style="color: Tomato;">&gt;</span></strong> <strong>2 │ </strong>a = 2;
   <strong>   │ </strong><strong><span style="color: Tomato;">^</span></strong>
    <strong>3 │ </strong>
  
<strong><span style="color: rgb(38, 148, 255);">  </span></strong><strong><span style="color: rgb(38, 148, 255);">ℹ</span></strong> <span style="color: rgb(38, 148, 255);">This note will give you more information</span>
  
</code></pre>

## Valid

```jsx
var a = 1;
```

## Related links

- [Disable a rule](/linter/#disable-a-lint-rule)
- [Rule options](/linter/#rule-options)
