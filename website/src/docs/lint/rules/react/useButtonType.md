---
title: Lint Rule react/useButtonType
layout: layouts/rule.liquid
description: Enforces a `type` attribute for `button`
eslint-rule: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
eleventyNavigation:
	key: lint-rules/react/useButtonType
	parent: lint-rules
	title: react/useButtonType
---

# react/useButtonType

This rules enforces a `type` attribute for `button` elements and checks if it's value is "button", "submit" or "reset", based on the `button` [spec](https://www.w3.org/TR/html4/interact/forms.html#adef-type-BUTTON).

<!-- GENERATED:START(hash:20f311752a1d6c45a8fcb082b069689afb1e15a5,id:description) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/lint-rules` to update. -->
**ESLint Equivalent:** [button-has-type](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)
<!-- GENERATED:END(id:description) -->

<!-- GENERATED:START(hash:4435ca2b39a4f43965ae7811a9492fa9008ecbc7,id:examples) Everything below is automatically generated. DO NOT MODIFY. Run `./rome run scripts/generated-files/lint-rules-docs` to update. -->
## Examples

### Invalid

{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">button</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1</span> <strong>lint/react/useButtonType</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide an explicit </span><span style="color: Tomato;"><strong>type</strong></span><span style="color: Tomato;"> prop on </span><span style="color: Tomato;"><strong>button</strong></span><span style="color: Tomato;"> elements.</span>

    &lt;<span class="token variable">button</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">The default button type of &quot;submit&quot; causes page reloads and is not</span>
    <span style="color: DodgerBlue;">typical behavior in a React application.</span>

</code></pre>{% endraw %}

---

{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">button</span> <span class="token attr-name">type</span><span class="token operator">=</span><span class="token string">&apos;foo&apos;</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1:8</span> <strong>lint/react/useButtonType</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide an explicit </span><span style="color: Tomato;"><strong>type</strong></span><span style="color: Tomato;"> prop on </span><span style="color: Tomato;"><strong>button</strong></span><span style="color: Tomato;"> elements.</span>

    &lt;<span class="token variable">button</span> <span class="token attr-name">type</span><span class="token operator">=</span><span class="token string">&apos;foo&apos;</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;
            <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">The default button type of &quot;submit&quot; causes page reloads and is not</span>
    <span style="color: DodgerBlue;">typical behavior in a React application.</span>

</code></pre>{% endraw %}

---

{% raw %}<pre class="language-text"><code class="language-text"><span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;foo&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1</span> <strong>lint/react/useButtonType</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide an explicit </span><span style="color: Tomato;"><strong>type</strong></span><span style="color: Tomato;"> prop on </span><span style="color: Tomato;"><strong>button</strong></span><span style="color: Tomato;"> elements.</span>

    <span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;foo&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">The default button type of &quot;submit&quot; causes page reloads and is not</span>
    <span style="color: DodgerBlue;">typical behavior in a React application.</span>

</code></pre>{% endraw %}

---

{% raw %}<pre class="language-text"><code class="language-text"><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;foo&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dashed; text-decoration-line: underline;">file.tsx:1</span> <strong>lint/react/useButtonType</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Provide an explicit </span><span style="color: Tomato;"><strong>type</strong></span><span style="color: Tomato;"> prop on </span><span style="color: Tomato;"><strong>button</strong></span><span style="color: Tomato;"> elements.</span>

    <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;foo&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">The default button type of &quot;submit&quot; causes page reloads and is not</span>
    <span style="color: DodgerBlue;">typical behavior in a React application.</span>

</code></pre>{% endraw %}

### Valid

{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">div</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">div</span> <span class="token attr-name">type</span><span class="token operator">=</span><span class="token string">&quot;type&quot;</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">div</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">button</span> <span class="token attr-name">type</span><span class="token operator">=</span><span class="token string">&quot;button&quot;</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">button</span> <span class="token attr-name">type</span><span class="token operator">=</span><span class="token string">&quot;submit&quot;</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text">&lt;<span class="token variable">button</span> <span class="token attr-name">type</span><span class="token operator">=</span><span class="token string">&quot;reset&quot;</span>&gt;child&lt;<span class="token operator">/</span><span class="token variable">button</span>&gt;</code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;div&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;div&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;type&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;button&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;submit&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token variable">React</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;reset&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;div&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;div&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;type&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;button&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;submit&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
{% raw %}<pre class="language-text"><code class="language-text"><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&apos;button&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token variable">type</span><span class="token punctuation">:</span> <span class="token string">&apos;reset&apos;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;child&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>{% endraw %}
<!-- GENERATED:END(id:examples) -->