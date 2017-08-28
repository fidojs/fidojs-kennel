@parent presentation
@page slide-1 Introduction
@description Where will bit-docs fit in with DocumentJS and DocumentCSS?

@body

# DocumentJS 👉 DocumentCSS 👉 bit-docs

<span class="middle">
<span style="font-size: 30px;">Now 👉</span>
<img src="/img/documentjs.png" alt="image" width="150"> powers
<img src="/img/documentcss.png" alt="image" width="150">
</span>

- DocumentJS 👉 Monolith framework; standalone.
- DocumentCSS 👉 Uses DocumentJS under the hood.
- bit-docs 👉 Modular API and plugins derived from DocumentJS.

<span class="middle">
<span style="font-size: 30px;">Future 👉</span>
<img src="/img/fido.png" alt="image"> SUPER POWERS
<img src="/img/documentjs.png" alt="image" width="150"> and 
<img src="/img/documentcss.png" alt="image" width="150">
</span>

- FidoJS 👉 Low-level plugin [API documentation](http://localhost:8080/index.html).
- DocumentJS 👉 High-level tutorials on how to document JavaScript using FidoJS.
- DocumentCSS 👉 High-level tutorials on how to document CSS using FidoJS.

```
     [source files]
     /            \
[DocumentJS] [DocumentCSS]
     \            /
     |______,_____|
            |
  [bit-docs / FidoJS]
            |
      distributable
```

## Methods of organization

### Plugins in separate scopes

```
| General                            | DocumentJS                        | DocumentCSS                         |
|------------------------------------|-----------------------------------|-------------------------------------|
| bit-docs/bit-docs                  | documentjs/bit-docs-dev           | documentcss/bit-docs-tag-stylesheet | 
| bit-docs/bit-docs-generate-html    | documentjs/bit-docs-js            | documentcss/bit-docs-tag-style      |
| bit-docs/bit-docs-generate-readme  | documentjs/bit-docs-tag-sourceref |                                     |
| bit-docs/bit-docs-glob-finder      | documentjs/bit-docs-type-annotate |                                     |
| bit-docs/bit-docs-highlight-line   |                                   |                                     |
| bit-docs/bit-docs-html-toc         |                                   |                                     |
| bit-docs/bit-docs-prettify         |                                   |                                     |
| bit-docs/bit-docs-process-mustache |                                   |                                     |
| bit-docs/bit-docs-tag-demo         |                                   |                                     |
| bit-docs/bit-docs-tag-package      |                                   |                                     |
```

### Plugins in one place

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

## Looking to the future

Reserve FidoJS for low-level documentation, and DocumentJS/DocumentCSS for
high-level guides.
