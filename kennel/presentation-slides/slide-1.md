@parent presentation
@page slide-1 Introducing bit-docs
@description What the heck is is bit-docs? How does it relate to the two names we know and
love, DocumentCSS and DocumentJS?

# Using bit-docs with DocumentJS and DocumentCSS 

In the beginning, bit-docs sprang from the guts of DocumentJS. However, in
comparison to the monolith organizational structure of DocumentJS, bit-docs is
a modularized masterpiece, with a much cleaner API. The modularization and the
API is what enables and empowers the bit-docs plugin system.

Soon bit-docs core and plugins will stabilize. At that time, DocumentJS and
DocumentCSS will be made to use bit-docs under the hood.

This means funtionality could end up organinized a number of different ways.

## Methods of organization

Some existing plugins provide tags for just JavaScript, and future plugins will
be created specifically for CSS, so it might make sense to place those plugins
under the DocumentJS and DocumentCSS organizations, respectively.

Alternatively, it may make more sense to reserve the DocumentJS and DocumentCSS
scopes for guide content pertaining to configuration of bit-docs for JavaScript
or CSS, respectively.

### Plugins in separate scopes

One method of organization might invlove putting similar plugins under similar
organizational scopes:

```
| General                            | DocumentJS               | DocumentCSS                         |
|------------------------------------|--------------------------|-------------------------------------|
| bit-docs/tag-package               | documentjs/bit-docs-js   | documentcss/bit-docs-tag-style      |
| bit-docs/bit-docs                  | documentjs/bit-docs-dev  | documentcss/bit-docs-tag-stylesheet | 
| bit-docs/bit-docs-generate-html    | documentjs/tag-sourceref |                                     |
| bit-docs/bit-docs-generate-readme  | documentjs/type-annotate |                                     |
| bit-docs/bit-docs-glob-finder      |                          |                                     |
| bit-docs/bit-docs-highlight-line   |                          |                                     |
| bit-docs/bit-docs-html-toc         |                          |                                     |
| bit-docs/bit-docs-prettify         |                          |                                     |
| bit-docs/bit-docs-process-mustache |                          |                                     |
| bit-docs/bit-docs-tag-demo         |                          |                                     |
| bit-docs/bit-docs-tag-package      |                          |                                     |
| bit-docs/tag-sourceref             |                          |                                     |
| bit-docs/bit-docs-type-annotate    |                          |                                     |
```

However, I do feel this method of organization might cause confusion when
trying to find where a certain bit-docs plugin lives, because you've got to
think about it, take a guess, and if you get it wrong, you might end up looking
in three different places. Having plugins in three different locations might
also be confusing to new users. However, despite these concerns, there might
still be some utility to having plugins split between General, JS, and CSS.

### Plugins in one place

Another method of organization that might be worth exploring is organizing all
plugins under the bit-docs organization, while reserving the DocumentJS and
DocumentCSS organizations for configuration guides only.

DocumentJS would be comprised of detailed guides about how to document various
types of modules, large JavaScript projects, and/or JavaScript APIs. Basically,
if you have a "How do I document X in JavaScript?" question, DocumentJS should
have the answer with a detailed example.

DocumentCSS would be comprised of detailed guides on documenting CSS, and would
show examples of documenting LESS/SASS, as well as how to create a full-fledged
style guide by configuring bit-docs.

```
| General                            | DocumentJS               | DocumentCSS                  |
|------------------------------------|--------------------------|------------------------------|
| bit-docs/bit-docs                  | JavaScript guides        | CSS and styles guides        |
| bit-docs/bit-docs-dev              | JavaScript examples      | CSS examples                 |
| bit-docs/bit-docs-generate-html    | Full app example         | Full app example             |
| bit-docs/bit-docs-generate-readme  |                          |                              |
| bit-docs/bit-docs-glob-finder      |                          |                              |
| bit-docs/bit-docs-highlight-line   |                          |                              |
| bit-docs/bit-docs-html-toc         |                          |                              |
| bit-docs/bit-docs-js               |                          |                              |
| bit-docs/bit-docs-prettify         |                          |                              |
| bit-docs/bit-docs-process-mustache |                          |                              |
| bit-docs/bit-docs-tag-demo         |                          |                              |
| bit-docs/bit-docs-tag-package      |                          |                              |
| bit-docs/bit-docs-tag-package      |                          |                              |
| bit-docs/bit-docs-tag-sourceref    |                          |                              |
| bit-docs/bit-docs-tag-stylessheet  |                          |                              |
| bit-docs/bit-docs-type-annotate    |                          |                              |
| bit-docs/bit-docs-type-annotate    |                          |                              |
```

With this method of organization, all plugins will be in one place under the
bit-docs scope, and so they will be easier to locate. The DocumentJS and
DocumentCSS organizations would be abundant with information about how to
configure bit-docs for documenting either JavaScript or CSS, respectively,
without being cluttered up with plugin repos.

## Conclusion

Eventually bit-docs will be renamed to something like "FidoJS", and the FidoJS
scope will focus on bringing the low-level documentation of plugin APIs
together in one place.

Regardless of where plugins live, the DocumentJS and DocumentCSS scopes will
contain lots of guides for their respective unique types of documentation,
tailored to their respective audiences.

Whether or not the DocumentJS and DocumentCSS scopes should own the few plugins
that will make sense to be completely categorized as JavaScript or CSS only, is
still up in the air. Most plugins tend to fall in-between, and since this is
such a large majority, it might make sense to just keep all under bit-docs.

Eventually, we will need to decide on one of these methods of organization for
where plugins live. I think it's important to reserve FidoJS for low-level
documentation, and DocumentJS or DocumentCSS for high-level guides.
