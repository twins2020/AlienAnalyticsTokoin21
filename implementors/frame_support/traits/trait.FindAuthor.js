(function() {var implementors = {};
implementors["frame_support"] = [];
implementors["pallet_babe"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_babe/trait.Config.html\" title=\"trait pallet_babe::Config\">Config</a>&gt; <a class=\"trait\" href=\"frame_support/traits/trait.FindAuthor.html\" title=\"trait frame_support::traits::FindAuthor\">FindAuthor</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"pallet_babe/struct.Module.html\" title=\"struct pallet_babe::Module\">Module</a>&lt;T&gt;","synthetic":false,"types":["pallet_babe::Module"]}];
implementors["pallet_session"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_session/trait.Config.html\" title=\"trait pallet_session::Config\">Config</a>, Inner:&nbsp;<a class=\"trait\" href=\"frame_support/traits/trait.FindAuthor.html\" title=\"trait frame_support::traits::FindAuthor\">FindAuthor</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/trait.FindAuthor.html\" title=\"trait frame_support::traits::FindAuthor\">FindAuthor</a>&lt;&lt;T as <a class=\"trait\" href=\"pallet_session/trait.Config.html\" title=\"trait pallet_session::Config\">Config</a>&gt;::<a class=\"type\" href=\"pallet_session/trait.Config.html#associatedtype.ValidatorId\" title=\"type pallet_session::Config::ValidatorId\">ValidatorId</a>&gt; for <a class=\"struct\" href=\"pallet_session/struct.FindAccountFromAuthorIndex.html\" title=\"struct pallet_session::FindAccountFromAuthorIndex\">FindAccountFromAuthorIndex</a>&lt;T, Inner&gt;","synthetic":false,"types":["pallet_session::FindAccountFromAuthorIndex"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()