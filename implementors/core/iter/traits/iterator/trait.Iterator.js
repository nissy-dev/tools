(function() {var implementors = {};
implementors["rome_js_formatter"] = [{"text":"impl&lt;Iter, Item, Context&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_js_formatter/struct.FormattedIter.html\" title=\"struct rome_js_formatter::FormattedIter\">FormattedIter</a>&lt;Iter, Item, Context&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = Item&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Item: <a class=\"trait\" href=\"rome_js_formatter/trait.IntoFormat.html\" title=\"trait rome_js_formatter::IntoFormat\">IntoFormat</a>&lt;Context&gt;,&nbsp;</span>","synthetic":false,"types":["rome_js_formatter::FormattedIter"]}];
implementors["rome_rowan"] = [{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/syntax/struct.SyntaxNodeChildren.html\" title=\"struct rome_rowan::syntax::SyntaxNodeChildren\">SyntaxNodeChildren</a>&lt;L&gt;","synthetic":false,"types":["rome_rowan::syntax::node::SyntaxNodeChildren"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/syntax/struct.SyntaxElementChildren.html\" title=\"struct rome_rowan::syntax::SyntaxElementChildren\">SyntaxElementChildren</a>&lt;L&gt;","synthetic":false,"types":["rome_rowan::syntax::node::SyntaxElementChildren"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/syntax/struct.Preorder.html\" title=\"struct rome_rowan::syntax::Preorder\">Preorder</a>&lt;L&gt;","synthetic":false,"types":["rome_rowan::syntax::node::Preorder"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/syntax/struct.PreorderWithTokens.html\" title=\"struct rome_rowan::syntax::PreorderWithTokens\">PreorderWithTokens</a>&lt;L&gt;","synthetic":false,"types":["rome_rowan::syntax::node::PreorderWithTokens"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/syntax/struct.SyntaxTriviaPiecesIterator.html\" title=\"struct rome_rowan::syntax::SyntaxTriviaPiecesIterator\">SyntaxTriviaPiecesIterator</a>&lt;L&gt;","synthetic":false,"types":["rome_rowan::syntax::trivia::SyntaxTriviaPiecesIterator"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"enum\" href=\"rome_rowan/enum.TokenAtOffset.html\" title=\"enum rome_rowan::TokenAtOffset\">TokenAtOffset</a>&lt;T&gt;","synthetic":false,"types":["rome_rowan::utility_types::TokenAtOffset"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstNodeListIterator.html\" title=\"struct rome_rowan::AstNodeListIterator\">AstNodeListIterator</a>&lt;L, N&gt;","synthetic":false,"types":["rome_rowan::ast::AstNodeListIterator"]},{"text":"impl&lt;L, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstSeparatorIterator.html\" title=\"struct rome_rowan::AstSeparatorIterator\">AstSeparatorIterator</a>&lt;L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;,&nbsp;</span>","synthetic":false,"types":["rome_rowan::ast::AstSeparatorIterator"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstSeparatedListElementsIterator.html\" title=\"struct rome_rowan::AstSeparatedListElementsIterator\">AstSeparatedListElementsIterator</a>&lt;L, N&gt;","synthetic":false,"types":["rome_rowan::ast::AstSeparatedListElementsIterator"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.Language.html\" title=\"trait rome_rowan::syntax::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"rome_rowan/trait.AstNode.html\" title=\"trait rome_rowan::AstNode\">AstNode</a>&lt;Language = L&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.AstSeparatedListNodesIterator.html\" title=\"struct rome_rowan::AstSeparatedListNodesIterator\">AstSeparatedListNodesIterator</a>&lt;L, N&gt;","synthetic":false,"types":["rome_rowan::ast::AstSeparatedListNodesIterator"]},{"text":"impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.SyntaxKind.html\" title=\"trait rome_rowan::syntax::SyntaxKind\">SyntaxKind</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.ParsedChildrenIntoIterator.html\" title=\"struct rome_rowan::ParsedChildrenIntoIterator\">ParsedChildrenIntoIterator</a>&lt;'a, K&gt;","synthetic":false,"types":["rome_rowan::syntax_factory::parsed_children::ParsedChildrenIntoIterator"]},{"text":"impl&lt;'a, K:&nbsp;<a class=\"trait\" href=\"rome_rowan/syntax/trait.SyntaxKind.html\" title=\"trait rome_rowan::syntax::SyntaxKind\">SyntaxKind</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rome_rowan/struct.ParsedChildrenIterator.html\" title=\"struct rome_rowan::ParsedChildrenIterator\">ParsedChildrenIterator</a>&lt;'a, K&gt;","synthetic":false,"types":["rome_rowan::syntax_factory::parsed_children::ParsedChildrenIterator"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()