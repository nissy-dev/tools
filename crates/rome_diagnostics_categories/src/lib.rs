use std::str::FromStr;

/// Metadata for a diagnostic category
///
/// This type cannot be instantiated outside of the `rome_diagnostics_categories`
/// crate, which serves as a registry for all known diagnostic categories
/// (currently this registry is fully static and generated at compile time)
#[derive(Debug)]
pub struct Category {
    name: &'static str,
    link: Option<&'static str>,
}

impl Category {
    /// Return the name of this category
    pub fn name(&self) -> &'static str {
        self.name
    }

    /// Return the hyperlink associated with this category if it has one
    ///
    /// This will generally be a link to the documentation page for diagnostics
    /// with this category
    pub fn link(&self) -> Option<&'static str> {
        self.link
    }
}

// Import the code generated by the build script from the content of `src/categories.rs`
include!(concat!(env!("OUT_DIR"), "/categories.rs"));
